function searchResult() {
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value;
  var type = document.getElementById("type").value;
  var reg = document.getElementById("reg").value;
  var dob = document.getElementById("dob").value;

  // Check empty fields
  if (year === "" || month === "" || type === "" || reg === "" || dob === "") {
    alert("Please fill all details");
    return;
  }

  // ✅ VALID DATA (ONLY THIS SHOULD WORK)
  if (
    year === "2025" &&
    month === "DECEMBER" &&
    type === "ETE" &&
    reg === "72518025" &&
    dob === "2007-08-04"
  ) {
    // Redirect to result page
    window.location.href =
      "result.html?year=" + year +
      "&month=" + month +
      "&type=" + type +
      "&reg=" + reg +
      "&dob=" + dob;
  } else {
    alert("❌ Invalid input. Please check your details.");
  }
}
