const names = ["Lars","Jan","Peter","Bo","Frederik","Daniel"];
let namesFiltered = names.filter(name=>name.length <=3);
let namesUppercase = names.map(name=>name.toUpperCase());

const list = "<ul>"
let namesHTML = names.map(name=>"<li>"+name+"</li>").join("");
let listHTML = list+namesHTML+list;


console.log(names)
console.log(namesFiltered)
console.log(namesUppercase)
console.log(listHTML)


const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

  let newCars = cars.filter(car=>car.year>1999);
  console.log("NEW CARS")
  console.log(newCars);

  let volvoCars = cars.filter(car=>car.make=="Volvo");
  console.log("VOLVO CARS")
  console.log(volvoCars);

  let cheapCars = cars.filter(car=>car.price<5000)
  console.log("CHEAP CARS")
  console.log(cheapCars);

  function sql(cars){
    let sql = "INSERT INTO cars (id,year,make,model,price) VALUES("
    let carsSQL= cars.map(car=>car.id,car.year,car.make,car.model).join(",");
  }
  
  //my filter after 1999
  function filterNew(array){
    let newArray = [];
    for(i=0;i<array.length;i++){
        if(array[i].year>1999){
            newArray.unshift(array[i]);
        }
    }
    return newArray;
  }
  //filter volvo
  function filterVolvo(array){
    let newArray = [];
    for(i=0;i<array.length;i++){
        if(array[i].make=="Volvo"){
            newArray.unshift(array[i]);
        }
    }
    return newArray;
  }
  //filter 5000
  function filterVolvo(array){
    let newArray = [];
    for(i=0;i<array.length;i++){
        if(array[i].price<5000){
            newArray.unshift(array[i]);
        }
    }
    return newArray;
  }

  function namesToUppercase(array){
    let newArray = [];
    for(i=0;i<array.length;i++){
        array[i].toUpperCase()
        newArray.unshift(array[i]);
    }
    return newArray;
  }

  function myFilter(array,callback){
    return callback(array);
  }
function myMap(array,callback){
    return callback(array);
}



console.log("my filter")
//console.log(myFilter(cars,filterVolvo));
console.log(myMap(names,namesToUppercase))
