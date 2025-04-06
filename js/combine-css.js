document.addEventListener('DOMContentLoaded', function() {
    // Liste des fichiers CSS à combiner
    const cssFiles = [
        'css/style.css',
        'css/style2.css',
        'css/style3.css',
        'css/style4.css',
        'css/style5.css'
    ];

    // Fonction pour charger le contenu d'un fichier CSS
    async function loadCSS(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erreur de chargement ${url}: ${response.status}`);
            }
            return await response.text();
        } catch (error) {
            console.error('Erreur de chargement du CSS:', error);
            return '';
        }
    }

    // Fonction pour combiner les CSS
    async function combineCSS() {
        let combinedCSS = '';
        
        for (const file of cssFiles) {
            const css = await loadCSS(file);
            combinedCSS += css + '\n\n';
        }
        
        // Création d'un élément style pour injecter le CSS combiné
        const styleElement = document.createElement('style');
        styleElement.textContent = combinedCSS;
        document.head.appendChild(styleElement);
        
        // Suppression des liens CSS individuels
        document.querySelectorAll('link[rel="stylesheet"][href^="css/style"]').forEach(link => {
            link.remove();
        });
    }
    
    // Exécution de la combinaison
    combineCSS();
});
