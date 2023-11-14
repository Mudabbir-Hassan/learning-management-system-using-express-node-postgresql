
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config =  require("../../config");
const { models } = require("../../models");
let tokens = [];
const generateToken = (data)=>{
    console.log(data);
    return jwt.sign(data, config.jwtSecret);
}

module.exports={
    login: async (req,res)=>{
        try{
            const{email,password}=req.body;
            let user = await models.user.findOne({where:{email:email}})
            console.log(user);
            user = user.dataValues;
            console.log(user);
            if(user && await bcrypt.compare(password,user.password)){
                const Token = generateToken({id:user.id})
                tokens.push(Token);
                return res.json({"Token":Token});
            }
        }
        catch(err){
            console.log(err);
        }
    }
}