class Email {
  send(message) {}
}

class Gmail extends Email {
  send(message) {
    console.log(`SEnding from gmail ${message} `);
  }
}

class Yahoo extends Email {
  send(message) {
    console.log(`SEnding from Yahoo ${message} `);
  }
}

class EmailFactory {
  static createFactory(type) {
    switch (type) {
      case "gmail":
        return new Gmail();
      case "yahoo":
        return new Yahoo();
    }
  }
}

(() => {
  const gmail = EmailFactory.createFactory("gmail");
  const yahoo = EmailFactory.createFactory("yahoo");
    yahoo.send("YAOO")
  gmail.send("Bitch")
})();
