import { ArrowLeft, User, Mail, Phone, Shield, Settings, CreditCard, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: CreditCard, label: "Payment Methods", description: "Manage your cards and accounts" },
    { icon: Bell, label: "Notifications", description: "Manage notification preferences" },
    { icon: Shield, label: "Security", description: "Passkey and security settings" },
    { icon: Settings, label: "Settings", description: "App preferences" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="fixed top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      {/* Header */}
      <header className="bg-secondary border-b border-secondary/20 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-6 py-5 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:bg-white/20"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-white">Profile</h1>
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-[560px] mx-auto px-6 py-8">
        {/* Profile Card */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
              <User className="w-10 h-10 text-secondary" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">John Doe</h2>
              <p className="text-muted-foreground">@johndoe</p>
            </div>
          </div>
          
          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-all">
                <item.icon className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-all" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold mb-0.5">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <span className="text-2xl font-extralight text-border group-hover:text-primary group-hover:translate-x-1 transition-all">
                →
              </span>
            </button>
          ))}
        </div>

        {/* Sign Out Button */}
        <Button
          variant="outline"
          className="w-full mt-8 rounded-xl h-12 border-destructive/50 text-destructive hover:bg-destructive hover:text-white"
        >
          Sign Out
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
