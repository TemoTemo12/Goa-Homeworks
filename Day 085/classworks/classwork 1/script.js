document.addEventListener('DOMContentLoaded', () => {
    const ratingBtns = document.querySelectorAll('.rating-btn');
    const submitBtn = document.getElementById('submit-btn');
    const ratingComponent = document.querySelector('.rating-component');
    const thankYouComponent = document.getElementById('thank-you');
    let selectedRating = null;

    ratingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            ratingBtns.forEach(btn => btn.classList.remove('selected'));
            btn.classList.add('selected');
            selectedRating = btn.getAttribute('data-rating');
        });
    });

    submitBtn.addEventListener('click', () => {
        if (selectedRating) {
            ratingComponent.classList.add('hidden');
            thankYouComponent.classList.remove('hidden');
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});



document.querySelector('.reset-button').addEventListener('click', () => {
    // Reset functionality (for demo purposes, we'll just show a popup)
    showPopup();
  });
  
  function showPopup() {
    const popup = document.createElement('div');
    popup.className = 'popup show';
    popup.innerText = 'Reset successful!';
    document.body.appendChild(popup);
  
    setTimeout(() => {
      popup.classList.remove('show');
      setTimeout(() => document.body.removeChild(popup), 300);
    }, 2000);
  }
  
  