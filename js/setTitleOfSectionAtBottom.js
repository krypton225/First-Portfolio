export default function setTitleOfSectionAtBottom(titleName) {
    let mySpan = document.createElement("span");
    mySpan.classList.add("text-line");

    let myText = document.createTextNode(titleName);
    mySpan.appendChild(myText);

    return mySpan;
}