import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react';
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Tony DU',
    default:
      'Tony DU - Software designer',
  },
  description:
    'Diligent and flexible full-stack software developer with solid mathematical knowledge and machine learning experience. Eager to work as a software engineer and open to Data Analyst. Enthusiastic about technology, coding, and continually expanding my knowledge.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}