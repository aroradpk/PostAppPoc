const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database is up and running')
}
