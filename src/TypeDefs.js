const {gql} = require("apollo-server-express");

const typeDefs = gql`
  #declaration of type Character 
	type Character {
		id: ID!
		name: String!
		status: String!
		species: String!
		type: String!
		gender: String!
	}

  #declaration of type Episode
	type Episode {
		id: ID!
		name: String!
		air_date: String!
	}

	#queries declaration of query
	type Query {
		#get all (caracters OR episodes) 
		getAllCharacters: [Character!]!,
		getAllEpisodes: [Episode!]!,
    
		#get episode by (id OR name)
		getEpById(id: ID!): Episode,
		getEpByName(name: String!): [Episode]

		#get character by (id OR name)
		getCharById(id: ID!): Character,
		getCharByName(name: String!): [Character]
	}
`;

module.exports = {typeDefs};
