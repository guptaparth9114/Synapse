import { db } from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const bbregister=(req,res)=>{
   
   const q="INSERT INTO user(username,email,password,name,contactno,type,experience,foE,verifydetails,currentemployer) VALUE (?)"
   const values=[req.body.username,req.body.email,hashPassword,req.body.name,req.body.contactno,req.body.usertype,req.body.experience,req.body.fieldofExpertise,req.body.verificationDetails,req.body.hospital]
   db.query(q,[values],(err,data)=>{
    if(err) {console.log (err)
        return res.status(500).json(err)}
    return res.status(200).json("User has been created");
   })
}
export const getbbank=(req,res)=>{
    
}