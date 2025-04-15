class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.instant = "Start db";
    Database.instant = this.instant;
  }
}
