const cityName = document.getElementById('cityName') ;
const submitBtn = document.getElementById('submitBtn') ;
const cityOutput = document.getElementById('city-name') ;
const getInfo = async(event) => {
    event.preventDefault() ;
   let cityVal = cityName.value;
    // condition for search bar empty?
    if(cityVal === ""){
        cityOutput.innerText = `Give something to search `;
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=eb35b7789a5752df59e8856a305f3075`;
            const res = await fetch(url);//json ke form mai aa rha hai
            const data = await res.json() ;
            console.log(data);
        }catch{
            cityOutput.innerText = `Give something relevant `;
        }
        
    }

}
submitBtn.addEventListener('click',getInfo) ;