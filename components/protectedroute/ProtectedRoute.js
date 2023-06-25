import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getServerSideProps(context) {
  const { req } = context;

  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: session,
  };
}

// export default function ProtectedRoute({ children }) {
//   const router = useRouter();

//   useEffect(() => {
//     async function checkUser() {
//       const session = await getSession();

//       if (!session) {
//         router.replace("/login");
//       } else if (session.user.role === "admin") {
//         router.replace("/admin");
//       } else if (session.user.role === "subadmin") {
//         router.replace("/subadmin");
//       } else if (session.user.role === "teacher") {
//         router.replace("/teacher");
//       }
//     }

//     checkUser();
//   }, [router]);

//   return <>{children}</>;
// }

const ProtectedRoute = ({ children, role }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in and has the appropriate role
    const isLoggedIn = true; // Replace with actual login check
    const userRole = "admin"; // Replace with actual role check

    if (!isLoggedIn || userRole !== role) {
      router.push("/login"); // Redirect to login page if not logged in or wrong role
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
