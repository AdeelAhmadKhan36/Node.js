//Import Module
const fs=require("fs");
//  fs.writeFileSync("read.txt","Weclome to my file, How are you")
//Dont Overwrit then Use Apend Function

// fs.appendFileSync("read.txt","   \n My self Adeel Ahmad")

//  fs.readFileSync("read.txt")
//  org_data=buf_data.toString();
//  console.log(org_data);

//  fs.renameSync("read.txt","adeel.txt")

//Lecture 6:
//Creatting a folder
// try{
//     fs.mkdirSync("new_foler");
//     console.log("Folder Created Sucessfully")
// }catch(err){
//     console.error("Error in Creating Folder",err)

// 
try{
const data=fs.readFileSync('adeel.txt',"utf8");
console.log("File Content:",data)
}catch(err){
    console.log("Here we have error:",err)
  
}