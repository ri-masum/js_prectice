function paperRequirments(book1,book2,book3){
    const firstBookPage=100;
    const secondBookPage=200;
    const thirdBookPage=300;

    const firstBookPageRequire=firstBookPage*book1;
    const secondBookPageRequire=secondBookPage*book2;
    const thirdBookPageRequire=thirdBookPage*book3;

    const totalPageNeeded=firstBookPageRequire+secondBookPageRequire+thirdBookPageRequire;
    return totalPageNeeded;

}

const result=paperRequirments(1,10,1);
console.log('total page needed: ',result);