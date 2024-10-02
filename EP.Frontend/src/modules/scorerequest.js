const baseURL = 'http://localhost:3000/results';

async function getAllscores(){
    const res = await fetch(baseURL);
    const score = await res.json();
    //console.log(score)
    return score;
}

async function addScore(newScore){
    const options = {
        method: 'POST',
        body: JSON.stringify(newScore),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const res = await fetch(baseURL, options);
    const data = await res.json();
    //console.log(data);
    return data;
}

export {getAllscores, addScore};