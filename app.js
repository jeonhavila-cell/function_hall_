let currentTotal = 0;

function calculateTotal() {
    const hall = Number(document.getElementById("hall").value);
    const chairs = Number(document.getElementById("chairs").value);
    const decoration = Number(document.getElementById("decoration").value);
    const foodPerPerson = Number(document.getElementById("food").value);
    const guests = Number(document.getElementById("guests").value);
    const date = document.getElementById("bookingDate").value;

    if (!date) {
        alert("Please select booking date.");
        return;
    }

    if (guests < 1) {
        alert("Guests must be at least 1.");
        return;
    }

    const foodTotal = foodPerPerson * guests;
    currentTotal = hall + chairs + decoration + foodTotal;

    document.getElementById("summary").innerHTML = `
        <strong>Booking Summary</strong><br><br>
        Hall: ₹${hall.toLocaleString()}<br>
        Chairs: ₹${chairs.toLocaleString()}<br>
        Decoration: ₹${decoration.toLocaleString()}<br>
        Food: ₹${foodTotal.toLocaleString()}<br>
        Date: ${date}<br>
        <hr>
        <strong>Total: ₹${currentTotal.toLocaleString()}</strong>
    `;

    document.getElementById("paymentSection").style.display = "block";
    document.getElementById("paymentSection").scrollIntoView({behavior:"smooth"});
}

function showPaymentFields() {
    document.querySelectorAll(".payment-fields").forEach(
        element => element.style.display = "none"
    );

    const method = document.getElementById("paymentMethod").value;

    if (method === "UPI") {
        document.getElementById("upiFields").style.display = "block";
    } else if (method === "CARD") {
        document.getElementById("cardFields").style.display = "block";
    } else if (method === "NETBANKING") {
        document.getElementById("bankFields").style.display = "block";
    } else if (method === "CASH") {
        document.getElementById("cashFields").style.display = "block";
    }
}

function processPayment() {
    const method = document.getElementById("paymentMethod").value;

    if (!method) {
        showPaymentError("Please select a payment method.");
        return;
    }

    if (method === "UPI" && !document.getElementById("upiId").value.trim()) {
        showPaymentError("Enter a demo UPI ID.");
        return;
    }

    if (method === "CARD") {
        const card = document.getElementById("cardNumber").value.trim();
        const expiry = document.getElementById("expiry").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        if (!card || !expiry || !cvv) {
            showPaymentError("Fill the demo card fields.");
            return;
        }
    }

    if (method === "NETBANKING" && !document.getElementById("bank").value) {
        showPaymentError("Please select a bank.");
        return;
    }

    const bookingId = "FH" + Date.now().toString().slice(-8);

    document.getElementById("paymentResult").innerHTML = `
        <div class="success">
            <strong>Booking Confirmed!</strong><br><br>
            Booking ID: ${bookingId}<br>
            Payment Method: ${method}<br>
            Amount: ₹${currentTotal.toLocaleString()}<br>
            Payment Status: DEMO SUCCESS<br><br>
            Please keep your Booking ID for reference.
        </div>
    `;
}

function showPaymentError(message) {
    document.getElementById("paymentResult").innerHTML =
        `<div class="error">${message}</div>`;
}
