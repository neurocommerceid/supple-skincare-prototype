/* ==========================================================================
   SUPPLE (by Neurocommerce) — Interactive Application Engine
   1:1 Funner Architecture: Carousels, By-Function Filter, Full PDP, & Cart
   ========================================================================== */

const PRODUCTS = [
  {
    id: 'cloud-bounce',
    slug: 'cloud-bounce',
    title: 'Cloud Bounce Gel Cleanser',
    shortName: 'Cloud Bounce',
    productType: 'Gel Cleanser',
    category: 'cleanse',
    functions: ['cleanse', 'hydrate', 'calm'],
    subtitle: 'Refreshing + pH Balancing',
    cardDescription: 'The perfectly-balanced daily wash — deep pore cleansing and barrier hydration in equal measure',
    shortPdpCopy: 'The universal, barrier-respecting daily gel cleanse.',
    price: 38,
    reviews: 64,
    rating: 4.9,
    outerColor: '#4190de',
    innerColor: '#ffcd01',
    mainImage: 'assets/images/prod-1-cleanse.jpg',
    hoverImage: 'assets/images/prod-1-hover.jpg',
    galleryImages: [
      'assets/images/prod-1-cleanse.jpg',
      'assets/images/hero-bottle.jpg',
      'assets/images/prod-1-hover.jpg'
    ],
    editorialImage: 'assets/images/hero-model.jpg',
    details: 'Formulated at a skin-identical pH of 5.2, Cloud Bounce melts away daily SPF, excess sebum, and urban micro-pollutants without stripping intercellular lipids. Leaves skin bouncy, calm, and prepped for active layering.',
    ingredients: 'Aqua/Water, Coco-Glucoside, Glycerin, Tremella Fuciformis (Snow Mushroom) Sporocarp Extract, Panthenol (Vitamin B5), Ectoin, Sodium PCA, Allantoin, Citric Acid.',
    howToUse: 'Massage 1–2 pumps onto damp skin for 45 seconds until a dense micro-cloud lather forms. Rinse thoroughly with lukewarm water. Use AM and PM.',
    clinical: '98% showed zero transepidermal water loss (TEWL) spike post-wash. 94% reported visibly softer, less reactive skin after 7 days in an independent 32-subject clinical study.',
    pairings: ['peptide-dew', 'whipped-ceramide', 'hydro-mist', 'the-architect']
  },
  {
    id: 'peptide-dew',
    slug: 'peptide-dew',
    title: 'Peptide Dew Plumping Serum',
    shortName: 'Peptide Dew',
    productType: 'Plumping Serum',
    category: 'treat',
    functions: ['plump', 'hydrate', 'smooth'],
    subtitle: 'Plumping + Firming',
    cardDescription: 'A mid-weight multi-peptide serum with a just-right blend of instant dew and deep bounce',
    shortPdpCopy: 'Skincare-level biomimetic peptides for instant glass-skin bounce.',
    price: 54,
    reviews: 89,
    rating: 5.0,
    outerColor: '#fe5100',
    innerColor: '#ffcd01',
    mainImage: 'assets/images/prod-2-serum.jpg',
    hoverImage: 'assets/images/prod-2-hover.jpg',
    galleryImages: [
      'assets/images/prod-2-serum.jpg',
      'assets/images/prod-2-hover.jpg',
      'assets/images/hero-bottle.jpg'
    ],
    editorialImage: 'https://cdn.sanity.io/images/49bk2ju6/production/e5df7e050d250d9a70a2f8bde158f5d7fd32c659-3000x4000.jpg',
    details: 'Powered by a 12% hexapeptide and copper tripeptide complex suspended in multi-molecular hyaluronic acid. Delivers immediate surface luminosity while reinforcing dermal density over time.',
    ingredients: 'Aqua/Water, Propanediol, Acetyl Hexapeptide-8, Copper Tripeptide-1, Palmitoyl Tripeptide-38, Hydrolyzed Hyaluronic Acid, Beta-Glucan, Polyglutamic Acid.',
    howToUse: 'Press 2–3 drops into damp skin immediately after misting or cleansing. Can be mixed directly with Whipped Ceramide Barrier Cream for a cushioned glow.',
    clinical: '96% demonstrated a +34% increase in skin elasticity and surface bounce within 14 days of twice-daily application.',
    pairings: ['whipped-ceramide', 'cloud-bounce', 'nectar-glaze', 'hydro-mist']
  },
  {
    id: 'whipped-ceramide',
    slug: 'whipped-ceramide',
    title: 'Whipped Ceramide Barrier Cream',
    shortName: 'Whipped Ceramide',
    productType: 'Barrier Cream',
    category: 'hydrate',
    functions: ['hydrate', 'shield', 'calm'],
    subtitle: 'Ultimate cushion + Hydration',
    cardDescription: 'A nourishing, cloud-whipped butter cream for smoother texture and 72-hour barrier lock',
    shortPdpCopy: 'Biomimetic 5-ceramide cloud cream that seals without suffocating.',
    price: 48,
    reviews: 112,
    rating: 4.9,
    outerColor: '#ffcd01',
    innerColor: '#4190de',
    mainImage: 'assets/images/prod-3-cream.jpg',
    hoverImage: 'assets/images/prod-3-hover.jpg',
    galleryImages: [
      'assets/images/prod-3-cream.jpg',
      'assets/images/prod-3-hover.jpg',
      'assets/images/prod-1-cleanse.jpg'
    ],
    editorialImage: 'https://cdn.sanity.io/images/49bk2ju6/production/9ab9c5a50562a5b6011cc0a44f6336415dc4eb83-3000x4000.jpg',
    details: 'Formulated with a golden 3:1:1 ratio of ceramides, cholesterol, and free fatty acids whipped into an airy soufflé texture. Melts on contact to repair compromised barriers and lock in actives.',
    ingredients: 'Aqua/Water, Squalane, Ceramide NP, Ceramide AP, Ceramide EOP, Cholesterol, Phytosphingosine, Butyrospermum Parkii (Shea) Butter, Madecassoside.',
    howToUse: 'Warm a pearl-sized amount between fingertips and press over face and neck. Layer a second coat on dry zones as an overnight sleeping pack.',
    clinical: 'Clinically proven to restore damaged skin barrier function 2.4x faster than untreated skin within 24 hours.',
    pairings: ['peptide-dew', 'nectar-glaze', 'cloud-bounce', 'the-architect']
  },
  {
    id: 'flash-polish',
    slug: 'flash-polish',
    title: 'Flash Polish Enzyme Mask',
    shortName: 'Flash Polish',
    productType: 'Enzyme Mask',
    category: 'treat',
    functions: ['brighten', 'clarify', 'smooth'],
    subtitle: 'Flexible resurfacing + Glow',
    cardDescription: 'A gentle PHA and papaya enzyme jelly mask for all skin types and sensitivity levels',
    shortPdpCopy: '10-minute pore-refining jelly mask for instant baby-soft clarity.',
    price: 46,
    reviews: 41,
    rating: 4.8,
    outerColor: '#7c55c6',
    innerColor: '#4190de',
    mainImage: 'assets/images/prod-4-mask.jpg',
    hoverImage: 'assets/images/prod-4-hover.jpg',
    galleryImages: [
      'assets/images/prod-4-mask.jpg',
      'assets/images/prod-4-hover.jpg',
      'assets/images/prod-1-cleanse.jpg'
    ],
    editorialImage: 'https://cdn.sanity.io/images/49bk2ju6/production/2386a3c4df265b504284c5f5a1fa1e16801e8f3f-3000x4000.jpg',
    details: 'Combines 8% Gluconolactone (PHA) with fermented pomegranate and papaya enzymes to dissolve dead surface cells without micro-tears or acid sting.',
    ingredients: 'Aqua/Water, Gluconolactone, Lactobacillus/Punica Granatum Fruit Ferment Extract, Papain, Niacinamide, Bisabolol, Cyanocobalamin.',
    howToUse: 'Apply an even, visible layer to clean, dry skin. Leave on for 10–15 minutes, then rinse with warm water. Follow with Hydro-Mist and Barrier Cream.',
    clinical: '92% saw visibly smaller-looking pores and smoother makeup application after a single 10-minute session.',
    pairings: ['hydro-mist', 'whipped-ceramide', 'nectar-glaze', 'cloud-bounce']
  },
  {
    id: 'nectar-glaze',
    slug: 'nectar-glaze',
    title: 'Nectar Glaze Barrier Oil',
    shortName: 'Nectar Glaze',
    productType: 'Barrier Oil',
    category: 'barrier',
    functions: ['shield', 'hydrate', 'brighten'],
    subtitle: 'High glow + Smooth finish',
    cardDescription: 'A weightless squalane and prickly pear oil for instantly supple skin and a glass-glow finish',
    shortPdpCopy: 'Dry-touch botanical lipid oil for high-wattage radiance.',
    price: 52,
    reviews: 53,
    rating: 4.9,
    outerColor: '#7c55c6',
    innerColor: '#fe5100',
    mainImage: 'assets/images/prod-5-oil.jpg',
    hoverImage: 'assets/images/prod-5-hover.jpg',
    galleryImages: [
      'assets/images/prod-5-oil.jpg',
      'assets/images/prod-5-hover.jpg',
      'assets/images/hero-bottle.jpg'
    ],
    editorialImage: 'https://cdn.sanity.io/images/49bk2ju6/production/2dfc10d0c5ca281dc16e3b1a59eecf6bf710e44f-3000x4000.jpg',
    details: 'Cold-pressed prickly pear seed oil, sugarcane squalane, and oil-soluble Vitamin C (THD Ascorbate) cushion skin in antioxidant lipids with zero greasy residue.',
    ingredients: 'Squalane, Opuntia Ficus-Indica Seed Oil, Tetrahexyldecyl Ascorbate,Hippophae Rhamnoides (Sea Buckthorn) Oil, Tocopherol, Bisabolol.',
    howToUse: 'Pat 2–4 drops as the final step of your routine to seal in moisture, or blend 1 drop into foundation for an editorial dewy finish.',
    clinical: '100% non-comedogenic in 28-day clinical testing. Delivers +68% immediate surface radiance.',
    pairings: ['whipped-ceramide', 'peptide-dew', 'the-architect', 'cloud-bounce']
  },
  {
    id: 'hydro-mist',
    slug: 'hydro-mist',
    title: 'Hydro-Mist Microbiome Tonic',
    shortName: 'Hydro-Mist',
    productType: 'Microbiome Tonic',
    category: 'hydrate',
    functions: ['hydrate', 'calm', 'reset'],
    subtitle: 'Buildable dew + Biome prep',
    cardDescription: 'A super-sheer postbiotic mist for soft, bouncy hydration and instant redness relief',
    shortPdpCopy: 'Ultra-fine ectoin & postbiotic cloud mist for on-demand reset.',
    price: 36,
    reviews: 77,
    rating: 4.9,
    outerColor: '#00b241',
    innerColor: '#ffcd01',
    mainImage: 'assets/images/prod-6-mist.jpg',
    hoverImage: 'assets/images/prod-6-hover.jpg',
    galleryImages: [
      'assets/images/prod-6-mist.jpg',
      'assets/images/prod-6-hover.jpg',
      'assets/images/prod-1-cleanse.jpg'
    ],
    editorialImage: 'https://cdn.sanity.io/images/49bk2ju6/production/d6542ec63199b696d8e42b5bf088f42c60092b72-3000x4000.jpg',
    details: 'Dispensed through a custom micro-nebulizer nozzle, Hydro-Mist blankets skin in 2% Ectoin, lactobacillus ferment, and Centella Asiatica to sandwich moisture between every skincare step.',
    ingredients: 'Aqua/Water, Ectoin, Lactobacillus Ferment Lysate, Centella Asiatica Extract, Betaine, Sodium Hyaluronate, Dipotassium Glycyrrhizate.',
    howToUse: 'Mist generously between serum and moisturizer steps to boost absorption, or spritz over makeup throughout the day.',
    clinical: 'Reduces visible facial redness and thermal skin temperature within 60 seconds of application.',
    pairings: ['peptide-dew', 'cloud-bounce', 'whipped-ceramide', 'flash-polish']
  },
  {
    id: 'the-architect',
    slug: 'the-architect',
    title: 'The Architect Retinal Emulsion',
    shortName: 'The Architect',
    productType: 'Retinal Emulsion',
    category: 'barrier',
    functions: ['smooth', 'plump', 'reset'],
    subtitle: 'Ultimate repair + Night renewal',
    cardDescription: 'A clinical-grade encapsulated retinal serum for 360°, inside-out cellular renewal',
    shortPdpCopy: '0.1% Encapsulated Retinaldehyde for rapid renewal without the purge.',
    price: 62,
    reviews: 95,
    rating: 5.0,
    outerColor: '#ffcd01',
    innerColor: '#eb6fbd',
    mainImage: 'assets/images/prod-7-retinal.jpg',
    hoverImage: 'assets/images/prod-7-hover.jpg',
    galleryImages: [
      'assets/images/prod-7-retinal.jpg',
      'assets/images/prod-7-hover.jpg',
      'assets/images/hero-bottle.jpg'
    ],
    editorialImage: 'assets/images/hero-model.jpg',
    details: 'Works 11x faster than standard retinol while remaining gentle on sensitive barriers thanks to cyclodextrin time-release encapsulation and soothing oat ceramides.',
    ingredients: 'Aqua/Water, Caprylic/Capric Triglyceride, Retinal (0.1%), Avena Sativa (Oat) Kernel Oil, Bakuchiol, Ceramide NP, Niacinamide, Squalane.',
    howToUse: 'Apply 1 pump to clean, dry skin in the evening. Follow with Whipped Ceramide Barrier Cream. Always wear SPF the next morning.',
    clinical: '94% saw a visible reduction in fine lines, post-blemish marks, and uneven texture in 4 weeks with zero flaking.',
    pairings: ['whipped-ceramide', 'nectar-glaze', 'cloud-bounce', 'hydro-mist']
  }
];

