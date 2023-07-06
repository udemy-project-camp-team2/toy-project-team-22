import styles from '../../styles/Login.module.css'
import logosrc from '../../images/loginLogo.png'
import React,{useState,useEffect} from 'react'


const User = {
    email: 'test@example.com',
    pw: 'test2323@@@'
}

const Login = () => {
    const [email,setEmail] = useState('')
    const [pw,setPw] = useState('')
    const [emailValid,setEmailValid] = useState(false);
    const [pwValid,setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
        if(emailValid && pwValid) {
          setNotAllow(false);
          return;
        }
        setNotAllow(true);
      }, [emailValid, pwValid]);

    const handleEmail = (e) => {
        setEmail(e.target.value)
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(e.target.value)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handlePw = (e) => {
        setPw(e.target.value)
        const regex =
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(e.target.value)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    const onClickConfirmButton = () => {
        if(email === User.email && pw === User.pw) {
          alert('로그인에 성공했습니다.')
        } else {
          alert("등록되지 않은 회원입니다.");
        }
      }
    

    return (
        <div className={styles.login}>
            <div className={styles.logo}>
                <img src={logosrc}/>
                <p>Give My<br/>Seat</p>
            </div>
            <div className={styles.form}>
                <form id="registerFrm" name="register-page">
                    <p>
                        <input 
                            type='text' 
                            value={email} 
                            placeholder='Email' 
                            onChange={handleEmail}
                        />
                        {
                            !emailValid && email.length > 0 && (<span className={styles.errorMessge}>올바른 이메일을 입력해주세요</span>)
                        }
                    </p>
                    
                    <p>
                        <input 
                            type="password" 
                            value={pw} 
                            placeholder='Password'
                            onChange={handlePw}
                        />
                        {
                        !   pwValid && pw.length > 0 && (
                            <span className={styles.errorMessge}>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</span>
                            )
                        }
                    </p>
                    
                    <p><input type="button" id="loginBtn" value="Login" onClick={onClickConfirmButton}/></p>
                </form>
            </div>
        </div>
    )
}

export default Login;