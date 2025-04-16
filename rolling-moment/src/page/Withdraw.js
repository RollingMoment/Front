import { useState } from 'react';
import { showAlert, showConfirm } from '../utils/AlertUtil.js';
import '../css/Withdraw.css';
import '../css/Alert.css';
import '../url-scheme-caller.js';
import CustomAlert from './component/CustomAlert.js';
import CustomConfirm from './component/CustomConfirm.js';

function Withdraw() {
    const location = window.location;
    const path = "/api/v1/auth/withdraw/web";
    const apiUrl = location.host.includes("localhost") 
        ? "http://localhost:8080".concat(path)
        : location.host.replaceAll("web.", "").concat(path);

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const onChangeId = (e) => {
        setUserId(e.target.value);
    }

    const onChangePw = (e) => {
        setPassword(e.target.value);
    }

    const withdraw = () => {
        if(isBlank()) {
            return;
        } else {
            const request = {
                userId: userId,
                password: password
            }
    
            fetch(apiUrl, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(request)
            }).then(res => {
                if(res.ok) {
                    return res.json();
                }
            }).then(data => {
                console.log(data);
                if(data.meta.code === 0) {
                    showAlert("성공적으로 탈퇴했습니다.");
                } else {
                    showAlert(data.meta.message);
                    // showAlert("탈퇴하지 못했습니다.\n요청을 처리할 수 없습니다. 고객센터로 문의해주세요.");
                }
            }).catch(err => {
                console.log(err);
                showAlert("요청을 보내지 못했습니다.");
            });
        }
    }

    const isBlank = () => {
        return userId.replaceAll(" ", "") === "" || password.replaceAll(" ", "") === ""
    }


    return (
        <>
        <div className="withdraw-wrapper">
            <div className="withdraw-header">
                <div className="withdraw-header-inner">서비스 탈퇴</div>
            </div>
            <div className="withdraw-container">
                <div className="withdraw-title">정말 탈퇴하시겠어요?</div>
                <p className="withdraw-subtext">
                    한번 삭제한 계정은 복구할 수 없습니다.<br />
                    회원탈퇴 규정은 이용약관을 확인해주세요.
                </p>

                <label className="withdraw-label" htmlFor="email">이메일</label>
                <input
                    type="email"
                    id="email"
                    className="withdraw-input"
                    placeholder="이메일을 입력해주세요."
                    value={userId}
                    onChange={onChangeId}
                />

                <label className="withdraw-label" htmlFor="password">비밀번호</label>
                <input
                    type="password"
                    id="password"
                    className="withdraw-input"
                    placeholder="비밀번호를 입력해주세요."
                    value={password}
                    onChange={onChangePw}
                />

                <button className={isBlank() ? "withdraw-button" : "withdraw-button-valid"} onClick={() => showConfirm()}>탈퇴하기</button>
            </div>
        </div>
        <CustomConfirm 
            smallMsg="탈퇴하면 모든 정보가 사라집니다."
            alertMsg='탈퇴하시겠습니까?'
            onConfirm={withdraw}
            confirmBtnMsg='확인'
        />
        <CustomAlert alertMsg="" />
        </>
    );
}

export default Withdraw;
