
// Get HTML Elements
const dob = document.getElementById("dob");
const calculate = document.getElementById("calculate");
const reset = document.getElementById("reset");
const result = document.getElementById("result");
const message = document.getElementById("message");

// Set Maximum Date to Today
function getToday() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

dob.max = getToday();


// Calculate Age
calculate.addEventListener("click", function() {

    message.textContent = "";

    if (!dob.value) {
        message.textContent =
            "Please select your date of birth!";
        return;
    }

    const [year, month, day] =
        dob.value.split("-").map(Number);

    const today = new Date();

    const birthDate = new Date(
        year, month - 1, day
    );

    if (birthDate > today) {
        message.textContent =
            "Future date is not allowed!";
        return;
    }

    let years = today.getFullYear() - year;

    let months = today.getMonth() - (month - 1);

    let days = today.getDate() - day;

    if (days < 0) {
        months--;

        const previousMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += previousMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Display Result
    result.innerHTML = `
        <h2>Your Exact Age Is 🎉</h2>

        <div class="age-boxes">

            <div class="age-box">
                <span>${years}</span>
                <small>Years</small>
            </div>

            <div class="age-box">
                <span>${months}</span>
                <small>Months</small>
            </div>

            <div class="age-box">
                <span>${days}</span>
                <small>Days</small>
            </div>

        </div>
    `;

});


// Reset Calculator
reset.addEventListener("click", function() {

    dob.value = "";

    message.textContent = "";

    result.textContent =
        "Your age will appear here ✨";

});
