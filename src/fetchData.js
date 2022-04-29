const axios = require("axios");

async function fetchAllData(option){
  const url = `https://rickandmortyapi.com/api/${option}/`;
	let response = await axios.get(url);
	return response.data;
}

async function fetchDataById(id,option){
  const url = `https://rickandmortyapi.com/api/${option}/${id}`;
  const response = await axios.get(url);
  return response.data;
}

async function fetchDataByName(name,option){
  const url = `https://rickandmortyapi.com/api/${option}/?name=${name}`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = {fetchAllData,fetchDataById,fetchDataByName}
