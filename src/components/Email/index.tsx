import { Box, Input } from "@chakra-ui/react"

interface IEmail {
  value: string
  onChange: (event: any) => void
}

export const Email = ({ value, onChange }: IEmail) => {
  return (
    <Box width="100%" display="flex" flexDirection="column" gap="4px">
      <h2>Email</h2>
      <Input
        type="email"
        placeholder="Digite seu email"
        aria-label="Digite seu email"
        focusBorderColor="#5A8"
        onChange={onChange}
      />
    </Box>
  )
}
