
const SHA256 = require('crypto-js/sha256')
/*
Block Class is the class for a block 
Basic unit of blockchain
It have only one constructore
*/
class Block {
    constructor(data) {
      this.hash = "",
        this.height = 0,
        this.body = data,
        this.time = 0,
        this.previousBlockHash = ""
    }
  }
/*
Class for blockchain
have 1 constructor
*/

class Blockchain{
    constructor(){
        this.chain=[]
        this.addBlock(new Block("Genesis Block in chain"));
    }
    addBlock(newBlock){
        if(this.chain.length>0){
            newBlock.previousBlockHash=this.chain[this.chain.length-1].hash;
        }
        newBlock.hash=SHA256(JSON.stringify(newBlock)).toString();
        newBlock.height=this.chain.length;
        newBlock.time=new Date().getTime().toString().slice(0,-3);
        this.chain.push(newBlock);
    }
}