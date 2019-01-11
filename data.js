const data = Object.entries(LOL.data);

function filter(data, condition) {
  const filtered = data.filter((element) => {
    return element[1].tags.indexOf(condition) >= 0;
  });

  return filtered;


}




// Función no completada, se espera su total funcionalidad en la versión 1.1

// function sort(data, sortBy, sortOrder) {
//   data.forEach(element => {
//     if (sortBy === 'id' && sortOrder === 'A-Z') {
//       const sortedByName=element.sort((a, b) => {
//         if (b.element[1].name > a.element[1].name) {
//           return -1
//         }
//         if (a.element[1].name > b.element[1].name) {
//           return 1;
//         }
//         return 0
//       });
//       return sortedByName;
//     }
//     if (sortBy === 'id' && sortOrder === 'Z-A') {
//       const sortedByName= element.sort((b, a) => {
//         if (a.element[1].name > b.element[1].name) {
//           return -1;
//         }
//         if (b.element[1].name > a.element[1].name) {
//           return 1;
//         }
//         return 0;
//       });
//       return sortedByName;
//     }

//   })
// };

























































































