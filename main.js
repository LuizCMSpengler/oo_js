function Animes(produzido, autor, titulo) {
    this.produzido = produzido;
    this.autor = autor;
    this.titulo = titulo;
}

Animes.prototype.displayInfo = function() {
    console.log(`Produzido por: ${this.produzido}, Autor: ${this.autor}, Título: ${this.titulo}`);
};

function Anime(produzido, autor, titulo, episodios) {
    Animes.call(this, produzido, autor, titulo);
    this.episodios = episodios;
}

Anime.prototype = Object.create(Animes.prototype);
Anime.prototype.constructor = Anime;

Anime.prototype.displayInfo = function() {
    Animes.prototype.displayInfo.call(this);
    console.log(`Episódios: ${this.episodios}`);
};

function Manga(produzido, autor, titulo, capitulos) {
    Animes.call(this, produzido, autor, titulo);
    this.capitulos = capitulos;
}

Manga.prototype = Object.create(Animes.prototype);
Manga.prototype.constructor = Manga;

Manga.prototype.displayInfo = function() {
    Animes.prototype.displayInfo.call(this);
    console.log(`Capítulos: ${this.capitulos}`);
};

const Anime1 = new Anime('Toei Animation', 'Eiichiro Oda', 'One Piece', 1102);
const Manga1 = new Manga('Shueisha', 'Tatsuya Endo', 'Spy × Family', 96);
const Anime2 = new Anime('MAPPA', 'Gege Akutami', 'JUJUTSU KAISEN', 47);

Anime1.displayInfo();
Manga1.displayInfo();
Anime2.displayInfo();