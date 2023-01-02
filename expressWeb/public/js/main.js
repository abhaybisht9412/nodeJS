const cityName = document.getElementById('cityName') ;
const submitBtn = document.getElementById('submitBtn') ;
const cityOutput = document.getElementById('city-name') ;
const temp = document.getElementById('temp');
const temp_icon =document.getElementById('temp_status') ;

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
            
            // console.log(data);
            const arrData = [data];
            // console.log(arrData);

            //city,country
            cityOutput.innerText = 
            `${
                arrData[0].name
            },
            ${
                arrData[0].sys.country
            }`;

            //temperature,tempIcon
            temp.innerText = arrData[0].main.temp;
            temp_icon.innerText = arrData[0].weather[0].main;

        //printing icon instead of text
        const tempMood = arrData[0].weather[0].main;
        console.log(tempMood);
        if(tempMood === "Clear"){
            temp_icon.innerHTML = 
            "<i class = 'fa fa-sun' style='color:#eccc68;'></i>";
        }else if(tempMood === "Clouds"){
            temp_icon.innerHTML = 
            "<i class = 'fa fa-cloud' style='color:#f1f2f6;'></i>";
        }else if(tempMood === "Rain"){
            temp_icon.innerHTML = 
            "<i class = 'fa fa-cloud-rain' style='color:#a4b0be;'></i>";
        }else{
            temp_icon.innerHTML = 
            "<i class = 'fa fa-cloud' style='color:#f1f26;'></i>";
        }
        }catch{
            cityOutput.innerText = `Give something relevant `;
        }
        
    }

}
submitBtn.addEventListener('click',getInfo) ;