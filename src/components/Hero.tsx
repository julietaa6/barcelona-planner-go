import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, MapPin, Search } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import barcelonaHero from "@/assets/barcelona-hero.jpg";

const Hero = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={barcelonaHero} 
          alt="Barcelona skyline at sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Barcelona
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
          Find amazing activities, hidden gems, and local experiences in the heart of Catalonia
        </p>

        {/* Search Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-elevated max-w-2xl mx-auto">
          <h3 className="text-foreground text-xl font-semibold mb-6">Plan your perfect day</h3>
          
          <div className="flex flex-col md:flex-row gap-4 items-end">
            {/* Date Picker */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Select Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-12",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Location Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Area
              </label>
              <Button variant="outline" className="w-full justify-start h-12">
                <MapPin className="mr-2 h-4 w-4" />
                All of Barcelona
              </Button>
            </div>

            {/* Search Button */}
            <Button className="w-full md:w-auto h-12 px-8 bg-gradient-to-r from-primary to-secondary hover:shadow-warm transition-all duration-300">
              <Search className="mr-2 h-4 w-4" />
              Find Activities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;