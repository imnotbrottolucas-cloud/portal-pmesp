const events=[
{year:"1831",title:"Criação do Corpo de Guardas Municipais Permanentes",images:["historia-1831-1.png","historia-1831-2.png"],text:[
"Em 15 de dezembro de 1831, o então Presidente da Província de São Paulo, Brigadeiro Rafael Tobias de Aguiar, criou o Corpo de Guardas Municipais Permanentes, instituição que daria origem à atual Polícia Militar do Estado de São Paulo.",
"A nova força foi criada com a missão de manter a ordem pública, garantir a segurança da população e apoiar as autoridades provinciais em um período de profundas transformações políticas e sociais no Brasil.",
"O efetivo inicial era composto por 130 homens, sendo 100 integrantes da Infantaria e 30 da Cavalaria. Esse grupo ficou conhecido como os Cento e Trinta de Trinta e Um, tornando-se símbolo da origem da Corporação.",
"A organização possuía disciplina militar, estrutura hierárquica definida e treinamento voltado para o cumprimento das atribuições de segurança pública. Ao longo das décadas seguintes, acompanhou o crescimento do Estado de São Paulo."
]},
{year:"1910",title:"Criação da Academia de Polícia Militar",images:["historia-1910-1.png"],text:[
"O início do século XX marcou um período de modernização e fortalecimento da Força Pública do Estado de São Paulo.",
"Buscando aprimorar a formação de seus integrantes, foi criada em 1910 a instituição que posteriormente se tornaria a Academia de Polícia Militar do Barro Branco.",
"A criação de um centro especializado de formação representou importante avanço para a profissionalização dos futuros oficiais, reunindo disciplinas militares, técnicas, jurídicas, administrativas e de liderança.",
"Ao longo de sua história, a Academia formou milhares de oficiais que contribuíram para o desenvolvimento da Polícia Militar paulista."
]},
{year:"1950",title:"Expansão e Modernização da Força Pública",images:["historia-1950-1.png","historia-1950-2.png"],text:[
"Durante a década de 1950, a Força Pública do Estado de São Paulo viveu um período de expansão institucional e modernização operacional.",
"O crescimento populacional e urbano exigiu atuação cada vez mais especializada das forças de segurança, impulsionando investimentos em treinamento, equipamentos e infraestrutura.",
"Novas técnicas de policiamento foram incorporadas à rotina operacional, ampliando a capacidade de resposta da instituição diante das demandas da sociedade paulista.",
"Essas transformações consolidaram a Força Pública como uma das mais bem estruturadas corporações estaduais do país."
]},
{year:"1970",title:"Criação da Polícia Militar do Estado de São Paulo",images:["historia-1970-1.png"],text:[
"O ano de 1970 representa um dos marcos mais importantes da história da segurança pública paulista.",
"Por meio da unificação da Força Pública do Estado de São Paulo com a Guarda Civil, foi criada a atual Polícia Militar do Estado de São Paulo.",
"A fusão reuniu tradições históricas distintas, combinando a experiência operacional da Força Pública com a atuação urbana desenvolvida pela Guarda Civil.",
"A partir desse momento, a Polícia Militar iniciou um processo contínuo de modernização, crescimento e especialização, consolidando sua missão de policiamento ostensivo e preservação da ordem pública."
]},
{year:"2007",title:"Atuação em Grandes Emergências",images:["historia-2007-1.png","historia-2007-2.png"],text:[
"Em janeiro de 2007, a Polícia Militar participou de uma das maiores operações de resposta a emergências da história recente do Estado de São Paulo.",
"O acidente ocorreu durante as obras da Linha 4 do Metrô, na região de Pinheiros, exigindo atuação integrada de diversos órgãos públicos.",
"A atuação da Corporação envolveu isolamento da área, controle de trânsito, apoio às equipes de resgate, proteção da população e coordenação com órgãos estaduais e municipais.",
"O episódio evidenciou a importância da preparação técnica dos policiais militares para atuar também em desastres, acidentes de grandes proporções e ações de defesa civil."
]},
{year:"2026",title:"Tradição, Tecnologia e Proximidade com a Sociedade",images:["historia-2026-1.png","historia-2026-2.png"],text:[
"Ao completar quase dois séculos de história, a Polícia Militar do Estado de São Paulo mantém seu compromisso permanente com a proteção da sociedade, a preservação da ordem pública e a valorização da vida.",
"A Corporação investe continuamente em tecnologia, inteligência policial, capacitação profissional e modernização dos processos operacionais.",
"Sistemas digitais, equipamentos avançados, centros de treinamento especializados e novas metodologias de policiamento reforçam a eficiência das atividades desenvolvidas diariamente pelos policiais militares.",
"Sem abandonar suas tradições históricas e seus valores institucionais, a Polícia Militar segue preparada para enfrentar os desafios contemporâneos da segurança pública."
]}
];

let currentIndex=0;
let currentPhotoIndex=0;
let historyPhotoTimer=null;

function renderEvent(i){
  if(!document.getElementById("eventTitle")) return;
  currentIndex=i;
  currentPhotoIndex=0;
  const e=events[i];
  document.getElementById("eventTitle").textContent=e.title;
  document.getElementById("eventText").innerHTML=e.text.map(p=>`<p>${p}</p>`).join("");
  document.querySelectorAll(".timeline .dot").forEach(d=>d.classList.toggle("active",d.dataset.year===e.year));
  renderHistoryPhoto();
  restartHistoryTimer();
}

