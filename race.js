class Dice{

    constructor(){
        this.dice = [1, 1, 3, 2, 2, 2];
    }
    
    roll(){
        return this.dice[Math.floor(Math.random() * 6)];
    }
}

class Runner{

    constructor(name){
        this._name = name;
        this._position = 0;
    }

    getPosition(){
        return this._position;
    }

    throwDice(dice){
        this._position += dice.roll();
    }
}

let dice = new Dice()
let rosa = new Runner("Rosa");
let alejandra = new Runner("Alejandra");
while(rosa.getPosition() < 100 && alejandra.getPosition() < 100){
    rosa.throwDice(dice);
    alejandra.throwDice(dice);
}

if(rosa.getPosition() >= 100 && alejandra.getPosition() >= 100){
    console.log(`¡Empate!`);
} else if(rosa.getPosition() >= 100){
    console.log(`¡Rosa gana!`);
} else{
    console.log(`¡Alejandra gana!`);
}