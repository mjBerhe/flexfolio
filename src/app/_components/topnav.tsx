import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const TopNav: React.FC = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-white">
      <div>FlexFolio</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
