// Generated by CoffeeScript 1.7.1
(function() {
  var resolverFactory, toarray;

  resolverFactory = require("./factory");

  toarray = require("toarray");

  exports.resolve = function(path) {
    var resolver;
    resolver = resolverFactory.create(path);
    if (!resolver) {
      throw new Error("unable to resolve '" + path + "'");
    }
    return toarray(resolver.resolve());
  };

}).call(this);
