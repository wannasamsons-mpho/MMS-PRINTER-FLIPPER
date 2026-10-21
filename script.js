(() => {
  const config = window.MMS_CONFIG || {};
  const phone = (config.phone || "").trim();
  const email = (config.email || "").trim();
  const address = (config.address || "").trim();
  const location = (config.location || "South Africa").trim();

  const phoneLink = document.querySelector("#contact-phone");
  if (phone) {
    phoneLink.textContent = phone;
    phoneLink.href = `tel:${phone.replace(/[^\d+]/g, "")}`;
  }

  const emailLink = document.querySelector("#contact-email");
  if (email) {
    emailLink.textContent = email;
    emailLink.href = `mailto:${email}`;
  }

  document.querySelector("#contact-address").textContent = address || `Business address to be added · ${location}`;
  document.querySelector("#footer-location").textContent = `Printing & branding · ${location}`;

  const socialLinks = document.querySelector("#social-links");
  for (const [platform, url] of Object.entries(config.socialLinks || {})) {
    if (!url.trim()) continue;
    const link = document.createElement("a");
    link.href = url;
    link.textContent = platform;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `Visit MMS PRINTER FLIPPER on ${platform}`);
    socialLinks.append(link);
  }

  const whatsappButton = document.querySelector("#whatsapp-button");
  const whatsappNumber = (config.whatsappNumber || "").replace(/\D/g, "");
  if (whatsappNumber) {
    whatsappButton.href = `https://wa.me/${whatsappNumber}`;
    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener noreferrer";
  } else {
    whatsappButton.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#form-status").textContent =
        "WhatsApp is not configured yet. Please use the quotation form or add your WhatsApp number in config.js.";
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });
  }

  document.querySelector("#current-year").textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-nav");
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });

  const form = document.querySelector("#quote-form");
  const formStatus = document.querySelector("#form-status");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.classList.remove("is-error");

    if (!form.reportValidity()) {
      formStatus.textContent = "Please check the highlighted fields and try again.";
      formStatus.classList.add("is-error");
      return;
    }

    formStatus.textContent =
      "Your request looks good. This is a frontend demo, so it has not been sent. Contact MMS PRINTER FLIPPER by phone, email or WhatsApp once those details are configured.";
    form.reset();
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
})();
