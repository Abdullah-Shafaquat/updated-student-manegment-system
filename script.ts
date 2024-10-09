// Ensure the TypeScript compiler knows about the DOM
document.getElementById('studentForm')?.addEventListener('submit', function (e: Event) {
    e.preventDefault();

    // Type assertion to specify that these elements are HTML elements
    const studentNameInput = document.getElementById('studentName') as HTMLInputElement;
    const courseSelect = document.getElementById('courseSelect') as HTMLSelectElement;
    const paymentMethodSelect = document.getElementById('paymentMethod') as HTMLSelectElement;
    const paymentAmountInput = document.getElementById('paymentAmount') as HTMLInputElement;
    
    // Get values from the form inputs
    const studentName: string = studentNameInput.value 
    const course: string = courseSelect.value;
    const paymentMethod: string = paymentMethodSelect.value;
    const paymentAmount: number = parseFloat(paymentAmountInput.value);
    
    // Tuition fees for each course
    const tuitionFees: { [key: string]: number } = {
        "TypeScript": 6000,
        "JavaScript": 5000,
        "Python": 4000,
        "Html": 3000,
        "MsOffice": 2000
    };

    const requiredFee: number = tuitionFees[course];
    
    const statusDiv = document.getElementById('status') as HTMLElement;
    
    // Check if payment amount matches required fee
    if (paymentAmount === requiredFee) {
        statusDiv.innerHTML = `
            <h2>Enrollment Successful!</h2>
            <p>Student Name: ${studentName}</p>
            <p>Course: ${course}</p>
            <p>Payment Method: ${paymentMethod}</p>
            <p>Tuition Fees Paid: ${paymentAmount}</p>
        `;
        statusDiv.style.color = 'black';
        statusDiv.style.border = '2px solid yellow';
       
    } else {
        statusDiv.innerHTML = `<p style="color: red;">Invalid amount due to course fees. Please enter ${requiredFee}.</p>`;
    }
});
