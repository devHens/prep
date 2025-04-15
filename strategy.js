class Car {
  travel() {
    console.log("Travelling by car");
  }
}

class Bus {
  travel() {
    console.log("Travelling by bus");
  }
}

class TransportStrategy {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }
  goto(destination) {
    this.strategy.travel(destination);
  }
}

const car = new TransportStrategy(new Car());
