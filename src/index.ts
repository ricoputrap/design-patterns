import rl from "./rl";
import { run as runSingleton } from "./singleton";
import { run as runBuilder } from "./builder";

enum EnumPattern {
  SINGLETON = "1",
  BUILDER = "2",
  EXIT = "3"
}

const run = () => {
  rl.question("Type here: ", answer => {
    switch (answer) {
      case EnumPattern.SINGLETON:
        runSingleton();
        break;

      case EnumPattern.BUILDER:
        console.log("Loading...\n");
        runBuilder();
        return;

      case EnumPattern.EXIT:
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

const introText = `
  Welcome to the design patterns project!

  Please type the pattern you would like to run. You may select the number.
  1. Singleton
  2. Builder
  3. Exit
`;

console.log(introText);

run();