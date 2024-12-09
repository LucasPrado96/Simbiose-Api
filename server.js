import routes from './src/routes/index.js';
import { execSync } from 'child_process';
import puppeteer from 'puppeteer';
import App from './app.js'



try {
    const chromePath = execSync('find /opt/render/.cache/puppeteer -name chrome').toString().trim();
    console.log('Chrome instalado em:', chromePath);
} catch (error) {
    console.error('Erro ao verificar o Chrome:', error.message);
}



App.use('/api', routes); 

App.get('/', (req, res) => {
    res.send('API Working...')
})


const PORT = process.env.PORT || 8080;
App.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
})

