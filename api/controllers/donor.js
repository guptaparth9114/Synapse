import {db} from "../connect.js"
 export const donor=(req,res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");
jwt.verify(token,"secretkey",(err,userInfo)=>{
    if(err) return res.status(403).json("Token is invalid");
    const q="INSERT INTO donors(id,name,email,contactno,camppart) VALUES (?)"
    const values=[userInfo.id,req.body.name,req.body.email,req.body.phoneNumber,req.body.selectedCampId]
    db.query(q,[values],(err,data)=>{
     if(err) {console.log (err)
         return res.status(500).json(err)}
     return res.status(200).json("Donor has been added");
    })
})
 }
//  export const appointment=(req,res)=>{

//  }