var ADMIN_LOGIN         = "admin";
var ADMIN_PASSWORD_HASH = "aaeb3a8e8907c67fa824ae78369b15e554143ef74356059e9f82ad59e316407a";
var STORAGE_KEY    = "nyam-menu";

var PIZZAS = [
  /* Піци */
  { name: "Маргарита",       ingredients: "Соус томатний, моцарела, базилік, оливкова олія",                        price: 210, weight: 450, image: "images/pizza/margherita.jpg",    category: "pizza" },
  { name: "Пепероні",        ingredients: "Соус томатний, салямі пепероні, моцарела, орегано",                      price: 250, weight: 520, image: "images/pizza/pepperoni.jpg",      category: "pizza" },
  { name: "Капріччоза",      ingredients: "Соус томатний, шинка, гриби, маслини, моцарела",                         price: 260, weight: 530, image: "images/pizza/capricciosa.jpg",    category: "pizza" },
  { name: "Чотири сири",     ingredients: "Моцарела, дор блю, пармезан, чеддер, соус вершковий",                    price: 290, weight: 500, image: "images/pizza/four_cheese.jpg",    category: "pizza" },
  { name: "Два сири",        ingredients: "Моцарела, чеддер, соус вершковий, часник, базилік",                      price: 245, weight: 470, image: "images/pizza/two_cheese.jpg",     category: "pizza" },
  { name: "Анна",            ingredients: "Олія рослинна, спеції, помідор, бекон, курка, бринза, сир",              price: 270, weight: 530, image: "images/pizza/anna.jpg",           category: "pizza" },
  { name: "Венеція",         ingredients: "Соус томатний, каперси, маслини, в'ялені томати, моцарела",              price: 265, weight: 510, image: "images/pizza/venice.jpg",         category: "pizza" },
  { name: "Мисливська",      ingredients: "Соус томатний, ковбаски мисливські, бринза, помідор, сир",               price: 280, weight: 540, image: "images/pizza/hunters.jpg",        category: "pizza" },
  { name: "Сіціліана",       ingredients: "Соус томатний, анчоуси, каперси, маслини, моцарела",                     price: 255, weight: 490, image: "images/pizza/sicilian.jpg",       category: "pizza" },
  { name: "Сімона",          ingredients: "Соус томатний, шинка, гриби, болгарський перець, кукурудза, моцарела",   price: 275, weight: 560, image: "images/pizza/simone.jpg",         category: "pizza" },
  { name: "Гавайї",          ingredients: "Соус томатний, шинка, ананас, моцарела",                                 price: 240, weight: 480, image: "images/pizza/hawaii.jpg",         category: "pizza" },
  { name: "Вегетаріанська",  ingredients: "Соус томатний, броколі, цукіні, болгарський перець, гриби, моцарела",    price: 235, weight: 490, image: "images/pizza/vegetarian.jpg",     category: "pizza" },
  { name: "Прошуто",         ingredients: "Соус томатний, прошуто, руккола, пармезан, моцарела",                    price: 275, weight: 510, image: "images/pizza/prosciutto.jpg",     category: "pizza" },
  { name: "Груша-Камамбер",  ingredients: "Соус вершковий, груша, камамбер, волоські горіхи, мед, руккола",         price: 320, weight: 490, image: "images/pizza/pear_camembert.jpg", category: "pizza" },
  { name: "Морська",         ingredients: "Соус вершковий, креветки, мідії, кальмар, часник, моцарела",             price: 320, weight: 540, image: "images/pizza/seafood.jpg",        category: "pizza" },
  { name: "Ням-Ням",         ingredients: "Авторський соус, бекон, курка, гриби, болгарський перець, моцарела",     price: 295, weight: 550, image: "images/pizza/yum_yum.jpg",        category: "pizza" },
  /* Холодні напої */
  { name: "Coca-Cola",       ingredients: "Газований напій",                                           price:  45, weight: 500, image: "", category: "cold-drink" },
  { name: "Sprite",          ingredients: "Газований напій",                                           price:  45, weight: 500, image: "", category: "cold-drink" },
  { name: "Fanta",           ingredients: "Газований напій",                                           price:  45, weight: 500, image: "", category: "cold-drink" },
  { name: "Вода негазована", ingredients: "Мінеральна вода",                                           price:  30, weight: 500, image: "", category: "cold-drink" },
  { name: "Сік апельсиновий",ingredients: "100% натуральний сік",                                      price:  55, weight: 250, image: "", category: "cold-drink" },
  /* Десерти */
  { name: "Тірамісу",        ingredients: "Маскарпоне, савоярді, кава, какао",                         price:  85, weight: 150, image: "", category: "dessert" },
  { name: "Чізкейк",         ingredients: "Вершковий сир, печиво, вершки, ягоди",                      price:  90, weight: 160, image: "", category: "dessert" },
  { name: "Морозиво",        ingredients: "Ванільне, шоколадне або полуничне",                          price:  50, weight: 100, image: "", category: "dessert" },
  /* Закуски */
  { name: "Хлібні палички",  ingredients: "Тісто, часниковий соус, зелень, пармезан",                  price:  55, weight: 200, image: "", category: "snack" },
  { name: "Курячі крила",    ingredients: "Курячі крила, соус барбекю, спеції",                         price: 120, weight: 300, image: "", category: "snack" },
  { name: "Салат Цезар",     ingredients: "Романо, курка, сухарики, пармезан, соус Цезар",             price: 110, weight: 250, image: "", category: "snack" },
];

