 //String Concatenation in JavaScript
        //1. Using the + operator
        let temp_in_Degrees = 32;
        let weather = "The weather today is " + temp_in_Degrees + "\u00b0C"; //unicode for degree symbol
        console.log(weather);

        //2. Using += operator
        weather += " and sunny";
        console.log(weather);

        //3. Using template literals
        let city = "Nairobi";
        let  cars = 200;
        let message = `In ${city} today, there are ${cars} cars.`;
        console.log(message);
        //4. Using String.concat() method
        let part1 = "Good";
        let part2 = "Afternoon";
        let greeting = part1.concat(" ", part2, " Max.\n How is your day going?");
        console.log(greeting);

        let result1= 5 * '5';
        let result2 = 5 + '5';
        console.log(result1);
        console.log(result2);