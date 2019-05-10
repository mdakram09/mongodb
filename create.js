use hobbiesData;

db.hobbies.insertMany(
	[
		{
			_id: "yoga",
			name: "Yoga"
		},
		{
			_id: "sports",
			name: "Sports"
		},
		{
			_id: "hiking",
			name: "Hiking"
		}
	]
)

// It will insert the first but will failed and stop in the second
db.hobbies.insertMany(
	[
		{
			_id: "gym",
			name: "Gym"
		},
		{
			_id: "sports",
			name: "Sports"
		},
		{
			_id: "cooking",
			name: "Cooking"
		}
	]
)

// It will insert not stop at failed
db.hobbies.insertMany(
	[
		{
			_id: "gym",
			name: "Gym"
		},
		{
			_id: "sports",
			name: "Sports"
		},
		{
			_id: "cooking",
			name: "Cooking"
		}
	],
	{
		ordered: false
	}
)

// wait a max of 200ms for the ack of one server, writing in the journar 
db.hobbies.insertOne(
	{
		_id: "gaming",
		name: "Gaming"
	},
	{
		writeConcern: 
			{
				w: 1,
				j: true,
				wtimeout: 200
			}
	}
)