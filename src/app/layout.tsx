import type {Metadata} from "next"
import {Noto_Sans_JP} from "next/font/google"
import {ChakraProvider} from "@chakra-ui/react"

const notoSansJP = Noto_Sans_JP({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "maimai880's portfolio",
  description: "A simple portfolio built with Next.js",
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="ja">
    <body className={notoSansJP.className} style={{background: "#F5F5F5"}}>
    <ChakraProvider>
      {children}
    </ChakraProvider>
    </body>
    </html>
  )
}
