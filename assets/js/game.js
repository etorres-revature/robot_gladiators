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
    var promptFight = window.prompt(
      'Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    //if player skips confirm and stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

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

for (var i = 0; i < enemyNames.length; i++) {
  // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
  if (playerHealth > 0) {
    window.alert("WELCOME TO ROBOT GLADIATORS!!! \n\nThis is round " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
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
