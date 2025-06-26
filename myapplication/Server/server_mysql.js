
const mysql=require('mysql');
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'kitsw2'
});

//dataA=dataO.map(rec=>[rec.id,rec.name])
const sql="select * from employee";
conn.query(sql,(err,result)=>{
    if(err){
        console.log("failed to execute"+err);
        return;
    }
    console.log(result);
});
