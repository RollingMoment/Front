

function CustomAlert({alertMsg = "", smallMsg ="", onConfirm = () => {}, confirmBtnMsg = "", noCancel=true}) {
    const closeAlert = () => {
        document.getElementById("customAlert").classList.add("hidden");
    }

    return (
        <div id="customAlert" className="alert-backdrop hidden">
            <div className="alert-box">
                <div id="alertMessage">
                    {smallMsg !== "" ? <p style={{color:"gray", fontSize:"x-small"}}>{smallMsg}</p>: <></>}
                    <p>{alertMsg}</p>
                </div>
                <button id="cancelBtn" className={noCancel ? "hidden" : ""} onClick={closeAlert}>취소</button>
                <button onClick={onConfirm}>{confirmBtnMsg}</button>
            </div>
        </div>
    )
}

export default CustomAlert;