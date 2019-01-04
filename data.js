window.lolData = {

    filter: (data) => {

        const result = data.LOL.filter(element => {

            return element.type.indexOff(condition) !== -1;
        })
        return result
    },

    orderAZ: (data) => {
        const resultOrden = data.LOL.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } if (a.name < b.name) {
                return -1;
            } return 0;
        });
        return resultOrden
    },

    orderZA: (data) => {
        const resultOrden = data.LOL.sort((a, b) => {
            if (a.name < b.name) {
                return 1;
            } if (a.name > b.name) {
                return -1;
            } return 0;
        });
        return resultOrden
    }
}


/*Toma el id de los champ */
const name = [];
/*Toma la img de champ*/
const icon = [];
/*Toma la biografia de champ */
const biography = [];
/*Toma el titulo de champ */
const title = [];
/*Toma los tags */
const tag = [];
/*Toma los stats */
const stats = [];
/**toma la imagen y ubicación en html */
const img = [];
/**Toma el splash para luego ubicarlo en background */
const splash = [];
/**crear funcion categoría */
const categoría = [];




// function filter(arrayLOL, condition) {

//     const

// }),

arrayLOL.forEach(element => {
    name.push(element.id);
    icon.push(element.img);
    biography.push(element.blurb);
    title.push(element.title);
    tag.push(element.tags);
    stats.push(element.stats);
    img.push(element.image);
    splash.push(element.splash);
});

/**Toma el valor de armor de cada champ*/
let armor = [];
/**Toma el daño de ataque de cada champ */
let attackDamage = [];
/**Toma el HP */
let healPoints = [];
/**Toma los mp */
let magicPoints = [];
/**Toma la defenza mágica */
let magicDefense = [];
/**Toma rango de ataque */
let attackRange = [];

let arrayStats = Object.values(stats);
arrayStats.forEach(element => {
    armor.push(element.armor);
    attackDamage.push(element.attackdamage);
    healPoints.push(element.hp);
    magicPoints.push(element.mp);
    magicDefense.push(element.spellblock);
    attackRange.push(element.attackrange);

});

