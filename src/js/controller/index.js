import $ from "../selector.js";
import { MSG } from "../constants.js";
import { checkNamesValidation, checkNumberValidation } from "../model/validation.js";
import { renderCarPlayerSections } from "../view/index.js";
import { startGame, resetGame } from "./game.js";
function inputNames() {
    if (checkNamesValidation($("#names input").value)) {
        $("#names input").setAttribute("readonly", "");
        $("#repetition").show();
    }
    else {
        $("#names input").value = "";
        alert(MSG.NAME_ERROR);
    }
}
function inputRepetition() {
    if (!checkNumberValidation($("#repetition input").value)) {
        $("#repetition input").value = "";
        alert(MSG.REPETITION_ERROR);
    }
    else {
        const cars = renderCarPlayerSections($("#names input").value);
        startGame(cars, parseInt($("#repetition input").value));
    }
}
function setIds() {
    const sections = document.querySelectorAll("section");
    const fieldsets = document.querySelectorAll("fieldset");
    sections[1].setAttribute("id", "result");
    sections[2].setAttribute("id", "champion");
    fieldsets[0].setAttribute("id", "names");
    fieldsets[1].setAttribute("id", "repetition");
}
export function initController() {
    setIds();
    const btns = document.querySelectorAll("button");
    btns[0].addEventListener("click", inputNames);
    btns[1].addEventListener("click", inputRepetition);
    btns[2].addEventListener('click', resetGame);
}
