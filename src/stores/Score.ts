import { defineStore } from "pinia";
import { ref } from 'vue'

export const score = defineStore('Score', {
    state:()=>{
        return{
            xScore:0,
            oScore:0
        }
    },

    actions:()=>{
        return{
            increment(){
                xScore++;
            }
        }
    }
})