class Doinhietdo {
    constructor(C) {
        this.C = C;
    }

 changeF() {
 return this.C*1.8 +32;
}
 changeK() {
return this.C +273.15;
 }
}
let doinhietdo = new Doinhietdo(25)
//let C = doinhietdo.getC();
let F = doinhietdo.changeF();
let K = doinhietdo.changeK();
console.log(F,K);