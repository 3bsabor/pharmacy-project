/* ========== 1) قائمة الهاتف (فتح وإغلاق) ========== */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* ========== 2) تمييز رابط الصفحة الحالية في Navbar ========== */
const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* ========== 3) بديل للصور في حال تعذر تحميلها (مثلاً بدون إنترنت) ========== */
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    img.style.visibility = "hidden";   // إخفاء الصورة المكسورة
    img.style.minHeight = "0";
  });
});

/* ========== 4) التحقق من نموذج التواصل (بدون Backend) ========== */
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMsg");

    // صيغة بسيطة للتحقق من البريد الإلكتروني
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
      msg.textContent = "يرجى ملء جميع الحقول.";
      msg.className = "form-msg error";
    } else if (!emailPattern.test(email)) {
      msg.textContent = "يرجى إدخال بريد إلكتروني صحيح.";
      msg.className = "form-msg error";
    } else {
      msg.textContent = "شكرًا " + name + "! تم استلام رسالتك (تجريبي).";
      msg.className = "form-msg success";
      form.reset();
    }
  });
}
