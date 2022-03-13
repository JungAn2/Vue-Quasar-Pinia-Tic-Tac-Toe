import { defineStore } from "pinia";
import { SessionStorage } from "quasar";

export const scoreStore = defineStore("score",{
    /**
     * Variables
     * 
     * @returns Values of each state variable
     */
    state:()=>{
        return{
            Xscore: (SessionStorage.getItem("scoreX") || 0),
            Oscore: (SessionStorage.getItem("scoreO") || 0)

        }
    },
    getters:{

    },
    actions:{
        /**
         * Increase X score
         */
        increaseX(){
            SessionStorage.set("scoreX", ++this.Xscore)
        },
        /**
         * Increase O score
         */
        increaseO(){
            SessionStorage.set("scoreO", ++this.Oscore)
        }
    }
})