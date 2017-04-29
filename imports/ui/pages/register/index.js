import './index.html';
Template.register.onCreated(function () {
     this.sign = new ReactiveVar(false);
});

Template.register.helpers({

    "isSing": function () {
        return Template.instance().sign.get();
    }
});

Template.register.events({
    
   "click #facebook": function (event,template) {
       //{requestPermissions:[email]
       Meteor.loginWithFacebook({}, function (err, res) {

           if (!err) {

           }
           else {
               console.log('error');
           }

           console.log(Meteor.user().services.facebook.name);
           console.log(Meteor.user().services.facebook.email);
           console.log(Meteor.user().services.facebook.gender);
           console.log(Meteor.user().services.facebook);
           console.log(Meteor.user().profile);
           FlowRouter.go('search.page');
       })
   },
    "click #signs": function (event,template) {
       template.sign.set( template.sign.get()!==true);
    }
});