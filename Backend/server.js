const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");
require('dotenv').config()
const app=require("./src/app")
const connectToDatabase=require("./src/config/databse")

connectToDatabase()

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})