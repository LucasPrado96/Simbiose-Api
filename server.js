// import dotenv from 'dotenv'
import App from './app.js'


// App.listen(3001, () =>{
//     console.log('server is running at port 3001...')
// })

dotenv.config()


App.get('/', (req, res) => {
    res.send('API Working...')
})


const PORT = process.env.PORT || 8080;
App.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
})

