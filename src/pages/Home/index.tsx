import {Box, Button, Heading, Input, Text} from "@chakra-ui/react";
import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const Home: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [isNameValidated, setNameValidation] = useState<boolean>(false);

    const onStart = () => {
        if (!name) {
            setNameValidation(true);
        } else {
            setNameValidation(false);
        }
    }

    return (
        <Box
            height={'100vh'}
            bgColor={'#212121'}
            display={'flex'}
            justifyContent={'center'}
            alignContent={'center'}
            alignItems={'center'}>
            <Box
                display={'flex'}
                flexDir={'column'}
                alignContent={'center'}
                alignItems={'center'}>
                <Text fontSize={"7xl"} fontFamily={"Bebas Neue"} color={'white'}>Welcome to the Personality Test</Text>
                <Text fontFamily={"Hubballi"} fontSize={"2xl"} color={'white'} mb={10}>What are you? An introvert or an
                    extrovert? Find out by taking the
                    test</Text>
                <Box display={'flex'}>
                    <Box mr={'3'}>
                        <Input
                            isInvalid={isNameValidated}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={'Your name'}

                            value={name}
                            color={'white'}
                        />
                        <Text
                            fontFamily={"Hubballi"}
                            fontSize={"medium"}
                            color={"red.300"}
                            height={"25px"}
                            mt={'2'}>
                            {isNameValidated ? 'Enter your name to start' : ''}
                        </Text>
                    </Box>
                    <Button onClick={onStart}>Start</Button>
                </Box>
            </Box>
        </Box>
    )
};

export default Home;