const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign in to access your account
        </p>
        <form className="space-y-4">
          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-sm text-gray-600"
              >
                Remember Me
              </label>
            </div>
            <div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-sm text-gray-600">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="mt-6 space-y-3">
          <button className="w-full py-3 px-4 bg-gray-100 text-gray-700 font-medium rounded-md shadow-md hover:bg-gray-200">
            Sign in with Google
          </button>
          <button className="w-full py-3 px-4 bg-blue-800 text-white font-medium rounded-md shadow-md hover:bg-blue-900">
            Sign in with Facebook
          </button>
        </div>

        {/* Sign Up Redirect */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
