import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}

  preload () {
    //
    // load your assets
    //
    this.load.atlas('goon', 'assets/images/goon.png', 'assets/images/goon.json')
  }

  create () {
    this.state.start('Game')
  }
}
