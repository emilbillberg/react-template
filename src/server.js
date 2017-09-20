const { resolve } = require('path');
const { readFileSync } = require('fs');
const Koa = require('koa');
// const mount = require('koa-mount');
// const compress = require('koa-compress');
// const conditional = require('koa-conditional-get');
// const etag = require('koa-etag');
const serve = require('koa-static');
// const logger = require('koa-logger');
// const helmet = require('koa-helmet');
const route = require('koa-route');
// const home = require('./src/app/home/home.js');
// const style = require('./src/app/style/style.js');

const port = process.env.PORT || 3000;
const app = new Koa();
const rootFolder = resolve(`${__dirname}`);

// app.use(logger());
// app.use(helmet.frameguard({ action: 'deny' }));
// app.use(helmet.noSniff());
// app.use(helmet.xssFilter());
// app.use(compress());
// app.use(conditional());
// app.use(etag());
app.use(serve(rootFolder, { index: false }));
// app.use(mount('/', home));
// app.use(mount('/style', style));
app.use(route.get('*', async(ctx) => {
  ctx.set('Content-Type', 'text/html; charset=utf-8');
  ctx.set('Cache-Control', 'max-age=0');
  ctx.status = 200;
  ctx.body = `
    <html lang="en" dir="ltr">
    <head>
      <base href="/">
      <title>React template</title>
      <link rel="manifest" href="manifest.json">
      <link rel="stylesheet" href="index.css">

      <script>
        var observer = new PerformanceObserver(list => {
          list.getEntries().forEach(entry => {
            // Display each reported measurement on console
            if (console) {
              console.log("Name: "       + entry.name      +
                          ", Type: "     + entry.entryType +
                          ", Start: "    + entry.startTime +
                          ", Duration: " + entry.duration);
            }
          })
        });
        observer.observe({entryTypes: ['resource', 'mark', 'measure']});
        performance.mark('registered-observer');
      </script>

    </head>
    <body>
      <div id="app"></div>
      <script>window.__initialState__ = ${JSON.stringify(ctx.state.initialState)}</script>
      <script src="index.js" defer></script>
    </body>
    </html>
  `
}));
app.listen(port);
console.log(`Server started at port: ${port}`);

/*
async function redirectToSecure(ctx, next) {
    const secure = ctx.header[`X-Forwarded-Proto`] === `https` || debug;
    if (!secure) {
        ctx.redirect(`https://${ctx.req.headers.host}${ctx.req.url}`);
    } else {
        await next();
    }
}
const regex = new RegExp('.(html|js)$', 'i');
if (regex.test(ctx.request.path)) {
  ctx.status = 404;
} else {
}
*/