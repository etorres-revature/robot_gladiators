let playerRobotName = window.prompt(
  "Please provide a name for your hunk of metal..."
);
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Domo Irigato, Mr. Roboto", "Amy Android", "Bob Borg"];
let enemyHealth = 50;
let enemyAttack = 12;

const fight = (enemyName) => {
  // Alert players that they are starting the round
  window.alert("The fight has commenced!!");

  let promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );

  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth -= playerAttack;

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

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
    } else {
      window.alert(
        playerRobotName + " still has " + playerHealth + " health left."
      );
    }
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }
