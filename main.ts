input.onButtonPressed(Button.A, function () {
    角色.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    子彈 = game.createSprite(角色.get(LedSpriteProperty.X), 角色.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        子彈.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    子彈.delete()
    子彈.set(LedSpriteProperty.Brightness, 225)
})
input.onButtonPressed(Button.B, function () {
    角色.change(LedSpriteProperty.X, 1)
})
let 子彈: game.LedSprite = null
let 角色: game.LedSprite = null
角色 = game.createSprite(2, 4)
let 飛機 = game.createSprite(0, 0)
game.setScore(0)
basic.forever(function () {
    basic.pause(300)
    飛機.change(LedSpriteProperty.X, 1)
    if (飛機.get(LedSpriteProperty.X) == 4) {
        basic.pause(300)
        飛機.set(LedSpriteProperty.X, 0)
        飛機.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (飛機.isTouching(角色)) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (子彈) {
        if (子彈.isTouching(飛機)) {
            game.addScore(1)
            飛機.set(LedSpriteProperty.X, 0)
            飛機.set(LedSpriteProperty.Y, 0)
        }
    }
})
