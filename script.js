/**
 * Syncro Zenith - Easily Editable Products & Services Configuration
 * To add/remove products or solutions, simply add or edit object entries in the arrays below!
 */

// ==========================================================================
// 1. PRODUCTS DATA ARRAY (Add new items here easily)
// ==========================================================================
const PRODUCTS_DATA = [
    {
        id: "prod-1",
        title: "SZ Hybrid Solar Inverter System",
        category: "solar",
        categoryTag: "Solar & Hybrid",
        badge: "High Efficiency",
        description: "Advanced hybrid solar inverter with smart grid-tie capability, high-voltage battery compatibility, and remote monitoring.",
        image: "https://images.unsplash.com/photo-1548613146-cff472852931?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "prod-2",
        title: "Bicodi / LiFePO4 Energy Storage",
        category: "solar",
        categoryTag: "Battery Storage",
        badge: "Long Lifespan",
        description: "Modular high-capacity lithium battery bank for reliable backup power and solar energy self-consumption.",
        image: "https://images.unsplash.com/photo-1592838042430-4e3e3b3334c9?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "prod-3",
        title: "SZ Smart Power Meter & Logger",
        category: "energy",
        categoryTag: "Energy Monitoring",
        badge: "Excel Auto-Export",
        description: "Multi-channel power analyzer with automated weekly/monthly Excel report generation for plant managers.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "prod-4",
        title: "Syncro Modular PLC Controller",
        category: "plc",
        categoryTag: "Industrial Automation",
        badge: "Industrial Grade",
        description: "Robust programmable controller optimized for automated pump stations, grain sorting, and industrial machinery.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "prod-5",
        title: "SZ Touchscreen HMI Panel",
        category: "plc",
        categoryTag: "Operator Interface",
        badge: "IP65 Rugged",
        description: "Bright, IP65-rated touch display for real-time visualization of solar generation, temperatures, and water levels.",
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "prod-6",
        title: "Rooftop & Ground Solar Racks",
        category: "solar",
        categoryTag: "Mounting Structure",
        badge: "Custom Fabricated",
        description: "Heavy-duty galvanized steel mounting frameworks engineered to withstand local wind loads and secure solar arrays.",
        image: "https://images.unsplash.com/photo-1509391365330-2e8a1768a416?auto=format&fit=crop&w=600&q=80"
    },
	{
        id: "prod-7",
        title: "SZ Touchscreen HMI Panel",
        category: "plc",
        categoryTag: "Operator Interface",
        badge: "IP65 Rugged",
        description: "Bright, IP65-rated touch display for real-time visualization of solar generation, temperatures, and water levels.",
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
    }
    
];

// Product Category Filters Configuration
const PRODUCT_FILTERS = [
    { key: "all", label: "All Equipment" },
    { key: "solar", label: "Solar & Inverters" },
    { key: "energy", label: "Energy Meters" },
    { key: "plc", label: "Controllers & HMIs" }
];


// ==========================================================================
// 2. SOLUTIONS DATA ARRAY (Add new services here easily)
// ==========================================================================
const SOLUTIONS_DATA = [
    {
        id: "sol-1",
        title: "Solar PV & Hybrid Power Installation",
        costBase: 4500,
        description: "Complete turnkey solar engineering services—from rooftop structure design and panel mounting to hybrid inverter and battery bank setup.",
        features: [
            "On-grid, off-grid, and hybrid design",
            "Robust structural mounting & cabling",
            "Seamless backup power integration"
        ],
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "sol-2",
        title: "Food & Grain Processing Automation",
        costBase: 3500,
        description: "Automated control systems for grain dryers, sorting lines, milling facilities, and food packaging processes.",
        features: [
            "Precision moisture & temperature control",
            "Automated batching & motor optimization",
            "Reduced operational downtime"
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "sol-3",
        title: "Water & Wastewater Management",
        costBase: 4200,
        description: "Smart pumping stations, chemical dosing automation, and real-time monitoring for clean water treatment facilities.",
        features: [
            "Energy-efficient VFD pump control",
            "Automated pH, turbidity, and flow telemetry",
            "Environmentally compliant discharge management"
        ],
        image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f86f6?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "sol-4",
        title: "Energy Monitoring & Excel Reporting Solutions",
        costBase: 2800,
        description: "Our flagship solution tracks plant power metrics and automatically delivers transparent weekly and monthly usage reports directly in Microsoft Excel formats.",
        features: [
            "Clear, easy-to-read Excel usage reports",
            "Identification of energy spikes & waste areas",
            "Data-driven carbon footprint reduction"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "sol-5",
        title: "Building Management Systems (BMS)",
        costBase: 5000,
        description: "Intelligent control for commercial and industrial facilities, automating lighting, ventilation, HVAC, and energy conservation across modern infrastructure.",
        features: [
            "Centralized facility supervisory control",
            "Smart HVAC scheduling and power conservation",
            "Reduced utility and maintenance expenses"
        ],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    }
];


// ==========================================================================
// 3. APPLICATION LOGIC & DYNAMIC RENDERERS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderSolutions();
    initNavigation();
    initEstimator();
    initContactForm();
    initModal();
});

// Switch Page Router
function switchPage(pageId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => section.classList.remove('active'));

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));

    const targetSection = document.getElementById(pageId);
    if (targetSection) targetSection.classList.add('active');

    const activeNav = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
    if (activeNav) activeNav.classList.add('active');

    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('show')) navLinks.classList.remove('show');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage(btn.getAttribute('data-page'));
        });
    });

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
}

