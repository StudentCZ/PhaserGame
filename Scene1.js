class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    this.load.image('background', 'assets/images/background.png');
    this.load.image('ship', 'assets/images/ship.png');
    this.load.image('ship1', 'assets/images/ship1.png');
    this.load.image('ship2', 'assets/images/ship2.png');
  }

  create() {
    this.add.text(20, 20, 'Loading game...');
    this.scene.start('playGame');
  }
}
