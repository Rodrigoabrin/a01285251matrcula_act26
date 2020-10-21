input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        random = randint(1, 100)
        basic.showNumber(random)
        if (random % 2 == 0) {
            basic.showString("even")
            even += 1
        } else {
            basic.showString("odd")
            odd += 1
        }
        basic.showString("even numbers=")
        basic.showNumber(even)
        basic.showString("odd number=")
        basic.showNumber(odd)
    }
})
let random = 0
let even = 0
let odd = 0
odd = 0
even = 0
basic.forever(function () {
	
})
