import { App } from './modules/App';

const app = new App();

app.start()
    .then((message) => console.log(message))
    .catch((error) => {
    console.error(error);
    process.exit(1);
})