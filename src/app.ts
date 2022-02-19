
import gfdb from "./core/GachafactDB.js";
import DC from "discord.js";
import env from 'dotenv'
console.log(env.config())


async function main(){



    let gac = new gfdb()
    await gac.connect()
    console.log(await gac.getArtifactList())
}

main()