/* шлях до папки images/ відносно поточної сторінки */
var IMG_BASE = window.location.pathname.includes("/admin/") ? "../images/" : "images/";

var CATEGORY_LABELS = {
  pizza:        "🍕 Піци",
  "cold-drink": "🥤 Холодні напої",
  "hot-drink":  "☕ Гарячі напої",
  dessert:      "🍰 Десерти",
  snack:        "🥗 Закуски",
};

/* ── AUTH ─────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem("admin-auth") === "1") {
    /* Firebase SDK зберігає токен автоматично — чекаємо поки відновить сесію */
    if (window.auth) {
      window.auth.onAuthStateChanged(function (user) {
        if (!user) {
          /* Токен протух або Auth не спрацював — просимо заново ввести пароль */
          sessionStorage.removeItem("admin-auth");
          document.getElementById("authOverlay").style.display = "";
          document.getElementById("adminWrap").style.display   = "none";
        }
      });
    }
    showPanel();
  }

  document.getElementById("authBtn").addEventListener("click", tryLogin);
  document.getElementById("authLogin").addEventListener("keydown", function (e) {
    if (e.key === "Enter") document.getElementById("authPassword").focus();
  });
  document.getElementById("authPassword").addEventListener("keydown", function (e) {
    if (e.key === "Enter") tryLogin();
  });

  document.getElementById("logoutBtn").addEventListener("click", function () {
    sessionStorage.removeItem("admin-auth");
    if (window.auth) window.auth.signOut();
    location.reload();
  });

  document.getElementById("addBtn").addEventListener("click", showAddForm);
  document.getElementById("cancelBtn").addEventListener("click", hideForm);
  document.getElementById("formCloseBtn").addEventListener("click", hideForm);
  document.getElementById("itemForm").addEventListener("submit", saveItem);
  document.querySelector('[name="image"]').addEventListener("input", updatePreview);
  initImgModal();
});

/* FIREBASE_ADMIN_EMAIL — пошта адміна у Firebase Authentication */
var FIREBASE_ADMIN_EMAIL = "nazar8pog@gmail.com";

