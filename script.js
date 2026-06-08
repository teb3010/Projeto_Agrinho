// =========================
// PRODUTOS
// =========================

const products = [

{
    id:1,
    name:"Alface",
    category:"Hortaliça",
    producer:"Sítio Bela Vista",
    stock:25,
    price:"R$ 3,00"
},

{
    id:2,
    name:"Couve",
    category:"Hortaliça",
    producer:"Sítio Bela Vista",
    stock:18,
    price:"R$ 4,00"
},

{
    id:3,
    name:"Cebolinha",
    category:"Hortaliça",
    producer:"Sítio Bela Vista",
    stock:15,
    price:"R$ 2,50"
},

{
    id:4,
    name:"Rúcula",
    category:"Hortaliça",
    producer:"Sítio Bela Vista",
    stock:12,
    price:"R$ 3,50"
},

{
    id:5,
    name:"Cenoura",
    category:"Legume",
    producer:"Sítio Bela Vista",
    stock:20,
    price:"R$ 5,00"
},

{
    id:6,
    name:"Batata-doce",
    category:"Legume",
    producer:"Sítio Bela Vista",
    stock:22,
    price:"R$ 6,00"
},

{
    id:7,
    name:"Mandioca",
    category:"Legume",
    producer:"Sítio Bela Vista",
    stock:15,
    price:"R$ 7,00"
},

{
    id:8,
    name:"Beterraba",
    category:"Legume",
    producer:"Sítio Bela Vista",
    stock:10,
    price:"R$ 5,50"
},

{
    id:9,
    name:"Banana",
    category:"Fruta",
    producer:"Chácara Santa Clara",
    stock:30,
    price:"R$ 7,00"
},

{
    id:10,
    name:"Laranja",
    category:"Fruta",
    producer:"Chácara Santa Clara",
    stock:28,
    price:"R$ 6,00"
},

{
    id:11,
    name:"Morango",
    category:"Fruta",
    producer:"Chácara Santa Clara",
    stock:12,
    price:"R$ 10,00"
},

{
    id:12,
    name:"Bergamota",
    category:"Fruta",
    producer:"Chácara Santa Clara",
    stock:20,
    price:"R$ 8,00"
},

{
    id:13,
    name:"Limão",
    category:"Fruta",
    producer:"Chácara Santa Clara",
    stock:25,
    price:"R$ 4,00"
},

{
    id:14,
    name:"Leite Fresco",
    category:"Laticínio",
    producer:"Fazenda Recanto Verde",
    stock:18,
    price:"R$ 8,00"
},

{
    id:15,
    name:"Queijo Artesanal",
    category:"Laticínio",
    producer:"Fazenda Recanto Verde",
    stock:10,
    price:"R$ 22,00"
},

{
    id:16,
    name:"Doce de Leite",
    category:"Laticínio",
    producer:"Fazenda Recanto Verde",
    stock:15,
    price:"R$ 12,00"
},

{
    id:17,
    name:"Ovos Caipiras",
    category:"Granja",
    producer:"Agropecuária Dois Irmãos",
    stock:30,
    price:"R$ 14,00"
},

{
    id:18,
    name:"Pão Caseiro",
    category:"Artesanal",
    producer:"Pães da Dona Helena",
    stock:15,
    price:"R$ 10,00"
},

{
    id:19,
    name:"Macarrão Caseiro",
    category:"Artesanal",
    producer:"Pães da Dona Helena",
    stock:12,
    price:"R$ 15,00"
},

{
    id:20,
    name:"Bolachas Artesanais",
    category:"Artesanal",
    producer:"Pães da Dona Helena",
    stock:20,
    price:"R$ 9,00"
},

{
    id:21,
    name:"Cuca Caseira",
    category:"Artesanal",
    producer:"Pães da Dona Helena",
    stock:10,
    price:"R$ 18,00"
},

{
    id:22,
    name:"Geleia de Morango",
    category:"Conserva",
    producer:"Sabor da Terra",
    stock:8,
    price:"R$ 14,00"
},

{
    id:23,
    name:"Geleia de Goiaba",
    category:"Conserva",
    producer:"Sabor da Terra",
    stock:8,
    price:"R$ 14,00"
},

{
    id:24,
    name:"Geleia de Amora",
    category:"Conserva",
    producer:"Sabor da Terra",
    stock:8,
    price:"R$ 14,00"
},

{
    id:25,
    name:"Pepino em Conserva",
    category:"Conserva",
    producer:"Sabor da Terra",
    stock:10,
    price:"R$ 12,00"
}

];

// =========================
// RENDERIZA PRODUTOS
// =========================

const container =
document.getElementById("productsContainer");

if(container){

products.forEach(product=>{

container.innerHTML += `

<div class="product-card">

<div class="product-image"></div>

<div class="product-content">

<h3>${product.name}</h3>

<p><strong>Categoria:</strong> ${product.category}</p>

<p><strong>Produtor:</strong> ${product.producer}</p>

<p><strong>Preço:</strong> ${product.price}</p>

<p><strong>Estoque:</strong> ${product.stock}</p>

<button onclick="reserveProduct('${product.name}')">

Reservar

</button>

</div>

</div>

`;

});

}

