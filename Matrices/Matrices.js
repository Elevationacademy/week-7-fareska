
class Matrix{
    constructor(){
        this.matrix = []
        this.counter = 1
    }

    generateMatrix(rowsNum, columnsNum){
        for(let r=0; r<rowsNum; r++){
            this.matrix.push([])
            for(let c=0; c<columnsNum; c++){
                this.matrix[r].push(this.counter++)
            }
        }
    }

    printMatrix(){
        console.log(this.matrix)
    }

    printMatrixNumbers(){
        for(let r=0; r<this.matrix.length; r++ ){
            for(let c=0; c<this.matrix[r].length; c++){
                console.log(this.matrix[r][c])
            }
        }
    }

    printMatrixFormatted(){
        for(let r=0; r<this.matrix.length; r++){
            let line= ''
            for(let c=0; c<this.matrix[r].length; c++){
                line += this.matrix[r][c] + '\t'
            }
            console.log(line)
        }
    }

    getCoordination(rowNum, colNum){
       return this.matrix[rowNum][colNum]
    }

    printRow(rowNum){
        let line=''
        for (let c=0; c<this.matrix[rowNum].length; c++){
        line += this.matrix[rowNum][c] + '\t'
        }
        console.log(line)
    }

    alter(rowNum, colNum, updateV){
        this.matrix[rowNum][colNum] = updateV
    }
}

const m = new Matrix
m.generateMatrix(3,4)
// m.printMatrix()
// m.printMatrixNumbers() // spotCheck 2
// console.log(m.getCoordination(1,2)) //'spot check 3'
// m.printMatrixFormatted() //Spot Check 4
// m.printRow(1) //Spot Check 5
// m.alter(1, 3, 174) //Spot Check 6


