let tilemap1 = [
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  "b.........r.................rr...................rr................................................b",
  "b.........rr................r....................rr................................................b",
  "b..........r.......t........r.........t..........rr.....rrrrrr.....................................b",
  "b..........rrr.........t....r...................trr.rrrrr....rrrrrrrrrrrr...rrrrrrrr.......rr......b",
  "b....t.......rr.............r....................rr.r....................rrrr......rrrrrrrrrrrrrrrrb",
  "b.............r.............r....................rr.r......rr.............r...............r........b",
  "b........t....r....t..rrrrrrr..t.....rrrrr.......rr.r..rrrr..r............r...............r........b",
  "b.............r......rr.............rr...rrr.....rr.rrrr.....rr......t....r.......t.......r........b",
  "b.............r.....rr..............r.......rr...rr..rr.......r...........r...............r...t....b",
  "brrrrrr....rrrr....rr...............r....t...rr..rr......t.t..rr..........r...........rrrrrr.......b",
  "b.....rr.rrr..r...rr.....t..........r.......t.rr.rr...t........r..........r................r.......b",
  "b......rrrr...rrrrr.................r..t.......rrrrr.......t...r..........r.......t........r.......b",
  "b.........rrrrr.....................r...........rrrr.......t..rr..........r............t...rrrrr...b",
  "b..........r........................r....t..t...rrrrr...t.....r...........rr...............r.......b",
  "b..........r........................rr...........rr.rrr......rr.....t......r....t.........rr.......b",
  "b...t.....rr.........................rr.....rrrr.rr...r.....rr.............r..............r........b",
  "b........rr....................t......rr...rr..r.rr...rrrrrrr..........t...r.............rr........b",
  "b......rr........t.....................rrrrr...r.rr........................r.......t...rrrr..r..t..b",
  "b.....rr................t......................r.rrt.......................r..........rr..rrrr.....b",
  "b....rr.....................tt.................r.rr.......................rr..........r...r.......rb",
  "b....r.....................................t...r.rr..........t.....t......r....rr.....r...r..t...rrb",
  "b....r.........................................r.rr......................rr...rrr.....r.........rr.b",
  "b....r.........................................r.rr....................rrr....r.......rrrr....rr...b",
  "b....rrrr....rrrrrrrrrrrrrrrrrrrrr.............r.rr..................rrr......r.........rrrrrr.....b",
  "b.......rrrrrr.......rr..........rrrrrrrrrrrrrrr.rr................rrr.rrrrrrrrrr....rrrr...rr.....b",
  "b.t...................r..........................rr...............rr.......rr...r............r.....b",
  "b......................r.........................rr..t...........rr........r....r............r.....b",
  "b......................rr...................t....rr............rrr..............r.......t....rr....b",
  "b..............t........r.........t............t.rr.........t..r....................r......rrrr....b",
  "b......................rrr.......................rr...........rr.....t..............rrrrrrrr..rrr..b",
  "b...................t..r.rr.............rr.......rr...........r............................r.......b",
  "b....t...t............r...r...........rr.rr......rr...........r...........t................r.......b",
  "b....................rr...r...t......rr..........rr..........rr...............t...t........r.......b",
  "b....................r.....r........rr.........t.rr..........rr......................t.....r...t...b",
  "b...................r......r........r............rr.t.........r............................r.......b",
  "b.....t............rr......r........r............rr.....t.....r............................rr......b",
  "b............t.....r.......r.......rr.......r....rr...........rrr.......t............t.............b",
  "b.................rr....t..r.....rrrr......rr...rrr...........r.rrr.............t..................b",
  "b.................r........rrrrrrr..r......r....rrr...........r...r...t............................b",
  "b................r........hr........rrrrrrr..t..rrr..........rr...rr...............................b",
  "b...............rr.........r..t.....r...........rrr.........rr.....r..........................t....b",
  "b.......t.......r..........r........r...........rrr.........r......r......t..........t.............b",
  "b..............rr.....t....r.......rr..........rrrr........rr......r...............................b",
  "b..t...........r..........r....rrrrr..........rr.rr.t....rrr.......rrr.............................b",
  "b.............r...........r....r..............r..rr...rrrr...........rrrrrrrrrrr...................b",
  "b............rr..........r.....r..............r..rr...r........t......rr...r...rrrrrrrrrrrrrrrrrrr.b",
  "b...........rr...........r.....r.............rr..rr..rr.............rr.....r..........r..........r.b",
  "b.........rrr......t....rr.....r........t....r...rr..r............rr.......r..........r..........r.b",
  "b.......rrr.............r......rrrr.........rr...rr..r..........rrr........r....t.....r...t...t..r.b",
  "b...rrrr.r..............r.........r.........r....rr.rr..........r..........r..........r..t.......rrb",
  "b..rr....r..............r.........r........rr....rr.r....t.....rr.....t....r..........r......t....rb",
  "b..r....rr.............r..........r.......rr.....rr.r..........r...........r..........r..t......t.rb",
  "b..r....r..t.......t...r.....t...........rr......rr.r..........r...........rrrrrrr..rrr...t....t..rb",
  "b..r....r..............r.................r.......rr.r..........r...........r.....rrrr.r...........rb",
  "b..r..t.r..............r................rr..t....rr.r..........r...........r..........r.....t.t...rb",
  "b..r....r......t......r................rr........rr.r.....t....r.........t.r..........r.tt.......rrb",
  "b..r....r.............r...............rr.........rrrr..........rrrrrrr.....r..........rr...t.....r.b",
  "b..r....r.............r.......t.......r..........rrr...........r.....r.....r...........r........rr.b",
  "b..r....r.............r.............rrr..........rrr...........r.....r.....r...........rr.....rr...b",
  "b..r.rrrr...........rrrr............r.rr...t.....rrr..........rr.....r....rr............rr..rrr....b",
  "b..rrr..r..........rr..r...........rr..rr........rrr....t.....r.....rr....r...rr.........rrrr......b",
  "b.......r.........rr...r...........r....r....t...rrr..........r....rr....rr..r.r....t......r.......b",
  "b.......r........rr.....rr.........r....rr.......rrr.........r.....r.....r...r.r...........rr....t.b",
  "b.......r........r........rrr.....rr.....r.......rrr.........r.....r....rr...r.r............r....t.b",
  "b.......r....rrrrr...........rrr..r......r.......rr.........rr....rr....r....r.r............r...tt.b",
  "b.......rrrrrr..................rrr...t..r.......rr.........r.....rrr...r...rr.r............r...tt.b",
  "b.......rr............t..................r.......rr....t...rr.....r.r...r..rr..r............r...tt.b",
  "b....t..r..........t.....................r.......rr.t......r......r.r...r.rr..........t.....r...tt.b",
  "b.......r................................r..t....rr........r...t..r.rr..rr..................r...t..b",
  "b.......r....................t...........r.......rr.......r.......r..rrrr..................rr..tt..b",
  "b.......r....t........rrrr.........rrrrrrr.......rr.......r.......r.t...r..................r...tt..b",
  "b.......r............rr..rr.......rr.....rrrr....rr......r........r....rr..................r...tt..b",
  "b.......r............r.....r......r..............rr......rrrrr....r....r..........t........r...tt..b",
  "b.t.....r...........rr......rr....r..............rr......r...r....rrrrrr..................rr...t...b",
  "b.......r....t......r.........rrrrr......t.......rr......r...r........rr..............t...r....t...b",
  "b.......r..........r....rrrr...r.....t...........rr..t...r...r.........r..................rr...t...b",
  "b.....rrr.........rr...rr..r...r........rrrr.....rr.....rr...r........rr...................r...ttt.b",
  "b....rr.r........rr...rr...r..rr........r..r...t.rr.....r...rr..tt...rrr...................r...ttt.b",
  "b....r..r......rrr.........r..r........rr..r.....rr....rr..rr......rrr.r........t..........r...ttt.b",
  "b.t..r..rr..rrr............rrrr........r...r.....rr....r..rr......rr...rr...r............rrr..tttt.b",
  "b....r...rrrr...........t....r.....t...r...r...t.rr....r..r......rr....rrrrrr......rrrrrrr....tttt.b",
  "b....r..............t........r........rr...r.....rr...r...r....rrr.....r....rr..rrrr..........tttt.b",
  "b....r.......................r......rrr....r.....rr...r..rr....r.......r....rrrrr.............tttt.b",
  "b....rr.t......t..rr.....t...rr...rrr......r.....rr...r..r..rrrr....t..r...rr..........t.....ttttt.b",
  "b.....r.........rr...........rrrrrr........r.....rr..r...rrrr.rr.......r...r..........tt.....ttttt.b",
  "b.t...r....t....r............r.........t...r.....rr..r.........rr......r...r.......ttt.t....tttt.t.b",
  "b.....rr........r.........t..r.............r..t..rr..r..........rr..t..r...r......ttt...t..ttttttt.b",
  "b......rr.......r............r.............r.....rr..r..........rr..t..r...r......tt....tttttttttt.b",
  "b.......r....t..rr...t.....rrr.....t.......r.....rr..r.........rr......r.t.rr....tt....ttttttttttt.b",
  "b......rr......rrrr......rrrrr.............r.....rr..rrr.....rrr.......r....r...ttt..ttttttt.t.t.ttb",
  "b......r.......r..rrrrrrr...r............rrr.....rr....rrrrrr..........rr...r...tt..ttttttt.tttt.ttb",
  "b......r.....rr.............r...........rr.......rr.....................r..rr...tt.ttt.tttttt.t..ttb",
  "b..t...rrrrrrr..............rrrrrrr....rr........rr..........tt...tt.t..rrrr...tt.tttttttttt.tt..ttb",
  "b.....................t...........r...rr.........rr....t.........ttt.....rr..ttttttt.ttt.t...t..tttb",
  "b.................................r...r.......t..rr.......t......tttttttt...tt.ttt..tt..t....t.ttttb",
  "b...........t....................rrrrrr...t......rr.............tttt.......ttttt...t...tt....tt.tt.b",
  "b.......................t........r...............rr...........ttt.tttttttttttttttttttttt......tt...b",
  "b................................................rr..................ttttt.......tttt..ttttttt.....b",
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
];

