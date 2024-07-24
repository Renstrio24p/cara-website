export function createMap(
  containerId = "",
  src = "",
  width = "600",
  height = "450",
  style = "border:0;",
  allowFullscreen = true,
  loading = "lazy",
  referrerPolicy = "no-referrer-when-downgrade"
) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.src = src;
  iframe.width = width;
  iframe.height = height;
  iframe.style = style;
  iframe.allowFullscreen = allowFullscreen;
  iframe.loading = loading;
  iframe.referrerPolicy = referrerPolicy;

  container.appendChild(iframe);
}
