function displayScores(highScore){
    const container = document.querySelector('#scoreContainer');
    container.innerHTML = '';

    for(const score of highScore){
    
        const scoreDiv = document.createElement('div');
        const nameEl = document.createElement('h2');
        const scoreEl = document.createElement('p');

        // Lägger till textinnehåll till elementen
        nameEl.innerText = score.name;
        scoreEl.innerText = `${score.score}`;

        // Lägg till elementen till rätt element
        scoreDiv.append(nameEl, scoreEl);
        container.append(scoreDiv);
    }
}

export {displayScores};