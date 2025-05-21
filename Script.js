const choices = ["Pedra", "Papel", "Tesoura"];
let wins = 0;
let losses = 0;
let draws = 0;

function play(playerChoice) {
  const computerChoice = Math.floor(Math.random() * 3);
  const result = getResult(playerChoice, computerChoice);

  document.getElementById("playerChoice").textContent = `Você escolheu: ${choices[playerChoice]}`;
  document.getElementById("computerChoice").textContent = `Computador escolheu: ${choices[computerChoice]}`;
  document.getElementById("roundResult").textContent = `Resultado: ${result}`;

  if (result === "Vitória") wins++;
  else if (result === "Derrota") losses++;
  else if (result === "Empate") draws++;

  updateScoreboard();
}

function getResult(player, computer) {
  if (player === computer) return "Empate";
  if ((player === 0 && computer === 2) ||
      (player === 1 && computer === 0) ||
      (player === 2 && computer === 1)) {
    return "Vitória";
  }
  return "Derrota";
}

function updateScoreboard() {
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("draws").textContent = draws;
}

function resetGame() {
  wins = 0;
  losses = 0;
  draws = 0;
  updateScoreboard();
  document.getElementById("playerChoice").textContent = "";
  document.getElementById("computerChoice").textContent = "";
  document.getElementById("roundResult").textContent = "";
}
  // Tela de carregamento
    window.onload = () => {
      setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('game-content').style.display = 'block';
      }, 3000); // Simula 3 segundos de carregamento
    };
