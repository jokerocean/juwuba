let currentIndex = 0;
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateSlidePosition() {
    const offset = -currentIndex * 100; // 根据当前索引计算偏移量
    track.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // 循环到最后一张
    updateSlidePosition();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems; // 循环到第一张
    updateSlidePosition();
}

// 自动轮播功能（可选）
setInterval(nextSlide, 5000); // 每5秒切换一次