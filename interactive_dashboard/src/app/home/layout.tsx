export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <nav>
        This is home Nav Bar
      </nav>
      {children}
    </section>
  );
}
