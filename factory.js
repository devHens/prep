class User {
  work() {}
}

class Software extends User {
  work() {
    console.log("Iam software");
  }
}

class Builder extends User {
  work() {
    console.log("Iam builder");
  }
}
class UserFactory {
  createUser(type) {
    switch (type) {
      case "software":
        return new Software();
      case "builder":
        return new Builder();
    }
  }
}

(() => {
  const factory = new UserFactory();
  const user = factory.createUser("software");
  user.work();
})();
