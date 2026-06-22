const events=[
{year:"1830",title:"O início ... 1830",photo:"photo-1830",text:["Nas primeiras décadas do século XIX, São Paulo ainda era marcada pela presença da Faculdade de Direito.","O ato de criação ocorreu em 15 de dezembro de 1831, com efetivo inicial de 100 homens a pé e 30 a cavalo."]},
{year:"1857",title:"1857",photo:"photo-1857",text:["Em 7 de abril de 1857, foi criada a Banda de Música do Corpo Policial Permanente."]},
{year:"1864",title:"1864",photo:"photo-generic",text:["Período de reorganização institucional."]},
{year:"1880",title:"1880",photo:"photo-generic",text:["A Corporação segue seu processo de consolidação."]},
{year:"1891",title:"1891",photo:"photo-generic",text:["Com a reorganização republicana, a força policial paulista passa por adaptações."]},
{year:"1910",title:"1910",photo:"photo-generic",text:["Criação da estrutura que daria origem à Academia de Polícia Militar do Barro Branco."]},
{year:"1926",title:"1926",photo:"photo-generic",text:["Em 1926, foi criada a Guarda Civil de São Paulo."]},
{year:"1970",title:"1970",photo:"photo-generic",text:["A Polícia Militar assume configuração moderna de policiamento ostensivo."]},
{year:"2006",title:"2006",photo:"photo-2006",text:["No mês de maio, iniciou-se um movimento criminoso em São Paulo cujo alvo foram servidores das forças de segurança."]},
{year:"2007",title:"2007",photo:"photo-2007",text:["Em 12 de janeiro de 2007, ocorreu o acidente nas obras do Metrô de São Paulo."]}
];
let currentIndex=0;
function renderEvent(i){currentIndex=i;const e=events[i];document.getElementById("eventTitle").textContent=e.title;document.getElementById("eventText").innerHTML=e.text.map(p=>`<p>${p}</p>`).join("");document.getElementById("eventImage").className="fake-photo "+e.photo;document.querySelectorAll(".timeline .dot").forEach(d=>d.classList.toggle("active",d.dataset.year===e.year));}
function nextEvent(){renderEvent((currentIndex+1)%events.length)}function prevEvent(){renderEvent((currentIndex-1+events.length)%events.length)}
document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".timeline .dot").forEach(d=>d.addEventListener("click",()=>{const i=events.findIndex(e=>e.year===d.dataset.year);if(i>=0)renderEvent(i)}));});
