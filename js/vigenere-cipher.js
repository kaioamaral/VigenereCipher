var vigenereCipher = (function() {

  var key = 'lemonlemonle';

  function _getDecipheredPosition(messageCharPosition, keyCharPosition) {

    var subtraction = messageCharPosition - keyCharPosition;
    return subtraction < 0 ? (26 + subtraction) % 26 : subtraction % 26;

  }

  function _encrypt(word) {

    var cont = 0;
    var cipheredArray = [];

    word.toLowerCase().split('').forEach(function(c) {

        var messageCharPosition = alphabetManager.getPositionOf(c);
        var keyCharPosition =  alphabetManager.getPositionOf(key.split('')[cont]);

        cont === key.split('').length ? cont = 0 : cont ++;
        cipheredArray.push(alphabetManager.getLetterAt((messageCharPosition + keyCharPosition) % 26));

    });

    return cipheredArray.join('');

  }

  function _decrypt(word) {

    var cont = 0;
    var decipheredArray = [];

    word.toLowerCase().split('').forEach(function(c) {

      var messageCharPosition = alphabetManager.getPositionOf(c);
      var keyCharPosition =  alphabetManager.getPositionOf(key.split('')[cont]);

      cont === key.split('').length ? cont = 0 : cont ++;

      var position = getDecipheredPosition(messageCharPosition, keyCharPosition);
      decipheredArray.push(alphabetManager.getLetterAt(position));

    });

    return decipheredArray.join('');

  }

  return {

    encrypt: function(message) {

      var encryptedMessage = [];

      message.split(' ').forEach(function(word) {
        encryptedMessage.push(_encrypt(word));
      });

      return encryptedMessage.join(' ');

    },

    decrypt: function(message) {

      var decryptedMessage = [];

      message.split(' ').forEach(function(word) {

        decryptedMessage.push(_decrypt(word));
      });

      return decryptedMessage.join(' ');

    }

  }

})();
