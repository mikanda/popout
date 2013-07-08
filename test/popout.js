
/**
 * Module dependencies.
 */

var chai = require('chaijs-chai')
  , domify = require('component-domify')
  , classes = require('component-classes')
  , popout = require('popout')
  , should = chai.should();

/**
 * Tests.
 */

describe('Popout', function(){
  it('should create the overlay and set the class', function(){
    var el = domify('<div></div>')
      , el2 = el.cloneNode()
      , p = popout(el)
      , p2;
    classes(el).has('popout').should.be.true;
    document.body.appendChild(el);
    document.body.appendChild(el2);
    p._overlay.getAttribute('id').should.equal('popout-overlay');

    // open a second popout

    p2 = popout(el2);
    classes(el).has('popout').should.be.false;
    p2._overlay.should.equal(p._overlay);
    p2.close();
  });
});
