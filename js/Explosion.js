

export { Explosion}

class Explosion {
    constructor(game, x, y, size, color) {
        this.game = game
        this.color = color
        this.size = Math.random() * (size / 3) + 2
        this.sizeOrigin = this.size
        this.x = x
        this.y = y
        this.ex = size / 2
        this.ey = size * 1.2
        this.vx = Math.random() * this.ex - (this.ex / 2)
        this.vy = Math.random() * this.ey - (this.ey / 2)
        this.gravity = 0.99
        this.deletion = false
        this.bounce = 0.8
        this.friction = 0.99
        this.nbBounce = 0
        this.angle = Math.floor(Math.random() * 5 - 2.5)
        this.angle2 = Math.floor(Math.random() * 5 - 2.5)
        this.vRotation = this.vx / this.size //Math.random() * (this.size / 6) - ((this.size / 6) / 2)
        this.rotate = 0
    }

    update() {

        this.rotate += this.vRotation
        this.x += this.vx
        this.vy += this.gravity
        this.y += this.vy
        if (this.size > 0.3) {
            this.size -= 0.3
        } else {
            this.deletion = true
        }

        if (this.x + this.size >= this.game.width) {
            this.x = this.game.width - this.size
            this.vx *= - this.bounce
            this.vRotation = - this.vRotation
        }

        if (this.x + this.size <= 0) {
            this.x = 0 + this.size
            this.vx *= - this.bounce
            this.vRotation = - this.vRotation
        }

        if (this.y + this.size >= this.game.height) {
            this.vy *= - this.bounce
            this.y = this.game.height - this.size
            this.nbBounce++
        }

        this.vy *= this.friction
        this.vx *= this.friction
        this.vRotation *= this.friction

    }

    draw(ctx) {

        ctx.save()
        ctx.beginPath()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotate)
        ctx.fillStyle = this.color
        ctx.strokeStyle = "gray"
        // ctx.globalAlpha = this.size / this.sizeOrigin * 1
        ctx.arc(0, 0, this.size, this.angle, this.angle2)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
        ctx.restore()

    }
}