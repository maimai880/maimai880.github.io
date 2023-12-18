import {
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack
} from "@chakra-ui/react"

export const WorkCard = ({iconSrc, title, explanation, screenshotSrc, techStack, githubURL, demoURL, children}: {
  iconSrc: string,
  title: string,
  explanation: string,
  screenshotSrc?: string,
  techStack: string,
  githubURL: string,
  demoURL?: string,
  children: React.ReactNode
}) => {
  const {isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose} = useDisclosure()
  const {isOpen: isImageOpen, onOpen: onImageOpen, onClose: onImageClose} = useDisclosure()

  return (
    <>
      <Card
        onClick={onModalOpen}
        w={[60, 80]} bg="white" boxShadow="md" cursor="pointer"
        transition=".3s" _hover={{boxShadow: "lg", transform: "scale(1.025)"}}
      >
        <CardBody as={VStack} align="center" px={[3, 4]} py={[6, 8]}>
          <Image src={iconSrc} alt={`${title} icon`} h={[12, 16]} mb={[3, 4]}/>

          <Heading size={["sm", "md"]} mb={[1, 2]}>
            {title}
          </Heading>

          <Text fontSize={["sm", "md"]} color="gray.700" textAlign="center">
            {explanation}
          </Text>
        </CardBody>
      </Card>

      <Modal isOpen={isModalOpen} onClose={onModalClose} size={["sm", "xl"]} isCentered autoFocus={false}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton/>

          <ModalBody>
            <Image
              onClick={screenshotSrc ? onImageOpen : () => {
              }}
              src={screenshotSrc ?? "https://dummyimage.com/400x200/DEDEDE/fff.png&text=no+image"}
              alt={`${title} screenshot`}
              w="full" aspectRatio={2} mb={[6, 8]}
              cursor={screenshotSrc ? "pointer" : "default"}
              transition=".3s" _hover={{transform: screenshotSrc ? "scale(1.025)" : "none"}}
              boxShadow={[screenshotSrc ? "md" : "none", "none"]}
            />

            <Heading size={["sm", "md"]} mb={[1, 2]}>
              使用技術
            </Heading>
            <Text fontSize={["sm", "md"]} color="gray.700" mb={[3, 4]}>
              {techStack}
            </Text>

            <Heading size={["sm", "md"]} mb={[1, 2]}>
              詳細
            </Heading>
            <Text fontSize={["sm", "md"]} color="gray.700" mb={[3, 4]}>
              {children}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Link href={demoURL} isExternal>
              <Button mr={4} isDisabled={!demoURL}>
                デモを見る
              </Button>
            </Link>
            <Link href={githubURL} isExternal>
              <Button>
                GitHubで見る
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isImageOpen} onClose={onImageClose} size="full">
        <ModalOverlay/>
        <ModalContent overflow="hidden !important">
          <ModalHeader>スクリーンショット</ModalHeader>
          <ModalCloseButton size="lg"/>

          <ModalBody as={Center}>
            <Image
              src={screenshotSrc ?? "https://dummyimage.com/400x200/DEDEDE/fff.png&text=no+image"}
              alt={`${title} screenshot`}
              w={["100%", "90%"]} aspectRatio={2} border="1px solid black"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )

}
