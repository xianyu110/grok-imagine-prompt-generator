const $ = (selector) => document.querySelector(selector);

const fields = {
  subject: $("#subject"),
  scene: $("#scene"),
  action: $("#action"),
  camera: $("#camera"),
  style: $("#style"),
  mood: $("#mood"),
  format: $("#format")
};

const output = $("#prompt-output");

function buildPrompt() {
  const subject = fields.subject.value || "a futuristic product";
  const scene = fields.scene.value || "a clean studio environment";
  const action = fields.action.value || "revealing its key detail with smooth motion";
  const camera = fields.camera.value || "a slow push-in camera movement";
  const style = fields.style.value || "cinematic commercial realism";
  const mood = fields.mood.value || "premium, bright, and high contrast";
  const format = fields.format.value || "short AI video";

  output.textContent = `Create a ${format} of ${subject} in ${scene}, ${action}. Use ${camera}, ${style}, and ${mood} lighting. Keep the composition fast-readable, detailed, polished, and suitable for Grok Imagine. Avoid blurry details, distorted faces, extra limbs, unreadable text, cluttered background, and unauthorized celebrity likeness.`;
}

Object.values(fields).forEach((field) => field.addEventListener("input", buildPrompt));
buildPrompt();

$("#copy-prompt").addEventListener("click", async () => {
  await navigator.clipboard.writeText(output.textContent);
  $("#copy-prompt").textContent = "Copied";
  setTimeout(() => ($("#copy-prompt").textContent = "Copy Prompt"), 1400);
});

document.querySelectorAll("[data-template]").forEach((button) => {
  button.addEventListener("click", () => {
    output.textContent = button.dataset.template;
    output.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

