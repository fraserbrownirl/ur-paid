import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const Accounts = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-lg font-semibold">Accounts</h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Your linked accounts will appear here</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Accounts;