const COLLECTIONS = [
  {
    slug: 'cleanse',
    title: 'Cleanse',
    hoverColor: '#4190de',
    image: 'https://cdn.sanity.io/images/49bk2ju6/production/9ab9c5a50562a5b6011cc0a44f6336415dc4eb83-3000x4000.jpg'
  },
  {
    slug: 'treat',
    title: 'Treat',
    hoverColor: '#fe5100',
    image: 'https://cdn.sanity.io/images/49bk2ju6/production/2386a3c4df265b504284c5f5a1fa1e16801e8f3f-3000x4000.jpg'
  },
  {
    slug: 'hydrate',
    title: 'Hydrate',
    hoverColor: '#ffcd01',
    image: 'https://cdn.sanity.io/images/49bk2ju6/production/2dfc10d0c5ca281dc16e3b1a59eecf6bf710e44f-3000x4000.jpg'
  },
  {
    slug: 'barrier',
    title: 'Barrier',
    hoverColor: '#b680d2',
    image: 'https://cdn.sanity.io/images/49bk2ju6/production/d6542ec63199b696d8e42b5bf088f42c60092b72-3000x4000.jpg'
  }
];

// Application State
let cart = [
  { id: 'cloud-bounce', qty: 1 }
];
let activeFilter = null;
let currentPdpProduct = null;
const FREE_SHIPPING_THRESHOLD = 75;

