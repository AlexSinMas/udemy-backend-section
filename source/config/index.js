/*if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}
*/
let PORT=4300;
let MONGO_URI="mongodb+srv://AlexSinMas:1231212_@cluster0.gwz1u.mongodb.net/shareyouridea?retryWrites=true&w=majority";
let APPLICATION_NAME="Share Your Idea";
let JWT_SECRET = "4l3x4nd3r@_";



module.exports = {
    PORT: PORT,
    MONGO_URI: MONGO_URI,
    APPLICATION_NAME: APPLICATION_NAME,
    JWT_SECRET:JWT_SECRET
};