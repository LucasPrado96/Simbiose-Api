import express from 'express';
import routes from './src/routes/index.js';
import cors from 'cors';

// const PORT = 3001;

class App{
    constructor(){
        this.app =  express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        const allowedOrigins = [
            'https://site-simbiose-frontend.vercel.app/'

        ];

        this.app.use(cors({
            origin: (origin, callback) => {
                if (!origin || allowedOrigins.includes(origin)) {
                    callback(null, true);
                } else {
                    callback(new Error('Not allowed by CORS'))
                }
            }
        }))
    }

    routes(){
        this.app.use(routes)
    }

  
 
}


export default new App().app
