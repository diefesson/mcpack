ServerEvents.recipes((event) => {
    event.remove({ output: 'minecraft:rail' })
    event.remove({ output: 'minecraft:powered_rail' })
    event.remove({ output: 'minecraft:detector_rail' })
    event.remove({ output: 'minecraft:activator_rail' })

    event.shaped('16x minecraft:rail', [
        'NSN',
        'NSN',
        'NSN',
    ], {
        N: '#forge:nuggets/iron',
        S: '#forge:rods/wooden',
    }).id('diefalpha:rails/rail')

    event.shaped('8x minecraft:powered_rail', [
        'NSN',
        'NRN',
        'NSN',
    ], {
        N: '#forge:nuggets/gold',
        S: '#forge:rods/wooden',
        R: '#forge:dusts/redstone',
    }).id('diefalpha:rails/powered_rail')

    event.shaped('8x minecraft:detector_rail', [
        'NSN',
        'NPN',
        'NSN',
    ], {
        N: '#forge:nuggets/iron',
        S: '#forge:rods/wooden',
        P: 'minecraft:stone_pressure_plate',
    }).id('diefalpha:rails/detector_rail')

    event.shaped('8x minecraft:activator_rail', [
        'NSN',
        'NTN',
        'NSN',
    ], {
        N: '#forge:nuggets/iron',
        S: '#forge:rods/wooden',
        T: 'minecraft:redstone_torch',
    }).id('diefalpha:rails/activator_rail')

})