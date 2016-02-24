console.log('test suite 1 started');

setTimeout(function() {
  console.log('test suite 1 ended');
  process.exit();
}, 3000);