import './index.html';

Template.dbSearch.onCreated(function (){

});

Template.dbSearch.helpers({
    "film" : function () {
        if( !Session.equals('film',undefined)){
            return Session.get('film');
        }
    }
});

Template.dbSearch.onRendered(function () {
    $('.film-select2').select2({
        placeholder: 'Search Film',
        allowClear: true,
        minimumInputLength: 3,
        ajax:{
            transport: function (params, success, failure) {
                name = $('.select2-search__field').val();
                Meteor.call('film.search', name, function (err, res) {
                    if(err){
                        failure(err);
                        return;
                    }
                    success(res);
                });
            },
            processResults: function (rows) {
                const items = [];
                _.each(rows, function (film) {
                    items.push({
                        id:film._id,
                        text:film.title,
                        film:film
                    });
                });
                return {
                    results: items
                };
            }
        }
    }).on("select2:select",function (e) {
        Session.set('film',e.params.data.film);
    });
});