const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = themeToggle.querySelector(".theme-icon");
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    function setTheme(theme) {
      const isDark = theme === "dark";
      document.body.classList.toggle("dark-theme", isDark);
      themeIcon.src = isDark ? "../assets/icons/light.png" : "../assets/icons/dark.png";
      themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      localStorage.setItem("portfolio-theme", theme);
    }

    setTheme(savedTheme || (prefersDark ? "dark" : "light"));

    themeToggle.addEventListener("click", () => {
      setTheme(document.body.classList.contains("dark-theme") ? "light" : "dark");
    });

    if (window.emailjs) {
      emailjs.init("S2ISh3nT7MULDKZCE");
    }

    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach(el => observer.observe(el));

    function showToast(message, type = "success") {
      const toast = document.getElementById("toast");
      toast.textContent = message;
      toast.className = `toast ${type} show`;
      setTimeout(() => { toast.className = "toast"; }, 4000);
    }

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const btn = document.getElementById("submit-btn");
      const original = btn.textContent;
      btn.textContent = "Sending...";
      btn.disabled = true;

      if (!window.emailjs) {
        showToast("Email service is still loading. Please try again.", "error");
        btn.textContent = original;
        btn.disabled = false;
        return;
      }

      emailjs.sendForm("service_s47cteb", "template_i2qrmmr", this)
        .then(() => {
          showToast("Your message is on its way. Thank you!");
          form.reset();
        })
        .catch((error) => {
          console.error(error);
          showToast("Message failed to send. Please try again.", "error");
        })
        .finally(() => {
          btn.textContent = original;
          btn.disabled = false;
        });
    });

