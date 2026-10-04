const autoScrollTargets = ["projectsList", "skills-list"];

autoScrollTargets.forEach((id) => {
  const container = document.getElementById(id);

  if (!container) {
    return;
  }

  const scrollSpeed = id === "skills-list" ? 0.5 : 0.8;

  const tick = () => {
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (maxScrollLeft > 0) {
      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= maxScrollLeft) {
        container.scrollLeft = 0;
      }
    }
  };

  setInterval(tick, 16);
});
