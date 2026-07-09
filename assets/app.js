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

  const heroVideos = Array.from(doc.querySelectorAll("[data-video-fallback]"));

  if (heroVideos.length > 0) {
    const heroMediaQuery = window.matchMedia("(max-width: 768px)");
    let activeHeroVideo = null;

    heroVideos.forEach((video) => {
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("autoplay", "");
      video.setAttribute("muted", "");
      video.setAttribute("loop", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("preload", "metadata");

      video.addEventListener("playing", () => {
        if (video !== activeHeroVideo) return;
        const mediaPanel = video.closest(".hero__media");
        mediaPanel?.classList.add("has-video-ready");
        mediaPanel?.classList.remove("has-video-error");
        video.classList.remove("has-video-error");
      });

      video.addEventListener("error", () => {
        video.classList.add("has-video-error");
        if (video !== activeHeroVideo) return;
        const mediaPanel = video.closest(".hero__media");
        mediaPanel?.classList.remove("has-video-ready");
        mediaPanel?.classList.add("has-video-error");
      });
    });

    const unloadHeroVideo = (video) => {
      video.pause();
      if (!video.hasAttribute("src")) return;
      video.removeAttribute("src");
      video.load();
    };

    const syncHeroVideo = () => {
      const targetClass = heroMediaQuery.matches
        ? "hero__video--mobile"
        : "hero__video--desktop";
      const nextVideo = heroVideos.find((video) => video.classList.contains(targetClass));

      if (!nextVideo || nextVideo === activeHeroVideo) return;

      heroVideos.forEach((video) => {
        if (video !== nextVideo) unloadHeroVideo(video);
      });

      activeHeroVideo = nextVideo;
      const mediaPanel = nextVideo.closest(".hero__media");
      mediaPanel?.classList.remove("has-video-ready", "has-video-error");
      nextVideo.classList.remove("has-video-error");

      const source = nextVideo.dataset.src;
      if (!source) {
        nextVideo.classList.add("has-video-error");
        mediaPanel?.classList.add("has-video-error");
        return;
      }

      nextVideo.src = source;
      nextVideo.load();

      const playAttempt = nextVideo.play();
      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch((error) => {
          if (nextVideo !== activeHeroVideo || error?.name === "AbortError") return;
          console.warn("Falcon hero video autoplay delayed or blocked.");
        });
      }
    };

    if (typeof heroMediaQuery.addEventListener === "function") {
      heroMediaQuery.addEventListener("change", syncHeroVideo);
    } else {
      heroMediaQuery.addListener(syncHeroVideo);
    }

    syncHeroVideo();
  }

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
