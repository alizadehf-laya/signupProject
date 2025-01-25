import styles from "./google.module.css"
const GoogleLogin = () => {
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
        cursor: "pointer",
        marginLeft: "200px",
    }
return(
    <>
  <div style={submit1} >Login with Google</div>
    </>
)
}
export default GoogleLogin;