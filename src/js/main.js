
// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-quad',
        offset: 100
    });

    // Cookie Consent Logic
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookies = document.getElementById('accept-cookies');
    const rejectCookies = document.getElementById('reject-cookies');

    if (!localStorage.getItem('cookieConsent')) {
        cookieConsent.style.display = 'flex';
    } else if (localStorage.getItem('cookieConsent') === 'accepted') {
        cookieConsent.style.display = 'none';
        loadAnalytics();
    }

    acceptCookies.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.style.display = 'none';
        loadAnalytics();
    });

    rejectCookies.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'rejected');
        cookieConsent.style.display = 'none';
    });

    function loadAnalytics() {
        if (window.dataLayer) return;

        var script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HS4MQ1S6TY';
        script.async = true;
        document.head.appendChild(script);

        script.onload = function () {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-HS4MQ1S6TY');
            gtag('consent', 'update', {
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            });
        };
    }
});
