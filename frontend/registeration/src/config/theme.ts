import { extendTheme } from "@chakra-ui/react"
import components from "./components"
import fonts from "./fonts"
import styles from "./styles"


const theme = extendTheme({
    fonts,
    styles,
    components
})

export default theme