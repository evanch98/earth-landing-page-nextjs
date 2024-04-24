import { Globe2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-screen-lg mx-auto py-4 text-gray-100">
      <nav className="flex space-x-16 items-center">
        <div className="flex space-x-1 items-center">
          <Globe2 className="h-8 w-8" />
        </div>
      </nav>
    </header>
  );
};
