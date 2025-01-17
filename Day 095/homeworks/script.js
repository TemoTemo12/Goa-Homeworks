// Level 95:

// 1) გადახედეთ გაკვეთილს თადავიდან და გააკეთეთ მოცემული დავალება

// me davwere kodi tavidan :( classworkebshia <3

// 2) დავამატოთ ტექსტის ფერის შეცვლის ფუნქცია

function changeTextColor() {
    const textElement = document.getElementById('text');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8C33'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    textElement.style.color = randomColor;
  }
  