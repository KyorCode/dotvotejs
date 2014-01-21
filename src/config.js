function config(nodeprocess){
    var production = nodeprocess.env.NODE_ENV === 'production';
    
    var expressSettings = {
        port : nodeprocess.env.PORT || 3000,
        ip : nodeprocess.env.IP || "127.0.0.1"
    };
    
    if(production){
        // Setup production Settings
    }
    
    return{
        expressSettings : expressSettings
    }
};

module.exports = config;