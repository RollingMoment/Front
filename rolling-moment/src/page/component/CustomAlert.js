

function CustomAlert({
    smallMsg = "",
    alertMsg = ""
}) {
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
                <button className="confirm" id="confirmBtn" onClick={closeAlert}>닫기</button>
            </div>
        </div>
    )
}

export default CustomAlert;