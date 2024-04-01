import { IInputProps, Input as TextInput } from 'native-base'
export function Input({ ...rest }: IInputProps) {
  return (
    <TextInput
      {...rest}
      bg={'gray.700'}
      h={14}
      px={4}
      borderWidth={0}
      fontSize={'md'}
      color={'white'}
      fontFamily={'body'}
      mb={4}
      placeholderTextColor={'gray.300'}
      _focus={{
        borderWidth: 1,
        borderColor: 'green.500',
        bg: 'gray.700',
      }}
    />
  )
}
