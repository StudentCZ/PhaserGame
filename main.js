var gameSettings = {
  playerSpeed: 200,
  maxPowerups: 5,
  powerUpVel: 100,
};

var config = {
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};

var game = new Phaser.Game(config);
