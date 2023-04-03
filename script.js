

import { Game } from "./js/Game.js"

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const game = new Game(canvas.width, canvas.height)

window.addEventListener('load', function() {

    window.addEventListener('click', function(e) {
        game.addCircle(e.x, e.y)
    })

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        game.update()
        game.draw(ctx)
   
        requestAnimationFrame(animate)
    
    }
    
    animate()

})