let tilemap2 = [
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  "b..rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr....b",
  "b..r...r.................r..................rr...b",
  "b.rr...r.................r...................r...b",
  "b.r....r.................r...................rr..b",
  "brr....r.................r....................r..b",
  "br.....r.................r..rrrrrrrr..........rr.b",
  "br.....r.................r.rr......rrr.........r.b",
  "br.....r...............rrrrr.........rr........r.b",
  "br.....rrr.............r.r............rr.......r.b",
  "br.......rr...........rr.r.............r.......r.b",
  "br........r..........rr..r.............rr...rrrrrb",
  "br........rrrrrrrrrrrr...r..............rrrrr...rb",
  "br.........r.............r...............r......rb",
  "br........rrr............r..............rr......rb",
  "br.......rr.rr...........r.............rr.......rb",
  "br......rr...rr..........r.............r........rb",
  "br.....rr.....rr.........r............rr........rb",
  "br....rr.......rr........r...........rr.........rb",
  "br....r.........r........r..........rr..........rb",
  "br...rr.........rr.......r..........r...........rb",
  "br...r...........rr......r..........r...........rb",
  "br...r............r......r.........rr...........rb",
  "br...r............r......r.........r............rb",
  "brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrb",
  "br....r............r.....r............r.........rb",
  "br....r............r.....r............r.........rb",
  "br....r............rr..rrr............r.........rb",
  "br....r.............r.rr.r............r.........rb",
  "br....rr............r.r..r............r.........rb",
  "br.....r............rrr..r............r.........rb",
  "br.....r..........rrr....r........rrrrrrrrrr....rb",
  "br.....r.........rr.r....r.....rrrr........rrrrrrb",
  "br.....r.......rrr..r....r...rrr................rb",
  "br.....r.....rrr....r....r.rrr..................rb",
  "br.....r.rrrrr......r....rrr....................rb",
  "brrrrrrrrr...r......rr...r......................rb",
  "br...........r.......rr..r......................rb",
  "br...........r........rrrr.....................rrb",
  "br...........r...........rrrrrrr...............r.b",
  "br...........r...........r.....rrr.............r.b",
  "br...........r...........r.......rr............r.b",
  "br...........r...........r........rr..........rr.b",
  "brr.........rr...........r.........rr........rr..b",
  "b.rr........r............r..........rrr.....rr...b",
  "b..rr......rr............r............rrr...r....b",
  "b...rrr....r.............r..............rrrrr....b",
  "b.....rrrr.r.............r..........rrrrr........b",
  "b........rrrrrrrrrrrrrrrrrrrrrrrrrrrr............b",
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
];

