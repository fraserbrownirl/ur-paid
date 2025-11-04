import { useState } from "react";
import { Menu, QrCode, User, DollarSign, Shield, Fingerprint, ScanFace } from "lucide-react";
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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Menu className="w-6 h-6" />
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <QrCode className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={() => setShowPasskey(true)}
            >
              <User className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Send and Request</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Name, username, phone number, email address"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-full bg-card border-border"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
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
        <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
          <h2 className="text-xl font-semibold p-4 pb-2">Suggested</h2>

          {/* Payment Link Option */}
          <button
            onClick={() => navigate("/send-request")}
            className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Send and request money with a link</p>
                <p className="text-sm text-muted-foreground">Share it via text, email or any app.</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" />
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
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-2xl font-bold">PayPal</h2>
            </div>
            <SheetTitle className="text-3xl font-bold text-center leading-tight">
              Add an extra layer of security in seconds
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col items-center space-y-8">
            {/* Security Icons */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-blue-400 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                  ))}
                </div>
              </div>
              <div className="w-20 h-20 rounded-full bg-blue-400 flex items-center justify-center">
                <Fingerprint className="w-10 h-10 text-primary" />
              </div>
              <div className="w-20 h-20 rounded-full bg-blue-400 flex items-center justify-center">
                <ScanFace className="w-10 h-10 text-primary" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-muted-foreground" />
                <div className="w-20 h-20 rounded-lg bg-primary flex items-center justify-center">
                  <Shield className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-muted-foreground text-base px-6">
              A passkey is more resistant to phishing attempts and uses your face, fingerprint or passcode to log in.
            </p>

            {/* Link */}
            <a href="#" className="text-primary font-semibold text-lg">
              How passkeys work
            </a>

            {/* Continue Button */}
            <div className="fixed bottom-8 left-4 right-4 max-w-lg mx-auto">
              <Button
                size="lg"
                className="w-full rounded-full h-14 text-lg font-semibold bg-foreground text-background hover:bg-foreground/90"
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
