// The SystemJS config file tells our Angular modules and components where to find the
// things they use/include!
(function (global) {
  System.config({
    // Paths are useful aliases which will be used in the map below
    // They are relative to the root of the system, e.g. the npm:
    // path will refer to a node_modules directory in the SAME 
    // directory as this config file!
    paths: {
      'npm:': 'node_modules/'
    },
    // The map tells the System loader where to find stuff
    map: {
      app: 'app', // our stuff lives here
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      'moment': 'npm:moment',
      'rxjs': 'npm:rxjs'
    },
    // The packages section tells the System loader how to load when no filename and/or no extension
    // The main.js in the app section is very important because we don't explicity specify that,
    // so System has to know how to load it by default.
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      moment: {
        main: './min/moment.min.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);