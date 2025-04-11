import '../css/Bridge.css';
import logo from '../img/logo.png';
import textLogo from "../img/text_logo.png";
import '../url-scheme-caller.js';
import { useEffect, useState } from 'react';

function Bridge() {
    const location = window.location;
    const inviteCode = location.search.split("=")[1];
    const clipboardStr = "rollinmoment/invite=" + inviteCode;

    const [state, setState] = useState(false);

    // TODO :: store 출시 후 스토어링크 변경
    const handleDeferedDeeplink = () => {
        const schemeUrl = "rollingmoment://invite?inviteCode="+inviteCode;
        navigator.clipboard.writeText(clipboardStr);
            
        const userAgent = navigator.userAgent;
        const visitedAt = (new Date()).getTime(); // 방문 시간

        window.urlSchemeCaller.call(schemeUrl, () => { 
            if (userAgent.match(/Android/)) {
                // location.href = "intent://" + schemeUrl + "#Intent; sheme=rollingmoment; action=..; category=..; package=com.android.xxx; end;";
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
            } else if (userAgent.match(/iPhone|iPad|iPod/)) {
                setTimeout(function() {
                    if(new Date().getTime() - visitedAt < 2000) {
                        location.href = "https://apps.apple.com/kr/app/%EC%BA%94%EB%94%94%ED%81%AC%EB%9F%AC%EC%89%AC%EC%82%AC%EA%B0%80/id553834731";
                    }
                }, 500);
    
                setTimeout(function() {
                    location.href = schemeUrl;
                }, 0);
            } else {
                window.alert("웹 페이지에서는 이동할 수 없습니다.");
            }
        });
    }

    useEffect(() => {
        setState(true);
        if(state) {
            handleDeferedDeeplink();
        }
    }, [state]);


    return (
        <div className='container'>
            <div className='text-logo'>
                <img src={textLogo} alt="Rollin'Moment" className='logo-image' />
            </div>

            <div className="progress-label">롤링모먼트로 이동중입니다..</div>
            
            <div className="progress-bar">
                <div className="progress-fill"></div>
            </div>

            <div className="character">
                <img src={logo} alt="롤링모먼트 캐릭터" className="character-image" />
            </div>

            <button id='joinBtn' className='button' onClick={handleDeferedDeeplink}>버튼을 눌러 이동하기</button>
        </div>


    );
}

export default Bridge;
