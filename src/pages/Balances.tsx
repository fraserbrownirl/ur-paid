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
          <h1 className="text-lg font-semibold">Balances</h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        <div className="rounded-lg border border-border overflow-hidden bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Chain</TableHead>
                {topTokens.map((token) => (
                  <TableHead key={token} className="text-right font-semibold">
                    {token}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {chains.map((chain) => (
                <TableRow key={chain}>
                  <TableCell className="font-medium">{chain}</TableCell>
                  {topTokens.map((token) => (
                    <TableCell key={token} className="text-right">
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
