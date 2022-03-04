import Artifact from "./Artifact"

export default class ArtifactSet {
	name!:string
	/** Possible rarity of a set */
	rarity!:number[]
	pieces!:Artifact
	bonus2?:string
	bonus4?:string
}