const callback = (cb) => {
  return cb(null, "aaa");
};

(() => {
  callback((err, ans) => {
    if (err) {
      console.error(err);
    } else {
      console.log(ans); // Output: aaa
    }
  });
})();
