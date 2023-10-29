import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ImageProvider } from '@/components/ImageContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ImageProvider>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </ImageProvider>
  )
}
