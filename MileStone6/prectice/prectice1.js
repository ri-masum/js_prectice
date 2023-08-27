// task-1:consol log the seconday school location 

let data={
    Sophia:{
        id:33,
        study:[
            {primary:[
                {school_name:'Shahsundor High School'},
                {location:'kulaura,bangaw(1)'}
            ]},
            {
                secondary:[
                    {school_name:'victoria high School'},
                    {location:'sreemangal'}
                ]
            },
            
        ]
    }
}
console.log(data.Sophia.study[1].secondary[0].school_name);