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
     * Lights a random tile with random transparency.
     */
    //% blockId="specialrandomtiletransparency"
    //% block="light random transparency tile"
    export function randomtiletransparency(): void {
        let randx2 = randint(0, 4)
        let randy2 = randint(0, 4)
        let randbright = randint(0,255)
        led.plotBrightness(randx2, randy2,randbright)
    }
    /**
     * Prints a factorial.
     */
    //% blockId="specialfactorial"
    //% block="factorial $num"
    export function factorial(num : number): void {
        let multiply = 0
        let answer = 0
        if (num <= -1){
            return;
        }
        if (num == 0 || num == 1){
            basic.showNumber(1)
            return;
        }
        answer = num
        while (multiply >= 1) {
            multiply = num - 1
            answer = answer * multiply
            basic.showNumber(answer)
        }
        basic.showNumber(answer)
    }
}