let tilemap3 = [
  "..................................................",
  "..................................................",
];

// Global Variables
let moveToHTP = false;
let startButton, titleBox, HTPButton, backButton, information;
let player,
  game = false,
  tileSize = 50,
  timer = 30,
  tornadoStrength = 15;
let chaserHealth = 25,
  time = 0,
  stage = 0,
  currentTiles,
  weatherText;
let movementSpeed = 10,
  spawnSuccess = true,
  attemptingSpawn;
let stormChaser,
  spawnAttempt = false,
  spawnX,
  spawnY,
  enemies = [];
let maxEnemies = 10,
  lastDamageTime = 0,
  damageCooldown = 100;
let currentWave = 0,
  enemiesToSpawn = 10,
  enemiesRemaining = 0;
let coinCounter = 0,
  gameOver = false,
  gameOverButton,
  runMM = false;
let postdeathCorrection = false;
let tree, tiles1, tiles2;

// Setup Function
function setup() {
  createCanvas(windowWidth, windowHeight);
  mainMenu();
  createGroups()
  enemies = new Group();
}

// Main Menu
function mainMenu() {
  runMM = true;
  startButton = new Sprite(width / 2, height / 2, width / 3, height / 5, "k");
  startButton.color = "#0000ff";
  startButton.text = "Click to Play";
  startButton.textSize = height / 32;

  titleBox = new Sprite(width / 2, height / 5, width / 1.2, height / 5, "n");
  titleBox.color = "#0000ff";
  titleBox.text = "Tornad.io";
  titleBox.textSize = height / 16;

  HTPButton = new Sprite(width / 2, height / 1.25, width / 3, height / 5, "k");
  HTPButton.text = "How to Play";
  HTPButton.textSize = height / 32;
  HTPButton.color = "#0000ff";
}

