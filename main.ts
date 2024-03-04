namespace extras {
    /**
     * Idk yet.
     */
    //% blockId="specialthingy"
    //% block="light random tile"
    export function randomtile(): void{
        let randx = randint(1,5)
        let randy = randint(1,5)
        led.plot(randx,randy)
    }
}