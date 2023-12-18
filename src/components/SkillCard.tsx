import {Card, CardBody, Heading, Image, Text, VStack} from "@chakra-ui/react"

export const SkillCard = ({iconSrc, title, children}: {
  iconSrc: string,
  title: string,
  children: React.ReactNode
}) => {
  return (
    <Card w={[64, 80]} h={[64, 80]} bg="white" boxShadow={["none", "md"]}>
      <CardBody as={VStack} align="center" px={[3, 4]} py={[6, 8]}>
        <Image src={iconSrc} alt={`${title} icon`} boxSize={[12, 16]} mb={[3, 4]}/>

        <Heading size={["sm", "md"]} mb={[1, 2]}>
          {title}
        </Heading>

        <Text fontSize={["sm", "md"]} color="gray.700" textAlign="center">
          {children}
        </Text>
      </CardBody>
    </Card>
  )
}
