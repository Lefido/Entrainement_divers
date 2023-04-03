
export { Boom, Boing}

class Sound {
    constructor() {

        this.deletion = false
    }

    lecture() {

        this.song.play()
        this.deletion = true

    }
}

class Boom extends Sound {
    constructor() {
        super()
        this.song = new Audio('./sound/boom.mp3')
        this.song.volume = 0.5
    }
}

class Boing extends Sound {
    constructor() {
        super()
        this.song = new Audio('./sound/boing.mp3')
        this.song.volume = 0.5
    }
}