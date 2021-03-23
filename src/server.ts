import App from './app';
import DotEnv from 'dotenv';

DotEnv.config();

const { PORT } = process.env as any;

class Server {

    static start(){
        if (PORT) {
            new App({ PORT });
        } else {
            new App({ PORT: 3333 });
        }
    }
}

Server.start();