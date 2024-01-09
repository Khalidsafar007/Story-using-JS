document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    var characterName = document.getElementById('characterName').value;
    if (characterName === "") {
        alert("Please enter your character's name.");
    } else {
        document.getElementById('text').classList.add('hidden');
        document.getElementById('characterName').classList.add('hidden');
        document.getElementById('story').innerHTML = `Welcome, <strong>${characterName}</strong>! You find yourself in the mystical Enchanted Realm, full of wonders and mysteries.`;
        document.getElementById('choices').classList.remove('hidden');
        document.getElementById('startButton').classList.add('hidden');
        document.getElementById('choiceBtn1').textContent = 'Explore the Enchanted Forest';
        document.getElementById('choiceBtn2').textContent = 'Visit the Ancient Castle';
        document.getElementById('choiceBtn1').addEventListener('click', exploreForest);
        document.getElementById('choiceBtn2').addEventListener('click', visitCastle);
    }
}

function exploreForest() {
    document.getElementById('restartButton').classList.remove('hidden');
    document.getElementById('restartButton').addEventListener('click', restart);
    document.getElementById('story').innerHTML = 'As you delve deeper into the Enchanted Forest, you encounter a magical creature. It offers you a challenge: solve a riddle to gain its favor. What will you do?';
    document.getElementById('choiceBtn1').textContent = 'Accept the Challenge';
    document.getElementById('choiceBtn2').textContent = 'Ignore and Continue';
    document.getElementById('choiceBtn1').addEventListener('click', solveRiddle);
    document.getElementById('choiceBtn2').addEventListener('click', continueExploring);
}

function visitCastle() {
    document.getElementById('restartButton').classList.remove('hidden');
    document.getElementById('story').innerHTML = 'The Ancient Castle is said to hold a powerful artifact. To enter, you need a special key. You meet a mysterious sorcerer who might help you. What will you do?';
    document.getElementById('choiceBtn1').textContent = 'Seek the Sorcerer\'s Help';
    document.getElementById('choiceBtn2').textContent = 'Search for the Key Yourself';
    document.getElementById('choiceBtn1').addEventListener('click', seekSorcerer);
    document.getElementById('choiceBtn2').addEventListener('click', searchKey);
    
    document.getElementById('restartButton').addEventListener('click', restart);
}

function solveRiddle() {
    var answer = prompt('I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?');
    if (answer.toLowerCase() === 'echo') {
        document.getElementById('story').innerHTML = 'The magical creature is pleased with your answer. It rewards you with a magical amulet.';
    } else {
        document.getElementById('story').innerHTML = 'The creature sighs. That\'s incorrect. You cannot pass.';
    }
    document.getElementById('choices').classList.add('hidden');
}

function continueExploring() {
    document.getElementById('restartButton').classList.remove('hidden');
    document.getElementById('story').innerHTML = 'You decide to continue exploring the forest. You find a hidden waterfall and take a refreshing break. Your adventure continues.';
    document.getElementById('choices').classList.add('hidden');
    document.getElementById('restartButton').addEventListener('click', restart);
}

function seekSorcerer() {;
    document.getElementById('story').innerHTML = 'The sorcerer agrees to help you but requires a rare flower as payment. It can only be found on the Mountain of Eternal Bloom. What will you do?';
    document.getElementById('choiceBtn1').textContent = 'Climb the Mountain';
    document.getElementById('choiceBtn2').textContent = 'Search for an Alternative';
    document.getElementById('restartButton').classList.remove('hidden');
    document.getElementById('restartButton').addEventListener('click', restart)
    document.getElementById('choiceBtn1').addEventListener('click', climbMountain);
    document.getElementById('choiceBtn2').addEventListener('click', searchAlternative);
}

function searchKey() {
    document.getElementById('story').innerHTML = 'You search the castle and find a hidden passage that leads you to the artifact. Congratulations, you have found the powerful artifact!';
    document.getElementById('choices').classList.add('hidden');
    document.getElementById('restartButton').classList.remove('hidden');
    document.getElementById('restartButton').addEventListener('click', restart);
}

function climbMountain() {
    document.getElementById('story').innerHTML = 'You embark on the challenging journey to the Mountain of Eternal Bloom. After a treacherous climb, you find the rare flower. The sorcerer helps you, and you obtain the special key.';
    document.getElementById('choices').classList.add('hidden');
    document.getElementById('restartButton').classList.remove('hidden');
    document.getElementById('restartButton').addEventListener('click', restart);
}

function searchAlternative() {
    document.getElementById('restartButton').classList.remove('hidden');
    document.getElementById('restartButton').addEventListener('click', restart);
    document.getElementById('story').innerHTML = 'You decide to search for an alternative. After exploring the nearby forest, you encounter a wise old owl who provides you with a substitute for the rare flower. The sorcerer helps you, and you obtain the special key.';
    document.getElementById('choices').classList.add('hidden');
}

function restart(){
    location.reload();
}
