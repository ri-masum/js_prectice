function positiveNumberCheck(numbers){

    let positiveNumberStore=[];

    for(let i =0;i<numbers.length;i++){
        const element=numbers[i];
        if(element>0){

            positiveNumberStore.push(element);
        }
        else{
            break
        }
        


    }
    console.log(positiveNumberStore);
    return positiveNumberStore
}

const numbers=[1,5,3,9,7,4,-23,-54,-32,-32,-53,43]
positiveNumberCheck(numbers);