export const getScrollProgress = () => {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    return (scrollTop / (docHeight - winHeight)) * 100;
};

export const isElementInView = (element: HTMLElement, threshold = 0) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top + threshold <= window.innerHeight &&
        rect.bottom - threshold >= 0
    );
}; 