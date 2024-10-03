function displayScores(highScore){
    const container = document.querySelector('#scoreContainer');
    container.innerHTML = '';

    for(const score of highScore){
    
        const scoreDiv = document.createElement('div');
        const nameEl = document.createElement('h3');
        const scoreEl = document.createElement('p');

        
        nameEl.innerText = score.name;
        scoreEl.innerText = `${score.score}`;

        
        scoreDiv.append(nameEl, scoreEl);
        container.append(scoreDiv);
    }
}

export {displayScores};