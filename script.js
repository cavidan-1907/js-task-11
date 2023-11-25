
let section = document.querySelector("#section");
let eye = document.querySelector("#eyeEmoji");
let emoji1 = document.querySelector("#emoji-btn1");
let emoji2 = document.querySelector("#emoji-btn2");
let emoji3 = document.querySelector("#emoji-btn3");
let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let btn = document.querySelector("#btn");
const originalBackgroundColor = section.style.backgroundColor;
const eyetextcontent=eye.textContent;
const btntextContent=btn.textContent
emoji1.addEventListener("click", () => {
    eye.textContent = emoji1.textContent;
    section.style.backgroundColor = "red";
    btn.textContent = "Thanks for feedback! ";
    div2.style.display = "none";
    div3.style.display = "none";


})
emoji2.addEventListener("click", () => {
    eye.textContent = emoji2.textContent;
    btn.textContent = "Thanks for feedback! ";
    section.style.backgroundColor = "blue";
    div1.style.display = "none";
    div3.style.display = "none";
})
emoji3.addEventListener("click", () => {
    eye.textContent = emoji3.textContent;
    btn.textContent = "Thanks for feedback! ";
    section.style.backgroundColor = "green";
    div2.style.display = "none";
    div1.style.display = "none";
})
btn.addEventListener("click", () => {
    div1.style.display = "block";
    div3.style.display = "block";
    div2.style.display = "block";
    section.style.backgroundColor = originalBackgroundColor;
    eye.textContent=eyetextcontent;
    btn.textContent=btntextContent;;
})




