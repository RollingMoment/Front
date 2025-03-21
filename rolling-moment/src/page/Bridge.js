import '../App.css';
import logo from '../img/test-img.jpg';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Bridge() {
    // 초기 개발 상태, 추후 변경 가능성 존재
    const handleDeepLink = () => {
        const randomText = Math.random().toString(36).substring(2,13);
        const schemeUrl = "rollingmoment://invite?inviteCode="+randomText;

        window.location.replace(schemeUrl);

        // if (isIOS) {
        //   // 기기가 ios인 경우 - 앱스토어 호출
        // } else if (isAndroid) {
        //   // 기기가 android인 경우 - 플레이스토어 호출
        // } else {
        //   // 윈도우 데스크탑 등인 경우 - ?
        // }

      };
    
    const btnStyle = {
        backgroundColor: "blueviolet",
        width: "200px",
        height: "50px",
        borderRadius: "5px",
        textAlign: "center",
        lineHeight : "50px",
        color: "whitesmoke",
        fontSize: "larger",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        margin: "auto",
        cursor: "pointer",
    }


    return (
        <div className="App">
            {/* 버튼 클릭 X, 링크 접속 시 알아서 보내도록 수정 필요, 어려운 경우 버튼에 (모먼트 보러 가기) 등 입력하여 사용 */}
            <h1>Rolling Moment</h1>

            <img src={logo} alt='로고 이미지' style={{width: "200px", height: "200px"}} />
            <p>앱으로 이동중입니다...</p>

            <CopyToClipboard className="clipboard" onCopy={handleDeepLink}>
                <div style={btnStyle}>DeepLink Btn</div>
            </CopyToClipboard>
        </div>


    );
}

export default Bridge;
