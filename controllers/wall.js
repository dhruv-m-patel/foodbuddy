'use strict';

module.exports = function (router) {

  router.get('/wall', function (req, res) {

    res.render(req.url);

  });

};
