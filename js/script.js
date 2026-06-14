/* ============================================================
   PIZZAS — дані меню. Додавайте/редагуйте тут.
   ============================================================ */
const PIZZAS = [
  /* Піци */
  { name: "Маргарита",        ingredients: "Соус томатний, моцарела, базилік, оливкова олія",                        price: 210, weight: 450, image: "images/pizza/margherita.jpg",     category: "pizza" },
  { name: "Пепероні",         ingredients: "Соус томатний, салямі пепероні, моцарела, орегано",                      price: 250, weight: 520, image: "images/pizza/pepperoni.jpg",       category: "pizza" },
  { name: "Капріччоза",       ingredients: "Соус томатний, шинка, гриби, маслини, моцарела",                         price: 260, weight: 530, image: "images/pizza/capricciosa.jpg",     category: "pizza" },
  { name: "Чотири сири",      ingredients: "Моцарела, дор блю, пармезан, чеддер, соус вершковий",                    price: 290, weight: 500, image: "images/pizza/four_cheese.jpg",     category: "pizza" },
  { name: "Два сири",         ingredients: "Моцарела, чеддер, соус вершковий, часник, базилік",                      price: 245, weight: 470, image: "images/pizza/two_cheese.jpg",      category: "pizza" },
  { name: "Анна",             ingredients: "Олія рослинна, спеції, помідор, бекон, курка, бринза, сир",              price: 270, weight: 530, image: "images/pizza/anna.jpg",            category: "pizza" },
  { name: "Венеція",          ingredients: "Соус томатний, каперси, маслини, в'ялені томати, моцарела",              price: 265, weight: 510, image: "images/pizza/venice.jpg",          category: "pizza" },
  { name: "Мисливська",       ingredients: "Соус томатний, ковбаски мисливські, бринза, помідор, сир",               price: 280, weight: 540, image: "images/pizza/hunters.jpg",         category: "pizza" },
  { name: "Сіціліана",        ingredients: "Соус томатний, анчоуси, каперси, маслини, моцарела",                     price: 255, weight: 490, image: "images/pizza/sicilian.jpg",        category: "pizza" },
  { name: "Сімона",           ingredients: "Соус томатний, шинка, гриби, болгарський перець, кукурудза, моцарела",   price: 275, weight: 560, image: "images/pizza/simone.jpg",          category: "pizza" },
  { name: "Гавайї",           ingredients: "Соус томатний, шинка, ананас, моцарела",                                 price: 240, weight: 480, image: "images/pizza/hawaii.jpg",          category: "pizza" },
  { name: "Вегетаріанська",   ingredients: "Соус томатний, броколі, цукіні, болгарський перець, гриби, моцарела",    price: 235, weight: 490, image: "images/pizza/vegetarian.jpg",      category: "pizza" },
  { name: "Прошуто",          ingredients: "Соус томатний, прошуто, руккола, пармезан, моцарела",                    price: 275, weight: 510, image: "images/pizza/prosciutto.jpg",      category: "pizza" },
  { name: "Груша-Камамбер",   ingredients: "Соус вершковий, груша, камамбер, волоські горіхи, мед, руккола",         price: 320, weight: 490, image: "images/pizza/pear_camembert.jpg",  category: "pizza" },
  { name: "Морська",          ingredients: "Соус вершковий, креветки, мідії, кальмар, часник, моцарела",             price: 320, weight: 540, image: "images/pizza/seafood.jpg",         category: "pizza" },
  { name: "Ням-Ням",          ingredients: "Авторський соус, бекон, курка, гриби, болгарський перець, моцарела",     price: 295, weight: 550, image: "images/pizza/yum_yum.jpg",         category: "pizza" },
  /* Холодні напої */
  { name: "Coca-Cola",       ingredients: "Газований напій",                                           price:  45, weight: 500, image: "",                        category: "cold-drink"   },
  { name: "Sprite",          ingredients: "Газований напій",                                           price:  45, weight: 500, image: "",                        category: "cold-drink"   },
  { name: "Fanta",           ingredients: "Газований напій",                                           price:  45, weight: 500, image: "",                        category: "cold-drink"   },
  { name: "Вода негазована", ingredients: "Мінеральна вода",                                           price:  30, weight: 500, image: "",                        category: "cold-drink"   },
  { name: "Сік апельсиновий",ingredients: "100% натуральний сік",                                      price:  55, weight: 250, image: "",                        category: "cold-drink"   },
  /* Десерти */
  { name: "Тірамісу",        ingredients: "Маскарпоне, савоярді, кава, какао",                         price:  85, weight: 150, image: "",                        category: "dessert" },
  { name: "Чізкейк",         ingredients: "Вершковий сир, печиво, вершки, ягоди",                      price:  90, weight: 160, image: "",                        category: "dessert" },
  { name: "Морозиво",        ingredients: "Ванільне, шоколадне або полуничне",                          price:  50, weight: 100, image: "",                        category: "dessert" },
  /* Закуски */
  { name: "Хлібні палички",  ingredients: "Тісто, часниковий соус, зелень, пармезан",                  price:  55, weight: 200, image: "",                        category: "snack"   },
  { name: "Курячі крила",    ingredients: "Курячі крила, соус барбекю, спеції",                         price: 120, weight: 300, image: "",                        category: "snack"   },
  { name: "Салат Цезар",     ingredients: "Романо, курка, сухарики, пармезан, соус Цезар",             price: 110, weight: 250, image: "",                        category: "snack"   },
];

