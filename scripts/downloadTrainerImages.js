const fs = require('fs');
const path = require('path');
const https = require('https');
const { createCanvas, loadImage } = require('canvas');

// Créer le dossier s'il n'existe pas
const outputDir = path.join(__dirname, '../public/images/trainers');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Configuration des images à télécharger
const trainers = [
  {
    name: 'jean-dupont',
    url: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80',
    role: 'Formateur en Finance',
    description: '15 ans d\'expérience dans la formation financière'
  },
  {
    name: 'marie-martin',
    url: 'https://images.unsplash.com/photo-1542740348-3950cdbb38ac?w=800&q=80',
    role: 'Formatrice en Trading',
    description: 'Expertise en analyse technique et stratégies de marché'
  },
  {
    name: 'thomas-leroy',
    url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80',
    role: 'Formateur en Crypto-actifs',
    description: 'Spécialiste des technologies blockchain et crypto-monnaies'
  }
];

// Fonction pour télécharger et redimensionner une image
async function downloadAndProcessImage(trainer) {
  return new Promise((resolve) => {
    const outputPath = path.join(outputDir, `${trainer.name}.jpg`);
    const file = fs.createWriteStream(outputPath);
    
    https.get(trainer.url, (response) => {
      response.pipe(file);
      
      file.on('finish', async () => {
        file.close();
        console.log(`✅ Téléchargement de ${trainer.name} terminé`);
        
        // Redimensionner l'image
        try {
          const img = await loadImage(outputPath);
          const canvas = createCanvas(800, 1000);
          const ctx = canvas.getContext('2d');
          
          // Dessiner l'image en couvrant tout l'espace
          ctx.drawImage(img, 0, 0, 800, 1000);
          
          // Sauvegarder l'image redimensionnée
          const out = fs.createWriteStream(outputPath);
          const stream = canvas.createJPEGStream({
            quality: 0.9,
            chromaSubsampling: false
          });
          
          stream.pipe(out);
          out.on('finish', () => {
            console.log(`✅ Redimensionnement de ${trainer.name} terminé`);
            resolve(true);
          });
        } catch (error) {
          console.error(`Erreur lors du traitement de ${trainer.name}:`, error);
          resolve(false);
        }
      });
    }).on('error', (err) => {
      console.error(`Erreur lors du téléchargement de ${trainer.name}:`, err);
      fs.unlink(outputPath, () => resolve(false));
    });
  });
}

// Télécharger toutes les images
async function downloadAllImages() {
  console.log('🚀 Début du téléchargement des images...');
  
  for (const trainer of trainers) {
    await downloadAndProcessImage(trainer);
  }
  
  console.log('🎉 Toutes les images ont été téléchargées avec succès !');
  console.log(`📁 Dossier de destination: ${outputDir}`);
}

downloadAllImages();
