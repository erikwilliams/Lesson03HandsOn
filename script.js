var idealCar = {
    Name: "Mustang",
    Color: "Red",
    weightInPounds: 3600,
    myCar : function() {
        console.log("My ideal car is a " + this.Name + " with a color of " + this.Color + ", but I do not want it to be over " + this.weightInPounds + " pounds.");
        
      }
  };
  idealCar.myCar();