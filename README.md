# NodeJS_Mongo_API_Test
Node JS and Mongo DB based api's exposed


Run command  "sudo npm install" in the same directory as server.js file.
This will install Node JS in the downloaded folder 

Run command "node server.js"
Your server is up and running at "localhost:3000"

ToDo before deployment:
In the server.js file replace "Mongo Db " url with your own mongo db. (Current url : mongodb://tester123:tester123@ds145223.mlab.com:45223/blockchain_test)
Change the default collection name currently used name as "blockchain_test_collection". Can change it to any collection name that you want.

API's exposed :

1. /seekAll 										   : 	Returns all the records in the collection. Example : localhost:3000/seekAll
2. /GetCount 										   : 	Returns the count of records in the collection.
3. /InsertUser?name="user_name"&address="user_address" :	Inserts the user with name as "user_name" and address as "user_address". Returns false if user already exists or if 															insertion fails, else rturns true.
4. /ValidateUser?name="user_name"					   :    Returns true if the user exists in the collection,else false.
5. /GetAddress?name="user_name"						   :    Returns address of the user if user exists in the collections else returns "User does not exist"