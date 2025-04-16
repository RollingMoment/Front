export const showAlert = (msg = "") => {
    const alertBox = document.getElementById("customAlert");
    if(msg !== null && msg !== "") {
        document.getElementById("alertMessage").innerText = msg;
    }
    alertBox.classList.remove("hidden");
}

export const showConfirm = (msg = "") => {
    const confirmBox = document.getElementById("customConfirm");
    if(msg !== null && msg !== "") {
        console.log(msg);
        document.getElementById("confirmMessage").innerText = msg;
    }
    confirmBox.classList.remove("hidden");
}
