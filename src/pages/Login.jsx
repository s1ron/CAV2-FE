
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';



const Login = () =>{
    const usernameRef = useRef();
    const passwordRef = useRef();
    const { dispatch } = useContext(AuthContext);
    const [loging, SetLoging] = useState(false);
    const [errMess, SetErrMess] = useState("");

    const onGooogleLoginSuccess = (credentialResponse) =>{
        //console.log(credentialResponse);
        GoogleLoginCall(credentialResponse);
    }
    const onGooogleLoginError = (error) =>{
        console.log(error);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        UserNamePassLoginCall();
    }

    const GoogleLoginCall = async (credentialResponse) =>{
        try{
            
            const res = await axios.post('/Auth/GoogleLogin', {
                'credential' : credentialResponse.credential
            })
            dispatch({ type: "LOGIN", payload: res.data})
        }catch (err){
            console.log(err.response.data);
        }
    }

    const UserNamePassLoginCall = async () => {
        try{
            SetLoging(true);
            const res = await axios.post("/Auth/authenticate", {
                "username": usernameRef.current.value,
                "pass": passwordRef.current.value
            });
            dispatch({ type: "LOGIN", payload: res.data})
            //console.log(res.data);
        }catch (err) {
            SetLoging(false);
            SetErrMess(err.response.data)
            console.log(err.response.data);
        }
    }

    return(
        <section className="bg-[url('../public/img/gradient-login-bg.jpg')]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 bg-white backdrop-blur-lg bg-opacity-50">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Welcome back
                        </h1>
                        {/* {error && <div className="red card-panel">{error.message}</div>} */}
                        <div className='justify-self-center flex justify-center'>
                            
                            <GoogleOAuthProvider clientId="925058501432-phs4e38ds1883dno0nut6dvh2ntbmlfa.apps.googleusercontent.com">
                                <div className='mx-auto'>
                                    <GoogleLogin
                                        auto_select = {false}
                                        onSuccess={credentialResponse => onGooogleLoginSuccess(credentialResponse)}
                                        onError={error => onGooogleLoginError(error)}
                                    />
                                </div>
                            </GoogleOAuthProvider>
                        </div>

                        
                        <div className="flex flex-row gap-4">
                            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 flex-1 my-auto"/>
                            <div className="opacity-50">or</div>
                            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 flex-1 my-auto"/>
                        </div>

                        <form className="space-y-4 md:space-y-6" onSubmit={e=>{handleSubmit(e)}}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                                <input ref={usernameRef} autoComplete="off" type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="admin" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input ref={passwordRef} autoComplete="off" type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div className="text-center text-red-600">{errMess}</div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</p>
                            </div>
                            <button type="submit" disabled={loging} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account yet? <p className="inline-block font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</p>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}



export default Login;