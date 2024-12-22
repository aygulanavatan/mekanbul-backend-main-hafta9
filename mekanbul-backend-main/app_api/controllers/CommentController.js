var mongoose=require("mongoose");
var Venue=mongoose.model("venue");

const createResponse=function(res,status,content){
    res.status(status).json(content);
}

const addComment=function(req,res){
    createResponse(res,"200",{"status":"Success"});
}

const getComment=function(req,res){
    createResponse(res,"200",{"status":"Success"});
}

const updateComment=function(req,res){
    createResponse(res,"200",{"status":"Success"});
}

const deleteComment=async function(req,res){
    try{
        await Venue.findById(req.params.venueid)
        .select("name comments")
        .exec().then(function(venue){
            var response,comment;
            comment=venue.commnets.
            id(req.params.commentid);
            response={
                "venue":{
                    "name":venue.name,
                    "id":req.params.id
                },
                "comment":comment
            }
        }

    }catch(error){
        createResponse(res,"404","Böule bir yorum yok.")
    }
}

module.exports={
    addComment,
    getComment,
    updateComment,
    deleteComment
}
