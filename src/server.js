var app = require('./bootstrap')().application;
var logger = require('./log');
    
app.listen(process.env.PORT, process.env.IP,function(error){
    if(error){
        logger.error("Unable to listen for connections.",error);
        process.exit(10);
    }
    logger.info("Express is listening on http://" + process.env.IP + ":" + process.env.PORT);
});