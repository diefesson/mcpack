ServerEvents.recipes(event => {
    event.remove({ id: 'farmersdelight:wheat_dough_from_water' })
    event.remove({ id: 'farmersdelight:wheat_dough_from_egg' })
    event.shapeless(
        '4x farmersdelight:wheat_dough',
        [
            '4x minecraft:wheat',
            '#forge:eggs'
        ]
    ).id('diefalpha:wheat_dough')
})