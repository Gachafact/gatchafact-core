import * as moment from "moment"
import Artifact from "./Artifact"

export default class User{
    readonly discord_id:number
    readonly joined:moment.Moment
    readonly first_artifact: string
    readonly first_artifact_timestamp: moment.Moment
    readonly artifacts: Artifact[]

    constructor(discord_id:number, joined: moment.Moment, first_artifact:string, first_artifact_timestamp:moment.Moment, artifacts:Artifact[]){
        this.discord_id = discord_id,
        this.joined = joined,
        this.first_artifact = first_artifact
        this.first_artifact_timestamp = first_artifact_timestamp
        this.artifacts = artifacts
    }
}