import { Link, Box } from '@chakra-ui/react'
import { chdir } from 'process'

interface Props {
  children: string
}

const Header = ({ children }: Props) => {
  let sel = typeof children == 'string' ? children : children[0]
  let id = sel.toLowerCase().replace(/ /g, '-')
  return (
    <Box
      fontSize="4xl"
      textColor="brand.text-title"
      marginY="12"
      marginBottom="2"
      fontWeight="600"
    >
      <Link textDecoration="none" href={`#${id}`} id={id} fontFamily="Lato">
        {children}
      </Link>
    </Box>
  )
}

export default Header
