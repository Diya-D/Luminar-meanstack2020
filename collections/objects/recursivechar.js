var arr="ABABAAB"

var obj={}
for(char of arr){
    if(char in obj){
        console.log("first recursive charecter is "+char)
        break
    }
    else{
        obj[char]=1
    }
}