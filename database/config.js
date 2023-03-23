const mongoose = require('mongoose');

const dbConnection = async() =>{

    try {
        
        await mongoose.set("strictQuery", false); 
        
        mongoose.connect( process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        } );

        console.log('DB ONLINE');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
        
    }

}

module.exports = {
    dbConnection
}