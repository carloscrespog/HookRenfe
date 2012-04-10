/*

   hook.io hook for creating hook.io hooks
   
   ( the hookRenfe generates new hooks by inspecting itself )

*/


var Hook = require('hook.io').Hook,
    util = require('util');

var HookRenfe = exports.HookRenfe = function(options){
  Hook.call(this, options);
  var self = this;
};

// HookRenfe inherits from Hook
util.inherits(HookRenfe, Hook);

HookRenfe.prototype.doSomething = function(options, callback){

};

HookRenfe.prototype.doSomethingElse = function(options, callback){

};