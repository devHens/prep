const cheerio = require("cheerio");

const url = `https://my.trip.com/hotels/w/detail?hotelid=698563&showtotalamt=0&highlight=179641680&curr=MYR&locale=en-MY&hoteluniquekey=H4sIAAAAAAAAAOO6zczFJMEodYWZ48KuK6FCjAYWe6Ucg3bItb5OzHTwBNGBG3IcAngKGcDAyqGR0RgEPps4zGA8fFFrBSPjRohIsZXDDkamE4zVC5g2TX3GcYqFleMIjwTLJZazTNHVStmplUpWJjpKJZklOalKVkrBiTmpxQrFqUVlmcmpCiWJFUo6Som5-aV5JUBJSz0LcyAfKOqZomRlaKmjlJyYk1yak1iSGlJZANRupqOUWexcUpRZEJSam1lSkgpUlpaYU5wKEg9KLQbKJIMFlfyA5hRBBTLz8yDaDVHEwhJzSkFOUqrVweJOqAuTMxKL0lORHWmmZ4jkSHN6uTH2EQtTdOwnFoZfwADuBQZwEytDFyvDJFZWjs85Eiy7WNkMIyIMTPwusHYzSilYmKdYplmYGKSkpaaYmJhbJJqlGqcYpqQaGBslpaaamirwaSz6-vDMKiMj1i5GJt9ID8YgNkNTM0cXkygbLmbfyCBB4cTDl7VTf9lLgXiKMJ4WiGcI4wW-q7E3jdt11j4SJpLEmpqn6xuZcU2ggLGLkVuA0YMxgrGCsYGRcRUjwwZGxh2M_2GA8REjr4d_iKtPvLujj49rUOQrRpDhAH2YnXaaAgAA&checkIn=2024-11-04&checkOut=2024-11-05&adult=1&children=0&crn=1`;

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const textData = await response.text();

    const regex =
      /<ul class="hotelOverview_hotelOverview-labelA__9yzYe">([\s\S]*?)<\/ul>/;
    const match = textData.match(regex);

    if (match && match[1]) {
      const extractedData = match[1];

      const openedMatch = extractedData.match(/Opened: (\d{4})/);
      const renovatedMatch = extractedData.match(/Renovated: (\d{4})/);
      const roomsMatch = extractedData.match(/Number of Rooms: (\d+)/);

      const opened = openedMatch ? openedMatch[1] : "Not found";
      const renovated = renovatedMatch ? renovatedMatch[1] : "Not found";
      const numberOfRooms = roomsMatch ? roomsMatch[1] : "Not found";

      console.log(`Opened: ${opened}`);
      console.log(`Renovated: ${renovated}`);
      console.log(`Number of Rooms: ${numberOfRooms}`);
    } else {
      console.log("No matching data found.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const cheerioData = async () => {
  try {
    const $ = await cheerio.fromURL(url);

    const opened = $('li:contains("Opened")')
      .text()
      .replace("Opened: ", "")
      .trim();
    const renovated = $('li:contains("Renovated")')
      .text()
      .replace("Renovated: ", "")
      .trim();
    const numberOfRooms = $('li:contains("Number of Rooms")')
      .text()
      .replace("Number of Rooms: ", "")
      .trim();
    console.log(opened);
    console.log(renovated);
    console.log(numberOfRooms);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

(async () => {
  //   await fetchData();
  await cheerioData();
})();
