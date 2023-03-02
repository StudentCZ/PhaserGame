class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: 'Scene1' });
  }

  create() {
    // create menu text and buttons
    var menuText = this.add.text(400, 200, 'Game Menu', {
      fontSize: '64px',
      fill: '#ffffff',
    });
    menuText.setOrigin(0.5);

    var startButton = this.add.text(400, 300, 'Start Game', {
      fontSize: '32px',
      fill: '#ffffff',
    });
    startButton.setOrigin(0.5);
    startButton.setInteractive();
    startButton.on('pointerdown', () => {
      // switch to Scene2 when start button is clicked
      this.scene.start('Scene2');
    });
  }
}
