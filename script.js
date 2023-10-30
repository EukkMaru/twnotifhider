const TARGET_NAME = 'Hanna';  // Global variable for the target name

;(async () => {
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

    const notificationsSection = await waitForElement('main div[aria-label="Home timeline"] div:nth-child(3) section div[aria-label="Timeline: Notifications"] div');

    const processNotifications = () => {
        const notifications = notificationsSection.querySelectorAll('article[data-testid="notification"]');
        notifications.forEach(notification => {
            const userElements = [...notification.querySelectorAll('div[dir="ltr"] > *')]; // Get all child elements (divs and spans)
            const userNames = userElements.filter(el => el.tagName === 'DIV').map(div => div.querySelector('span:first-child').textContent.trim());
            
            if (userNames.includes(TARGET_NAME)) {
                if (userNames.length === 1) {
                    // Single-user notification
                    notification.style.display = 'none';
                } else {
                    // Multi-user notification
                    const targetIndex = userNames.indexOf(TARGET_NAME);
                    const pfps = [...notification.querySelectorAll('div > ul[role="list"] > div')];
                    
                    // Remove the profile picture
                    pfps[targetIndex].remove();

                    // Remove the name "Hanna" and adjust the "and" accordingly
                    const targetElement = userElements.find(el => el.textContent.trim() === TARGET_NAME);
                    if (targetElement) {
                        const targetElementIndex = userElements.indexOf(targetElement);
                        targetElement.remove();
                        if (targetElementIndex === 0) {
                            userElements[targetElementIndex + 1].remove();  // Remove the following "and" span
                        } else if (targetElementIndex === userElements.length - 1) {
                            userElements[targetElementIndex - 1].remove();  // Remove the preceding "and" span
                        } else {
                            userElements[targetElementIndex - 1].remove();  // Remove either the preceding or following "and" span
                        }
                    }
                }
            }
        });
    };

    // Initial check
    processNotifications();

    // Set up observer for continuous scanning and processing
    const observer = new MutationObserver(processNotifications);
    observer.observe(notificationsSection, { childList: true, subtree: true });
})();
