import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Center, Heading, Image, Text, VStack } from 'native-base'

export function SignIn() {
  return (
    <VStack flex={1} bg={'gray.700'} px={10}>
      <Image
        source={BackgroundImg}
        alt=""
        resizeMode="contain"
        position={'absolute'}
      />

      <Center my={24}>
        <LogoSvg />
        <Text color={'gray.100'} fontSize={'sm'}>
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Center>
        <Heading
          fontFamily={'heading'}
          color={'gray.100'}
          fontSize={'xl'}
          mb={6}
        >
          Acesse a sua conta
        </Heading>

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          keyboardType="ascii-capable"
        />

        <Button title="Acessar" />
      </Center>

      <Button title="Criar conta" variant={'outline'} />
    </VStack>
  )
}
