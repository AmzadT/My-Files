export default function Signup() {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-[#111] text-white p-10">
        <div className="text-2xl font-semibold mb-4">⌘ Acme Inc</div>
        <p className="text-sm text-gray-400 mt-10 text-center">
          “This library has saved me countless hours of work and helped me deliver”
        </p>
      </div>

      {/* Right Panel */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-black text-white p-8">
        <div className="w-full max-w-sm">
          <div className="text-right text-sm text-gray-400 mb-4">Login</div>
          <h2 className="text-2xl font-bold mb-2">Create an account</h2>
          <p className="text-sm text-gray-400 mb-6">Enter your email below to create your account</p>

          <input
            type="email"
            placeholder="name@example.com"
            className="w-full px-4 py-2 bg-[#111] text-white border border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button className="w-full bg-white text-black py-2 rounded-md font-medium hover:bg-gray-200 mb-4">
            Sign In with Email
          </button>

          <div className="text-center text-gray-500 text-sm mb-4">OR CONTINUE WITH</div>

          <button className="w-full flex items-center justify-center gap-2 bg-[#111] border border-gray-700 py-2 rounded-md hover:bg-[#222]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.78-1.35-1.78-1.1-.75.08-.74.08-.74 1.21.08 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            GitHub
          </button>

          <p className="text-xs text-gray-400 text-center mt-6">
            By clicking continue, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
