const express = require("express");
const app = express();
app.use(express.json());

const users = [{
    name : "gaurav",
    kidneys : [{
        healthy : true
    },
    {
        healthy : true
    },
    {
        healthy : false
    }]
},
{
    name : "harkirat",
    kidneys : [{
        healthy : true
    },
    {
        healthy : false
    },
    {
        healthy : true
    }]
}
]

app.get("/" , function(req , res){
    const patient = req.query.n;
    console.log(patient);
    const gaurav = users[0].kidneys;
    const harkirat = users[1].kidneys;
    let gauravkidneys = users[0].kidneys.length;
    let harkiratkidneys = users[1].kidneys.length;
    let gauravhealthy = 0;
    let gauravunhealthy = 0;
    let harkirathealthy = 0;
    let harkiratunhealthy = 0;
    if(patient == "gaurav"){
    for(let i = 0 ; i < users[0].kidneys.length ; i++){
        if(users[0].kidneys[i].healthy == true){
            gauravhealthy++;
        }
    }
    gauravunhealthy = gauravkidneys - gauravhealthy;
    }
    else{
        for(let i = 0 ; i < users[1].kidneys.length ; i++){
            if(users[1].kidneys[i].healthy == true){
                harkirathealthy++;
            }
        }
        harkiratunhealthy = harkiratkidneys - harkirathealthy;
    }
    if(patient == "gaurav"){
    res.json({
        gauravkidneys,
        gauravhealthy,
        gauravunhealthy
    })
}
    else{
        res.json({
        harkiratkidneys,
        harkirathealthy,
        harkiratunhealthy
    })
    }
})

app.post("/" , function(req , res){
    const patient = req.query.n;
    if(patient == "gaurav"){
    const val = req.body.ishealthy;
    users[0].kidneys.push({healthy : val});
    res.json({msg : "done"});
}
else{
    const val = req.body.ishealthy;
    users[1].kidneys.push({healthy : val})
    res.json({msg : "done"});
}
})



app.listen(3000);