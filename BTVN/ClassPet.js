class Pet{
    constructor(name){
        this.name = name;
    }

    introduce(){
        console.log(`Tôi tên là ${this.name}`);
    }

    talk(sound){
        console.log(sound);
    }
}

class Dog extends Pet{
    constructor(name, TypesAnimal) {
        super(name);
        this.TypesAnimal = TypesAnimal;
    }

    introduce() {
        console.log(`Tôi là động vật ${this.TypesAnimal}`);
        super.introduce();
    }

    animalTalk() {
        this.talk(`Tiếng kêu ${this.TypesAnimal}`);
    }
}

var PetCat = new Pet('Mèo');
PetCat.introduce();
PetCat.talk('Meow');

var PetDog = new Dog('Husky', 'chó');
PetDog.introduce();
PetDog.animalTalk();

