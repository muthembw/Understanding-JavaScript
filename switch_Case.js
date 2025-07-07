//Switch statement
        /*switch(expression){
            case value1:
                // code block
                break;
            case value2:
                // code block
                break;
            default:
                // code block
        }
        */
      console.log("What is the capital of Kenya?");
      // 1) Nairobi
      // 2) Mombasa
      // 3) Kisumu
      // 4) Nakuru
      let answer = 24;
      switch(answer) {
          case 1:
              console.log("Correct! Nairobi is the capital of Kenya.");
              break;
          case 2:
              console.log("Incorrect! Mombasa is not the capital of Kenya.");
              break;
          case 3:
              console.log("Incorrect! Kisumu is not the capital of Kenya.");
              break;
          case 4:
              console.log("Incorrect! Nakuru is not the capital of Kenya.");
              break;
          default:
              console.log("Please select a valid option.");
      }
