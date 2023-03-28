// //consctuction d'une class et l'exemple avec des nombres
// class Rectangle {
//     constructor(hauteur, largeur) {
//         this.hauteur = hauteur;
//         this.largeur = largeur;
//     }

//     get area() {
//         return this.calcArea();
//     }
//     calcArea() {
//         return this.largeur * this.hauteur;
//     }
// }
// const carre = new Rectangle(2, 5)
// console.log(carre);

// class Animal {
//     crie() {
//         return this;
//     }
//     static mange() {
//         return this;
//     }
// }
// console.log(Animal);
// let obj = new Animal();
// obj.crie(); // Animal {}
// let crie = obj.crie;
// crie(), // undefined

//     Animal.mange(); // class Animal
// let mange = Animal.mange;
// mange(); // undefined
// console.log(Animal.mange);


// class Animals{
//     constructor(nom){
//         this.nom = nom;
//     }
// parler(){
//     console.log(`${this.nom} fait du bruit.`);
//     }
// }
// let chiens = new Animals ("Natsu");
// chiens.parler(); 

// class Chien extends Animals {
//     constructor(nom,race,age,taille,couleur){
//         // le parametre "super" sert a rependre la fonction principale de "this nom" 
//         super(nom); //appelle le constructeur parent avec le paramètre que on connait déja plus haut
//         this.race = race; //On declare une nouvelle fonction donc on utlise this. pour le declarer.
//         this.age = age;
//         this.taille = taille;
//         this.couleur = couleur;
//     }
//     parler(){
//         console.log(`${this.nom} aboie.`);
//     }
//     pedigre(){ // ici on donne ce qu'on veut voir écris avec la fonction puis le texte ex : Natsu est un jack-russeul ! Il a 2 ans, il fait 70 cm il est blanc et noir
//     document.write(`${this.nom} ${this.race} Il a ${this.age} il fait ${this.taille} il est ${this.couleur}`);
//     }
// } //ici les réponses des déclaration this.nom race etc.. pour ensuite l'afficher
// let toutoux = new Chien ("Natsu est un","jack-russeul !","2 ans,","70 cm","blanc et noir");
// toutoux.parler();
// toutoux.pedigre();

// class Chat {
//     constructor(nom) {
//         this.nom = nom
//     }
//     parler() {
//         console.log(`${this.nom} fait du bruit.`);
//     }
// }
// class Lion extends Chat {
//     parler() {
//         super.parler()
//             console.log(`${this.nom} rugit.`);
//         }
//     } /// ne pas oublieé de declarer avec le let et de bien mettre le "new" nom pour declarer les nouvelles fonction plus haut sinon sa marche pas
// let groschat = new Lion ("titi");
// groschat.parler();

class Voiture {
    constructor(nom, marque, modele, année, couleur, carburant) {
        this.nom = nom;
        this.marque = marque;
        this.modele = modele;
        this.année = année;
        this.couleur = couleur;
        this.carburant = carburant;
    }
    parler() {
        document.write(`${this.nom} Ford / ${this.marque} Fiesta / ${this.modele} 2015 <br> ${this.année}`);
    }
}

class autres extends Voiture {
    parler() {
        super.parler()
        document.write(`${this.couleur} Carburant : ${this.carburant} Diesel`);
    }
}





let ford = new autres("Marque : ", "Modele : ", "Année : ", "Couleur :", " Noir /")
ford.parler();