import User from "./User.js"
import PG from "pg";
import Artifact from "./Artifact.js";




export default class GachafactDB {

    #db : PG.Client

    constructor(){
        this.#db =  new PG.Client({connectionString:process.env.DATABASE_URL, ssl:{rejectUnauthorized:false}})
        this.#db.connect()

    }


    public async connect(){
    }

    public async getArtifactList(): Promise<Artifact[]>{
        return ((await this.#db.query('select * from view_artifacts')).rows as Artifact[])
    }

    public getUser(discord_id:number){
        
    }
    



}