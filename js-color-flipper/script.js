const showInfoDOM = document.query;
const colorInfoDOM = document.querySelector(".colorInfo");
const changeBtnDOM = document.querySelector(".changeBtn");
const body = document.getElementsByTagName("body");

const getRandomColor = () => {
  const lettersAndNumbers = "0123456789ABCDEF".split("");
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color +=
      lettersAndNumbers[Math.floor(Math.random() * lettersAndNumbers.length)];
  }
  body[0].style.background = color;
  colorInfoDOM.innerHTML = color;
  colorInfoDOM.style.color = color;
};

changeBtnDOM.addEventListener("click", getRandomColor);
