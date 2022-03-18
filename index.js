// Code your solution here


// this function returns an array of of the matching drivers passed in. 
function findMatching(array, name) {
    const matchingArray = array.filter(function(element) {     // filters through array, return array of 
        return element.toLowerCase() === name.toLowerCase();   // everything that meets this condition. 
    })
    return matchingArray;  // Need this line to return something from the function, not just the filter callback function. 
    //toLowerCase added in on the end to disregard case. Temporarily lower cases the element, and the passed in name.
}



function fuzzyMatch(array, letters) {
    const lettersArray = [];
    for (const element of letters) {
        lettersArray.push(element)
    }
    const matchingArray = array.filter(function(element) {
        return (element[0] === lettersArray[0]) && (element[1] === lettersArray[1]) //compares first letter of each driver with the first letter of lettersArray 
    })
    return matchingArray;
}


// it('returns a driver if beginning provided letters match', function () {
//     expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
//   });


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(array, name) {
    const matchingArray = array.filter(function(element) {
        return element.name === name
    })
    return matchingArray
}