/**
 * When the player is removed, these colliders are also removed. Re-creating the colliders solves this problem.
 */
function addCollisions() {
  player.overlaps(house, (p, h) => {
    tornadoStrength += 5;
    h.remove();
    player.d = tornadoStrength;
    console.log("hit house");
  });
  player.collides(tree, (p, t) => {
    console.log("hit tree");
    tornadoStrength += 3;
    t.remove();
    player.d = tornadoStrength;
  });
}

// Draw Loop
function draw() {
  back_Ground();
  how_PlayButton();
  if (stage === 1 && tree.mouse.hovering()) {
    console.log("tree selected");
  }
  if (stage === 1 && house.mouse.hovering()) {
    console.log("house selected");
  }
  camera.on()
  tiles1?tiles1.draw():{}
  tiles2?tiles2.draw():{}// Draw if applicable
  camera.off()

  //console.log(enemies.length)
  if (stage === 1) {
    //console.log("stage 1 check")
    playerMovement();
    cameraControl();
  } else if (stage === 2) {
    //console.log("stage 2 check")
    playerMovement();
    cameraControl();
    chaserTowardsPlayer();
  }

  if (game) {
    displayCoinBalance();
    displayTornadoStrength();
  }

  if (runMM) {
    if (startButton.mouse.presses()) {
      cleanupMenu();
      stage = 1;
      mainGame();
      runMM = false;
    }
  }

  if (backButton && backButton.mouse.presses()) {
    goBack();
  }

  if (game) {
    textSize(20);
    time += deltaTime;
    weatherText = text("Weather Emergency in : " + timer, 200, 200);
    if (time >= 1000 && timer > 0) {
      timer--;
      time = 0;
    }
    if (timer === 1) {
      stage = 2;
      mainGame();
      addCollisions();
      timer = 0;
      time = 0;
    }
    displayCoinBalance();
  }

  if (tornadoStrength <= 0 && !gameOver) {
    gameOver = true;
    enemies.forEach((enemy) => {
      enemy.visible = false; // makes the sprite invisible
    });
    stage = 1;
    gameOverScreen();
  }

  if (gameOver && gameOverButton && gameOverButton.mouse.presses()) {
    moveToHTP = false;
    // startButton;
    // titleBox;
    // HTPButton;
    // backButton;
    // information;
    // player;
    game = false;
    tileSize = 50;
    timer = 30;
    tornadoStrength = 11;
    chaserHealth = 25;
    time = 0;
    stage = 0;
    // currentTiles;
    // weatherText;
    movementSpeed = 10;
    spawnSuccess = true;
    // attemptingSpawn;                                //should put this seperately in a function
    // stormChaser;
    spawnAttempt = false;
    // spawnX;
    // spawnY;
    enemies = [];
    maxEnemies = 10;
    lastDamageTime = 0;
    damageCooldown = 100;
    currentWave = 0;
    enemiesToSpawn = 10;
    enemiesRemaining = 0;
    // coinCounter;
    // gameOverButton;
    runMM = false;
    gameOver = false;
    clearGroups1();
    clearGroups2();
    allSprites.remove();
    gameOverButton.remove();
    mainMenu();
    // postdeathCorrection = true;
  }
}