// ============================================================================
// Initialization
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProductCarousel(PRODUCTS);
  renderCollectionCarousel();
  setupNavigationAndFilters();
  setupCarouselsDragAndArrows();
  setupCartDrawer();
  updateCartUI();
});

// ============================================================================
// Render Product Carousel Cards (Exact Funner DOM + Classes)
// ============================================================================
function renderProductCarousel(productList) {
  const track = document.getElementById('product-carousel-track');
  if (!track) return;

  track.innerHTML = productList.map((p) => `
    <div class="carousel-slide">
      <article class="product-card" data-product-id="${p.id}" aria-label="${p.title}">
        <div class="product-card-media">
          <img class="product-card-img-main" src="${p.mainImage}" alt="${p.title} solo packshot" loading="lazy" />
          <img class="product-card-img-hover" src="${p.hoverImage}" alt="${p.title} stacked texture packshot" loading="lazy" />
        </div>

        <div class="product-card-hover-Well">
          <div class="product-card-benefit-bar" style="--card-color: ${p.outerColor}">
            <p class="type-headings">${p.subtitle}</p>
            <p class="type-body">${p.cardDescription}</p>
          </div>
        </div>

        <div class="product-card-info-bar">
          <div class="product-card-info-row">
            <div class="product-card-title-group">
              <div class="crest-donut" style="--outer-color: ${p.outerColor}; --inner-color: ${p.innerColor}">
                <div class="crest-donut-inner"></div>
              </div>
              <div>
                <h3 class="type-title text-balance">${p.title}</h3>
                <p class="type-body mobile-subtitle">${p.subtitle}</p>
              </div>
            </div>
            <p class="type-title">$${p.price}</p>
          </div>
        </div>
      </article>
    </div>
  `).join('');

  // Bind click to open PDP
  track.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (track.dataset.dragging === 'true') return;
      const pid = card.getAttribute('data-product-id');
      openProductDetail(pid);
    });
  });
}

