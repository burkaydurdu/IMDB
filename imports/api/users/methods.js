Meteor.methods({
    "user.create": function (object) {
        try {
            Accounts.createUser({
                password: object.password,
                email: object.email,
                username: object.userName,
                profile: {
                    name:{ first: object.first_name, last: object.last_name}
                }
            });
        } catch (e){
            throw  new Meteor.Error(404,"Not Found");
        }
    }
});