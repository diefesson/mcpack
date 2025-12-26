ServerEvents.recipes(event => {
    event.remove({ output: 'framedblocks:framed_fancy_rail' })
    event.remove({ output: 'framedblocks:framed_fancy_powered_rail' })
    event.remove({ output: 'framedblocks:framed_fancy_detector_rail' })
    event.remove({ output: 'framedblocks:framed_fancy_activator_rail' })

    event.shaped('8x framedblocks:framed_fancy_rail', [
        'RRR',
        'RFR',
        'RRR',
    ], {
        R: 'minecraft:rail',
        F: 'framedblocks:framed_cube',
    }).id('diefalpha:fancy_rails/framed_fancy_rail')

    event.shaped('8x framedblocks:framed_fancy_powered_rail', [
        'RRR',
        'RFR',
        'RRR',
    ], {
        R: 'minecraft:powered_rail',
        F: 'framedblocks:framed_cube',
    }).id('diefalpha:fancy_rails/framed_fancy_powered_rail')

    event.shaped('8x framedblocks:framed_fancy_detector_rail', [
        'RRR',
        'RFR',
        'RRR',
    ], {
        R: 'minecraft:detector_rail',
        F: 'framedblocks:framed_cube',
    }).id('diefalpha:fancy_rails/framed_fancy_detector_rail')

    event.shaped('8x framedblocks:framed_fancy_activator_rail', [
        'RRR',
        'RFR',
        'RRR',
    ], {
        R: 'minecraft:activator_rail',
        F: 'framedblocks:framed_cube',
    }).id('diefalpha:fancy_rails/framed_fancy_activator_rail')
    
})