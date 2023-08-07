const catchAsync = require("../utils/catchAsync");
const videoService = require("../services");


const createNewUser = catchAsync(async (req,res)=>{
    console.log(req.body);
    res.send(req.body)
})
const getUserLogin = catchAsync(async (req,res)=>{
    console.log("hello");
    res.send()
})

module.exports = {
    createNewUser,
    getUserLogin
}