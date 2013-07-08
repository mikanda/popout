
/**
 * Module dependencies.
 */

var popout = require('popout')
  , query = require('component-query');

var el = query('#first');
var p = popout(el);
setTimeout(
  function(){
    p.close();
    var p2 = popout(query('#second'));
    p2.close();
  },
  1500
);
