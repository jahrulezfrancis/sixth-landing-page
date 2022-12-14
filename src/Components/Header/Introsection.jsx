import { Box } from '@chakra-ui/react';
import React from 'react';
import Navigation, { MobileMenu } from './Navigation';
import { WelcomeBox } from './Navigation';

export default function IntroSection() {
    return (
        <Box bgColor='#000000' minH='50em'>
            <Navigation />
            <MobileMenu />
            <WelcomeBox />
        </Box>
    )
}