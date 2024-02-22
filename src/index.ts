import rl from "./rl";
import { run as runSingleton } from "./singleton";
import { run as runBuilder } from "./builder";
import { run as runFactoryMethod } from "./factory-method";

enum EnumPattern {
  SINGLETON = "1",
  BUILDER = "2",
  FACTORY_METHOD = "3",
  EXIT = "4"
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

      case EnumPattern.FACTORY_METHOD:
        console.log("Loading...\n");
        runFactoryMethod();
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
  3. Factory Method
  4. Exit
`;

console.log(introText);

run();