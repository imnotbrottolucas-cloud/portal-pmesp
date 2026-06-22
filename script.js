const events = [
  {
    year: "1830",
    title: "O início ... 1830",
    photo: "photo-1830",
    text: [
      "Nas primeiras décadas do século XIX, a São Paulo colonial ainda era o \"burgo dos estudantes\", fortemente marcada pela presença da Faculdade de Direito, criada por ordem de Dom Pedro I, em 1827.",
      "O ato da criação pode ser reconhecido pela reunião do conselho da Província de São Paulo presidida pelo Brigadeiro Rafael Tobias de Aguiar, realizada em 15 de dezembro de 1831. O efetivo inicial era composto por 100 homens a pé e 30 a cavalo.",
      "A partir de março de 1832, a Instituição, pela falta de aquartelamento próprio, foi instalada na ala térrea do Convento do Carmo, situada no quadrilátero da Sé e hoje demolida.",
      "A milícia paulista foi organizada e reorganizada diversas vezes. Inicialmente, recebeu o nome de Guarda Municipal Permanente. No século XX, foi denominada Força Policial, Força Pública e, em 1926, foi criada a Guarda Civil de São Paulo.",
      "A menor subunidade da Guarda Municipal Permanente, em 1831, era a esquadra, formada por um cabo e 24 soldados."
    ]
  },
  {
    year: "1857",
    title: "1857",
    photo: "photo-1857",
    text: [
      "Em 7 de abril de 1857, em decorrência da Lei nº 575, foi criada a Banda de Música do Corpo Policial Permanente.",
      "A Banda era composta de 1 mestre, com graduação de primeiro sargento, e 17 músicos soldados."
    ]
  },
  {
    year: "1864",
    title: "1864",
    photo: "photo-generic",
    text: ["Período de reorganização institucional e fortalecimento das atividades policiais no Estado de São Paulo."]
  },
  {
    year: "1880",
    title: "1880",
    photo: "photo-generic",
    text: ["A Corporação segue seu processo de organização e consolidação como força voltada à manutenção da ordem pública."]
  },
  {
    year: "1888",
    title: "1888",
    photo: "photo-generic",
    text: ["Ano de relevantes transformações sociais no Brasil, refletindo também na estrutura pública e policial."]
  },
  {
    year: "1891",
    title: "1891",
    photo: "photo-generic",
    text: ["Com a reorganização do Estado republicano, a força policial paulista passa por novas adaptações institucionais."]
  },
  {
    year: "1892",
    title: "1892",
    photo: "photo-generic",
    text: ["A Instituição mantém sua atuação na preservação da ordem e na segurança pública paulista."]
  },
  {
    year: "1893",
    title: "1893",
    photo: "photo-generic",
    text: ["Novas etapas de estruturação administrativa e operacional marcam a evolução da força pública estadual."]
  },
  {
    year: "1906",
    title: "1906",
    photo: "photo-generic",
    text: ["Período marcado por modernizações na doutrina, na organização e na formação dos integrantes da Instituição."]
  },
  {
    year: "1910",
    title: "1910",
    photo: "photo-generic",
    text: ["Criação da estrutura que daria origem à Academia de Polícia Militar do Barro Branco, marco do ensino policial militar paulista."]
  },
  {
    year: "1924",
    title: "1924",
    photo: "photo-generic",
    text: ["A década de 1920 foi marcada por importantes acontecimentos históricos e por forte atuação da força pública paulista."]
  },
  {
    year: "1926",
    title: "1926",
    photo: "photo-generic",
    text: ["Em 1926, foi criada a Guarda Civil de São Paulo, instituição auxiliar da Força Pública, sem o caráter militar desta."]
  },
  {
    year: "1970",
    title: "1970",
    photo: "photo-generic",
    text: ["Com a reorganização das forças de segurança, a Polícia Militar do Estado de São Paulo assume a configuração moderna de policiamento ostensivo e preservação da ordem pública."]
  },
  {
    year: "2006",
    title: "2006",
    photo: "photo-2006",
    text: [
      "É mês de maio. No dia das mães, inicia-se um movimento criminoso em São Paulo cujo alvo são os servidores das forças de segurança: Polícia Militar, Polícia Civil e Guarda Municipal.",
      "Foram várias vítimas de violência gratuita e cruel. A alta veiculação dos fatos na mídia provocou uma onda de boatos e insegurança na capital e em todo o Estado de São Paulo.",
      "As polícias trabalharam incessantemente na busca de soluções e na extinção da crise estabelecida.",
      "A grandeza da Instituição ficou evidente pela união e pelo esforço dos policiais para restabelecer a ordem. Destaca-se também a Comunicação Social na reconquista da sensação de segurança, mantendo a mídia e a população informadas."
    ]
  },
  {
    year: "2007",
    title: "2007",
    photo: "photo-2007",
    text: [
      "Acidente nas obras do Metrô.",
      "Em 12 de janeiro de 2007, um desmoronamento no canteiro de obras da expansão do Metrô de São Paulo provocou a abertura de uma cratera de 80 metros de diâmetro às margens da Marginal Pinheiros.",
      "O acidente ocorreu no local onde estava sendo construída a Estação Pinheiros, por onde passaria a Linha 4-Amarela.",
      "Equipes de resgate do Corpo de Bombeiros e policiais militares trabalharam ininterruptamente para localizar sete pessoas que teriam sido soterradas no desabamento.",
      "Mais uma vez a Polícia Militar e o seu Corpo de Bombeiros participaram de um fato que marcaria para sempre o cotidiano de tantos paulistanos."
    ]
  }
];

let currentIndex = 0;

function renderEvent(index) {
  currentIndex = index;
  const event = events[index];

  document.getElementById("eventTitle").textContent = event.title;
  document.getElementById("eventText").innerHTML = event.text.map(p => `<p>${p}</p>`).join("");

  const img = document.getElementById("eventImage");
  img.className = "fake-photo " + event.photo;

  document.querySelectorAll(".timeline .dot").forEach(dot => {
    dot.classList.toggle("active", dot.dataset.year === event.year);
  });
}

function nextEvent() {
  renderEvent((currentIndex + 1) % events.length);
}

function prevEvent() {
  renderEvent((currentIndex - 1 + events.length) % events.length);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".timeline .dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = events.findIndex(event => event.year === dot.dataset.year);
      if (index >= 0) renderEvent(index);
    });
  });
});
