export default {};

var bunyan = require('bunyan');
var log = bunyan.createLogger({
  name: 'myapp',
  streams: [
    {
      level: 'info',
      stream: process.stdout
	  //path: 'info.log'
    },
    {
      level: 'error',
      path: 'error.log'
    }
  ]
});

log.info({favColor: 'blue'}, 'logging user favourite color')
log.error('Just an error message with nothing else');

console.log(log.levels());