// ============================================================================
// Render Collection Carousel ("Play with your skin")
// ============================================================================
function renderCollectionCarousel() {
  const track = document.getElementById('collection-carousel-track');
  if (!track) return;

  track.innerHTML = COLLECTIONS.map((c) => `
    <div class="carousel-slide">
      <div class="collection-card" data-category="${c.slug}" style="--col-hover-color: ${c.hoverColor}" role="button" tabindex="0" aria-label="${c.title}">
        <img src="${c.image}" alt="${c.title} editorial portrait" loading="lazy" />
        <div class="collection-card-scrim"></div>
        <div class="collection-card-color-overlay"></div>
        <h3 class="collection-card-title type-headings">${c.title}</h3>
      </div>
    </div>
  `).join('');

  track.querySelectorAll('.collection-card').forEach((card) => {
    card.addEventListener('click', () => {
      if (track.dataset.dragging === 'true') return;
      const cat = card.getAttribute('data-category');
      applyCategoryOrFunctionFilter({ type: 'category', value: cat, label: cat.toUpperCase() });
    });
  });
}

// ============================================================================
// Navigation, "By Function" Dropdown, & Filtering
// ============================================================================
function setupNavigationAndFilters() {
  const fnBtn = document.getElementById('by-function-btn');
  const fnMenu = document.getElementById('by-function-menu');

  if (fnBtn && fnMenu) {
    fnBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = fnBtn.getAttribute('aria-expanded') === 'true';
      fnBtn.setAttribute('aria-expanded', String(!expanded));
      fnMenu.classList.toggle('is-open', !expanded);
    });

    document.addEventListener('click', () => {
      fnBtn.setAttribute('aria-expanded', 'false');
      fnMenu.classList.remove('is-open');
    });
  }

  // Category nav buttons
  document.querySelectorAll('[data-nav-category]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = btn.getAttribute('data-nav-category');
      if (cat === 'all') {
        clearFilter();
        closeProductDetail();
        document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        applyCategoryOrFunctionFilter({ type: 'category', value: cat, label: cat.toUpperCase() });
      }
    });
  });

  // By Function dropdown items
  document.querySelectorAll('[data-nav-function]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const fn = btn.getAttribute('data-nav-function');
      applyCategoryOrFunctionFilter({ type: 'function', value: fn, label: `BENEFIT: ${fn.toUpperCase()}` });
    });
  });

  // Home crest link
  document.querySelectorAll('[data-home-link]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      clearFilter();
      closeProductDetail();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Reset filter button
  const resetBtn = document.getElementById('clear-filter-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      clearFilter();
    });
  }
}

