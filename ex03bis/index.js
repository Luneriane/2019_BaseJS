a = 8; /*J’initialise a à 8*/
b = a+1; /*Je stocke a + 1 dans b*/
a+= 1; /*J’ajoute 1 à a*/
a*= 2; /*Je multiplie a par 2*/
b-= 5; /*Je retranche 5 à b*/
b*= b; /*Je multiplie b par lui-même*/
a+= 3; /*J’ajoute 3 à a*/

a == 1 ? a+= 2 : a+= 3; /*Si a vaut 1, je lui ajoute 2, sinon je lui ajoute 3*/

console.log(a);
console.log(b);