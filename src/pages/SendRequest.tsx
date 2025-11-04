import { useState } from "react";
import { ArrowLeft, HelpCircle, DollarSign, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BottomNav } from "@/components/BottomNav";
import { ContactItem } from "@/components/ContactItem";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const contacts = [
  { name: "Coline Loup", fallback: "CL", avatar: "" },
  { name: "RUDA", fallback: "R", avatar: "" },
  { name: "Sofia Kolomiets", fallback: "SK", avatar: "" },
  { name: "Robert Andre", fallback: "RA", avatar: "" },
  { name: "Emma Wilson", fallback: "EW", avatar: "" },
  { name: "Michael Chen", fallback: "MC", avatar: "" },
];

const SendRequest = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("Ethereum");
  const [searchQuery, setSearchQuery] = useState("");
  const [showContacts, setShowContacts] = useState(true);
  
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
  const [showPaymentType, setShowPaymentType] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [paymentType, setPaymentType] = useState("");
  const navigate = useNavigate();

  const handleNumberInput = (num: string) => {
    if (num === "." && amount.includes(".")) return;
    if (amount === "" && num === ".") {
      setAmount("0.");
      return;
    }
    setAmount((prev) => prev + num);
  };

  const handleBackspace = () => {
    setAmount((prev) => prev.slice(0, -1));
  };

  const handleRequest = () => {
    console.log('Request clicked - amount:', amount, 'parsed:', parseFloat(amount));
    if (!amount || parseFloat(amount) <= 0 || isNaN(parseFloat(amount))) {
      toast.error("Please enter a valid amount");
      return;
    }
    setShowReview(true);
  };

  const handleSend = () => {
    console.log('Send clicked - amount:', amount, 'parsed:', parseFloat(amount));
    if (!amount || parseFloat(amount) <= 0 || isNaN(parseFloat(amount))) {
      toast.error("Please enter a valid amount");
      return;
    }
    setShowPaymentType(true);
  };

  const handlePaymentTypeSelection = (type: string) => {
    setPaymentType(type);
    setShowPaymentType(false);
    setShowReview(true);
  };

  const handleCreateLink = () => {
    toast.success("Payment link created successfully!");
    setShowReview(false);
    setAmount("");
  };

  const numberPad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [".", "0", "←"],
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <h1 className="text-xl font-semibold text-white">Send or Request</h1>
          <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/20 invisible">
            <HelpCircle className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="max-w-[560px] mx-auto px-6 py-8 overflow-hidden">
        {showContacts ? (
          <>
            {/* Search Bar */}
            <div className="mb-6">
              <div className="bg-muted border border-border rounded-xl p-4 flex items-center gap-4 transition-all hover:bg-card hover:border-border/80 focus-within:bg-card focus-within:border-primary focus-within:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]">
                <Search className="w-5 h-5 text-foreground/50" strokeWidth={1.5} />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-[0.925rem] text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Contacts List */}
            <div>
              <h2 className="text-xs font-semibold text-foreground/70 mb-5 uppercase tracking-widest">
                Select Recipient
              </h2>
              <div className="space-y-2">
                {filteredContacts.map((contact, index) => (
                  <div 
                    key={index}
                    onClick={() => setShowContacts(false)}
                    className="cursor-pointer"
                  >
                    <ContactItem
                      name={contact.name}
                      fallback={contact.fallback}
                      avatar={contact.avatar}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Enter Amount</h2>
        </div>

        {/* Amount Input */}
        <div className="flex items-center gap-2 sm:gap-4 mb-8 overflow-hidden">
          <input
            type="text"
            value={`$${amount}`}
            readOnly
            className="text-3xl sm:text-5xl font-bold bg-transparent border-none outline-none flex-1 min-w-0 cursor-default bg-gradient-primary bg-clip-text text-transparent"
            placeholder="$"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="rounded-full h-10 sm:h-12 px-3 sm:px-6 font-semibold border-2 text-sm sm:text-base whitespace-nowrap flex-shrink-0"
              >
                {currency} ▾
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-card z-50">
              {chains.map((chain) => (
                <DropdownMenuItem
                  key={chain}
                  onClick={() => setCurrency(chain)}
                  className="cursor-pointer"
                >
                  {chain}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <Button
            onClick={handleRequest}
            size="lg"
            variant="outline"
            className="rounded-full h-14 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
          >
            Request
          </Button>
          <Button
            onClick={handleSend}
            size="lg"
            className="rounded-full h-14 text-lg font-semibold shadow-soft"
          >
            Send
          </Button>
        </div>

        {/* Number Pad */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {numberPad.map((row, rowIndex) => (
            row.map((btn, btnIndex) => (
              <Button
                key={`${rowIndex}-${btnIndex}`}
                variant="ghost"
                size="lg"
                className="h-14 sm:h-16 text-xl sm:text-2xl font-semibold rounded-2xl hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => {
                  if (btn === "←") handleBackspace();
                  else handleNumberInput(btn);
                }}
              >
                {btn === "←" ? "×" : btn}
              </Button>
            ))
          ))}
        </div>
        </>
        )}
      </main>

      {/* Payment Type Modal */}
      <Dialog open={showPaymentType} onOpenChange={setShowPaymentType}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">Payment type</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <button
              onClick={() => handlePaymentTypeSelection("goods")}
              className="w-full p-4 text-left border border-border rounded-xl hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <svg className="w-8 h-8 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <div className="flex-1">
                  <p className="font-semibold text-foreground mb-1">For goods and services</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Get a full refund if an eligible item gets lost or damaged. Seller pays a small fee.
                  </p>
                  <a href="#" className="text-sm text-primary font-semibold">More on Buyer Protection</a>
                </div>
              </div>
            </button>

            <button
              onClick={() => handlePaymentTypeSelection("friends")}
              className="w-full p-4 text-left border border-border rounded-xl hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <svg className="w-8 h-8 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <div className="flex-1">
                  <p className="font-semibold text-foreground mb-1">For friends and family</p>
                  <p className="text-sm text-muted-foreground">
                    Buyer Protection doesn't apply for this payment.
                  </p>
                </div>
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Review Modal */}
      <Sheet open={showReview} onOpenChange={setShowReview}>
        <SheetContent side="bottom" className="rounded-t-3xl">
          <SheetHeader>
            <SheetTitle className="text-2xl text-center">Review</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 mt-6">
            <div className="flex justify-between items-start">
              <p className="text-xl font-bold">Your request</p>
              <p className="text-xl font-bold text-primary">${amount || "0.00"}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Fast, secure crypto transfers powered by blockchain technology. 
              By continuing, you agree to our{" "}
              <a href="#" className="text-primary font-semibold">terms of service</a>.
            </p>
            <Button
              onClick={handleCreateLink}
              size="lg"
              className="w-full rounded-full h-14 text-lg font-semibold shadow-soft"
            >
              Create Payment Link
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <BottomNav />
    </div>
  );
};

export default SendRequest;
