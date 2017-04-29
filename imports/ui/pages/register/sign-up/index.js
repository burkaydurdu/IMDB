import './index.html';


Template.sign_up.events({
    "submit form#form_register": function (event, template,) {
        event.preventDefault();

        const userName = event.target.username.value;
        const firstName = event.target.first_name.value;
        const lastName = event.target.last_name.value;
        const password = event.target.password.value;
        const password2 = event.target.c_password.value;
        const email = event.target.email.value;

        if(password === password2) {

            const object = {
                userName: userName,
                first_name: firstName,
                last_name: lastName,
                password: password,
                email: email,
            };

            Meteor.call("user.create", object, function (err, res) {
                if (!err) {
                    Materialize.toast("Kayıt başarılı", 5000, "green darken-2 white-text");
                    FlowRouter.go('login.page');
                }
                else
                    Materialize.toast("Mail adresi veya kullanıcı adı kullanılıyor", 5000, "red darken-2 white-text");
            });

        }
        else{
            Materialize.toast("Iki şifre uyuşmuyor", 5000, "red darken-2 white-text");
        }

    }
});