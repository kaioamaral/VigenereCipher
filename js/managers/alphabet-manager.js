var alphabetManager = (function() {

    'use strict';

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return {

      getLetterAt: function(n) {
        return alphabet[n];
      },

      getPositionOf: function(c) {
        return alphabet.indexOf(c);
      }

    }

})();
