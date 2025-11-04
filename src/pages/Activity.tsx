import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const Activity = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-gradient-primary border-b border-primary/20 sticky top-0 z-10 shadow-soft">
        <div className="max-w-lg mx-auto px-6 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:bg-white/20"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-bold text-white">Activity</h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-6 py-8">
        <div className="text-center py-16">
          <div className="w-20 h-20 rounded-full bg-gradient-secondary/20 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">No Activity Yet</h2>
          <p className="text-muted-foreground">Your transaction history will appear here</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Activity;
