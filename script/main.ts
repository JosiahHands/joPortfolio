

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
