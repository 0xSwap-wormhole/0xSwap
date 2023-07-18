import { Heading, VStack, Box, Button, Link } from '@chakra-ui/react';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

function Home() {
    return (
        <VStack
            spacing={8}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            pt={24}
            pb={12}
            >
            <Box>
                <Heading
                as="h1"
                fontFamily="body"
                bgColor="blue.400"
                bgClip="text"
                fontSize={["4xl","6xl"]}
                bgGradient="linear(to-l, #79c2ff, #4a5888)"
                >
                0xswap 🚀
                </Heading>
            </Box>
            <Box>
                <Heading
                as="h2"
                size={["lg"]}
                fontSize={["2xl","4xl"]}
                lineHeight="tall"
                color="gray.500"
                fontWeight="medium"
                pl={12}
                pr={12}
                >
                    Decentralized Volatility Exchange
                </Heading>
                <Heading
                as="h4"
                mt={"2em"}
                color="white"
                fontWeight="small"
                size={["sm","md","lg"]}>Hackathon version<br/><br/>
                    Only in <Link href='https://ropsten.etherscan.io' style={{fontWeight: 1000 }} color="blue.400"
                                  target="_blank">Ropsten</Link> test network
                    <br/><br/>...for now
                </Heading>
                <div>
                    <Link href='/app' style={{textDecoration: "none"}}>
                        <Button
                            colorScheme='blue'
                            mt={'10'}
                            size={'lg'}
                        >
                            Launch
                        </Button>
                    </Link>
                </div>
                <br/>
                <div style={{color: "white", marginTop: "2em"}}>
                    Visit project in&nbsp;
                    <Link href='' target="_blank"
                          style={{fontWeight: 1000 }} color="blue.400">
                        DoraHacks.io
                    </Link>
                </div><br/>
                <Heading
                    as="h3"
                    size="md"
                    lineHeight="tall"
                    color="white.500"
                    fontWeight="medium"
                >
                    <div style={{color: "white", marginTop: "1em"}}>Presented in&nbsp;
                        <Link href='https://www.encode.club' target="_blank"
                        style={{fontWeight: 1000}} color="blue.400">Solana</Link> Hackathon</div>
                </Heading><br/>
                <div style={{color: "white", marginTop: "1em"}}>
                    Go back to&nbsp;
                    <Link href='https://0xswap.com' style={{fontWeight: 1000 }} color="blue.400">
                            www.0xswap.com
                    </Link>
                </div>
            </Box>
        </VStack>
    )

}
export default Home;