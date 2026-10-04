document.getElementById("year").textContent = new Date().getFullYear();

const PHONE_INTL = "61421462938";
const EMAIL = "jasonkelly361@outlook.com";
const msg = document.getElementById("formMsg");

document.querySelectorAll("[data-send]").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const business = document.getElementById("business").value.trim();
    const need = document.getElementById("need").value;
    const details = document.getElementById("details").value.trim();

    if (!name) {
      msg.textContent = "Please add your name first.";
      document.getElementById("name").focus();
      return;
    }

    msg.textContent = "";
    const businessLine = business ? `\nBusiness: ${business}` : "";
    const text = `Hi James, my name is ${name}.${businessLine} I'm interested in: ${need}.` + (details ? `\n\n${details}` : "");

    if (btn.dataset.send === "whatsapp") {
      window.open(`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Quote request: " + need)}&body=${encodeURIComponent(text)}`;
    }
  });
});
