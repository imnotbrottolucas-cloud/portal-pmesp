function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function gerarProtocolo(event) {
  event.preventDefault();
  const ano = new Date().getFullYear();
  const numero = Math.floor(100000 + Math.random() * 900000);
  document.getElementById("protocol").textContent = "Protocolo gerado: PMESP-" + ano + "-" + numero;
}

function filtrarDocumentos() {
  const termo = document.getElementById("docSearch").value.toLowerCase();
  const documentos = document.querySelectorAll("#docs .doc");

  documentos.forEach((doc) => {
    const texto = doc.textContent.toLowerCase();
    doc.style.display = texto.includes(termo) ? "grid" : "none";
  });
}
