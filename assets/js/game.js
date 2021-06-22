var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]
var enemyHealth = 50;
var enemyAttack = 12;

var greetedUser = false
var fightEnded = false
var promptFight = null

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var fight = function(enemyName) {
    // Alert players that they are starting the round
    if (greetedUser == false) {
        window.alert("Welcome to Robot Gladiators!");
        greetedUser = true
    }
    if (promptFight !== 'FIGHT' && promptFight !== 'fight') {
        promptFight = window.prompt("Your network of battle agents have found you a fight with " + enemyName + ". Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    }
    if (promptFight === 'FIGHT' || promptFight == 'fight') {

        while(fightEnded === false && playerHealth > 0 && enemyHealth > 0) {
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;
        
            // Log a resulting message to the console so we know that it worked.
            // put new code under this
            console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
        
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                playerMoney = playerMoney + 1;
                window.alert('You now have ' + playerMoney + ' money amount.');
                fightEnded = true;
                break;
            } 
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
        
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
            if (enemyHealth > 0) {
                playerHealth = playerHealth - enemyAttack;
            
            // put new code under this
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            }
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                playerMoney = playerMoney -1;
                window.alert('You now have ' + playerMoney + ' money amount.');
                fightEnded = true;
                break;
            } 
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }

        
        var fightAgain = prompt('Fight again? (y/n)');
        if (fightAgain === 'y') {
            playerHealth = 100;
            enemyHealth = 50;
            fightEnded = false
            fightAgain = null
            fight(enemyName)
        }
        else {
            enemyHealth = 50;
            playerHealth = 100;
            fightEnded = false
            fightAgain = null
            promptFight = null
            window.alert('Well this is fun. How was your day?')
            window.alert('Just Okay?')
            window.alert("Sorry, I didn't mean it that way. Maybe there's another robot to fight.")
        }
        
    }
    else if (promptFight === 'SKIP' || promptFight === 'skip') {
        var confirmSkip = window.confirm('Do you reallly want to skip the fight? I will steal money from your player money value if you do.')
        if (confirmSkip) {
            window.alert("That's okay, not every day should be a battle you know.")
            playerMoney = playerMoney - 1
            window.alert('You now have ' + playerMoney + ' money amount.')
            fight(enemyName)
        }
        else {
            windows.alert("Okay let's try this again, shall we?")
            fight(enemyName)
        }
    }
    else {
        window.alert('Not going to say anything? Okay.')
    }
        
    
  };

for(var i = 0; i < enemyNames.length; i++) {
    debugger;
    fight(enemyNames[i], i);
}