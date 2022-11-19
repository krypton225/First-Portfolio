import setTitleOfSectionAtBottom from "./setTitleOfSectionAtBottom.js";

export default function addHighIndexWithAppendTitle(sectionName, titleSection) {
    sectionName.classList.add("high-index");

    if (sectionName !== "homeSection") {
        sectionName.appendChild(setTitleOfSectionAtBottom(titleSection));
    }
}