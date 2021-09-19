let randomAttackUpgrade = 0;
let randomHealthUpgrade = 0;

const randomNumber = (min, max) => {
  let value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

const fightOrSkip = () => {
  //ask player if he/she/they would like to fight or skip using fightOrSkip() function
  let promptFight = window.prompt(
    'Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
  );

  //conditional recursive call
    if (!promptFight) {
      window.alert("Please try again; you must enter a valid answer to proceed");
      return fightOrSkip();
    }

   //if player skips confirm and stop the loop
   if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    let confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(
        playerInfo.name + " has decided to skip this fight. Goodbye!"
      );
      // subtract money from playerInfo.money for skipping
      playerInfo.money -= Math.max(0, playerInfo.money - 10);
      console.log("playerInfo.money:", playerInfo.money);
    }
  }
}

const fight = (enemy) => {
  // repeat and execute as long as the enemy-robot is alive
  while (enemy.health > 0 && playerInfo.health > 0) {
    fightOrSkip(); 

    // generate random damage value based on player's attack power
    let damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    console.log("enemy damage", damage);

    //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
    enemy.health = Math.max(0, enemy.health - damage);

    // Log a resulting message to the console so we know that it worked.
    console.log(
      playerInfo.name +
        " attacked " +
        enemy.name +
        ". " +
        enemy.name +
        " now has " +
        enemy.health +
        " health remaining."
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      //award player money for winning
      playerInfo.money += 20;

      //leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    damage = randomNumber(enemy.attack - 3, enemy.attack);
    console.log("player damage", damage);

    // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
    playerInfo.health = Math.max(0, playerInfo.health - damage);

    // Log a resulting message to the console so we know that it worked.
    console.log(
      enemy.name +
        " attacked " +
        playerInfo.name +
        ". " +
        playerInfo.name +
        " now has " +
        playerInfo.health +
        " health remaining."
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      //leave while() loop if player is dead
      break;
    } else {
      window.alert(
        playerInfo.name + " still has " + playerInfo.health + " health left."
      );
    }
  }
};

const getPlayerName = () => {
  let name = "";

  while(!name){
    name = window.prompt("Please provide a name for your hunk of metal...")
  }

  console.log("Your robot's name is " + name + ".");

  return name;
}

let playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: () => {
    health = 100;
    money = 10;
    attack = 10;
  },
  refillHealth: () => {
    if (playerInfo.money >= 5) {
      // increase health and decrease money
      randomHealthUpgrade = randomNumber(25, 40);
      playerInfo.health += randomHealthUpgrade;
      playerInfo.money -= 5;

      window.alert(
        "Refilling player's health by " +
          randomHealthUpgrade +
          " for five dollars."
      );
    } else {
      window.alert(playerInfo.money + " is not enough to buy this item...");
    }
  },
  upgradeAttack: () => {
    if (playerInfo.money >= 5) {
      // increase attack and decrease money
      randomAttackUpgrade = randomNumber(5, 8);
      playerInfo.attack += randomAttackUpgrade;
      playerInfo.money -= 5;

      window.alert(
        "Upgrading player's attack by " +
          randomAttackUpgrade +
          " for five dollars."
      );
    } else {
      window.alert(playerInfo.money + " is not enough to buy this item...");
    }
  },
};

let enemyInfo = [
  {
    name: "Domo Irigato, Mr. Roboto",
    attack: randomNumber(8, 14),
  },
  {
    name: "Amy Android",
    attack: randomNumber(9, 13),
  },
  {
    name: "Carl Cyborg",
    attack: randomNumber(5, 20),
  },
];

//function to start a new game
const startGame = () => {
  //reset player stats
  playerInfo.health = 100;
  playerInfo.reset();

  for (let i = 0; i < enemyInfo.length; i++) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    if (playerInfo.health > 0) {
      window.alert(
        "WELCOME TO ROBOT GLADIATORS!!! \n\nThis is round " + (i + 1)
      );

      // pick new enemy to fight based on the index of the enemy.names array
      let pickedEnemyObj = enemyInfo[i];

      // reset enemy.health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);

      // if player is still alive and we're not at the last enemy in the array
      if (i < enemy.names.length - 1 && playerInfo.health > 0) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );

        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert(
        playerInfo.name +
          " has lost in battle to " +
          pickedenemy.name +
          "! Game Over!!!"
      );
      break;
    }
  }

  //play again
  endGame();
};

// function to end the entire game
const endGame = () => {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerInfo.money +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  let playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

const shop = () => {
  //   console.log("entered the shop");

  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? \n\nPlease enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      playerInfo.refillHealth();
      break;

    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
      break;

    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

//start the game when the page loads
startGame();
