const autoScrollTargets = ["projectsList", "skillsList"];

autoScrollTargets.forEach((id) => {
  const container = document.getElementById(id);

  if (!container) {
    return;
  }

  const originalChildren = Array.from(container.children);

  if (originalChildren.length && !container.dataset.duplicated) {
    originalChildren.forEach((child) => {
      const clone = child.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      container.appendChild(clone);
    });

    container.dataset.duplicated = "true";
  }

  const scrollSpeed = id === "skillsList" ? 0.6 : 0.9;

  const tick = () => {
    const loopWidth = container.scrollWidth / 2;

    if (loopWidth > 0) {
      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= loopWidth - 1) {
        container.scrollLeft = 0;
      }
    }

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
});
