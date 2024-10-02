import fs from 'fs/promises';

async function getResultScore(){
    const rawdata = await fs.readFile('./src/highscore.json');
    return JSON.parse(rawdata);
}

async function addScore(newScore){
    let results = await getResultScore();
    results.push(newScore);
    results.sort((a, b)=> b.score - a.score);
    results = results.slice(0, 5);
    await fs.writeFile('./src/highscore.json', JSON.stringify(results, null, 2));
}

export {getResultScore, addScore};