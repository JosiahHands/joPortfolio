// color mode
const light = document.querySelector("#light") as HTMLButtonElement;
const dark = document.querySelector("#dark") as HTMLButtonElement;
const body = document.querySelector('body') as HTMLBodyElement;
const all = body.querySelectorAll<HTMLElement>('*');


const bc = (el: HTMLElement, colorC: string) => {
    el.style.backgroundColor = colorC;
    if (colorC === 'white' || colorC === 'gray') {
        el.style.color = 'black';
    } else {
        el.style.color = 'white';
    };
};

dark.hidden = true;

const modeL = (): void => {
    light.hidden = true;
    dark.hidden = false;
    for (const el of all) {
        bc(el, 'white');
    };
        
};

const modeD = (): void => {
    dark.hidden = true;
    light.hidden = false;
    for (const el of all) {
        bc(el, '');
    };
}

light.onclick = modeL;
dark.onclick = modeD;

// contact copy
const email = document.querySelector('#email') as HTMLElement;
const phone = document.querySelector('#phone') as HTMLElement;
const cpE = document.querySelector('#cpE') as HTMLElement;
const cpP = document.querySelector('#cpP') as HTMLElement;
let msE = document.querySelector('#msE') as HTMLElement;
let msP = document.querySelector('#msP') as HTMLElement;

const copyText = (text: string, msg: string) => {
    navigator.clipboard.writeText(text)
    if (msg == 'email') {
        msE.innerHTML = 'Email copied!'
    } else {
        msP.innerHTML = 'Phone copied!'
    }
}
cpE.onclick = () => copyText(email.innerHTML, 'email');
cpP.onclick = () => copyText(phone.innerHTML, 'phone');