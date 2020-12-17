// Generated by CoffeeScript 1.7.1
(function() {
  var PackageLoaders, Packages;

  PackageLoaders = require("./loaders");

  Packages = (function() {

    /*
     */
    function Packages() {
      this.exports = {};
      this._loaders = new PackageLoaders(this.exports);
    }


    /*
     loads a package path
     */

    Packages.prototype.require = function(path) {
      this._loaders.resolve(path);
      return this;
    };


    /*
     loads the packages
     */

    Packages.prototype.load = function(next) {
      this._loaders.loadAll(next);
      return this;
    };

    return Packages;

  })();

  module.exports = function() {
    return new Packages();
  };

}).call(this);
