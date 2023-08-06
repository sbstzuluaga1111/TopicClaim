const mongoose = require('mongoose');

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb+srv://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    
})
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));