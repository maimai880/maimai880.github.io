"use client"

import {Center, Flex, HStack, Image, Link, Text, VStack} from "@chakra-ui/react"
import {Block} from "@/components/Block"
import {SkillCard} from "@/components/SkillCard"
import {WorkCard} from "@/components/WorkCard"

export default function Home() {
  return (
    <>
      <main>
        <Center mb={[4, 8]} w="full" height={[200, 400]} position="relative">
          <Image
            src="/header.png" alt="Header image"
            position="absolute" top={0} left={0} w="full" h="full" objectFit="cover" zIndex="-1"
          />
          <Image src="https://github.com/maimai880.png" alt="Icon image"
                 position="absolute" bottom={[2, 4]}
                 boxSize={[100, 200]} rounded="full" border="5px solid white"/>
        </Center>

        <Center mb={[8, 16]}>
          <VStack>
            <Text fontSize={["2xl", "3xl"]} fontWeight="bold">
              Ao Takeda
            </Text>
            <Text fontSize={["lg", "xl"]} color="gray.500">
              maimai880
            </Text>
            <Text fontSize={["md", "lg"]} color="gray.600" mb={[2]}>
              Frontend Engineer
            </Text>

            <HStack spacing={[6, 8]}>
              <Link href="https://github.com/maimai880" isExternal>
                <Image src="/github.svg" alt="Github icon" boxSize={[6, 8]}/>
              </Link>
              <Link href="https://zenn.dev/8_8" isExternal>
                <Image src="/zenn.svg" alt="Zenn icon" boxSize={[6, 8]}/>
              </Link>
            </HStack>
          </VStack>
        </Center>

        <Center w="full">
          <VStack w="full">
            <Block title="About me">
              <Text fontSize={["sm", "md", "lg"]} color="gray.700" textAlign="center">
                はじめまして、2005年生まれの高校3年生（2023年12月現在）です<br/><br/>
                子どもの頃から機械を扱うのが好きで、中学三年生の頃からプログラミングをしています<br/>
                最初は祖父のお古のWindows XPで、ゲーム感覚でコードを書いていたのを覚えています<br/>
                2021年にN高等学校に入学してからは、オンラインコーチングなどを用いてWeb開発を学びました<br/>
                現在は個人開発を行ったり、フロントエンドエンジニアとしてインターンをしたりしています<br/>
                実務経験は1年ほどあります<br/><br/>
                音楽を聴くのが趣味で、星野源,フジファブリック,andymori,スピッツ,奥田民生,hump backなどが好きです
              </Text>
            </Block>

            <Block title="My skills">
              <Flex justify="center" wrap="wrap" gap={8} w="full">
                <SkillCard iconSrc="/html5.svg" title="HTML5">
                  使用歴: 3年<br/>
                  主にReactを使うので造詣が深いわけではありませんが、基本的な所は理解しています
                </SkillCard>

                <SkillCard iconSrc="/css3.svg" title="CSS3">
                  使用歴: 3年<br/>
                  業務に支障がない程度には理解しています
                </SkillCard>

                <SkillCard iconSrc="/javascript.svg" title="JavaScript">
                  使用歴: 3年<br/>
                  一番得意な言語です<br/>
                  様々なライブラリを扱えます
                </SkillCard>

                <SkillCard iconSrc="/typescript.svg" title="TypeScript">
                  使用歴：2年<br/>
                  少々複雑な型も扱えます
                </SkillCard>

                <SkillCard iconSrc="/react.svg" title="React">
                  使用歴: 3年<br/>
                  実務で1年ほど使っているので、理解度は高い方だと思います<br/>
                  bulletproof-reactのディレクトリ構成が好きです
                </SkillCard>

                <SkillCard iconSrc="/nextjs.svg" title="Next.js">
                  使用歴: 1年弱<br/>
                  まだまだ勉強中です<br/>
                  一応このサイトもNext.jsで作られています
                </SkillCard>

                <SkillCard iconSrc="/express.svg" title="Express">
                  使用歴: 2年<br/>
                  数回使った程度ですが、後述のTODO-APPではかなり読みやすいコードが書けたと思います
                </SkillCard>

                <SkillCard iconSrc="ruby.svg" title="Ruby">
                  使用歴: 1年<br/>
                  言語自体の機能は幅広く知っています<br/>
                  Railsは触ったことがありません
                </SkillCard>

                <SkillCard iconSrc="c.svg" title="C">
                  使用歴: 1か月<br/>
                  応用情報（受けてない）の勉強で学びました<br/>
                  実用的な実力はまだまだないです
                </SkillCard>

                <SkillCard iconSrc="rust.svg" title="Rust">
                  使用歴: 1ヶ月<br/>
                  興味があるので勉強中です<br/>
                  個人開発で使ってみたいと思っています
                </SkillCard>
              </Flex>
            </Block>

            <Block title="My works">
              <Flex justify="center" wrap="wrap" gap={8} w="full">
                <WorkCard
                  iconSrc="/todoapp.png" title="TODO-APP"
                  explanation="シンプルなTODO管理アプリです"
                  techStack="JavaScript, Express, React, PostgreSQL, Docker, Heroku"
                  githubURL="https://github.com/maimai880/todo-app-old"
                >
                  初めて自作したTODO管理アプリです<br/>
                  初めてのReactだったのでフロントエンドのコードはとても汚いですが、バックエンドは中々綺麗に書けたと思います<br/>
                  UIはTwitterを参考にデザインしたのですが、UI/UXについても考えられてかなりいいデザインになったと思います<br/>
                  開発当時はHerokuにデプロイしたのですが、諸事情で現在は停止しています<br/>
                  また、初心者が行った開発であるため環境構築が滅茶苦茶で、今となってはローカルで動かすことも出来ません笑<br/>
                  非公開リポジトリから公開リポジトリへの移行に伴ってコミット履歴は1つになってしまいました<br/>
                </WorkCard>

                <WorkCard
                  iconSrc="/shopapp.png" title="SHOP-APP"
                  explanation="シンプルなショッピング風サイトです"
                  screenshotSrc={"/shopapp-screenshot.png"}
                  techStack="Vite, TypeScript, React, Chakra UI, MSW"
                  githubURL="https://github.com/maimai880/shop-app"
                >
                  前々職の退職後に作った個人開発です<br/>
                  bulletproof-reactというReactのアーキテクチャに感動し、その練習として作りました<br/>
                  かなり綺麗な出来になって満足しています<br/>
                  初めてViteを使った開発でしたが、あらゆる速度が爆速で捗りました<br/>
                  また、MSWを使ったモックサーバーの導入も初めてでしたが、かなり便利でした<br/>
                </WorkCard>

                <WorkCard
                  iconSrc="/newsapp.png" title="NEWS-APP"
                  explanation="シンプルなニュースサイトです"
                  screenshotSrc={"/newsapp-screenshot.png"}
                  techStack="Vite, TypeScript, React, MUI, SWR, Vercel, ChatGPT"
                  githubURL="https://github.com/maimai880/news-app"
                  demoURL="https://news-app-one-silk.vercel.app/"
                >
                  ChatGPTを利用した開発の練習として作りました<br/>
                  コードを渡して「何時間前とかが左下に表示されるようにして下さい」の様に適当に指示を出すだけで実装出来たので、とても捗りました<br/>
                  今後はAIを上手く利用して開発を進めていきたいと強く思わされました<br/>
                  また、デプロイもしてみたのですが、Vercelがあまりにも便利すぎて衝撃を受けました<br/>
                </WorkCard>

                <WorkCard
                  iconSrc="https://github.com/maimai880.png" title="portfolio"
                  explanation="このサイトです"
                  techStack="TypeScript, Next.js, Chakra UI, GitHub Pages"
                  githubURL="https://github.com/maimai880/maimai880.github.io"
                >
                  <Link href="https://v0.dev" isExternal>v0.dev</Link>
                  を利用してデザインしました<br/>
                  最終的には当初のデザインとはかなり変わりましたが、現時点ではデザインの着想を得るツールとしてとても革命的だと感じました<br/>
                  とてもシンプルなものなので、他に特筆すべき点はありません
                </WorkCard>
              </Flex>
            </Block>
          </VStack>
        </Center>
      </main>
      <footer>
        <Center py={8} bg="#ddd">
          <Text fontSize={["xs", "sm"]} color="gray.500">
            © 2023 maimai880 All rights reserved.
          </Text>
        </Center>
      </footer>
    </>
  )
}
