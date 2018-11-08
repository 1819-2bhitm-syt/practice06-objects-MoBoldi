function Rectangle(height, width){
    this.height = height;
    this.width = width;
    this.getArea = function(){
        return height * width; 
    };
}
let rechteck1 = new Rectangle(8, 3);
let rechteck2 = new Rectangle(60, 10);
let rechteck3 = new Rectangle(9, 5);
console.log(`1. Rechteck:
Länge = ${rechteck1.height}, Breite = ${rechteck1.width}, Fläche = ${rechteck1.getArea()}
`);
console.log(`2. Rechteck:
Länge = ${rechteck2.height}, Breite = ${rechteck2.width}, Fläche = ${rechteck2.getArea()}
`);
console.log(`3. Rechteck:
Länge = ${rechteck3.height}, Breite = ${rechteck3.width}, Fläche = ${rechteck3.getArea()}
`);
