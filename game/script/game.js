// html variables
// ran number variable
const ranN = document.querySelector('#ranN');
// table 1
const botS = document.querySelector('#botS');
const plyS = document.querySelector('#plyS');
// table 2
const urG = document.querySelector('#urG');
const botG = document.querySelector('#botG');
const wnr = document.querySelector('#wnr');
// table 3
const rnd = document.querySelector('#rnd');
// input
const plyG = document.querySelector('#plyG');
const sbmt = document.querySelector('#sbmt');
const nxt = document.querySelector('#nxt');
const botInput = document.querySelector('#botInput');
const reset = document.querySelector('#reset');
const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
// program
const rand1 = () => {
    const num = Math.floor(Math.random() * 9) + 1;
    return num;
};
const rand2 = () => {
    const num = Math.floor(Math.random() * 9) + 1;
    return num;
};
const addScore = (el) => {
    let num = Number(el.innerHTML);
    num += 1;
    el.innerHTML = num.toString();
};
sbmt.style.display = 'block';
nxt.style.display = 'none';
const block = () => {
    if (sbmt.style.display === 'block') {
        sbmt.style.display = 'none';
        nxt.style.display = 'block';
    }
    else {
        sbmt.style.display = 'block';
        nxt.style.display = 'none';
    }
};
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
        const urAb = Math.abs(guess - rand);
        const botAbs = Math.abs(randBot - rand);
        if (urAb < botAbs) {
            return true;
        }
        else if (urAb === botAbs) {
            return true;
        }
        ;
        return false;
    };
    if (winner() === true) {
        wnr.innerHTML = 'You won!';
        addScore(plyS);
    }
    else if (winner() === false) {
        wnr.innerHTML = 'Computer won!';
        addScore(botS);
    }
    else {
        wnr.innerHTML = 'Error!';
    }
};
sbmt.onclick = submit;
const next = () => {
    block();
    ranN.innerHTML = '?';
    botG.innerHTML = '?';
    wnr.innerHTML = '?';
    botInput.innerHTML = '?';
    urG.innerHTML = '?';
    plyG.value = '1';
    addScore(rnd);
};
nxt.onclick = next;
const resetBtn = () => {
    ranN.innerHTML = '?';
    botS.innerHTML = '0';
    plyS.innerHTML = '0';
    urG.innerHTML = '?';
    botG.innerHTML = '?';
    wnr.innerHTML = '?';
    rnd.innerHTML = '?';
    botInput.innerHTML = '?';
};
reset.onclick = resetBtn;
const addInput = (el) => {
    let num = Number(el.value);
    num += 1;
    el.value = num.toString();
};
const subInput = (el) => {
    let num = Number(el.value);
    num -= 1;
    el.value = num.toString();
};
const addVal = () => {
    addInput(plyG);
};
const subVal = () => {
    subInput(plyG);
};
add.onclick = addVal;
sub.onclick = subVal;
export {};
//# sourceMappingURL=game.js.map