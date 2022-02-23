import User from "./User.js"
import PG from "pg";
import Artifact from "./Artifact.js";




export default class GachafactDB {

    #db : PG.Pool

    constructor(){
        this.#db =  new PG.Pool({connectionString:process.env.DATABASE_URL, ssl:{rejectUnauthorized:false}})
        this.#db.connect()

    }


    public async connect(){
    }

    public async getArtifactList(): Promise<Artifact[]>{
        return ((await this.#db.query('select * from view_artifacts')).rows as Artifact[])
    }

    public async getUser(discord_id:string): Promise<User | undefined>{
        let client = await this.#db.connect()
        let query= {
            text: `select * from view_users where discord_id = $1`,
            values: [discord_id]
        }

        console.log(query)
        let resp : User[] | undefined
        try {
            resp = (await this.#db.query(query)).rows as User[]
        }catch(e){
            throw e
        }finally{
            client.release()
            
        }
        console.log(resp)
        let _user = resp?.at(0)

        return _user

    }
    



}