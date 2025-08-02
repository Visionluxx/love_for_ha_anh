
// steps
// thêm cung tên (tên bắn trúng rồi làm gì thì làm)
// chuyển màu heart:
  // tim chuyển đỏ, đập, bóng xoay màu (từ xanh --> đỏ)--> nổ 
// nổ ra tim canvas
// thêm tên em

function start(){
  document.querySelector(".begin-heart").classList.add("animate-class");
  setTimeout(function ok() {
    document.querySelector(".animate-class").style.display = "none"
    document.querySelector(".contain-main").style.display = "block"
  }, 600);
}


