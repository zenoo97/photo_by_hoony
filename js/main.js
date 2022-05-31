const closeOpenImg = document.querySelector(".closeOpenImg");

closeOpenImg.addEventListener("mouseover", changePic);
closeOpenImg.addEventListener("mouseout", originPic);

function changePic() {
  closeOpenImg.src = "./img/open.png";
}
function originPic() {
  closeOpenImg.src = "./img/close.png";
}
