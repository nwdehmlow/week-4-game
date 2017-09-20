
var playerchosen = false

var enemychosen = false

var player = {};

var enemy = {};

var enemiesdefeated = 0;

gameOver = false;

var yoda = {
	name: "Yoda",
	hp: 120,
	ap: 8,
	cap: 8
}

var boba = {
	name: "Boba Fett",
	hp: 150,
	ap: 20,
	cap: 20
}

var ewok = {
	name: "Wicket",
	hp: 100,
	ap: 20,
	cap: 20
}

var lando = {
	name: "Lando",
	hp: 180,
	ap: 15,
	cap: 15
}

function pickChar(playerCharacter){
	player.name = playerCharacter.name;
	player.hp = playerCharacter.hp;
	player.ap = playerCharacter.ap;
	player.cap = playerCharacter.cap;
}

function pickEnemy(chosenEnemy){
	enemy.name = chosenEnemy.name
	enemy.hp = chosenEnemy.hp
	enemy.ap = chosenEnemy.ap
	enemy.cap = chosenEnemy.cap
}

function moveToEnemies(){
	$(".availablechar").removeClass("availablechar").addClass("enemychar")
	$("#enemies").append($(".enemychar"));
	console.log("move to enemies")
}


function resetGame() {
  $("#yoda").children(".health").html(yoda.hp);
  $("#boba").children(".health").html(boba.hp);
  $("#ewok").children(".health").html(ewok.hp);
  $("#lando").children(".health").html(lando.hp);

  $(".charimg").removeClass("yourchar enemychar defenderchar").addClass("availablechar");
  var available = $(".availablechar").show();
  $("#characterlist").html(available);

  $("#game-message").empty();
  $("#restart").hide();

  characterSelected = false;
  defenderSelected = false;
  enemiesDefeated = 0;
  gameOver = false;

  character = {};
  defender = {};

};

$(document).ready(function() {

	$("#restart").hide();

	$("#yoda").on("click", function() {
		console.log("yoda is selected")
		
		if(playerchosen == false) {
			$("#gamestats").empty();

			pickChar(yoda)
			playerchosen = true;

			$("#yoda").removeClass("availablechar").addClass("chosenchar")
			$("#chosenchar").append(this);

			moveToEnemies();
		}
		else if ((playerchosen == true) && (enemychosen == false)) {
			if($("#yoda").hasClass("enemychar")) {
			   $("#gamestats").empty();

			   pickEnemy(yoda);
			   enemychosen = true;

			  $("#yoda").removeClass("enemychar").addClass("defenderchar")
			  $("#defender").append(this);

				}
			}
		})

		$("#boba").on("click", function() {
		console.log("boba is selected")
		
		if(playerchosen == false) {
			$("#gamestats").empty();

			pickChar(boba)
			playerchosen = true;

			$("#boba").removeClass("availablechar").addClass("chosenchar")
			$("#chosenchar").append(this);

			moveToEnemies();
		}
		else if ((playerchosen == true) && (enemychosen == false)) {
			if($("#boba").hasClass("enemychar")) {
			   $("#gamestats").empty();

			   pickEnemy(boba);
			   enemychosen = true;

			  $("#boba").removeClass("enemychar").addClass("defenderchar")
			  $("#defender").append(this);

				}
			}
		})

				$("#ewok").on("click", function() {
		console.log("ewok is selected")
		
		if(playerchosen == false) {
			$("#gamestats").empty();

			pickChar(ewok)
			playerchosen = true;

			$("#ewok").removeClass("availablechar").addClass("chosenchar")
			$("#chosenchar").append(this);

			moveToEnemies();
		}
		else if ((playerchosen == true) && (enemychosen == false)) {
			if($("#ewok").hasClass("enemychar")) {
			   $("#gamestats").empty();

			   pickEnemy(ewok);
			   enemychosen = true;

			  $("#ewok").removeClass("enemychar").addClass("defenderchar")
			  $("#defender").append(this);

				}
			}
		})

		$("#lando").on("click", function() {
		console.log("lando is selected")
		
		if(playerchosen == false) {
			$("#gamestats").empty();

			pickChar(lando)
			playerchosen = true;

			$("#lando").removeClass("availablechar").addClass("chosenchar")
			$("#chosenchar").append(this);

			moveToEnemies();
		}
		else if ((playerchosen == true) && (enemychosen == false)) {
			if($("#lando").hasClass("enemychar")) {
			   $("#gamestats").empty();

			   pickEnemy(lando);
			   enemychosen = true;

			  $("#lando").removeClass("enemychar").addClass("defenderchar")
			  $("#defender").append(this);

				}
			}
		})

	$("#attackbutton").on("click", function() {
    console.log("Attack selected");

    console.log("player = " + JSON.stringify(player));
    console.log("enemy = " + JSON.stringify(enemy));

	    if (playerchosen && enemychosen && !gameOver) {
	      enemy.hp = enemy.hp - player.cap;
	      $(".enemy-player").children(".health").html(enemy.hp);
	      $("#gamestats").html("<p>You attacked " + enemy.name + " for " + player.cap + " damage.<p>");

	      player.cap = player.cap + player.ap;

	      if (enemy.hp > 0) {
	        player.hp = player.hp - enemy.ap;
	        $(".chosenchar").children(".hp").html(player.hp);

	        if (player.hp > 0) {
	          $("#gamestats").append("<p>" + enemy.name + " attacked you back for " + enemy.ap + " damage.</p>");
	        } else {
	          gameOver = true;
	          $("#gamestats").html("<p>You lost the fight!</p><p>Play again?</p>");
	          $("#restart").show();
	        }
	      } else {
	        enemiesdefeated++;
	        enemychosen = false;
	        $("#gamestats").html("<p>You have defeated " + enemy.name + ". Choose another enemy.</p>");
	        $(".enemy-character").hide();

	        if (enemiesdefeated === 3) {
	          gameOver = true;
	          $("#gamestats").html("<p>You win!</p><p>Play again?</p>");
	          $("#restart").show();
	        }
      }
    } else if (!playerchosen && !gameOver) {
      $("#gamestats").html("<p>You must first select your game character.</p>");
    } else if (!enemychosen && !gameOver) {
      $("#gamestats").html("<p>You must choose an enemy to fight.</p>");
    }

    console.log("character = " + JSON.stringify(player));
    console.log("enemy = " + JSON.stringify(enemy));
  });

	});

