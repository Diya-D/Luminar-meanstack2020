var names=["abhi","vijay","alka","sambhu"]
//write a program to convert it to uppercase
//so we should use map()
var upper=names.map((name)=>name.toUpperCase())
console.log(upper)


//write program to fetch names staring with a
var a=names.filter(name=>name.charAt(0)=="a")
console.log(a)
