
function CustomConfirm ({
    smallMsg = "",
    alertMsg = "",
    onConfirm = () => {},
    confirmBtnMsg = ""
}) {

    const closeAlert = () => {
        document.getElementById("customConfirm").classList.add("hidden");
    }

    return (
        <div id="customConfirm" className="alert-backdrop hidden">
            <div className="alert-box">
                <div id="confirmMessage">
                    {smallMsg !== "" ? <p style={{color:"gray", fontSize:"x-small"}}>{smallMsg}</p>: <></>}
                    <p>{alertMsg}</p>
                </div>
                <div className="alert-buttons">
                    <button className="close" id="confirmCloseBtn" onClick={closeAlert}>닫기</button>
                    <button className="confirm" id="confirmBtn" onClick={onConfirm}>{confirmBtnMsg}</button>
                </div>
            </div>
        </div>
    )
}

export default CustomConfirm;