// Helper Functions
function cleanupMenu() {
  startButton.remove();
  titleBox.remove();
  HTPButton.remove();
}

function back_Ground() {
  if (stage === 1 || stage === 2) {
    background(0, 152, 0);
  } else if (runMM) {
    background(100, 100, 100);
  }
}

function how_PlayButton() {
  // to click the how to play button
  if (moveToHTP == false) {
    if (runMM) {
      if (HTPButton.mouse.presses()) {
        moveToHTP = true;
        startButton.remove();
        titleBox.remove();
        HTPButton.remove();
        createHowToPlay();
      }
    }
  } else if (moveToHTP == true) {
  }
}

function createHowToPlay() {
  // loads how to play sprites (menu)
  information = new Sprite(
    width / 2,
    height / 2.25,
    width / 1.4,
    height / 1.4,
    "n"
  );
  information.text = "To play this game you have to be very cool.";
  information.textSize = height / 64;
  backButton = new Sprite(width / 10, height / 1.1, width / 8, height / 8, "k");
  backButton.text = "Go Back";
  backButton.textSize = height / 32;
}

function goBack() {
  // goback function to main menu
  information.remove();
  backButton.remove();
  moveToHTP = false;
  mainMenu();
}

function createGroups(){
  spriteParent = new Group();
  spriteParent.collider = "s";
  spriteParent.w = tileSize;
  spriteParent.h = tileSize;

  border = new spriteParent.Group();
  border.tile = "b";
  border.w = tileSize;
  border.h = tileSize;
  border.visible = true;
  border.color = color(0, 0, 255);

  road = new spriteParent.Group();
  road.tile = "r";
  road.w = 51;
  road.h = 51;
  road.debug = false;
  road.collider = "n";
  road.color = color(128, 128, 128);
  road.strokeWeight = 0;

  tree = new spriteParent.Group();
  tree.tile = "t";
  tree.w = tileSize;
  tree.h = tileSize;
  tree.d = 30;
  tree.collider = "k";
  // tree.debug = true;
  tree.scale = 1.5;
  tree.color = color(0, 200, 0);

  house = new spriteParent.Group();
  house.tile = "h";
  house.w = tileSize;
  house.h = tileSize;
  house.debug = false;
  house.scale = 0.5;
  house.color = color(100, 85, 100);

  // player = new Sprite(70, 70, tornadoStrength, tornadoStrength, "d");
  // player.d = tornadoStrength;
  // player.color = color(160, 160, 160);
  // player.rotationLock = true;
}

