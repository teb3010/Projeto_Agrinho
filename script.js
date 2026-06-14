/* ==================================
   FEIRA DE PITANGA V3
   SCRIPT.JS
================================== */

const PASSWORD_MIN_LENGTH = 6;

let authMode = "login";
let reservationDraft = null;
let reservationDraftChanged = false;
let readingQueue = [];

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

    const nextDay = next.getDay();
    const schedule = nextDay === 3
        ? "Horário: quarta-feira, das 13h às 17h"
        : "Horário: sábado, das 8h às 12h";

    return {
        date: next,
        iso: formatISODate(next),
        display: next.toLocaleDateString("pt-BR"),
        schedule: schedule
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

function getCurrentUserKey(){
    return localStorage.getItem("currentUser");
}

function saveCurrentUser(user){
    const key = getCurrentUserKey();

    if(!key){
        return;
    }

    const users = getUsers();
    users[key] = user;
    saveUsers(users);
}

function getReservationTotal(reservation){
    return (reservation.items || [])
        .reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateReservationTotal(reservation){
    reservation.total = getReservationTotal(reservation);
}

function cloneReservations(reservations){
    return JSON.parse(JSON.stringify(reservations || []));
}

function getQuantityByProduct(reservations){
    return (reservations || []).reduce((totals, reservation) => {
        (reservation.items || []).forEach(item => {
            totals[item.id] = (totals[item.id] || 0) + item.quantity;
        });

        return totals;
    }, {});
}

function getReservationDraft(user){
    if(!reservationDraft){
        reservationDraft = cloneReservations(user.reservations || []);
        reservationDraftChanged = false;
    }

    return reservationDraft;
}

function markReservationDraftChanged(){
    reservationDraftChanged = true;
}

function resetReservationDraft(user){
    reservationDraft = cloneReservations(user?.reservations || []);
    reservationDraftChanged = false;
}

function getDraftProductLimit(user, productId){
    const originalTotals = getQuantityByProduct(user.reservations || []);
    const product = products.find(productItem => productItem.id === productId);

    return (originalTotals[productId] || 0) + (product ? product.stock : 0);
}

function getComments(){
    return JSON.parse(localStorage.getItem("comments")) || [];
}

function saveComments(comments){
    localStorage.setItem("comments", JSON.stringify(comments));
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
Data da feira: ${fair.display}
${fair.schedule}`
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
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const passwordInput = document.getElementById("password");
const loginModeBtn = document.getElementById("loginModeBtn");
const signupModeBtn = document.getElementById("signupModeBtn");
const authHint = document.getElementById("authHint");
const userMenuModal = document.getElementById("userMenuModal");
const closeUserMenu = document.getElementById("closeUserMenu");
const userMenuName = document.getElementById("userMenuName");
const userReservationsList = document.getElementById("userReservationsList");
const userCommentsList = document.getElementById("userCommentsList");
const currentPasswordInput = document.getElementById("currentPassword");
const newPasswordInput = document.getElementById("newPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");
const changePasswordBtn = document.getElementById("changePassword");
const logoutUserBtn = document.getElementById("logoutUser");
const saveReservationChangesBtn = document.getElementById("saveReservationChanges");
const userMenuOptions = document.querySelectorAll(".user-menu-option[data-user-section]");

function openLoginModal(){
    if(loginModal){
        loginModal.classList.add("active");
    }

    if(firstNameInput){
        firstNameInput.focus();
    }
}

function setAuthMode(mode){
    authMode = mode;

    if(loginModeBtn){
        loginModeBtn.classList.toggle("active", mode === "login");
    }

    if(signupModeBtn){
        signupModeBtn.classList.toggle("active", mode === "signup");
    }

    if(saveUser){
        saveUser.textContent = mode === "login" ? "Entrar" : "Cadastrar";
    }

    if(authHint){
        authHint.textContent = mode === "login"
            ? "Entre com nome, sobrenome e senha."
            : `Cadastre nome, sobrenome e senha com no mínimo ${PASSWORD_MIN_LENGTH} caracteres.`;
    }
}

function openUserMenuModal(){
    if(!userMenuModal){
        return;
    }

    resetReservationDraft(getCurrentUser());
    renderUserMenu();
    userMenuModal.classList.add("active");
}

function closeUserMenuModal(){
    if(userMenuModal){
        userMenuModal.classList.remove("active");
    }
}

function showUserMenuSection(sectionId){
    userMenuOptions.forEach(option => {
        option.classList.toggle("active", option.dataset.userSection === sectionId);
    });

    document.querySelectorAll(".user-menu-section").forEach(section => {
        section.classList.toggle("active", section.id === sectionId);
    });
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

function renderUserMenu(){
    const user = getCurrentUser();

    if(!user){
        closeUserMenuModal();
        return;
    }

    if(userMenuName){
        userMenuName.textContent = user.name;
    }

    renderUserReservations(user);
    renderUserComments();
}

function renderUserReservations(user){
    if(!userReservationsList){
        return;
    }

    const reservations = getReservationDraft(user);

    userReservationsList.innerHTML = "";

    if(saveReservationChangesBtn){
        saveReservationChangesBtn.disabled = !reservationDraftChanged;
        saveReservationChangesBtn.textContent = reservationDraftChanged
            ? "Salvar alterações"
            : "Nenhuma alteração pendente";
    }

    if(reservations.length === 0){
        userReservationsList.innerHTML = `
            <p class="empty-user-list">
                Você ainda não possui reservas finalizadas.
            </p>
            `;
        return;
    }

    reservations.forEach((reservation, reservationIndex) => {
        updateReservationTotal(reservation);

        const itemsHTML = (reservation.items || [])
            .map((item, itemIndex) => `
                <div class="reservation-product">
                    <p class="reservation-product-name">
                        ${escapeHTML(item.name)}
                    </p>

                    <p>
                        ${formatCurrency(item.price)} / ${escapeHTML(item.unit)}
                    </p>

                    <div class="reservation-actions">
                        <button onclick="decreaseReservationItem(${reservationIndex}, ${itemIndex})">
                            -
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button onclick="increaseReservationItem(${reservationIndex}, ${itemIndex})">
                            +
                        </button>

                        <button
                            class="danger-btn"
                            onclick="removeReservationItem(${reservationIndex}, ${itemIndex})">
                            Remover item
                        </button>
                    </div>
                </div>
            `)
            .join("");

        userReservationsList.innerHTML += `
            <article class="user-reservation-card">
                <h4>
                    Reserva para ${escapeHTML(reservation.fairDateDisplay || reservation.fairDate || "próxima feira")}
                </h4>

                <p class="reservation-summary">
                    Feita em ${escapeHTML(reservation.createdAt || "data não registrada")}
                    • Total: ${formatCurrency(reservation.total || 0)}
                </p>

                ${itemsHTML}

                <div class="reservation-actions">
                    <button
                        class="danger-btn"
                        onclick="removeUserReservation(${reservationIndex})">
                        Cancelar reserva
                    </button>
                </div>
            </article>
        `;
    });

    if(reservationDraftChanged){
        userReservationsList.innerHTML += `
            <p class="reservation-status">
                Existem alterações pendentes. Clique em salvar para aplicar.
            </p>
        `;
    }
}

function renderUserComments(){
    if(!userCommentsList){
        return;
    }

    const user = getCurrentUser();
    const currentKey = getCurrentUserKey();
    const comments = getComments();

    userCommentsList.innerHTML = "";

    if(!user){
        return;
    }

    const userComments = comments
        .map((comment, index) => ({...comment, index}))
        .filter(comment =>
            comment.userKey === currentKey ||
            (!comment.userKey && comment.user === user.name)
        );

    if(userComments.length === 0){
        userCommentsList.innerHTML = `
            <p class="empty-user-list">
                Você ainda não publicou comentários.
            </p>
        `;
        return;
    }

    userComments.forEach(comment => {
        userCommentsList.innerHTML += `
            <article class="user-comment-card">
                <strong>
                    ${escapeHTML(comment.user)}
                </strong>

                <p>
                    ${escapeHTML(comment.text)}
                </p>

                <small class="comment-date">
                    ${escapeHTML(comment.date)}
                </small>

                <div class="comment-actions">
                    <button onclick="removeUserComment(${comment.index})">
                        Remover comentário
                    </button>
                </div>
            </article>
        `;
    });
}

function saveReservationChanges(user){
    markReservationDraftChanged();
    renderUserMenu();
}

function increaseReservationItem(reservationIndex, itemIndex){
    const user = getCurrentUser();
    const draft = user ? getReservationDraft(user) : [];
    const reservation = draft[reservationIndex];
    const item = reservation?.items?.[itemIndex];

    if(!user || !reservation || !item){
        return;
    }

    const draftTotals = getQuantityByProduct(draft);
    const productLimit = getDraftProductLimit(user, item.id);

    if((draftTotals[item.id] || 0) >= productLimit){
        alert("Não há mais unidades disponíveis em estoque.");
        return;
    }

    item.quantity++;
    updateReservationTotal(reservation);
    saveReservationChanges(user);
}

function decreaseReservationItem(reservationIndex, itemIndex){
    const user = getCurrentUser();
    const draft = user ? getReservationDraft(user) : [];
    const reservation = draft[reservationIndex];
    const item = reservation?.items?.[itemIndex];

    if(!user || !reservation || !item){
        return;
    }

    item.quantity--;

    if(item.quantity <= 0){
        reservation.items.splice(itemIndex, 1);
    }

    if(reservation.items.length === 0){
        draft.splice(reservationIndex, 1);
    }else{
        updateReservationTotal(reservation);
    }

    saveReservationChanges(user);
}

function removeReservationItem(reservationIndex, itemIndex){
    const user = getCurrentUser();
    const draft = user ? getReservationDraft(user) : [];
    const reservation = draft[reservationIndex];
    const item = reservation?.items?.[itemIndex];

    if(!user || !reservation || !item){
        return;
    }

    reservation.items.splice(itemIndex, 1);

    if(reservation.items.length === 0){
        draft.splice(reservationIndex, 1);
    }else{
        updateReservationTotal(reservation);
    }

    saveReservationChanges(user);
}

function removeUserReservation(reservationIndex){
    const user = getCurrentUser();
    const draft = user ? getReservationDraft(user) : [];
    const reservation = draft[reservationIndex];

    if(!user || !reservation){
        return;
    }

    const confirmar = confirm("Deseja cancelar esta reserva?");

    if(!confirmar){
        return;
    }

    draft.splice(reservationIndex, 1);
    saveReservationChanges(user);
}

function applyReservationDraftChanges(){
    const user = getCurrentUser();

    if(!user || !reservationDraft){
        return;
    }

    const originalTotals = getQuantityByProduct(user.reservations || []);
    const draft = reservationDraft
        .filter(reservation => (reservation.items || []).length > 0)
        .map(reservation => {
            updateReservationTotal(reservation);
            return reservation;
        });
    const draftTotals = getQuantityByProduct(draft);
    const productIds = new Set([
        ...Object.keys(originalTotals),
        ...Object.keys(draftTotals)
    ]);

    for(const productId of productIds){
        const numericProductId = Number(productId);
        const product = products.find(productItem => productItem.id === numericProductId);
        const originalQuantity = originalTotals[productId] || 0;
        const draftQuantity = draftTotals[productId] || 0;
        const difference = draftQuantity - originalQuantity;

        if(difference > 0 && (!product || product.stock < difference)){
            alert("Não há estoque suficiente para salvar uma das alterações.");
            return;
        }
    }

    productIds.forEach(productId => {
        const numericProductId = Number(productId);
        const product = products.find(productItem => productItem.id === numericProductId);
        const originalQuantity = originalTotals[productId] || 0;
        const draftQuantity = draftTotals[productId] || 0;
        const difference = draftQuantity - originalQuantity;

        if(product){
            product.stock -= difference;
        }
    });

    user.reservations = draft;
    saveProducts();
    saveCurrentUser(user);
    resetReservationDraft(user);
    renderProducts();
    renderUserMenu();
    alert("Alterações das reservas salvas com sucesso.");
}

function removeUserComment(commentIndex){
    const comments = getComments();

    if(!comments[commentIndex]){
        return;
    }

    comments.splice(commentIndex, 1);
    saveComments(comments);
    loadComments();
    renderUserMenu();
}

if(loginModeBtn){
    loginModeBtn.addEventListener("click", () => {
        setAuthMode("login");
    });
}

if(signupModeBtn){
    signupModeBtn.addEventListener("click", () => {
        setAuthMode("signup");
    });
}

userMenuOptions.forEach(option => {
    option.addEventListener("click", () => {
        showUserMenuSection(option.dataset.userSection);
    });
});

if(saveReservationChangesBtn){
    saveReservationChangesBtn.addEventListener("click", applyReservationDraftChanges);
}

if(loginBtn){
    loginBtn.addEventListener("click", () => {
        const user = getCurrentUser();

        if(user){
            openUserMenuModal();
            return;
        }

        openLoginModal();
    });
}

if(saveUser){
    saveUser.addEventListener("click", () => {
        const firstName = normalizeName(firstNameInput.value);
        const lastName = normalizeName(lastNameInput.value);
        const name = normalizeName(`${firstName} ${lastName}`);
        const password = passwordInput.value.trim();

        if(firstName === ""){
            alert("Digite seu nome.");
            return;
        }

        if(lastName === ""){
            alert("Digite seu sobrenome.");
            return;
        }

        if(password === ""){
            alert("Digite sua senha.");
            return;
        }

        if(password.length < PASSWORD_MIN_LENGTH){
            alert(`A senha precisa ter no mínimo ${PASSWORD_MIN_LENGTH} caracteres.`);
            return;
        }

        const users = getUsers();
        const key = getUserKey(name);

        if(authMode === "signup"){
            if(users[key]){
                alert("Já existe uma conta com este nome e sobrenome. Use a opção Entrar.");
                return;
            }

            users[key] = {
                name: name,
                password: password,
                reservations: []
            };
        }

        if(authMode === "login"){
            if(!users[key]){
                alert("Conta não encontrada. Use a opção Cadastrar.");
                return;
            }

            if(users[key].password !== password){
                alert("Senha incorreta para este usuário.");
                return;
            }
        }

        users[key].name = name;
        saveUsers(users);

        localStorage.setItem("currentUser", key);
        localStorage.setItem("user", name);

        firstNameInput.value = "";
        lastNameInput.value = "";
        passwordInput.value = "";

        loginModal.classList.remove("active");
        loadUser();
        renderCart();

        alert(authMode === "signup"
            ? `Cadastro realizado. Bem-vindo(a), ${name}!`
            : `Bem-vindo(a), ${name}!`
        );
    });
}

if(closeUserMenu){
    closeUserMenu.addEventListener("click", closeUserMenuModal);
}

if(changePasswordBtn){
    changePasswordBtn.addEventListener("click", () => {
        const user = getCurrentUser();

        if(!user){
            return;
        }

        const currentPassword = currentPasswordInput.value.trim();
        const newPassword = newPasswordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if(currentPassword !== user.password){
            alert("Senha atual incorreta.");
            return;
        }

        if(newPassword === ""){
            alert("Digite uma nova senha.");
            return;
        }

        if(newPassword.length < PASSWORD_MIN_LENGTH){
            alert(`A nova senha precisa ter no mínimo ${PASSWORD_MIN_LENGTH} caracteres.`);
            return;
        }

        if(newPassword !== confirmPassword){
            alert("A confirmação da senha não confere.");
            return;
        }

        user.password = newPassword;
        saveCurrentUser(user);

        currentPasswordInput.value = "";
        newPasswordInput.value = "";
        confirmPasswordInput.value = "";

        alert("Senha alterada com sucesso.");
    });
}

if(logoutUserBtn){
    logoutUserBtn.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("user");
        reservationDraft = null;
        reservationDraftChanged = false;
        closeUserMenuModal();
        loadUser();
        renderCart();
    });
}

window.addEventListener("click", event => {
    if(event.target === loginModal){
        loginModal.classList.remove("active");
    }

    if(event.target === userMenuModal){
        closeUserMenuModal();
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

    const comments = getComments();

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
        const comments = getComments();

        comments.unshift({
            user: user ? user.name : "Visitante",
            userKey: user ? getCurrentUserKey() : null,
            text: text,
            date: new Date().toLocaleString("pt-BR")
        });

        saveComments(comments);

        input.value = "";

        loadComments();
    });
}

// ========================
// PRÓXIMA FEIRA
// ========================

const fairDate = document.getElementById("fairDate");
const fairTime = document.getElementById("fairTime");

if(fairDate){
    const fair = getNextFairInfo();

    fairDate.innerHTML = `
        Próxima feira:
        <strong>${fair.display}</strong>
    `;

    if(fairTime){
        fairTime.textContent = fair.schedule;
    }
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

function splitReadableText(text){
    return text
        .split(/\n+|(?<=[.!?])\s+/)
        .map(part => part.trim())
        .filter(Boolean)
        .reduce((chunks, part) => {
            if(chunks.length === 0){
                chunks.push(part);
                return chunks;
            }

            const lastChunk = chunks[chunks.length - 1] || "";

            if(lastChunk.length + part.length < 220){
                chunks[chunks.length - 1] = `${lastChunk} ${part}`.trim();
            }else{
                chunks.push(part);
            }

            return chunks;
        }, []);
}

function speakNextChunk(){
    if(readingQueue.length === 0){
        return;
    }

    const speech = new SpeechSynthesisUtterance(readingQueue.shift());

    speech.lang = "pt-BR";
    speech.rate = 1;
    speech.pitch = 1;
    speech.onend = speakNextChunk;

    speechSynthesis.speak(speech);
}

if(readPage){
    readPage.addEventListener("click", () => {
        if(!("speechSynthesis" in window)){
            alert("A leitura por voz não está disponível neste navegador.");
            return;
        }

        speechSynthesis.cancel();
        speechSynthesis.resume();

        readingQueue = splitReadableText(getReadableText());

        speakNextChunk();
    });
}

if(stopReading){
    stopReading.addEventListener("click", () => {
        readingQueue = [];
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

setAuthMode("login");
renderProducts();
updateCartCount();
renderCart();
loadComments();
loadUser();

console.log("Feira de Pitanga V3 carregada.");
