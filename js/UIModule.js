
const displayFlights = flight => {

    let wrapper = document.createElement('div');
    let card = document.createElement('div');
    let dropdown = document.createElement('div');
    let link = document.createElement('a');
    let icon = document.createElement('img');
    let logo = document.createElement('img');
    let altitude = document.createElement('p');
    let num = document.createElement('p');
    let man = document.createElement('p');
    let model = document.createElement('p');
    let destination = document.createElement('p');
    let origin = document.createElement('p');

    wrapper.setAttribute("class","col s12 m12");
    card.setAttribute("class","card-panel");
    icon.setAttribute("class","icon");
    icon.setAttribute("src","https://cdn4.iconfinder.com/data/icons/eldorado-transport/40/plane-512.png");
    link.setAttribute("id", flight.id);
    dropdown.setAttribute("class","dropdown");
    logo.setAttribute("class","logo");

    let company = "";
    if(flight.hasOwnProperty('operator') && flight.operator !== undefined){
        let query = flight.operator.toLowerCase().split(' ').join('');
        company = `https://logo.clearbit.com/${query}.com?s=128`;
    } else {
        company = 'https://www.freeiconspng.com/uploads/airplane-png-33.png';
    }
    logo.setAttribute("src", company);

    altitude.innerHTML = `Altitude: ${flight.altitude} ft`;
    num.innerHTML = `Flight code number: ${flight.id}`;
    man.innerHTML = `Manufacturer: ${flight.man}`;
    model.innerHTML = `Model: ${flight.model}`;
    destination.innerHTML = `Destination: ${flight.destination}`;
    origin.innerHTML = `Airport Origin: ${flight.origin}`;

    dropdown.appendChild(logo);
    dropdown.appendChild(man);
    dropdown.appendChild(model);
    dropdown.appendChild(destination);
    dropdown.appendChild(origin);
    link.appendChild(icon);
    link.appendChild(altitude);
    link.appendChild(num);
    card.appendChild(link);
    card.appendChild(dropdown);
    wrapper.appendChild(card);

    document.querySelector('.row').appendChild(wrapper);

}

export default displayFlights;