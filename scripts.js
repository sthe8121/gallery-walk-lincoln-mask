console.log('Lincoln Life Mask Gallery Loaded');
function openAudioPopup() {
  const popup = window.open('', 'Audio Guide', 'width=500,height=400');
  popup.document.write(`
    <html><head><title>Lincoln Audio Guide</title></head>
    <body style="font-family:sans-serif; padding:1rem;">
      <h3>Lincoln Tactile Audio Guide</h3>
      <ul>
        <li><a href="https://npg.si.edu/sites/default/files/audio/lincoln_intro_orientation.mp3" target="_blank">Introduction and Orientation</a></li>
        <li><a href="https://npg.si.edu/sites/default/files/audio/lincoln_1860_mask.mp3" target="_blank">1860 Face Mask</a></li>
        <li><a href="https://npg.si.edu/sites/default/files/audio/lincoln_1865_mask.mp3" target="_blank">1865 Face Mask</a></li>
        <li><a href="https://npg.si.edu/sites/default/files/audio/lincoln_hands.mp3" target="_blank">Lincoln Hands</a></li>
      </ul>
    </body></html>
  `);
}
