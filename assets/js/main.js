const IRIS_CONTACT = {
  email: "contato@example.com",
  whatsapp: "5500000000000"
};

const WHATSAPP_MESSAGE = "Olá, Íris! Quero tirar dúvidas.";
const emailTargets = document.querySelectorAll("[data-config-email]");
const emailLinks = document.querySelectorAll("[data-config-email-link]");
const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");
const drinkOptions = document.querySelectorAll("[data-drink]");
const drinkImage = document.querySelector("[data-drink-image]");
const drinkTitle = document.querySelector("[data-drink-title]");
const drinkDescription = document.querySelector("[data-drink-description]");
const drinkIngredients = document.querySelector("[data-drink-ingredients]");
const drinkLink = document.querySelector("[data-drink-link]");
const eventTypeSelect = document.querySelector("[data-event-type-select]");
const eventTypeOtherField = document.querySelector("[data-event-type-other]");
const eventTypeOtherInput = eventTypeOtherField?.querySelector("input");
const locationTypeSelect = document.querySelector("[data-location-type-select]");
const locationTypeOtherField = document.querySelector("[data-location-type-other]");
const locationTypeOtherInput = locationTypeOtherField?.querySelector("input");
const phoneInput = document.querySelector('[name="telefone"]');
const guestsInput = document.querySelector('[name="convidados"]');
const eventCards = document.querySelectorAll("[data-event-gallery]");
const eventDialog = document.querySelector("[data-event-dialog]");
const eventDialogClose = document.querySelector("[data-event-dialog-close]");
const eventDialogTitle = document.querySelector("[data-event-dialog-title]");
const eventDialogDescription = document.querySelector("[data-event-dialog-description]");
const eventDialogGallery = document.querySelector("[data-event-dialog-gallery]");
const quoteForm = document.querySelector("#quote-form");
const scrollTopLink = document.querySelector("[data-scroll-top]");
const siteHeader = document.querySelector("[data-header]");
let eventDialogTrigger = null;

const drinks = {
  aurea: {
    name: "Áurea",
    image: "assets/cardapio/aurea.webp",
    link: "https://www.ifood.com.br/",
    ingredients: "Melancia e limão.",
    description: "Refrescante e frutada, combina melancia e limão em uma caipirinha leve, vibrante e fácil de agradar em festas."
  },
  bruma: {
    name: "Bruma",
    image: "assets/cardapio/bruma.webp",
    link: "https://www.ifood.com.br/",
    ingredients: "Abacaxi, maracujá e gengibre.",
    description: "Tropical e marcante, mistura acidez, doçura e um toque picante de gengibre para quem gosta de sabor com presença."
  },
  serena: {
    name: "Serena",
    image: "assets/cardapio/serena.webp",
    link: "https://www.ifood.com.br/",
    ingredients: "Morango e abacaxi.",
    description: "Doce na medida e bem aromática, une morango e abacaxi em uma opção alegre para aniversários e festas descontraídas."
  },
  lume: {
    name: "Lume",
    image: "assets/cardapio/lume.webp",
    link: "https://www.ifood.com.br/",
    ingredients: "Limão e hortelã.",
    description: "Clássica, cítrica e muito fresca, é uma escolha certeira para eventos em dias quentes e convidados que preferem leveza."
  },
  veu: {
    name: "Véu",
    image: "assets/cardapio/véu.webp",
    link: "https://www.ifood.com.br/",
    ingredients: "Abacaxi, hortelã, gengibre e limão.",
    description: "Uma combinação herbal e tropical, com camadas de frescor e um final levemente picante."
  },
  aurora: {
    name: "Aurora",
    image: "assets/cardapio/aurora.webp",
    link: "https://www.ifood.com.br/",
    ingredients: "Limão, morango e gengibre.",
    description: "Colorida e intensa, traz morango com limão e gengibre para um drink de perfil cítrico, doce e perfumado."
  },
  iris: {
    name: "Íris",
    image: "assets/cardapio/iris.webp",
    link: "https://www.ifood.com.br/",
    ingredients: "Maracujá, morango e limão.",
    description: "Assinatura da casa, mistura maracujá, morango e limão em um sabor tropical, equilibrado e cheio de personalidade."
  }
};

