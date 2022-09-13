const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
    previous_owners: [
        {name : "Pat Smith", address : "1 Main Street"},
        {name: "Sheila Dwyer", address : "2 High Street"}
        // name : ["Pat Smith", "Sheila Dwyer"],
        // address : ["1 Main Street", "2 High Street"]
    ],
    type : {
        make: 'Toyota',
        model: 'Corolla',
        cc: 1.8
    },
    registration : {
        year: 201,
        county_code: 'WD',
        number: 1058
    }
    // '201WD1058'
  };
  
console.log(aCar.owner + ' drives a ' + aCar.type.make);
console.log(
    "Reg. = " + 
    aCar.registration.year + "-" + 
    aCar.registration.county_code + "-" + 
    aCar.registration.number
);


aCar.mileage = 10000;
aCar.colour = {
    exterior_colour : "red",
    interior_fabric : {
        texture : "leather" ,
        shade : "cream"
    }
}
    
console.log("It is a " + aCar.colour.exterior_colour + " car," +
    aCar.mileage + " mileage, with " +
    aCar.colour.interior_fabric.texture + " interior."
);

console.log(
    "First owner: " +
      aCar.previous_owners[0].name +
      ' - ' +
      aCar.previous_owners[0].address
  )