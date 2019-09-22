const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://ojgtntpnugqolv:7538db7a7a2ae446e279d738bbc231d7f1788aa40398ab722fc6abad93e63da3@ec2-174-129-27-3.compute-1.amazonaws.com:5432/de9vojs0mbkq06?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',{
    host:'ec2-174-129-27-3.compute-1.amazonaws.com',
    dialect: 'postgres',
    pool: {
        max:10,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});


    // sequelize.sync({ force: true })
    //   .then(() => {
    //     console.log(`Database & tables created!`)
    //   })

  module.exports  = sequelize;