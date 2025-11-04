import { Home, CreditCard, ArrowUpDown, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: CreditCard, label: "Balances", path: "/balances" },
  { icon: ArrowUpDown, label: "Send/Request", path: "/send-request" },
  { icon: FileText, label: "Activity", path: "/activity" },
];

export const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border shadow-soft">
      <div className="max-w-lg mx-auto px-4 py-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all",
                  isActive 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Icon className={cn("w-6 h-6", isActive && "fill-primary/20")} />
                <span className={cn("text-xs font-medium", isActive && "font-semibold")}>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
