const videoElement = document.getElementById('videos');
const button = document.getElementById('button');

// Prompt user to select media stream, pass video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {

    }
}

button.addEventListener('click', async () => {
    button.disabled = true; // Set the button disable
    await videoElement.requestPictureInPicture(); // Request PIP Mode
    button.disabled = false; // Enable the button
});

//Load
selectMediaStream();