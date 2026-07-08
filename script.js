// ==========================================
// ☁️ SUPABASE CLOUD RESTAURANT DATABASE CONFIG
// ==========================================
const SUPABASE_URL = "https://iwyvslpajurswqgchivn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3eXZzbHBhanVyc3dxZ2NoaXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2MzI0OTYsImV4cCI6MjA5NTIxODQ5Nn0.VfQZ1v68M6FfS8vA_q02G09j4e4-M2g8S_wO5p1_zSg";

let supabase;
let cart = [];

// ==========================================
// 🍳 RESTAURANT MENU ITEMS LIST
// ==========================================
const menuItems = [
    {
        id: 1,
        name: "ፉል ስፔሻል",
        category: "breakfast",
        price: 150,
        image: "images/ful.jpg",
        description: "በእንቁላል፣ በቅቤ፣ በቲማቲም እና በቃሪያ የተዘጋጀ ምርጥ ፉል"
    },
    {
        id: 2,
        name: "ፈታ ኖርማል",
        category: "breakfast",
        price: 120,
        image: "images/feta.jpg",
        description: "በቀጭኑ የተከተፈ ዳቦ በቅመማ ቅመም እና በዘይት የተጠበሰ"
    },
    {
        id: 3,
        name: "ማኪያቶ",
        category: "drinks",
        price: 45,
        image: "images/macchiato.jpg",
        description: "በጥራት የተመረጠ ትኩስ ማኪያቶ"
    }
];

// ==========================================
// ⚡ SITE SETUP & LIFECYCLE INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Supabase engine safely
    if (window.supabase) {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } else {
        console.error("Supabase script engine failed to load from CDN.");
    }
    
    // Draw categories and menu layout grids
    setupCategoryNavigation();
    displayMenuItems(menuItems);
    updateCartUI();

    // Attach event runner to the checkout submit button
    const checkoutBtn = document.getElementById("checkoutSubmitBtn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", completeCheckout);
    }
});

// ==========================================
// 🎨 CORE UI DISPLAY & FILTERING RENDERING
// ==========================================
function displayMenuItems(items) {
    const menuGrid = document.getElementById("menuGrid");
    if (!menuGrid) return;
    
    if (items.length === 0) {
        menuGrid.innerHTML = `<p style="color: #666; text-align: center; width: 100%;">No items found in this section.</p>`;
        return;
    }

    menuGrid.innerHTML = items.map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300'">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p class="description">${item.description}</p>
                <div class="price-row">
                    <span class="price">${item.price} ETB</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join("");
}

function setupCategoryNavigation() {
    const categoryNav = document.getElementById("categoryNav");
    if (!categoryNav) return;

    const categories = ["all", "breakfast", "drinks"];
    
    categoryNav.innerHTML = categories.map(cat => `
        <button class="category-btn ${cat === 'all' ? 'active' : ''}" onclick="filterCategory('${cat}', this)">
            ${cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
    `).join("");
}

function filterCategory(category, buttonElement) {
    // Toggle active display class states
    document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
    buttonElement.classList.add("active");

    if (category === "all") {
        displayMenuItems(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.category === category);
        displayMenuItems(filtered);
    }
}

