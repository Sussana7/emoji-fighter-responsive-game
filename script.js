let fighters = [
    "🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩",
    "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"
  ];
  
  let stageEl = document.getElementById("stage");
  let fightButton = document.getElementById("fightButton");
  let fightSound = document.getElementById("fightSound");
  
  fightButton.addEventListener("click", function () {
    let randomIndexOne = Math.floor(Math.random() * fighters.length);
    let randomIndexTwo = Math.floor(Math.random() * fighters.length);
  
    stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo];
  
    // Play the punch sound
    fightSound.currentTime = 0;
    fightSound.play();
  
    // Animate the stage
    stageEl.classList.add("animate");
    setTimeout(() => stageEl.classList.remove("animate"), 300);
  });
  