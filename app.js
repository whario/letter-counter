let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let parMin = par.toLowerCase();
let counts = {};

// your code here
function LetterCounter (){
    for (let i=0; i<parMin.length; i++){
       if (parMin[i]!=' '){
            if(counts[parMin[i]]){
            counts[parMin[i]]+=1;
        }else{
            counts[parMin[i]]=1;
            }
       }
    }
}
LetterCounter();

console.log(counts);