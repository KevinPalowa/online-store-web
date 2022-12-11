import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
type Props = { title: string; children: React.ReactNode };
export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="min-h-screen"> {children}</main>
      <Footer />
    </>
  );
}
