const API = 'https://amazon-product-price-data.p.rapidapi.com/product?asins=B005YQZ1KE%2CB074R8RQQ2&locale=US';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4191bbd51amsh8cdc73da121adbep1a5e50jsn64dd2853f29e',
		'X-RapidAPI-Host': 'amazon-product-price-data.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, option)
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData(API);
        
    } catch {

    }

})();