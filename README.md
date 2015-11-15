Angular/Foundation6 best practices template: fork from http://paislee.io/a-healthy-gulp-setup-for-angularjs-projects

### Modifications from original version
        + support for Fondation-6 for App http://foundation.zurb.com/apps/docs/#!/
        + support for NodeJS V4+V5
        + sample based on a components somehow similar to what Angular-2 should use
        + support development and production mode [javascript html partial templates are loaded in the right order where ever they are within dev tree]
        + support node debugger in development mode [tested with Netbeans 8.1, but should work with any]

### Installation

        0. Install Node.js
        1. Download/Install healthy-gulp-angular-foundation6 from https://github.com/iotbzh/healthy-gulp-angular-foundation6
        2. npm install
        3. npm run start
        Optional: Chrome/LiveReload (https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

### Using Gulp
        A. ./node_modules/.bin/gulp help
        B. ./node_modules/.bin/gulp watch-dev
        Note: if gulp is installed globally you may use directly "gulp help"


### customisation
    # Create a ".noderc.js" at project root to overload .app/etc/AppDefault.js

    var config= {
        APPNAME: "MyFirstApp"    // replace @@APPNAME@@ in Index.html & app.js for dev/prod
        HOST   : "localhost",    // listen on a specific interface/IP [default==localhost]
        PORT   : 8081,           // httpd port  [default 8080]
        DEBUG  : 9081,           // nodejs debug port in dev mode [comment to remove debug in devmod]
        URLBASE: '/'             // URL base for rewriting should match with your http server application base [default/]
    };
    module.exports = config;

### Bugs
        + Check Angular & Angular-Animate get the exact same version otherwise you may get an error looking like " [$injector:unpr] Unknown provider: $$asyncCallbackProvider"
        + Gulp watch modification only on existing files. Adding a new file will not be detected. User should restart Gulp watch command
        + In some case automatic update notification to browser fail and page has to be reloaded manually
        + When using IDEs it's easy to have multiple GULP process watching the same thing!!! In case of doubt when having strange result 'pkill -9 gulp; pkill -9 node"

## Project Structure
The project ships with a directory structure like:

    /MyProject
    |
    |-- gulpfile.js    // Check 'gulp help' for options
    |-- package.json
    |-- bower.json
    |-- .noderc.js  [Warning: contains private keys DO-NOT upload in Github]
    |
    |--- /app
    |    |
    |    |---etc
    |    |   |
    |    |   | AppDefault.js   // Default config for Application
    |    |
    |    |---Backend             [HTTPd server production/mock]
    |    |   |--- server.js        // server bootstrap and options
    |    |   |--- /RestApi
    |    |   |    | _all.js        // API module registration
    |    |   |    | SampleApi.js   // As many API modules as needed
    |    |  
    |    |---Frontend            [Angular/Foundation HTML5 app]
    |    |   |--- index.html     // index template should not need any changes
    |    |   |--- app.js         // main entry point should register here every pages module
    |    |   |
    |    |   |--- /styles        // your global SASS files and Foundation6 config
    |    |   |    |--- _settings.scss
    |    |   |    |---- app.scss
    |    |   |
    |    |   |--- /Widgets      // Add as many widgets Directories/Files as needed
    |    |   |    |--- Widget-1
    |    |   |    |... Widget-xxx
    |    |   |
    |    |   |----/Pages        // Partial Directory/Files as needed
    |    |   |    |--- Home Partial
    |    |   |    |--- Any Other Partials
    |    |   |
    |    |   |----/xxxx        // Partial/Widget/Style may sit in as many directories as needed
    |    |
    |
    |--- (/dist.dev)  // received copy of JS/HTML during debug session
    |--- (/dist.prod  // received compressed JS/HTML for production mode

NOTE: By convention Directory/Files starting by an Uppercase can be customised, the one starting by lowercase might break GULP config. 