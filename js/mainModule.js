import createFlight from './dataModule.js';
import displayFlights from './UIModule.js';

const fetchData = (request) => {

    fetchJsonp(request)
        .then((response) => response.json())
        .then((data) => {
            let allFlights = data.acList;
            allFlights.forEach(flight => {
                const singleFlight = createFlight(flight.Alt, flight.Id, flight.Man, flight.Mdl, flight.To, flight.From, flight.Op);
                displayFlights(singleFlight);
            })
        })
}

const initSingleFlight = () => {

    //let latitude = 40.623184;
    //let longitude = -74.147261;
    let error = () => {
        alert("It is necessary to allow your location in order to use the app!");
      }
    let latitude = 0;
    let longitude = 0;
    navigator.geolocation.getCurrentPosition(position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

    }, error);

    const singleFlightRequest = `http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${latitude}&lng=${longitude}&fDstL=0&fDstU=100`;

    fetchData(singleFlightRequest);
    setInterval(() => {
        document.querySelector('.row').innerHTML = '';
        fetchData(singleFlightRequest);
    },60000);
}


export default initSingleFlight;