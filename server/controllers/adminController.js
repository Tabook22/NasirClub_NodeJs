
module.exports={
    indexView:indexView,
    userLst:userLst
}

//Index view
function indexView(req,res){
    //show adminPage
res.render('./partials/adminPage',{layout:'./layouts/adminLayout'});
}

//userLst
function userLst(req,res){
    //get list of users
}
