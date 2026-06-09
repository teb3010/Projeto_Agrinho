/* ==================================
   FEIRA DE PITANGA V2
   SCRIPT.JS - PARTE 1
================================== */

// ========================
// PRODUTOS
// ========================

const defaultProducts = [

{
id:1,
name:"Alface",
category:"Hortaliça",
producer:"Sítio Bela Vista",
price:3,
stock:25,
image:"assets/images/alface.jpg"
},

{
id:2,
name:"Couve",
category:"Hortaliça",
producer:"Sítio Bela Vista",
price:4,
stock:18,
image:"assets/images/couve.jpg"
},

{
id:3,
name:"Cebolinha",
category:"Hortaliça",
producer:"Sítio Bela Vista",
price:2.5,
stock:15,
image:"assets/images/cebolinha.jpg"
},

{
id:4,
name:"Rúcula",
category:"Hortaliça",
producer:"Sítio Bela Vista",
price:3.5,
stock:12,
image:"assets/images/rucula.jpg"
},

{
id:5,
name:"Cenoura",
category:"Legume",
producer:"Sítio Bela Vista",
price:5,
stock:20,
image:"assets/images/cenoura.jpg"
},

{
id:6,
name:"Batata-doce",
category:"Legume",
producer:"Sítio Bela Vista",
price:6,
stock:20,
image:"assets/images/batata-doce.jpg"
},

{
id:7,
name:"Mandioca",
category:"Legume",
producer:"Sítio Bela Vista",
price:7,
stock:15,
image:"assets/images/mandioca.jpg"
},

{
id:8,
name:"Beterraba",
category:"Legume",
producer:"Sítio Bela Vista",
price:5.5,
stock:10,
image:"assets/images/beterraba.jpg"
},

{
id:9,
name:"Banana",
category:"Fruta",
producer:"Chácara Santa Clara",
price:7,
stock:30,
image:"assets/images/banana.jpg"
},

{
id:10,
name:"Laranja",
category:"Fruta",
producer:"Chácara Santa Clara",
price:6,
stock:25,
image:"assets/images/laranja.jpg"
},

{
id:11,
name:"Morango",
category:"Fruta",
producer:"Chácara Santa Clara",
price:10,
stock:12,
image:"assets/images/morango.jpg"
},

{
id:12,
name:"Bergamota",
category:"Fruta",
producer:"Chácara Santa Clara",
price:8,
stock:20,
image:"assets/images/bergamota.jpg"
},

{
id:13,
name:"Limão",
category:"Fruta",
producer:"Chácara Santa Clara",
price:4,
stock:22,
image:"assets/images/limao.jpg"
},

{
id:14,
name:"Leite Fresco",
category:"Laticínio",
producer:"Fazenda Recanto Verde",
price:8,
stock:18,
image:"assets/images/leite.jpg"
},

{
id:15,
name:"Queijo Artesanal",
category:"Laticínio",
producer:"Fazenda Recanto Verde",
price:22,
stock:10,
image:"assets/images/queijo.jpg"
},

{
id:16,
name:"Doce de Leite",
category:"Laticínio",
producer:"Fazenda Recanto Verde",
price:12,
stock:15,
image:"assets/images/doce-de-leite.jpg"
},

{
id:17,
name:"Ovos Caipiras",
category:"Granja",
producer:"Agropecuária Dois Irmãos",
price:14,
stock:30,
image:"assets/images/ovos.jpg"
},

{
id:18,
name:"Pão Caseiro",
category:"Artesanal",
producer:"Pães da Dona Helena",
price:10,
stock:15,
image:"assets/images/pao-caseiro.jpg"
},

{
id:19,
name:"Macarrão Caseiro",
category:"Artesanal",
producer:"Pães da Dona Helena",
price:15,
stock:12,
image:"assets/images/macarrao.jpg"
},

{
id:20,
name:"Bolachas Artesanais",
category:"Artesanal",
producer:"Pães da Dona Helena",
price:9,
stock:20,
image:"assets/images/bolachas.jpg"
},

{
id:21,
name:"Cuca Caseira",
category:"Artesanal",
producer:"Pães da Dona Helena",
price:18,
stock:10,
image:"assets/images/cuca.jpg"
},

{
id:22,
name:"Geleia de Morango",
category:"Conserva",
producer:"Sabor da Terra",
price:14,
stock:8,
image:"assets/images/geleia-morango.jpg"
},

{
id:23,
name:"Geleia de Goiaba",
category:"Conserva",
producer:"Sabor da Terra",
price:14,
stock:8,
image:"assets/images/geleia-goiaba.jpg"
},

{
id:24,
name:"Geleia de Amora",
category:"Conserva",
producer:"Sabor da Terra",
price:14,
stock:8,
image:"assets/images/geleia-amora.jpg"
},

{
id:25,
name:"Pepino em Conserva",
category:"Conserva",
producer:"Sabor da Terra",
price:12,
stock:10,
image:"assets/images/pepino-conserva.jpg"
}

];