/* ============================================================
   CONFIG — дані піцерії. Змінюйте тут.
   ============================================================ */
const CONFIG = {
  pizzeriaName: "Ням-Ням",
  phone:        "+380501350651",
  phoneDisplay: "+380 50 135 06 51",
  address:      "вул. Перемоги, 62, Помічна, Кіровоградська область, 27030",

  schedule: {
    openHour:  11,
    closeHour: 22,
  },

  socials: {
    instagram:   "https://www.instagram.com/niamniampizzapomichna",
    facebook:    "https://www.facebook.com/OmNomnomimages/pizza/",
    viberNumber: "+380501350651",
  },

  statusOpen:   "Зараз відкрито",
  statusClosed: "Закрито. Відкриємось о 11:00",
};

/* ============================================================
   ІНІЦІАЛІЗАЦІЯ
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  initMenu().then(function () {
    initCatalogFilter();
    initIngredientsToggle();
  });
  initBurger();
  initScrollHeader();
  initOrderButtons();
  initOpenStatus();
  initCopyright();
  initScrollAnimations();
});

/* Expand/collapse ingredients on mobile — hides toggle when text fits */
function initIngredientsToggle() {
  if (!window.matchMedia("(max-width: 768px)").matches) return;
  requestAnimationFrame(function () {
    document.querySelectorAll(".ingredients-wrap").forEach(function (wrap) {
      var text = wrap.querySelector(".pizza-ingredients");
      var btn  = wrap.querySelector(".ingredients-toggle");
      if (!btn || !text) return;
      if (text.scrollHeight <= text.clientHeight + 2) btn.style.display = "none";
    });
  });
}

/* Event delegation — works for all cards including paginated */
document.addEventListener("click", function (e) {
  var btn = e.target.closest(".ingredients-toggle");
  if (!btn) return;
  var wrap = btn.closest(".ingredients-wrap");
  if (!wrap) return;
  var expanded = wrap.classList.toggle("expanded");
  btn.textContent = expanded ? "згорнути ▴" : "ще ▾";
  e.stopPropagation();
});

/* Reads menu from Firestore → localStorage → PIZZAS. Returns Promise. */
function getMenuData() {
  if (window.db) {
    return window.db.collection("menu").doc("items").get()
      .then(function (doc) {
        if (doc.exists && Array.isArray(doc.data().data)) return doc.data().data;
        var stored = localStorage.getItem("nyam-menu");
        return stored ? JSON.parse(stored) : PIZZAS;
      })
      .catch(function () {
        var stored = localStorage.getItem("nyam-menu");
        return stored ? JSON.parse(stored) : PIZZAS;
      });
  }
  var stored = localStorage.getItem("nyam-menu");
  return Promise.resolve(stored ? JSON.parse(stored) : PIZZAS);
}

