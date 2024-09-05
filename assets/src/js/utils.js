/* -----------------------------------------------------------------------------
* toggleColorScheme
----------------------------------------------------------------------------- */
export function toggleColorScheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme');
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-color-scheme', 'dark');
    localStorage.setItem('PREFERRED_COLOR_SCHEME', 'dark')
  } else {
    document.documentElement.setAttribute('data-color-scheme', 'light');
    localStorage.setItem('PREFERRED_COLOR_SCHEME', 'light')
  }
}

/* -----------------------------------------------------------------------------
* initColorScheme
----------------------------------------------------------------------------- */
export function initColorScheme() {
  let preferredTheme = localStorage.getItem('PREFERRED_COLOR_SCHEME') || document.documentElement.getAttribute('data-color-scheme');
  if ( preferredTheme === 'system' && window.matchMedia) {
    preferredTheme === window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  document.documentElement.setAttribute('data-color-scheme', preferredTheme);
}

/* -----------------------------------------------------------------------------
* copyURL
----------------------------------------------------------------------------- */
export function copyURL(src, str) {
  navigator.clipboard.writeText(str);
  src.querySelector('span').innerHTML = src.getAttribute('data-success')
  src.classList.add('text-success', '!border-success')

  src.onmouseleave = function() { 
    setTimeout(function(){
      src.querySelector('span').innerHTML = src.getAttribute('data-label')
      src.classList.remove('text-success', '!border-success')
    }, 1000); 
  }
}

/* -----------------------------------------------------------------------------
* Handle Lightbox
----------------------------------------------------------------------------- */
export function handleLightbox() {
  const images = document.querySelectorAll('.kg-image-card img, .kg-gallery-card img');

  // Lightbox function
  images.forEach(image => {
    const linkElement = document.querySelector('[data-lightbox-link]').content.cloneNode(true);
    const imageLink = image.parentNode.nodeName === 'A' ? image.parentNode.getAttribute('href') : '';
    var lightboxWrapper = imageLink ? image.parentNode : document.createElement('a');

    lightboxWrapper.setAttribute('data-no-swup', '');
    lightboxWrapper.setAttribute('data-fslightbox', '');
    lightboxWrapper.setAttribute('href', image.src);
    lightboxWrapper.setAttribute('aria-label', 'Click for Lightbox');

    if (imageLink) {
      linkElement.querySelector('a').setAttribute('href', imageLink);
      lightboxWrapper.parentNode.insertBefore(linkElement, lightboxWrapper.parentNode.firstChild);
    } else {
      image.parentNode.insertBefore(lightboxWrapper, image.parentNode.firstChild);
      lightboxWrapper.appendChild(image);
    }
  });

  refreshFsLightbox();
}

/* -----------------------------------------------------------------------------
* toggleSubmenu
----------------------------------------------------------------------------- */
export function toggleSubmenu(e) {
  const subMenu = e.currentTarget.parentNode.querySelector('[data-submenu]')
  const type = e.currentTarget.closest('nav').getAttribute('data-nav')
  const toggle = e.currentTarget.parentNode.querySelector('button')
  if (subMenu && toggle) {
    subMenu.parentNode.toggleAttribute('data-submenu-open')
    toggle.classList.toggle('rotate-180')
    toggle.ariaExpanded = toggle.ariaExpanded !== 'true';
    if (type === 'desktop') {
      subMenu.classList.toggle('opacity-0')
      subMenu.classList.toggle('invisible')
      subMenu.classList.toggle('translate-y-1')
    } else {
      subMenu.classList.toggle('hidden')
    }
  }
}

/* -----------------------------------------------------------------------------
* closeSubmenus
----------------------------------------------------------------------------- */
export function closeSubmenus(e) {
  const currentMenu = e.target.closest('li.is-mainitem[data-slug]')
  const menus = currentMenu 
    ? document.querySelectorAll(`[data-submenu-open]:not([data-slug="${currentMenu.getAttribute('data-slug')}"])`)
    : document.querySelectorAll('[data-submenu-open]')
  menus.forEach(menu => {
    const subMenu = menu.querySelector('[data-submenu]')
    const type = menu.closest('nav').getAttribute('data-nav')
    const toggle = menu.querySelector('button')
    if (subMenu && toggle) {
      subMenu.parentNode.removeAttribute('data-submenu-open')
      toggle.classList.remove('rotate-180')
      toggle.ariaExpanded = false
      if (type === 'desktop') {
        subMenu.classList.add('opacity-0')
        subMenu.classList.add('invisible')
        subMenu.classList.add('translate-y-1')
      } else {
        subMenu.classList.add('hidden')
      }
    }
  })
}

/* -----------------------------------------------------------------------------
* handleTagList
----------------------------------------------------------------------------- */
export function handleTagList() {
  const tags = document.querySelectorAll('nav[data-featured-tags] a')

  tags.forEach(tag => {
    const url = tag.getAttribute('href');
    if (url === location.pathname) {
      tag.setAttribute('data-active', '');
    }
  })
}

/* -----------------------------------------------------------------------------
* toggleMembershipPlan
----------------------------------------------------------------------------- */
export function toggleMembershipPlan() {
  const plan = document.querySelector('[data-plan]')
  plan.getAttribute('data-plan') === 'yearly' 
    ? plan.setAttribute('data-plan', 'monthly') 
    : plan.setAttribute('data-plan', 'yearly') 
}

/* -----------------------------------------------------------------------------
* calculateDiscount
----------------------------------------------------------------------------- */
export function calculateDiscounts() {
  document.querySelectorAll('[data-discount][data-monthly-price]').forEach(plan => {
    const monthly = parseFloat(plan.getAttribute('data-monthly-price'));
    const yearly = parseFloat(plan.getAttribute('data-yearly-price'));
    const discount = Math.round(100 - parseInt((yearly/(12*monthly)) * 100));
    if ( discount > 0 && discount < 100 ) {
      plan.setAttribute('data-discount', `${discount}%`);
      plan.classList.remove('hidden')
    }
  })
}

/* -----------------------------------------------------------------------------
* getScrollPercent
----------------------------------------------------------------------------- */
export function getScrollPercent() {
  const h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
  return Math.round((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
}

export function renderTOC(headings) {
  let headerOffset = document.querySelector('header.sticky[data-header]') ? 92 : 20;

  tocbot.init({
    // Where to render the table of contents.
    tocSelector: '[data-toc-content]',
    // Where to grab the headings to build the table of contents.
    contentSelector: '.ghost-content',
    // Which headings to grab inside of the contentSelector element.
    headingSelector: headings,
    // Ignore some headings (like header card and toggle card)
    ignoreSelector: '[class*="kg-"],[class*="content-cta"]',
    // For headings inside relative or absolute positioned containers within content.
    hasInnerContainers: false,
    // smooth scroll
    scrollSmooth: false,
    // offset
    headingsOffset: headerOffset,
  });

  // document.querySelector('[data-toc-content] .toc-list') ? document.querySelector('[data-toc]').classList.add('is-rendered') : null;
}

/* -----------------------------------------------------------------------------
* handleSnapScroll
----------------------------------------------------------------------------- */
export function handleSnapScroll(direction) {
  const selector = '[data-tag-cards]'
  const container = document.querySelector(selector);
  const elements = document.querySelectorAll(`${selector} li`)
  const current = parseInt(container.getAttribute('data-active'))
  
  // get visible counter
  const containerRect = container.getBoundingClientRect();
  const visibleCount = [...elements].reduce((count, element) => {
    const elementRect = element.getBoundingClientRect();
    // Check if the entire element is within the container
    if (
      elementRect.left >= containerRect.left &&
      elementRect.right <= containerRect.right
    ) {
      return count + 1;
    }
    return count;
  }, 0);
  const maxCount = elements.length - visibleCount

  // reset index
  let index = current + direction
  if (index < 0) {
    index = 0
  } else if ( index > maxCount) {
    index = maxCount
  }

  // scroll and set index
  const element = elements[index]
  element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });  
  container.setAttribute('data-active', index);
}