// ==========================================
// 🛒 CORE CART TRACKING HANDLERS
// ==========================================
function addToCart(id) {
    const item = menuItems.find(product => product.id === id);
    const existingItem = cart.find(product => product.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCartUI();
    
    // Quick micro-animation feedback on cart bar
    const cartBar = document.getElementById("cartBar");
    if (cartBar) {
        cartBar.style.transform = "scale(1.03)";
        setTimeout(() => cartBar.style.transform = "scale(1)", 150);
    }
}

function updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    const modalTotal = document.getElementById("modalTotal");
    const cartBar = document.getElementById("cartBar");
    const cartItemsList = document.getElementById("cartItemsList");

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // 1. Manage Floating Bottom Action Bar Visibility
    if (cartBar) {
        if (totalItems > 0) {
            cartBar.classList.add("active");
            cartBar.style.display = "flex";
        } else {
            cartBar.classList.remove("active");
            cartBar.style.display = "none";
        }
    }

    // 2. Update String Counters
    if (cartCount) cartCount.innerText = `${totalItems} Item${totalItems !== 1 ? 's' : ''}`;
    if (cartTotal) cartTotal.innerText = `${totalPrice} ETB`;
    if (modalTotal) modalTotal.innerText = totalPrice;

    // 3. Render Inner Cart Items Modal List
    if (cartItemsList) {
        if (cart.length === 0) {
            cartItemsList.innerHTML = `<p style="text-align:center; padding: 20px; color:#666;">Your breakfast tray is completely empty.</p>`;
            return;
        }

        cartItemsList.innerHTML = cart.map(item => `
            <div class="cart-item-row" style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid #222;">
                <div>
                    <h4 style="margin:0; color:#fff;">${item.name}</h4>
                    <small style="color:#d4af37;">${item.price} ETB x ${item.quantity}</small>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <button onclick="changeQuantity(${item.id}, -1)" style="background:#222; border:1px solid #444; color:#fff; width:28px; height:28px; border-radius:4px; cursor:pointer;">-</button>
                    <span style="color:#fff; font-weight:600; min-width:15px; text-align:center;">${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)" style="background:#222; border:1px solid #444; color:#fff; width:28px; height:28px; border-radius:4px; cursor:pointer;">+</button>
                </div>
            </div>
        `).join("");
    }
}

function changeQuantity(id, change) {
    const item = cart.find(product => product.id === id);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== id);
    }
    updateCartUI();
}

function toggleCartModal() {
    const modal = document.getElementById("cartModal");
    if (!modal) return;
    
    if (modal.style.display === "flex" || modal.classList.contains("open")) {
        modal.style.display = "none";
        modal.classList.remove("open");
    } else {
        modal.style.display = "flex";
        modal.classList.add("open");
    }
}

// ==========================================
// 🚀 CLOUD DATABASE SUBMISSION PIPELINE
// ==========================================
async function completeCheckout() {
    const tableInput = document.getElementById("tableNumber");
    const phoneInput = document.getElementById("customerPhone");

    const tableValue = tableInput ? tableInput.value.trim() : "";
    const phoneValue = phoneInput ? phoneInput.value.trim() : "";

    // 1. Validation Checks
    if (cart.length === 0) {
        alert("⚠️ Your tray is empty! Choose something delicious first.");
        return;
    }
    if (!tableValue) {
        alert("⚠️ Please fill out your Table Number so the kitchen knows where to serve.");
        return;
    }
    if (!supabase) {
        alert("❌ Database system connection failure. Check your connection parameters and try again.");
        return;
    }

    // 2. Format Data Payloads for Cloud Transmission
    const summaryText = cart.map(item => `${item.quantity}x ${item.name}`).join(", ");
    const finalBillAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    try {
        // 3. Insert direct structured entry packet to cloud
        const { error } = await supabase
            .from('orders')
            .insert([
                {
                    table_number: "Table " + tableValue,
                    customer_phone: phoneValue || "None Provided",
                    items_summary: summaryText,
                    total_price: finalBillAmount,
                    status: "badge-pending" // Will flag order card status inside staff pipeline dashboard tracking
                }
            ]);

        if (error) throw error;

        // 4. Success handling and interface cleaning reset
        alert(`✨ Order Sent to Kitchen Successfully!\n📍 Table: ${tableValue}\n💵 Total: ${finalBillAmount} ETB`);
        
        cart = [];
        if (tableInput) tableInput.value = "";
        if (phoneInput) phoneInput.value = "";
        
        updateCartUI();
        toggleCartModal();

    } catch (err) {
        console.error("Database Transaction Error:", err);
        alert("❌ Error sending your order data packet over server lines: " + err.message);
    }
}
