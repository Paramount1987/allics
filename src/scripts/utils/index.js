// require('./detectUserAgent');
// eslint-disable-next-line import/prefer-default-export
export function isMobileDevice() {
    return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
