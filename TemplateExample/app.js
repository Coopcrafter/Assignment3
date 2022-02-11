var express = require('express')
var exphbs = require('express-handlebars')
var app = express()

var appRouter = require('./app_server/routes/index')

app.engine('hbs', exphbs.engine({
    defaultLayout:'main',
    extname:'hbs',
    helpers:{
        getShortComment(comment){
            if(comment.length < 64){
                return comment
            }
            return comment.substring(0, 60) + "..."
        },
        makeBold(name){
            return "<strong>" + name + "</strong>"
        },
        fortmatPhoneNumber(number){
            return "("+number.substring(0,3) + ")" + number.substring(3-6) + "-" + number.substring(6-9)
        }
    }
}))

app.set('view engine', 'hbs')

app.use('/', appRouter)

app.listen(3000, function(){
    console.log("Listening on port 3000")
})