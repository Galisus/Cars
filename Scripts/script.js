document.getElementById("main_actions").onclick = function () {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
};

var buttons = document.getElementsByClassName("car_button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("price").scrollIntoView({ behavior: "smooth" });
  };
}

document.getElementById("price_action").onclick = function () {
  if (document.getElementById("name").value === "") {
    alert("Заполните поле 'Имя'!");
  } else if (document.getElementById("tel").value === "") {
    alert("Заполните поле 'Телефон'!");
  } else if (document.getElementById("car").value === "") {
    alert("Выберите автомобиль!");
  } else {
    alert("Спасибо за заявку. Мы свяжемся с Вами в ближайшее время!");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let layer = document.querySelector(".price_img");
  document.addEventListener("mousemove", (event) => {
    layer.style.transform =
      "translate3d(" +
      (event.clientX * 0.5) / 8 +
      "px," +
      (event.clientY * 0.3) / 8 +
      "px,0px)";
  });

  const elem = document.querySelector(".main");
  document.addEventListener("scroll", () => {
    elem.style.backgroundPositionX = "0" + 0.6 * window.pageYOffset + "px";
  });
});
