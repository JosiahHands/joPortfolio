// html variables
    // ran number variable
        const ranN = document.querySelector('#ranN') as HTMLElement;
    // table 1
        const botS = document.querySelector('#botS') as HTMLElement;
        const plyS = document.querySelector('#plyS') as HTMLElement;
    // table 2
        const urG = document.querySelector('#plyG') as HTMLElement;
        const botG = document.querySelector('#botG') as HTMLElement;
        const wnr = document.querySelector('#wnr') as HTMLElement;
    // table 3
        const rnd = document.querySelector('#rnd') as HTMLElement;
    // player input
        const plyG = document.querySelector('#plyG')as any;
        const sbmt = document.querySelector('#sbmt') as HTMLElement;
        const nxt = document.querySelector('#nxt') as HTMLElement;
// program
const rand: number | string = (Math.floor(Math.random()*9)+1);
const randBot: number | string = (Math.floor(Math.random()*9)+1);

nxt.hidden = true;

const submit = () => {
    sbmt.hidden = true;
    nxt.hidden = false;
    ranN.innerHTML = rand.toString();
    urG.innerHTML = plyG.innerHTML;
    botG.innerHTML = randBot.toString();
    const winner = () => {
        const urAb = Math.abs(plyG-rand)
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
        plyS.innerHTML += 1;
    } else if (winner() === false) {
        wnr.innerHTML = 'Computer won!';
        botS.innerHTML += 1;
    } else {
        wnr.innerHTML = 'Error!';
    }
}

sbmt.onclick = submit;

const next = () => {
    
}

