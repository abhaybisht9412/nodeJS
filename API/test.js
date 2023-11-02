const getApi = async () => {
    const api = await fetch('https://api.football-data.org/v4/persons/44', {
  headers: {
    'X-Auth-Token': 'd2ea9e5ba1694245acf0cbc849d5bea7'
  }
})
const res = await  api.json();
const data = [res];
console.log(data);
}
getApi();
