import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Balances = () => {
  const navigate = useNavigate();

  const chains = [
    "Ethereum",
    "Arbitrum",
    "Base",
    "Optimism",
    "Polygon",
    "BNB Chain",
    "Avalanche",
    "ZKsync",
    "Celo",
    "Zora Network",
    "Blast",
    "World Chain",
    "Unichain",
  ];

  const topTokens = ["USDC", "USDT", "PYUSD"];

  // Mock balance data
  const getBalance = (chain: string, token: string) => {
    const balances: { [key: string]: string } = {
      "Ethereum-USDC": "1,234.56",
      "Ethereum-USDT": "987.65",
      "Ethereum-PYUSD": "543.21",
      "Arbitrum-USDC": "2,345.67",
      "Base-USDC": "1,567.89",
      "Optimism-USDT": "678.90",
    };
    return balances[`${chain}-${token}`] || "0.00";
  };

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
          <h1 className="text-xl font-bold text-white">Balances</h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-6 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Your Balances</h2>
          <p className="text-muted-foreground">Track your crypto across all networks</p>
        </div>
        
        <div className="rounded-3xl border border-border/50 overflow-hidden bg-card shadow-soft">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead className="font-semibold">Network</TableHead>
                {topTokens.map((token) => (
                  <TableHead key={token} className="text-right font-semibold">
                    {token}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {chains.map((chain, idx) => (
                <TableRow key={chain} className={idx % 2 === 0 ? "bg-muted/10" : ""}>
                  <TableCell className="font-medium">{chain}</TableCell>
                  {topTokens.map((token) => (
                    <TableCell key={token} className="text-right font-mono">
                      ${getBalance(chain, token)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Balances;
