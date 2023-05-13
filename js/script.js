const svg1 = document.querySelector(".svg-1");
const svg2 = document.querySelector(".svg-2");
const navLi = document.querySelectorAll(".nav-li");
const navSvg = document.querySelectorAll(".nav-svg");
const blueLike = document.querySelector(".blue-like");
const grayLike = document.querySelector(".gray-like");
const cardDiv1 = document.querySelector(".card-div-1");
const cardDiv2 = document.querySelector(".card-div-2");
const showMore1 = document.querySelector(".show-more-1");
const showMore2 = document.querySelector(".show-more-2");
const mainBlueLike = document.querySelector(".main-blue-like");
const messagingSection = document.querySelector(".messaging-section");

const iconsArray = [];
const buttonsArray = [];

blueLike.addEventListener("click", () => {
    mainBlueLike.style.display = "none";
    grayLike.style.display = "block";
});

showMore1.addEventListener("click", () => {
    showMore1.style.display = "none";
    showMore2.style.display = "block";
    cardDiv1.style.display = "block";
    cardDiv2.style.display = "block";

    //Soft fade effect for card div
    setTimeout(() => {
        showMore1.style.opacity = "0";
        showMore2.style.opacity = "1";
        cardDiv1.style.opacity = "1";
        cardDiv2.style.opacity = "1";
    },10);
});

showMore2.addEventListener("click", () => {
    showMore1.style.display = "block";
    showMore2.style.display = "none";
    cardDiv1.style.display = "none";
    cardDiv2.style.display = "none";

    //Soft fade effect for card div
    setTimeout(() => {
        showMore1.style.opacity = "1";
    },10);
});


isActive = true;
svg2.style.display = "none";
messagingSection.style.top = "95vh";

messagingSection.addEventListener("click", () => {
    if (isActive === true) {
        messagingSection.style.top = "16vh";
        svg1.style.display = "none";
        svg2.style.display = "block";
        isActive = false;
    } else if (isActive === false) {
        messagingSection.style.top = "95vh";
        svg1.style.display = "block";
        svg2.style.display = "none";
        isActive = true;
    }
});

//To access the svg at once, we first import it into the array.
navLi.forEach((e) => {
    buttonsArray.push(e);
});

navSvg.forEach((e) => {
    iconsArray.push(e);
});

for (let x = 0; x < 8; x++) {
  buttonsArray[x].addEventListener("mouseover", () => {
      iconsArray[x].style.fill = "black";
  });

  buttonsArray[x].addEventListener("mouseout", () => {
      iconsArray[x].style.fill = "#666666";
  });
}