// ========================
// ESTOQUE PERSISTENTE
// ========================

let products =
JSON.parse(
localStorage.getItem("products")
);

if(!products){

products = defaultProducts;

localStorage.setItem(
"products",
JSON.stringify(products)
);

}

// ========================
// CARRINHO
// ========================

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

// ========================
// RENDERIZA PRODUTOS
// ========================

function renderProducts(){

const container =
document.getElementById(
"productsContainer"
);

if(!container) return;

container.innerHTML = "";

products.forEach(product=>{

let stockClass = "stock";

if(product.stock <= 5){

stockClass = "stock low";

}

if(product.stock === 0){

stockClass = "stock empty";

}

container.innerHTML += `

<div class="product-card">

<img
src="${product.image}"
alt="${product.name}"
class="product-image">

<div class="product-content">

<h3>${product.name}</h3>

<p><strong>Categoria:</strong> ${product.category}</p>

<p><strong>Produtor:</strong> ${product.producer}</p>

<p class="product-price">
R$ ${product.price.toFixed(2)}
</p>

<span class="${stockClass}">
Estoque: ${product.stock}
</span>

<button
class="reserve-btn"
onclick="reserveProduct(${product.id})"
${product.stock === 0 ? "disabled" : ""}>

${product.stock === 0 ? "Esgotado" : "Reservar"}

</button>

</div>

</div>

`;

});

}

// ========================
// RESERVAR PRODUTO
// ========================

function reserveProduct(id){

const product =
products.find(
p => p.id === id
);

if(!product) return;

if(product.stock <= 0){

alert("Produto esgotado.");

return;

}

product.stock--;

cart.push({

id:product.id,
name:product.name,
price:product.price

});

localStorage.setItem(
"products",
JSON.stringify(products)
);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderProducts();

updateCartCount();

alert(
`${product.name} adicionado ao carrinho.`
);

}

// ========================
// CONTADOR DO CARRINHO
// ========================

function updateCartCount(){

const count =
document.getElementById(
"cartCount"
);

if(count){

count.textContent =
cart.length;

}

}

// ========================
// INICIALIZAÇÃO
// ========================

renderProducts();

updateCartCount();

/* ==================================
   FEIRA DE PITANGA V2
   SCRIPT.JS - PARTE 2
================================== */

// ========================
// ELEMENTOS
// ========================

const cartBtn =
document.getElementById("cartBtn");

const cartSidebar =
document.getElementById("cartSidebar");

const closeCart =
document.getElementById("closeCart");

const cartItems =
document.getElementById("cartItems");

const cartTotal =
document.getElementById("cartTotal");

const finishReservation =
document.getElementById("finishReservation");

// ========================
// ABRIR CARRINHO
// ========================

if(cartBtn){

cartBtn.addEventListener(
"click",
()=>{

cartSidebar.classList.add(
"active"
);

renderCart();

});

}

// ========================
// FECHAR CARRINHO
// ========================

if(closeCart){

closeCart.addEventListener(
"click",
()=>{

cartSidebar.classList.remove(
"active"
);

});

}

// ========================
// RENDERIZA CARRINHO
// ========================

