const fs = require('fs');
const path = require('path');

const fotosPath = path.join(__dirname, 'lib/data/portfolio/fotos.json');
const reelsPath = path.join(__dirname, 'lib/data/portfolio/reels.json');

const getClientNiche = (client) => {
    if (!client) return 'Otros';
    const c = client.toLowerCase();
    if (c.includes('adriana costa')) return 'Joyería';
    if (c.includes('chic collection')) return 'Moda';
    if (c.includes('maison du pain') || c.includes('isla cafe') || c.includes('burrito') || c.includes('matcha') || c.includes('aroma')) return 'Gastronomía';
    if (c.includes('fashion magazine')) return 'Moda';
    if (c.includes('dove') || c.includes('glossy') || c.includes('l\'oréal')) return 'Belleza';
    if (c.includes('gaia')) return 'Agencia';
    return 'Otros';
};

try {
    const fotos = JSON.parse(fs.readFileSync(fotosPath, 'utf8'));
    fotos.items = fotos.items.map(item => ({ ...item, niche: getClientNiche(item.client) }));
    fs.writeFileSync(fotosPath, JSON.stringify(fotos, null, 2));

    const reels = JSON.parse(fs.readFileSync(reelsPath, 'utf8'));
    reels.items = reels.items.map(item => ({ ...item, niche: getClientNiche(item.client) }));
    fs.writeFileSync(reelsPath, JSON.stringify(reels, null, 2));

    console.log('JSON files updated with niches successfully.');
} catch (error) {
    console.error('Error updating JSON files:', error);
}
