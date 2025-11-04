import { useState } from "react";
import { Menu, Grid3x3, User, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContactItem } from "@/components/ContactItem";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

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
              <Grid3x3 className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Send and Request</h1>

        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Name, username, email address,..."
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
          <Button variant="ghost" size="icon" className="rounded-full h-12 w-12">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </Button>
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

      <BottomNav />
    </div>
  );
};

export default Home;
