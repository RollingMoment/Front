export const showAlert = (msg) => {
    const alertBox = document.getElementById("customAlert");
    document.getElementById("alertMessage").innerText = msg;
    alertBox.classList.remove("hidden");
}

export const closeAlert = () => {
    document.getElementById("customAlert").classList.add("hidden");
}