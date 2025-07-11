function salvar() {
  const dados = {
    email: document.getElementById("email").value.trim(),
    senha: document.getElementById("senha").value.trim(),
    urlCurso: document.getElementById("urlCurso").value.trim(),
    unidade: document.getElementById("unidade").value,
    estado_civil: document.getElementById("estado_civil").value,
    raca: document.getElementById("raca").value,
    ddd: document.getElementById("ddd").value.trim(),
    celular: document.getElementById("celular").value.trim(),
    aceite: document.getElementById("aceite").checked
  };

  fetch('salvar-dados', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(response => {
    if (response.ok) {
      alert('Dados salvos com sucesso!');
    } else {
      alert('Erro ao salvar dados.');
    }
  })
  .catch(error => {
    console.error('Erro ao enviar:', error);
    alert('Erro na requisição.');
  });
}