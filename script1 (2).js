// Use the following to include this JavaScript file 
// <script src="script1.js"></script>
document.getElementById('show-contact').addEventListener('click', function () {
  const contactInfo = document.getElementById('contact-info');
  contactInfo.style.display = contactInfo.style.display === 'none' ? 'block' : 'none';
});
