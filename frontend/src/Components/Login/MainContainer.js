import React from 'react'
import { Icon } from 'react-icons-kit'
import {target} from 'react-icons-kit/feather/target'
import {motion} from 'framer-motion'
import { useRef,useState,useEffect } from 'react';
import './Main.css'

// import image-1 logo or jpg
// import image-2


// how to animate
const leftSideVariants={

    //it is a self object
    hidden:{
        opacity:0,
        x:-700 //left 700px
    },

    visible:{
        opacity:1,
        x:0 ,//orignal position
        transition:{delay:0.15,duration:0.70,type:'tween'}
    }
}


const rightSideVariants={

    //its self object
    hidden:{
        opacity:0,
        x:700 //left 700px
    },

    visible:{
        opacity:1,
        x:0 ,//orignal position
        transition:{delay:0.15,duration:0.70,type:'tween'}
    }
}

const toggleButtonVariants={
    hover:{
        scale:0.9,
        transition :{
            yoyo:Infinity // toggle type
        }
    }
}

const otherButtonVariants={
    hover:{
        scale:0.95,   
    }
}

const logoVariants={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{delay:0.25,duration:0.70,type:'tween'}
    }
}

const formSignInVariants={
    hidden:{
        opacity:0,
        x:700
    },
    visible:{
        opacity:1,
        x:0,
        transition:{delay:0.25,duration:0.70,type:'tween'}
    }
}

const sideAnimationVariants={
    hidden:{
        opacity:0,
        x:-700
    },
    visible:{
        opacity:1,
        x:0,
        transition:{delay:0.25,duration:0.70,type:'tween'}
    }
}






export const MainContainer = ({container,changeContainerState,logoClass}) => {


    const handleChangeState = ()=>{

        changeContainerState();
    }

    
// const userRef=useRef();
// const errRef=useRef(); 
// const [user,setUser]=useState('');
// const [pwd,setPwd]=useState('');
// const [errMsg,setErrMsg]=useState('');
// const [success,setSuccess]=useState('false');

// useEffect(()=>{
//     userRef.current.focus();
// },[])
// useEffect(()=>{
  
//     setErrMsg('');
// },[user,pwd])

// const handleSubmit = async(e) =>{
//     e.preventDefault();
//     console.log(user,pwd);
//     setUser('');
//     setPwd('');
//     setSuccess(true);
// }   

  return (

    <div className='main-box'>

        <motion.div className={logoClass}

            variants={logoVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='icon'>
                <Icon icon={target} size={24}/>
            </div>
            <div className='logo-text'>
                Rent-It
            </div>
        </motion.div>

{/* 
        {container==='initial' &&(
            <>
                <motion.div className='leftside' 
                
                    variants={leftSideVariants} 
                    initial="hidden" animate="visible">

                    <h1>Welcome Back</h1>

                    <p>Nice To See You Again
                    <br></br>
                    Login With Your Personla Information</p>

                    <motion.button onClick={handleChangeState}
                        variants={toggleButtonVariants}
                        whileHover='hover'
                        whileTap={'pressed'}
                    >SIGN IN</motion.button>

                </motion.div>

                <motion.div className='rightside'
                 
                 variants={rightSideVariants} 
                 initial="hidden" animate="visible">
                
                     <img src={..} alt="rightside-image"/> 
                </motion.div>

            </>
        )}
     */}
        {
            container==='logined' &&(
                <>
{/*                 
                {success ? (
                    <div>
                        <h1>You Logged In!</h1>
                    </div>
                 ):( */}
                    <motion.div className='form-section'
                    
                        variants={formSignInVariants}
                        initial="hidden"
                        animate="visible"
                     >
                        {/* <p ref={errRef} className={errMsg ? "errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1>Sign In</h1> */}

                        <h1>Sign In</h1>       
                        <form autoComplete='off' >{/*onSubmit={handleSubmit}*/}

                            <div className='custom-input'>
                                <div className='icon'>
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <input 
                                    type={'name'} 
                                    placeholder='username' 
                                    id="login-username"
                                    // ref={userRef}
                                    // autoComplete="off"
                                    // onChange={(e)=>setUser(e.target.value)}
                                    // value={user}
                                    required
                                    />
                            </div>

                            <div className='custom-input'>
                                <div className='icon'>
                                    <i class="fas fa-lock"></i>
                                </div>
                                <input 
                                    type={'password'} 
                                    placeholder='password'
                                    id="login-password"
                                    autoComplete="off"
                                    // onChange={(e)=>setPwd(e.target.value)}
                                    // value={pwd}
                                    required
                                />
                            </div>
                            <br></br>
                            <motion.button type='button' className='signin-button' 
                                variants={otherButtonVariants}
                                whileHover='hover'
                                whileTap={'pressed'}
                            >Login</motion.button>

                        </form>
                       

                        <p>Or Sign In Using</p>
                        {/* <h1>Sign In Using</h1> */}
                        <div className='signin-icons'>

                        <a href="#" className="icon facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                            

                        <a href="#" className="icon google">
                        <i className="fab fa-google"></i>
                        </a>
                            
                        <a href="#" className="icon twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                            

                        </div>
                    </motion.div>

                    <motion.div className='rightside form-section'
                        variants={sideAnimationVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1>New To Here ?</h1>
                        <p>Register Here To Create New Account...!</p>
                        <button onClick={handleChangeState}>SIGN UP</button>

                        {/* for adding img of rent-it */}
                        {/* <div className='img'>
                             <img src={} alt=''/>
                        </div> */}
                       
                    </motion.div>
                
                 {/* )} */}
                         
                 </>
            )
        }
        {
            container==='registered' &&(

                <>
                    <motion.div className='rightside form-section'
                    
                    variants={rightSideVariants} 
                    initial="hidden" animate="visible">


                            <h1>Already Have An Account ?</h1>
                            <p>Login Here With Your Account... </p>

                            <button onClick={handleChangeState}>SIGN IN</button>

                            {/*for adding img of rent-it  */}
                            {/* <div className='img'>
                                <img src={} alt=''/>
                            </div> */}
            
                    </motion.div>

                        <motion.div className='form-section'
                        
                        variants={sideAnimationVariants}
                        initial="hidden"
                        animate="visible">
                            
                            <h1>Registration</h1>

                            <form autoComplete='off'>

                                <div className='custom-input'>
                                    <div className='icon'>
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <input type={'name'} placeholder='username'/>
                                </div>
                                
                                <div className='custom-input'>
                                    <div className='icon'>
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <input type={'email'} placeholder='email'/>
                                </div>

                                <div className='custom-input'>
                                    <div className='icon'>
                                    <i class="fas fa-lock"></i>
                                    </div>
                                    <input type={'password'} placeholder='password'/>
                                </div>

                                <div className='custom-input'>
                                    <div className='icon'>
                                        <i class="fas fa-lock"></i>
                                    </div>
                                    <input type={'password'} placeholder='confirm password'/>
                                </div>
                                <br></br>

                                <motion.button type='button' className='signin-button'
                                    variants={otherButtonVariants}
                                    whileHover='hover'
                                    whileTap={'pressed'}
                                >Sign Up</motion.button>

                            </form>

                            <p>Or Sign Up With</p>
                            <div className='signin-icons'>

                            <a href="#" className="icon facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                                

                            <a href="#" className="icon google">
                            <i className="fab fa-google"></i>
                            </a>
                                
                            <a href="#" className="icon twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                               
                            </div>
                        </motion.div>
                </>
            )
        }     
        
    </div>
  )
}
