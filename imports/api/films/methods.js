Meteor.methods({
    'film.control': function (profile) {

        let count = films.find({'imdbID' : profile.imdbID}).count();
        if( count === 1) {
            try {
                films.update({'imdbID': profile.imdbID}, {$push: {users: profile.userID}});
                return true;
            } catch (e){
                return false;
            }
        }
        else
            return false;
    },
    'film.add': function (object) {
        try {
            films.insert({
                imdbID:object.imdbID,
                actor: object.Actors,
                awards: object.Awards,
                country: object.Country,
                genre: object.Genre,
                metaScore: object.Metascore,
                plot: object.Plot,
                poster: object.Poster,
                runTime: object.Runtime,
                webSite: object.Website,
                type: object.Type,
                title: object.Title,
                ratings: object.Ratings,
                users:[object.userID]
            });
        } catch (e){
            throw new Meteor.Error(1,'Error');
        }
    },
    'film.search' : function (name) {
        try {
            console.log(name);
            My_films = films.find({title:{$regex: name, $options: '-i'}}).fetch();
            console.log(My_films);
            return My_films;
        } catch (e){
            throw new Meteor.Error(1,"Error");
        }
    },
    'get.film' : function (id) {

        this.unblock();
        try{
            const result = HTTP.call("GET","http://www.omdbapi.com/?i="+id);
            return result;
        } catch (e){
            throw  new Meteor.Error(404,"Not Found");
        }
    },
    'get.films' : function (object) {
        this.unblock();
        try{
            const result = HTTP.call("GET","http://www.omdbapi.com/?s="+object.title+"&y="+object.year+"&type="+object.type);
            return result;
        } catch (e) {
            throw new Meteor.Error(404,"Not Found");
        }
    }

});