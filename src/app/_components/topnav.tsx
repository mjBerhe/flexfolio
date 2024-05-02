import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const TopNav: React.FC = () => {
  return (
    <div className="w-full border-b">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 text-white">
        <div>FlexFolio</div>
        <div className="flex gap-x-8">
          <Link href="/dashboard">Home</Link>
          <Link href="/workouts">Workouts</Link>
          <Link href="/calendar">Calendar</Link>
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
