//This is a simple javascript program within html 
        console.log("Good Afternoon World!");
        
        //Creationg a variable and printing it
        let name ="Bridget", age=21;
        console.log("Hello, my name is "+ name + " and i am " +age + " years old.");

        //Creating a constant
        const Marks = 400;
        console.log("Mary scored " + Marks +" in her KCPE exams");

        const Car = { model:"", color:"", price:" "};
        Car.model ="Mazda";
        Car.color ="Red";
        Car.price = 5000000;
        console.log("This " + Car.color + " " + Car.model + " is worth " + Car.price + " Kshs");

        //creating an object
        const Person = {
            name: "Bridget",
            age: 21,
            occupation: "Software Developer",
            greet: function() {
                console.log("Hello, my name is " + this.name + " and I am a " + this.occupation);
            }
             // this is used to refer to the current object in our case Person
        };
        Person.greet();

        //Creating an object with key-value pairs
        const obj1 ={
        color: "Blue",
        shape:"Oval"
        };
        // Deleting a property
        delete obj1.shape;
        console.log(obj1.color + " & " + obj1.shape); // shape will be undefined



        
