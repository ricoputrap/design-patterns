import { run as runSingleton } from "./singleton";
import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Type something: ", answer => {
  switch (answer) {
    case "singleton":
      runSingleton();
      break;

    default:
      break;
  }

  rl.close();
})

// runSingleton();