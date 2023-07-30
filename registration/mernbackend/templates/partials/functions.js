//function for sending data to nodeJS
const Register = require("../../src/models/registers");

async function saveData(obj){
    if(obj.password === obj.confirmPassword){
        const registerData = new Register(obj);
        const registered = await registerData.save();
    }else{
        throw err = {"message": "Passwords do not macth. Please try again"};
    }
}

function setParams(message,extra){
    let params = {
        showPopup: true,
        message: message,
        extra,
    }
    return params;
}

function findUser(email, password){
    const user = Register.findOne({ email, password });
    return user;
}

function setfile(res,code,page,message){
    const query = res.status(code).render(page, setParams(message));
    return query;
}

function setSession(req,name,age){
    let user = req.session.user = {
        name,
        age
    }
    return user;
}

function destroySession(req,sessionName){
    delete req.session[sessionName];
    console.log("session destroyed");
}
module.exports = {
    saveData,
    setParams,
    findUser,
    setfile,
    setSession,
    destroySession
}