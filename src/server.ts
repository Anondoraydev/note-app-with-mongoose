import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';

let server: Server;

const PORT = 5000;

async function main() {
    try {
        await mongoose.connect(
          "mongodb+srv://tudoapp:KGZkl9yfMqANWh4a@cluster0.gbp43.mongodb.net/toduDB?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("Connected to MongoDB Using Mongoose!!");
        server = app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

main()
