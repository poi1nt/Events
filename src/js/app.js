import { GoblinGame } from '../js/goblin-game/goblin-game.js';
import { counter } from '../js/counter/counter.js';

const game = new GoblinGame(document.querySelector('.goblin-game'));
const c = new counter();

game.addField();
game.startHole();

c.checkStatus();
c.handleEvent();


