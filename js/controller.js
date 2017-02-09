var controller = (function() {

  return {

    registerListeners: function() {

      document.getElementById('encrypt-btn').addEventListener('click', function(e) {
        e.preventDefault();

        var message = document.getElementById('message').value;
        var encryptedText = vigenereCipher.encrypt(message);
        document.getElementById('result').innerText = "Resultado: " + encryptedText.toUpperCase();

      });

    }

  };

})();

controller.registerListeners();
