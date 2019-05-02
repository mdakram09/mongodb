use blog;

db.createCollection('posts', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: ['title', 'text', 'creator', 'comments'],
			properties: {
				title: {
					bsonType: 'string',
					description: "must be a string and it is required"
				},
				text: {
					bsonType: 'string',
					description: "must be a string and it is required"
				},
				creator: {
					bsonType: 'objectId',
					description: "must be a objectId and it is required"
				},
				comments: {
					bsonType: 'array',
					description: "must be a array and it is required",
					items: {
						bsonType: 'object',
						required: ['text', 'author'],
						properties: {
							text: {
								bsonType: 'string',
								description: "must be a string and it is required"
							},
							author: {
								bsonType: 'objectId',
								description: "must be a objectId and it is required"
							}
						}
					}
				} 
			}
		}
	}
});

db.users.insertMany([
	{_id: ObjectId("5ccab2b0f800612ef321970c"), name: "Gustavo", email: "gv@test.com"}, 
	{_id: ObjectId("5ccab2b0f800612ef321970d"), name: "gabriel", email: "gb@test.com"}, 
]);

db.posts.insertOne({
	title: "first commit",
	text: "this is my first commit, with no bugs",
	tags: ["C", "java"],
	creator: ObjectId("5ccab2b0f800612ef321970c"),
	comments: [
		{
			text: "I like this commit",
			author: ObjectId("5ccab2b0f800612ef321970d")
		}
	]
	
})

db.posts.insertOne({
	text: "this is my first commit, with no bugs",
	tags: ["C", "java"],
	creator: ObjectId("5ccab2b0f800612ef321970c"),
	comments: [
		{
			text: "I like this commit",
			author: ObjectId("5ccab2b0f800612ef321970d")
		}
	]
	
})

db.runCommand({
	collMod: 'posts', 
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: ['title', 'text', 'creator', 'comments'],
			properties: {
				title: {
					bsonType: 'string',
					description: "must be a string and it is required"
				},
				text: {
					bsonType: 'string',
					description: "must be a string and it is required"
				},
				creator: {
					bsonType: 'objectId',
					description: "must be a objectId and it is required"
				},
				comments: {
					bsonType: 'array',
					description: "must be a array and it is required",
					items: {
						bsonType: 'object',
						required: ['text', 'author'],
						properties: {
							text: {
								bsonType: 'string',
								description: "must be a string and it is required"
							},
							author: {
								bsonType: 'objectId',
								description: "must be a objectId and it is required"
							}
						}
					}
				} 
			}
		}
	},
	validationAction: 'warn'
});

db.posts.insertOne({
	text: "this is my first commit, with no bugs",
	tags: ["C", "java"],
	creator: ObjectId("5ccab2b0f800612ef321970c"),
	comments: [
		{
			text: "I like this commit",
			author: ObjectId("5ccab2b0f800612ef321970d")
		}
	]
	
})

