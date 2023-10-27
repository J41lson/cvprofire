document.addEventListener('DOMContentLoaded', function() {
 
  document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

    
      var targetId = this.getAttribute('href').substring(1);

     
      document.querySelectorAll('section').forEach(function(section) {
        section.style.display = 'none';
      });

      
      document.getElementById(targetId).style.display = 'block';
    });
  });


  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

  
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
      alert('Mensagem enviada com sucesso!');
    
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
});