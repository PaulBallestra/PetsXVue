export const pets = (state) => {
    return state.pets;
};

//Get nombre total de pets
export const numberOfPets = (state) => {
    return state.pets.length;
};

//Get nombre de chiens
export const numberOfDogs = (state) => {
    let dogs = state.pets;
    let numberOf = 0;

    dogs.forEach((item, index) => {
        if(item.species === 'Dog')
            numberOf++;
    });

    return numberOf;
};

//Get nombre de chats
export const numberOfCats = (state) => {
    let cats = state.pets;
    let numberOf = 0;

    cats.forEach((item, index) => {
        if(item.species === 'Cat')
            numberOf++;
    });

    return numberOf;
};

//Get dog with ID
export const getDog = (state) => {

};