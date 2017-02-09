var vigenereCipher = (function() {

  var key = 'lemonlemonle';

  var getDecipheredPosition = function(messageCharPosition, keyCharPosition) {

    var subtraction = messageCharPosition - keyCharPosition;
    return subtraction < 0 ? (26 + subtraction) % 26 : subtraction % 26;

  }

  return {

    encrypt: function(message) {

      var cont = 0;
      var cipheredArray = [];

      message.toLowerCase().split('').forEach(function(c) {

          var messageCharPosition = alphabetManager.getPositionOf(c);
          var keyCharPosition =  alphabetManager.getPositionOf(key.split('')[cont]);

          cont === key.split('').length ? cont = 0 : cont ++;

          cipheredArray.push(alphabetManager.getLetterAt((messageCharPosition + keyCharPosition) % 26));

      });

      return cipheredArray.join('');
    },

    decrypt: function(message) {

      var cont = 0;
      var decipheredArray = [];

      message.toLowerCase().split('').forEach(function(c) {

        var messageCharPosition = alphabetManager.getPositionOf(c);
        var keyCharPosition =  alphabetManager.getPositionOf(key.split('')[cont]);

        cont === key.split('').length ? cont = 0 : cont ++;

        var position = getDecipheredPosition(messageCharPosition, keyCharPosition);
        decipheredArray.push(alphabetManager.getLetterAt(position));

      });

      return decipheredArray.join('');

    }

  }

})();
