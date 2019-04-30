// ONE TO ONE

use hospital

// One to one embedded documents
db.patients.insertOne(
	{
		"firstName": "Gustavo",
		"lastName": "Dambros",
		"age": 24,
		"summary": [ 
			"cold", "diabetes"
		]
	}
)

// One to one reference
db.patients.insertOne(
	{
		"firstName": "Gustavo",
		"lastName": "Dambros",
		"age": 24,
		"summary": "id_history_1"
	}
)

db.summaries.insertOne(
	{
		"_id": "id_history_1",
		summary: ["cold", "diabetes"]
	}
)


// ONE TO MANY

use faq

// One to many embedded documents
db.questions.insertOne(
	{
		"creator": "Gustavo",
		"question": "What is it?",
		"answers": [ 
			{
				"text": "This is a cat",
				"creator": "Susan"
			},
			{
				"text": "Thanks",
				"creator": "Gustavo"
			}
		]
	}
)

// One to many reference
db.questions.insertOne(
	{
		"creator": "Gustavo",
		"question": "What is it?",
		"answers": [ "q1a1", "q1a2"]
	}
)

db.answers.insertMany(
	[
		{
			"_id": "q1a1",
			"text": "This is a cat"
		},
		{
			"_id": "q1a2",
			"text": "Thanks"
		}
	]
)

// MANY TO MANY

use bookshop

// One to many embedded documents
db.users.insertMany(
	[
		{
			"username": "Gustavo",
			"order": [ 
				{
					"name": "A book",
					"price": 20.00
				},
				{
					"name": "Another book",
					"price": 10.30
				}
			]
		},
		{
			"username": "Pedro",
			"order": [ 
				{
					"name": "A book",
					"price": 20.00
				}
			]
		},
		
	]
)

// One to many reference
db.users.insertMany(
	[
		{
			"username": "Gustavo",
			"order": [ "p1", "p2"]
		},
		{
			"username": "Pedro",
			"order": [ "p1"]
		},
	]
)

db.products.insertMany(
	[
		{
			"_id": "p1",
			"name": "A book",
			"price": 20.00
		},
		{
			"_id": "p2",
			"name": "Another book",
			"price": 10.30
		}
	]
)