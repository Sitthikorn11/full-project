const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


// ให้ Express ใช้ไฟล์ในโฟลเดอร์ public
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'index')));
app.use('/pix',express.static(path.join(__dirname, 'pix')));
app.use(express.static(path.join(__dirname, 'index2')));
app.use(express.static(path.join(__dirname, 'login')));
// Route หน้าแรก index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index','index_web.html'));
});

// Route หน้ารายละเอียด details.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2','low.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2','item.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2','recy.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login','login.html'));
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
