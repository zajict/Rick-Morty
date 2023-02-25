class Character {
    constructor(id, image, name, status, gender, origin, location, episode, species) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.status = status;
        this.gender = gender;
        this.origin = origin;
        this.location = location;
        this.episode = episode;
        this.species = species;
    };
};
export const getCharacters = () => {
    return fetch("https:rickandmortyapi.com/api/character")
    .then(response => {return response.json()})
    .then(characters => {return characters.result.map(({name, image, id}) => new Character(name, image, id))})
};

export const getcharChard = (id) => {

}