
export {Game}
import { Circle } from "./Circle.js"
import { Explosion } from "./Explosion.js"
import { Boom, Boing } from "./Sound.js"

class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.trajectoires = []
        this.circles = []
        this.explosions = []
        this.songs = []
        this.timerBall = 0

    }

    update() {

        // Update Circle
        this.circles.forEach(circle => circle.update())
        this.circles = this.circles.filter(circle => !circle.deletion)

        if (this.circles.length < 5) {

            this.timerBall++

            if (this.timerBall % 50 === 0) {
                this.addCircle(Math.random() * this.width, -Math.random() * this.height / 2)
                this.timerBall = 0
            }
            
        }

        // Update Explosion
        this.explosions.forEach(explosion => explosion.update())
        this.explosions = this.explosions.filter(explosion => !explosion.deletion)

        // Update Song
        this.songs.forEach(song => song.lecture())
        this.songs = this.songs.filter(song => !song.deletion)

    }

    draw(ctx) {

        // Draw  circle
        this.circles.forEach(circle => circle.draw(ctx))

        // Draw  Explosion
        this.explosions.forEach(explosion => explosion.draw(ctx))

    }


    addCircle(x, y) {
        console.log("Add Circle")
        this.circles.push(new Circle(this, x, y))
    }

    addExplosion(x, y, size, color) {

        // let nbParticule = Math.floor(Math.random() * (size * 1.5) + 5)
        console.log("Add Explosion")
        let nbParticule = Math.floor(size * 1.3)
        for (let i = 0; i < nbParticule ; i++) {
            this.explosions.push(new Explosion(this, x, y, size, color))
           
        }
       
    }

    addBoom() {
        console.log("Add sound boom")
        this.songs.push(new Boom())
    }

    addBoing() {
        console.log("Add sound Boing")
        this.songs.push(new Boing())
    }

}