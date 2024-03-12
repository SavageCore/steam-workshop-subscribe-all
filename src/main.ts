const main = async () => {
    // Look for the workshopItemDescriptionTitle element
    const workshopItemDescriptionTitle = document.querySelector('.workshopItemDescriptionTitle');

    if (!workshopItemDescriptionTitle) {
        return;
    }

    // Look for the collectionChildren element
    const collectionChildren = document.querySelector('.collectionChildren');

    if (!collectionChildren) {
        return;
    }

    // Look for the subscribeCollection element
    const subscribeCollection = document.querySelector('.subscribeCollection');

    // If the element exists then do nothing
    if (subscribeCollection) {
        return;
    }

    // Get the collectionId
    const url = window.location.href;
    let collectionId = url.split('/').pop();

    // If the url is not a collection then return
    if (!collectionId) {
        return;
    }

    collectionId = collectionId.replace('?id=', '');

    // Get the appId
    const breadcrumbs = document.querySelector('.breadcrumbs');

    if (!breadcrumbs) {
        return;
    }

    const breadcrumbsLinks = breadcrumbs.querySelectorAll('a');
    const appLink = breadcrumbsLinks[0];
    const appHref = appLink.getAttribute('href');

    if (!appHref) {
        return;
    }

    const appId = appHref.split('/').pop();

    const html = `
    <div class="subscribeCollection">
        <a class="general_btn subscribe" title="Unofficial - userscript!" onclick="SubscribeCollection( '${collectionId}', '${appId}' );">
            <div class="subscribeIcon"></div>
            <span class="subscribeText">Subscribe to all</span>
        </a>
        <span class="general_btn subscribe" title="Unofficial - userscript!" onclick="UnsubscribeCollection( '${collectionId}' )">
            <div class="unsubscribeIcon"></div>
            <span>Unsubscribe from all</span>
        </span>
        <div style="clear: right"></div>
    </div>`;

    collectionChildren.insertAdjacentHTML('beforebegin', html);
}

// Run the main function
main();