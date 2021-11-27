const {MongoClient} = require("mongodb");

const client = new MongoClient(process.env.MONGOURL);

const mongo ={
    db:null,
    
    rooms:null,
    customers:null,

    async connect()
    {
        try{
        //connecting mongodb
        await client.connect();
        console.log("mongodb connected");

        this.db = client.db(process.env.DATABASE);
        this.rooms = this.db.collection("rooms");
        this.customers= this.db.collection("customers");
        console.log("connected to database");
        }
        catch(err){
            console.log(err);
        }

    }

}

module.exports = mongo;