function createRectangle(height, width){
    return {
        height, 
        width, 
        getArea: function() {
            return this.height*this.width;
        }
    }
}
let rechteck1 = createRectangle(7, 4);
let rechteck2 = createRectangle(30, 5);
console.log(`1. Rechteck:
Länge = ${rechteck1.height}, Breite = ${rechteck1.width}, Fläche = ${rechteck1.getArea()}
`);
console.log(`2. Rechteck:
Länge = ${rechteck2.height}, Breite = ${rechteck2.width}, Fläche = ${rechteck2.getArea()}
`);
