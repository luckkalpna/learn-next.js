import React, { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import Link from 'next/link'
import { auth } from '../utils/firebase.config'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { toast, Toaster } from 'react-hot-toast';
import { CgSpinner } from 'react-icons/cg';
import { useRouter } from 'next/router'
import OtpInput from 'react-otp-input';

const login = () => {
  const router = useRouter()

  const [ph, setPh] = useState('')
  const [loading, setloading] = useState(false)
  const [user, setUser] = useState(true)
  const [showOtp, setShowOtp] = useState(false)
  const [otp, setOtp] = useState('');

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    }, auth);

  }


  const onCaptchaVerify = () => {
    // if (!window.reCaptchaVerifier) {
    // }
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

  const onSignup = () => {
    setloading(true)
    onCaptchaVerify()

    const appVerifier = window.recaptchaVerifier;
    const formatph = '+' + ph

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setloading(false)
        setShowOtp(true)
        toast.success("otp sent successfully")
        // ...
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
      router.push('/login')
    }
    else {
      router.push('/')
    }

  }, [onOtpVerify])

  const [counter, setCounter] = useState(60)
  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])


  return (
    <div>
      <Toaster toastOptions={{ duration: 4000 }}></Toaster>
      {!showOtp ?
        <>
          <p>Submit your Mobile Number</p>
          <PhoneInput inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true
          }}
            country='in'
            value={ph}
            placeholde="Enter phone number"
            onChange={setPh} />

          <button onClick={onSignup}>SEND OTP</button>
        </> :
        <>
          <h3>OTP Verification</h3>
          <label htmlFor="ph">An 4 digit code has been sent your phone number</label>
          <p>00:{counter}</p>
          <OtpInput 
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span> &nbsp; &nbsp; </span>}
      renderInput={(props) => <input {...props} />}
      shouldAutoFocus={true}
      />
          {otp}
          <button onClick={onOtpVerify}>
          {loading && <CgSpinner className={styles.spinner}></CgSpinner>}
      <span>Verify otp</span>
      </button>
          <p>If you din't receive a code! <Link href='/'>Resend</Link></p>
        </>
      }


      {/* <button>Verify otp</button> */}
      <button onClick={onOtpVerify}>Verify otp</button>

    </div>
  )
}

export default login
