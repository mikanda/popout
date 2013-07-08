
# popout

  Component to show an element popped out.

## Installation

  Install with [component(1)](http://component.io):

    $ component install mikanda/popout

## Usage

 ```js
 var popout = require('popout');

 var div = document.querySelector('#my-element');
 var p = popout(div);
 ...
 p.close();
 ```

## API

### Popout(content : DOMElement)

  Pop out `content`.

### Popout#close()

  Close the popout.

## License

  MIT