function tryLogin() {
  var login    = document.getElementById("authLogin").value.trim();
  var password = document.getElementById("authPassword").value;
  var errEl    = document.getElementById("authError");

  /* Hash the entered password with SHA-256, then compare */
  var encoder = new TextEncoder();
  crypto.subtle.digest("SHA-256", encoder.encode(password)).then(function (buf) {
    var hash = Array.from(new Uint8Array(buf))
      .map(function (b) { return b.toString(16).padStart(2, "0"); })
      .join("");

    if (login !== ADMIN_LOGIN || hash !== ADMIN_PASSWORD_HASH) {
      errEl.textContent = "Невірний логін або пароль";
      document.getElementById("authPassword").value = "";
      return;
    }

    errEl.textContent = "";

    /* Мовчазна авторизація у Firebase для права запису в Firestore */
    if (window.auth) {
      window.auth.signInWithEmailAndPassword(FIREBASE_ADMIN_EMAIL, password)
        .catch(function () { /* Firebase Auth недоступний — продовжуємо */ })
        .finally(function () {
          sessionStorage.setItem("admin-auth", "1");
          showPanel();
        });
    } else {
      sessionStorage.setItem("admin-auth", "1");
      showPanel();
    }
  });
}

function showPanel() {
  document.getElementById("authOverlay").style.display = "none";
  document.getElementById("adminWrap").style.display   = "flex";
  loadMenuData(renderItems);
}

/* ── DATA ─────────────────────────────────────────────────── */

/* In-memory cache — populated once from Firestore on panel open */
var _menuCache = null;

function getData() {
  return _menuCache !== null
    ? _menuCache
    : JSON.parse(JSON.stringify(PIZZAS));
}

/* Load from Firestore → localStorage → PIZZAS (async, runs once) */
function loadMenuData(callback) {
  function fromFallback() {
    var stored = localStorage.getItem(STORAGE_KEY);
    _menuCache = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(PIZZAS));
    callback();
  }
  if (window.db) {
    window.db.collection("menu").doc("items").get()
      .then(function (doc) {
        if (doc.exists && Array.isArray(doc.data().data)) {
          _menuCache = doc.data().data;
        } else {
          var stored = localStorage.getItem(STORAGE_KEY);
          _menuCache = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(PIZZAS));
        }
        callback();
      })
      .catch(fromFallback);
  } else {
    fromFallback();
  }
}

function saveData(data) {
  _menuCache = data;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  if (window.db) {
    window.db.collection("menu").doc("items").set({ data: data })
      .then(function () { showToast("Збережено ✓", false); })
      .catch(function (e) {
        console.error("Firestore save error:", e);
        showToast("Помилка збереження: " + (e.code || e.message), true);
      });
  }
}

