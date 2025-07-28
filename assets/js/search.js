
  const falecidos = [
    { nome: "João da Silva", imagem: "assets/img/team/team-1.jpg" },
    { nome: "Maria Oliveira", imagem: "img/maria.jpg" },
    { nome: "Carlos Souza", imagem: "img/carlos.jpg" },
    { nome: "Ana Lima", imagem: "img/ana.jpg" }
  ];

  document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const termo = document.getElementById("search-input").value.toLowerCase().trim();
    const resultado = document.getElementById("search-results");
    resultado.innerHTML = "";

    const filtrados = falecidos.filter(pessoa =>
      pessoa.nome.toLowerCase().includes(termo)
    );

    if (filtrados.length === 0) {
      resultado.innerHTML = "<p>Nenhum resultado encontrado.</p>";
      return;
    }

    filtrados.forEach(pessoa => {
      const card = document.createElement("div");
      card.className = "card-obituario";
      card.innerHTML = `
        <img src="${pessoa.imagem}" alt="${pessoa.nome}">
        <h5>${pessoa.nome}</h5>
      `;
      resultado.appendChild(card);
    });
  });

