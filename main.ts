let number = 0
let col = 0
let row = 0



input.onButtonPressed(Button.A, function() {

    music.playTone(music.noteFrequency(Note.C), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.C), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.D), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.C), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.F), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.E), music.beat(BeatFraction.Quarter));
    basic.pause(100);
    music.playTone(music.noteFrequency(Note.C), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.C), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.D), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.C), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.G), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.F), music.beat(BeatFraction.Quarter));
    basic.pause(100);
    music.playTone(music.noteFrequency(Note.C), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.C), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.A), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.F), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.E), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.D), music.beat(BeatFraction.Quarter));
    basic.pause(100);
    music.playTone(music.noteFrequency(Note.A), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.A), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.B), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.F), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.G), music.beat(BeatFraction.Quarter));
    music.playTone(music.noteFrequency(Note.F), music.beat(BeatFraction.Quarter));

    basic.pause(1000)

    basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    # # # # #
    # # # # #
    `)
})

basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            row = randint(0, 4)
            col = randint(0, 4)
            number = 0
        }
        if (led.point(col, row)) {
            led.unplot(col, row)
            led.plot(col + 1, row)
        }
    }
})
