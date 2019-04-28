// mongo < crud.js

use fligths

db.flightData.find().pretty()

db.flightData.insertOne(
	{     
		"departureAirport": "MUC",     
		"arrivalAirport": "SFO",     
		"aircraft": "Airbus A380",     
		"distance": 12000,     
		"intercontinental": true, 
		"_id": "5cc4396d43e322a20f11b719"  
	}
)

db.flightData.insertOne(
  {
    "departureAirport": "LHR",
    "arrivalAirport": "TXL",
    "aircraft": "Airbus A320",
    "distance": 950,
    "intercontinental": false
  }
)

db.flightData.find().pretty()
 
db.flightData.deleteOne({departureAirport: "MUC"})

db.flightData.updateOne({distance: 950}, {$set: {marker: "toDelete"}})

db.flightData.find().pretty()

db.flightData.deleteMany({marker: "toDelete"})

db.flightData.insertMany(
	[
	  {
		"departureAirport": "MUC",
		"arrivalAirport": "SFO",
		"aircraft": "Airbus A380",
		"distance": 12000,
		"intercontinental": true
	  },
	  {
		"departureAirport": "LHR",
		"arrivalAirport": "TXL",
		"aircraft": "Airbus A320",
		"distance": 950,
		"intercontinental": false
	  }
	]
)

db.flightData.find({distance: {$gt: 1000}}).pretty()

db.passengers.insertMany(
	[
	  {
		"name": "Max Schwarzmueller",
		"age": 29
	  },
	  {
		"name": "Manu Lorenz",
		"age": 30
	  },
	  {
		"name": "Chris Hayton",
		"age": 35
	  },
	  {
		"name": "Sandeep Kumar",
		"age": 28
	  },
	  {
		"name": "Maria Jones",
		"age": 30
	  },
	  {
		"name": "Alexandra Maier",
		"age": 27
	  },
	  {
		"name": "Dr. Phil Evans",
		"age": 47
	  },
	  {
		"name": "Sandra Brugge",
		"age": 33
	  },
	  {
		"name": "Elisabeth Mayr",
		"age": 29
	  },
	  {
		"name": "Frank Cube",
		"age": 41
	  },
	  {
		"name": "Karandeep Alun",
		"age": 48
	  },
	  {
		"name": "Michaela Drayer",
		"age": 39
	  },
	  {
		"name": "Bernd Hoftstadt",
		"age": 22
	  },
	  {
		"name": "Scott Tolib",
		"age": 44
	  },
	  {
		"name": "Freddy Melver",
		"age": 41
	  },
	  {
		"name": "Alexis Bohed",
		"age": 35
	  },
	  {
		"name": "Melanie Palace",
		"age": 27
	  },
	  {
		"name": "Armin Glutch",
		"age": 35
	  },
	  {
		"name": "Klaus Arber",
		"age": 53
	  },
	  {
		"name": "Albert Twostone",
		"age": 68
	  },
	  {
		"name": "Gordon Black",
		"age": 38
	  }
	]
)

// Cursors
db.passengers.find().forEach((passenger) => printjson(passenger))

// Projections
db.passengers.find({}, {name: 1, age: 1, _id: 0})

// Embedded Documents
db.flightData.updateMany({}, {$set: {status: { description: "on-time", lastUpdated: "1 hour ago"}}})

// Arrays
db.passengers.updateOne({name: "Klaus Arber"}, {$set: {hobbies: ["sports", "cooking"]}})

// Exercise
use hospital

db.patients.insertMany([
	{
		"firstName": "Gustavo",
		"lastName": "Dambros",
		"age": 24,
		"history": [
			{
				"disease": "diabetes",
				"treatment": "insuline"
			}
		]
	},
	{
		"firstName": "Susan",
		"lastName": "Lusca",
		"age": 30,
		"history": [
			{
				"disease": "cold",
				"treatment": "aspirine"
			}
		]
	},
	{
		"firstName": "Jonathan",
		"lastName": "Dambros",
		"age": 27,
		"history": [
			{
				"disease": "headache",
				"treatment": "aspirine"
			}
		]
	}
])

db.patients.updateOne(
	{"firstName": "Gustavo"}, 
	{
		$set:
			{
			"age": 666, 
			"history": 
			[
				{                        
					"disease" : "cold",                         
					"treatment" : "aspirine"                 
				}         
			]
		}
	}
)

db.patients.find(
	{"age": {$gt: 30}}
).pretty()

db.patients.deleteMany(
	{"history.disease": "cold"}
)
