const newArray = [1,2,3,4,5,6,7,]
findNumber = (num,target) => {
    let targetFound = -1
    for(let i = 0; i<num.length; i++){
        if(target === num[i]){
            targetFound=i
        }
        
    }
    return targetFound
}
console.log(findNumber(newArray, 6));