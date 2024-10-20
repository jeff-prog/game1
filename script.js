let coinCount = 0;
let energy = 100;
let energyInterval;
let gainPerHour = 0;
let xp = 0;
let level = 1;
const xpToLevelUp = 100; // XP necessário para subir de nível

// Lista de patentes e suas respectivas imagens
const ranks = [
    { title: "Private", image: "private.jpg" },
    { title: "Corporal", image: "corporal.jpg" },
    { title: "Sergeant", image: "sergeant.jpg" },
    { title: "Staff Sergeant", image: "staff_sergeant.jpg" },
    { title: "Sergeant Major", image: "sergeant_major.jpg" },
    { title: "Warrant Officer", image: "warrant_officer.jpg" },
    { title: "Second Lieutenant", image: "second_lieutenant.jpg" },
    { title: "First Lieutenant", image: "first_lieutenant.jpg" },
    { title: "Captain", image: "captain.jpg" },
    { title: "Major", image: "major.jpg" },
    { title: "Lieutenant Colonel", image: "lieutenant_colonel.jpg" },
    { title: "Colonel", image: "colonel.jpg" },
    { title: "Brigadier General", image: "brigadier_general.jpg" },
    { title: "Major General", image: "major_general.jpg" },
    { title: "Lieutenant General", image: "lieutenant_general.jpg" },
    { title: "General", image: "general.jpg" },
];

function recoverEnergy() {
    if (energy < 100) {
        energy += 0.1;
        document.getElementById("energy-level").style.width = energy + "%";
    }
}

function clickCoin() {
    if (energy > 0) {
        coinCount++;
        xp += 10; // Ganha 10 XP por moeda
        document.getElementById("coinCount").textContent = coinCount;

        // Verifica se o jogador subiu de nível
        if (xp >= xpToLevelUp) {
            level++;
            xp -= xpToLevelUp; // Reduz o XP para o próximo nível
            
            // Atualiza a patente e a imagem correspondente
            if (level <= ranks.length) {
                document.getElementById("level").textContent = level;
                document.getElementById("rankTitle").textContent = ranks[level - 1].title; // Atualiza o título da patente
                document.getElementById("coin").src = ranks[level - 1].image; // Troca a imagem
            }
        }

        document.getElementById("xp").textContent = xp;
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
    document.getElementById("totalCoins").textContent = coinCount; // Atualiza o total de moedas
    document.getElementById("rankTitle").textContent = ranks[0].title; // Exibe a patente inicial
    document.getElementById("coin").src = ranks[0].image; // Define a imagem inicial
};
