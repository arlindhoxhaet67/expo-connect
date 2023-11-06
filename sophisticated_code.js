/* 
   Filename: sophisticated_code.js
   Description: This code demonstrates a sophisticated, elaborate and complex JavaScript program that serves as a simulation for a virtual pet game.
*/

// VirtualPet class represents a virtual pet with various attributes and behaviors
class VirtualPet {
  constructor(name, species, age, health, happiness) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.health = health;
    this.happiness = happiness;
  }

  eat(food) {
    if (food === "healthy") {
      this.health += 20;
    } else if (food === "unhealthy") {
      this.health -= 10;
      this.happiness -= 10;
    } else {
      console.log("Invalid food type!");
    }
  }

  play() {
    this.happiness += 10;
  }

  sleep() {
    this.happiness += 5;
  }

  status() {
    console.log(`${this.name}, a ${this.species}, is ${this.age} years old.`);
    console.log(`Health: ${this.health}`);
    console.log(`Happiness: ${this.happiness}`);
  }
}

// Function to create a virtual pet object
function createVirtualPet() {
  let name = prompt("Enter a name for your virtual pet:");
  let species = prompt("Enter the species of your virtual pet:");
  let age = parseInt(prompt("Enter the age of your virtual pet:"));
  let health = parseInt(prompt("Enter the health of your virtual pet (0-100):"));
  let happiness = parseInt(prompt("Enter the happiness level of your virtual pet (0-100):"));

  return new VirtualPet(name, species, age, health, happiness);
}

// Function to simulate the virtual pet game
function virtualPetGame() {
  console.log("Welcome to the Virtual Pet Game!");

  let pet = createVirtualPet();

  while (true) {
    let choice = prompt(`\nChoose an action for ${pet.name}\n1. Feed\n2. Play\n3. Sleep\n4. Status\n5. Quit`);

    if (choice === "1") {
      let foodType = prompt("Enter the type of food - healthy/unhealthy:");
      pet.eat(foodType);
    } else if (choice === "2") {
      pet.play();
    } else if (choice === "3") {
      pet.sleep();
    } else if (choice === "4") {
      pet.status();
    } else if (choice === "5") {
      console.log("Thank you for playing the Virtual Pet Game!");
      break;
    } else {
      console.log("Invalid choice. Try again!");
    }
  }
}

// Start the virtual pet game
virtualPetGame();