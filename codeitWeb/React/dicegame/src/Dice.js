import blue01 from './assets/dice-blue-1.svg';
import blue02 from './assets/dice-blue-2.svg';
import blue03 from './assets/dice-blue-3.svg';
import blue04 from './assets/dice-blue-4.svg';
import blue05 from './assets/dice-blue-5.svg';
import blue06 from './assets/dice-blue-6.svg';
import red01 from './assets/dice-red-1.svg';
import red02 from './assets/dice-red-2.svg';
import red03 from './assets/dice-red-3.svg';
import red04 from './assets/dice-red-4.svg';
import red05 from './assets/dice-red-5.svg';
import red06 from './assets/dice-red-6.svg';

const DICEIMGS = {
    blue: [blue01, blue02, blue03, blue04, blue05, blue06],
    red: [red01, red02, red03, red04, red05, red06],
}

function Dice({color, num}) {
    const src = DICEIMGS[color][num - 1];
    const alt = `${color}${num}`;
    return <img src={src} alt={alt} />;
}

export default Dice;