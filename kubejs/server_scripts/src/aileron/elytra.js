ServerEvents.recipes(event => {
    event.shaped('minecraft:elytra', [
        'PPP',
        'PGP',
        'PPP'
    ], {
        P: 'minecraft:phantom_membrane',
        G: 'immersiveengineering:glider'
    });
})