function applyCategoryOrFunctionFilter({ type, value, label }) {
  closeProductDetail();
  activeFilter = { type, value, label };

  const filtered = PRODUCTS.filter((p) => {
    if (type === 'category') return p.category === value;
    if (type === 'function') return p.functions.includes(value);
    return true;
  });

  renderProductCarousel(filtered.length ? filtered : PRODUCTS);

  const headingEl = document.getElementById('carousel-heading');
  const subEl = document.getElementById('carousel-subheading');
  const clearBtn = document.getElementById('clear-filter-btn');

  if (headingEl) headingEl.textContent = label;
  if (subEl) subEl.textContent = `${filtered.length} clinical formulas designed to mix, layer, and match.`;
  if (clearBtn) clearBtn.style.display = 'inline-flex';

  document.querySelectorAll('[data-nav-category]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-nav-category') === value);
  });

  document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
}

function clearFilter() {
  activeFilter = null;
  renderProductCarousel(PRODUCTS);

  const headingEl = document.getElementById('carousel-heading');
  const subEl = document.getElementById('carousel-subheading');
  const clearBtn = document.getElementById('clear-filter-btn');

  if (headingEl) headingEl.textContent = 'Performance-powered play';
  if (subEl) subEl.textContent = '21 formulas. Made to be mixed, layered, and matched.';
  if (clearBtn) clearBtn.style.display = 'none';

  document.querySelectorAll('[data-nav-category]').forEach((btn) => {
    btn.classList.remove('is-active');
  });
}

