const suvaLists = [
    { id: "66084-2.f", title: "Réception d'équipements de travail" },
    { id: "66092-1.f", title: "Collaboration avec des entreprises tierces" },
    { id: "67001.f", title: "Voies de circulation pour piétons" },
    { id: "67002.f", title: "Scies circulaires à table" },
    { id: "67003.f", title: "Scies circulaires de chantier" },
    { id: "67005.f", title: "Voies de circulation pour véhicules" },
    { id: "67008.f", title: "Ouvertures dans les planchers" },
    { id: "67009.f", title: "Bruit au poste de travail" },
    { id: "67010.f", title: "Stress au travail" },
    { id: "67012.f", title: "Sols (risques de glissade)" },
    { id: "67013.f", title: "Emploi de solvants" },
    { id: "67017.f", title: "Élingues (levage)" },
    { id: "67018.f", title: "Petits travaux sur les toits" },
    { id: "67019.f", title: "Formation des nouveaux collaborateurs" },
    { id: "67020.f", title: "Protecteurs d'ouïe" },
    { id: "67021.f", title: "Chariots élévateurs à contrepoids" },
    { id: "67023.f", title: "Travailleurs isolés" },
    { id: "67028.f", title: "Échelles portables et escabeaux" },
    { id: "67031.f", title: "Risques hivernaux" },
    { id: "67032.f", title: "Étagères et armoires à tiroirs" },
    { id: "67035.f", title: "Protection de la peau au travail" },
    { id: "67038.f", title: "Échafaudages de façade" },
    { id: "67044.f", title: "Comportement sûr" },
    { id: "67045.f", title: "Nettoyage et entretien des bâtiments" },
    { id: "67051.f", title: "Éclairage des postes de travail" },
    { id: "67054.f", title: "Air comprimé" },
    { id: "67055.f", title: "Échelles fixes" },
    { id: "67061.f", title: "Plan d'urgence (postes mobiles)" },
    { id: "67062.f", title: "Plan d'urgence (postes fixes)" },
    { id: "67064-1.f", title: "Plateformes élévatrices (Planification)" },
    { id: "67064-2.f", title: "Plateformes élévatrices (Contrôle site)" },
    { id: "67068.f", title: "Bouteilles de gaz" },
    { id: "67070.f", title: "Vibrations au poste de travail" },
    { id: "67071.f", title: "Stockage liquides inflammables" },
    { id: "67072.f", title: "Portes et portails" },
    { id: "67075.f", title: "Protection contre démarrages intempestifs" },
    { id: "67076.f", title: "Passerelles, escaliers et plateformes" },
    { id: "67081.f", title: "Électricité sur les chantiers" },
    { id: "67082.f", title: "Ouvertures dans les parois" },
    { id: "67091.f", title: "Équipements de protection individuelle (EPI)" },
    { id: "67092.f", title: "Machines électriques portatives" },
    { id: "67093.f", title: "Chargement manuel de véhicules" },
    { id: "67102.f", title: "Élévateurs de véhicules" },
    { id: "67103.f", title: "Soudage et coupage (flamme)" },
    { id: "67104.f", title: "Soudage (arc électrique)" },
    { id: "67116.f", title: "Grues de chantier" },
    { id: "67123.f", title: "Zones de (dé)chargement" },
    { id: "67132.f", title: "Risques d'explosion (PME)" },
    { id: "67135.f", title: "Travail soleil et forte chaleur" },
    { id: "67146.f", title: "STOP à la manipulation des protections" },
    { id: "67148.f", title: "Fouilles et terrassements" },
    { id: "67150.f", title: "Échafaudages roulants" },
    { id: "67157.f", title: "Voies d'évacuation" },
    { id: "67158.f", title: "Appareils de levage" },
    { id: "67172.f", title: "Service extérieur (Déplacements)" },
    { id: "67173.f", title: "Service extérieur (Chez les clients)" },
    { id: "67178.f", title: "Stop chutes au bureau" },
    { id: "67180.f", title: "Stop chutes industrie et artisanat" },
    { id: "67181.f", title: "Stop chutes sur les chantiers" },
    { id: "67185.f", title: "Mains courantes (Escaliers)" },
    { id: "67189.f", title: "Stop chutes nettoyage intérieur" },
    { id: "67190.f", title: "Apprentissage en sécurité" },
    { id: "67192.f", title: "Maintenance machines et installations" },
    { id: "67199.f", title: "Alléger la charge (Ergonomie)" },
    { id: "67204.f", title: "Substances nocives en entreprise" },
    { id: "88179.f", title: "Conducteurs de grues à tour" },
    { id: "84034.f", title: "Règles vitales : Forêt" },
    { id: "84035.f", title: "Règles vitales : Bâtiment" },
    { id: "84036.f", title: "Règles vitales : Peintres et plâtriers" },
    { id: "84040.f", title: "Règles vitales : Maintenance" },
    { id: "84041.f", title: "Règles vitales : Toitures et façades" },
    { id: "84042.f", title: "Règles vitales : Installations électriques" },
    { id: "67004.f", title: "Toupies" },
    { id: "67006.f", title: "Silos à plaquettes de bois vert" },
    { id: "67007.f", title: "Silos à copeaux de bois" },
    { id: "67014.f", title: "Scies circulaires à table mobile" },
    { id: "67015.f", title: "Raboteuses portatives" },
    { id: "67016.f", title: "Scies circulaires à main" },
    { id: "67022.f", title: "Installations de manutention continue de charges isolées" },
    { id: "67024.f", title: "Installations de manutention continue de palettes" },
    { id: "67025.f", title: "Entreposage de panneaux en bois et en plastique" },
    { id: "67026.f", title: "Transport de panneaux en bois et en plastique" },
    { id: "67027.f", title: "Outils de fraisage" },
    { id: "67030.f", title: "Eczéma du ciment" },
    { id: "67033.f", title: "Travailler avec une tronçonneuse" },
    { id: "67036.f", title: "Perceuses à colonne et d'établi" },
    { id: "67037.f", title: "Machines à meuler ou tourets à meuler" },
    { id: "67039.f", title: "Petits engins de chantier" },
    { id: "67040.f", title: "Filtres à particules pour moteurs diesel" },
    { id: "67041.f", title: "Machines de chantier à conducteur à pied" },
    { id: "67042.f", title: "Accès aux silos pour sable et gravier" },
    { id: "67043.f", title: "Transporteurs à bande pour marchandises en vrac" },
    { id: "67046.f", title: "Chariots électriques à timon" },
    { id: "67047.f", title: "Défonceuses portatives" },
    { id: "67048.f", title: "Fraiseuses pour joints d’ombre" },
    { id: "67050.f", title: "Achat de meubles et accessoires pour travail sur écran" },
    { id: "67053.f", title: "Tours conventionnels" },
    { id: "67056.f", title: "Lubrifiants" },
    { id: "67057.f", title: "Scies à ruban" },
    { id: "67058.f", title: "Dégauchisseuses-raboteuses" },
    { id: "67059.f", title: "Travailler avec une débroussailleuse" },
    { id: "67060.f", title: "Fendeuses à coin pour bois" },
    { id: "67063.f", title: "Résines réactives" },
    { id: "67065.f", title: "Quais de chargement" },
    { id: "67066.f", title: "Rampes ajustables et niches de chargement" },
    { id: "67067.f", title: "Plateformes élévatrices pour quais" },
    { id: "67069.f", title: "Scies circulaires à chariot porte-grume" },
    { id: "67073.f", title: "Transtockeurs" },
    { id: "67077.f", title: "Poussières nocives" },
    { id: "67078.f", title: "Outillage manuel" },
    { id: "67079.f", title: "Lasers sur les chantiers" },
    { id: "67083.f", title: "Électricité statique" },
    { id: "67084.f", title: "Acides et bases" },
    { id: "67085.f", title: "Scies circulaires multiples cylindres" },
    { id: "67086.f", title: "Scies circulaires multiples ruban" },
    { id: "67087.f", title: "Déligneuses retour au-dessus" },
    { id: "67088.f", title: "Déligneuses retour au-dessous" },
    { id: "67094.f", title: "Chargement véhicules engins de levage" },
    { id: "67095.f", title: "Éléments de construction en bois" },
    { id: "67096.f", title: "Fendeuses à vis" },
    { id: "67113.f", title: "Phénomènes dangereux mécaniques liés aux machines" },
    { id: "67119.f", title: "Accumulateurs au plomb" },
    { id: "67121.f", title: "Musique au poste de travail" },
    { id: "67124.f", title: "Préparation du travail" },
    { id: "67126.f", title: "Circulation des véhicules ferroviaires dans l’entreprise" },
    { id: "67130.f", title: "Machines à injecter (îlots de production)" },
    { id: "67131.f", title: "Tondeuses à gazon" },
    { id: "67139.f", title: "Machine CNC pour percer, tourner et fraiser" },
    { id: "67141.f", title: "Cloueuses et agrafeuses" },
    { id: "67142.f", title: "Stockage de marchandises en piles" },
    { id: "67153.f", title: "Travaux de construction au bord, dans ou au-dessus de l’eau" },
    { id: "67154.f", title: "Chantiers de montagne" },
    { id: "67155.f", title: "Déchiqueteuses" },
    { id: "67156.f", title: "Entretien et taille des houppiers" },
    { id: "67159.f", title: "Ponts roulants" },
    { id: "67160.f", title: "Pieux forés, battus ou moulés" },
    { id: "67164.f", title: "Chariots élévateurs latéraux et quadridirectionnels" },
    { id: "67171.f", title: "Mesures techniques de protection contre le bruit" },
    { id: "67174.f", title: "Chargement et déchargement des conteneurs et des bennes" },
    { id: "67175.f", title: "Maintenance des conteneurs et des bennes" },
    { id: "67176.f", title: "Engins de damage" },
    { id: "67183.f", title: "Protection des mains dans la métallurgie" },
    { id: "67184.f", title: "Protection oculaire dans l’industrie et les arts et métiers" },
    { id: "67186.f", title: "Poussières de quartz dans les exploitations de roches et graviers" },
    { id: "67191.f", title: "Pompes à béton" },
    { id: "67193.f", title: "Installations d’enneigement" },
    { id: "67194.f", title: "Transport et entreposage de verre plat dans les entreprises" },
    { id: "67196.f", title: "Ascenseurs de chantier pour personnes et matériaux" },
    { id: "67197.f", title: "Entrepôts à allées étroites" },
    { id: "67198.f", title: "Accessoires de levage" },
    { id: "67200.f", title: "Travaux héliportés sur les chantiers forestiers" },
    { id: "67201.f", title: "Galvanotechnique" },
    { id: "67202.f", title: "Béton projeté pour travaux de génie civil et souterrains" },
    { id: "67203.f", title: "Pose et entretien de revêtements de sols" },
    { id: "84044.f", title: "Règles vitales : travaux avec protection par encordement" },
    { id: "84045.f", title: "Règles vitales : remontées mécaniques et téléskis" },
    { id: "84046.f", title: "Règles vitales : construction en bois" },
    { id: "84048.f", title: "Règles vitales : montage de charpentes métalliques" },
    { id: "84049.f", title: "Règles vitales : construction en éléments préfabriqués en béton" },
    { id: "84050.f", title: "Règles vitales : personnel au sol hélicoptères" },
    { id: "84051.f", title: "Règles vitales : génie civil et travaux publics" },
    { id: "84054.f", title: "Règles vitales : artisanat et industrie" },
    { id: "84056.f", title: "Règles vitales : transports routiers" },
    { id: "84058.f", title: "Règles vitales : branche des ascenseurs" },
    { id: "84061.f", title: "Règles vitales : construction métallique" },
    { id: "84064.f", title: "Règles vitales : lignes électriques haute tension" },
    { id: "84066.f", title: "Règles vitales : lignes électriques poteaux bois" },
    { id: "84067.f", title: "Règles vitales : chariots élévateurs" },
    { id: "84071.f", title: "Règles vitales : branche ferroviaire" },
    { id: "84073.f", title: "Règles vitales : techniciens du bâtiment" },
    { id: "84074.f", title: "Règles vitales : travaux souterrains" },
    { id: "84077.f", title: "Règles vitales : élingage des charges" }
];

// Variables globales (seront assignées au chargement)
let resultsList, searchBar, btnSortNum, btnSortName;

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

// --- INITIALISATION PROPRE ---
document.addEventListener('DOMContentLoaded', () => {
    // On récupère les éléments une fois que le DOM est prêt
    resultsList = document.getElementById('resultsList');
    searchBar = document.getElementById('searchBar');
    btnSortNum = document.getElementById('sortByNum');
    btnSortName = document.getElementById('sortByName');

    // On branche les événements
    if (searchBar) {
        searchBar.addEventListener('keyup', handleSearch);
    }

    if (btnSortNum) {
        btnSortNum.addEventListener('click', () => sortItems('id'));
    }

    if (btnSortName) {
        btnSortName.addEventListener('click', () => sortItems('title'));
    }

    // Affichage initial
    sortItems('id');
});

// Enregistrement du Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => console.log("SW registration failed", err));
}