import routes from './src/routes/index.js';

import App from './app.js'






App.use('/api', routes); 

App.get('/', (req, res) => {
    res.send('API Working...')
})


const port = process.env.PORT || 8080;
App.listen(PORT, () => {
    console.log(`API running on port ${port}`)
})

