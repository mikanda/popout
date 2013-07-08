
/**
 * Module dependencies.
 */

var overlay = require('overlay')
  , domify = require('domify')
  , classes = require('classes')
  , query = require('query')
  , template = require('./template');

/**
 * Module exports.
 */

module.exports = function(content){

  // close all remaining popouts

  var el = query('.popout');
  if (el) classes(el).remove('popout');
  return new Popout(content);
};

/**
 * Initialize new popout.
 */

function Popout(content) {
  var el = this.el = content.el || content
    , overlay;

  // render content

  classes(el).add('popout');

  // init overlay

  overlay = query('#popout-overlay');
  if (overlay) {
    this._overlay = overlay;
  } else {

    // create overlay

    overlay = this._overlay = document.createElement('div');
    overlay.setAttribute('id', 'popout-overlay');
    document.body.appendChild(overlay);
  }
}

/**
 * Close the popover.
 */

Popout.prototype.close = function(){
  if (classes(this.el).has('popout')) {
    classes(this.el).remove('popout');
    document.body.removeChild(this._overlay);
  }
};
