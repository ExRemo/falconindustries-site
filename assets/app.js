(() => {
  document.documentElement.classList.add("js-enabled");

  const doc = document;
  const body = doc.body;
  const header = doc.querySelector("[data-site-header]");
  const menuToggle = doc.querySelector("[data-menu-toggle]");
  const mobileMenu = doc.querySelector("[data-mobile-menu]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  const closeMenu = ({ restoreFocus = false } = {}) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
    body.classList.remove("menu-open");
    header?.classList.remove("is-open");
    if (restoreFocus) menuToggle.focus({ preventScroll: true });
  };

  const openMenu = () => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", "true");
    mobileMenu.hidden = false;
    body.classList.add("menu-open");
    header?.classList.add("is-open");
    mobileMenu.querySelector("a")?.focus();
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMenu({ restoreFocus: true });
    else openMenu();
  });

  mobileMenu?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu({ restoreFocus: true });
  });

  doc.addEventListener("keydown", (event) => {
    const isMenuOpen =
      menuToggle?.getAttribute("aria-expanded") === "true" ||
      (mobileMenu && mobileMenu.hidden === false);

    if (event.key === "Escape" && isMenuOpen) {
      closeMenu({ restoreFocus: true });
    }
  });

  const revealElements = Array.from(doc.querySelectorAll("[data-reveal]"));
  const showRevealElements = () => {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  };

  if (reduceMotion) {
    showRevealElements();
  } else if ("IntersectionObserver" in window) {
    try {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );

      revealElements.forEach((element) => {
        revealObserver.observe(element);
      });
    } catch {
      showRevealElements();
    }
  } else {
    showRevealElements();
  }

  doc.querySelectorAll("[data-video-fallback]").forEach((video) => {
    const mediaPanel = video.closest(".hero__media");

    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("muted", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("preload", "auto");

    const markReady = () => {
      mediaPanel?.classList.add("has-video-ready");
      mediaPanel?.classList.remove("has-video-error");
      video.classList.remove("has-video-error");
    };

    const markVideoFailed = () => {
      video.classList.add("has-video-error");

      const candidates = Array.from(mediaPanel?.querySelectorAll("[data-video-fallback]") || []);
      const allCandidatesFailed =
        candidates.length > 0 &&
        candidates.every((candidate) => candidate.classList.contains("has-video-error"));

      if (allCandidatesFailed) {
        mediaPanel?.classList.add("has-video-error");
      }
    };

    video.addEventListener("canplay", markReady, { once: true });
    video.addEventListener("canplaythrough", markReady, { once: true });
    video.addEventListener("error", markVideoFailed);
    video.querySelectorAll("source").forEach((source) => {
      source.addEventListener("error", markVideoFailed);
    });

    if (window.getComputedStyle(video).display === "none") {
      video.pause();
      return;
    }

    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => {
        console.warn("Falcon hero video autoplay delayed or blocked.");
      });
    }
  });

  doc.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  doc.querySelectorAll("[data-contact-form]").forEach((form) => {
    const status = form.querySelector("[data-form-status]");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      const data = new FormData(form);
      const subject = form.dataset.mailSubject || "Falcon Industries project inquiry";
      const opening = form.dataset.statusOpening || "Opening your email client...";
      const fallback = form.dataset.statusFallback || "If nothing opens, email info@falconindustries.io.";
      const lines = [
        `Name: ${data.get("name") || ""}`,
        `Company: ${data.get("company") || ""}`,
        `Country: ${data.get("country") || ""}`,
        `Contact: ${data.get("contact") || ""}`,
        "",
        "Project:",
        data.get("message") || ""
      ];
      const mailto = `mailto:info@falconindustries.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

      if (status) status.textContent = opening;

      window.location.href = mailto;

      window.setTimeout(() => {
        if (status) status.textContent = fallback;
      }, 1200);
    });
  });
})();
