import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb+srv://admin:supernova-mongodb@supernova-ucewo.mongodb.net/test?retryWrites=true&w=majority");

const db = client.database('supernova');

export default db;
