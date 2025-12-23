const mongoose =require ("mongoose");
const providerMOdel = require("../models/providerModel");
const userModel =require("../models/userModel");


const {isValid} = require("../utils/validator");



// Aplly As Provider

const applyAsProvider = async (req,res) =>{
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).josn({msg:"Internal Server Error"})       ;
        
    }
}

module.exports ={applyAsProvider}