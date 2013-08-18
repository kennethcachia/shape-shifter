/*
 * Shape Shifter
 * http://www.kennethcachia.com/shape-shifter
 * A canvas experiment
 */

'use strict';

var S = {
  init: function () {
    var action = window.location.href,
        i = action.indexOf('?a=');

    S.Drawing.init('.canvas');
    S.ShapeBuilder.init();
    S.UI.init();
    document.body.classList.add('body--ready');

    if (i !== -1) {
      S.UI.simulate(decodeURI(action).substring(i + 3));
    } else {
      S.UI.simulate('Shape|Shifter|Type|to start|#icon thumbs-up|#countdown 3||');
    }

    S.Drawing.loop(function () {
      S.Shape.render();
    });
  }
};


window.addEventListener('load', function () {
  S.init();
});
