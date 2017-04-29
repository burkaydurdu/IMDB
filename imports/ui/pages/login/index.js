import './index.html';



Template.login.events({

    "submit form#loginForm": function (event, template) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        Meteor.loginWithPassword(email, password, function (err, res) {
           if(!err){
               FlowRouter.go('search.page');
               Materialize.toast("Giris Basarili", 5000, "green darken-2 white-text");
           }
           else{
               Materialize.toast("Giris Basarisiz", 5000, "red darken-2 white-text");
           }
        });
    },
    "click #facebook_login": function (event, template) {
        Meteor.loginWithFacebook({},function (err, res) {

            if(!err){
                FlowRouter.go('search.page');
                Materialize.toast("Giris Basarili", 5000, "green darken-2 white-text");

            }
            else{
                Materialize.toast("Giris Basarisiz", 5000, "red darken-2 white-text");
            }
        })
    }
});