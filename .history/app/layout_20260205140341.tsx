// layout.tsx (update to include ChatWidget)
import ChatWidget from '@/components/ChatWidget';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Your existing layout structure */}
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}