function renderCart(){

if(!cartItems) return;

cartItems.innerHTML = "";

if(cart.length === 0){

cartItems.innerHTML = `

<div class="cart-item">

<p>
Nenhum produto reservado.
</p>

</div>

`;

cartTotal.textContent = "0";

return;

}

cart.forEach((item,index)=>{

cartItems.innerHTML += `

<div class="cart-item">

<h4>${item.name}</h4>

<p>

Preço:
R$ ${item.price.toFixed(2)}

</p>

<button
onclick="removeFromCart(${index})">

Remover

</button>

</div>

`;

});

cartTotal.textContent =
cart.length;

}

// ========================
// REMOVER ITEM
// ========================

function removeFromCart(index){

const item = cart[index];

const product =
products.find(
p => p.id === item.id
);

if(product){

product.stock++;

localStorage.setItem(
"products",
JSON.stringify(products)
);

}

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderProducts();

renderCart();

updateCartCount();

}

// ========================
// FINALIZAR RESERVA
// ========================

if(finishReservation){

finishReservation.addEventListener(
"click",
()=>{

if(cart.length === 0){

alert(
"Seu carrinho está vazio."
);

return;

}

const user =
localStorage.getItem("user");

if(!user){

alert(
"Faça login para concluir sua reserva."
);

return;

}

alert(

`Reserva realizada com sucesso!

Cliente: ${user}

Itens reservados:
${cart.length}

Retirada:
Praça da Igreja Sant'Ana`

);

cart = [];

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

updateCartCount();

});

}

// ========================
// LOGIN
// ========================

const loginBtn =
document.getElementById(
"loginBtn"
);

const loginModal =
document.getElementById(
"loginModal"
);

const saveUser =
document.getElementById(
"saveUser"
);

const usernameInput =
document.getElementById(
"username"
);

// ========================
// MOSTRA USUÁRIO
// ========================

function loadUser(){

const user =
localStorage.getItem(
"user"
);

if(user && loginBtn){

loginBtn.innerHTML =
`👤 ${user}`;

}

}

loadUser();

// ========================
// ABRIR LOGIN
// ========================

if(loginBtn){

loginBtn.addEventListener(
"click",
()=>{

const user =
localStorage.getItem(
"user"
);

if(user){

const sair =
confirm(

`Você está logado como:

${user}

Deseja sair?`

);

if(sair){

localStorage.removeItem(
"user"
);

location.reload();

}

return;

}

loginModal.classList.add(
"active"
);

});

}

// ========================
// SALVAR USUÁRIO
// ========================

if(saveUser){

saveUser.addEventListener(
"click",
()=>{

const name =
usernameInput.value.trim();

if(name === ""){

alert(
"Digite seu nome."
);

return;

}

localStorage.setItem(
"user",
name
);

loginModal.classList.remove(
"active"
);

loadUser();

alert(
`Bem-vindo(a), ${name}!`
);

});

}

// ========================
// FECHAR MODAL
// ========================

window.addEventListener(
"click",
(e)=>{

if(e.target === loginModal){

loginModal.classList.remove(
"active"
);

}

});

/* ==================================
   FEIRA DE PITANGA V2
   SCRIPT.JS - PARTE 3
================================== */

// ========================
// COMENTÁRIOS
// ========================

const commentBtn =
document.getElementById(
"commentBtn"
);

const commentsList =
document.getElementById(
"commentsList"
);

function loadComments(){

if(!commentsList) return;

const comments =
JSON.parse(
localStorage.getItem(
"comments"
)
) || [];

commentsList.innerHTML = "";

comments.forEach(comment=>{

commentsList.innerHTML += `

<div class="comment-card">

<strong>
${comment.user}
</strong>

<p>
${comment.text}
</p>

<small>
${comment.date}
</small>

</div>

`;

});

}

if(commentBtn){

commentBtn.addEventListener(
"click",
()=>{

const input =
document.getElementById(
"commentInput"
);

const text =
input.value.trim();

if(text === ""){

alert(
"Digite um comentário."
);

return;

}

const user =
localStorage.getItem(
"user"
) || "Visitante";

const comments =
JSON.parse(
localStorage.getItem(
"comments"
)
) || [];

comments.unshift({

user:user,

text:text,

date:new Date()
.toLocaleString(
"pt-BR"
)

});

localStorage.setItem(
"comments",
JSON.stringify(comments)
);

input.value = "";

loadComments();

});

}

