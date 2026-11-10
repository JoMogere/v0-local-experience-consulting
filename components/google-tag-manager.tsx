import Script from 'next/script'

const GTM_ID = 'GTM-TTDC3RDX'

// Google Tag Manager. Tags (Google Analytics and others) are managed inside the GTM dashboard,
// so nothing else needs to change here when a tag is added or removed.
export function GoogleTagManager() {
  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
var f = document.getElementsByTagName('script')[0], j = document.createElement('script');
j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=${GTM_ID}';
f.parentNode.insertBefore(j, f);`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  )
}
