class heros {
    constructor(name, yearOld, type) {
        this.name = name;
        this.yearOld = yearOld;
        this.type = type;
    }
    atacar() {
        let ataque;
        switch (this.type) {
            case "Guerreiro":
                ataque = "espada";
                console.log(` ${this.name} atacou usando ${ataque}`);
                break;
            case "Mago":
                ataque = "magia";
                console.log(` ${this.name} atacou usando ${ataque}`);
                break;
            case "Monge":
                ataque = "artes marciais";
                console.log(` ${this.name} atacou usando ${ataque}`);
                break;
            case "Ninja":
                ataque = "Shuriken";
                console.log(` ${this.name} atacou usando ${ataque}`);
                break;
            default:
                console.log("Não definiu nenhum herio!")
        }

    }
}
let heroGuerreiro = new heros("Nordico", 25, "Guerreiro");
let heroMago = new heros("Feiticeiro", 37, "Mago");
let heroMonge = new heros("lutador", 40, "Monge");
let heroNinja = new heros("Samurai", 21, "Ninja");
heroGuerreiro.atacar();
heroMago.atacar();
heroMonge.atacar();
heroNinja.atacar();
