var controller = (function() {

  'use strict';

  var vigenereCipher = {};

  function encryptBtn_onClick() {

    document.getElementById('encrypt-btn').addEventListener('click', function(e) {
      e.preventDefault();

      var messageInput = document.getElementById('message');
      var encryptedText = vigenereCipher.encrypt(messageInput.value);
      document.getElementById('encryption-result').innerText = "Resultado: " + encryptedText.toUpperCase();

      messageInput.value = '';

    });

  }

  function decryptBtn_onClick() {

    document.getElementById('decrypt-btn').addEventListener('click', function(e) {
      e.preventDefault();

      var messageInput = document.getElementById('encrypted-message');
      var encryptedText = vigenereCipher.decrypt(messageInput.value);
      document.getElementById('decryption-result').innerText = "Resultado: " + encryptedText.toUpperCase();

      messageInput.value = '';

    });

  }

  return {

    init: function() {

      var key = 'lemonlemonle';
      vigenereCipher = vigenereCipherFactory.create(key);

      encryptBtn_onClick();
      decryptBtn_onClick();

    }

  };

})().init();
