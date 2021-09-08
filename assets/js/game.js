let playerRobotName = window.prompt(
  "Please provide a name for your hunk of metal..."
);
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Domo Irigato, Mr. Roboto", "Amy Android", "Bob Borg"];
let enemyHealth = 0;
let enemyAttack = 12;

const fight = (enemyName) => {
  // repeat and execute as long as the enemy-robot is alive
  while (enemyHealth > 0 && playerHealth > 0) {
    // ask player if they'd liked to fight or run
    let promptFight = window.prompt(
      'Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    //if player skips confirm and stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      let confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(
          playerRobotName + " has decided to skip this fight. Goodbye!"
        );
        // subtract money from playerMoney for skipping
        playerMoney -= 10;
        console.log("playerMoney:", playerMoney);
        break;
      }
    }

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth -= playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
      playerRobotName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      //award player money for winning
      playerMoney += 20;

      //leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth -= enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
      enemyName +
        " attacked " +
        playerRobotName +
        ". " +
        playerRobotName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerRobotName + " has died!");
      //leave while() loop if player is dead
      break;
    } else {
      window.alert(
        playerRobotName + " still has " + playerHealth + " health left."
      );
    }
  }
};

//function to start a new game
const startGame = () => {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (let i = 0; i < enemyNames.length; i++) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    if (playerHealth > 0) {
      window.alert(
        "WELCOME TO ROBOT GLADIATORS!!! \n\nThis is round " + (i + 1)
      );

      // pick new enemy to fight based on the index of the enemyNames array
      let pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      // if player is still alive and we're not at the last enemy in the array
      if (i < enemyNames.length - 1 && playerHealth > 0) {
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
        playerRobotName +
          " has lost in battle to " +
          pickedEnemyName +
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
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
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
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 5) {
        window.alert("Refilling player's health by 40 for 5 dollars.");

        // increase health and decrease money
        playerHealth += 40;
        playerMoney -= 5;
      } else {
        window.alert(playerMoney + " is not enough to buy this item...");
      }
      break;

    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 5) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        // increase attack and decrease money
        playerAttack += 8;
        playerMoney -= 5;
      } else {
        window.alert(playerMoney + " is not enough to buy this item...");
      }
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
