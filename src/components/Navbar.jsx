import { A } from "@solidjs/router";

export default function Navbar({ isAuthenticated }) {
  return (
    <nav>
      <A href="/">Home</A>
      {!isAuthenticated ? (
        <A href="/login">Login</A>
      ) : (
        <>
          <A href="/protected">Protected</A>
          <A href="/logout">Logout</A>
        </>
      )}
    </nav>
  );
}







// import { Link } from "@solidjs/router";

// export default function Navbar({ isAuthenticated }) {
//   return (
//     <nav>
//       <Link href="/">Home</Link>
//       {!isAuthenticated ? (
//         <Link href="/login">Login</Link>
//       ) : (
//         <>
//           <Link href="/protected">Protected</Link>
//           <Link href="/logout">Logout</Link>
//         </>
//       )}
//     </nav>
//   );
// }
