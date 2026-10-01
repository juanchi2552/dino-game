namespace SpriteKind {
    export const Cactus = SpriteKind.create()
    export const Bird = SpriteKind.create()
    export const Cloud = SpriteKind.create()
    export const Ground = SpriteKind.create()
}
/**
 * ==============================
 * 
 * NUBES
 * 
 * ==============================
 */
/**
 * ==============================
 * 
 * SALTO
 * 
 * ==============================
 */
/**
 * ==============================
 * 
 * CREAR CACTUS
 * 
 * ==============================
 */
/**
 * ==============================
 * 
 * CREAR PÁJARO
 * 
 * ==============================
 */
/**
 * ==============================
 * 
 * APARICIÓN DE OBSTÁCULOS
 * 
 * ==============================
 */
/**
 * ==============================
 * 
 * FÍSICA DEL JUGADOR
 * 
 * ==============================
 */
/**
 * ==============================
 * 
 * PUNTUACIÓN
 * 
 * ==============================
 */
/**
 * ==============================
 * 
 * ACTUALIZAR VELOCIDAD
 * 
 * ==============================
 */
/**
 * ==============================
 * 
 * RECICLAR SUELO
 * 
 * ==============================
 */
/**
 * ==============================
 * 
 * ELIMINAR OBJETOS
 * 
 * ==============================
 */
/**
 * ==============================
 * 
 * COLISIÓN CON CACTUS
 * 
 * ==============================
 */
/**
 * ==============================
 * 
 * COLISIÓN CON PÁJARO
 * 
 * ==============================
 */
/**
 * ==============================
 * 
 * TEXTO INICIAL
 * 
 * ==============================
 */
/**
 * ==============================
 * 
 * SUELO
 * 
 * ==============================
 */
/**
 * ==============================
 */
/**
 * ==============================
 * 
 * DINO
 * 
 * ==============================
 */
/**
 * VARIABLES
 */
/**
 * ==============================
 */
/**
 * ==============================
 * 
 * FONDO
 * 
 * ==============================
 */
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jump()
})
function createCactus () {
    let cactus: Sprite
if (Math.randomRange(0, 1) == 0) {
        cactus = sprites.create(img`
            . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 
            . . 7 . 7 7 . 7 . . 
            . . 7 7 7 7 7 7 . . 
            . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 
            . . . . 7 7 . . . . 
            `, SpriteKind.Cactus)
    } else {
        cactus = sprites.create(img`
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            7 . . 7 7 . . 7 
            7 7 . 7 7 . 7 7 
            . . 7 7 7 7 7 . 
            . . . . 7 7 . . 
            . . . . 7 7 . . 
            . . . . 7 7 . . 
            . . . . 7 7 . . 
            . . . . 7 7 . . 
            `, SpriteKind.Cactus)
    }
    cactus.setPosition(170, groundY)
    cactus.vx = 0 - gameSpeed
}
function createBird () {
    bird = sprites.create(img`
        . . . 8 8 . . . . . . 
        . . 8 8 8 8 . . . . . 
        8 8 8 1 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 . . . . . 
        `, SpriteKind.Bird)
    bird.setPosition(170, Math.randomRange(65, 82))
    bird.vx = 0 - (gameSpeed + 10)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    jump()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bird, function (playerSprite, bird) {
    if (!(gameRunning)) {
        return
    }
    gameRunning = false
    music.playTone(131, music.beat(BeatFraction.Half))
    scene.cameraShake(5, 600)
    game.over(false)
})
function jump () {
    if (canJump && gameRunning) {
        player2.vy = -190
        canJump = false
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cactus, function (playerSprite, cactus) {
    if (!(gameRunning)) {
        return
    }
    gameRunning = false
    music.playTone(131, music.beat(BeatFraction.Half))
    scene.cameraShake(4, 500)
    game.over(false)
})
let cloud: Sprite = null
let bird: Sprite = null
let piece: Sprite = null
let player2: Sprite = null
let gameRunning = false
let canJump = false
let groundY = 0
let gameSpeed = 0
gameSpeed = 65
let gravity = 500
groundY = 96
canJump = true
gameRunning = true
scene.setBackgroundColor(15)
player2 = sprites.create(img`
    . . . . 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 1 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 . . . . . . 
    . . . . 5 5 5 . . . . . . . 
    . . . 5 5 5 5 . . . . . . . 
    . . . 5 5 . 5 5 . . . . . . 
    . . . 5 . . . 5 . . . . . . 
    `, SpriteKind.Player)
player2.setPosition(25, groundY)
player2.ay = gravity
for (let i = 0; i <= 10; i++) {
    piece = sprites.create(img`
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        . 7 . 7 . 7 . 7 
        7 . 7 . 7 . 7 . 
        `, SpriteKind.Ground)
    piece.setPosition(i * 16 + 8, 106)
    piece.vx = 0 - gameSpeed
}
info.setScore(0)
game.splash("DINO RUN", "A / UP = JUMP")
game.onUpdateInterval(2200, function () {
    if (!(gameRunning)) {
        return
    }
    cloud = sprites.create(img`
        . . . 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 
        . . . . 1 1 . . . . 
        `, SpriteKind.Cloud)
    cloud.setPosition(170, Math.randomRange(20, 55))
    cloud.vx = -15
})
game.onUpdate(function () {
    if (!(gameRunning)) {
        return
    }
    // Mantener al dino sobre el suelo
    if (player2.y >= groundY) {
        player2.y = groundY
        player2.vy = 0
        canJump = true
    }
    // El jugador nunca sale de la pantalla
    if (player2.x < 10) {
        player2.x = 10
    }
})
game.onUpdate(function () {
    if (!(gameRunning)) {
        return
    }
    for (let cactus2 of sprites.allOfKind(SpriteKind.Cactus)) {
        cactus2.vx = 0 - gameSpeed
    }
    for (let bird2 of sprites.allOfKind(SpriteKind.Bird)) {
        bird2.vx = 0 - (gameSpeed + 10)
    }
    for (let ground of sprites.allOfKind(SpriteKind.Ground)) {
        ground.vx = 0 - gameSpeed
    }
})
game.onUpdate(function () {
    for (let ground2 of sprites.allOfKind(SpriteKind.Ground)) {
        if (ground2.x < -8) {
            ground2.x = 168
        }
    }
})
game.onUpdate(function () {
    for (let cactus3 of sprites.allOfKind(SpriteKind.Cactus)) {
        if (cactus3.x < -15) {
            cactus3.destroy()
        }
    }
    for (let bird3 of sprites.allOfKind(SpriteKind.Bird)) {
        if (bird3.x < -20) {
            bird3.destroy()
        }
    }
    for (let cloud2 of sprites.allOfKind(SpriteKind.Cloud)) {
        if (cloud2.x < -25) {
            cloud2.destroy()
        }
    }
})
game.onUpdateInterval(100, function () {
    if (!(gameRunning)) {
        return
    }
    info.changeScoreBy(1)
    // Aumentar dificultad
    if (info.score() % 100 == 0 && gameSpeed < 120) {
        gameSpeed += 5
        music.playTone(659, music.beat(BeatFraction.Eighth))
    }
})
game.onUpdateInterval(1200, function () {
    if (!(gameRunning)) {
        return
    }
    if (info.score() > 150 && Math.randomRange(0, 4) == 0) {
        createBird()
    } else {
        createCactus()
    }
})
