import { Button as ButtonNB, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string
}

export function Button({ title, variant, ...rest }: Props) {
  return (
    <ButtonNB
      rounded={'sm'}
      {...rest}
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      w={'full'}
      h={14}
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'green.500',
      }}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor={'green.700'}
    >
      <Text
        color={variant === 'outline' ? 'green.500' : 'white'}
        fontFamily={'heading'}
        fontSize={'sm'}
      >
        {title}
      </Text>
    </ButtonNB>
  )
}
