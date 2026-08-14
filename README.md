# 📚 SES Compagnon — Companion App for French Economics Students

A modern, interactive learning platform for **Sciences Économiques et Sociales (SES)** with formulas, glossary, and interactive exercises.

## ✨ Features

- **38 Comprehensive SES Terms** covering Economics, Sociology, and Social Sciences
- **30+ Formulas** with detailed explanations and examples
- **Interactive Exercises** with 5 types of questions (proportions, variations, averages, etc.)
- **Fuzzy Search** with Fuse.js for finding terms and formulas
- **Glossary with Filtering** by category and search keywords
- **Beautiful UI** with an enhanced color palette for better readability
- **Responsive Design** works on desktop, tablet, and mobile

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server (with hot module replacement)
npm run dev
```

Then open http://localhost:5173

### Production Build

```bash
npm run build
npm run preview
```

## 📦 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions on deploying to:
- ✅ **GitHub Pages** (Free, Recommended)
- ✅ **Vercel** (Free, Easiest)
- ✅ **Netlify** (Free, Alternative)

### Quick GitHub Pages Deploy

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[USERNAME]/SES.git
git push -u origin main
```

Then enable GitHub Pages in repository settings (branch: `gh-pages`)

## 📚 Content Structure

### Glossaire SES (38 Terms)

**Entreprise** (5 terms)
- Chiffre d'affaires (CA)
- Valeur ajoutée (VA)
- Excédent brut d'exploitation (EBE)
- Bénéfice
- Marge

**Sociologie** (3 terms)
- Socialisation
- Norme sociale
- Valeur sociale

**Stratification** (3 terms)
- Classe sociale
- Mobilité sociale
- Inégalité

**Production** (8 terms)
- Facteurs de production
- Travail (facteur)
- Capital (facteur)
- Capital humain
- Ressources naturelles
- Productivité du travail
- Division du travail
- Rendements d'échelle

**Revenus** (2 terms)
- Rente
- Intérêt (revenu du capital)

**Emploi** (1 term)
- Chômage

### 30+ Formulas

Including: Proportion, Taux de variation, Coefficient multiplicateur, Indice base 100, and more

### 5 Types of Interactive Exercises

1. Proportions
2. Variation Rates
3. Averages
4. Multiplicative Coefficients
5. Indices

## 🎨 Design

- **Color Palette**: Dynamic category colors (blue, purple, green, amber, pink, red)
- **Typography**: Clean, modern with proper French accents
- **Responsive Grid**: Auto-fit layout adapts to screen size
- **Shadows & Gradients**: Professional depth and visual hierarchy

## 🛠️ Tech Stack

- **React 18.2** - UI Framework
- **TypeScript** - Type Safety
- **Vite 5.4** - Build Tool with HMR
- **Fuse.js** - Fuzzy Search
- **Tailwind CSS** - Inline Styling

## 📋 Project Structure

```
src/
├── main.tsx                 # Root component & app shell
├── components/
│   ├── FicheDetail.tsx     # Formula details view
│   ├── SearchBar.tsx        # Search with suggestions
│   ├── Programme.tsx        # Formulas organized by chapter
│   ├── Lexique.tsx          # Glossary with filtering
│   └── Exercices.tsx        # Interactive exercises
├── data/
│   ├── calculs.json         # 30+ formulas database
│   ├── sesGlossaire.ts      # 38 SES terms
│   └── exercices.ts         # Exercise generator
└── search/
    └── index.ts             # Fuse.js search implementation
```

## 🔄 Development Workflow

1. Start dev server: `npm run dev`
2. Edit files in `src/`
3. Changes auto-reload with HMR
4. Build for production: `npm run build`
5. Output in `dist/` folder

## 📖 Usage

### Adding New Terms

Edit `src/data/sesGlossaire.ts` and add entries with:
```typescript
{
  id: 'unique-id',
  terme: 'Term Name',
  sigle?: 'ABBREVIATION',
  categorie: 'Category',
  definition: 'Full definition...',
  formule?: 'Mathematical formula',
  interpretation: 'What it means...',
  exemple: 'Real example...',
  pointsCles: ['Key point 1', 'Key point 2']
}
```

### Adding New Formulas

Edit `src/data/calculs.json` with the same structure as existing formulas.

### Customizing Exercises

Edit `src/data/exercices.ts` to modify question generation logic.

## 📄 License

MIT - Use freely for educational purposes

## 🙏 Credits

Built with ❤️ for French Economics Students

