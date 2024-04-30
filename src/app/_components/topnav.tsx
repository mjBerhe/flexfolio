import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const TopNav: React.FC = () => {
  return (
    <div className="w-full border-b">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 text-white">
        <div>FlexFolio</div>
        <div className="flex gap-x-8">
          <span>Home</span>
          <span>Workouts</span>
          <span>Calendar</span>
        </div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};
