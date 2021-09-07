let playerRobotName = window.prompt("Please provide a name for your hunk of metal...")
let playerHealth = 100;
let playerAttack = 10;

console.log("PlayerName:", playerRobotName +";", "playerHealth", playerHealth +";", "; playerAttack", playerAttack+".")

let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

const fight = () => {
     // Alert players that they are starting the round
    window.alert("The fight has commenced!!")

     //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
     enemyHealth -= playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerRobotName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth -= enemyAttack

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerRobotName + ". " + playerRobotName + " now has " + playerHealth + " health remaining."
      );
}

fight();