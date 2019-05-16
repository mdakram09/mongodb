use moviesData;

db.movies.find({runtime: 60}).pretty()

db.movies.find({runtime: {$ne: 60}}).pretty()

db.movies.find({runtime: {$lt: 60}}).pretty()

db.movies.find({"rating.average": {$lt: 60}}).pretty()

// genres contain Drama
db.movies.find({genres: "Drama"}).pretty()

// genres is equal to ["Drama"]
db.movies.find({genres: ["Drama"]}).pretty()

db.movies.find({runtime: {$in: [30, 42]}}).pretty()

db.movies.find({$or: [{"rating.average": {$lt: 5}}, {"rating.average": {$gt: 9.3}}]}).pretty()

// The same as  db.movies.find({$and:[{genres: "Drama"}, {"rating.average": {$gt: 9}}]}).pretty()
db.movies.find({genres: "Drama", "rating.average": {$gt: 9}}).pretty()

// The same as "db.movies.find({genres: "Horror"}).pretty()"
db.movies.find({genres: "Drama", genres: "Horror"}).pretty()

db.movies.find({$and: [{genres: "Drama"}, {genres: "Horror"}]}).pretty()