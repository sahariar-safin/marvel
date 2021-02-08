fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=08be70c1cda287ae92195e56b0641b0f&hash=cdf63316afdae7ebd245284e7060cecf')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const charecters = document.getElementById('charecters');
        data.data.results.forEach(element => {
            const thumbnailPath = element.thumbnail.path.split('ttp')[0] + 'ttps' + element.thumbnail.path.split('ttp')[1];
            const card = document.createElement('div');
            card.innerHTML = `
            <img src="${ thumbnailPath }.${ element.thumbnail.extension }">
            <h1>${ element.name }</h1>
        `;
            card.className = "card";
            charecters.appendChild(card);
        });
        const dataProvider = document.getElementById('dataProvider');
        dataProvider.innerHTML = data.attributionHTML;
    })
