var _a;
// Ensure the TypeScript compiler knows about the DOM
(_a = document.getElementById('studentForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    // Type assertion to specify that these elements are HTML elements
    var studentNameInput = document.getElementById('studentName');
    var courseSelect = document.getElementById('courseSelect');
    var paymentMethodSelect = document.getElementById('paymentMethod');
    var paymentAmountInput = document.getElementById('paymentAmount');
    // Get values from the form inputs
    var studentName = studentNameInput.value;
    var course = courseSelect.value;
    var paymentMethod = paymentMethodSelect.value;
    var paymentAmount = parseFloat(paymentAmountInput.value);
    // Tuition fees for each course
    var tuitionFees = {
        "TypeScript": 6000,
        "JavaScript": 5000,
        "Python": 4000,
        "Html": 3000,
        "MsOffice": 2000
    };
    var requiredFee = tuitionFees[course];
    var statusDiv = document.getElementById('status');
    // Check if payment amount matches required fee
    if (paymentAmount === requiredFee) {
        statusDiv.innerHTML = "\n            <h2>Enrollment Successful!</h2>\n            <p>Student Name: ".concat(studentName, "</p>\n            <p>Course: ").concat(course, "</p>\n            <p>Payment Method: ").concat(paymentMethod, "</p>\n            <p>Tuition Fees Paid: ").concat(paymentAmount, "</p>\n        ");
        statusDiv.style.color = 'black';
        statusDiv.style.border = '2px solid yellow';
    }
    else {
        statusDiv.innerHTML = "<p style=\"color: red;\">Invalid amount due to course fees. Please enter ".concat(requiredFee, ".</p>");
    }
});
