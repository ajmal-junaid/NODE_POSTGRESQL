const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'brototype',
    password:'09876',
    port:5432
})

const getUsers = (req,res)=>{
    pool.query("select * from students",(err,results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows)
    })
}

module.exports={
    getUsers
}