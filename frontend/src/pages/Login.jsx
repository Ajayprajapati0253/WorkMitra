import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-2">

          Welcome Back

        </h1>

        <p className="text-gray-500 text-center mb-8">

          Login to your account

        </p>

        {/* Form */}
        <form className="space-y-6">

          {/* Email/Mobile */}
          <div>

            <label className="block mb-2 font-medium">

              Email or Mobile

            </label>

            <input
              type="text"
              placeholder="Enter email or mobile"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block mb-2 font-medium">

              Password

            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
              />

              <div
                className="absolute right-4 top-4 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >

                {
                  showPassword
                    ? <EyeOff size={22} />
                    : <Eye size={22} />
                }

              </div>

            </div>

          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-gray-600">

              <input type="checkbox" />

              Remember me

            </label>

            <button
              type="button"
              className="text-yellow-500 hover:underline"
            >

              Forgot Password?

            </button>

          </div>

          {/* Button */}
          <button
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >

            Login

          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6">

          Don’t have an account?

          <Link
            to="/register"
            className="text-yellow-500 font-semibold ml-2 hover:underline"
          >

            Register

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;