const { JwtHelper} = require('../helpers');
let _userService = null;

class AuthService{
    constructor({UserService}){
        _userService = UserService;
    }

    async signUp(user){
        const {username} = user;
        const userExists = await _userService.getUserByName(username) ;
        if(userExists){
            const error = new Error();
            error.status = 400;
            error.messsage = "User already exists";
            throw error;
        }

        return await _userService.create(user);
    }
    async signIn(user){
        const {username,password} = user;
        const userExists = await _userService.getUserByName(username) ;
        if(userExists){
            const error = new Error();
            error.status = 400;
            error.messsage = "User does not exists";
            throw error;
        }

        const validPassword = userExists.comparePasswords(password);
        if(!validPassword){
            const error = new Error();
            error.status = 400;
            error.messsage = "Invalid password";
            throw error;
        }

        const userToEncode =  {
            username: userExists.username,
            id:userExists._id
        };

        const token = JwtHelper.generateToken(userToEncode);

        return {token, user : userExists};
    }
}

module.exports = AuthService;