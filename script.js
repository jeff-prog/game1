let coinCount = 0;
let energy = 100;
let energyInterval;
let gainPerHour = 0;

function recoverEnergy() {
    if (energy < 100) {
        energy += 0.1;
        document.getElementById("energy-level").style.width = energy + "%";
    }
}

function clickCoin() {
    if (energy > 0) {
        coinCount++;
        document.getElementById("coinCount").textContent = coinCount;
        energy -= 2;
        document.getElementById("energy-level").style.width = energy + "%";
    }
}

function upgradeCoinsPerHour() {
    gainPerHour += 10;
    document.getElementById("gainPerHour").textContent = gainPerHour;
}

window.onload = function() {
    energyInterval = setInterval(recoverEnergy, 100);
    document.getElementById("coinsPerHour").textContent = gainPerHour;
};