function mainGame() {
  player = new Sprite(70, 70, tornadoStrength, tornadoStrength, "d");
  player.d = tornadoStrength;
  player.color = color(160, 160, 160);
  player.rotationLock = true;
  addCollisions()
  if (stage == 1) {
    startButton.remove();
    titleBox.remove();
    HTPButton.remove();

    tiles1 = new Tiles(tilemap1, 0, 0, tileSize, tileSize);
  
    game = true;

  } else if (stage == 2) {
    clearGroups1();

    tiles2 = new Tiles(tilemap2, 0, 0, tileSize, tileSize);

    game = true;

    // Don't kill the player, just TP them
    player.x = 1250;
    player.y = 1200;

    startWave();
  }
}

function startWave() {
  enemiesRemaining = enemiesToSpawn; // Set the enemies left in the wave
  spawnEnemies();
  // increase the count for the next wave
  enemiesToSpawn++;
}

function spawnEnemies() {
  if (gameOver || !game || stage !== 2) return; // Exit if the game is over or paused. Or enemies shouldn't spawn. That too.

  attemptingSpawn = true;

  for (let i = 0; i < enemiesToSpawn; i++) {
    let spawnX, spawnY;
    let spawnAttempt = false;

    while (!spawnAttempt) {
      spawnX = floor(random(0, tilemap2[0].length));
      spawnY = floor(random(0, tilemap2.length));

      if (tilemap2[spawnY][spawnX] === "r") {
        let canvasX = spawnX * tileSize * 1.5;
        let canvasY = spawnY * tileSize * 1.5;

        let stormChaser = new Sprite(
          canvasX,
          canvasY,
          chaserHealth,
          chaserHealth,
          "d"
        );
        stormChaser.collider = "d";
        stormChaser.color = color(255, 0, 0);
        enemies.push(stormChaser);

        spawnAttempt = true;
      }
    }
  }

  attemptingSpawn = false;
  //console.log("Its false")
}

function playerMovement() {
  let baseSpeed = 6;
  let minSpeed = 2;
  let sizeFactor = player.w / tornadoStrength; // Calculate speed reduction based on player's size
  let speed = baseSpeed / sqrt(sizeFactor); // The larger the player the lower the speed will be

  speed = max(speed, minSpeed);

  if (kb.pressing("left") || kb.pressing("a")) {
    player.vel.x = -speed;
  } else if (kb.pressing("right") || kb.pressing("d")) {
    player.vel.x = speed;
  } else {
    player.vel.x = 0;
  }
  if (kb.pressing("up") || kb.pressing("w")) {
    player.vel.y = -speed;
  } else if (kb.pressing("down") || kb.pressing("s")) {
    player.vel.y = speed;
  } else {
    player.vel.y = 0;
  }
}

