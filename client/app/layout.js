export const metadata = {
  title: "URL Shortener",
  description: "Shorten your long URLs quickly and easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
