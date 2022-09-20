const pokeDataObj = [
  {
    no: 1,
    name: "이상해씨",
    typeOne: "풀",
    typeTwo: "독"
  },
  {
    no: 2,
    name: "이상해풀",
    typeOne: "풀",
    typeTwo: "독"
  },
  {
    no: 3,
    name: "이상해꽃",
    typeOne: "풀",
    typeTwo: "독"
  },
  {
    no: 4,
    name: "파이리",
    typeOne: "불꽃",
  },
  {
    no: 5,
    name: "리자몽",
    typeOne: "불꽃",
    typeTwo: "비행"
  }
]



class pokeData {
  constructor(index, name, typeOne, typeTwo=""){
    this.index = index;
    this.name = name;
    this.typeOne = typeOne;
    this.typeTwo = typeTwo;
  } 
}

let pokeDataArr = [];
for(let i =0; i<pokeDataObj.length ; i ++){
  pokeDataArr[i] = new pokeData(i+1, pokeDataObj[i].name, pokeDataObj[i].typeOne, pokeDataObj[i].typeTwo)
}
console.log(pokeDataArr)