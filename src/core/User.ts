import * as moment from "moment"

export class User{
    readonly discord_id:number
    readonly joined:moment.Moment
    readonly first_artifact: moment.Moment

    constructor(discord_id:number, joined: moment.Moment, first_artifact:moment.Moment){
        this.discord_id = discord_id,
        this.joined = joined,
        this.first_artifact = first_artifact
    }

    public static createUser(discord_id:number){
        
    }

}