import type { Metadata } from "next"
import {Noto_Sans_JP} from "next/font/google"

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "maimai880's portfolio",
  description: "A simple portfolio built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  )
}
