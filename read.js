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

// if rating.average == null it will be here
db.movies.find({"rating.average": {$exists: true, $gt: 9.3}}).pretty()

// if rating.average == null it will not be here
db.movies.find({"rating.average": {$exists: true, $ne: null, $gt: 9.3}}).pretty()

db.movies.find({"rating.average": {$exists: true, $type: "number", $gt: 9.3}}).pretty()

db.movies.find({summary: { $regex: /government/}}).pretty()

db.movies.find({$expr: { $gt: ["$runtime", "$id"] }}).pretty()

//If rating is greater than 9 we want the movies with 1 million or more visitors, else the number of visitors has to be grater or equal to the number of expected visitors.
db.boxOffices.find({$expr: {$lt: [{$cond: {if: {$gt: ["$meta.rating", 9]}, then: 1000000, else: "$expectedVisitors"}}, "$visitors"] }})

// all movies with exactly 3 genres
db.movies.find({genres: {$size: 3}}).pretty()

// all movies that contain Thriller and Action in the genres array
db.movies.find({genres: {$all: ["Thriller", "Action"]}}).pretty()

// sort the find result by rating average and runtime
db.movies.find().sort({"rating.average": -1, "runtime": 1}).pretty()

// sort, skip and then limit the result
db.movies.find().sort({"rating.average": -1, "runtime": 1}).skip(100).limit(10).pretty()

let cursor = db.movies.find()
cursor.next()
cursor.forEach(doc => print(doc.name))

