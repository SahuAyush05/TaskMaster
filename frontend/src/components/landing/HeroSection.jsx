import FeatureCard from "./FeatureCard";

export default function HeroSection() {
  return (
    <div className="flex flex flex-col items-center justify-center text-center pt-20 ">
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 max-w-4xl tracking-normal">
        Manage Your  Tasks  Efficiently
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl text-gray-400/30 ">
        A comprehensive task management system to help teams collaborate, track progress, and meet deadlines.
      </p>
      <div className="mt-8 mb-8">
        <button className="px-8 py-3 bg-black text-white rounded-md text-lg font-medium hover:bg-gray-800 hover:cursor-pointer">
          Get Started
        </button>
      </div>
      <FeatureCard/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to boost your productivity?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join thousands of teams already using our platform
        </p>
        <div>
          <button className="px-8 py-3 bg-black text-white rounded-md text-lg font-medium hover:bg-gray-800">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
}