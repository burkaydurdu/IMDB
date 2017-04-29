films = new Mongo.Collection('films');
filmSchema = new SimpleSchema({

    imdbID:{
      type:String
    },
    actor:{
        type:String
    },
    awards:{
        type:String
    },
    country:{
        type:String
    },
    genre:{
        type:String
    },
    metaScore:{
        type:String
    },
    plot:{
        type:String
    },
    poster:{
        type:String
    },
    runTime:{
        type:String
    },
    webSite:{
        type:String
    },
    type:{
        type:String
    },
    title:{
        type:String
    },
    ratings:{
        type:[Object],
        blackbox:true
    },
    users:{
        type:[String]
    }


});
films.attachSchema(filmSchema);