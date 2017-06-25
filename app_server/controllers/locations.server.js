exports.homeList = function(req, res) {
    res.render('index', { title: 'For Home List' });
};
exports.locationInfo = function(req, res) {
    res.render('index', { title: 'For location Info' });
};
exports.addReview = function(req, res) {
    res.render('index', { title: 'For adding review' });
};