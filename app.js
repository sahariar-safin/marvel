fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=08be70c1cda287ae92195e56b0641b0f&hash=cdf63316afdae7ebd245284e7060cecf')
    .then(res => res.json())
    .then(data => {
        console.log(data.data.results);
        const charecters = document.getElementById('charecters');
        data.data.results.forEach(element => {
            console.log(element);
            const card = document.createElement('div');
            card.innerHTML = `
            <img src="${ element.thumbnail.path }.${ element.thumbnail.extension }">
            <h1>${ element.name }</h1>
        `;
            card.className = "card";
            charecters.appendChild(card);
        });
    })
