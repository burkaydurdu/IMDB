BlazeLayout.setRoot('body');

FlowRouter.route('/',{
   action: function () {
       if(Meteor.userId()){
           BlazeLayout.render('default', {page: 'search'});
       }
       else {
           BlazeLayout.render('default', {page: 'login'});
       }
   }
});

FlowRouter.route('/search', {
    name: 'search.page',
    action: function () {
        BlazeLayout.render('default',{page:'search'});
    }
});

FlowRouter.route('/search/:_id',{
    name: 'film.page',
    action: function (param) {
        BlazeLayout.render('default',{page:'film'});
    }
});

FlowRouter.route('/login',{
    name: 'login.page',
    action: function () {
        if(!Meteor.userId()) {
            BlazeLayout.render('default', {page: 'login'});
        }
        else{
            BlazeLayout.render('default', {page: 'search'});
        }
    }
});

FlowRouter.route('/register',{
    name: 'register.page',
    action: function () {
        if(!Meteor.userId()) {
            BlazeLayout.render('default', {page: 'register'});
        }
        else{
            BlazeLayout.render('default', {page: 'search'});
        }
    }
});

FlowRouter.route('/logout',{
    name: 'logout.page',
    action: function () {
        Meteor.logout();
        BlazeLayout.render('default',{page:'login'});
    }
});

