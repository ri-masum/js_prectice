function add(num1=0,num2=0){
    const result=num1+num2;

    console.log(num1,num2,result);
    return result
}

// const sum=add()

// ekta default name or value dewa jay jeta undefine ke prevent korbe
const space=' '
function fullName(first,last=''){
    const full=first+ space+last;
    console.log(first,last);
    return full
}

