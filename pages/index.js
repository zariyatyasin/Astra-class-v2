import Head from "next/head";

import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
      redirect: {
        destination: "/register",
        permanent: false,
      },
    };
  }

  if (session.user.role === "admin") {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  if (session.user.role === "subadmin") {
    return {
      redirect: {
        destination: "/subadmin",
        permanent: false,
      },
    };
  }

  if (session.user.role === "student") {
    return {
      redirect: {
        destination: "/student",
        permanent: false,
      },
    };
  }

  if (session.user.role === "teacher") {
    return {
      redirect: {
        destination: "/teacher",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />s
      </Head>
    </>
  );
}