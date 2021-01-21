while (true) {
    console.log(" Sound Level:" + input.soundLevel())
    if (input.soundLevel() > 150) {
        light.setAll(light.rgb(255, 255, 255))
        pause(1000)
        light.clear()
        pause(1000)
        music.magicWand.playUntilDone()
    } else {
        light.clear()
    }
    
    if (input.lightLevel() < 15) {
        light.setAll(light.rgb(255, 255, 255))
        pause(1000)
        light.clear()
        pause(1000)
        music.magicWand.playUntilDone()
    } else {
        light.clear()
    }
    
}
