document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  document.addEventListener("mousedown", () => {
    cursor.style.backgroundImage = "url('/assets/cursor/cursor-click.png')";
  });

  document.addEventListener("mouseup", () => {
    cursor.style.backgroundImage = "url('/assets/cursor/cursor-default.png')";
  });
});
