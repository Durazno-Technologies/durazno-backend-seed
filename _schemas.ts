const schema = {
	"$schema": "http://json-schema.org/draft-07/schema#",
	"definitions": {
		"User": {
			"type": "object",
			"properties": {
				"id": {
					"type": "string"
				},
				"name": {
					"type": "string"
				},
				"lastname": {
					"type": "string"
				},
				"email": {
					"type": "string"
				},
				"phone": {
					"type": "string"
				}
			},
			"required": [
				"email",
				"lastname",
				"name",
				"phone"
			]
		},
		"CreateUser": {
			"type": "object",
			"properties": {
				"body": {
					"type": "object",
					"properties": {
						"id": {
							"type": "string"
						},
						"name": {
							"type": "string"
						},
						"lastname": {
							"type": "string"
						},
						"email": {
							"type": "string"
						},
						"phone": {
							"type": "string"
						}
					},
					"required": [
						"email",
						"lastname",
						"name",
						"phone"
					]
				}
			},
			"required": [
				"body"
			]
		},
		"UpdateUser": {
			"type": "object",
			"properties": {
				"body": {
					"type": "object",
					"properties": {
						"id": {
							"type": "string"
						},
						"name": {
							"type": "string"
						},
						"lastname": {
							"type": "string"
						},
						"email": {
							"type": "string"
						},
						"phone": {
							"type": "string"
						}
					}
				}
			},
			"required": [
				"body"
			]
		}
	}
} as const;
export default schema.definitions;