import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center relative overflow-hidden py-20">
      {/* Decorative background pattern - dashed wavy lines with stars */}
      <div className="absolute inset-0 opacity-15">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dashed-wavy"
              x="0"
              y="0"
              width="120"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 30 Q 15 20, 30 30 T 60 30 T 90 30 T 120 30"
                stroke="#09446c"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="5,5"
              />
              {/* Star markers along the wave */}
              <circle cx="15" cy="25" r="2" fill="#09446c" />
              <circle cx="45" cy="25" r="2" fill="#09446c" />
              <circle cx="75" cy="25" r="2" fill="#09446c" />
              <circle cx="105" cy="25" r="2" fill="#09446c" />
            </pattern>
            <pattern
              id="scattered-stars"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="50" r="1.5" fill="#09446c" opacity="0.4" />
              <circle cx="80" cy="30" r="1" fill="#09446c" opacity="0.4" />
              <circle cx="150" cy="70" r="1.5" fill="#09446c" opacity="0.4" />
              <circle cx="50" cy="120" r="1" fill="#09446c" opacity="0.4" />
              <circle cx="120" cy="150" r="1.5" fill="#09446c" opacity="0.4" />
              <circle cx="180" cy="100" r="1" fill="#09446c" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dashed-wavy)" />
          <rect width="100%" height="100%" fill="url(#scattered-stars)" />
        </svg>
      </div>

      {/* Large semi-transparent 404 background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[15rem] md:text-[25rem] font-bold text-primary opacity-5 select-none">
          404
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 font-serif">
          Page Not Found
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-xl mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block btn-primary text-white px-8 py-4 rounded-lg text-xl font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 hover:shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