function showToast(msg, isError) {
  var t = document.getElementById("adminToast");
  if (!t) {
    t = document.createElement("div");
    t.id = "adminToast";
    t.style.cssText = "position:fixed;bottom:24px;left:50%;transform:translateX(-50%);padding:10px 20px;border-radius:8px;font-size:14px;z-index:9999;transition:opacity .3s";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.background = isError ? "#ef4444" : "#22c55e";
  t.style.color = "#fff";
  t.style.opacity = "1";
  clearTimeout(t._timer);
  t._timer = setTimeout(function () { t.style.opacity = "0"; }, 3000);
}

/* ── RENDER LIST ──────────────────────────────────────────── */
function renderItems() {
  var items     = getData();
  var container = document.getElementById("adminItems");

  if (items.length === 0) {
    container.innerHTML = '<p class="empty-msg">Немає позицій. Додайте першу!</p>';
    return;
  }

  var grouped = {};
  items.forEach(function (item, i) {
    var cat = item.category || "pizza";
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push({ item: item, index: i });
  });

  var html = "";
  ["pizza", "cold-drink", "hot-drink", "dessert", "snack"].forEach(function (cat) {
    if (!grouped[cat]) return;
    html += '<div class="items-group">';
    html += '<div class="items-group-header">' +
      '<span class="group-cat-label">' + (CATEGORY_LABELS[cat] || cat) + '</span>' +
      '<span class="col-label">Назва</span>' +
      '<span class="col-label">Категорія</span>' +
      '<span class="col-label">Ціна</span>' +
      '<span class="col-label">Вага</span>' +
      '<span class="col-label">Інгредієнти</span>' +
      '<span class="col-label">Дії</span>' +
    '</div>';
    grouped[cat].forEach(function (entry) {
      html += buildItemRow(entry.item, entry.index);
    });
    html += "</div>";
  });

  container.innerHTML = html;

  container.querySelectorAll(".btn-edit-item").forEach(function (btn) {
    btn.addEventListener("click", function () { editItem(Number(this.dataset.index)); });
  });
  container.querySelectorAll(".btn-delete-item").forEach(function (btn) {
    btn.addEventListener("click", function () { deleteItem(Number(this.dataset.index)); });
  });
  container.querySelectorAll(".editable").forEach(function (el) {
    el.addEventListener("click", function () { startInlineEdit(this); });
  });
  container.querySelectorAll(".item-cat").forEach(function (sel) {
    sel.addEventListener("change", function () {
      var items = getData();
      items[Number(this.dataset.index)].category = this.value;
      saveData(items);
      renderItems();
    });
  });
}

function buildItemRow(item, index) {
  var catOptions = ["pizza", "cold-drink", "hot-drink", "dessert", "snack"].map(function (c) {
    var labels = { pizza: "Піца", "cold-drink": "Холодний напій", "hot-drink": "Гарячий напій", dessert: "Десерт", snack: "Закуска" };
    return '<option value="' + c + '"' + (item.category === c ? " selected" : "") + ">" + (labels[c] || c) + "</option>";
  }).join("");

  var thumb = item.image
    ? '<img class="item-thumb" src="' + item.image + '" alt="" onerror="this.style.opacity=0">'
    : '<div class="item-thumb item-thumb-empty"></div>';

  return '<div class="admin-item">' +
    thumb +
    '<span class="editable" data-field="name" data-index="' + index + '" title="Натисніть щоб редагувати">' + (item.name || "") + "</span>" +
    '<select class="item-cat" data-index="' + index + '">' + catOptions + "</select>" +
    '<span class="editable item-price-cell" data-field="price" data-index="' + index + '" title="Натисніть щоб редагувати">' + (item.price || 0) + " грн</span>" +
    '<span class="editable item-weight-cell" data-field="weight" data-index="' + index + '" title="Натисніть щоб редагувати">' + (item.weight ? item.weight + " г" : "—") + "</span>" +
    '<span class="editable item-ingr-cell" data-field="ingredients" data-index="' + index + '" title="Натисніть щоб редагувати">' + (item.ingredients || "—") + "</span>" +
    '<div class="item-btns">' +
      '<button class="btn-edit-item"   data-index="' + index + '">Редагувати</button>' +
      '<button class="btn-delete-item" data-index="' + index + '">Видалити</button>' +
    "</div>" +
  "</div>";
}

function startInlineEdit(el) {
  if (el.classList.contains("editing")) return;
  el.classList.add("editing");

  var field = el.dataset.field;
  var index = Number(el.dataset.index);
  var raw   = getData()[index][field];

  var input = document.createElement("input");
  input.className = "inline-input";
  input.value     = raw !== undefined ? raw : "";
  if (field === "price" || field === "weight") input.type = "number";

  el.textContent = "";
  el.appendChild(input);
  input.focus();
  input.select();

  function commit() {
    var val   = input.value.trim();
    var items = getData();
    if (val !== "") {
      items[index][field] = (field === "price" || field === "weight") ? Number(val) : val;
      saveData(items);
    }
    renderItems();
  }

  function cancel() { renderItems(); }

  input.addEventListener("blur", commit);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter")  { e.preventDefault(); input.removeEventListener("blur", commit); commit(); }
    if (e.key === "Escape") { e.preventDefault(); input.removeEventListener("blur", commit); cancel(); }
  });
}

