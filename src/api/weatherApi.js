import axios from "axios"

export const getDataApi = async (apiKey, city) => {
	const response = await axios.get("http://api.weatherapi.com/v1/forecast.json?key=" +
		apiKey + "&q=" + city + "&days=10&aqi=yes&alerts=yes&lang=ru")
	return response.data
}