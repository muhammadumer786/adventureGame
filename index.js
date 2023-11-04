#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// first make classes of Player and Opponent
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// Ask Player Name and Opponent select
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your name:"
});
// console.log(player.name)
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
// console.log(opponent.select)
// Gather Data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // skeleton
    if (opponent.select == "Skeleton") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.green(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."],
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
    // assassin
    if (opponent.select == "Assassin") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.green(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."],
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
    // zombie
    if (opponent.select == "Zombie") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.green(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."],
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
