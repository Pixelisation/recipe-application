import Head from "next/head";
import { prisma } from "../../lib/prisma";
import { Button } from "@mui/material";

export default function Home({ user }) {
  return (
    <>
      <Head>
        <title>YumYumYields</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        {Array.isArray(user) &&
          user.map((user) => <li key={user.id}>hello, {user?.username}</li>)}
      </h1>
      <Button variant="outline" >hi</Button>
    </>
  );
}

export async function getStaticProps() {
  const user = await prisma.user.findMany({
    where: {
      email: "test@test.com",
    },
  });
  return {
    props: { user },
  };
}
