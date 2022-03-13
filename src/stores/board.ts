import { defineStore } from "pinia";
import { scoreStore } from "./score";

//Winning combinations
const wins = [
    //Row wins
    [[0,0], [0,1],[0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    //Col wins
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]], 
    [[0,2],[1,2],[2,2]],
    //Diagonal wins
    [[0,0],[1,1],[2,2]], 
    [[2,0],[1,1],[0,2]]
]


export const boardStore = defineStore("board", {

    state: () => ({
        /**
         * Initial states
         */
        turn: "O",
        winner: "",
        cellArray: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ],


    }),

    getters: {
        /**
         * Gets the current cell value of position
         * 
         * @param i row of cellArray
         * @param j col of cellArray
         * @returns 
         */
        getCell: (state) =>{
            return (i:number, j:number) => {
                return state.cellArray[i][j]
            }
        },
        /**
         * Gets the winner value
         * 
         * @param state State store of variables
         * @returns 
         */
        getWinner(state){
            return state.winner
        },

        /**
         * Returns the element number for document.findElementByClass use
         * 
         * @param i row of cellArray
         * @param j col of cell Array
         * @returns 
         */
        findElement: (state)=>{
            return (i: number, j:number)=>{
                return (3*i)+j
            }
        }
    },

    actions: {
        /**
         * Changes turn when made
         */
        whosTurn() {
            this.turn === "O" ? this.turn = "X" : this.turn = "O"
        },

        /**
         * Turn move for each
         * 
         * @param row row of cellArray
         * @param col col of cellArray
         */
        move(row: number, col: number) {
            const cell = this.cellArray[row][col]
            if(cell === ""){
                this.cellArray[row][col] = this.turn
                //Makes the cell unclickable
                {
                    const doc = document.getElementsByClassName("cellBtn")
                    if(!doc[this.findElement(row,col)]?.classList.contains("no-pointer-events"))
                        doc[this.findElement(row,col)]!.classList.add("no-pointer-events")
                }
                //Makes the turn to other player
                this.whosTurn()
                this.checkWin()
                //Makes the whole board unclickable
                if(this.winner != ""){
                    this.increaseScore(this.winner)
                    const doc = document.getElementById("boardSize")
                    if(!doc!.classList.contains("no-pointer-events"))
                        doc!.classList.add("no-pointer-events")
                }

            }
        },

        /**
         * Checks if there is any winner
         * and assign to the winner
         * 
         */
        checkWin(){
            for(let i = 0; i<wins.length; i++){
                const cell1 = this.cellArray[wins[i][0][0]][wins[i][0][1]]
                const cell2 = this.cellArray[wins[i][1][0]][wins[i][1][1]]
                const cell3 = this.cellArray[wins[i][2][0]][wins[i][2][1]]
                if(cell1 != "" && cell1 == cell2 && cell2 == cell3){
                    this.winner = cell1
                    return
                }
            }
            this.checkTie()
        },

        /**
         * Increases the score of the winning side
         * 
         * @param winnerString String value of winner
         */
        increaseScore(winnerString: string){
            const useScore = scoreStore()
            winnerString === "O"? useScore.increaseO(): useScore.increaseX()
        },

        /**
         * Checks if there is a tie once all the cells have been used
         * 
         * @returns Break out of the loop
         */
        checkTie(){
            for(let i = 0; i < 3; i++){
                for(let j = 0; j<3; j++){
                    if(this.cellArray[i][j] == "")
                        return
                }
            }
            this.winner = "Tie"
        },

        /**
         * Resets the variable
         * Remove no-pointer-event for each cell
         */
        reset() {
            const cellDoc = document.getElementsByClassName("cellBtn")
            const boardDoc = document.getElementById("boardSize")
            if(boardDoc?.classList.contains("no-pointer-events"))
                boardDoc!.classList.remove("no-pointer-events")

            //Get rid of class no-pointer-events
            for(let i = 0; i < cellDoc?.length; i++){
                if(cellDoc[i]!.classList.contains("no-pointer-events"))
                    cellDoc[i]!.classList.remove("no-pointer-events")
            }
            this.$reset()
        }
    }
})