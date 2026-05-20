import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

function Register() {

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-2">

          Create Account

        </h1>

        <p className="text-gray-500 text-center mb-8">

          Join WorkMitra today

        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Name */}
          <div>

            <label className="block mb-2 font-medium">

              Full Name

            </label>

            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
            />

          </div>

          {/* Mobile */}
          <div>

            <label className="block mb-2 font-medium">

              Mobile Number

            </label>

            <input
              type="text"
              placeholder="Enter mobile number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
            />

          </div>

          {/* Role */}
          <div>

            <label className="block mb-2 font-medium">

              Select Role

            </label>

            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
            >

              <option value="">
                Choose Role
              </option>

              <option value="customer">
                Customer
              </option>

              <option value="worker">
                Worker
              </option>

            </select>

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

          {/* Confirm Password */}
          <div>

            <label className="block mb-2 font-medium">

              Confirm Password

            </label>

            <div className="relative">

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
              />

              <div
                className="absolute right-4 top-4 cursor-pointer text-gray-500"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >

                {
                  showConfirmPassword
                    ? <EyeOff size={22} />
                    : <Eye size={22} />
                }

              </div>

            </div>

          </div>

          {/* Button */}
          <button
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >

            Register

          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">

          Already have an account?

          <Link
            to="/login"
            className="text-yellow-500 font-semibold ml-2 hover:underline"
          >

            Login

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;