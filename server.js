import App from './app.js'
import dotenv from './dotenv'

// App.listen(3001, () =>{
//     console.log('server is running at port 3001...')
// })

dotenv.config()


const PORT = process.env.PORT || 8080;
App.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
})