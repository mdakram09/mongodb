use userData;

db.users.updateOne(
	{
		_id: ObjectId("5ce65e3e3388a55ba94cb026")
	}, 
	{
		$set: {
			name: "Gustavo"
		}, 
		$inc:{
				age: 1
		}
	}
)

// create or update
db.users.updateOne(
	{
		name: "Maria"
	},
	{
		$set: {
			age: 29,
			hobbies: [
				{
						title: "cooking",
						frequency: 3
				}
			]
		}
	},
	{
		upsert: true
	}
)

// delete field
db.users.updateOne(
	{
		name: "Maria"
	},
	{
		$unset: {
			hobbies: ""
		}
	}
)

// rename field
db.users.updateOne(
	{
		name: "Maria"
	},
	{
		$rename: {
			age: "totalAge"
		}
	}
)

db.users.updateMany(
	{
		hobbies: 
		{
			$elemMatch: 
			{
				title: "Sports",
				frequency: 
				{
					$gte: 3
				}
			}
		}
	},
	{
		$set: {
			"hobbies.$.addicted": true
		}
	}
)

db.users.updateMany(
	{
		"age":
			{
				$gte: 30
			}
	},
	{
		$inc: {
			"hobbies.$[].frequency": -1
		}
	}
)