/* ── FORM ─────────────────────────────────────────────────── */
function showAddForm() {
  document.getElementById("formTitle").textContent = "Нова позиція";
  document.getElementById("itemForm").reset();
  document.querySelector('[name="editIndex"]').value = "-1";
  hidePreview();
  openForm();
}

function editItem(index) {
  var item = getData()[index];
  var form = document.getElementById("itemForm");

  document.getElementById("formTitle").textContent = "Редагувати позицію";
  form.elements["editIndex"].value    = index;
  form.elements["name"].value         = item.name        || "";
  form.elements["category"].value     = item.category    || "pizza";
  form.elements["price"].value        = item.price       || "";
  form.elements["weight"].value       = item.weight      || "";
  form.elements["ingredients"].value  = item.ingredients || "";
  form.elements["image"].value        = item.image       || "";

  updatePreview();
  openForm();
}

function deleteItem(index) {
  if (!confirm("Видалити цю позицію з меню?")) return;
  var items = getData();
  items.splice(index, 1);
  saveData(items);
  renderItems();
}

function saveItem(e) {
  e.preventDefault();
  var form  = e.target;
  var index = Number(form.elements["editIndex"].value);
  var name  = form.elements["name"].value.trim();
  var price = Number(form.elements["price"].value);

  if (!name || !price) {
    alert("Заповніть назву та ціну");
    return;
  }

  var weightRaw = Number(form.elements["weight"].value);
  var item = {
    name:        name,
    category:    form.elements["category"].value,
    price:       price,
    weight:      weightRaw || undefined,
    ingredients: form.elements["ingredients"].value.trim(),
    image:       form.elements["image"].value.trim(),
  };

  var items = getData();
  if (index >= 0) {
    items[index] = item;
  } else {
    items.push(item);
  }

  saveData(items);
  renderItems();
  hideForm();
}

function openForm() {
  document.getElementById("formPanel").classList.add("active");
  document.getElementById("adminWrap").classList.add("form-open");
}



function hideForm() {
  document.getElementById("formPanel").classList.remove("active");
  document.getElementById("adminWrap").classList.remove("form-open");
}

function updatePreview() {
  var src  = document.querySelector('[name="image"]').value.trim();
  var wrap = document.getElementById("imgPreviewWrap");
  var img  = document.getElementById("imgPreview");
  if (src) {
    img.src = src;
    wrap.classList.add("visible");
  } else {
    hidePreview();
  }
}

function hidePreview() {
  document.getElementById("imgPreviewWrap").classList.remove("visible");
  document.getElementById("imgPreview").src = "";
}

