const autoScrollTargets = ["projectsList", "skillsList"];

const createAutoScroller = (container) => {
  const originalChildren = Array.from(container.children);

  if (originalChildren.length && !container.dataset.duplicated) {
    originalChildren.forEach((child) => {
      const clone = child.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      container.appendChild(clone);
    });

    container.dataset.duplicated = "true";
  }

  const scrollSpeed = container.id === "skillsList" ? 1.2 : 1.6;
  let isPaused = false;
  let isDragging = false;
  let resumeTimeout = null;
  let dragStartX = 0;
  let dragStartScrollLeft = 0;

  const pauseAutoScroll = (delay = 250) => {
    isPaused = true;

    if (resumeTimeout) {
      clearTimeout(resumeTimeout);
    }

    resumeTimeout = setTimeout(() => {
      if (!isDragging) {
        isPaused = false;
      }
    }, delay);
  };

  const handleUserInteraction = (delay = 250) => {
    pauseAutoScroll(delay);
  };

  container.addEventListener("pointerenter", () => {
    handleUserInteraction(400);
    container.classList.add("is-hovered");
  });

  container.addEventListener("pointerleave", () => {
    container.classList.remove("is-hovered");
    isPaused = false;
  });

  container.addEventListener("pointerdown", (event) => {
    isDragging = true;
    dragStartX = event.clientX;
    dragStartScrollLeft = container.scrollLeft;
    container.classList.add("dragging");
    handleUserInteraction(500);
    container.setPointerCapture(event.pointerId);
  });

  container.addEventListener("pointermove", (event) => {
    if (!isDragging) {
      return;
    }

    const deltaX = event.clientX - dragStartX;
    container.scrollLeft = dragStartScrollLeft - deltaX;
  });

  container.addEventListener("pointerup", () => {
    isDragging = false;
    container.classList.remove("dragging");
    isPaused = false;
  });

  container.addEventListener("pointercancel", () => {
    isDragging = false;
    container.classList.remove("dragging");
    isPaused = false;
  });

  container.addEventListener("wheel", handleUserInteraction, { passive: true });
  container.addEventListener("touchstart", handleUserInteraction, {
    passive: true,
  });
  container.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      handleUserInteraction();
    }
  });

  container.tabIndex = 0;

  const tick = () => {
    const loopWidth = container.scrollWidth / 2;

    if (!isPaused && !isDragging && loopWidth > 0) {
      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= loopWidth - 1) {
        container.scrollLeft = 0;
      }
    }

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

autoScrollTargets.forEach((id) => {
  const container = document.getElementById(id);

  if (container) {
    createAutoScroller(container);
  }
});
