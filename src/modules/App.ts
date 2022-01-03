import express from 'express';

export class App {

    constructor(){}

    public async start(): Promise<string>{
        try {
            const app = express();
            const port = 3000;
            app.get('/', (req, res) => {
                res.send('The sedulous hyena ate the antelope!');
            });
            app.listen(port, () => {
                console.log(`Server is running on port: ${port}`);
            });
            return `Berserk API started successfully`;
        } catch (error: any) {
            console.error(error);
            throw Error(`An error has ocurred ${error.message}`);
        }
    }
}