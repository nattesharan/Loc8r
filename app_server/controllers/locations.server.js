exports.homeList = function(req, res) {
    res.render('locations-list');
};
exports.locationInfo = function(req, res) {
    res.render('location-info', { title: 'For location Info' });
};
exports.addReview = function(req, res) {
    res.render('index', { title: 'For adding review' });
};