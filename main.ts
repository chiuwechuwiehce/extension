namespace extras {
    /**
     * Idk yet.
     */
    //% blockId="specialthingy"
    //% block="light random tile"
    export function randomtile(): void{
        let randx = randint(0,4)
        let randy = randint(0,4)
        led.plot(randx,randy)
    }
}