let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let clocksRouter = require('./src/clock/clock_routes');
let ticksRouter = require('./src/tick/tick_routes');
let mgmtRouter = require('./src/mgmt/mgmt');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/mgmt', mgmtRouter);
app.use('/api/clocks', clocksRouter);
app.use('/api/ticks', ticksRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'client/build/index.html'));
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