/* ── IMAGE PICKER MODAL ───────────────────────────────────── */
function initImgModal() {
  var overlay   = document.getElementById("imgModal");
  var urlInput  = document.getElementById("imgUrlInput");
  var fileInput = document.getElementById("imgFileInput");
  var fileDrop  = document.getElementById("fileDrop");
  var cropArea  = document.getElementById("cropArea");
  var cropWrap  = document.getElementById("cropWrap");
  var cropImg   = document.getElementById("cropImg");
  var cropBox   = document.getElementById("cropBox");
  var cropSlider = document.getElementById("cropSlider");
  var pending   = "";
  var cropPct   = { x: 0, y: 0, w: 100, h: 100 };
  var cropSizeVal = 80; /* 15–100: % of min(naturalWidth, naturalHeight) */
  var drag      = null;

  /* ── open / close ── */
  function openModal() {
    pending = document.querySelector('[name="image"]').value.trim();
    urlInput.value = pending;
    cropArea.classList.add("img-tab-hidden");
    if (pending) showCrop(pending);
    setTab("file");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    pending = "";
    cropImg.src = "";
    cropArea.classList.add("img-tab-hidden");
  }

  function applyModal() {
    var result = getCropped();
    if (result) {
      document.querySelector('[name="image"]').value = result;
      updatePreview();
    }
    closeModal();
  }

  /* ── tabs ── */
  function setTab(tab) {
    document.querySelectorAll(".img-tab-btn").forEach(function (b) {
      b.classList.toggle("active", b.dataset.tab === tab);
    });
    document.getElementById("imgTabUrl").classList.toggle("img-tab-hidden", tab !== "url");
    document.getElementById("imgTabFile").classList.toggle("img-tab-hidden", tab !== "file");
  }

  /* ── crop: fixed 3:2 aspect ratio (matches catalog card) ── */
  var CW = 3, CH = 2; /* card width:height ratio */

  function calcCropPct() {
    var nw = cropImg.naturalWidth, nh = cropImg.naturalHeight;
    if (!nw || !nh) return;
    /* largest 3:2 rectangle that fits in the image */
    var maxW_px = Math.min(nw, nh * CW / CH);
    var cropW_px = (cropSizeVal / 100) * maxW_px;
    var cropH_px = cropW_px * CH / CW;
    cropPct.w = (cropW_px / nw) * 100;
    cropPct.h = (cropH_px / nh) * 100;
  }

  function showCrop(src) {
    pending = src;
    cropImg.onload = function () {
      cropSizeVal = 80;
      cropSlider.value = 80;
      calcCropPct();
      cropPct.x = (100 - cropPct.w) / 2;
      cropPct.y = (100 - cropPct.h) / 2;
      updateBox();
      cropArea.classList.remove("img-tab-hidden");
    };
    cropImg.onerror = function () { cropArea.classList.add("img-tab-hidden"); };
    cropImg.src = src;
  }

  function updateCropFromSize() {
    calcCropPct();
    cropPct.x = Math.max(0, Math.min(100 - cropPct.w, cropPct.x));
    cropPct.y = Math.max(0, Math.min(100 - cropPct.h, cropPct.y));
    updateBox();
  }

  /* Returns the actual pixel rect of the image inside cropWrap
     (object-fit:contain may letterbox, so the image doesn't fill the wrap) */
  function imgRect() {
    var wr = cropWrap.getBoundingClientRect();
    var nw = cropImg.naturalWidth, nh = cropImg.naturalHeight;
    if (!nw || !nh) return { ox: 0, oy: 0, iw: wr.width, ih: wr.height, ww: wr.width, wh: wr.height };
    var scale = Math.min(wr.width / nw, wr.height / nh);
    var iw = nw * scale, ih = nh * scale;
    return { ox: (wr.width - iw) / 2, oy: (wr.height - ih) / 2, iw: iw, ih: ih, ww: wr.width, wh: wr.height };
  }

  function updateBox() {
    var r = imgRect();
    /* cropPct is relative to natural image; map to crop-wrap container % */
    var l = r.ox + (cropPct.x / 100) * r.iw;
    var t = r.oy + (cropPct.y / 100) * r.ih;
    var w = (cropPct.w / 100) * r.iw;
    var h = (cropPct.h / 100) * r.ih;
    cropBox.style.left   = (l / r.ww * 100) + "%";
    cropBox.style.top    = (t / r.wh * 100) + "%";
    cropBox.style.width  = (w / r.ww * 100) + "%";
    cropBox.style.height = (h / r.wh * 100) + "%";
    /* slider track fill */
    var pct = ((cropSizeVal - 15) / (100 - 15) * 100).toFixed(1);
    cropSlider.style.setProperty("--val", pct + "%");
  }

  function getCropped() {
    if (!cropImg.naturalWidth || !pending) return pending;
    var nw = cropImg.naturalWidth, nh = cropImg.naturalHeight;
    var cx = (cropPct.x / 100) * nw, cy = (cropPct.y / 100) * nh;
    var cw = (cropPct.w / 100) * nw, ch = (cropPct.h / 100) * nh;
    if (cx === 0 && cy === 0 && cw === nw && ch === nh) return pending;
    try {
      var canvas = document.createElement("canvas");
      canvas.width = Math.round(cw); canvas.height = Math.round(ch);
      canvas.getContext("2d").drawImage(cropImg, cx, cy, cw, ch, 0, 0, Math.round(cw), Math.round(ch));
      return canvas.toDataURL("image/jpeg", 0.92);
    } catch (e) { return pending; }
  }

  /* ── drag: move only (no corner handles) ── */
  function evPos(e) { var t = e.touches ? e.touches[0] : e; return { x: t.clientX, y: t.clientY }; }

  cropBox.addEventListener("mousedown", startDrag);
  cropBox.addEventListener("touchstart", startDrag, { passive: false });

  function startDrag(e) {
    var pos = evPos(e);
    drag = { sx: pos.x, sy: pos.y, ox: cropPct.x, oy: cropPct.y };
    e.preventDefault();
    e.stopPropagation();
  }

  document.addEventListener("mousemove", onDrag);
  document.addEventListener("touchmove", onDrag, { passive: false });

  function onDrag(e) {
    if (!drag) return;
    var pos = evPos(e);
    var r   = imgRect();
    /* delta in image-relative %, so clamping stays in 0–100 image space */
    var dx  = (pos.x - drag.sx) / r.iw * 100;
    var dy  = (pos.y - drag.sy) / r.ih * 100;
    cropPct.x = Math.max(0, Math.min(100 - cropPct.w, drag.ox + dx));
    cropPct.y = Math.max(0, Math.min(100 - cropPct.h, drag.oy + dy));
    updateBox();
    e.preventDefault();
  }

  document.addEventListener("mouseup",  function () { drag = null; });
  document.addEventListener("touchend", function () { drag = null; });

  /* ── slider & +/− buttons ── */
  cropSlider.addEventListener("input", function () {
    cropSizeVal = Number(this.value);
    updateCropFromSize();
  });

  document.getElementById("cropMinus").addEventListener("click", function () {
    cropSizeVal = Math.max(15, cropSizeVal - 5);
    cropSlider.value = cropSizeVal;
    updateCropFromSize();
  });

  document.getElementById("cropPlus").addEventListener("click", function () {
    cropSizeVal = Math.min(100, cropSizeVal + 5);
    cropSlider.value = cropSizeVal;
    updateCropFromSize();
  });

  /* ── file handling ── */
  function handleFile(file) {
    if (!file || !file.type.startsWith("image/")) return;
    var reader = new FileReader();
    reader.onload = function (e) { showCrop(e.target.result); };
    reader.readAsDataURL(file);
  }

  /* ── events ── */
  document.getElementById("imgPickBtn").addEventListener("click", openModal);
  document.getElementById("imgModalClose").addEventListener("click", closeModal);
  document.getElementById("imgModalCancel").addEventListener("click", closeModal);
  document.getElementById("imgModalApply").addEventListener("click", applyModal);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closeModal(); });

  document.querySelectorAll(".img-tab-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { setTab(this.dataset.tab); });
  });

  urlInput.addEventListener("input", function () {
    var src = this.value.trim();
    if (src) showCrop(src); else cropArea.classList.add("img-tab-hidden");
  });

  fileInput.addEventListener("change", function () { handleFile(this.files[0]); });

  fileDrop.addEventListener("dragover",  function (e) { e.preventDefault(); this.classList.add("drag-over"); });
  fileDrop.addEventListener("dragleave", function ()  { this.classList.remove("drag-over"); });
  fileDrop.addEventListener("drop", function (e) {
    e.preventDefault(); this.classList.remove("drag-over"); handleFile(e.dataTransfer.files[0]);
  });
}
