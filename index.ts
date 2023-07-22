require('dotenv').config()
import OrigamiCore from '@origamicore/core'  
import config from './config'; 
export default class OriIndex
{
    constructor()
    {   
        this.init();
    }
    async init()
    {
        var origamicore = new OrigamiCore(config);
        await origamicore.start()   
    }
}

new OriIndex()