// =========================
// LOGIN
// =========================

const loginBtn =
document.getElementById("loginBtn");

const loginModal =
document.getElementById("loginModal");

const saveUser =
document.getElementById("saveUser");

if(loginBtn){

loginBtn.addEventListener("click",()=>{

loginModal.style.display="flex";

});

}

if(saveUser){

saveUser.addEventListener("click",()=>{

const username =
document.getElementById("username").value;

localStorage.setItem(
"user",
username
);

alert(
`Bem-vindo(a), ${username}!`
);

loginModal.style.display="none";

});

}

// =========================
// RESERVA
// =========================

function reserveProduct(product){

let reservas =
JSON.parse(
localStorage.getItem("reservas")
) || [];

reservas.push(product);

localStorage.setItem(
"reservas",
JSON.stringify(reservas)
);

alert(
`${product} reservado com sucesso!`
);

}

// =========================
// PRÓXIMA FEIRA
// =========================

function nextFair(){

const today = new Date();

let next = new Date(today);

const day =
today.getDay();

if(day <= 3){

next.setDate(
today.getDate() + (3-day)
);

}else{

next.setDate(
today.getDate() + ((6-day)+7)%7
);

}

return next.toLocaleDateString(
'pt-BR'
);

}

const fairDate =
document.getElementById("fairDate");

if(fairDate){

fairDate.innerText =
nextFair();

}

// =========================
// DARK MODE
// =========================

const darkModeBtn =
document.getElementById("darkModeBtn");

if(darkModeBtn){

darkModeBtn.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark"
);

}
);

}

// =========================
// TAMANHO DA FONTE
// =========================

let currentFont = 16;

const increase =
document.getElementById("increaseFont");

const decrease =
document.getElementById("decreaseFont");

if(increase){

increase.addEventListener(
"click",
()=>{

currentFont += 1;

document.documentElement
.style.setProperty(
"--font-size",
`${currentFont}px`
);

});

}

if(decrease){

decrease.addEventListener(
"click",
()=>{

currentFont -= 1;

document.documentElement
.style.setProperty(
"--font-size",
`${currentFont}px`
);

});

}

// =========================
// LEITURA POR VOZ
// =========================

const readPage =
document.getElementById("readPage");

const stopReading =
document.getElementById("stopReading");

if(readPage){

readPage.addEventListener(
"click",
()=>{

const speech =
new SpeechSynthesisUtterance(
document.body.innerText
);

speech.lang = "pt-BR";

speechSynthesis.speak(
speech
);

});

}

if(stopReading){

stopReading.addEventListener(
"click",
()=>{

speechSynthesis.cancel();

});

}

// =========================
// COMENTÁRIOS
// =========================

const commentBtn =
document.getElementById("commentBtn");

if(commentBtn){

commentBtn.addEventListener(
"click",
()=>{

const comment =
document.getElementById(
"commentInput"
).value;

const commentsList =
document.getElementById(
"commentsList"
);

commentsList.innerHTML +=
`<p>💬 ${comment}</p>`;

});

}

// =========================
// AGRO IA
// =========================

const chatToggle =
document.getElementById(
"chatToggle"
);

const chatWindow =
document.getElementById(
"chatWindow"
);

if(chatToggle){

chatToggle.addEventListener(
"click",
()=>{

chatWindow.style.display =
chatWindow.style.display ===
"flex"
? "none"
: "flex";

});

}

const sendMessage =
document.getElementById(
"sendMessage"
);

if(sendMessage){

sendMessage.addEventListener(
"click",
()=>{

const input =
document.getElementById(
"userMessage"
);

const text =
input.value.toLowerCase();

const messages =
document.getElementById(
"chatMessages"
);

let response =
"Posso ajudar com produtos, reservas, produtores ou informações da feira.";

if(text.includes("feira")){

response =
"A feira acontece na Praça da Igreja Sant'Ana.";

}

if(text.includes("reserva")){

response =
"Escolha um produto e clique em Reservar.";

}

if(text.includes("produtor")){

response =
"Temos produtores de hortaliças, frutas, laticínios e artesanais.";

}

if(text.includes("ia")){

response =
"A Inteligência Artificial ajuda a melhorar a produtividade e reduzir desperdícios.";

}

messages.innerHTML +=
`<p><strong>Você:</strong> ${input.value}</p>`;

messages.innerHTML +=
`<p><strong>AgroIA:</strong> ${response}</p>`;

input.value = "";

});

}

// =========================
// SEMINÁRIO
// =========================

const seminarioForm =
document.getElementById(
"seminarioForm"
);

if(seminarioForm){

seminarioForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

alert(
"Inscrição realizada com sucesso!"
);

});

}