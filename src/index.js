/*Modules*/
const express = require("express");
const app = express();
const path = require("path");
const {ApolloServer} = require("apollo-server-express");
const {typeDefs} = require("./TypeDefs");
const {resolvers} = require("./Resolvers");

async function start(){
	//typeDefs & resolvers
	const apolloServer = new ApolloServer({ typeDefs, resolvers });
	await apolloServer.start();
	apolloServer.applyMiddleware({ app });

	//404
	app.use('*',(req,res)=>{
		res.status(404).send("Not found");
	});

	/*port*/
	app.listen(5000,() => console.log("ready on port 5000"));//here we hear the port
}
start();
