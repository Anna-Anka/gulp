import { gotoBlock } from '../utils/_gotoBlock';

export function pageNavigation() {
    document.addEventListener('click', pageNavigationAction);
    document.addEventListener('watcherCallback', pageNavigationAction);
    function pageNavigationAction(e) {
        if (e.type === 'click') {
            const targetElement = e.target;
            if (targetElement.closest('[data-goto]')) {
                const gotoLink = targetElement.closest('[data-goto]');
                const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : '';
                const noHeader = !!gotoLink.hasAttribute('data-goto-header');
                const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : '500';
                gotoBlock(gotoLinkSelector, noHeader, gotoSpeed);
                e.preventDefault();
            }
        } else if (e.type === 'watcherCallback') {
            if (e.detail) {
                const { entry } = e.detail;
                const targetElement = entry.target;
                if (targetElement.dataset.watch === 'navigator') {
                    const navigatorItem = targetElement.id;
                    const navigatorActiveItem = document.querySelector('[data-goto]._navigator-active');
                    const navigatorCurrentItem = document.querySelector(`[data-goto="${navigatorItem}"]`);
                    if (entry.isIntersecting) {
                        navigatorCurrentItem ? navigatorCurrentItem.classList.add('_navigator-active') : null;
                    } else {
                        navigatorCurrentItem ? navigatorCurrentItem.classList.remove('_navigator-active') : null;
                    }
                }
            }
        }
    }
}
