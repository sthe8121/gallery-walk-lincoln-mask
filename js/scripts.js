
function playAudio(audioUrl) {
  const audioWindow = window.open('', 'AudioPlayer', 'width=400,height=200');
  audioWindow.document.write(`
    <html>
    <head><title>Playing Audio</title></head>
    <body style="font-family:Arial;padding:1rem;">
      <p>Now playing audio:</p>
      <audio controls autoplay>
        <source src="${audioUrl}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </body>
    </html>
  `);
}
