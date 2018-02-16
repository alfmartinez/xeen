import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    this.animations.add('idle',['idle'])
    this.animations.add('right', Phaser.Animation.generateFrameNames('move/right/', 0, 3, '.svg'), 6, true)
    this.animations.add('left', Phaser.Animation.generateFrameNames('move/left/', 0, 3, '.svg'), 6, true)
    this.animations.add('attackRight', Phaser.Animation.generateFrameNames('combat/attack/right/', 0, 3, '.svg'), 6, false)
    this.animations.add('chargeRight', Phaser.Animation.generateFrameNames('combat/charge/right/', 0, 3, '.svg'), 6, false)
    this.animations.add('woundRight', Phaser.Animation.generateFrameNames('combat/wound/right/', 0, 3, '.svg'), 6, false)
    this.animations.play('woundRight')
  }

}
