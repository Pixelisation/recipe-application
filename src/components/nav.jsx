import { useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar } from "@mui/material";


export default function Nav() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <div>
          <Avatar src={session.user.image} sx={{ width: 70, height: 70 }} />
          <div>
            <p>Hello, {session.user.name}</p>
            <Link href="/api/auth/signout">Sign out</Link>
          </div>
        </div>
      </>
    );
  }

  return <Link href="/api/auth/signin">Sign in</Link>;
}
