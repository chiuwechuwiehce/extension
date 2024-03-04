let rands = [[0, 0]]
let randadd = [0, 0]
let tablelength = 0
let rtable = [0,0]
let rx = 0
let ry = 0
randadd = []
rands = []
rtable = []
namespace extras {
    /**
     * Lights a random tile.
     */
    //% blockId="specialrandomtile"
    //% block="light random tile"
    export function randomtile(): void{
        let randx = randint(0,4)
        let randy = randint(0,4)
        randadd.push(randx)
        randadd.push(randy)
        rands.push(randadd)
        randadd = []
        tablelength = rands.length
        for (let i = 0; i < tablelength; i++) {
            rtable = rands[i-1] 
            rx = rtable[0]
            ry = rtable[1]
            if (randx == rx){
                return;
            }
            if (randy == ry){
                return;
            }
            led.plot(randx,randy)
        }
    }
    /**
     * Lights a random tile. with random transparency.
     */
    //% blockId="specialrandomtiletransparency"
    //% block="light random transparency tile"
    export function randomtiletransparency(): void {
        let randx2 = randint(0, 4)
        let randy2 = randint(0, 4)
        let randbright = randint(0,255)
        led.plotBrightness(randx2, randy2,randbright)
    }
}
