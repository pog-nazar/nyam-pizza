/* ── FIREBASE CONFIG ───────────────────────────────────────────
   Compat SDK — працює без import/export, підходить для vanilla JS
   ────────────────────────────────────────────────────────────── */
var firebaseConfig = {
  apiKey:            "AIzaSyCNKVjP7Qtyd9l1-F-VXVwb5C6eKAuJAnA",
  authDomain:        "nyam-pizza.firebaseapp.com",
  projectId:         "nyam-pizza",
  storageBucket:     "nyam-pizza.firebasestorage.app",
  messagingSenderId: "101891077200",
  appId:             "1:101891077200:web:bc45481a7004fb8429cd55"
};

firebase.initializeApp(firebaseConfig);
var db   = firebase.firestore();
var auth = (typeof firebase.auth === "function") ? firebase.auth() : null;
