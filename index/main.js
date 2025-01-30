// ฟังก์ชันตรวจสอบฟอร์มการติดต่อ
function validateForm(event) {
  event.preventDefault();  // ป้องกันการส่งฟอร์มโดยอัตโนมัติ
  
  // ดึงค่าจากฟอร์ม
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // ตรวจสอบว่าแต่ละช่องถูกกรอกครบหรือไม่
  if (name === "" || email === "" || message === "") {
    alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
  } else {
    // ถ้าผ่านการตรวจสอบ ให้แสดงข้อความต้อนรับ
    alert("ขอบคุณที่ติดต่อเรา!");
    // เคลียร์ข้อมูลในฟอร์มหลังจากส่ง
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
}

// เพิ่มเหตุการณ์เมื่อฟอร์มถูกส่ง
document.querySelector('form').addEventListener('submit', validateForm);

// ฟังก์ชันสำหรับปุ่ม Login
document.getElementById('loginButton').addEventListener('click', function () {
  alert('เข้าสู่ระบบ'); // เปลี่ยนเป็นฟังก์ชันหรือ URL ที่ต้องการ
});

// ฟังก์ชันลาก #priceTicker
const priceTicker = document.getElementById('priceTicker');
let isDragging = false;
let offsetX = 0, offsetY = 0;

priceTicker.addEventListener('mousedown', function(e) {
  isDragging = true;
  e.preventDefault();
  offsetX = e.clientX - priceTicker.getBoundingClientRect().left;
  offsetY = e.clientY - priceTicker.getBoundingClientRect().top;
  priceTicker.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
      e.preventDefault();
      priceTicker.style.left = `${e.clientX - offsetX}px`;
      priceTicker.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
  priceTicker.style.cursor = 'grab';
});

// เพิ่มรายการราคาสินค้า
const priceData = [
  "ทองแดง: 200 บาท/กิโลกรัม",
        "อลูมิเนียม: 150 บาท/กิโลกรัม",
        "เหล็ก: 50 บาท/กิโลกรัม",
        "เครื่องใช้ไฟฟ้า: 300 บาท/ชิ้น",
        "กระดาษ: 10 บาท/กิโลกรัม",
        "ขวดพลาสติก: 5 บาท/กิโลกรัม",
        "ขวดแก้ว: 2 บาท/ขวด",
        "กล่องกระดาษลัง: 8 บาท/กิโลกรัม",
        "ทองเหลือง: 180 บาท/กิโลกรัม",
        "สแตนเลส: 120 บาท/กิโลกรัม",
        "แบตเตอรี่เก่า: 400 บาท/ลูก",
        "สายไฟเก่า: 250 บาท/กิโลกรัม",
        "มอเตอร์ไฟฟ้าเก่า: 220 บาท/กิโลกรัม",
        "ถังแก๊สเก่า: 500 บาท/ใบ",
        "คอมพิวเตอร์เก่า: 500 บาท/เครื่อง",
        "โทรศัพท์มือถือเก่า: 300 บาท/เครื่อง",
        "แผงวงจรอิเล็กทรอนิกส์: 150 บาท/กิโลกรัม",
        "แบตเตอรี่ลิเธียม: 50 บาท/กิโลกรัม",
        "เครื่องปรับอากาศเก่า: 800 บาท/เครื่อง",
        "ทีวีเก่า: 200 บาท/เครื่อง",
        "หม้อและกระทะอลูมิเนียม: 100 บาท/กิโลกรัม",
        "โซฟาเก่า: 150 บาท/ตัว",
        "เฟอร์นิเจอร์ไม้เก่า: 100 บาท/ชิ้น"
];

const priceList = document.querySelector('.price-list');
priceData.forEach(price => {
  const li = document.createElement('li');
  li.textContent = price;
  priceList.appendChild(li);
});
