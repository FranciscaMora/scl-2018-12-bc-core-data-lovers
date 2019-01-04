/*Toma el id de los champ */
let name =[];
/*Toma la img de champ*/ 
let icon=[];
/*Toma la biografia de champ */
let biography=[];
/*Toma el titulo de champ */
let title=[];
/*Toma los tags */
let tag=[];
/*Toma los stats */
let stats=[];
/**toma la imagen y ubicación en html */
let img=[];
/**Toma el splash para luego ubicarlo en background */
let splash=[];

let arrayLOL= Object.values(LOL.data);
arrayLOL.forEach(element =>{
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
let armor=[];
/**Toma el daño de ataque de cada champ */
let attackDamage=[];
/**Toma el HP */
let healPoints=[];
/**Toma los mp */
let magicPoints=[];
/**Toma la defenza mágica */
let magicDefense=[];
/**Toma rango de ataque */
let attackRange=[];

let arrayStats= Object.values(stats);
    arrayStats.forEach(element =>{
    armor.push(element.armor);
    attackDamage.push(element.attackdamage);
    healPoints.push(element.hp);
    magicPoints.push(element.mp);
    magicDefense.push(element.spellblock);
    attackRange.push(element.attackrange);

});

<<<<<<< HEAD
const tag2 = tag.filter((element) => {
    return element
})
console.log(tag2);


const stats2 = stats.filter((element) => {
    return element
})
console.log(stats2);




// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;
*/

/*const data = [1,5,23,4,12,45,78,8,10,11,84,6];

const name2 = name.filter(string) => {

}
console.log(name2);
*/
=======
>>>>>>> FranMora/master
