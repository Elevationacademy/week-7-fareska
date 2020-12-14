///////////////////Data Structures//////////////
////////Exercises

class UniqueArray{
    constructor(){
        this.data={}
        this.length = 0
    }

    add(item){
        if(!this.exists(item)){
            this.data[item] = this.length
            this.length++
        }
    }

    showAll(){
        return console.log(Object.keys(this.data))
    }

    exists(item){
        if(this.data[item] >= 0){return true}
        else{return false}
    }

    get(index){
        if (index > this.length){return -1}
        else{
             return Object.keys(this.data)[index]
        }
    }
}


const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy") )//returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
