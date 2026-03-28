document.getElementById("sheetdb-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let form = document.getElementById("sheetdb-form");
    let formData = new FormData(form);

    fetch("https://sheetdb.io/api/v1/yq7bcxay2k73z", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("responseMessage").style.display = "block";
        form.reset();
    })
    .catch(error => {
        alert("Something went wrong!");
    });
});