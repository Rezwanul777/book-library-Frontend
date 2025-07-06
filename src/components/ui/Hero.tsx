import { Button } from "@/components/ui/button";
import Image from '../../assets/bg.png'
const Hero = () => {
  return (
    <section className="relative bg-purple-800 text-white rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left side: Image */}
        <div className="w-full h-auto">
          <img 
            src={Image} 
            alt="Hero" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right side: Text + button */}
        <div className="p-8 md:p-12 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Welcome to Your Book Library
          </h1>
          <p className="mb-6 text-lg sm:text-xl">
            Explore books, add new ones, and keep track of borrowed books.
          </p>
          <Button className="text-base sm:text-lg px-6 py-3">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

