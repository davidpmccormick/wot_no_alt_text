var isPreview = document.body.classList.contains('is-preview');

if (isPreview) {
  document.body.classList.remove('is-preview');
} else {
  document.body.classList.add('is-preview');
}
