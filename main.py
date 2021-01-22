while True:
    print(" Sound Level:" + input.sound_level())
    if input.sound_level() > 150:
        light.set_all(light.rgb(255, 255, 255))
        pause(1000)
        light.clear()
        pause(1000)
        music.magic_wand.play_until_done()
        music.set_volume(255)
    else:
        light.clear()
    if input.light_level() < 15:
        light.set_all(light.rgb(255, 255, 255))
        pause(1000)
        light.clear()
        pause(1000)
        music.wawawawaa.play_until_done()
        music.set_volume(255)
    else:
        light.clear()