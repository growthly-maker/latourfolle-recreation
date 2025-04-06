# La Tour Folle - Site d'échecs

Ce projet est une recréation du site latourfolle.com, une plateforme dédiée à l'apprentissage et à la pratique des échecs, accessible à tous les niveaux.

## Fonctionnalités

- **Page d'accueil** : Présentation du site et de ses services
- **Section Cours** : Cours d'échecs pour tous les niveaux (débutant, intermédiaire, avancé)
- **Section Jouer** : Interface pour jouer aux échecs contre l'ordinateur ou en ligne
- **Ressources** : Documents pédagogiques, glossaire, règles du jeu
- **Blog** : Articles sur les échecs
- **Profil utilisateur** : Suivi de progression, statistiques

## Technologies utilisées

- HTML5
- CSS3 (avec variables CSS, Flexbox, Grid)
- JavaScript (vanilla)
- SVG pour les illustrations

## Structure du projet

```
/
├── index.html         # Page d'accueil
├── cours.html         # Page des cours
├── jouer.html         # Page de jeu
├── css/
│   ├── style.css       # Styles principaux
│   ├── chess.css       # Styles pour l'échiquier
├── js/
│   ├── script.js       # JavaScript principal
│   ├── chess.js        # Logique du jeu d'échecs
│   ├── combine-css.js  # Script pour combiner les fichiers CSS
├── images/
    ├── logo.svg        # Logo du site
    ├── logo-white.svg  # Version blanche du logo
    ├── favicon.svg     # Favicon
```

## Installation et utilisation

1. Clonez ce dépôt
2. Ouvrez `index.html` dans votre navigateur pour accéder à la page d'accueil
3. Naviguez vers les différentes sections du site via le menu de navigation

## Fonctionnalités du jeu d'échecs

- Interface intuitive avec échiquier interactif
- Possibilité de jouer contre l'ordinateur à différents niveaux de difficulté
- Notation algébrique des coups
- Historique des coups joués
- Options pour retourner l'échiquier, annuler un coup, obtenir un indice
- Contrôle du temps de jeu

## Crédits

Créé comme exercice de recréation du site latourfolle.com.

## License

MIT
