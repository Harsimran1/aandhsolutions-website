document.addEventListener('astro:page-load', () => {
  const animatedElements = document.querySelectorAll<HTMLElement>('[data-animate]');

  animatedElements.forEach((element, index) => {
    const animationType = element.getAttribute('data-animate');
    const delay = element.getAttribute('data-delay') || String(index * 100);

    element.style.animationDelay = `${delay}ms`;

    setTimeout(() => {
      if (animationType) {
        element.classList.add(animationType);
      }
      element.classList.add('animated');
    }, 10);
  });

  const parallaxElements = document.querySelectorAll<HTMLElement>('[data-parallax]');

  if (parallaxElements.length > 0) {
    let ticking = false;

    const handleParallax = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          parallaxElements.forEach((element) => {
            const speed = Number(element.getAttribute('data-parallax') || '0.1');
            const yPos = -(scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleParallax, { passive: true });
  }

  const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]:not([href="#"])');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      if (!targetId) return;
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        requestAnimationFrame(() => {
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        });
      }
    });
  });

  const pageTransitionElements = document.querySelectorAll<HTMLElement>('[data-page-transition]');

  pageTransitionElements.forEach((element) => {
    const transitionType = element.getAttribute('data-page-transition');
    if (transitionType) {
      element.classList.add(`transition-${transitionType}`);
    }
  });
});

document.addEventListener('astro:before-preparation', (event: Event) => {
  const customEvent = event as CustomEvent<{ from?: string; to?: string }>;
  const from = customEvent.detail?.from;
  const to = customEvent.detail?.to;

  if (from && to) {
    const fromPath = new URL(from).pathname;
    const toPath = new URL(to).pathname;

    const fromDepth = fromPath.split('/').filter(Boolean).length;
    const toDepth = toPath.split('/').filter(Boolean).length;

    let navDirection = 'same';

    if (toDepth > fromDepth) {
      navDirection = 'deeper';
    } else if (toDepth < fromDepth) {
      navDirection = 'shallower';
    }

    localStorage.setItem('navigationDirection', navDirection);
  }
});

document.addEventListener('astro:page-load', () => {
  const navDirection = localStorage.getItem('navigationDirection');

  if (navDirection) {
    document.documentElement.setAttribute('data-navigation', navDirection);

    setTimeout(() => {
      localStorage.removeItem('navigationDirection');
    }, 1000);
  }
});
