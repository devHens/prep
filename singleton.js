class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    Database.instance = this
  }
}
