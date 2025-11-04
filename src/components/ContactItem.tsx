import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Info } from "lucide-react";

interface ContactItemProps {
  name: string;
  username?: string;
  avatar?: string;
  fallback: string;
  onClick?: () => void;
}

export const ContactItem = ({ name, username, avatar, fallback, onClick }: ContactItemProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors rounded-lg"
    >
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatar} />
          <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
            {fallback}
          </AvatarFallback>
        </Avatar>
        <div className="text-left">
          <p className="font-semibold text-foreground">{name}</p>
          {username && <p className="text-sm text-muted-foreground">{username}</p>}
        </div>
      </div>
      <Info className="w-5 h-5 text-muted-foreground" />
    </button>
  );
};
