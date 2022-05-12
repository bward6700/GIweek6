const newArray = [1.5, 3, 2.5 , 1];

average = (numbers) => {
    let numSummary = newArray.reduce((pValue , cValue) => pValue + cValue)
    return numSummary / numbers.length
}

console.log(average(newArray));
