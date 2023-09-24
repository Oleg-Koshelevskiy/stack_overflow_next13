import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <h1>Hello on main page</h1>
    </div>
  );
}
