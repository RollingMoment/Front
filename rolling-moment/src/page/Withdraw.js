import '../App.css';
import logo from '../img/test-img.jpg';
import '../url-scheme-caller.js';

function Withdraw() {
    const handleDeferedDeeplink = () => {
        const location = window.location;
        console.log(location.pathname);
        const randomText = Math.random().toString(36).substring(2,13);
        const schemeUrl = "rollingmoment://invite?inviteCode="+randomText;
        navigator.clipboard.writeText(randomText);
            
        const userAgent = navigator.userAgent;
        const visitedAt = (new Date()).getTime(); // 방문 시간

        window.urlSchemeCaller.call(schemeUrl, () => { 
            if (userAgent.match(/Android/)) {
                // location.href = "intent://" + schemeUrl + "#Intent; sheme=rollingmoment; action=..; category=..; package=com.android.xxx; end;";
                // 크롬 이외의 브라우저들
                setTimeout(   
                function() {  
                    if ((new Date()).getTime() - visitedAt < 2000) {
                        // TODO :: 임시로 '카카오톡' 플레이스토어 링크임.. 추후 변경 필요
                        location.href ="https://play.google.com/store/apps/details?id=com.kakao.talk";
                    }     
                }, 500);  
                var iframe = document.createElement('iframe');
                iframe.style.visibility = 'hidden';   
                iframe.src = schemeUrl;   
                document.body.appendChild(iframe);    
                document.body.removeChild(iframe); // back 호출시 캐싱될 수 있으므로 제거    
            } else if (userAgent.match(/iPhone|iPad|iPod/)) {
                setTimeout(function() {
                    if(new Date().getTime() - visitedAt < 2000) {
                        // TODO :: 임시로 '캔디스러시사가' 앱스토어 링크임.. 추후 변경 필요
                        location.href = "https://apps.apple.com/kr/app/%EC%BA%94%EB%94%94%ED%81%AC%EB%9F%AC%EC%89%AC%EC%82%AC%EA%B0%80/id553834731";
                    }
                }, 500);
    
                setTimeout(function() {
                    location.href = schemeUrl;
                }, 0);
            }
        });
    }


    return (
        <div className="App">
            {/* 버튼 클릭 X, 링크 접속 시 알아서 보내도록 수정 필요, 어려운 경우 버튼에 (모먼트 보러 가기) 등 입력하여 사용 */}
            <h1>Rollin'Moment</h1>

            <img src={logo} alt='로고 이미지' style={{width: "200px", height: "200px"}} />
            <p>~ 모먼트에 함께하러 가는 중 ~</p>

            <p style={{color: "GrayText"}}> 앱이 실행되지 않는 경우, 아래 버튼을 눌러 이동해주세요.</p>

            <button id='joinBtn' className='btn' style={{backgroundColor: "cornflowerblue"}} onClick={handleDeferedDeeplink}>모먼트에 함께하기</button>
        </div>


    );
}

export default Withdraw;
