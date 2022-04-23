export const Login_Loading="Login_Loading";
export const Login_Success="Login_Success";
export const Login_Failure="Login_Failure";


export const loginloading=()=>{
    return {type:Login_Loading}
}
export const loginsuccess=(data)=>{
    return {type:Login_Success,payload:data}
}
export const loginfailure=()=>{
    return {type:Login_Failure}
}