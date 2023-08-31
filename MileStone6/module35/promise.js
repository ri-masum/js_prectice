const getData=new Promise((resolve,reject)=>{

    const num=Math.random()*10
    console.log(num);

    if(num<5){
        resolve(53543)

    }
    else
{
    reject('no data avilable')

}})

getData.then(data=>console.log(data))
.catch(err=>console.error('ERR:',err))