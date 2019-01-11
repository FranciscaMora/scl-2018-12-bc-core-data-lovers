require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('sortData', () =>{
  it('Devuelve el primer campeon de la lista ordenada de la A la Z', () =>{
     let sorted = Object.keys(window.sortData(window.LOL.data,1))
    expect(sorted[0]).toBe('Aatrox');

    describe('filterData', () =>{
      it('Devuelve el primer Mago de la Lista', () =>{
         let sorted = Object.keys(window.filterData(window.LOL.data,"Mage"));
        expect(sorted[0]).toBe('Ahri');
    
      });
    });
  });
});