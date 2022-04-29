const {results} = require("./fakeData");
const {fetchAllData,fetchDataById,fetchDataByName} = require("./fetchData");

const resolvers = {
	Query: {
		getAllCharacters: async (parent,args)=>{
			const results = await getResultsData("character")
			return results 
		},
		getAllEpisodes: async (parent,args)=>{
			const results = await getResultsData("episode")
			return results 
		},

		getEpById: async (parent,args)=>{
			const id = args.id
			const episode = await getResultsDataById(id,"episode");
			return episode
		},
		getEpByName: async (parent,args)=>{
			const name = args.name;
			const episode = await getResultsDataByName(name,"episode");
			return episode
		},

		getCharById: async (parent,args)=>{
			const id = args.id
			const character = await getResultsDataById(id,"character");
			return character
		},
		getCharByName: async (parent,args)=>{
			const name = args.name;
			const character = await getResultsDataByName(name,"character");
			return character
		}
	},
}

//get all characters
//get all episodes
async function getResultsData(option){
	let response = await fetchAllData(option);
	return response.results;
}

//filterById
async function getResultsDataById(id,option){
  let response = await fetchDataById(id,option);
  return response;
}

//filterByName
async function getResultsDataByName(name,option){
	name = name.replace(/\s/g, '+');
	let response = await fetchDataByName(name,option);
  return response.results;
}

module.exports = {resolvers};
