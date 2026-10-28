// 20 Unique Gym Products with 100% Unique Unsplash Images
const products = [
    {
        id: 1,
        name: "5kg Rubber Hex Dumbbells Pair",
        category: "weights",
        price: 49.99,
        badge: "MUST HAVE",
        image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
        description: "Professional 5kg anti-slip rubber hex dumbbells for arm workouts."
    },
    {
        id: 2,
        name: "10kg Pro Steel Dumbbell Set",
        category: "weights",
        price: 89.99,
        badge: "BESTSELLER",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        description: "Solid chrome steel dumbbells 10kg for chest press and shoulder workouts."
    },
    {
        id: 3,
        name: "100% Pure Whey Protein Isolate (2kg)",
        category: "supplements",
        price: 74.99,
        badge: "PURE PROTEIN",
        image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80",
        description: "25g pure protein per scoop for rapid muscle recovery and lean gains."
    },
    {
        id: 4,
        name: "Commercial Heavy Treadmill Machine",
        category: "machines",
        price: 899.99,
        badge: "HEAVY DUTY",
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
        description: "3.5 HP motor commercial cardio treadmill with auto incline."
    },
    {
        id: 5,
        name: "Explosive Pre-Workout Energy Powder",
        category: "supplements",
        price: 39.99,
        badge: "HIGH ENERGY",
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80",
        description: "Boosts focus, stamina, and muscle pump during intense gym sessions."
    },
    {
        id: 6,
        name: "Multi-Function Power Rack Machine",
        category: "machines",
        price: 649.99,
        badge: "PRO GYM",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
        description: "Complete squat rack, pull-up bar, and cable pulley station."
    },
    {
        id: 7,
        name: "20kg Olympic Barbell Rod 7ft",
        category: "weights",
        price: 129.99,
        badge: "HARDCORE",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
        description: "Heavy duty 700lb capacity Olympic bar for bench press and deadlifts."
    },
    {
        id: 8,
        name: "Micronized Creatine Monohydrate (300g)",
        category: "supplements",
        price: 29.99,
        badge: "STRENGTH",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
        description: "Increases muscle volume, ATP energy, and explosive lifting power."
    },
    {
        id: 9,
        name: "Heavy Leather Weightlifting Belt",
        category: "accessories",
        price: 34.99,
        badge: "SAFETY",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
        description: "4-inch padded leather belt for lower back support during heavy squats."
    },
    {
        id: 10,
        name: "Cable Crossover Pulley Station",
        category: "machines",
        price: 1199.99,
        badge: "COMMERCIAL",
        image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80",
        description: "Dual stack cable machine for chest flyes and arm isolation workouts."
    },
    {
        id: 11,
        name: "Adjustable Incline Bench Press",
        category: "machines",
        price: 189.99,
        badge: "VERSATILE",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        description: "7 adjustable positions for incline, flat, and decline dumbbell press."
    },
    {
        id: 12,
        name: "20kg Bumper Weight Plates Pair",
        category: "weights",
        price: 99.99,
        badge: "RUBBER COATED",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
        description: "High density rubber bumper plates for Olympic deadlifts."
    },
    {
        id: 13,
        name: "BCAA Amino Acid Muscle Recovery",
        category: "supplements",
        price: 32.99,
        badge: "RECOVERY",
        image: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=800&q=80",
        description: "Prevents muscle breakdown and accelerates soreness recovery during workout."
    },
    {
    id: 14,
    name: "Neoprene Padded Lifting Wrist Straps",
    category: "accessories",
    price: 14.99,
    badge: "GRIP PRO",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    description: "Heavy duty cotton wrist straps with neoprene padding for heavy deadlifts and lat pulldowns."
    },
    {
        id: 15,
        name: "5-Piece Heavy Resistance Bands Set",
        category: "accessories",
        price: 24.99,
        badge: "HOME GYM",
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=800&q=80",
        description: "Latex resistance tubes with handles for home workouts and mobility."
    },
    {
        id: 16,
        name: "16kg Cast Iron Kettlebell",
        category: "weights",
        price: 54.99,
        badge: "CORE STRENGTH",
        image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=800&q=80",
        description: "Smooth handle cast iron kettlebell for swings and functional training."
    },
    {
        id: 17,
        name: "Mass Gainer High Calorie Powder (3kg)",
        category: "supplements",
        price: 64.99,
        badge: "BULKING",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        description: "1200+ calories and 50g protein per serving for fast weight gain."
    },
    {
        id: 18,
        name: "Indoor Exercise Stationary Bike",
        category: "machines",
        price: 349.99,
        badge: "CARDIO",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
        description: "Magnetic resistance indoor spin bike with digital LCD monitor."
    },
    {
        id: 19,
        name: "Breathable Non-Slip Gym Gloves",
        category: "accessories",
        price: 19.99,
        badge: "COMFORT",
        image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?auto=format&fit=crop&w=800&q=80",
        description: "Padded palm workout gloves to prevent blisters during heavy pulls."
    },
    {
        id: 20,
        name: "High Density Foam Roller for Muscles",
        category: "accessories",
        price: 21.99,
        badge: "MASSAGE",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
        description: "Deep tissue massage foam roller for leg and back muscle knots."
    }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupCartListeners();
});

