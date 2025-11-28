ServerEvents.tags("block", event => {
    let pathBlocks = [
        'minecraft:dirt_path',
        'environmental:podzol_path',
        'environmental:mycelium_path',
        'environmental:dirt_path',
        'endergetic:poismoss_path',
        'endergetic:eumus_poismoss_path',
        'netherexp:soul_path',
        'netherexp:crimson_nylium_path',
        'netherexp:warped_nylium_path',
    ]

    for (let block of pathBlocks) {
        event.add('diefalpha:path_blocks', block)
    }
})