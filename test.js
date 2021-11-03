let count = 10
let rtp = 0.95
for (let i = 0; i < count; i++) {

}
let arr = []
let i6 = 0
let i5 = 1
let i2 = false
let i1 = 0;
let temp = 0
let t300 = 20;
function isSimple (n) {
  if (n === 1 || n === 0) {
    return false;
  } else {
    for(let i = 2; i < n; i++) {
      if(n % i === 0) {
        return false;
      }
    }
    return true;
  }
}
setConsole = (num,flag,inc)=>{

  // let s = Math.sqrt(num)%2===1?true:false;
  // if (s){
  //
  //   console.log(num,inc,inc-temp,Math.sqrt(num))
  //   temp = inc
  // }else{
  //   // console.log(num,inc,inc-temp,isSimple(num))
  // }
  if (isSimple(num)){
    console.log(num,inc)
  }

}
for (; i6 < 5000; i6+=6,i5++,i1++,t300++) {

  if (i5==6){
    i5 = 1
    i2=!i2
  }
  if (i2&&i5==2){
    setConsole(i6+1,'q',i1)
    continue;
  }
  if (i2&&i5==5){
    setConsole(i6-1,'r',i1)
    continue;
  }
  if (!i2&&i5==5){
    setConsole(i6-1,'w',i1)
    continue;
  }
  if (!i2&&i5==2){
    setConsole(i6+1,'e',i1)
    continue;
  }


  // if ((i6-1)%5 === 0){
  //   console.log(i6-1,'-',i5,i1,i2)
  //
  // }
  // if ((i6+1)%5 === 0){
  //   console.log(i6+1,'+',i5,i1,i2)
  //
  // }

  setConsole(i6-1,'-',i1)
  setConsole(i6+1,'+',i1)

   // console.log('++',i6-1,i6+1,i1)

}


