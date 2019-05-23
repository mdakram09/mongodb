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