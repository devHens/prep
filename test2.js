const update = {
  id: 84,
  enabled: 1,
  os: null,
  browser: null,
  redirect_url: "asdasd",
  start_time: "15:21",
  end_time: "10:00",
};

const existingTimeInterval = [
  {
    id: 75,
    enabled: 0,
    os: null,
    browser: null,
    redirect_url: "https://google.co",
    start_time: "10:20",
    end_time: "15:00",
  },
];

const parseTime = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes;
};

const isOverlap = (existingInterval, newInterval) => {
  const existingStart = existingInterval.start_time;
  const existingEnd = existingInterval.end_time;
  const newStart = newInterval.start_time;
  const newEnd = newInterval.end_time;

  const existingIntervalCrossesMidnight = existingStart > existingEnd;
  const newIntervalCrossesMidnight = newStart > newEnd;

  if (existingIntervalCrossesMidnight && newIntervalCrossesMidnight) {
    console.log("here");
    return existingStart <= newEnd && newStart <= existingEnd;
  }

  if (existingIntervalCrossesMidnight) {
    console.log("here1");
    return existingStart <= newEnd || newStart <= existingEnd;
  }

  if (newIntervalCrossesMidnight) {
    console.log("here2");
    return newStart <= existingEnd || existingStart <= newEnd;
  }
  return true;
};

let overlapFlag = false;
for (let r of existingTimeInterval) {
  console.log(
    isOverlap(r, { start_time: update.start_time, end_time: update.end_time })
  );
}

// existingTimeInterval.forEach((timeInterval) => {
//   if (
//     isOverlap(
//       {
//         start_time: timeInterval.start_time,
//         end_time: timeInterval.end_time,
//       },
//       {
//         start_time: update.start_time,
//         end_time: update.end_time,
//       }
//     )
//   ) {
//     console.log(`Is overlap for ${timeInterval.id} `);
//     overlapFlag = true;
//   }
// });

// if (!overlapFlag) {
//   console.log("No overlaps found");
// }
