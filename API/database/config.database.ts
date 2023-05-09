import { MongoClient, ServerApiVersion }  from 'mongodb';
import mongoose from 'mongoose';

const uri = process.env.MONGO_URI;

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

export async function run() {
    try {
        await mongoose.connect(uri)
        // await client.connect();
        // await client.db("admin").command({ping: 1});
    } catch (error) {
        return Error("Error en la conexión a la base de datos")        
    } finally {
        // await client.close();
    }
}

// run().catch(console.dir);