var data="hello hai hello hai hello"
//hello 3 times hai 2 times
//first we have to split the data one by one 
var words=data.split(" ")//" "==split data by word by word,    ""==split data letter by letter
//then we have to create empty object
var obj={}
for(word of words){
    if (word in obj){
        obj[word]+=1
    }
    else{
        obj[word]=1
    }
}
console.log(obj)
 //console.log(words)
 //to find the high frequency word

var arr=[]
for(key in obj){
    var num=obj[key]
    arr.push(num)//keys are pushed to an array
}
var srt=arr.sort((a,b)=>b-a)//keys are sorted
var elem=srt[0]//
for(key in obj){
    if(elem==obj[key]){
        console.log(key)
    }
}