var num1=90,num2=20,num3=50
if((num1>num2)&(num1<num3)|(num1<num2)&(num1>num3)){
    console.log("num1 is secondlargest")
}
else if((num2>num1)&(num2<num3)|(num2<num1)&(num2>num3)){
    console.log("num2 is secondlargest")
}
else if((num3>num1)&(num3<num2)|(num3<num1)&(num3>num2)){
    console.log("num3 is secondlargest")
}
