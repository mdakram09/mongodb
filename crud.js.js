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
