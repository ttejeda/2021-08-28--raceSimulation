class Race{

    constructor(){
        this._runnerA = 0;
        this._runnerB = 0;
        this._track = 100;
    }

    roll(){
        let dr = Math.ceil(Math.random() * 6);
        let a = 0;
        if(dr < 3){
            a = 1;
        } else if(dr == 3){
            a = 3;
        } else {
            a = 2;
        }
        
      return a;
    }

    racing(){
        let d1 = 0;
        let d2 = 0;
        let t = 0;

        do {
            d1 = this.roll();
            this._runnerA += d1;
            d2 = this.roll();
            this._runnerB += d2;
            t++;
        } while (this._runnerA <= 100 && this._runnerB <= 100);

        console.log(`El corredor 1 recorrió ${this._runnerA} unidades.`);
        console.log(`El corredor 2 recorrió ${this._runnerB} unidades.`);
        console.log(`Se jugaron ${t} rondas`);
        
        if(this._runnerA >= 100 && this._runnerB >= 100){
            return `¡Empate!`;
        } if(this._runnerA >= 100 && this._runnerB <= 100){
            return `Corredor 1, gana.`;
        } if(this._runnerB >= 100 && this._runnerA <= 100){
            return `Corredor 2, gana.`;
        }
    }
}

let r1 = new Race();
let r2 = new Race();
console.log(r1.racing());
console.log(r2.racing());