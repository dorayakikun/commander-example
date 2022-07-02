// Copyright (c) 2022 Tomohide Takao
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Command } from "commander";
const program = new Command();

program
  .name("math")
  .version("0.1.0");

program.command("add")
  .argument("<a>", "a")
  .argument("<b>", "b")
  .action((a, b) => {
    console.log(`a = ${a}, b = ${b}`);

    if (!isNumber(Number(a))) {
      console.log(`a isn't a number. ( a = "${a}" )`);
      return;
    }

    if (!isNumber(Number(b))) {
      console.log(`b isn't a number. ( b = "${b}" )`);
      return;
    }

    console.log(`a + b = ${Number(a) + Number(b)}`);
  });

function isNumber(a: any): boolean {
  return typeof a === "number" && isFinite(a);
}

program.parse();
