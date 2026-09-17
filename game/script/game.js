// html variables
// ran number variable
const ranN = document.querySelector('#ranN');
// table 1
const botS = document.querySelector('#botS');
const plyS = document.querySelector('#plyS');
// table 2
const plyG = document.querySelector('#plyG');
const botG = document.querySelector('#botG');
const wnr = document.querySelector('#wnr');
// table 3
const rnd = document.querySelector('#rnd');
// player input
const urG = document.querySelector('#urG');
const sbmt = document.querySelector('#sbmt');
const nxt = document.querySelector('#nxt');
// program
const rand = (Math.floor(Math.random() * 9) + 1);
const randBot = (Math.floor(Math.random() * 9) + 1);
nxt.hidden = true;
const submit = () => {
    sbmt.hidden = true;
    nxt.hidden = false;
    ranN.innerHTML = rand.toString();
    plyG.innerHTML = urG.innerHTML.toString();
    botG.innerHTML = randBot.toString();
    const winner = () => {
        const urAb = Math.abs(urG.innerHTML - rand);
        const botAbs = Math.abs(randBot - rand);
        if (urAb < botAbs) {
            return true;
        }
        else if (urAb == botAbs) {
            return true;
        }
        ;
        return false;
    };
    if (winner() == true) {
        wnr.innerHTML = 'You won!';
        plyS.innerHTML += 1;
    }
    else {
        wnr.innerHTML = 'Computer won!';
        botS.innerHTML += 1;
    }
};
sbmt.onclick = submit;
export {};
//# sourceMappingURL=game.js.map