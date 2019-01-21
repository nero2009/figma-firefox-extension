var storage = browser.storage.local;

storage.get('enabled', function(items) {
    isEnabled = items.enabled;
    if (isEnabled || isEnabled == undefined)
        storage.set({ 'enabled': false }, updateExtensionStatus("disabled"));
    else
        storage.set({ 'enabled': true }, updateExtensionStatus("enabled"));
});

function updateExtensionStatus(status) {
    browser.runtime.sendMessage(status);
    window.close();
}