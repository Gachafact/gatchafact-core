export default class Artifact{
    id:number
    set_name:string
    possible_stars:number[]
    type:string
    two_bonus?:string
    four_bonus?:string

    constructor(id:number,set_name:string,possible_stars:number[],type:string,two_bonus:string,four_bonus:string){
        this.id= id
        this.set_name = set_name
        this.possible_stars = possible_stars
        this.type = type
        this.two_bonus = two_bonus
        this.four_bonus = four_bonus
    }
}