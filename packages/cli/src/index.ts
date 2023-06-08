import { select } from "@inquirer/prompts";
import chalk from "chalk";

const { version } = require("../../package.json");

console.log(
  chalk.green(`
8""""8                        8""""8               
8    " eeeee  eeee eeee eeeee 8    8   eeeee eeeee 
8e     8   8  8    8    8   8 8eeee8ee 8  88   8   
88  ee 8eee8e 8eee 8eee 8e  8 88     8 8   8   8e  
88   8 88   8 88   88   88  8 88     8 8   8   88  
88eee8 88   8 88ee 88ee 88  8 88eeeee8 8eee8   88
=========================================== v${version}
`)
);

type Answer = "web" | "cli" | "exit";

async function main() {
  const answer = await select<Answer>({
    message: "What would you like to do?",
    choices: [
      {
        name: "Run web ui",
        value: "web",
        description: "Run the web ui",
      },
      {
        name: "Use the interactive CLI",
        value: "cli",
        description: "Run the interactive CLI",
      },
      {
        name: "Exit",
        value: "exit",
        description: "Exit the program",
      },
    ],
  });

  switch (answer) {
    case "web":
      require("./web");
      break;
    case "cli":
      require("./cli");
      break;
    case "exit":
      console.log("Bye!");
      break;
  }
}

main();
