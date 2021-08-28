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
}