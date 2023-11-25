
const section = document.querySelector("#section");
const eye = document.querySelector("#eyeEmoji");
const emojis = document.querySelectorAll("#emoji-btn");
const divs = document.querySelectorAll("#div");
const btn = document.querySelector("#btn");
const originalBackgroundColor = section.style.backgroundColor;
const eyeTextContent = eye.textContent;
const btntextContent=btn.textContent


emojis.forEach((emoji, index) => {
    emoji.addEventListener("click", () => {
        eye.textContent = emoji.textContent;
        section.style.backgroundColor = getBackgroundColor(index);
        btn.textContent = "Thanks for feedback!";
        divs.forEach((div, i) => {
            div.style.display = i !== index ? "none" : "block";
        });
    });
});
btn.addEventListener("click", () => {
    divs.forEach((div) => {
        div.style.display = "block";
    });
    section.style.backgroundColor = originalBackgroundColor;
    eye.textContent = eyeTextContent;
    btn.textContent=btntextContent;
});
function getBackgroundColor(index) {
    const colors = ["red", "blue", "green"];
    return colors[index] || originalBackgroundColor;
}
