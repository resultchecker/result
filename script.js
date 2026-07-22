function searchResult() {

    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var type = document.getElementById("type").value;
    var reg = document.getElementById("reg").value.trim();
    var dob = document.getElementById("dob").value;

    // Check if all fields are filled
    if (year === "" || month === "" || type === "" || reg === "" || dob === "") {
        alert("Please fill all details.");
        return;
    }

    // Valid credentials
    const validReg = "72518025";
    const validDob = "2007-08-04";
    const validType = "ETE";

    // ===== December 2025 Result =====
    if (
        year === "2025" &&
        month === "DECEMBER" &&
        type === validType &&
        reg === validReg &&
        dob === validDob
    ) {

        window.location.href = "result.html?result=2025";
        return;
    }

    // ===== June 2026 Result =====
    if (
        year === "2026" &&
        month === "JUNE" &&
        type === validType &&
        reg === validReg &&
        dob === validDob
    ) {

        window.location.href = "result.html?result=2026";
        return;
    }

    // Invalid Details
    alert("❌ Invalid Input!\n\nPlease check your Year, Month, Exam Type, Registration Number and Date of Birth.");
}
