import { Box, Center } from "@chakra-ui/react"

const NotFound = () => {
  return (
    <Center display="flex" flexDirection="column" gap="25px" color="white">
      <Box fontSize="6xl" fontWeight="bold">
        404
      </Box>
      <Box fontSize="2xl" fontStyle="italic">
        Not Found
      </Box>
    </Center>
  )
}

export default NotFound
