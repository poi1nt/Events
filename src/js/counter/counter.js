export { counter };

class counter {
    constructor () {
    this.dead = document.getElementById('dead');
    this.lost = document.getElementById('lost');    
    this.deadCounter = parseInt(this.dead.textContent);
    this.lostCounter = parseInt(this.lost.textContent);
    this.hole = document.getElementsByClassName('hole');
}

handleEvent() {
    document.addEventListener('click', (event) => {
        
        if (event.target.id) {
        
        let clickHole = document.getElementById(`${event.target.id}`);



        if (clickHole.classList.contains( 'hole_has-mole' )) {

            this.deadCounter += 1;
            this.dead.textContent = (`${this.deadCounter}`);
        } else {
            this.lostCounter +=1;
            this.lost.textContent = (`${this.lostCounter}`);
        }
        if (this.deadCounter == 10 || this.lostCounter == 5) {
            this.checkStatus();
            this.deadCounter = 0;
            this.lostCounter = 0;
            this.dead.textContent = `${this.deadCounter}`;
            this.lost.textContent = `${this.lostCounter}`;
        }
        }
})}

checkStatus() {
    if (this.deadCounter === 10) {
        alert(`Победа!`);
    } else if (this.lostCounter === 5) {
        alert(`Вы проиграли`);
    }
}

  }


