var kue = require('kue');
var queue = kue.createQueue();
var async = require('async');
var MongoClient = require('mongodb').MongoClient;
var moment = require('moment');
var _ = require('underscore');
var synaptic = require('synaptic');


var MONGODB_URL = process.env['ERRAND_MONGODB_URL'] ? process.env['ERRAND_MONGODB_URL'] : "mongodb://localhost:27017";

function graceful() {
  process.exit(0);
}

process.on('SIGTERM', graceful);
process.on('SIGINT' , graceful);

queue.process('errand-neural', function(job, done){

  switch(job.data.request.method) {

    case 'features':
      console.log('placeholder for features method');
      done();
      break;

      case 'train':
        console.log('placeholder for train method');
        done();
        break;

        case 'prediction':
          console.log('placeholder for prediction method');
          done();
          break;

  }


});
