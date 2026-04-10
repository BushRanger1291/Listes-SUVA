const suvaLists = [
    { id: "67010.f", title: "Stress au poste de travail" },
    { id: "67028.f", title: "Échelles portables et escabeaux" },
    { id: "67023.f", title: "Travailleurs isolés" },
    { id: "67001.f", title: "Voies de circulation pour piétons" },
    { id: "67009.f", title: "Bruit au poste de travail" },
    { id: "67045.f", title: "Nettoyage et entretien des bâtiments" },
    { id: "67061.f", title: "Plan d'urgence pour les postes de travail mobiles" },
    { id: "67072.f", title: "Portes et portails" },
    { id: "67091.f", title: "Équipements de protection individuelle (EPI)" },
    { id: "67157.f", title: "Voies d'évacuation" },
    { id: "67189.f", title: "Chutes et faux pas lors du nettoyage de bâtiments" },
    { id: "88179.f", title: "Liste pour conducteurs de grues à tour" }
    // Ajoute d'autres références selon tes besoins spécifiques
];

const searchBar = document.getElementById('searchBar');
const resultsList = document.getElementById('resultsList');

const displayLists = (items) => {
    resultsList.innerHTML = items.map(item => `
        <div class="card">
            <div class="card-info">
                <h3>${item.title}</h3>
                <p>Réf: ${item.id}</p>
            </div>
            <a href="https://www.suva.ch/${item.id}" target="_blank" class="btn-download">PDF</a>
        </div>
    `).join('');
};

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredLists = suvaLists.filter(item => {
        return item.title.toLowerCase().includes(searchString) || 
               item.id.toLowerCase().includes(searchString);
    });
    displayLists(filteredLists);
});

// Affichage initial
displayLists(suvaLists);