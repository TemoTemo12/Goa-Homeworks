function calculateAge() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    if (!day || !month || !year) {
        document.getElementById('result').innerHTML = "Please fill out all fields.";
        return;
    }

    let birthDate = new Date(year, month - 1, day);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerHTML = `You are ${age} years old.`;
}