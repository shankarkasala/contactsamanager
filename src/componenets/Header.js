import React from 'react'
import { Box } from "@chakra-ui/react"
function Header() {
    return (
        <div>
            <Box bg="tomato" w="100%" p={4} color="white">
               <h1 style={{fontSize:"40px"}} ><b>CONTACT MANAGER</b></h1>
            </Box>
            {/* <h1 style={{color:"orange"}}>CONTACT MANAGER</h1> */}
        </div>
    )
}

export default Header

