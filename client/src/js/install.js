const butInstall = document.getElementById('buttonInstall');

// Store the beforeinstallprompt event to trigger installation later
let deferredPrompt;

// Listen for the 'beforeinstallprompt' event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser prompt
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Show the install button
  butInstall.style.display = 'inline-block';
});

// Implement a click event handler on the 'butInstall' element
butInstall.addEventListener('click', async () => {
  // Hide the install button
  butInstall.style.display = 'none';
  // Show the install prompt
  if (deferredPrompt) {
    deferredPrompt.prompt();
    // Wait for the user's response to the prompt
    const result = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${result.outcome}`);
    // Reset the deferredPrompt variable
    deferredPrompt = null;
  }
});

// Add a handler for the 'appinstalled' event
window.addEventListener('appinstalled', (event) => {
  // Optionally, you can display a message or perform additional actions here
  console.log('PWA was installed successfully!');
});
