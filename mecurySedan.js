const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor (make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    service() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true
        }
    }

    load(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num += this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            }
        }
    }
}

let myCar = new Car('BMW', 'X5', '2021', 'red', 10000)

myCar.start()
myCar.load(3)
myCar.service()