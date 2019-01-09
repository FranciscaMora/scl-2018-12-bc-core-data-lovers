
/**Inicio función filter */

// crea un array de objetos
const dataLol = Object.values(LOL.data);
               
/**filtro por tags */
//muestra todos los champ con el tag Tank
const tankTags = dataLol.filter((element)=>{
    return element.tags.indexOf("Tank")>=0});
//muestra el name de los champ con tag Fighter
const fighterTags = dataLol.filter((element)=>{
    return element.tags.indexOf("Fighter")>=0});
//muestra el name de los champ con tag Mage
const mageTags = dataLol.filter((element)=>{
    return element.tags.indexOf("Mage")>=0});
//muestra el name de los champ con tag Assassin
const assassinTags = dataLol.filter((element)=>{
    return element.tags.indexOf("Assassin")>=0});
//muestra el name de los champ con tag Support
const supportTags = dataLol.filter((element)=>{
    return element.tags.indexOf("Support")>=0});
//muestra el name de los champ con tag Marksman
const marksmanTags = dataLol.filter((element)=>{
    return element.tags.indexOf("Marksman")>=0});
/**Cierre función filter */



/**inicio función sort */





// // muestra el name de  los champ con el  tag “Tank”
// const champTags =dataLol.filter((elemento)=>{
//     return elemento.tags.indexOf("Tank")>=0)
// const tankChamps = champTags.reduce((acum,elemento)=>{return acum+" "+elemento.name},"")};

// //muestra el name de los champ con tag "Fighter"
// const fighterChamps0 = dataLol.filter((elemento)=>{return elemento.tags.indexOf("Fighter")>=0}); 
// const fighterChamps = fighterChamps0.reduce((acum,elemento)=>{return acum+" "+elemento.name},""); 
// }



