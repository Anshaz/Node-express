var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*var passportLocalMongoose = require('passport-local-mongoose');
*/
var favoriteSchema = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dish: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
}]
},
    {
    timestamps: true


});

var Favorites = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorites;
