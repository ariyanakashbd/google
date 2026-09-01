import { useState } from 'react'
import mapTwo from '../assets/images/map-two.webp'
import { Link } from 'react-router'

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

const PhoneIcon = () => (
  <svg width="64" height="120" viewBox="0 0 64 120" fill="none">
    <rect x="2" y="2" width="60" height="116" rx="14" stroke="#202124" strokeWidth="3"/>
    <rect x="10" y="12" width="44" height="84" rx="4" fill="#202124"/>
    <circle cx="32" cy="108" r="4" fill="#202124"/>
    <rect x="20" y="6" width="24" height="4" rx="2" fill="#202124"/>
  </svg>
)

const Verification = () => {
  const [dontAskAgain, setDontAskAgain] = useState(false)

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
            To help keep your account safe, Google wants to make sure it's really you trying to sign in
          </p>

          <div className="flex items-center justify-start gap-12 mt-10 pl-4">
            <div className="pl-2">
              <PhoneIcon />
            </div>
            <div
              className="text-[72px] font-normal text-[#202124] leading-none"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              59
            </div>
          </div>

          <div className="mt-10 pl-4">
            <h2 className="text-[16px] font-medium text-[#202124] leading-6">
              Check your phone
            </h2>
            <p className="text-[15px] font-normal text-[#202124] leading-6 mt-3">
              Google sent a notification to your Phone. Tap Yes on the notification to verify it's you.
            </p>
          </div>

          <label className="flex items-start gap-3 mt-8 pl-4 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={dontAskAgain}
              onChange={(e) => setDontAskAgain(e.target.checked)}
              className="mt-1 w-[18px] h-[18px] accent-[#1a73e8] cursor-pointer"
            />
            <span className="text-[14px] font-normal text-[#202124] leading-5">
              Don't ask again on this device
            </span>
          </label>

          <div className="pl-4 mt-4">
            <a
              href="#"
              className="inline-block text-sm font-medium tracking-[0.15px] text-[#1a73e8] no-underline"
            >
              Resend it
            </a>
          </div>

          <div className="pl-4 mt-10">
            <Link
              to="/otp"
              className="inline-block text-sm font-medium tracking-[0.15px] text-[#1a73e8] no-underline">
              Try another way
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Verification
