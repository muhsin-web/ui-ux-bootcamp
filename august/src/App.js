import logo from './logo.svg';
import './App.css';
import HeroBanner from './components/HeroBanner';
import AboutUs from './components/AboutUs';
import { Flex, Text, Button } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Flex justify={'space-between'} padding={'20px'} align={'center'} maxW={'1170px'} margin={'0 auto'}>
        <Text color={'#A18CC6'} fontWeight={'700'} fontSize={'16px'}>UI/UX Bootcanp</Text>
        <Button width={'180px'} height={'60px'} fontSize={'16px'} bg={'#A18CC6'} color={'#fff'} rounded={'full'}>Get Started</Button>
      </Flex>
      <HeroBanner />
      <AboutUs />
    </div>
  );
}

export default App;