// Render Products Grid & Filter Buttons Dynamically
function renderProducts() {
    const filterBar = document.getElementById('filterBar');
    const productGrid = document.getElementById('productGrid');

    if (!filterBar || !productGrid) return;

    // Render Filters
    filterBar.innerHTML = PRODUCT_FILTERS.map((f, i) => `
        <button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${f.key}">${f.label}</button>
    `).join('');

    // Render Product Cards
    productGrid.innerHTML = PRODUCTS_DATA.map(p => `
        <div class="product-card" data-category="${p.category}">
            <div class="product-img-wrap">
                <img src="${p.image}" alt="${p.title}">
            </div>
            <div class="product-content">
                <span class="product-tag">${p.categoryTag}</span>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="product-footer">
                    <span class="price-badge">${p.badge}</span>
                    <button class="btn btn-sm btn-primary" onclick="openQuoteModal('${p.title}')">Inquire</button>
                </div>
            </div>
        </div>
    `).join('');

    // Attach Filter Event Listeners
    const filterBtns = filterBar.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            const cards = productGrid.querySelectorAll('.product-card');

            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Render Solutions Stack Dynamically
function renderSolutions() {
    const wrapper = document.getElementById('solutionsWrapper');
    const estScopeSelect = document.getElementById('estScope');

    if (wrapper) {
        wrapper.innerHTML = SOLUTIONS_DATA.map(s => `
            <div class="solution-card">
                <img src="${s.image}" alt="${s.title}" class="solution-img">
                <div class="solution-info">
                    <h3>${s.title}</h3>
                    <p>${s.description}</p>
                    <ul class="check-list">
                        ${s.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    // Populate Estimator Dropdown
    if (estScopeSelect) {
        estScopeSelect.innerHTML = SOLUTIONS_DATA.map(s => `
            <option value="${s.costBase}">${s.title}</option>
        `).join('');
    }
}

// Interactive Cost Estimator
function initEstimator() {
    const scopeSelect = document.getElementById('estScope');
    const ioSelect = document.getElementById('estIO');
    const daysInput = document.getElementById('estDays');
    const totalDisplay = document.getElementById('estimatorTotal');

    function calculateTotal() {
        const scopeValue = parseInt(scopeSelect.value) || 0;
        const ioValue = parseInt(ioSelect.value) || 0;
        const daysValue = parseInt(daysInput.value) || 0;
        const dayRate = 500;

        const total = scopeValue + ioValue + (daysValue * dayRate);
        totalDisplay.textContent = `$${total.toLocaleString()}`;
    }

    if (scopeSelect && ioSelect && daysInput) {
        scopeSelect.addEventListener('change', calculateTotal);
        ioSelect.addEventListener('change', calculateTotal);
        daysInput.addEventListener('input', calculateTotal);
        calculateTotal();
    }
}

// Contact Form Handler (Opens mailto client directly to syncrozenith.sz@gmail.com)
function initContactForm() {
    const form = document.getElementById('contactForm');
    const alertBox = document.getElementById('formAlert');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('cName').value;
            const contactInfo = document.getElementById('cEmail').value;
            const subject = document.getElementById('cSubject').value;
            const message = document.getElementById('cMessage').value;

            const recipient = "syncrozenith.sz@gmail.com";
            const emailSubject = encodeURIComponent(`Website Inquiry: ${subject} (${name})`);
            const emailBody = encodeURIComponent(`Hello Syncro Zenith Team,\n\nName / Organization: ${name}\nContact Info: ${contactInfo}\nService Area: ${subject}\n\nProject Requirements / Details:\n${message}`);

            alertBox.className = 'alert-box success';
            alertBox.innerHTML = `Thank you, <strong>${name}</strong>! We've prepared your inquiry. If your email app didn't open automatically, please send your details directly to <a href="mailto:${recipient}?subject=${emailSubject}&body=${emailBody}" style="color: #047857; text-decoration: underline;">${recipient}</a>.`;

            window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
            
            form.reset();
        });
    }
}

// Quote Modal Handlers (Configured to send product inquiry directly to syncrozenith.sz@gmail.com)
function initModal() {
    const modal = document.getElementById('quoteModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalForm = document.getElementById('modalForm');

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }

    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get product name from the modal title element
            const productName = document.getElementById('modalProductName').textContent;
            
            // Get input values from the modal form fields
            // Note: Make sure your modal inputs have id attributes or query them by order
            const quantityInput = modalForm.querySelector('input[type="number"]');
            const contactInput = modalForm.querySelector('input[type="text"]');
            
            const quantity = quantityInput ? quantityInput.value : '1';
            const contactInfo = contactInput ? contactInput.value : '';

            // Target email address
            const recipient = "syncrozenith.sz@gmail.com";
            const emailSubject = encodeURIComponent(`Product Inquiry: ${productName} (Qty: ${quantity})`);
            const emailBody = encodeURIComponent(`Hello Syncro Zenith Team,\n\nI would like to inquire about the following product:\n\nProduct: ${productName}\nQuantity Required: ${quantity}\nContact Phone / Email: ${contactInfo}\n\nPlease send me a quote and further details.`);

            // Open user's email client directly with pre-filled product inquiry
            window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

            alert('Preparing your product inquiry email to syncrozenith.sz@gmail.com...');
            modal.style.display = 'none';
            modalForm.reset();
        });
    }
}

let activeInquiryProduct = "";

function openQuoteModal(productName) {
    const modal = document.getElementById('quoteModal');
    const modalProductName = document.getElementById('modalProductName');
    if (modal && modalProductName) {
        modalProductName.textContent = productName;
        modal.style.display = 'flex';
    }
}

function openQuoteModal(productName) {
    const modal = document.getElementById('quoteModal');
    const modalProductName = document.getElementById('modalProductName');
    if (modal && modalProductName) {
        modalProductName.textContent = productName;
        modal.style.display = 'flex';
    }
}