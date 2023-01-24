import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  createIcon,
  IconProps,
  useColorModeValue,
  StackDivider,
  SimpleGrid,
  Image,
  Box,
} from '@chakra-ui/react';

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';

import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

import CurrencyConverter from '../components/CurrencyConverter';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const Feature2 = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={'full'}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function LandingPage() {
  return (
    <Box overflow={'hidden'}>
      <Container maxW={'6xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'secondary.400',
                  zIndex: -1,
                }}
              >
                Break borders with
              </Text>
              <br />
              <Text as={'span'} color={'secondary.400'}>
                PandaBank
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              PandaBank makes cross-border payments easy and affordable. With
              our platform, you can send and receive payments to individuals and
              businesses in other countries at competitive exchange rates and
              low fees. Our platform is integrated into the Ethereum blockchain,
              ensuring the safety and security of your transactions. Track the
              status of your payments with ease and say goodbye to high
              transaction fees.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
              >
                How It Works
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('secondary.50', 'secondary.400')}
            />

            <CurrencyConverter />
          </Flex>
        </Stack>
      </Container>
      <Container maxW={'6xl'} py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              Our Story
            </Text>
            <Heading>A digital Product design agency</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }
            >
              <Feature
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={'yellow.500'}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Business Planning'}
              />
              <Feature
                icon={
                  <Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Financial Planning'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Market Analysis'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Container maxW={'6xl'} py={20}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature2
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Competitive Exchange Rates'}
            text={
              'Low Fees, High Savings: Enjoy competitive exchange rates with PandaBank'
            }
          />
          <Feature2
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title={'Multiple Currency Support: '}
            text={
              'Multiple Currency Support: Send and receive payments in different currencies with PandaBank'
            }
          />
          <Feature2
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={'Real-time Transaction Tracking'}
            text={
              'Stay Secure and Informed: Track your transactions in real-time with Ethereum Blockchain on PandaBank'
            }
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};