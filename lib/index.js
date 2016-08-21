export default {};

var bunyan = require('bunyan');
var log = bunyan.createLogger({
  name: 'myapp',
  streams: [
    {
      level: 'info',
      //stream: process.stdout
	  path: 'info.log'
    },
    {
      level: 'error',
      path: 'error.log'
    }
  ]
});

log.info({favColor: 'blue'}, 'logging user favourite color')
log.error('Just an error message with nothing else');

log.info({currentLevels: log.levels()}, 'The current log levels');

var log = bunyan.createLogger({
  name: 'myapp',
  streams: [
    {
      level: 'error',
      path: 'error.log'
    }
  ]
});
log.info('After getting rid of info logger this should not be logged');
log.error('After getting rid of info logger this should be logged');