import 'pixi';
import 'p2';
import "phaser";
import bullet from '../assets/sprites/rojo.png';
import ship from '../assets/sprites/verde.png';

const game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('bullet', bullet);
    game.load.image('ship', ship);
}
var paddleLeft;
var paddleRight;
var cursors;

const setupPaddle = aPaddle => {
    aPaddle.anchor.set(0.5);
    game.physics.arcade.enable(aPaddle);
    aPaddle.body.drag.set(70);
    aPaddle.body.maxVelocity.set(200);
    aPaddle.body.collideWorldBounds = true;
    return aPaddle;
};

function create() {
    paddleLeft = setupPaddle(game.add.sprite(0, 300, 'ship'));
    paddleRight = setupPaddle(game.add.sprite(400, 750, 'ship'));


    cursors = game.input.keyboard.createCursorKeys();
}

function update() {

    if (cursors.up.isDown)
    {
        game.physics.arcade.accelerationFromRotation(paddleLeft.rotation, 300, paddleLeft.body.acceleration);
    }
    else
    {
        paddleLeft.body.acceleration.set(0);
    }


    game.world.wrap(paddleLeft, 16);

}
