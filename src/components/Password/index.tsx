import { Box, Input } from "@chakra-ui/react"

export const Password = () => {
  return (
    <Box width="100%" display="flex" flexDirection="column" gap="4px">
      <h2>Senha</h2>
      <Input
        type="password"
        placeholder="Digite sua senha"
        aria-label="Digite sua senha"
        focusBorderColor="#5A8"
      />
    </Box>
  )
}
