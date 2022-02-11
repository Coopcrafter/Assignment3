var home = function(req,res){
    res.render('home',{
        post:{
            author:"Matt Smooth",
            image:"https://picsum.photos/500/500?2",
            comments:[]
        },
        post:{
            author:"Jordan Dubreil",
            image:"https://picsum.photos/500/500?2",
            comments:[]
        }
    })
}

var contact = function(req,res){
    res.render('titleTest', {title:"Contact"})
}

var about = function(req,res){
    res.render('titleTest', {title:"About"})
}

var profile = function(req,res){
    res.render('profile', {
        name:"Smooth", 
        email:"smooth@neit.edu", 
        phonenumber:"401-111-1111", 
        address:"1 New England Tech Blvd East Greenwich RI", 
        Job:"Game Programer"})
}

var dataTest = function(req,res){
    res.render('dataEntry')
}

var lab4 = function(req,res){
    res.render('lab4')
}

var game = function(req,res){
    res.render('game', {title:"Game"})
}

module.exports = {
    home,
    contact,
    profile,
    about,
    game,
    dataTest,
    lab4
}