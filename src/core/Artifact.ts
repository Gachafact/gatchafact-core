import Stat from "./Stat"


export default class Artifact{
	id!:number
	set_name!:string
	stats?: {
		'main':Stat,
		'substats': Stat[]
	}
	type!:string
	two_bonus?:string
	four_bonus?:string
	rarity!:number

}

