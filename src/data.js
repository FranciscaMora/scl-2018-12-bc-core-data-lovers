
/**Inicio función filter */
// crea un array de objetos
const dataLol = Object.values(LOL.data);
//muestra todos los champ con el tag Tank
const tankTags = dataLol.filter((elemento)=>{return elemento.tags.indexOf("Tank")>=0});
//muestra el name de los champ con tag Tank
const fighterTags = dataLol.filter((elemento)=>{return elemento.tags.indexOf("Fighter")>=0});
//muestra el name de los champ con tag Mage
const mageTags = dataLol.filter((elemento)=>{return elemento.tags.indexOf("Mage")>=0});
//muestra el name de los champ con tag Assassin
const assassinTags = dataLol.filter((elemento)=>{return elemento.tags.indexOf("Assassin")>=0});





// // muestra el name de  los champ con el  tag “Tank”
// const champTags =dataLol.filter((elemento)=>{
//     return elemento.tags.indexOf("Tank")>=0)
// const tankChamps = champTags.reduce((acum,elemento)=>{return acum+" "+elemento.name},"")};

// //muestra el name de los champ con tag "Fighter"
// const fighterChamps0 = dataLol.filter((elemento)=>{return elemento.tags.indexOf("Fighter")>=0}); 
// const fighterChamps = fighterChamps0.reduce((acum,elemento)=>{return acum+" "+elemento.name},""); 
// }