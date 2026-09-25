// html variables
    // ran number variable
        const ranN = document.querySelector('#ranN') as HTMLElement;
    // table 1
        const botS = document.querySelector('#botS') as HTMLElement;
        const plyS = document.querySelector('#plyS') as HTMLElement;
    // table 2
        const urG = document.querySelector('#urG') as HTMLElement;
        const botG = document.querySelector('#botG') as HTMLElement;
        const wnr = document.querySelector('#wnr') as HTMLElement;
    // table 3
        const rnd = document.querySelector('#rnd') as HTMLElement;
    // input
        const plyG = document.querySelector('#plyG')as HTMLInputElement;
        const sbmt = document.querySelector('#sbmt') as HTMLElement;
        const nxt = document.querySelector('#nxt') as HTMLElement;
        const botInput = document.querySelector('#botInput') as HTMLElement;
        const reset = document.querySelector('#reset') as HTMLElement;
        const add = document.querySelector('#add') as HTMLElement;
        const sub = document.querySelector('#sub') as HTMLElement;
// program
const rand1 = (): number => {
    const num = Math.floor(Math.random()*9)+1;
    return num;
};
const rand2 = (): number => {
    const num = Math.floor(Math.random()*9)+1;
    return num;
};

const addScore = (el: HTMLElement): void => {
    let num = Number(el.innerHTML)
    num += 1;
    el.innerHTML = num.toString();
}
    sbmt.style.display = 'block';
    nxt.style.display = 'none';
const block = () => {
    if (sbmt.style.display === 'block') {
        sbmt.style.display = 'none';
        nxt.style.display = 'block';
    } else {
        sbmt.style.display = 'block';
        nxt.style.display = 'none';
    }
} 
const submit = () => {
    block();
    const rand = rand1();
    const randBot = rand2();
    botInput.innerHTML = randBot.toString();
    ranN.innerHTML = rand.toString();
    botG.innerHTML = randBot.toString();
    const guess = Number(plyG.value);
    urG.innerHTML = plyG.value;
    const winner = () => {
        const urAb = Math.abs(guess-rand)
        const botAbs = Math.abs(randBot-rand)
        if (urAb < botAbs) {
            return true;
        } else if (urAb === botAbs) {
            return true;
        };
        return false;
    }
    if (winner() === true) {
        wnr.innerHTML = 'You won!';
        addScore(plyS)
    } else if (winner() === false) {
        wnr.innerHTML = 'Computer won!';
        addScore(botS)
    } else {
        wnr.innerHTML = 'Error!';
    }
}

sbmt.onclick = submit;

const next = () => {
    block()
    ranN.innerHTML = '?';
    botG.innerHTML = '?';
    wnr.innerHTML = '?';
    botInput.innerHTML = '?';
    urG.innerHTML = '?';
    plyG.value = '1';
    addScore(rnd);

}

nxt.onclick = next;

const resetBtn = () => {
     ranN.innerHTML = '?'     
     botS.innerHTML = '0'
     plyS.innerHTML = '0'
     urG .innerHTML = '?'
     botG.innerHTML = '?'
     wnr.innerHTML = '?'
     rnd.innerHTML = '?'
     botInput.innerHTML = '?'
}
reset.onclick = resetBtn;

const addInput = (el: HTMLInputElement): void => {
    let num = Number(el.value)
    num += 1;
    el.value = num.toString();
}
const subInput = (el: HTMLInputElement): void => {
    let num = Number(el.value)
    num -= 1;
    el.value = num.toString();
}

const addVal = () => {
    addInput(plyG)
}
const subVal = () => {
    subInput(plyG)
}

add.onclick = addVal;
sub.onclick = subVal;