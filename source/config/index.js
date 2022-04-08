/*if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}
*/
let PORT=4300;
let MONGO_URI="mongodb+srv://AlexSinMas:1231212_@cluster0.gwz1u.mongodb.net/shareyouridea?retryWrites=true&w=majority";
let APPLICATION_NAME="Share Your Idea";



module.exports = {
    PORT: PORT,
    MONGO_URI: MONGO_URI,
    APPLICATION_NAME: APPLICATION_NAME
};