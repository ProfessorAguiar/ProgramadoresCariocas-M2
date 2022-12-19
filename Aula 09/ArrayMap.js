const saldos1=[2,3,4,5,6,7,8,9]
const saldosDecrementados1=[]
for(let i=0;i<saldos1.length;i++){
  if(saldos1[i]>0){
    saldosDecrementados1.push(saldos1[i]-10)
  }else{
    saldosDecrementados1.push(saldos1[i])
  }
}
console.log(saldos1)
console.log(saldosDecrementados1)

const saldos2=[2,3,4,5,6,7,8,9]
const saldosDecrementados2=saldos2.map(saldos2 => saldos2>0 ? saldos2-10 : saldos2)

console.log(saldos2)
console.log(saldosDecrementados2)