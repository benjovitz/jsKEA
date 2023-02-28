let myObj = {
    name: "Daniel",
    age: 23,
    lungs: 2,
    eyes: 3
}

for(prop in myObj){
    console.log(prop,myObj[prop])
  }

  delete myObj.age
  for(prop in myObj){
    console.log(prop,myObj[prop])
  }

