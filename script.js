// -------------------- Book JS --------------------

// Select book and pages
const book = document.querySelector('.book');
const pages = document.querySelectorAll('.book .page');

// Optional next/prev buttons
const nextBtn = document.querySelector('.next-page');
const prevBtn = document.querySelector('.prev-page');

let currentPage = 0;
const totalPages = pages.length - 1;

// Function to update page flipping
function updatePages() {
  pages.forEach((page, index) => {
    if(index <= currentPage) {
      page.classList.add('flipped');
    } else {
      page.classList.remove('flipped');
    }
  });
}

// -------------------- Next Page --------------------
if(nextBtn) {
  nextBtn.addEventListener('click', () => {
    if(currentPage < totalPages) {
      currentPage++;
      updatePages();
    } else {
      // Auto-close after last page
      pages.forEach(p => p.classList.remove('flipped'));
      currentPage = 0;
    }
  });
}

// -------------------- Previous Page --------------------
if(prevBtn) {
  prevBtn.addEventListener('click', () => {
    if(currentPage > 0) {
      currentPage--;
      updatePages();
    }
  });
}

// -------------------- Hover to Open/Close --------------------
if(book) {
  book.addEventListener('mouseenter', () => {
    // Slight opening effect for first page
    book.style.transform = 'rotateY(-15deg)';
  });

  book.addEventListener('mouseleave', () => {
    // Close book when mouse leaves
    book.style.transform = 'rotateY(0deg)';
  });
}

// -------------------- Click to Flip Pages --------------------
book.addEventListener('click', () => {
  if(currentPage < totalPages) {
    currentPage++;
    updatePages();
  } else {
    // Auto-close after last page
    pages.forEach(p => p.classList.remove('flipped'));
    currentPage = 0;
  }
});

// -------------------- Scroll to Book Section --------------------
document.querySelectorAll('.navbar ul li a').forEach(link => {
  if(link.textContent.trim() === "About Me") {
    link.addEventListener('click', e => {
      e.preventDefault();
      const bookSection = document.querySelector('#about-book');
      if(bookSection) {
        bookSection.scrollIntoView({behavior: 'smooth'});
      }
    });
  }
});







