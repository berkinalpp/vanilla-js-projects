let counter = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > 0) {
      value.style.color = "green";
      value.style.fontSize = "25px";
      value.style.fontWeight = "bold";
    } else if (counter < 0) {
      value.style.color = "red";
      value.style.fontSize = "25px";
      value.style.fontWeight = "bold";
    } else {
      value.style.color = "blue";
      value.style.fontSize = "25px";
      value.style.fontWeight = "bold";
    }
    value.textContent = counter;
  });
});
