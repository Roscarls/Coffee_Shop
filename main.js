let search = document.querySelector('.search-box');

document.querySelector("#search-icon").onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector("#menu-icon").onclick = () => {
    navbar.classList.toggle('active'); 
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active'); 
    search.classList.remove('active');
}


let header = document.querySelector('header');
window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow' , window.scrollY > 0);
});

//Cart
// รับอ้างถึง HTML elements ด้วย class
const quantityElement = document.getElementById('quantity');
const changeButtons = document.querySelectorAll('.changeQuantity');

// สร้างตัวแปรเพื่อเก็บค่า quantity
let currentQuantity = 0;

// เพิ่ม Event Listener สำหรับทุกปุ่มเพิ่มและลด Quantity
changeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const action = button.getAttribute('data-action');
        
        if (action === 'increase') {
            // เพิ่มค่า quantity และแสดงค่าใหม่
            currentQuantity++;
        } else if (action === 'decrease') {
            // ตรวจสอบให้แน่ใจว่าค่า quantity ไม่ต่ำกว่า 0
            if (currentQuantity > 0) {
                // ลดค่า quantity และแสดงค่าใหม่
                currentQuantity--;
            }
        }

        // แสดงค่า quantity ใหม่
        quantityElement.textContent = currentQuantity;
    });
});

