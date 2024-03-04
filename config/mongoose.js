const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb+srv://rohan1329be21:2111981329@cluster0.qpgwwlr.mongodb.net/?retryWrites=true&w=majority');
    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));