sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Pizza.setPosition(randint(10, 160), randint(10, 120))
    info.startCountdown(10)
})
/**
 * Created By: Rodas N.
 * 
 * Created On: Nov 17 2020
 * 
 * This code displays a player that can be controlled by inputs and a sprite that acts as the point system.
 */
let Pizza: Sprite = null
scene.setBackgroundColor(6)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . f f 5 5 f f . . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f 5 f 5 5 f 5 f . . . . 
    . . . f 5 5 5 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 5 f 5 f . . . 
    . . . f 5 5 f f f f 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . . f 5 5 5 5 f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
Pizza = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . 5 5 e e e . . . . . 
    . . . . . 5 5 5 5 e e e e . . . 
    . . . . . 5 2 5 5 5 e e e . . . 
    . . . . 5 5 5 5 5 2 5 5 e e . . 
    . . . . 5 2 5 5 5 5 5 5 e e . . 
    . . . 5 5 5 5 2 5 5 . . . . . . 
    . . . 5 2 5 5 5 5 . . . . . . . 
    . . 5 5 5 5 5 . . . . . . . . . 
    . . 5 5 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
