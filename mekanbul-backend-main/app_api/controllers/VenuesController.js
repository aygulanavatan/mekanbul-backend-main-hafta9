var mongoose=require("mongoose");
var Venue=mongoose.model("venue");

const createResponse=function(res,status,content){
    res.status(status).json(content);
}

const listVenues=function(req,res){
    createResponse(res,"200",{"status":"Success"});
}

const addVenue=function(req,res){
    createResponse(res,"200",{"status":"Success"});
}

const getVenue=async function(req,res){
try{
    await Venue.findById(req.params.venueid).exec()
    .then(function(venue){
    createResponse(res,"200",venue)
})
}catch(error){
    createResponse(res,"404",{"status":"Böyle bir mekan yok"});
}
}

const updateVenue=function(req,res){
    createResponse(res,"200",{"status":"Success"});
}

const deleteVenue=function(req,res){
    createResponse(res,"200",{"status":"Success"});
}

module.exports={
    listVenues,
    addVenue,
    getVenue,
    updateVenue,
    deleteVenue
}






