// Login Page
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// import OTPInput, { ResendOTP } from "otp-input-react";
import OtpInput from 'react-otp-input';
import { CgSpinner } from 'react-icons/cg'
import { auth } from '../utils/firebase.config'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router'


const login = () => {
  const router = useRouter()

  const [ph, setPh] = useState()
  const [loading, setloading] = useState(false)
  const [user, setUser] = useState(false)
  const [showOtp, setShowOtp] = useState(false)
  const [otp, setOtp] = useState('');

  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': (response) => {
          onSignup()
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      }, auth);
    }
  }

  const onSignup = () => {
    setloading(true)
    onCaptchVerify()

    const appVerifier = window.recaptchaVerifier;

    const formatph = '+' + ph

    signInWithPhoneNumber(auth, formatph, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setloading(false)
        setShowOtp(true)
        toast.success("otp sent successfully")
      }).catch((error) => {
        console.log(error)
        // Error; SMS not sent
        setloading(false)
      });
  }

  const onOtpVerify = () => {
    setloading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setloading(false);
      })
      .catch(error => {
        console.log(error);
        setloading(false);
      });
  }

  useEffect(() => {
    if (user) {
      router.push('/')
    }
    else {
      router.push('/login')
    }

  }, [onOtpVerify])


  const [counter, setCounter] = useState(60)
  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])


  return (
    <div>
      <div id='recaptcha-container'></div>
      <Toaster toastOptions={{ duration: 4000 }}></Toaster>
      <div>
        {!showOtp ?
          <>
            <p>Submit your Mobile Number</p>
            <div> Log in or Sign up</div>
            <div>
              <PhoneInput
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true
                }}
                country='in'
                value={ph}
                placeholder="Enter phone number"
                onChange={setPh} />
            </div>
            <button onClick={onSignup}>SEND OTP</button>
          </> :
          <>
            <div>
              <h3>OTP Verification</h3>
              <label htmlFor='ph'>An 4 digit code has been sent to your number</label>
              <p>00:{counter}</p>
              <div>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderInput={(props) => <input {...props} />}
                  shouldAutoFocus={true}
                />
              </div>
              {otp}
              <button onClick={onOtpVerify}>
                {loading && <CgSpinner></CgSpinner>}
                <span>Verify otp</span>
              </button>
              <p>If you din't receive a code!
                <Link href='/'>Resend</Link></p>
            </div>
          </>}
      </div>
    </div>
  )
}

export default login