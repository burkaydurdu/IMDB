import './index.html';
import './db-search/';

Template.search.onCreated(function () {
    this.filmContent = new ReactiveVar();
});

Template.search.helpers({
    'films': function () {
        const object = Template.instance().filmContent.get();
        if(!(object === undefined)) {
            console.log(object);
            return object.data.Search;
        }
    },
});

Template.search.events({
    "submit form#search":function (event, template) {
        event.preventDefault();
        const search = event.target.t_search.value;
        const type = event.target.type.value;
        const year = event.target.year.value;
        const object = {
            title: search,
            type: type,
            year: year
        };

        Meteor.call('get.films', object, function (err, res) {
            if(!err)
                template.filmContent.set(res);
        });
    }
});

Template.search.onRendered(function () {
    $('#search-trigger').leanModal();
    $('select').material_select();
    $('.materialboxed').materialbox();
});
