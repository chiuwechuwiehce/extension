// Functions
let coords = [0, 0]
function pixlimg(tabel:number[]){
    let runframes = 0
    while (runframes <= tabel.length - 1) {
        extraLed.plotledbynumber(tabel[runframes])
        runframes += 1
    }
}
function animatepixelimgs(interval:number,pixelimgs:number[][]){
    let runframes = 0
    while (runframes <= pixelimgs.length - 1) {
        basic.pause(interval)
        runframes += 1
    }
}
function animateframes(interval:number,frames:Image[]) {
    let runframes = 0
	while (runframes <= frames.length - 1){
        frames[runframes].showImage(0)
        basic.pause(interval)
        runframes += 1
    }
}
function grabindexbycoords (x: number, y: number) {
    for (let i = 1; i < 26; i++) {
        grabcoordsbyindex(i)
        if (coords[0] == x) {
            if (coords[1] == y) {
                gibc = i
                return;
                break;
            }
        }
    }
gibc = 0
}
function grabcoordsbyindex (index: number) {
    coords = poses[index - 1]
}
let poses: number[][] = []
// Enums
// Variables
let gibc = 0
let canaddhealthvar = true
poses = [
[0, 0],
[1, 0],
[2, 0],
[3, 0],
[4, 0],
[0, 1],
[1, 1],
[2, 1],
[3, 1],
[4, 1],
[0, 2],
[1, 2],
[2, 2],
[3, 2],
[4, 2],
[0, 3],
[1, 3],
[2, 3],
[3, 3],
[4, 3],
[0, 4],
[1, 4],
[2, 4],
[3, 4],
[4, 4]
]
namespace Math {
    /**
     * Outputs a factorial.
     */
    //% blockId="specialfactorial"
    //% block="factorial $num"
    export function factorial(num: number) {
        let multiply = num
        let answer = 0
        if (num <= -1) {
            return 0;
        }
        if (num == 0 || num == 1) {
            return 1;
        }
        answer = num
        while (multiply >= 3) {
            multiply = multiply - 1
            answer = answer * multiply
        }
        return answer;
    }
    /**
     * Outputs the sigma of the numbers.
     */
    //% blockId="specialsigma"
    //% block="sigma min $min max $max"
    export function sigma(min: number,max: number) {
        let addby = min
        let answer2 = min
        if (min <= 0||max <= 0) {
            return 0;
        }
        while (addby <= max - 1) {
            addby += 1
            answer2 += addby
        }
        return answer2;
    }
}
namespace led {
    /**
     * Lights a random tile.
     */
    //% blockId="specialrandomtile"
    //% block="light random tile"
    export function randomtile(): void {
        let randx = randint(0, 4)
        let randy = randint(0, 4)
        led.plot(randx, randy)
    }
    /**
     * Lights a random tile with random transparency.
     */
    //% blockId="specialrandomtiletransparency"
    //% block="light random transparency tile"
    export function randomtiletransparency(): void {
        let randx2 = randint(0, 4)
        let randy2 = randint(0, 4)
        let randbright2 = randint(0, 255)
        led.plotBrightness(randx2, randy2, randbright2)
    }
    /**
     * Lights a random transparency led with set coordinates.
     */
    //% blockId="led_lrtlwc"
    //% block="light random transparency led with coords $x $y"
    //% x.min=0 x.max=4
    //% y.min=0 y.max=4
    export function lrtlwc(x: number, y: number) {
        if (x <= -1 || x >= 5 || y <= -1 || y >= 5) {
            return;
        }
        let randbright = randint(0, 255)
        led.plotBrightness(x, y, randbright)
    }
    /**
     * Lights a random position led with set brightness.
     */
    //% blockId="led_lrplwb"
    //% block="light random pos led with brightness $transparency"
    //% x.min=0 x.max=4
    //% y.min=0 y.max=4
    export function lrplwb(transparency: number) {
        if (transparency <= -1 || transparency >= 256) {
            return;
        }
        let x = randint(0, 4)
        let y = randint(0, 4)
        led.plotBrightness(x, y, transparency)
    }
}
namespace extraLed {
    /**
     * Finds coords of a led in a table using a number instead of position.
     */
    //% blockId="specialfindledbynumber"
    //% block="find led by number $numm"
    //% numm.min=1 numm.max=25
    export function findledbynumber(numm: number) {
        if (numm <= 0 || numm >= 26) {
            return [0, 0];
        }
        grabcoordsbyindex(numm)
        return coords;
    }
    /**
     * Finds x coord of a led using a number instead of position.
     */
    //% blockId="specialfindledxbynumber"
    //% block="find led x by number $numm"
    //% numm.min=1 numm.max=25
    export function findledxbynumber(numm: number) {
        if (numm <= 0 || numm >= 26) {
            return 0;
        }
        grabcoordsbyindex(numm)
        return coords[0];
    }
    /**
     * Finds y coord of a led using a number instead of position.
     */
    //% blockId="specialfindledybynumber"
    //% block="find led y by number $numm"
    //% numm.min=1 numm.max=25
    export function findledybynumber(numm: number) {
        if (numm <= 0 || numm >= 26) {
            return 0;
        }
        grabcoordsbyindex(numm)
        return coords[1];
    }
    /**
     * Plots an led using number instead of position.
     */
    //% blockId="specialplotledbynumber"
    //% block="plot led by number $numm"
    //% numm.min=1 numm.max=25
    export function plotledbynumber(numm: number) {
        if (numm <= 0 || numm >= 26) {
            return;
        }
        grabcoordsbyindex(numm)
        led.plot(coords[0], coords[1])
    }
    /**
     * Finds state of led, on or off by number.
     */
    //% blockId="specialpointledbynumber"
    //% block="point led by number $numm"
    //% numm.min=1 numm.max=25
    export function pointledbynumber(numm: number) {
        if (numm <= 0 || numm >= 26) {
            return false;
        }
        grabcoordsbyindex(numm)
        return led.point(coords[0], coords[1]);
    }
    /**
     * Find number of led from position. X is first and Y is second.
     */
    //% blockId="specialfindlednumberfrompos"
    //% block="find led number from pos $numx $numy"
    //% numm.min=1 numm.max=25
    export function findlednumberfrompos(numx: number, numy: number) {
        if (numx <= -1 || numy >= 5) {
            return 0;
        }
        grabindexbycoords(numx, numy)
        return gibc;
    }
    /**
     * Animates a sequence of images with a certain interval.
     */
    //% blockId="specialanimateimages"
    //% block="animate images $table with interval $interval ,$repeat times"
    export function animateimages(interval:number,table:Image[],repeat:number) {
        if (repeat <= -1){
            return
        }
        if (repeat == 0){
            animateframes(interval, table)
            return
        }
        for (let i = 0; i < repeat; i++) {
            animateframes(interval, table)
        }
    }
    /**
     * Animates a sequence of 1 pixel images with a certain interval.
     */
    //% blockId="specialanimatepixel"
    //% block="animate pixel $table with interval $interval ,$repeat times, delete on end $deleteonend"
    export function animatepixel(interval: number, table: number[], repeat: number, deleteonend: boolean) {
        if (repeat <= -1) {
            return
        }
        if (repeat == 0) {
            let runframes = 0
            while (runframes <= table.length - 1) {
                let pixel = table[runframes]
                extraLed.plotledbynumber(pixel)
                basic.pause(interval)
                if (runframes == table.length - 1){
                    if (deleteonend == false){
                        return
                    }
                }
                basic.clearScreen()
                runframes += 1
            }
            return
        }
        for (let i = 0; i < repeat; i++) {
            let runframes = 0
            while (runframes <= table.length - 1) {
                let pixel = table[runframes]
                extraLed.plotledbynumber(pixel)
                basic.pause(interval)
                if (runframes == table.length - 1) {
                    if (deleteonend == false) {
                        return
                    }
                }
                basic.clearScreen()
                runframes += 1
            }
        }
    }
    /**
     * Animates a sequence of 1 pixel images with a certain interval.
     */
    //% blockId="specialanimatepixelimg"
    //% block="animate pixelimgs $pixelimgss with interval $interval"
    export function animatepixelimg(interval:number,pixelimgss:number[][]){
        animatepixelimgs(interval,pixelimgss)
    }
    /**
     * Uses a list of pixel indexes to make an image.
     */
    //% blockId="specialpixelimg"
    //% block="pixel img $tabel"
    export function pixelimg(tabel:number[]) {
        pixlimg(tabel)
    }
}
