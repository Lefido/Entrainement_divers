
export { Circle}

class Circle{

    #compteur = 0

    constructor(game,x, y) {
        this.game = game
        this.compteur = this.#compteur
        this.color = `rgb(${rnd()}, ${rnd()}, ${rnd()}, 0.8)`
        this.size = Math.random() * 90 + 10
        this.x = x
        this.y = y 
        this.vx = Math.random() * 100 - 50
        this.vy = - Math.random() * 30
        this.masse = this.size / 30
        this.masseMin = this.masse
        this.gravity = 0.8
        this.bounce = 0.99
        this.friction = 0.99
        this.deletion = false
        this.timer = 0
        this.chrono = 0
        this.chronoMax = Math.floor(Math.random() * 20)
        

    }

    update() {

        this.timer++
        if (this.timer % 10 === 0) this.chrono++


        this.x += this.vx

        if (this.x + this.size >= this.game.width ) {
            
            this.x = this.game.width - this.size
            this.vx *= - this.bounce
        }

        if (this.x - this.size <= 0) {

            this.x = this.size
            this.vx *= - this.bounce
        }

        this.vy += this.masse + this.gravity
        this.y += this.vy

        if (this.y + this.size >= this.game.height) {

            this.vy *= - this.bounce
            this.y = this.game.height - this.size

            if (this.vy <= -3) {
                 this.game.addBoing()
            }
           
        }

        this.vx *= this.friction
        this.vy *= this.friction

        let pointFatal = this.masseMin + this.masse * this.bounce * this.friction

        if (this.vx >=-0.1 && this.vx <= 0.1 && this.vy >=-pointFatal && this.vy <= 0.1) {
            this.deletion = true
            this.game.addBoom()
            this.game.addExplosion(this.x, this.y,this.size, this.color)
        }

        console.log(-this.masseMin * this.bounce * this.friction, this.vy)
        
    }

    draw(ctx) {

        let ratio = 1

        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.strokeStyle = "gray"
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()

        ctx.beginPath()
        ctx.fillStyle = "white"
        ctx.font = this.size / ratio + "px serif"
        ctx.textAlign = "center"
        ctx.fillText(this.vx.toFixed(2) + ", " + this.vy.toFixed(2), this.x, this.y - (this.size * 1.2))
        ctx.closePath()

        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.font = this.size / ratio + "px serif"
        ctx.textAlign = "center"
        ctx.fillText(this.vx.toFixed(2) + ", " + this.vy.toFixed(2), this.x + 1, this.y + 1 - (this.size * 1.2))
        ctx.closePath()

    }

}

function rnd() {
    return Math.floor(Math.random() * 245 + 10)
}