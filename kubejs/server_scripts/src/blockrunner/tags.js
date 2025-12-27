ServerEvents.tags("block", event => {
    let pathBlocks = [
        'minecraft:dirt_path',
    ]

    for (let block of pathBlocks) {
        event.add('diefalpha:path_blocks', block)
    }
})