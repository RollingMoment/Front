import '../App.css';
import logo from '../img/test-img.jpg';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Bridge() {
    // 초기 개발 상태, 추후 변경 가능성 존재
    const handleDeepLink = () => {
        const randomText = Math.random().toString(36).substring(2,13);
        const schemeUrl = "rollingmoment://invite?inviteCode="+randomText;

        // window.location.replace(schemeUrl);

        // if (isIOS) {
        //   // 기기가 ios인 경우 - 앱스토어 호출
        // } else if (isAndroid) {
        //   // 기기가 android인 경우 - 플레이스토어 호출
        // } else {
        //   // 윈도우 데스크탑 등인 경우 - ?
        // }

        const userAgent = navigator.userAgent;
        const visitedAt = (new Date()).getTime(); // 방문 시간
        const location = window.location;

        if (userAgent.match(/android/)) {
            if (userAgent.match(/Chrome/)) {
                // 안드로이드의 크롬에서는 intent만 동작하기 때문에 intent로 호출해야함    
                setTimeout(function() {
                    location.href = "intent://" + schemeUrl + "#Intent; sheme=rollingmoment; action=..; category=..; package=com.android.xxx; end;";
                }, 1000); 
            } else { 
                // 크롬 이외의 브라우저들
                setTimeout(   
                function() {  
                    if ((new Date()).getTime() - visitedAt < 2000) {
                        location.href ="https://play.google.com/store/apps/details?id=com.kakao.talk";
                    }     
                }, 500);  
                var iframe = document.createElement('iframe');
                iframe.style.visibility = 'hidden';   
                iframe.src = schemeUrl;   
                document.body.appendChild(iframe);    
                document.body.removeChild(iframe); // back 호출시 캐싱될 수 있으므로 제거
            }
        } else if (userAgent.match(/iPhone|iPad|iPod/)) {
            setTimeout(function() {
                if(new Date().getTime() - visitedAt < 2000) {
                    location.href = "https://www.apple.com/kr/app-store/";
                }
            }, 500);

            setTimeout(function() {
                location.href = schemeUrl;
            }, 0);
        }

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
            {/* <text>DeepLink Btn</text> */}
        </CopyToClipboard>
        {/* <dd style={{ cursor: 'pointer' }}>
        </dd> */}
    </div>


  );
}

export default Bridge;
