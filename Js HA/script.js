let Deutschland = "53 million"
let Hannover = "4 million"

console.log (Deutschland);
console.log (Hannover);

let isIsland = true;
console.log (typeof isIsland);

Isisland = "Deutschland"
console.log (typeof Isisland);

let language;
console.log (language);
console.log (typeof language);

const massMarks = 78;
const heightMarks = 1.69;
const massJohn = 92;
const heightJohn = 1.95; 

const BMIMark = massMarks / heightMarks ** 2; 
const BMIJohn = massJohn / heightJohn ** 2; 
const markHigherBMI = BMIMark > BMIJohn; 

console.log(BMIMark , BMIJohn, markHigherBMI);



const massMark = 95;
const heightMark = 1.88; 
const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2; 
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn; 

console.log(BMIMark, BMIJohn, markHigherBMI);




// in Deutschland Wohnen Leute :
const DeutschlandEinwohnerZahl = 84000000;

//Falls halb Personen verlassen Deutschland: 
const ifDeutschlandhalf = DeutschlandEinwohnerZahl / 2; 

//in Finland Wohnen Leute:
const FinlandEinwohnerZahl = 6000000;

//Deutschland oder Finland WohnerZahlen: 
const DeutschlandEinwohnerZahloderFinlandEinwohnerZahl = DeutschlandEinwohnerZahl > FinlandEinwohnerZahl;

//durschnittlichLand in die Welt 
const durchschnittlichLand = 33000000; 

//durschnittlichLand oder Deutschland
const deutschlandDurschnittlichLandoder = durchschnittlichLand > DeutschlandEinwohnerZahl; 

console.log(ifDeutschlandhalf, DeutschlandEinwohnerZahloderFinlandEinwohnerZahl, deutschlandDurschnittlichLandoder);



const massCem = 102;
const heightCem = 1.98;
const massCan = 78; 
const heightCan = 1.78;

const CemBMI = massCem / heightCem ** 2;
const CanBMI = massCan / heightCan ** 2; 

const CemBMIhigher = CemBMI > CanBMI; 

console.log(CemBMI, CanBMI, CemBMIhigher);


const markBMI = 26.87; 
const johnBMI = 27.44;

if (markBMI > johnBMI) {
    console.log ("Mark's BMI is higher than John's!");
} else {
    const higher = johnBMI > markBMI; 
    console.log ("John's BMI is higher than Mark's!");
}

const massCan = 78;
const heightCan = 1.69;
const massCem = 92;
const heightCem = 1.95;

const BMICan = massCan / heightCan ** 2; 
const BMICem = massCem / heightCem ** 2;
console.log(BMICem, BMICan);

if (BMICem > BMICan) {
    console.log(`Cem's BMI (${BMICem}) is higher than Can's (${BMICan})!`);
} else {
    console.log(`Can's BMI (${BMICan}) is higher than Cem's (${BMICem}) !`)
}

const averagepopulation = 33000000000; 
const DeutschlandEinwohner = 80000000000;

if (DeutschlandEinwohner > averagepopulation) {
    console.log("Deutschland's population is avobe average");
} else {
    console.log("Deutschland's population is below average");
}


/*const age = 15; 

if (age >= 18) {
    console.log ('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age; 
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
} */

const average = 140; 
const deutschland = 83;

if (average < deutschland) {
    console.log (`Deutschland's population is avobe average`);
}   else {
    const populationLeft = average - deutschland;
    console.log (`Deutschland's population is below average. Deutschland need ${populationLeft} people`);
}
