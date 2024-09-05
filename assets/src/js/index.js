/* -----------------------------------------------------------------------------
CSS imports & Polyfill
----------------------------------------------------------------------------- */
import '../css/main.css';
import '../css/ghost.css';
import '../css/theme.css';

import 'vite/modulepreload-polyfill'

/* -----------------------------------------------------------------------------
Alpine Js
----------------------------------------------------------------------------- */
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

/* -----------------------------------------------------------------------------
Tocbot
----------------------------------------------------------------------------- */
import tocbot from 'tocbot';
window.tocbot = tocbot

/* -----------------------------------------------------------------------------
Custom functions
----------------------------------------------------------------------------- */
import { 
  initColorScheme, 
  copyURL,
  toggleSubmenu,
  closeSubmenus,
  toggleColorScheme,
  handleTagList,
  toggleMembershipPlan,
  calculateDiscounts,
  getScrollPercent,
  renderTOC,
  handleSnapScroll
} from './utils';

window.initColorScheme = initColorScheme
window.copyURL = copyURL
window.toggleSubmenu = toggleSubmenu
window.closeSubmenus = closeSubmenus
window.toggleColorScheme = toggleColorScheme
window.handleTagList = handleTagList
window.toggleMembershipPlan = toggleMembershipPlan
window.calculateDiscounts = calculateDiscounts
window.getScrollPercent = getScrollPercent
window.renderTOC = renderTOC
window.handleSnapScroll = handleSnapScroll

/* -----------------------------------------------------------------------------
Fitvids
----------------------------------------------------------------------------- */
import fitvids from 'fitvids';
window.Fitvids = fitvids
Fitvids();