function cameraControl() {
  // taken out because its buggin the game over screen out to hell
  let baseZoom = 4;
  let zoomFactor = 10 / tornadoStrength; //works out the difference in players size
  let zoomLevel = baseZoom * zoomFactor; // works out what zoom level it should be at
  let minZoom = 0.75; // adds a minimum zoom level
  camera.zoom = max(zoomLevel, minZoom);
  camera.x = player.x;
  camera.y = player.y;
}

function clearGroups1() {
  tiles1.remove();
  border.removeAll();
}

function clearGroups2() {
  tiles2.remove();
  border.removeAll();
}

// Function to move storm chasers toward the player and check for wave progress
function chaserTowardsPlayer() {
  if (gameOver || !game || stage !== 2) return;

  let enemySpeed = 5;

  // prevent multiple spawns
  if (attemptingSpawn) return;

  // spawn progress
  for (let i = enemies.length - 1; i >= 0; i--) {
    let stormChaser = enemies[i];

    if (stormChaser) {
      let directionX = player.x - stormChaser.x;
      let directionY = player.y - stormChaser.y;
      let distance = sqrt(directionX * directionX + directionY * directionY);

      directionX /= distance;
      directionY /= distance;

      stormChaser.vel.x = directionX * enemySpeed;
      stormChaser.vel.y = directionY * enemySpeed;

      if (player.overlaps(stormChaser)) {
        let currentTime = millis();

        if (currentTime - lastDamageTime >= damageCooldown) {
          tornadoStrength -= 1;
          coinCounter += 1;
          player.d = tornadoStrength;

          stormChaser.remove(); // remove the enemy sprite

          // remove the enemy from the array

          if (postdeathCorrection == false) {
            enemies.splice(i, 0);
            //console.log("spliced");
          } else {
            enemies.splice(i, 1);
            //console.log("spliced");
          }
        }
      }
    }
  }

  // spawn new enemies if none exist
  if (enemies.length === 0 && !attemptingSpawn) {
    currentWave++;
    enemiesToSpawn += 1; // increases enemies per wave
    //console.log("enemy wave");
    attemptingSpawn = true;
    spawnEnemies();
  }
}

// Function to display tornado strength above the player
function displayTornadoStrength() {
  push(); // Save state
  if (game && !gameOver) {
    fill(255); // Set text color to white
    textSize(16); // Set text size
    textAlign(CENTER, CENTER); // Align text to middle
    playerTextHealth = text(
      "Tornado Strength: " + tornadoStrength,
      width / 2,
      height / 2 - 50
    ); // Display the strength
  }
  pop(); // Load state
}

function displayCoinBalance() {
  //simplest bit of code ever
  if (game && !gameOver) {
    fill(255, 215, 0); // Gold color for coins
    textSize(24); // Font size
    textAlign(LEFT, TOP); // Align text to the top-left corner
    text("Coins: " + coinCounter, 20, 20); // Display coin counter at the top-left
  }
}

function gameOverScreen() {
  clearGroups2(); // clear TILEMAP2

  //tiles3 = new Tiles(tilemap3, 0, 0, tileSize, tileSize);

  enemies.forEach((enemy) => {
    if (enemy && enemy.remove) {
      enemy.remove();
    }
  });

  enemies = []; // Reset the enemies array

  if (player) player.remove(); // Remove the player sprite

  // Reset game variables
  game = false;
  stage = 0;

  // Clear the screen and display the Game Over text
  background(100, 100, 100); // Set a black background
  resizeCanvas(windowWidth, windowHeight);

  // Game Over Text
  fill(255, 0, 0); // Red color for text
  textSize(64);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 3);
  camera.zoom = 1;
  // display button
  gameOverButton = new Sprite(
    width / 2,
    height / 2,
    width / 3,
    height / 8,
    "k"
  );
  gameOverButton.layer = 10;
  gameOverButton.color = "#ff0000";
  gameOverButton.text = "Return to Main Menu";
  gameOverButton.textSize = height / 32;
}
