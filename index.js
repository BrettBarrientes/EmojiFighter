
const fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

const stageEl = document.getElementById("stage")
const fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    const randomIndexOne = Math.floor(Math.random() * fighters.length)
    const randomIndexTwo = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = `${fighters[randomIndexOne]} vs ${fighters[randomIndexTwo]}`
})
