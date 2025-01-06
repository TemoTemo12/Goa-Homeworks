// მშობელი კლასი Animal
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return `${this.name} is making a sound.`;
    }
}

// შვილობილი კლასი Dainosaur, რომელიც მემკვიდრეობით იღებს Animal კლასის თვისებებს
class Dainosaur extends Animal {
    constructor(name) {
        super(name);
    }

    roar() {
        return `${this.name} is roaring like a dinosaur!`;
    }
}

// ტესტირება
const dino = new Dainosaur("T-Rex");
console.log(dino.makeSound());  // Animal კლასიდან
console.log(dino.roar());       // Dainosaur კლასიდან
