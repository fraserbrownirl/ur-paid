import { useState, useEffect } from "react";
import { Menu, QrCode, User, DollarSign, Shield, Mail, Phone } from "lucide-react";
import urpaidLogo from "@/assets/urpaid-logo.jpeg";
import { processLogoBackground } from "@/utils/processLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContactItem } from "@/components/ContactItem";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const contacts = [
  { name: "Coline Loup", fallback: "CL", avatar: "" },
  { name: "Shyriaieva Olena", username: "@vselenskayasila", fallback: "SO", avatar: "" },
  { name: "Sabrina Fey", username: "@sabrinafey1", fallback: "SF", avatar: "" },
  { name: "RUDA", fallback: "R", avatar: "" },
  { name: "Sofia Kolomiets", fallback: "SK", avatar: "" },
  { name: "Robert Andre", fallback: "RA", avatar: "" },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showPasskey, setShowPasskey] = useState(false);
  const [processedLogo, setProcessedLogo] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const processLogo = async () => {
      try {
        const processed = await processLogoBackground(urpaidLogo);
        setProcessedLogo(processed);
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Fallback to original logo
        setProcessedLogo(urpaidLogo);
      }
    };
    processLogo();
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-gradient-primary border-b border-primary/20 sticky top-0 z-10 shadow-soft">
        <div className="max-w-lg mx-auto px-6 py-3 flex items-center justify-between">
          <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/20">
            <Menu className="w-6 h-6" />
          </Button>
          {processedLogo ? (
            <img src={processedLogo} alt="UrPaid" className="h-16 w-auto object-contain" />
          ) : (
            <div className="h-16 w-32 animate-pulse bg-white/20 rounded" />
          )}
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/20">
              <QrCode className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full text-white hover:bg-white/20"
              onClick={() => setShowPasskey(true)}
            >
              <User className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-6 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
          Get paid anywhere from anyone
        </h1>
        <p className="text-muted-foreground mb-8">Fast, secure and cheap</p>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder=""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-16 sm:h-12 rounded-full bg-card border-border text-sm sm:text-base py-3"
            />
            {!searchQuery && (
              <div className="absolute left-10 top-3 sm:top-1/2 sm:-translate-y-1/2 pointer-events-none text-muted-foreground text-sm sm:text-base leading-tight sm:leading-normal">
                <span className="sm:inline">Name, username, phone number, email address</span>
                <span className="block sm:hidden">Name, username,<br />phone number, email address</span>
              </div>
            )}
            <svg
              className="absolute left-3 top-5 sm:top-1/2 sm:-translate-y-1/2 w-5 h-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Suggested Section */}
        <div className="bg-card rounded-3xl shadow-soft border border-border/50 overflow-hidden">
          <h2 className="text-xl font-semibold p-6 pb-3">Quick Actions</h2>

          {/* Payment Link Option */}
          <button
            onClick={() => navigate("/send-request")}
            className="w-full flex items-center justify-between p-5 hover:bg-gradient-primary/5 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground text-base">Send or request money</p>
                <p className="text-sm text-muted-foreground">Fast transfers across all networks</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contacts List */}
          <div className="divide-y divide-border">
            {contacts.map((contact, index) => (
              <ContactItem
                key={index}
                name={contact.name}
                username={contact.username}
                fallback={contact.fallback}
                avatar={contact.avatar}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Passkey Modal */}
      <Sheet open={showPasskey} onOpenChange={setShowPasskey}>
        <SheetContent side="bottom" className="rounded-t-3xl h-[90vh]">
          <SheetHeader className="mb-8">
            <div className="flex items-center justify-center mb-6">
              {processedLogo ? (
                <img src={processedLogo} alt="UrPaid" className="w-24 h-24 object-contain" />
              ) : (
                <div className="w-24 h-24 animate-pulse bg-muted/20 rounded" />
              )}
            </div>
            <SheetTitle className="text-3xl font-bold text-center leading-tight">
              Welcome to financial freedom
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col items-center space-y-8">
            {/* Security Icons */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                <User className="w-10 h-10 text-primary" />
              </div>
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                <Mail className="w-10 h-10 text-primary" />
              </div>
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                <Phone className="w-10 h-10 text-primary" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-muted-foreground" />
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-muted-foreground text-base px-6">
              Create your account and passkey to secure your dollars.
            </p>

            {/* Link */}
            <a href="#" className="text-primary font-semibold text-lg">
              How passkeys work
            </a>

            {/* Continue Button */}
            <div className="fixed bottom-8 left-4 right-4 max-w-lg mx-auto">
              <Button
                size="lg"
                className="w-full rounded-full h-14 text-lg font-semibold shadow-soft"
                onClick={() => setShowPasskey(false)}
              >
                Continue
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <BottomNav />
    </div>
  );
};

export default Home;
