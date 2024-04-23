const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// DONE: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => { // event.preventDefault();
    window.deferredPrompt = event;
    // remove the hidden class and show the install button
    butInstall.classList.toggle('hidden', false);

});

// DONE: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('Button clicked check :)');
    // get event stored in window.deferredprompt and save event to promptevent variable

    const promptEvent = window.deferredPrompt;
    // check if no event stored here
    if (! promptEvent) {
        return;
    }
    // show the install prompt
    console.log(promptEvent);
    promptEvent.prompt();

    window.deferredPrompt = null;
    // remobe the install btn by adding hidden class
    butInstall.classList.toggle('hidden', true);
});

// DONE: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => { // console log to confirm app was installed
    console.log('APP installed successfully');
    // set deferred prompt to null
    window.deferredPrompt = null;
});