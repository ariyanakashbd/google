import { useState, useRef, useEffect, useCallback } from 'react';
import mapTwo from '../assets/images/map-two.webp'

const GoogleWordLogo = () => (
  <svg width="92" height="30" viewBox="0 0 272 92">
    <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
    <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
    <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
    <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
    <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
  </svg>
)

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef([])

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

  const handleChange = useCallback((index, e) => {
    const val = e.target.value
    if (!/^\d*$/.test(val)) return

    const newOtp = [...otp]

    if (val.length > 1) {
      const digits = val.split('').slice(0, 6 - index)
      digits.forEach((d, i) => {
        if (index + i < 6) newOtp[index + i] = d
      })
      setOtp(newOtp)
      const nextFocus = Math.min(index + digits.length, 5)
      if (inputRefs.current[nextFocus]) inputRefs.current[nextFocus].focus()
      return
    }

    newOtp[index] = val
    setOtp(newOtp)

    if (val && index < 5) {
      if (inputRefs.current[index + 1]) inputRefs.current[index + 1].focus()
    }
  }, [otp])

  const handleKeyDown = useCallback((index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      if (inputRefs.current[index - 1]) inputRefs.current[index - 1].focus()
    }
    if (e.key === 'ArrowRight' && index < 5) {
      if (inputRefs.current[index + 1]) inputRefs.current[index + 1].focus()
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      if (inputRefs.current[index - 1]) inputRefs.current[index - 1].focus()
    }
  }, [otp])

  const handlePaste = useCallback((e) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (!pasted) return
    const newOtp = [...otp]
    for (let i = 0; i < pasted.length; i++) {
      newOtp[i] = pasted[i]
    }
    setOtp(newOtp)
    const nextIdx = Math.min(pasted.length, 5)
    if (inputRefs.current[nextIdx]) inputRefs.current[nextIdx].focus()
  }, [otp])

  const handleSubmit = (e) => {
    e.preventDefault()
    const code = otp.join('')
    if (code.length === 6) {
     
      console.log('OTP submitted:', code)
    }
  }

  return (
    <section
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat py-10"
      style={{ backgroundImage: `url(${mapTwo})` }}
    >
      <div className="w-full max-w-[450px] px-4">
        <div
          className="bg-white rounded-[16px] py-10 px-10"
          style={{
            boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)',
          }}
        >
          <div className="flex justify-center mb-2">
            <GoogleWordLogo />
          </div>

          <h1 className="text-center text-[28px] font-normal text-[#202124] mt-4 leading-9">
            2-Step Verification
          </h1>

          <p className="text-center text-[15px] font-normal text-[#202124] mt-3 leading-6">
            Enter the verification code
          </p>

          <p className="text-center text-[14px] font-normal text-[#5f6368] mt-2 leading-5">
            A 6-digit code was sent to your phone. Enter it below to continue.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 pl-1">
            <div className="flex items-center justify-between gap-2">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el }}
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={digit}
                  onChange={(e) => handleChange(i, e)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  onPaste={handlePaste}
                  className="w-[46px] h-[56px] text-center text-[22px] font-medium text-[#202124] border border-[#dadce0] rounded-lg outline-none bg-transparent focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 transition-all font-inherit"
                />
              ))}
            </div>

            <div className="pl-0 mt-6">
              <a
                href="#"
                className="inline-block text-sm font-medium tracking-[0.15px] text-[#1a73e8] no-underline"
              >
                Get a new code
              </a>
            </div>

            <div className="flex justify-between items-center mt-16">
              <a
                href="#"
                className="inline-block text-sm font-medium tracking-[0.15px] text-[#1a73e8] no-underline"
              >
                Try another way
              </a>
              <button
                type="submit"
                className="min-w-[112px] h-10 px-6 text-sm font-medium leading-5 text-white border-none rounded-xl cursor-pointer tracking-[0.15px] font-inherit"
                style={{ background: '#1a73e8' }}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Otp
