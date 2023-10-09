'use client'

import {
    Button,
    Flex,
    Heading,
    IconButton,
    Image,
    Link,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'


export default function SplitScreen() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            Software developer
                        </Text>
                        <br />{' '}
                        <Text color={'blue.400'} as={'span'}>
                            Isaac Manjarrez Leyva
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Passionate and dedicated, I am a versatile software developer with a
                        background in computing engineering and a deep love for problemsolving. I've honed my skills through competitive programming.
                        Winner of the Mexican informatic Olympiad (programming tournament) 2017

                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Link href="https://www.linkedin.com/in/isaac-manjarrez-leyva-95382b1b7/?locale=en_US">
                            <IconButton aria-label={''} icon={<FaLinkedin />} colorScheme='linkedin'>
                            </IconButton>
                        </Link>
                        <Link href='https://www.workana.com/freelancer/4ac93b9b35d47395c645def150498732'>
                            <IconButton aria-label={''} icon={<MdWork />} colorScheme='green'>
                            </IconButton>
                        </Link>
                        <Link href='https://github.com/TheIcySpark/'>
                            <IconButton aria-label={''} icon={<FaGithub />} colorScheme='gray'>
                            </IconButton>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Cover'}
                    objectFit={'cover'}
                    src={'images/main.jpg'}
                />
            </Flex>
        </Stack>
    )
}