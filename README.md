# errand-neural
[errand](https://github.com/errandjs/errand) worker component for working with artificial neural networks (ANNs)

## Usage

```

npm install errand-neural

```

Notes:

1. For dependencies and suggested usage of errand worker components refer to [errand](https://github.com/errandjs/errand)
2. Set environment variable ERRAND_MONGODB_URL with connection string for mongodb server, if not set module will default to `mongodb://localhost:27017`
Notes:
3. [errand-neural](https://github.com/errandjs/errand-neural) is in development and `master` branch will be updated as work progresses until initial release

### Proposed Sequence

Thoughts about requirement:

1. [features](#features-example) - used to extract features, consisting of: unwind from `documents` collection all interesting topics into new collection called `extracted_features`; and then update `documents` with `features` array where topics are normalised from `extracted_features` collection, for example each item in `features` array represents a topic, if topic occurs in `documents` then topic index in `features` array is set to `1` accordingly.
2. [train](#train-example) - select from `documents` training using date criteria for selection
3. [prediction](#prediction-example) - update `documents` with output of artificial neural network accordingly


## Example

```

{
	"tasks": [
		{
			"task": "errand-neural",
			"data": {
				"description": "replace-with-task-description",
				"request": {
					"database": "replace-with-mongodb-database-name",
					"collection": "replace-with-name-of-target-collection-for-result",
					"method": "...",
					"parameters": {
						...
					}
				}
			}
		}
	]
}

```

Notes:

* **tasks** - [errand](https://github.com/errandjs/errand) task list
* **tasks[].task** - required `errand-neural` task name
* **tasks[].data.description** - optional task description
* **tasks[].data.request.database** - required mongodb database name
* **tasks[].data.request.collection** - required mongodb collection used with request
* **tasks[].data.request.method** - required component method
* **tasks[].data.request.parameters** - required component method parameters, the parameter payload will vary depending on method

###  features example

* **tasks[].data.request.method** - set to `features`

###  train example

* **tasks[].data.request.method** - set to `train`

###  prediction example

* **tasks[].data.request.method** - set to `prediction`
