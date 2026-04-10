const suvaLists = [
    // --- LISTES DE CONTRÔLE GÉNÉRALES ET TECHNIQUES ---
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

    // --- RÈGLES VITALES (CRUCIAL POUR UN QSSE) ---
    { id: "84034.f", title: "Règles vitales : Forêt" },
    { id: "84035.f", title: "Règles vitales : Bâtiment" },
    { id: "84036.f", title: "Règles vitales : Peintres et plâtriers" },
    { id: "84040.f", title: "Règles vitales : Maintenance" },
    { id: "84041.f", title: "Règles vitales : Toitures et façades" },
    { id: "84042.f", title: "Règles vitales : Installations électriques" }
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
        return item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchString) || 
               item.id.toLowerCase().includes(searchString);
    });
    displayLists(filteredLists);
});

// Service Worker Registration pour PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

displayLists(suvaLists);