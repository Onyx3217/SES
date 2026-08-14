# 📚 SES Compagnon - Guide de Déploiement

Votre application SES Compagnon est prête à être déployée ! Voici les options :

## Option 1 : GitHub Pages (Recommandé - Gratuit) ⭐

### Étapes :

1. **Créer un repository GitHub**
   - Allez sur [github.com/new](https://github.com/new)
   - Créez un repository appelé `SES` (ou autre nom)
   - **Important** : Rendez-le **public**

2. **Initialiser Git localement**
   ```bash
   cd C:\Users\Champeley\Desktop\SES
   git init
   git add .
   git commit -m "Initial commit: SES Compagnon app"
   git branch -M main
   git remote add origin https://github.com/[VOTRE_USERNAME]/SES.git
   git push -u origin main
   ```

3. **Configurer GitHub Pages**
   - Allez dans **Settings** du repository
   - Descendez à **Pages**
   - Source : Branch `gh-pages`
   - La site sera déployé automatiquement à : `https://[VOTRE_USERNAME].github.io/SES`

4. **Le workflow GitHub Actions**
   - À chaque push sur `main`, le site se redéploie automatiquement
   - Vérifiez dans l'onglet **Actions** que le déploiement passe

---

## Option 2 : Vercel (Encore plus facile) 🚀

1. Créez un account gratuit sur [vercel.com](https://vercel.com)
2. Connectez-le à votre repository GitHub
3. Déploiement automatique à chaque push
4. URL personnalisée gratuite

---

## Option 3 : Netlify (Alternative) 🌐

1. Allez sur [netlify.com](https://netlify.com)
2. Connectez votre GitHub
3. Définissez le build command : `npm run build`
4. Publish directory : `dist`
5. Déploiement automatique

---

## Commandes Locales

```bash
# Démarrer en développement
npm run dev

# Faire une build de production
npm run build

# Voir le build localement
npm run preview
```

---

## 📊 Contenu du Site

- **38 termes SES** (Entreprise, Emploi, Sociologie, Stratification, Production, etc.)
- **30 formules** organisées par chapitre
- **Exercices interactifs** avec 5 types de questions
- **Glossaire complet** avec définitions et exemples
- **Palette de couleurs améliorée** pour une meilleure UX

---

## ✨ Points Clés du Déploiement GitHub Pages

- La branche `gh-pages` est créée automatiquement par le workflow
- Le site se met à jour à chaque push sur `main`
- **ATTENTION** : Utilisez le repository name dans l'URL (`/SES/`)

---

Besoin d'aide ? Les fichiers de configuration sont prêts à l'emploi ! 🎉
