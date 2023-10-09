'use client'

import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
} from '@chakra-ui/react'

export default function AboutMe() {
    return (
        <>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        <br />
                        <Text as={'span'} color={'green.400'}>
                            About Me
                        </Text>
                    </Heading>
                    <Text color={'gray.500'} >
                        As a freelance developer, I have had the opportunity to work on
                        various web application projects using technologies such as React,
                        Java, TypeScript, AWS, and Firebase.

                        Always looking to work in a team, I like to have a cordial relationship
                        with my colleagues, with a taste for teaching and learning from the
                        people around me
                    </Text>
                </Stack>
            </Container>
        </>
    )
}