// ============================================================================
// Full 1:1 Funner Product Detail View (PDP)
// ============================================================================
function openProductDetail(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;
  currentPdpProduct = product;

  const homeView = document.getElementById('home-view');
  const pdpView = document.getElementById('pdp-view');
  if (!homeView || !pdpView) return;

  const crossSellProducts = product.pairings
    .map((pid) => PRODUCTS.find((item) => item.id === pid))
    .filter(Boolean);

  pdpView.innerHTML = `
    <div class="pdp-grid">
      <!-- Left Column: Interactive Gallery + Secondary Editorial Portrait -->
      <div class="pdp-gallery-col">
        <div class="pdp-main-stage">
          <img id="pdp-stage-img" src="${product.galleryImages[0]}" alt="${product.title}" />
          <div class="pdp-thumbs" style="--pdp-color: ${product.outerColor}">
            ${product.galleryImages.map((imgUrl, idx) => `
              <button type="button" class="pdp-thumb-btn" data-thumb-src="${imgUrl}" aria-label="Show image ${idx + 1}" aria-pressed="${idx === 0 ? 'true' : 'false'}">
                <img src="${imgUrl}" alt="Thumbnail ${idx + 1}" />
                <div class="pdp-thumb-bar"></div>
              </button>
            `).join('')}
          </div>
        </div>
        <div class="pdp-editorial-shot">
          <img src="${product.editorialImage}" alt="${product.title} editorial lifestyle" loading="lazy" />
        </div>
      </div>

      <!-- Right Column: Sticky Info Panel, Accordions, & "Supple with..." -->
      <div class="pdp-details-col">
        <div class="pdp-sticky-panel">
          <div class="pdp-panel-inner">
            <div style="margin-bottom: 24px; display: flex; align-items: center; gap: 8px;" class="type-body">
              <button type="button" id="pdp-back-btn" class="footer-nav-link" style="padding:0; display:inline-flex; align-items:center; gap:6px;">
                <span>← Back to Shop All</span>
              </button>
              <span>/</span>
              <span class="uppercase">${product.category}</span>
            </div>

            <div class="pdp-header-row">
              <div class="crest-donut" style="--outer-color: ${product.outerColor}; --inner-color: ${product.innerColor}">
                <div class="crest-donut-inner"></div>
              </div>
              <div>
                <h1 class="type-title text-balance">${product.title}</h1>
                <p class="type-body" style="margin-top: 4px;">${product.subtitle}</p>
              </div>
            </div>

            <div class="pdp-rating-row">
              <div class="stars-row" aria-label="${product.rating} out of 5 stars">
                ${[1, 2, 3, 4, 5].map(() => `
                  <svg viewBox="0 0 24 24" class="star-icon"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"></path></svg>
                `).join('')}
              </div>
              <span class="type-body">(${product.reviews} Reviews)</span>
            </div>

            <p class="type-body pdp-short-desc">${product.shortPdpCopy}</p>

            <button type="button" id="pdp-add-to-cart" class="button button-primary button-hover-color" style="width: 100%; --button-hover-color: ${product.outerColor}">
              <span style="display:flex; width:100%; justify-content:space-between; align-items:center;">
                <span>Add to Cart</span>
                <span>$${product.price}</span>
              </span>
            </button>

            <!-- 4 Signature Color-Coded Accordions -->
            <div class="pdp-accordions">
              ${renderAccordionItem('Details', product.details, '#fe5100', '#4190de', true)}
              ${renderAccordionItem('Ingredients', product.ingredients, '#ffcd01', '#7c55c6', false)}
              ${renderAccordionItem('How To Use', product.howToUse, '#00b241', '#eb6fbd', false)}
              ${renderAccordionItem('Clinically Proven', product.clinical, '#7c55c6', '#ffcd01', false)}
            </div>

            <!-- Cross-sell List: "Supple with..." -->
            <h2 class="type-title cross-sell-heading">Supple with...</h2>
            <ul class="cross-sell-list">
              ${crossSellProducts.map((cp) => `
                <li class="cross-sell-item">
                  <div class="cross-sell-thumb" data-open-pdp="${cp.id}">
                    <img src="${cp.mainImage}" alt="${cp.title}" />
                  </div>
                  <div class="cross-sell-meta" data-open-pdp="${cp.id}">
                    <h3 class="type-title">${cp.title}</h3>
                    <p class="type-body">${cp.subtitle}</p>
                  </div>
                  <div class="cross-sell-action">
                    <button type="button" class="button button-primary" data-quick-add="${cp.id}">Add + $${cp.price}</button>
                  </div>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  homeView.style.display = 'none';
  pdpView.classList.add('is-active');
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Bind PDP events
  document.getElementById('pdp-back-btn')?.addEventListener('click', closeProductDetail);

  document.getElementById('pdp-add-to-cart')?.addEventListener('click', () => {
    addToCart(product.id, 1);
    openCartDrawer();
  });

  // Thumbnail switching
  const stageImg = document.getElementById('pdp-stage-img');
  pdpView.querySelectorAll('.pdp-thumb-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-thumb-src');
      if (stageImg && src) stageImg.src = src;
      pdpView.querySelectorAll('.pdp-thumb-btn').forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
    });
  });

  // Accordions
  pdpView.querySelectorAll('.accordion-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const isOpen = item.classList.contains('is-open');
      item.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // Cross-sell navigation & quick-add
  pdpView.querySelectorAll('[data-open-pdp]').forEach((el) => {
    el.addEventListener('click', () => {
      openProductDetail(el.getAttribute('data-open-pdp'));
    });
  });

  pdpView.querySelectorAll('[data-quick-add]').forEach((btn) => {
    btn.addEventListener('click', () => {
      addToCart(btn.getAttribute('data-quick-add'), 1);
      openCartDrawer();
    });
  });
}

