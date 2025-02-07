const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const saltRounds = 10; // ระดับความปลอดภัยของ bcrypt

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// เชื่อมต่อกับ MySQL โดยใช้ค่าจากไฟล์ .env
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'web',
    password: process.env.DB_PASS || '5555',
    database: process.env.DB_NAME || 'user',
});

db.connect((err) => {
    if (err) {
        console.error('❌ Error connecting to the database:', err);
        return;
    }
    console.log('✅ Connected to the MySQL database!');
});

// ให้ Express ใช้ไฟล์ในโฟลเดอร์ public
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'index')));
app.use(express.static(path.join(__dirname, 'index2')));
app.use(express.static(path.join(__dirname, 'login')));
app.use('/pix', express.static(path.join(__dirname, 'pix')));

// เส้นทางสำหรับไฟล์ HTML
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index', 'index_web.html')));
app.get('/low', (req, res) => res.sendFile(path.join(__dirname, 'index2', 'low.html')));
app.get('/item', (req, res) => res.sendFile(path.join(__dirname, 'index2', 'item.html')));
app.get('/recy', (req, res) => res.sendFile(path.join(__dirname, 'index2', 'recy.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login', 'login.html')));

// ✅ การลงทะเบียนผู้ใช้ (Register)
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    const checkQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
    db.query(checkQuery, [username, email], async (err, result) => {
        if (err) {
            console.error('❌ Error checking user: ', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (result.length > 0) {
            return res.status(400).json({ message: 'Username or email already exists.' });
        }

        // ✅ เข้ารหัสรหัสผ่านก่อนเก็บลงฐานข้อมูล
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(insertQuery, [username, email, hashedPassword], (err, result) => {
            if (err) {
                console.error('❌ Error inserting user: ', err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            return res.status(201).json({ message: '✅ Registration successful!' });
        });
    });
});

// ✅ การเข้าสู่ระบบผู้ใช้ (Login)
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error' });

        if (result.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        const user = result[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful', username: user.username });
    });
});

// ✅ เส้นทางสำหรับการติดต่อ (Contact Form)
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
    }

    const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error('❌ Error inserting message:', err);
            return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการบันทึกข้อความ' });
        }

        res.status(201).json({ message: '✅ ข้อความถูกส่งเรียบร้อย!' });
    });
});

// 🚀 เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
