import { run as runSingleton } from "./singleton";
import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const run = () => {
  rl.question("Type here: ", answer => {
    switch (answer) {
      case "singleton":
        runSingleton();
        break;

      case "exit":
        rl.close();
        console.log("Thank you for trying this design patterns project!");
        return;
  
      default:
        break;
    }

    console.log("===============")
    console.log("Try again...")
    run();
  })
}

let introText = "Welcome to the design patterns project!";
introText += "\nPlease type the name of the pattern you would like to run.";


run();