function renderAccordionItem(title, content, outerHex, innerHex, isOpenDefault) {
  return `
    <div class="accordion-item ${isOpenDefault ? 'is-open' : ''}">
      <h3>
        <button type="button" class="accordion-trigger function-btn" aria-expanded="${isOpenDefault ? 'true' : 'false'}">
          <div class="crest-donut" style="--outer-color: ${outerHex}; --inner-color: ${innerHex}">
            <div class="crest-donut-inner"></div>
          </div>
          <span class="accordion-label type-headings">${title}</span>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" class="plus-icon" aria-hidden="true">
            <path class="line-h" d="M0 5.24512H10.5" stroke="currentColor" stroke-width="2.6"></path>
            <path class="line-v" d="M5.25391 0L5.25391 10.5" stroke="currentColor" stroke-width="2.6"></path>
          </svg>
        </button>
      </h3>
      <div class="accordion-content">
        <div class="accordion-content-inner">
          <p class="accordion-body type-body">${content}</p>
        </div>
      </div>
    </div>
  `;
}

function closeProductDetail() {
  const homeView = document.getElementById('home-view');
  const pdpView = document.getElementById('pdp-view');
  if (homeView && pdpView) {
    pdpView.classList.remove('is-active');
    homeView.style.display = 'block';
  }
}

// ============================================================================
// Carousel Drag & Arrow Controls
// ============================================================================
function setupCarouselsDragAndArrows() {
  document.querySelectorAll('.carousel-wrapper').forEach((wrapper) => {
    const track = wrapper.querySelector('.carousel-track');
    const prevBtn = wrapper.querySelector('.carousel-arrow.prev');
    const nextBtn = wrapper.querySelector('.carousel-arrow.next');
    if (!track) return;

    prevBtn?.addEventListener('click', () => {
      const slideWidth = track.querySelector('.carousel-slide')?.offsetWidth || 360;
      track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    });

    nextBtn?.addEventListener('click', () => {
      const slideWidth = track.querySelector('.carousel-slide')?.offsetWidth || 360;
      track.scrollBy({ left: slideWidth, behavior: 'smooth' });
    });

    // Mouse drag scrolling
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      track.dataset.dragging = 'false';
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });

    track.addEventListener('mouseleave', () => {
      isDown = false;
    });

    track.addEventListener('mouseup', () => {
      isDown = false;
      setTimeout(() => { track.dataset.dragging = 'false'; }, 50);
    });

    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.4;
      if (Math.abs(walk) > 8) {
        track.dataset.dragging = 'true';
        e.preventDefault();
        track.scrollLeft = scrollLeft - walk;
      }
    });
  });
}

// ============================================================================
// Cart Drawer & State Management
// ============================================================================
function setupCartDrawer() {
  const openBtn = document.getElementById('open-cart-btn');
  const closeBtn = document.getElementById('close-cart-btn');
  const backdrop = document.getElementById('cart-backdrop');

  openBtn?.addEventListener('click', openCartDrawer);
  closeBtn?.addEventListener('click', closeCartDrawer);
  backdrop?.addEventListener('click', closeCartDrawer);
}

