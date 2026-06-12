/* ==================================
   FEIRA DE PITANGA V3
   SCRIPT.JS
================================== */

// ========================
// PRODUTOS
// ========================

const defaultProducts = [
    {
        id: 1,
        name: "Alface",
        category: "Hortaliça",
        producer: "Sítio Bela Vista",
        price: 3,
        unit: "unidade",
        stock: 25,
        image: "assets/images/alface.jpg"
    },
    {
        id: 2,
        name: "Couve",
        category: "Hortaliça",
        producer: "Sítio Bela Vista",
        price: 4,
        unit: "maço",
        stock: 18,
        image: "assets/images/couve.jpg"
    },
    {
        id: 3,
        name: "Cebolinha",
        category: "Hortaliça",
        producer: "Sítio Bela Vista",
        price: 2.5,
        unit: "maço",
        stock: 15,
        image: "assets/images/cebolinha.jpg"
    },
    {
        id: 4,
        name: "Rúcula",
        category: "Hortaliça",
        producer: "Sítio Bela Vista",
        price: 3.5,
        unit: "maço",
        stock: 12,
        image: "assets/images/rucula.jpg"
    },
    {
        id: 5,
        name: "Cenoura",
        category: "Legume",
        producer: "Sítio Bela Vista",
        price: 5,
        unit: "kg",
        stock: 20,
        image: "assets/images/cenoura.jpg"
    },
    {
        id: 6,
        name: "Batata-doce",
        category: "Legume",
        producer: "Sítio Bela Vista",
        price: 6,
        unit: "kg",
        stock: 20,
        image: "assets/images/batata-doce.jpg"
    },
    {
        id: 7,
        name: "Mandioca",
        category: "Legume",
        producer: "Sítio Bela Vista",
        price: 7,
        unit: "kg",
        stock: 15,
        image: "assets/images/mandioca.jpg"
    },
    {
        id: 8,
        name: "Beterraba",
        category: "Legume",
        producer: "Sítio Bela Vista",
        price: 5.5,
        unit: "kg",
        stock: 10,
        image: "assets/images/beterraba.jpg"
    },
    {
        id: 9,
        name: "Banana",
        category: "Fruta",
        producer: "Chácara Santa Clara",
        price: 7,
        unit: "kg",
        stock: 30,
        image: "assets/images/banana.jpg"
    },
    {
        id: 10,
        name: "Laranja",
        category: "Fruta",
        producer: "Chácara Santa Clara",
        price: 6,
        unit: "kg",
        stock: 25,
        image: "assets/images/laranja.jpg"
    },
    {
        id: 11,
        name: "Morango",
        category: "Fruta",
        producer: "Chácara Santa Clara",
        price: 10,
        unit: "bandeja",
        stock: 12,
        image: "assets/images/morango.jpg"
    },
    {
        id: 12,
        name: "Bergamota",
        category: "Fruta",
        producer: "Chácara Santa Clara",
        price: 8,
        unit: "kg",
        stock: 20,
        image: "assets/images/bergamota.jpg"
    },
    {
        id: 13,
        name: "Limão",
        category: "Fruta",
        producer: "Chácara Santa Clara",
        price: 4,
        unit: "kg",
        stock: 22,
        image: "assets/images/limao.jpg"
    },
    {
        id: 14,
        name: "Leite Fresco",
        category: "Laticínio",
        producer: "Fazenda Recanto Verde",
        price: 8,
        unit: "litro",
        stock: 18,
        image: "assets/images/leite.jpg"
    },
    {
        id: 15,
        name: "Queijo Artesanal",
        category: "Laticínio",
        producer: "Fazenda Recanto Verde",
        price: 22,
        unit: "peça",
        stock: 10,
        image: "assets/images/queijo.jpg"
    },
    {
        id: 16,
        name: "Doce de Leite",
        category: "Laticínio",
        producer: "Fazenda Recanto Verde",
        price: 12,
        unit: "pote",
        stock: 15,
        image: "assets/images/doce-de-leite.jpg"
    },
    {
        id: 17,
        name: "Ovos Caipiras",
        category: "Granja",
        producer: "Agropecuária Dois Irmãos",
        price: 14,
        unit: "dúzia",
        stock: 30,
        image: "assets/images/ovos.jpg"
    },
    {
        id: 18,
        name: "Pão Caseiro",
        category: "Artesanal",
        producer: "Pães da Dona Helena",
        price: 10,
        unit: "unidade",
        stock: 15,
        image: "assets/images/pao-caseiro.jpg"
    },
    {
        id: 19,
        name: "Macarrão Caseiro",
        category: "Artesanal",
        producer: "Pães da Dona Helena",
        price: 15,
        unit: "pacote",
        stock: 12,
        image: "assets/images/macarrao.jpg"
    },
    {
        id: 20,
        name: "Bolachas Artesanais",
        category: "Artesanal",
        producer: "Pães da Dona Helena",
        price: 9,
        unit: "pacote",
        stock: 20,
        image: "assets/images/bolachas.jpg"
    },
    {
        id: 21,
        name: "Cuca Caseira",
        category: "Artesanal",
        producer: "Pães da Dona Helena",
        price: 18,
        unit: "unidade",
        stock: 10,
        image: "assets/images/cuca.jpg"
    },
    {
        id: 22,
        name: "Geleia de Morango",
        category: "Conserva",
        producer: "Sabor da Terra",
        price: 14,
        unit: "pote",
        stock: 8,
        image: "assets/images/geleia-morango.jpg"
    },
    {
        id: 23,
        name: "Geleia de Goiaba",
        category: "Conserva",
        producer: "Sabor da Terra",
        price: 14,
        unit: "pote",
        stock: 8,
        image: "assets/images/geleia-goiaba.jpg"
    },
    {
        id: 24,
        name: "Geleia de Amora",
        category: "Conserva",
        producer: "Sabor da Terra",
        price: 14,
        unit: "pote",
        stock: 8,
        image: "assets/images/geleia-amora.jpg"
    },
    {
        id: 25,
        name: "Pepino em Conserva",
        category: "Conserva",
        producer: "Sabor da Terra",
        price: 12,
        unit: "pote",
        stock: 10,
        image: "assets/images/pepino-conserva.jpg"
    }
];

