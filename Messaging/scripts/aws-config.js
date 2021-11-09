var config = {

	"Region" : "us-west-2",

	"Cognito" : {
		"IdentityPoolId": "us-west-2:1c2683fd-86ec-4f93-b3e0-5beba077c41d"
	},

	"SQS" : {
		"Standard" : {
			"QueueUrl" : "https://sqs.us-west-2.amazonaws.com/062690893589/microservices_drawqueue_1"
		},
		"Secondary" : {
			"QueueUrl" : "https://sqs.us-west-2.amazonaws.com/062690893589/microservices_drawqueue_2"
		},
		"Tertiary" : {
			"QueueUrl" : "https://sqs.us-west-2.amazonaws.com/062690893589/microservices_drawqueue_3"
		},
		"FIFO" : {
			"QueueUrl" : "https://sqs.us-west-2.amazonaws.com/062690893589/microservices_drawqueue.fifo",
			"GroupId" : "microservices_sqs_fifo"
		}
	},

	"SNS" : {
		"TopicARN" : "arn:aws:sns:us-west-2:062690893589:microservicesMessageDuplicator"
	},

	"Kinesis" : {
		"StreamName" 		: "microservicesDrawingData",
		"PartitionKey"	: "Partition1"
	},

	"IoT" : {
		"Endpoint" : "a2vuyyf6n10lib-ats.iot.us-west-2.amazonaws.com",
		"Topic" : "microservices/drawingdemo"
	}
}
