import './index.html';

Template.film.onCreated(function () {
    const id = FlowRouter.getParam('_id');
    console.log(id);
    Meteor.call('get.film', id, function (err, res) {
        Session.set("film",res);
    });
});

Template.film.helpers({
    "film": function () {
        if(!Session.equals("film",undefined)){
            console.log(Session.get("film"));
            const data = Session.get("film");
            return data.data;
        }
    },
    "addControl": function (imdbID) {
        const control = films.find({imdbID:imdbID,users:{$in:[Meteor.userId()]}}).count();
        return control === 0;

    }
});

Template.film.events({
    "click #add": function (event, template) {
        const data = Session.get("film").data;
        const userID = Meteor.userId();
        data.userID = userID;
        Meteor.call('film.control', data, function (err, res) {

            if(res === true){
                Materialize.toast('Film add ,success',3000,'green darken-2 white-text');
            }
            else{
                Meteor.call('film.add', data, function (err, res) {
                    if(!err){
                        Materialize.toast('Film add ,success',3000,'green darken-2 white-text');
                    }
                    else {
                        Materialize.toast('Error',3000,'red darken-2 white-text');
                    }
                });
            }
        });
    }
});