// ========================
// FUNÇÕES DE APOIO
// ========================

function cloneDefaultProducts(){
    return defaultProducts.map(product => ({...product}));
}

function formatCurrency(value){
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function escapeHTML(value){
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatISODate(date){
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function getNextFairInfo(){
    const today = new Date();
    const next = new Date(today);
    const day = today.getDay();

    if(day <= 3){
        next.setDate(today.getDate() + (3 - day));
    }else{
        next.setDate(today.getDate() + ((6 - day + 7) % 7));
    }

    return {
        date: next,
        iso: formatISODate(next),
        display: next.toLocaleDateString("pt-BR")
    };
}

function getNextFairDate(){
    return getNextFairInfo().display;
}

function normalizeName(name){
    return name
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase()
        .split(" ")
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}

function getUserKey(name){
    return normalizeName(name)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function getUsers(){
    return JSON.parse(localStorage.getItem("users")) || {};
}

function saveUsers(users){
    localStorage.setItem("users", JSON.stringify(users));
}

function getCurrentUser(){
    const key = localStorage.getItem("currentUser");
    const users = getUsers();

    if(key && users[key]){
        return users[key];
    }

    return null;
}

function cleanExpiredReservations(){
    const today = formatISODate(new Date());
    const users = getUsers();

    Object.keys(users).forEach(key => {
        users[key].reservations = (users[key].reservations || [])
            .filter(reservation => !reservation.fairDate || reservation.fairDate >= today);
    });

    saveUsers(users);
}

function resetFairCycleIfNeeded(){
    const fair = getNextFairInfo();
    const activeFairDate = localStorage.getItem("activeFairDate");

    if(activeFairDate && activeFairDate !== fair.iso){
        localStorage.removeItem("cart");
        localStorage.setItem("products", JSON.stringify(cloneDefaultProducts()));
    }

    localStorage.setItem("activeFairDate", fair.iso);
    cleanExpiredReservations();
}

function loadProducts(){
    const storedProducts = JSON.parse(localStorage.getItem("products"));

    if(!Array.isArray(storedProducts)){
        return cloneDefaultProducts();
    }

    return defaultProducts.map(defaultProduct => {
        const storedProduct = storedProducts.find(product => product.id === defaultProduct.id);

        return {
            ...defaultProduct,
            ...(storedProduct || {}),
            unit: defaultProduct.unit,
            image: defaultProduct.image
        };
    });
}

function saveProducts(){
    localStorage.setItem("products", JSON.stringify(products));
}

function normalizeCartItems(cartItems){
    if(!Array.isArray(cartItems)){
        return [];
    }

    const normalized = [];

    cartItems.forEach(item => {
        const product = defaultProducts.find(defaultProduct => defaultProduct.id === item.id);

        if(!product){
            return;
        }

        const existingItem = normalized.find(cartItem => cartItem.id === item.id);
        const quantity = Number(item.quantity) > 0 ? Number(item.quantity) : 1;

        if(existingItem){
            existingItem.quantity += quantity;
            return;
        }

        normalized.push({
            id: product.id,
            name: product.name,
            price: product.price,
            unit: product.unit,
            quantity: quantity
        });
    });

    return normalized;
}

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartFairDate", getNextFairInfo().iso);
}

function getCartItemsCount(){
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotalPrice(){
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

resetFairCycleIfNeeded();

let products = loadProducts();
let cart = normalizeCartItems(JSON.parse(localStorage.getItem("cart")) || []);

saveProducts();
saveCart();

// ========================
// RENDERIZA PRODUTOS
// ========================

function renderProducts(){
    const container = document.getElementById("productsContainer");

    if(!container){
        return;
    }

    const user = getCurrentUser();

    container.innerHTML = "";

    products.forEach(product => {
        let stockClass = "stock";

        if(product.stock <= 5){
            stockClass = "stock low";
        }

        if(product.stock === 0){
            stockClass = "stock empty";
        }

        const buttonText = product.stock === 0
            ? "Esgotado"
            : user
                ? "Reservar"
                : "Entrar para reservar";

        container.innerHTML += `
            <div class="product-card">
                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    class="product-image">

                <div class="product-content">
                    <h3>${escapeHTML(product.name)}</h3>
                    <p><strong>Categoria:</strong> ${escapeHTML(product.category)}</p>
                    <p><strong>Produtor:</strong> ${escapeHTML(product.producer)}</p>

                    <p class="product-price">
                        ${formatCurrency(product.price)} / ${escapeHTML(product.unit)}
                    </p>

                    <span class="${stockClass}">
                        Estoque: ${product.stock} ${escapeHTML(product.unit)}
                    </span>

                    <button
                        class="reserve-btn"
                        onclick="reserveProduct(${product.id})"
                        ${product.stock === 0 ? "disabled" : ""}>
                        ${buttonText}
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
    const user = getCurrentUser();

    if(!user){
        alert("Faça login com nome e senha para reservar produtos.");
        openLoginModal();
        return;
    }

    const product = products.find(item => item.id === id);

    if(!product){
        return;
    }

    if(product.stock <= 0){
        alert("Produto esgotado.");
        return;
    }

    const cartItem = cart.find(item => item.id === id);

    product.stock--;

    if(cartItem){
        cartItem.quantity++;
    }else{
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            unit: product.unit,
            quantity: 1
        });
    }

    saveProducts();
    saveCart();
    renderProducts();
    renderCart();
    updateCartCount();

    alert(`${product.name} adicionado ao carrinho.`);
}

// ========================
// CONTADOR DO CARRINHO
// ========================

function updateCartCount(){
    const count = document.getElementById("cartCount");

    if(count){
        count.textContent = getCartItemsCount();
    }
}

// ========================
// ELEMENTOS DO CARRINHO
// ========================

const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const finishReservation = document.getElementById("finishReservation");

// ========================
// ABRIR E FECHAR CARRINHO
// ========================

if(cartBtn){
    cartBtn.addEventListener("click", () => {
        cartSidebar.classList.add("active");
        renderCart();
    });
}

if(closeCart){
    closeCart.addEventListener("click", () => {
        cartSidebar.classList.remove("active");
    });
}

// ========================
// RENDERIZA CARRINHO
// ========================

function renderCart(){
    if(!cartItems){
        return;
    }

    cartItems.innerHTML = "";

    if(cart.length === 0){
        cartItems.innerHTML = `
            <div class="cart-item">
                <p>Nenhum produto reservado.</p>
            </div>
        `;
    }else{
        cart.forEach((item, index) => {
            const product = products.find(productItem => productItem.id === item.id);
            const stockAvailable = product ? product.stock : 0;
            const itemTotal = item.price * item.quantity;

            cartItems.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-header">
                        <div>
                            <h4>${escapeHTML(item.name)}</h4>
                            <p class="cart-item-meta">
                                ${formatCurrency(item.price)} / ${escapeHTML(item.unit)}
                            </p>
                        </div>

                        <p class="cart-item-total">
                            ${formatCurrency(itemTotal)}
                        </p>
                    </div>

                    <div class="quantity-control">
                        <button
                            class="qty-btn"
                            onclick="decreaseCartItem(${index})">
                            -
                        </button>

                        <span class="qty-number">
                            ${item.quantity}
                        </span>

                        <button
                            class="qty-btn"
                            onclick="increaseCartItem(${index})"
                            ${stockAvailable <= 0 ? "disabled" : ""}>
                            +
                        </button>

                        <button
                            class="remove-btn"
                            onclick="removeFromCart(${index})">
                            Remover
                        </button>
                    </div>
                </div>
            `;
        });
    }

    if(cartTotal){
        cartTotal.textContent = getCartItemsCount();
    }

    if(cartTotalPrice){
        cartTotalPrice.textContent = formatCurrency(getCartTotalPrice());
    }
}

// ========================
// ALTERA QUANTIDADE
// ========================

function increaseCartItem(index){
    const item = cart[index];

    if(!item){
        return;
    }

    const product = products.find(productItem => productItem.id === item.id);

    if(!product || product.stock <= 0){
        alert("Não há mais unidades disponíveis em estoque.");
        return;
    }

    item.quantity++;
    product.stock--;

    saveProducts();
    saveCart();
    renderProducts();
    renderCart();
    updateCartCount();
}

function decreaseCartItem(index){
    const item = cart[index];

    if(!item){
        return;
    }

    const product = products.find(productItem => productItem.id === item.id);

    if(product){
        product.stock++;
    }

    item.quantity--;

    if(item.quantity <= 0){
        cart.splice(index, 1);
    }

    saveProducts();
    saveCart();
    renderProducts();
    renderCart();
    updateCartCount();
}

function removeFromCart(index){
    const item = cart[index];

    if(!item){
        return;
    }

    const product = products.find(productItem => productItem.id === item.id);

    if(product){
        product.stock += item.quantity;
    }

    cart.splice(index, 1);

    saveProducts();
    saveCart();
    renderProducts();
    renderCart();
    updateCartCount();
}

// ========================
// FINALIZAR RESERVA
// ========================

if(finishReservation){
    finishReservation.addEventListener("click", () => {
        if(cart.length === 0){
            alert("Seu carrinho está vazio.");
            return;
        }

        const user = getCurrentUser();

        if(!user){
            alert("Faça login para concluir sua reserva.");
            openLoginModal();
            return;
        }

        const fair = getNextFairInfo();
        const total = getCartTotalPrice();
        const users = getUsers();
        const userKey = getUserKey(user.name);

        if(!users[userKey]){
            alert("Faça login novamente para concluir sua reserva.");
            openLoginModal();
            return;
        }

        const reservation = {
            createdAt: new Date().toLocaleString("pt-BR"),
            fairDate: fair.iso,
            fairDateDisplay: fair.display,
            total: total,
            items: cart.map(item => ({...item}))
        };

        users[userKey].reservations = users[userKey].reservations || [];
        users[userKey].reservations.push(reservation);
        saveUsers(users);

        alert(
`Reserva realizada com sucesso!

Cliente: ${user.name}
Itens reservados: ${getCartItemsCount()}
Valor total: ${formatCurrency(total)}
Retirada: Praça da Igreja Sant'Ana
Data da feira: ${fair.display}`
        );

        cart = [];
        saveCart();
        renderCart();
        updateCartCount();
    });
}

// ========================
// LOGIN
// ========================

const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const saveUser = document.getElementById("saveUser");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function openLoginModal(){
    if(loginModal){
        loginModal.classList.add("active");
    }

    if(usernameInput){
        usernameInput.focus();
    }
}

function loadUser(){
    const user = getCurrentUser();

    if(!loginBtn){
        return;
    }

    if(user){
        loginBtn.textContent = user.name;
    }else{
        loginBtn.textContent = "Entrar";
    }

    renderProducts();
}

if(loginBtn){
    loginBtn.addEventListener("click", () => {
        const user = getCurrentUser();

        if(user){
            const sair = confirm(
`Você está logado como:

${user.name}

Deseja sair?`
            );

            if(sair){
                localStorage.removeItem("currentUser");
                localStorage.removeItem("user");
                loadUser();
            }

            return;
        }

        openLoginModal();
    });
}

if(saveUser){
    saveUser.addEventListener("click", () => {
        const name = normalizeName(usernameInput.value);
        const password = passwordInput.value.trim();

        if(name === ""){
            alert("Digite seu nome.");
            return;
        }

        if(password === ""){
            alert("Digite sua senha.");
            return;
        }

        const users = getUsers();
        const key = getUserKey(name);

        if(users[key] && users[key].password !== password){
            alert("Senha incorreta para este nome.");
            return;
        }

        if(!users[key]){
            users[key] = {
                name: name,
                password: password,
                reservations: []
            };
        }

        users[key].name = name;
        saveUsers(users);

        localStorage.setItem("currentUser", key);
        localStorage.setItem("user", name);

        usernameInput.value = "";
        passwordInput.value = "";

        loginModal.classList.remove("active");
        loadUser();
        renderCart();

        alert(`Bem-vindo(a), ${name}!`);
    });
}

window.addEventListener("click", event => {
    if(event.target === loginModal){
        loginModal.classList.remove("active");
    }
});

// ========================
// COMENTÁRIOS
// ========================

const commentBtn = document.getElementById("commentBtn");
const commentsList = document.getElementById("commentsList");

function loadComments(){
    if(!commentsList){
        return;
    }

    const comments = JSON.parse(localStorage.getItem("comments")) || [];

    commentsList.innerHTML = "";

    comments.forEach(comment => {
        commentsList.innerHTML += `
            <div class="comment-card">
                <strong>${escapeHTML(comment.user)}</strong>
                <p>${escapeHTML(comment.text)}</p>
                <small>${escapeHTML(comment.date)}</small>
            </div>
        `;
    });
}

if(commentBtn){
    commentBtn.addEventListener("click", () => {
        const input = document.getElementById("commentInput");
        const text = input.value.trim();

        if(text === ""){
            alert("Digite um comentário.");
            return;
        }

        const user = getCurrentUser();
        const comments = JSON.parse(localStorage.getItem("comments")) || [];

        comments.unshift({
            user: user ? user.name : "Visitante",
            text: text,
            date: new Date().toLocaleString("pt-BR")
        });

        localStorage.setItem("comments", JSON.stringify(comments));

        input.value = "";

        loadComments();
    });
}

// ========================
// PRÓXIMA FEIRA
// ========================

const fairDate = document.getElementById("fairDate");

if(fairDate){
    fairDate.innerHTML = `
        Próxima feira:
        <strong>${getNextFairDate()}</strong>
    `;
}

// ========================
// DARK MODE
// ========================

const darkModeBtn = document.getElementById("darkModeBtn");

function loadTheme(){
    const theme = localStorage.getItem("theme");

    if(theme === "dark"){
        document.body.classList.add("dark");
    }
}

loadTheme();

if(darkModeBtn){
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme", "dark");
        }else{
            localStorage.setItem("theme", "light");
        }
    });
}

// ========================
// TAMANHO DA FONTE
// ========================

let currentFont = parseInt(localStorage.getItem("fontSize")) || 16;

document.documentElement.style.setProperty("--font-size", `${currentFont}px`);

const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");

if(increaseFont){
    increaseFont.addEventListener("click", () => {
        currentFont++;

        document.documentElement.style.setProperty("--font-size", `${currentFont}px`);
        localStorage.setItem("fontSize", currentFont);
    });
}

if(decreaseFont){
    decreaseFont.addEventListener("click", () => {
        if(currentFont <= 12){
            return;
        }

        currentFont--;

        document.documentElement.style.setProperty("--font-size", `${currentFont}px`);
        localStorage.setItem("fontSize", currentFont);
    });
}

// ========================
// LEITURA POR VOZ
// ========================

const readPage = document.getElementById("readPage");
const stopReading = document.getElementById("stopReading");

function getReadableText(){
    const readableParts = [
        document.querySelector("header"),
        document.querySelector(".hero"),
        document.querySelector(".next-fair"),
        document.getElementById("produtos"),
        document.getElementById("produtores"),
        document.getElementById("sobre"),
        document.getElementById("seminario"),
        document.getElementById("comentarios"),
        document.querySelector("footer")
    ];

    return readableParts
        .filter(Boolean)
        .map(element => element.innerText)
        .join("\n\n");
}

if(readPage){
    readPage.addEventListener("click", () => {
        speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(getReadableText());

        speech.lang = "pt-BR";
        speech.rate = 1;
        speech.pitch = 1;

        speechSynthesis.speak(speech);
    });
}

if(stopReading){
    stopReading.addEventListener("click", () => {
        speechSynthesis.cancel();
    });
}

// ========================
// FORMULÁRIO
// ========================

const seminarioForm = document.getElementById("seminarioForm");

if(seminarioForm){
    seminarioForm.addEventListener("submit", event => {
        event.preventDefault();

        const inputs = seminarioForm.querySelectorAll("input");

        const cadastro = {
            nome: inputs[0].value,
            email: inputs[1].value,
            cidade: inputs[2].value
        };

        const inscritos = JSON.parse(localStorage.getItem("inscritos")) || [];

        inscritos.push(cadastro);

        localStorage.setItem("inscritos", JSON.stringify(inscritos));

        alert("Cadastro realizado com sucesso!");

        seminarioForm.reset();
    });
}

// ========================
// ATALHOS DE DESENVOLVIMENTO
// ========================

window.resetFeira = function(){
    const confirmar = confirm("Resetar estoque, carrinho, usuários, reservas e comentários?");

    if(!confirmar){
        return;
    }

    localStorage.removeItem("products");
    localStorage.removeItem("cart");
    localStorage.removeItem("cartFairDate");
    localStorage.removeItem("comments");
    localStorage.removeItem("users");
    localStorage.removeItem("user");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("activeFairDate");

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

console.log("Feira de Pitanga V3 carregada.");
