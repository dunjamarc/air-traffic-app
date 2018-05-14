class Airplane {
    constructor(altitude, id, man, model, destination, origin, operator) {
        this.altitude = altitude;
        this.id = id;
        this.man = man;
        this.model = model;
        this.destination = destination;
        this.origin = origin;
        this.operator = operator;
    }
}

const createFlight = (altitude, id, man, model, destination, origin, operator) => {
    const aircraft = new Airplane(altitude, id, man, model, destination, origin, operator);
    return aircraft;
}

export default createFlight;