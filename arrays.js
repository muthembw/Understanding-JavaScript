
        //Creating arrays
        const fruits = ["Apples", "Bananas"];
        const price =[ 100, 200, 350, 249];
        const mixedArray = ["Hello", 42, true, null, { key: "value" }, [1, 2, 3]];

        //printing the first element of the prices array
        console.log(price[0]); 
        //No of element in the mixedArray
        console.log(mixedArray.length);
        
        //Changing an element in an array
        fruits[1] = "Pineapples"
        console.log(fruits);

        //Creating Date object
        const now = new Date();
        console.log(now)

        //Creating map
        const roles = new Map();
        // assigning roles to a user
        roles.set("Bridget", "Organizer");
        roles.set(["Wendi", "Particpant"], ["Agatha","Student"]);

        //Printing the map
        console.log(roles.get("Wendi"));
        //Iterating through the map
        roles.forEach((value, key) => {
            console.log(`${key} is a ${value}`);
        });

        //Creating a Set
        const oddNumbers = new Set();
        oddNumbers.add(1);
        oddNumbers.add(3);
        oddNumbers.add(5);
        oddNumbers.add(7);
        oddNumbers.add(9);
        oddNumbers.add(11);
        console.log(oddNumbers.has(11));