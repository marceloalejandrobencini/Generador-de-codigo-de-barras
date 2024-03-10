let uniqueInput = document.getElementById("unique-input");
let uniqueBtn = document.getElementById("unique-btn-barcode-generator");

uniqueBtn.addEventListener("click", () => {
    JsBarcode("#unique-barcode", uniqueInput.value, {
        format: "code128",
        displayValue: true,
        fontSize: 24,
        lineColor: "#000",
    });
});

window.onload = (event) => {
    uniqueInput.value = "";
};