function openCartDrawer() {
  document.getElementById('cart-backdrop')?.classList.add('is-open');
  document.getElementById('cart-drawer')?.classList.add('is-open');
}

function closeCartDrawer() {
  document.getElementById('cart-backdrop')?.classList.remove('is-open');
  document.getElementById('cart-drawer')?.classList.remove('is-open');
}

function addToCart(productId, delta = 1) {
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += delta;
    if (existing.qty <= 0) {
      cart = cart.filter((item) => item.id !== productId);
    }
  } else if (delta > 0) {
    cart.push({ id: productId, qty: delta });
  }
  updateCartUI();
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => {
    const p = PRODUCTS.find((prod) => prod.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);

  // Header badge
  const countEl = document.getElementById('header-cart-count');
  if (countEl) countEl.textContent = String(totalCount);

  const drawerCountEl = document.getElementById('drawer-cart-count');
  if (drawerCountEl) drawerCountEl.textContent = String(totalCount);

  // Free shipping progress bar
  const shippingText = document.getElementById('cart-shipping-text');
  const shippingFill = document.getElementById('cart-shipping-fill');
  if (shippingText && shippingFill) {
    const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    const pct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
    shippingFill.style.width = `${pct}%`;
    shippingText.textContent = remaining === 0
      ? 'Your order ships free!'
      : `You are $${remaining} away from free shipping.`;
  }

  // Cart items list
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-price');
  if (subtotalEl) subtotalEl.textContent = `$${subtotal}`;

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="padding: 48px 0; text-align: center;">
        <p class="type-body" style="margin-bottom: 20px;">Your cart is empty.</p>
        <button type="button" class="button button-primary" id="empty-cart-shop-btn">Shop All</button>
      </div>
    `;
    document.getElementById('empty-cart-shop-btn')?.addEventListener('click', closeCartDrawer);
    return;
  }

  // Upsells not yet in cart
  const upsells = PRODUCTS.filter((p) => !cart.some((c) => c.id === p.id)).slice(0, 2);

  container.innerHTML = `
    <div>
      ${cart.map((item) => {
        const p = PRODUCTS.find((prod) => prod.id === item.id);
        if (!p) return '';
        return `
          <div class="cart-line-item">
            <div class="cart-line-thumb">
              <img src="${p.mainImage}" alt="${p.title}" />
            </div>
            <div style="flex:1;">
              <div style="display:flex; justify-content:space-between; gap:8px;">
                <h4 class="type-title">${p.shortName}</h4>
                <span class="type-title">$${p.price * item.qty}</span>
              </div>
              <p class="type-body" style="margin-top:2px; color: var(--color-gray-500);">${p.productType}</p>
              <div class="cart-qty-pill">
                <button type="button" class="type-title" data-cart-dec="${p.id}" aria-label="Decrease quantity">−</button>
                <span class="type-body">${item.qty}</span>
                <button type="button" class="type-title" data-cart-inc="${p.id}" aria-label="Increase quantity">+</button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    ${upsells.length ? `
      <div style="margin-top: 32px;">
        <h4 class="type-headings" style="margin-bottom: 12px;">We think you may also like:</h4>
        ${upsells.map((u) => `
          <div class="cart-line-item" style="border-bottom: none; padding: 8px 0;">
            <div class="cart-line-thumb">
              <img src="${u.mainImage}" alt="${u.title}" />
            </div>
            <div style="flex:1;">
              <h5 class="type-title">${u.shortName}</h5>
              <p class="type-body" style="margin-top:2px;">${u.subtitle}</p>
            </div>
            <button type="button" class="button button-outline" style="height:34px; padding: 0 14px;" data-cart-upsell="${u.id}">
              Add $${u.price}
            </button>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;

  container.querySelectorAll('[data-cart-dec]').forEach((btn) => {
    btn.addEventListener('click', () => addToCart(btn.getAttribute('data-cart-dec'), -1));
  });
  container.querySelectorAll('[data-cart-inc]').forEach((btn) => {
    btn.addEventListener('click', () => addToCart(btn.getAttribute('data-cart-inc'), 1));
  });
  container.querySelectorAll('[data-cart-upsell]').forEach((btn) => {
    btn.addEventListener('click', () => addToCart(btn.getAttribute('data-cart-upsell'), 1));
  });
}