const eventGalleries = {
  "evento-1": {
    title: "Estrutura montada",
    description: "Bancada preparada, frutas frescas e operação pronta para receber os convidados.",
    images: [
      "assets/eventos/galeria/evento-1/Festa1.webp",
      "assets/eventos/galeria/evento-1/Festa2.webp",
      "assets/eventos/galeria/evento-1/Festa3.webp"
    ]
  },
  "evento-2": {
    title: "Atendimento no evento",
    description: "Equipe em ação, atendimento próximo e a experiência acontecendo ao vivo.",
    images: [
      "assets/eventos/galeria/evento-2/Festaa1.webp",
      "assets/eventos/galeria/evento-2/Festaa2.webp",
      "assets/eventos/galeria/evento-2/Feesta3.webp"
    ]
  },
  "evento-3": {
    title: "Detalhes personalizados",
    description: "Pequenos detalhes que ajudam cada evento a ganhar uma identidade própria.",
    images: [
      "assets/eventos/galeria/evento-3/Open1.webp",
      "assets/eventos/galeria/evento-3/Open2.webp",
      "assets/eventos/galeria/evento-3/Open3.webp"
    ]
  },
  "evento-4": {
    title: "Preparo ao vivo",
    description: "Drinks feitos na hora, ingredientes à vista e o preparo como parte da experiência.",
    images: [
      "assets/eventos/galeria/evento-4/Aniversario1.webp",
      "assets/eventos/galeria/evento-4/Aniversario2.webp",
      "assets/eventos/galeria/evento-4/Aniversario3.webp"
    ]
  }
};

emailTargets.forEach((target) => {
  target.textContent = IRIS_CONTACT.email;
});

emailLinks.forEach((link) => {
  link.href = `mailto:${IRIS_CONTACT.email}`;
});

whatsappLinks.forEach((link) => {
  link.href = buildWhatsAppLink(IRIS_CONTACT.whatsapp, WHATSAPP_MESSAGE);
});

function updateHeaderBrandVisibility() {
  if (!siteHeader) return;

  const threshold = Math.min(320, window.innerHeight * 0.45);
  siteHeader.classList.toggle("site-header--brand-visible", window.scrollY > threshold);
}

updateHeaderBrandVisibility();
window.addEventListener("scroll", updateHeaderBrandVisibility, { passive: true });
window.addEventListener("resize", updateHeaderBrandVisibility);

scrollTopLink?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

eventTypeSelect?.addEventListener("change", () => {
  const shouldShowOther = eventTypeSelect.value === "Outro";

  if (eventTypeOtherField) {
    eventTypeOtherField.hidden = !shouldShowOther;
  }

  if (eventTypeOtherInput) {
    eventTypeOtherInput.required = shouldShowOther;
    if (!shouldShowOther) eventTypeOtherInput.value = "";
  }
});

locationTypeSelect?.addEventListener("change", () => {
  const shouldShowOther = locationTypeSelect.value === "Outros";

  if (locationTypeOtherField) {
    locationTypeOtherField.hidden = !shouldShowOther;
  }

  if (locationTypeOtherInput) {
    locationTypeOtherInput.required = shouldShowOther;
    if (!shouldShowOther) locationTypeOtherInput.value = "";
  }
});

phoneInput?.addEventListener("input", () => {
  phoneInput.value = formatBrazilianPhone(phoneInput.value);
});

guestsInput?.addEventListener("input", () => {
  const digits = guestsInput.value.replace(/\D/g, "").slice(0, 5);
  const guests = Number(digits);

  guestsInput.value = guests > 10000 ? "10000" : digits;
});

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.assign("obrigado.html");
  });
  quoteForm.querySelector('[type="submit"]').disabled = false;
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    if (anchor.hasAttribute("data-scroll-top")) return;

    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

drinkOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const drink = drinks[option.dataset.drink];
    if (!drink || !drinkImage || !drinkTitle || !drinkDescription || !drinkIngredients || !drinkLink) return;
    if (option.classList.contains("is-active")) return;

    drinkOptions.forEach((button) => {
      const isSelected = button === option;
      button.classList.toggle("is-active", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
    });

    const drinkDetail = drinkImage.closest(".drink-detail");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && drinkDetail) {
      drinkDetail.classList.add("is-changing");

      window.setTimeout(() => {
        updateDrink(drink);
        drinkDetail.classList.remove("is-changing");
      }, 180);

      return;
    }

    updateDrink(drink);
  });
});

eventCards.forEach((card) => {
  card.addEventListener("click", () => {
    const gallery = eventGalleries[card.dataset.eventGallery];
    if (!gallery || !eventDialog || !eventDialogTitle || !eventDialogGallery) return;

    eventDialogTrigger = card;
    eventDialogTitle.textContent = gallery.title;
    if (eventDialogDescription) eventDialogDescription.textContent = gallery.description;
    eventDialogGallery.replaceChildren(
      ...gallery.images.map((image, index) => {
        const item = document.createElement("img");
        item.src = image;
        item.alt = `${gallery.title}, foto ${index + 1}`;
        item.loading = "lazy";
        item.className = index === 0 ? "is-featured" : "";
        return item;
      })
    );

    eventDialog.hidden = false;
    eventDialog.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    eventDialogClose?.focus();
  });
});

eventDialogClose?.addEventListener("click", () => {
  closeEventDialog();
});

eventDialog?.addEventListener("click", (event) => {
  if (event.target === eventDialog) closeEventDialog();
});

document.addEventListener("keydown", (event) => {
  if (!eventDialog || eventDialog.hidden) return;

  if (event.key === "Escape") {
    closeEventDialog();
    return;
  }

  if (event.key !== "Tab") return;

  const focusableElements = eventDialog.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  if (!firstFocusable || !lastFocusable) return;

  if (event.shiftKey && document.activeElement === firstFocusable) {
    event.preventDefault();
    lastFocusable.focus();
  } else if (!event.shiftKey && document.activeElement === lastFocusable) {
    event.preventDefault();
    firstFocusable.focus();
  }
});

function updateDrink(drink) {
  drinkImage.src = drink.image;
  drinkImage.alt = `Drink ${drink.name} da Íris Drinketeria`;
  drinkTitle.textContent = drink.name;
  drinkDescription.textContent = drink.description;
  drinkIngredients.textContent = drink.ingredients;
  if (drinkLink) drinkLink.href = drink.link;
}

function formatBrazilianPhone(value) {
  const digits = normalizeBrazilianPhoneDigits(value);
  const areaCode = digits.slice(0, 2);
  const firstPart = digits.length > 10 ? digits.slice(2, 7) : digits.slice(2, 6);
  const secondPart = digits.length > 10 ? digits.slice(7, 11) : digits.slice(6, 10);

  if (digits.length <= 2) return areaCode ? `(${areaCode}` : "";
  if (!secondPart) return `(${areaCode}) ${firstPart}`;

  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

function normalizeBrazilianPhoneDigits(value) {
  const digits = value.replace(/\D/g, "");
  const withoutCountryCode = digits.startsWith("55") && digits.length > 11
    ? digits.slice(2)
    : digits;

  return withoutCountryCode.slice(0, 11);
}

function buildWhatsAppLink(phone, message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function closeEventDialog() {
  if (!eventDialog) return;

  eventDialog.hidden = true;
  eventDialog.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  eventDialogTrigger?.focus();
  eventDialogTrigger = null;
}
