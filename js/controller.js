var controller = (function() {

  function encryptBtn_onClick() {

    document.getElementById('encrypt-btn').addEventListener('click', function(e) {
      e.preventDefault();

      var message = document.getElementById('message').value;
      var encryptedText = vigenereCipher.encrypt(message);
      document.getElementById('encryption-result').innerText = "Resultado: " + encryptedText.toUpperCase();

    });

  }

  function decryptBtn_onClick() {

    document.getElementById('decrypt-btn').addEventListener('click', function(e) {
      e.preventDefault();

      var message = document.getElementById('encrypted-message').value;
      var encryptedText = vigenereCipher.decrypt(message);
      document.getElementById('decryption-result').innerText = "Resultado: " + encryptedText.toUpperCase();

    });

  }

  return {

    init: function() {
      encryptBtn_onClick();
      decryptBtn_onClick();
    }

  };

})();

controller.init();
