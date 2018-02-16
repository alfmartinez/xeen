/* globals __DEV__ */
import Phaser from 'phaser'
import Goon from '../sprites/Goon'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    this.goon = new Goon({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'goon'
    })

    this.game.add.existing(this.goon)
  }
}
