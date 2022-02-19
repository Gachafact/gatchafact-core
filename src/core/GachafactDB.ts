import { User } from "./User"


export class GachafactDB {
    #baseUrl:string

    constructor(){
        this.#baseUrl = process.env.BASEURL ?? ''
    }

    public async getArtifacts(){
        let resp = await fetch((new URL('artifact', this.#baseUrl)).href)
        return resp.body
    }

    public async getUser(discord_id:number):Promise<User>{
        let resp = await fetch((new URL('artifact', this.#baseUrl)).href)
        let user: User = await resp.json()
        return user
    }



}