const offset = (Math.random() * 1000 + '').split('.')[0];
fetch(`https://gateway.marvel.com/v1/public/characters?limit=100&offset=${ offset }&ts=1&apikey=08be70c1cda287ae92195e56b0641b0f&hash=cdf63316afdae7ebd245284e7060cecf`)
    .then(res => res.json())
    .then(data => {
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



const handleSearch = () => {
    const searchInput = document.getElementById('searchInput').value;
    fetch(`https://gateway.marvel.com/v1/public/characters?name=${ searchInput }&ts=1&apikey=08be70c1cda287ae92195e56b0641b0f&hash=cdf63316afdae7ebd245284e7060cecf`)
        .then(res => res.json())
        .then(data => {
            const charecters = document.getElementById('charecters');
            document.getElementById('charecters').innerHTML = '';
            data.data.results.forEach(element => {
                const thumbnailPath = element.thumbnail.path.split('ttp')[0] + 'ttps' + element.thumbnail.path.split('ttp')[1];
                const card = document.createElement('div');
                card.innerHTML = `
            <img src="${ thumbnailPath }.${ element.thumbnail.extension }">
            <h1>${ element.name }</h1>
        `;
                card.className = "card";
                charecters.appendChild(card);
            })
        })
};