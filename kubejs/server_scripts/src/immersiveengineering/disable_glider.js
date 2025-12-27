ServerEvents.tags("item", event => {
    event.add('c:hidden_from_recipe_viewers', 'immersiveengineering:glider')
})

ServerEvents.recipes(event => {
    event.remove('immersiveengineering:crafting/glider')
})