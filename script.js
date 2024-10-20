let coinCount = 0;
let energy = 100;
let energyInterval;
let gainPerHour = 0;

// Atualiza a energia a cada 0.1 segundo
function recoverEnergy() {
    if (energy < 100) {
        energy += 0.1; // Aumenta lentamente a energia
        document.getElementById("energy-level").style.width = energy + "%";
    }
}

function clickCoin() {
    if (energy > 0) {
        coinCount++;
        document.getElementById("coinCount").textContent = coinCount;
        energy -= 2; // Diminui energia a cada clique
        document.getElementById("energy-level").style.width = energy + "%";
    }
}

function upgradeCoinsPerHour() {
    gainPerHour += 10; // Aumenta o ganho por hora a cada upgrade
    document.getElementById("gainPerHour").textContent = gainPerHour;
}

// Inicia a recuperação de energia
window.onload = function() {
    energyInterval = setInterval(recoverEnergy, 100);
};
