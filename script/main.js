// color mode
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
// contact copy
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const cpE = document.querySelector('#cpE');
const cpP = document.querySelector('#cpP');
let msE = document.querySelector('#msE');
let msP = document.querySelector('#msP');
const copyText = (text, msg) => {
    navigator.clipboard.writeText(text);
    if (msg == 'email') {
        msE.innerHTML = 'Email copied!';
    }
    else {
        msP.innerHTML = 'Phone copied!';
    }
};
cpE.onclick = () => copyText(email.innerHTML, 'email');
cpP.onclick = () => copyText(phone.innerHTML, 'phone');
export {};
//# sourceMappingURL=main.js.map