function initMenu() {
  var grid = document.querySelector(".menu-grid");
  if (!grid) return Promise.resolve();

  return getMenuData().then(function (items) {
    var cat = grid.dataset.category;
    if (cat) items = items.filter(function (p) { return p.category === cat; });

    var limit = Number(grid.dataset.limit);
    if (limit && items.length > limit) {
      items = items.slice().sort(function () { return Math.random() - 0.5; }).slice(0, limit);
    }

    items.forEach(function (pizza, i) {
      var card = document.createElement("div");
      card.className        = "pizza-card";
      card.dataset.index    = i;
      card.dataset.category = pizza.category;
      card.innerHTML =
        '<img src="' + pizza.image + '" class="pizza-image" alt="' + pizza.name + '" loading="lazy">' +
        '<div class="pizza-content">' +
          '<h3 class="pizza-title">' + pizza.name + '</h3>' +
          '<div class="ingredients-wrap">' +
            '<p class="pizza-ingredients">' + pizza.ingredients + '</p>' +
            '<button class="ingredients-toggle" type="button">ще ▾</button>' +
          '</div>' +
          '<div class="pizza-footer">' +
            '<div class="pizza-price">' + pizza.price +
              '<span class="pizza-price-currency">грн</span>' +
            '</div>' +
            '<button class="btn-order" data-pizza="' + pizza.name + '" data-price="' + pizza.price + '">' +
              'Замовити' +
            '</button>' +
          '</div>' +
        '</div>';
      grid.appendChild(card);
    });
  });
}

function initCatalogFilter() {
  var filterEl    = document.querySelector(".catalog-filter");
  var paginEl     = document.getElementById("catalogPagination");
  if (!filterEl) return;

  var currentPage     = 1;
  var currentCategory = "all";

  function getPerPage() {
    return window.matchMedia("(max-width: 768px)").matches ? 8 : 9;
  }

  function allCards() {
    return Array.from(document.querySelectorAll(".catalog-content .pizza-card"));
  }

  function filteredCards() {
    return allCards().filter(function (c) {
      return currentCategory === "all" || c.dataset.category === currentCategory;
    });
  }

  function updateView() {
    var perPage    = getPerPage();
    var cards      = filteredCards();
    var totalPages = Math.max(1, Math.ceil(cards.length / perPage));
    if (currentPage > totalPages) currentPage = totalPages;

    var start = (currentPage - 1) * perPage;
    var end   = start + perPage;

    allCards().forEach(function (c) { c.style.display = "none"; });
    cards.slice(start, end).forEach(function (c) { c.style.display = ""; });

    var empty = document.querySelector(".catalog-empty");
    if (empty) empty.style.display = cards.length === 0 ? "block" : "none";

    renderPagination(totalPages);
  }

  function renderPagination(total) {
    if (!paginEl) return;
    if (total <= 1) { paginEl.innerHTML = ""; return; }

    var pages = buildPagesList(currentPage, total);
    var html  = "";

    html += '<button class="pg-btn pg-arrow"' + (currentPage === 1 ? " disabled" : "") +
            ' data-page="' + (currentPage - 1) + '">&#8592;</button>';

    pages.forEach(function (p) {
      if (p === "…") {
        html += '<span class="pg-dots">…</span>';
      } else {
        html += '<button class="pg-btn' + (p === currentPage ? " pg-active" : "") +
                '" data-page="' + p + '">' + p + '</button>';
      }
    });

    html += '<button class="pg-btn pg-arrow"' + (currentPage === total ? " disabled" : "") +
            ' data-page="' + (currentPage + 1) + '">&#8594;</button>';

    paginEl.innerHTML = html;
  }

  function buildPagesList(cur, total) {
    if (total <= 7) {
      return Array.from({ length: total }, function (_, i) { return i + 1; });
    }
    var list = [1];
    if (cur > 3)           list.push("…");
    for (var i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) list.push(i);
    if (cur < total - 2)   list.push("…");
    list.push(total);
    return list;
  }

  filterEl.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterEl.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("filter-btn-active"); });
    btn.classList.add("filter-btn-active");
    currentCategory = btn.dataset.category;
    currentPage     = 1;
    updateView();
  });

  if (paginEl) {
    paginEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".pg-btn");
      if (!btn || btn.disabled) return;
      currentPage = Number(btn.dataset.page);
      updateView();
      document.querySelector(".catalog-layout").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  updateView();
}

