const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const user = sequelize.define("users",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    number:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
});

(async () => {
    try {
      await user.sync(); 
      console.log('users table created successfully.');
    } catch (error) {
      console.error('Error creating User table:', error);
    }
  })();
  
module.exports = user;