loadComments();

// ========================
// PRÓXIMA FEIRA
// ========================

function getNextFairDate(){

const today =
new Date();

let next =
new Date(today);

const day =
today.getDay();

/*
0 Domingo
1 Segunda
2 Terça
3 Quarta
4 Quinta
5 Sexta
6 Sábado
*/

if(day <= 3){

next.setDate(
today.getDate() +
(3 - day)
);

}else{

next.setDate(
today.getDate() +
((6 - day + 7) % 7)
);

}

return next.toLocaleDateString(
"pt-BR"
);

}

const fairDate =
document.getElementById(
"fairDate"
);

if(fairDate){

fairDate.innerHTML =

`Próxima feira:
<strong>
${getNextFairDate()}
</strong>`;

}

// ========================
// DARK MODE
// ========================

const darkModeBtn =
document.getElementById(
"darkModeBtn"
);

function loadTheme(){

const theme =
localStorage.getItem(
"theme"
);

if(theme === "dark"){

document.body.classList.add(
"dark"
);

}

}

loadTheme();

if(darkModeBtn){

darkModeBtn.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark"
);

if(
document.body.classList.contains(
"dark"
)
){

localStorage.setItem(
"theme",
"dark"
);

}else{

localStorage.setItem(
"theme",
"light"
);

}

});

}

// ========================
// TAMANHO DA FONTE
// ========================

let currentFont =

parseInt(

localStorage.getItem(
"fontSize"
)

) || 16;

document.documentElement
.style.setProperty(
"--font-size",
`${currentFont}px`
);

const increaseFont =
document.getElementById(
"increaseFont"
);

const decreaseFont =
document.getElementById(
"decreaseFont"
);

if(increaseFont){

increaseFont.addEventListener(
"click",
()=>{

currentFont++;

document.documentElement
.style.setProperty(
"--font-size",
`${currentFont}px`
);

localStorage.setItem(
"fontSize",
currentFont
);

});

}

if(decreaseFont){

decreaseFont.addEventListener(
"click",
()=>{

if(currentFont <= 12)
return;

currentFont--;

document.documentElement
.style.setProperty(
"--font-size",
`${currentFont}px`
);

localStorage.setItem(
"fontSize",
currentFont
);

});

}

// ========================
// LEITURA POR VOZ
// ========================

const readPage =
document.getElementById(
"readPage"
);

const stopReading =
document.getElementById(
"stopReading"
);

if(readPage){

readPage.addEventListener(
"click",
()=>{

speechSynthesis.cancel();

const speech =
new SpeechSynthesisUtterance(

document.body.innerText

);

speech.lang = "pt-BR";

speech.rate = 1;

speech.pitch = 1;

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

// ========================
// FORMULÁRIO
// ========================

const seminarioForm =
document.getElementById(
"seminarioForm"
);

if(seminarioForm){

seminarioForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const inputs =
seminarioForm.querySelectorAll(
"input"
);

const cadastro = {

nome:inputs[0].value,
email:inputs[1].value,
cidade:inputs[2].value

};

const inscritos =
JSON.parse(
localStorage.getItem(
"inscritos"
)
) || [];

inscritos.push(cadastro);

localStorage.setItem(
"inscritos",
JSON.stringify(inscritos)
);

alert(

"Cadastro realizado com sucesso!"

);

seminarioForm.reset();

});

}

// ========================
// ATALHOS DE DESENVOLVIMENTO
// ========================

window.resetFeira = function(){

const confirmar =
confirm(

"Resetar estoque, carrinho e comentários?"

);

if(!confirmar)
return;

localStorage.removeItem(
"products"
);

localStorage.removeItem(
"cart"
);

localStorage.removeItem(
"comments"
);

location.reload();

};

// ========================
// INICIALIZAÇÃO FINAL
// ========================

renderProducts();

updateCartCount();

renderCart();

loadComments();

loadUser();

console.log(
"🍒 Feira de Pitanga V2 carregada."
);