import routes from './src/routes/index.js';

import App from './app.js'






App.use('/api', routes); 

App.get('/', (req, res) => {
    res.send('API Working...')
})


const PORT =  8080;
App.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
})

