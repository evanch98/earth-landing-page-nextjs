import { Globe2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full text-gray-100 bg-gray-950">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between py-4">
        <nav className="flex space-x-16 items-center">
          <div className="flex space-x-1 items-center">
            <Globe2 className="h-8 w-8" />
          </div>
        </nav>
      </div>
    </header>
  );
};
