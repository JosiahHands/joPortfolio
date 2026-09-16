const light = document.querySelector("#light");
const dark = document.querySelector("#dark");
const body = document.querySelector('body');
const all = body.querySelectorAll('*');
const bc = (el, colorC) => {
    el.style.backgroundColor = colorC;
    if (colorC === 'white' || colorC === 'gray') {
        el.style.color = 'black';
    }
    else {
        el.style.color = 'white';
    }
    ;
};
dark.hidden = true;
const modeL = () => {
    light.hidden = true;
    dark.hidden = false;
    for (const el of all) {
        bc(el, 'white');
    }
    ;
};
const modeD = () => {
    dark.hidden = true;
    light.hidden = false;
    for (const el of all) {
        bc(el, '');
    }
    ;
};
light.onclick = modeL;
dark.onclick = modeD;
export {};
//# sourceMappingURL=main.js.map