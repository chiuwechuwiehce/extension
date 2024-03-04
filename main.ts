namespace extras {
    /**
     * Lights a random tile.
     */
    //% blockId="specialrandomtile"
    //% block="light random tile"
    export function randomtile(): void{
        let randx = randint(0,4)
        let randy = randint(0,4)
        led.plot(randx,randy)
    }
    /**
     * Lights a random tile. with random transparency.
     */
    //% blockId="specialrandomtiletransparency"
    //% block="light random transparency tile"
    export function randomtiletransparency(): void {
        let randx = randint(0, 4)
        let randy = randint(0, 4)
        let randbright = randint(0,255)
        led.plotBrightness(randx, randy,randbright)
    }
}