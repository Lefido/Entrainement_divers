
export { Circle}

class Circle{

    constructor(game,x, y) {
        this.game = game
        this.color = `rgb(${rnd()}, ${rnd()}, ${rnd()})`
        this.size = Math.random() * 50 + 20
        this.x = x
        this.y = y 
        this.vx = Math.random() * 100 - 50
        this.vy = - Math.random() * 30
        this.gravity = 0.99
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

        this.vy += this.gravity
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

        if (this.vx >=-0.1 && this.vx <= 0.1 && this.vy >=-0.5 && this.vy <= 0.1) {
            this.deletion = true
            this.game.addBoom()
            this.game.addExplosion(this.x, this.y,this.size, this.color)
        }

        console.log(this.vy)
        
    }

    draw(ctx) {

        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.strokeStyle = "gray"
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()

    }

}

function rnd() {
    return Math.floor(Math.random() * 245 + 10)
}