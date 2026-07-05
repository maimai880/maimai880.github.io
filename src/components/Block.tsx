import {Box, Flex, Heading} from "@chakra-ui/react"

export const Block = ({title, children}: { title: string, children: React.ReactNode }) => {
  return (
    <Box mb={[8, 16]} w="full">
      <Flex align="center" justify="center" mb={[4, 8]} w="full" h={16} bgColor="white">
        <Heading size="lg">
          {title}
        </Heading>
      </Flex>

      <Box px={8} w="full">
        {children}
      </Box>
    </Box>
  )
}
