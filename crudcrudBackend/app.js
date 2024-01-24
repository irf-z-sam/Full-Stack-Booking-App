const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');

const UserDetails = require('./routes/user');

const app = express();

app.use(cors());

app.use(bodyparser.json());

app.use(UserDetails);

sequelize.sync()
.then(()=>{
    app.listen(3000,()=>{
        console.log('server running on port 3000')  
    });
}) 
.catch((err)=>{
    console.log('error while connecting database:',err);
})