class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        let ataque;

        if (this.type === "mago") {
            ataque = "magia";
        } else if (this.type === "guerreiro") {
            ataque = "espada";
        } else if (this.type === "monge") {
            ataque = "artes marciais";
        } else if (this.type === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "um ataque desconhecido";
        }

        console.log(`O ${this.type} atacou usando ${ataque}`);

        //console.log(`o ${this.type} atacou usando ${this.ataque}`)
    }
}

let adventure = new hero("Sara", "20", "guerreiro")

adventure.attack()