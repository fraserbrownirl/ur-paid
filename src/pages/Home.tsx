import { useState } from "react";
import { Menu, User, DollarSign, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="fixed top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />
      
      {/* Header */}
      <header className="bg-secondary border-b border-secondary/20 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-6 py-5 flex justify-between items-center">
          {/* Menu Icon */}
          <button className="flex flex-col gap-[3px] w-5 group">
            <div className="h-[1.5px] w-full bg-white transition-all group-hover:w-full" />
            <div className="h-[1.5px] w-[70%] bg-white transition-all group-hover:w-full" />
            <div className="h-[1.5px] w-full bg-white transition-all group-hover:w-full" />
          </button>
          
          {/* Logo */}
          <div className="w-[42px] h-[42px] bg-primary rounded-xl flex items-center justify-center relative overflow-hidden">
            <span className="text-secondary text-xl font-black tracking-tight relative z-10">U</span>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          </div>
          
          {/* Header Icons */}
          <div className="flex items-center gap-5">
            {/* Grid Icon (3x3 dots) */}
            <button className="w-5 h-5 grid grid-cols-3 gap-[2.5px] group">
              {[...Array(9)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-1 bg-white/70 transition-all group-hover:bg-primary group-hover:opacity-100" 
                />
              ))}
            </button>
            
            {/* Profile Icon */}
            <button className="w-[30px] h-[30px] border-[1.5px] border-white/30 rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all">
              <User className="w-4 h-4 text-white/80" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[560px] mx-auto px-6 py-16">
        {/* Title */}
        <h1 className="text-4xl sm:text-[2.25rem] font-light text-center mb-3 tracking-tight">
          Send or <strong className="font-bold">Receive</strong> dollars
        </h1>
        <p className="text-muted-foreground text-center mb-14 tracking-wide">Without gas</p>

        {/* Search Bar */}
        <div className="bg-muted border border-border rounded-xl p-4 flex items-center gap-4 mb-14 transition-all hover:bg-card hover:border-border/80 focus-within:bg-card focus-within:border-primary focus-within:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]">
          <Search className="w-5 h-5 text-foreground/50" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Name, username, phone number, wallet address, email address"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-[0.925rem] text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Quick Actions Section */}
        <div>
          <h2 className="text-xs font-semibold text-foreground/70 mb-5 uppercase tracking-widest">
            Quick Actions
          </h2>
          
          {/* Action Button */}
          <button
            onClick={() => navigate("/send-request")}
            className="w-full flex items-center gap-4 p-5 bg-card border border-border rounded-xl cursor-pointer transition-all hover:border-transparent hover:shadow-glow hover:-translate-y-0.5 group relative overflow-hidden"
          >
            {/* Hover background effect */}
            <div className="absolute inset-0 w-0 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            
            {/* Content */}
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center transition-all group-hover:bg-white relative z-10">
              <DollarSign className="w-7 h-7 text-primary transition-all group-hover:text-secondary" strokeWidth={1.5} />
            </div>
            <span className="flex-1 text-left text-base font-medium tracking-tight transition-all group-hover:text-secondary relative z-10">
              Send or request dollars
            </span>
            <span className="text-2xl font-extralight text-border transition-all group-hover:text-secondary group-hover:translate-x-1.5 relative z-10">
              →
            </span>
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;
