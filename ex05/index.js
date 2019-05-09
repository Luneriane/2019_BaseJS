function trueFonction() {
    console.log(true);
};
trueFonction;

function myString(aString) {
    console.log(aString);
};
myString("Blabla");

function twoStrings(str1,str2){
    console.log(str1.concat(str2));
};
twoStrings("Un","Deux");

function twoNumbers(num1,num2){
    switch (num1,num2){
        case num1>num2 :
            console.log("Le premier nombre est plus grand");
            break
        case num1<num2 :
            console.log("Le premier nombre est plus petit");
            break
        case num1==num2 :
            console.log("Les deux nombres sont identiques");
            break
    }
};
twoNumbers(Math.random(),Math.random());

function twoArg(arg1,arg2){
    console.log(arg1+arg2);
};
twoArg(2,"B");

function treeValues(val1,val2,val3){
    console.log("Bonjour" + val1 + val2 + ", tu as " + val3 + "ans.");
};
treeValues("Marcel","Dupont",Math.random());

function twoParam(age,sexe){
    switch(age,sexe) {
        case (age>18,"Homme") :
            console.log("Vous êtes un homme et vous êtes majeur");
            break
        case (age<18,"Homme") :
            console.log("Vous êtes un homme et vous êtes mineur");
            break
        case (age>18,"Femme") :
            console.log("Vous êtes un femme et vous êtes majeur");
            break
        case (age<18,"Femme") :
            console.log("Vous êtes un femme et vous êtes mineur");
            break
    }
};
twoParam(Math.random(),"Homme");
twoParam(Math.random(),"Femme");

function threeNum(numA,numB,numC){
    console.log(numA+numB+numC);
};
threeNum(Math.random(),Math.random(),Math.random());