function renderHistoryPhoto(){
  const img=document.getElementById("eventImage");
  if(!img) return;
  const e=events[currentIndex];
  img.src="assets/historia/"+e.images[currentPhotoIndex];
  img.alt=e.title;
  const counter=document.getElementById("photoCounter");
  if(counter) counter.textContent=(currentPhotoIndex+1)+" de "+e.images.length;
  const dots=document.getElementById("historyPhotoDots");
  if(dots){
    dots.innerHTML="";
    e.images.forEach((_,idx)=>{
      const s=document.createElement("span");
      if(idx===currentPhotoIndex) s.classList.add("dark");
      s.onclick=()=>{currentPhotoIndex=idx;renderHistoryPhoto();restartHistoryTimer();};
      dots.appendChild(s);
    });
  }
}

function nextHistoryPhoto(){
  const e=events[currentIndex];
  currentPhotoIndex=(currentPhotoIndex+1)%e.images.length;
  renderHistoryPhoto();
  restartHistoryTimer();
}

function prevHistoryPhoto(){
  const e=events[currentIndex];
  currentPhotoIndex=(currentPhotoIndex-1+e.images.length)%e.images.length;
  renderHistoryPhoto();
  restartHistoryTimer();
}

function restartHistoryTimer(){
  if(historyPhotoTimer) clearInterval(historyPhotoTimer);
  historyPhotoTimer=setInterval(()=>{
    const e=events[currentIndex];
    if(e.images.length>1) nextHistoryPhoto();
  },5000);
}

function nextEvent(){renderEvent((currentIndex+1)%events.length)}
function prevEvent(){renderEvent((currentIndex-1+events.length)%events.length)}

document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".timeline .dot").forEach(d=>d.addEventListener("click",()=>{
    const i=events.findIndex(e=>e.year===d.dataset.year);
    if(i>=0) renderEvent(i);
  }));
  renderEvent(0);
});


const ranks=[
{name:"Comandante Geral - Coronel PM",category:"Oficiais Superiores",img:"insignia-01.png"},
{name:"Coronel PM",category:"Oficiais Superiores",img:"insignia-02.png"},
{name:"Tenente Coronel PM",category:"Oficiais Superiores",img:"insignia-03.png"},
{name:"Major PM",category:"Oficiais Superiores",img:"insignia-04.png"},
{name:"Capitão PM",category:"Oficial Intermediário",img:"insignia-05.png"},
{name:"1º Tenente PM",category:"Oficial Subalterno",img:"insignia-06.png"},
{name:"2º Tenente PM",category:"Oficial Subalterno",img:"insignia-07.png"},
{name:"Aspirante a Oficial PM",category:"Praça Especial",img:"insignia-08.png"},
{name:"Aluno Oficial PM - 3º Ano",category:"Aluno Oficial",img:"insignia-09.png"},
{name:"Aluno Oficial PM - 2º Ano",category:"Aluno Oficial",img:"insignia-10.png"},
{name:"Aluno Oficial PM - 1º Ano",category:"Aluno Oficial",img:"insignia-11.png"},
{name:"Aluno CSTAPM",category:"Aluno",img:"insignia-12.png"},
{name:"Subtenente PM",category:"Praça",img:"insignia-13.png"},
{name:"1º Sargento PM",category:"Praça",img:"insignia-14.png"},
{name:"2º Sargento PM",category:"Praça",img:"insignia-15.png"},
{name:"3º Sargento PM",category:"Praça",img:"insignia-16.png"},
{name:"Aluno Sargento PM",category:"Praça",img:"insignia-17.png"},
{name:"Cabo PM",category:"Praça",img:"insignia-18.png"},
{name:"Soldado PM",category:"Praça",img:"insignia-19.png"}
];

let rankIndex=0;
function renderRank(i){
  if(!document.getElementById("rankImage")) return;
  rankIndex=i;
  const r=ranks[i];
  const img=document.getElementById("rankImage");
  img.src="assets/"+r.img;
  img.alt=r.name;
  img.onerror=function(){this.onerror=null;this.src=r.img;};
  document.getElementById("rankName").textContent=r.name;
  document.getElementById("rankCategory").textContent=r.category;
  const counter=document.getElementById("rankCounter");
  if(counter) counter.textContent=(i+1)+" de "+ranks.length;
  document.querySelectorAll(".rank-dot").forEach((d,idx)=>d.classList.toggle("active",idx===i));
}
function nextRank(){renderRank((rankIndex+1)%ranks.length)}
function prevRank(){renderRank((rankIndex-1+ranks.length)%ranks.length)}

document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".timeline .dot").forEach(d=>d.addEventListener("click",()=>{
    const i=events.findIndex(e=>e.year===d.dataset.year);
    if(i>=0) renderEvent(i);
  }));

  const dots=document.getElementById("rankDots");
  if(dots){
    ranks.forEach((r,i)=>{
      const b=document.createElement("button");
      b.className="rank-dot"+(i===0?" active":"");
      b.title=r.name;
      b.onclick=()=>renderRank(i);
      dots.appendChild(b);
    });
    renderRank(0);
  }

  document.addEventListener("keydown",(e)=>{
    if(document.getElementById("rankImage")){
      if(e.key==="ArrowRight") nextRank();
      if(e.key==="ArrowLeft") prevRank();
    }
  });
});
