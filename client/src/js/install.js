const butInstall = document.getElementById('buttonInstall');

//Initiallizing deffered prompt
let defferedPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.defferedPrompt = event
    butInstall.classList.toggle('hidden', false)
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const event = window.defferedPrompt
    if(!event) return
    event.prompt()
    window.defferedPrompt = null
    butInstall.classList.toggle('hidden',false)
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.defferedPrompt = null
});
