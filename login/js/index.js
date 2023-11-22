function showBookingOptions() {
    const bookingChoice = document.getElementById("bookingChoice").value;
    const bookingOptionsDiv = document.getElementById("bookingOptions");
    bookingOptionsDiv.innerHTML = ""; // Clear previous options

    if (bookingChoice === "fullday") 
    {
        const dateInput = createInput("Date", "date");
        bookingOptionsDiv.appendChild(dateInput);
    } 
    else if (bookingChoice === "halfday") 
    {
        const dateInput = createInput("Date", "date");
        const slotSelect = createSelect("Slot", ["Breakfast", "Lunch", "Dinner"]);
        bookingOptionsDiv.appendChild(dateInput);
        bookingOptionsDiv.appendChild(slotSelect);
    } 
    else if (bookingChoice === "hourly")
    {
        const dateInput = createInput("Date", "date");
        const timeInput = createInput("Time", "time");
        bookingOptionsDiv.appendChild(dateInput);
        bookingOptionsDiv.appendChild(timeInput);
    }
}

// to create date lable1

function createInput(labelText, type) {
    const label = document.createElement("label");
    label.textContent = labelText + ": ";
    const input = document.createElement("input");
    input.type = type;
    label.appendChild(input);
    return label;
}

// to create slot option

function createSelect(labelText, options) {
    const label = document.createElement("label");
    label.textContent = labelText + ":               ";
    const select = document.createElement("select");

    // to create multiple slot option

    options.forEach(optionText => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
    });

    label.appendChild(select);
    return label;
}