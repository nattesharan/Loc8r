exports.homeList = function(req, res) {
    res.render('locations-list');
};
exports.locationInfo = function(req, res) {
    res.render('location-info');
};
exports.addReview = function(req, res) {
    res.render('location-review');
};