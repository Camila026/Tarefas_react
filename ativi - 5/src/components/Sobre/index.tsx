import { Stack, useColorModeValue, Text, Box, } from "@chakra-ui/react";

export default function SobreLayout(){
    return(
        <>
        <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
             <Box textAlign={'center'}>
        <Text fontSize={"xl"}></Text>
        <Text fontSize={"lg"} color={"red.500"}>
          
        </Text>
      </Box>
      <Text fontSize={"x-large"} textAlign={'center'} maxW={'3xl'}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Blanditiis similique aliquam maxime doloremque quos voluptatum harum asperiores quia, 
      officia quas illo voluptatem recusandae ab accusamus totam molestiae pariatur eveniet. 
      Iure.
      </Text>
 
    </Stack>
    </>
    )
}