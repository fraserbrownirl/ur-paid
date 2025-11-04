import { useState } from "react";
import { ArrowLeft, HelpCircle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SendRequest = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("GBP");
  const [note, setNote] = useState("");
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
    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    setShowPaymentType(true);
  };

  const handleSend = () => {
    if (!amount || parseFloat(amount) <= 0) {
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
    setNote("");
  };

  const numberPad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [".", "0", "←"],
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-lg font-semibold">PayPal link</h1>
          <Button variant="ghost" size="icon" className="rounded-full">
            <HelpCircle className="w-6 h-6" />
          </Button>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        {/* Icon and Title */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <DollarSign className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-semibold">Add amount</h2>
        </div>

        {/* Amount Input */}
        <div className="flex items-center gap-4 mb-8">
          <input
            type="text"
            value={`£${amount}`}
            readOnly
            className="text-5xl font-bold bg-transparent border-none outline-none flex-1 cursor-default"
            placeholder="£"
          />
          <Button
            variant="outline"
            className="rounded-full h-12 px-6 font-semibold"
          >
            {currency} ▾
          </Button>
        </div>

        {/* Note Input */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Add a note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full p-4 bg-muted/30 rounded-xl border-none outline-none text-muted-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Button
            onClick={handleRequest}
            size="lg"
            className="rounded-full h-14 text-lg font-semibold bg-foreground text-background hover:bg-foreground/90"
          >
            Request
          </Button>
          <Button
            onClick={handleSend}
            size="lg"
            className="rounded-full h-14 text-lg font-semibold bg-foreground text-background hover:bg-foreground/90"
          >
            Send
          </Button>
        </div>

        {/* Number Pad */}
        <div className="grid grid-cols-3 gap-2">
          {numberPad.map((row, rowIndex) => (
            row.map((btn, btnIndex) => (
              <Button
                key={`${rowIndex}-${btnIndex}`}
                variant="outline"
                size="lg"
                className="h-16 text-2xl font-semibold rounded-xl bg-card hover:bg-muted"
                onClick={() => {
                  if (btn === "←") handleBackspace();
                  else handleNumberInput(btn);
                }}
              >
                {btn === "←" ? "×" : btn}
                {btn !== "←" && btn !== "." && btn !== "0" && (
                  <span className="text-xs ml-1 text-muted-foreground">
                    {btn === "2" && "ABC"}
                    {btn === "3" && "DEF"}
                    {btn === "4" && "GHI"}
                    {btn === "5" && "JKL"}
                    {btn === "6" && "MNO"}
                    {btn === "7" && "PQRS"}
                    {btn === "8" && "TUV"}
                    {btn === "9" && "WXYZ"}
                  </span>
                )}
              </Button>
            ))
          ))}
        </div>
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
      <Dialog open={showReview} onOpenChange={setShowReview}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">Review</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <p className="text-xl font-bold">Your request</p>
              <p className="text-xl font-bold">£{amount || "0.00"}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              If you're requesting money for a purchase, you'll pay a seller fee when pays you. 
              You could be covered by{" "}
              <a href="#" className="text-primary font-semibold">Seller Protection</a>. 
              By selecting Create PayPal Link, you agree to{" "}
              <a href="#" className="text-primary font-semibold">PayPal link terms</a>.
            </p>
            <Button
              onClick={handleCreateLink}
              size="lg"
              className="w-full rounded-full h-14 text-lg font-semibold bg-foreground text-background hover:bg-foreground/90"
            >
              Create PayPal Link
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <BottomNav />
    </div>
  );
};

export default SendRequest;
