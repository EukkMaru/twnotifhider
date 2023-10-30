// ==UserScript==
// @name         twnotifhider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fk you hanna
// @run-at       document-end
// @author       @maru_9937
// @match        https://twitter.com/notifications*
// @grant        none
// ==/UserScript==

console.log("Tampermonkey script started");
const TARGET = 'Hanna';

const LANGUAGES = {
    'en': {
        homeTimeline: 'Home timeline',
        notificationsTimeline: 'Timeline: Notifications'
    },
    'ko': {
        homeTimeline: '홈 타임라인',
        notificationsTimeline: '타임라인: 알림'
    }
};

const currentLanguage = document.documentElement.lang || 'en';
const LABELS = LANGUAGES[currentLanguage];

const waitForNotificationCell = () =>
    new Promise(resolve => {
        const checkForCell = () => {
            const cell = document.querySelector('article[data-testid="notification"]');
            if (cell) {
                resolve(cell);
            } else {
                setTimeout(checkForCell, 500);  // Check every half second
            }
        };
        checkForCell();
    });

const waitForElement = selector =>
    new Promise(resolve => {
        let element = document.querySelector(selector);
        if (element) {
            resolve(element);
            return;
        }
        const observer = new MutationObserver(() => {
            element = document.querySelector(selector);
            if (element) {
                observer.disconnect();
                resolve(element);
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });

;(async () => {
    await waitForNotificationCell();
    const notificationsSection = await waitForElement(`main div[aria-label="${LABELS.homeTimeline}"] div:nth-child(3) section div[aria-label="${LABELS.notificationsTimeline}"] div`);

    const processNotifications = () => {
        const notifications = notificationsSection.querySelectorAll('article[data-testid="notification"]');
        notifications.forEach(notification => {
            const userElements = [...notification.querySelectorAll('div[dir="ltr"] > *')];
            const userNames = userElements.filter(el => el.tagName === 'DIV').map(div => {
                const span = div.querySelector('span:first-child');
                return span ? span.textContent.trim() : '';
            }).filter(name => name);
            if (userNames.includes(TARGET)) {
                if (userNames.length === 1) {
                    notification.style.display = 'none';
                } else {
                    const targetIndex = userNames.indexOf(TARGET);
                    const pfps = [...notification.querySelectorAll('div > ul[role="list"] > div')];
                    pfps[targetIndex].remove();
                    const targetElement = userElements.find(el => el.textContent.trim() === TARGET);
                    if (targetElement) {
                        const targetElementIndex = userElements.indexOf(targetElement);
                        targetElement.remove();
                        if (targetElementIndex === 0) {
                            userElements[targetElementIndex + 1].remove();
                        } else if (targetElementIndex === userElements.length - 1) {
                            userElements[targetElementIndex - 1].remove();
                        } else {
                            userElements[targetElementIndex - 1].remove();
                        }
                    }
                }
            }
        });
    };

    processNotifications();

    const observer = new MutationObserver(processNotifications);
    observer.observe(notificationsSection, { childList: true, subtree: true });
})();
