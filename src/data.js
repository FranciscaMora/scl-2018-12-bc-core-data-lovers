/*window.lolData = {

    filter: (data) => {

        const result = data.lol.filter(element => {

        return element.tags.indexOf(condition) !== -1;
        })
        return result
    },

    orderAZ: (data) => {
        const resultOrden = data.lol.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } if (a.name < b.name) {
                return -1;
            } return 0;
            });
                return resultOrden
        },

    orderZA: (data) => {
        const resultOrden = data.lol.sort((a, b) => {
            if (a.name < b.name) {
                return 1;
            } if (a.name > b.name) {
                return -1;
            } return 0;
            });
                return resultOrden
      }
}
*/

const lolData = Object.values(LOL.data);
const tag = [];
const stats = [];
const icon = [];
const splash = [];

function filter (lolData,condition) {
   

    const tag = lolData.filter(tags =>{
     return tags.tag.indexOf(condition)!==-1;
     });
     console.log(tag)
     return tag;
 
 }