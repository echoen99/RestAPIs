var express = require('express');

var routes = function (Author) {
    var AuthorRouter = express.Router();

    AuthorRouter.route('/')
        .post(function (req, res) {
            var author = new Author(req.body);

            author.save();
            res.status(201).send(author);

        })
        .get(function (req, res) {
            var query = {};

            if (req.query.genre) {
                query.genre = req.query.genre;
            }

            Author.find(query, function (err, Authors) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(Authors);
                }
            });
        });

    AuthorRouter.route('/:AuthorId')
        .get(function (req, res) {

            Author.findById(req.params.AuthorId, function (err, Author) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(Author);
                }
            });
        });

    return AuthorRouter;
};

module.exports = routes;