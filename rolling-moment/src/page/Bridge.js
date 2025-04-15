import '../css/Bridge.css';
import logo from '../img/logo.png';
import textLogo from "../img/text_logo.png";
import '../url-scheme-caller.js';
import CustomAlert from './CustomAlert.js';
import { showAlert } from '../class/AlertUtil.js';

function Bridge() {
    const momentCode = new URLSearchParams(window.location.search).get("inviteCode");
    const schemeUrl = `rollingmoment://invite?momentCode=${momentCode}`;

    const handleDeferedDeeplink = () => {
        const visitedAt = Date.now();
        const ua = navigator.userAgent;

        // 클립보드 복사
        navigator.clipboard?.writeText(schemeUrl).catch((err) => {
            console.warn("클립보드 복사 실패:", err);
        });
        
        window.urlSchemeCaller.call(schemeUrl, () => { 
            if (isAndroid(ua)) {
                const iframe = document.createElement("iframe");
                iframe.style.display = "none";
                iframe.src = schemeUrl;
                document.body.appendChild(iframe);
            
                setTimeout(() => {
                    document.body.removeChild(iframe);
                    if (Date.now() - visitedAt < 1500) {
                        // window.location.href = "https://play.google.com/store/apps/details?id=com.rollinmoment.package";
                        window.location.href ="https://play.google.com/store/apps/details?id=com.kakao.talk";
                    }
                }, 1000);
            } else if (isApple(ua)) {
                setTimeout(() => {
                window.location.href = schemeUrl;
                }, 0);
            
                setTimeout(() => {
                if (Date.now() - visitedAt < 1500) {
                    // window.location.href = "https://apps.apple.com/kr/rollinmoment/{appid}}";
                    window.location.href = "https://apps.apple.com/kr/app/%EC%BA%94%EB%94%94%ED%81%AC%EB%9F%AC%EC%89%AC%EC%82%AC%EA%B0%80/id553834731";
                }
                }, 1000);
            } else {
                showAlert();
            }
        });
    }

    const navigateToStore = () => {
        const ua = navigator.userAgent;

        if(isWindow(ua)) {
            window.location.href ="https://play.google.com/store/apps/details?id=com.kakao.talk";  // window pc인경우 google playstore
        } else if(isApple(ua, false)) {
            window.location.href = "https://apps.apple.com/kr/app/%EC%BA%94%EB%94%94%ED%81%AC%EB%9F%AC%EC%89%AC%EC%82%AC%EA%B0%80/id553834731";  // mac os인 경우 app store
        }
    }

    const isAndroid = (ua) => {
        return /Android/i.test(ua);
    }

    const isApple = (ua, isMobile) => {
        return isMobile ? /iPhone|iPad|iPod/i.test(ua) : /Macintosh|MacIntel|MacPPC|Mac68K/.test(ua);
    }

    const isWindow = (ua) => {
        return /Win32|Win64|Windows|WinCE/.test(ua);
    }
    

    return (
        <>
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
            <CustomAlert 
                alertMsg="스토어로 이동하시겠습니까?"
                smallMsg='PC로 접근하셨습니다.'
                confirmBtnMsg='이동하기'
                onConfirm={navigateToStore}
            />
        </>
    );
}

export default Bridge;