function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = items.map(product => `
        <div class="glass-panel rounded-2xl p-4 border border-gym-border hover:border-gym-neon transition-all duration-300 flex flex-col justify-between group card-glow">
            <div class="relative h-48 flex items-center justify-center overflow-hidden rounded-xl bg-black/20">
                <span class="absolute top-2 left-2 text-[9px] font-black uppercase px-2.5 py-1 rounded-full bg-gym-neon text-black z-10">
                    ${product.badge}
                </span>
                <img src="${product.image}" alt="${product.name}" class="max-h-40 object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 rounded-lg">
            </div>

            <div class="mt-4 space-y-2">
                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">${product.category}</span>
                <h3 class="font-heading text-sm font-bold text-gym-text group-hover:text-gym-neon transition-colors">${product.name}</h3>
                <p class="text-[11px] text-gray-400 line-clamp-2">${product.description}</p>
                
                <div class="flex items-center justify-between pt-3 border-t border-gym-border">
                    <span class="text-base font-black text-gym-neon">$${product.price.toFixed(2)}</span>
                    <button onclick="addToCart(${product.id})" class="bg-gym-neon text-black w-9 h-9 rounded-xl flex items-center justify-center hover:brightness-110 transition-all font-bold hover:scale-110 shadow-md">
                        <i class="fa-solid fa-plus text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-gym-neon', 'text-black');
        btn.classList.add('glass-panel', 'text-gray-400');
    });
    event.target.classList.remove('glass-panel', 'text-gray-400');
    event.target.classList.add('bg-gym-neon', 'text-black');

    if(category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

function rotateMachine(val) {
    document.getElementById('angleVal').innerText = val;
    const img = document.getElementById('gym3dImg');
    img.style.transform = `rotateY(${val}deg) rotateX(${val / 15}deg)`;
}

function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        showToast("Light Mode Activated");
    } else {
        html.classList.remove('light');
        html.classList.add('dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        showToast("Dark Mode Activated");
    }
}

function addToCart(productId) {
    const item = products.find(p => p.id === productId);
    const existing = cart.find(c => c.id === productId);

    if(existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    updateCartUI();
    showToast(`Added "${item.name}" to cart!`);
}

// Function to Remove/Delete item from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showToast("Item removed from cart");
}

function updateCartUI() {
    const cartBadge = document.getElementById('cart-badge');
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total');

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartBadge.textContent = totalQty;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    totalEl.textContent = `$${subtotal.toFixed(2)}`;

    if(cart.length === 0) {
        container.innerHTML = `<p class="text-xs text-gray-500 text-center py-8">Your cart is empty.</p>`;
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="flex items-center gap-3 bg-gym-card p-3 rounded-xl border border-gym-border relative group">
            <img src="${item.image}" class="w-12 h-12 object-cover rounded">
            <div class="flex-1">
                <h4 class="text-xs font-bold text-gym-text">${item.name}</h4>
                <p class="text-xs text-gym-neon font-bold">$${item.price.toFixed(2)} x ${item.qty}</p>
            </div>
            <!-- Delete Button added here -->
            <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-500 p-2 transition-colors" title="Remove Item">
                <i class="fa-solid fa-trash-can text-sm"></i>
            </button>
        </div>
    `).join('');
}

function setupCartListeners() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');

    document.getElementById('btn-open-cart').onclick = () => {
        drawer.classList.remove('translate-x-full');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
    };

    const closeCart = () => {
        drawer.classList.add('translate-x-full');
        overlay.classList.add('opacity-0', 'pointer-events-none');
    };

    document.getElementById('btn-close-cart').onclick = closeCart;
    overlay.onclick = closeCart;
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'glass-panel border border-gym-neon text-gym-text text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 pointer-events-auto animate-bounce';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-gym-neon"></i> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

function checkout() {
    if(cart.length === 0) return showToast("Cart is empty!");
    showToast("Redirecting to secure checkout...");
}