function initBurger() {
  var burger = document.getElementById("burger");
  var nav    = document.querySelector(".header-nav");
  if (!burger || !nav) return;

  burger.addEventListener("click", function () {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
      burger.classList.remove("active");
    });
  });
}

function initScrollHeader() {
  var header = document.querySelector(".header");
  if (!header) return;

  var lastScrollY = 0;

  window.addEventListener("scroll", function () {
    var current = window.pageYOffset || document.documentElement.scrollTop;
    if (current > 100) {
      header.style.transform = current > lastScrollY
        ? "translateY(-100%)"
        : "translateY(0)";
    }
    lastScrollY = current <= 0 ? 0 : current;
  });
}

function initOrderButtons() {
  var modal = createOrderModal();
  document.body.appendChild(modal);

  /* event delegation — спрацьовує навіть для карток, доданих пізніше */
  document.body.addEventListener("click", function (e) {
    var btn = e.target.closest(".btn-order");
    if (!btn) return;
    if (window.matchMedia("(pointer: coarse)").matches) {
      window.location.href = "tel:" + CONFIG.phone;
    } else {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
}

function createOrderModal() {
  var phoneIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">' +
      '<path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2' +
      ' 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 5' +
      'c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>' +
    '</svg>';

  var modal = document.createElement("div");
  modal.className = "order-modal";
  modal.innerHTML =
    '<div class="order-modal-box">' +
      '<button class="order-modal-close" aria-label="Закрити">&times;</button>' +
      '<div class="order-modal-icon">' + phoneIcon + '</div>' +
      '<p class="order-modal-label">Подзвоніть нам</p>' +
      '<a href="tel:' + CONFIG.phone + '" class="order-modal-phone">' + CONFIG.phoneDisplay + '</a>' +
      '<p class="order-modal-hint">натисніть, щоб набрати</p>' +
    '</div>';

  function close() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", function (e) {
    if (e.target === modal) close();
  });
  modal.querySelector(".order-modal-close").addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) close();
  });

  return modal;
}

function initOpenStatus() {
  var el = document.getElementById("openStatus");
  if (!el) return;

  function update() {
    var now    = new Date();
    var mins   = now.getHours() * 60 + now.getMinutes();
    var open   = CONFIG.schedule.openHour  * 60;
    var close  = CONFIG.schedule.closeHour * 60;
    var isOpen = mins >= open && mins < close;

    el.textContent = isOpen ? CONFIG.statusOpen : CONFIG.statusClosed;
    el.style.color = isOpen ? "#7FFF6A" : "#FFB84D";
  }

  update();
  setInterval(update, 60000);
}

function initCopyright() {
  var el = document.getElementById("copyright");
  if (!el) return;
  el.textContent = "Copyright © " + new Date().getFullYear() +
    " " + CONFIG.pizzeriaName + ". Всі права захищені.";
}

function initScrollAnimations() {
  var cards = document.querySelectorAll(".benefit-card, .pizza-card, .review-card");
  cards.forEach(function (el) { el.classList.add("hidden-on-load"); });

  [".benefit-card", ".pizza-card", ".review-card"].forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      el.dataset.index = i;
    });
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var delay = (Number(entry.target.dataset.index) || 0) * 100;
      setTimeout(function () {
        entry.target.classList.remove("hidden-on-load");
        entry.target.classList.add("animate-in");
      }, delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  cards.forEach(function (el) { observer.observe(el); });
}
