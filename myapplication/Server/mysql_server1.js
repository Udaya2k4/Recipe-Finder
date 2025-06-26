
const mysql=require('mysql');
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'kitsw'
});
data=[
    [11,'Rani',2345678989],
    [22,'Rishika',6578965433],
    [33,'Udaya',8976543213],
    [44,'sruthi',8501809419]]
const sql="insert into student values ?";
conn.query(sql,[data],(err,result)=>{
    if(err){
        console.log("failed to execute"+err);
        return;
    }
    console.log("Multiple records inserted successfully");
});

