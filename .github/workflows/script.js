// Lấy tất cả các ảnh trong gallery
const images = document.querySelectorAll('.gallery img');

// Lấy phần tử hiển thị chú thích
const caption = document.getElementById('caption');

// Gán sự kiện cho từng ảnh
images.forEach((img) => {
  // Khi di chuột vào ảnh
  img.addEventListener('mouseover', () => {
    caption.textContent = `Bạn đang xem: ${img.alt}`;
    caption.style.color = "blue";
  });

  // Khi rời chuột khỏi ảnh
  img.addEventListener('mouseout', () => {
    caption.textContent = "Di chuột vào ảnh để xem thông tin";
    caption.style.color = "#444";
  });
});
