import styles from './LoginSignup.module.css'
import password_icon from './Assets/password.jfif'
import email_icon from './Assets/email.jfif'
import user_icon from './Assets/OIP.jfif'
import { useState } from 'react'

const LoginSignup = () =>{
    const submit={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "220px",
        height: "59px",
        color: "#fff",
        background: "#42006c",
        borderRadius: "50px",
        fontSize: "19px",
        fontWeight: "700",
        cursor: "pointer"
    }
    const submit1={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "220px",
        height: "59px",
        color: "#fff",
        background: "#42006c",
        borderRadius: "50px",
        fontSize: "19px",
        fontWeight: "700",
        cursor: "pointer"
    }
    const text={
        color:"#3c009d",
        fontSize:" 48px",
        fontWeight: "600",
    }
    const gray={
        background:"#eaeaea",
        color: "#676767",
    }
    const [action,setAction] = useState("Sign Up");
    return(
        <div className={styles.container}>
      <div className={styles.header}>
        <div  style={text}>{action}</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
            <img src={user_icon} alt="" className={styles.img1}/>
            <input type="text" placeholder='Name'/>
        </div>
        <div className={styles.input}>
            <img src={email_icon} alt="" className={styles.img1}/>
            <input type="email" placeholder='Email Id'/>
        </div>
        <div className={styles.input}>
            <img src={password_icon} alt="" className={styles.img1}/>
            <input type="password"  placeholder='Password'/>
        </div>
      </div>
      <div className={styles.forget_password}>Lost Password?<span>Click Here!</span></div>
      <div className={styles.password_container}>
        <div style={submit} className={action==="login"?"submit gray" : "submit"} onClick={()=>{setAction("sign up")}}>Sign Up</div>
        <div style={submit}  className={action==="Sign Up"?"submit gray": "submit"}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
        </div>
    )
}
export default LoginSignup