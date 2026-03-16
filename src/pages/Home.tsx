import { useState, useEffect } from "react";
import aurifyLogo from "../assets/logo/aurify-logo.png";

function Home() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Coming Soon";

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://storage.googleapis.com/gd-prod/media/336ee7f3-929e-45d7-868d-d2ed0f3b1b1f_AI_assistive-ai-for-education_60L_martina-stiftinger_.mp4#t=0.001"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-blue-900/50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-center pt-8 md:pt-12">
          <div className="logo-container animate-fade-in">
            <img
              src={aurifyLogo}
              alt="Aurify Logo"
              className="h-16 md:h-20 lg:h-24 w-auto filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Coming Soon Headline */}
            <h1 className="  text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              <span className="font-inter typewriter-text bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-8 animate-fade-in-up opacity-80">
              Something innovative is on the way.
            </p>

            {/* Additional Content */}
            {/* <div className="animate-fade-in-up delay-300">
              <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                We're building the future of web and mobile applications. 
                Stay tuned for something extraordinary.
              </p>
            </div> */}
          </div>
        </main>

        {/* Footer */}
        <footer className="pb-8 md:pb-12">
          <div className="max-w-6xl mx-auto px-4">
            {/* Social Media Icons */}
            {/* <div className="flex justify-center space-x-8 mb-8">
              <a 
                href="#" 
                className="social-icon text-blue-200 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={32} />
              </a>
              <a 
                href="#" 
                className="social-icon text-blue-200 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={32} />
              </a>
              <a 
                href="#" 
                className="social-icon text-blue-200 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={32} />
              </a>
            </div> */}

            {/* Company Address */}
            <div className="text-center text-blue-200 text-sm md:text-base opacity-80">
              <p>Aurify Technologies</p>
              <p>
                Dubai Branch Building, 1-141, Mankool, Dubai, UAE
              </p>
              <p>info@aurify.ae</p>
              <p>+971 58 502 3411</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
