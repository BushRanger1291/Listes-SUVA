const suvaLists = [
    { id: "66084-2.f", title: "Réception d'équipements de travail" },
    { id: "66092-1.f", title: "Collaboration avec des entreprises tierces" },
    // ... (toutes tes autres listes ici)
    { id: "84077.f", title: "Règles vitales : élingage des charges" }
];

const resultsList = document.getElementById('resultsList');
const searchBar = document.getElementById('searchBar');

const displayLists = (items) => {
    if (!resultsList) return;
    resultsList.innerHTML = items.map(item => `
        <div class="card">
            <div class="card-info">
                <h3>${item.title}</h3>
                <p>REF: ${item.id}</p>
            </div>
            <a href="https://www.suva.ch/${item.id}" target="_blank" class="btn-download">PDF</a>
        </div>
    `).join('');
};

const sortItems = (key) => {
    suvaLists.sort((a, b) => {
        return a[key].localeCompare(b[key], 'fr', { numeric: true, sensitivity: 'base' });
    });
    handleSearch();
};

const handleSearch = () => {
    if (!searchBar) return;
    const searchString = searchBar.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filteredLists = suvaLists.filter(item => {
        const normalizedTitle = item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return normalizedTitle.includes(searchString) || item.id.toLowerCase().includes(searchString);
    });
    displayLists(filteredLists);
};

if (searchBar) {
    searchBar.addEventListener('keyup', handleSearch);
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}

// Lancement par défaut
document.addEventListener('DOMContentLoaded', () => {
    sortItems('id');
});