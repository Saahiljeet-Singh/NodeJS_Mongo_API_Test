const express = require ('express')
const app =express()
const MongoClient = require('mongodb').MongoClient

/*
app.listen (3001,function(){
	console.log (" hello world")	
})
*/

var db

MongoClient.connect('mongodb://tester123:tester123@ds145223.mlab.com:45223/blockchain_test', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })

  db.createCollection("blockchain_test_collection");
  db.collection('blockchain_test_collection').createIndex({"name":1},{unique:true});

})


app.get('/seekAll', function(req, res)
{

	db.collection('blockchain_test_collection').find().toArray((err, result) => {
    if (err) 
    	{
    		return console.log(err);
    	}
    	res.send({blockchain_test_collection: result})
  	})

})

app.get('/GetCount', function(req, res)
{

	db.collection('blockchain_test_collection').count((err, result) => {
    if (err) 
    	{
    		return console.log(err);
    	}
    	res.send({blockchain_test_collection: result})
  	})

})

app.get('/InsertUser', function(req, res) {
	var queryName=req.query.name;
	var address=req.query.address;

	//db.collection('testcol1234').insert({"name" : queryName, "Address" : address });
	db.collection('blockchain_test_collection').save({name: queryName, "Address" : address }, (err, result) => {
    if (err) 
    	{
    		//console.log(err);	// for debug
    		res.send(false);
    	}
    else
    	{
    		//console.log('saved to database');	//for debug
    		res.send(true);
    	}

	})

	})


app.get('/ValidateUser', function(req, res) {
  //res.send('Hello hello World')

  		var userID=req.query.userName;
  		db.collection('blockchain_test_collection').find({name:userID}).toArray((err, result) => {
    		if (err) 
    		{
    			return console.log(err);
    		}

    		if(Object.keys(result).length == 0)
    		{
				res.send(false);
    		}
    		else
    		{
    			res.send(true);
    		}
    	})
    
	})


app.get('/GetAddress', function(req, res) {
  //res.send('Hello hello World')

  		var userID=req.query.userName;
  		db.collection('blockchain_test_collection').find({name:userID}).toArray((err, result) => {
    		if (err) 
    		{
    			return console.log(err);
    		}
    		if(Object.keys(result).length == 0)
    		{
    			res.send("User does not exist");
    		}
    		else
    		{
    			res.send(result[0].Address);
    		}
    	})
    
	})