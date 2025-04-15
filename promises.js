const test = (success) => {
  return new Promise((resolve, rejected) => {
    if (success) {
      return resolve("hello");
    } else {
      return rejected("fail");
    }
  });
};

(async () => {
  try {
    const abcd = await test(false);
    console.log(abcd);
  } catch (err) {
    console.log(err);
  }
})();
