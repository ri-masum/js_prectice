   
//    wood quantity finding
   function woodCalculation(chairQuantity,tableQuantity,bedQuantity){

    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=20;
    const chairWood=chairQuantity*perChairWood;
    const tableWood=tableQuantity*perTableWood;
    const bedWood=bedQuantity*perBedWood;

    const totalWood=chairWood+tableWood+bedWood;

    return totalWood
   }

   result=woodCalculation(1,0,0);
   console.log("total wood required: ",result);
