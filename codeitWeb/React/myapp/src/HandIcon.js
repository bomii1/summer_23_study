import rock from './assets/rock.svg';
import scissor from './assets/scissor.svg';
import paper from './assets/paper.svg';

const IMGS = {
  rock: rock,
  scissor: scissor,
  paper: paper,
};

function HandIcon({ className='', value }) {
    const src = IMGS[value];
    return <img className={className} src={src} alt={value} />;
}

export default HandIcon;