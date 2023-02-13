import { Input, Box } from "@chakra-ui/react"

interface IInputField {
  type: string
  name: string
  placeHolder: string
}

export const InputField = ({ name, type, placeHolder }: IInputField) => {
  return (
    <Box width="100%" display="flex" flexDirection="column" gap="4px">
      <h2>{name}</h2>
      <Input
        type={type}
        placeholder={placeHolder}
        aria-label={placeHolder}
        focusBorderColor="#5A8"
      />
    </Box>
  )
}
