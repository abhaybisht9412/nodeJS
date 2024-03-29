const getApi = async () => {
    const url = 'https://api-football-beta.p.rapidapi.com/standings?season=2019&league=39';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f6b5f2b96emsh921f61627427429p1d4504jsn8936965797af',
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
        }
    };
    
    try {
        const res = await fetch(url, options);
        const result = await res.json();
        // console.log(result);
        const finalApi =  result.response;
        // console.log(finalApi);
        const data = finalApi[0].league;
        // console.log(data);
        // data.Map((val) => {
        //     console.log(val);
        // })
        
    } catch (error) {
        console.error(error);
    }
}

getApi();