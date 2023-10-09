'use client'

import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Card,
    CardBody,
    Image,
    Heading,
    Divider,
    CardFooter,
    HStack,
    CardHeader,
    IconButton,
    Center,
    SimpleGrid,
    ButtonGroup,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from "@chakra-ui/react"
import { FaGithub, FaYoutube } from "react-icons/fa"
import { AiOutlineCloudServer } from "react-icons/ai"


export default function ProjectCards() {
    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Accordion>
                <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Heading color={'blue.400'}>Market scraping and updating</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>

                            <Card maxW={'lg'} variant={'outline'}>
                                <CardBody>
                                    <Image src="images/theArgentino.png"></Image>
                                    <Divider></Divider>
                                    <Text color={'gray.500'}>
                                    The project consists of an application to obtain <Text color="green.200" as={'b'}>data </Text>
                                    from an online store (similar to Amazon). By using the <Text color="green.200" as={'b'}>Puppeteer library</Text>
                                    , the <Text color="green.200" as={'b'}>scraping </Text>
                                    of product data, such as price, images, name and description, is performed. This data is stored in a <Text color="green.200" as={'b'}>database </Text>
                                     and is accessible through a user interface created with <Text color="green.200" as={'b'}>Electron </Text>
                                      and <Text color="green.200" as={'b'}>Node</Text>
                                      . The user interface was developed with <Text color="green.200" as={'b'}>React.js</Text>
                                      , allowing users to edit and manage the downloaded product data in an intuitive way. In addition, the application is integrated with the <Text color="green.200" as={'b'}>DeepL API </Text>
                                    to provide automatic English translation functionality, which facilitate expansion to an international market. In addition, a connection to a <Text color="green.200" as={'b'}>Shopify </Text>
                                    online store is established. The application use the <Text color="green.200" as={'b'}>Shopify API </Text>
                                     to upload downloaded and modified data to the store, ensuring that it is ready for sale in an international e-commerce environment. In summary, this project combines <Text color="green.200" as={'b'}>web scraping </Text>
                                      techniques, <Text color="green.200" as={'b'}>user interface </Text> development, translation and <Text color="green.200" as={'b'}>connection </Text>
                                       to an <Text color="green.200" as={'b'}>e-commerce </Text> platform to enable the downloading, editing, translation and uploading of product data to an international store on Shopify.
                                    </Text>
                                    <Divider />
                                    
                                </CardBody>
                            </Card>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Heading color={'blue.400'}>Music Player</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>

                            <Card maxW={'lg'} variant={'outline'}>
                                <CardBody>
                                    <Image src="images/musicPlayer.png"></Image>
                                    <Divider></Divider>
                                    <Text color={'gray.500'}>
                                        Project made with <Text color="green.200" as={'b'}> Django (Python)</Text>
                                        , and <Text color="green.200" as={'b'}>React (JavaScript</Text>)
                                        , the music is downloaded automatically by connecting to the Spotify <Text color="green.200" as={'b'}>API </Text>
                                        to download the song data (such as images, name, album, etc.), while the song is downloaded with a library to download audios from YouTube, using the information collected from Spotify, all this is stored in a local database in <Text color="green.200" as={'b'}>MySQL</Text>
                                        , this is done through custom commands programmed in <Text color="green.200" as={'b'}>Python</Text>
                                        , each user can make their own account, with custom playlists.
                                    </Text>
                                    <Divider />
                                    <CardFooter justifyContent={'center'}>
                                        <HStack>
                                            <Link href='https://github.com/TheIcySpark/django-music-app'>
                                                <IconButton aria-label={''} icon={<FaGithub />} colorScheme='gray'>
                                                </IconButton>
                                            </Link>
                                            <Link href='https://www.youtube.com/watch?v=SvrwKZk7tT4&ab_channel=IsaacManjarrezleyva'>
                                                <IconButton aria-label={''} icon={<FaYoutube />} colorScheme='red'>
                                                </IconButton>
                                            </Link>
                                        </HStack>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Heading color={'blue.400'}>Path finder visualizer</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <Card maxW={'lg'} variant="outline">
                                <CardBody>
                                    <Image src="images/pathFinderVisualizer.png"></Image>
                                    <Divider></Divider>
                                    <Text color={'gray.500'}>
                                        Application created using <Text color="green.200" as={'b'}>React JS</Text>
                                        , the application is intended to show how to perform different <Text color="green.200" as={'b'}>algorithms </Text>
                                        when used in searches from a point A, to a point B, it is possible to select from a set of different search algorithms, and set the points A and B.
                                    </Text>
                                    <Divider />
                                    <CardFooter justifyContent={'center'}>
                                        <HStack>
                                            <Link href='https://visualizador-buscador.web.app/'>
                                                <IconButton aria-label={''} icon={<AiOutlineCloudServer />} colorScheme='cyan'>
                                                </IconButton>
                                            </Link>
                                            <Link href='https://github.com/TheIcySpark/Visualizador-buscador-de-caminos'>
                                                <IconButton aria-label={''} icon={<FaGithub />} colorScheme='gray'>
                                                </IconButton>
                                            </Link>
                                            <Link href='https://www.youtube.com/watch?v=3pnwV86JDyk&t=9s&ab_channel=IsaacManjarrezleyva'>
                                                <IconButton aria-label={''} icon={<FaYoutube />} colorScheme='red'>
                                                </IconButton>
                                            </Link>
                                        </HStack>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Heading color={'blue.400'}>Sort visualizer</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <Card maxW={'lg'} variant={'outline'}>
                                <CardHeader>
                                    <Heading color={'blue.400'}>Sort visualizer</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Image src="images/sortVisualizer.png"></Image>
                                    <Divider></Divider>
                                    <Text color={'gray.500'}>
                                        Application created using <Text color="green.200" as={'b'}>React JS</Text>
                                        , it is composed of a set of different popular <Text color="green.200" as={'b'}>algorithms</Text> used to sort data, it is a graphical interface that sorts the data so that it is possible to visualize the sorting process.
                                    </Text>
                                    <Divider />
                                    <CardFooter justifyContent={'center'}>
                                        <HStack>
                                            <Link href='https://visualizador-ordenamientos.web.app/'>
                                                <IconButton aria-label={''} icon={<AiOutlineCloudServer />} colorScheme='cyan'>
                                                </IconButton>
                                            </Link>
                                            <Link href='https://github.com/TheIcySpark/Visualizador-Ordenamientos'>
                                                <IconButton aria-label={''} icon={<FaGithub />} colorScheme='gray'>
                                                </IconButton>
                                            </Link>
                                            <Link href='https://www.youtube.com/watch?v=ALpLMqqhjmQ&ab_channel=IsaacManjarrezleyva'>
                                                <IconButton aria-label={''} icon={<FaYoutube />} colorScheme='red'>
                                                </IconButton>
                                            </Link>
                                        </HStack>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion>
                <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Heading color={'blue.400'}>Artificial intelligence glove</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <Card maxW={'lg'} variant={'outline'}>
                                <CardBody>
                                    <Image src="images/glove.png"></Image>
                                    <Divider></Divider>
                                    <Text color={'gray.500'}>
                                        The project consists of a glove which has different <Text color="green.200" as={'b'}>sensors </Text>
                                        connected to detect how much each finger is flexed, from this the user can create an alphabet with defined letters, and is <Text color="green.200" as={'b'}>loaded </Text>
                                        into the program that letter is being represented in the glove, these <Text color="green.200" as={'b'}>data </Text>
                                        are used to <Text color="green.200" as={'b'}>train </Text> a <Text color="green.200" as={'b'}>neural network</Text>
                                        , which is used to identify which letter is being represented in the glove.
                                    </Text>
                                    <Divider />
                                    <CardFooter justifyContent={'center'}>
                                        <HStack>
                                            <Link href='https://github.com/TheIcySpark/Flex-Sensors-Glove'>
                                                <IconButton aria-label={''} icon={<FaGithub />} colorScheme='gray'>
                                                </IconButton>
                                            </Link>
                                            <Link href='https://www.youtube.com/watch?v=VqprLYphfFU&ab_channel=IsaacManjarrezleyva'>
                                                <IconButton aria-label={''} icon={<FaYoutube />} colorScheme='red'>
                                                </IconButton>
                                            </Link>
                                        </HStack>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Heading color={'blue.400'}>PDF report generator</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <Card maxW={'lg'} variant={'outline'}>
                                <CardBody>
                                    <Image src="images/pdfReportGUI.png"></Image>
                                    <Divider></Divider>
                                    <Text color={'gray.500'}>
                                        <Text color="green.200" as={'b'}>Desktop application </Text>, made with <Text color="green.200" as={'b'}>java</Text>
                                        . An application was needed to generate a report in pdf format running in windows, this to avoid using a word document where by some mistake the format could be wrong, so in the application there was the field to complete and a button to generate the corresponding pdf file format.
                                    </Text>
                                    <Divider />
                                    <CardFooter justifyContent={'center'}>
                                        <HStack>
                                            <Link href='https://github.com/TheIcySpark/Java-pdf-report-generator'>
                                                <IconButton aria-label={''} icon={<FaGithub />} colorScheme='gray'>
                                                </IconButton>
                                            </Link>
                                        </HStack>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Heading color={'blue.400'}>Movies database</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <Card maxW={'lg'} variant={'outline'}>
                                <CardBody>
                                    <Image src="images/moviesDatabase.png"></Image>
                                    <Divider></Divider>
                                    <Text color={'gray.500'}>
                                        Web application created with <Text color="green.200" as={'b'}>ASP.Net Core</Text>
                                        , uses OAuth2 authentication for access to users by saving them in a <Text color="green.200" as={'b'}>SQL </Text>
                                        database which is manipulated within the framework with <Text color="green.200" as={'b'}>C#</Text>
                                        , as well as having a record of the different data of the film. The database connects to the IMDB <Text color="green.200" as={'b'}>API </Text>
                                        to update its data.
                                    </Text>
                                    <Divider />
                                    <CardFooter justifyContent={'center'}>
                                        <HStack>
                                            <Link href='https://github.com/TheIcySpark/PAM'>
                                                <IconButton aria-label={''} icon={<FaGithub />} colorScheme='gray'>
                                                </IconButton>
                                            </Link>
                                            <Link href='https://www.youtube.com/watch?v=xSsXQeolOvI&feature=emb_imp_woyt'>
                                                <IconButton aria-label={''} icon={<FaYoutube />} colorScheme='red'>
                                                </IconButton>
                                            </Link>
                                        </HStack>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Heading color={'blue.400'}>School managment system</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <Card maxW={'lg'} variant={'outline'}>
                                <CardBody>
                                    <Image src="images/schoolManagmentSystem.png"></Image>
                                    <Divider></Divider>
                                    <Text color={'gray.500'}>
                                        School managment system, which is able to keep track of members within a school and books and set of books within an academic space, the application supports different types of users, such as students, library administrator, managment system (administrator), and each of the users have different levels of access to the application having security through <Text color="green.200" as={'b'}>authorization </Text>
                                        and <Text color="green.200" as={'b'}>authentication</Text>.
                                        The application interface is created with <Text color="green.200" as={'b'}>React</Text>
                                        , while the backend was created with <Text color="green.200" as={'b'}>java Spring</Text>.
                                        The data is stored with <Text color="green.200" as={'b'}>SQL. </Text>
                                        <Text color="green.200" as={'b'}>Postman </Text>
                                        was used to test the communication.
                                    </Text>
                                    <Divider />
                                    <CardFooter justifyContent={'center'}>
                                        <HStack>
                                            <Link href='https://github.com/TheIcySpark/Control-Scholar'>
                                                <IconButton aria-label={''} icon={<FaGithub />} colorScheme='gray'>
                                                </IconButton>
                                            </Link>
                                            <Link href='https://www.youtube.com/watch?v=QvOo7E49PRM&ab_channel=IsaacManjarrezleyva'>
                                                <IconButton aria-label={''} icon={<FaYoutube />} colorScheme='red'>
                                                </IconButton>
                                            </Link>

                                        </HStack>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </SimpleGrid>
        </>
    )

}