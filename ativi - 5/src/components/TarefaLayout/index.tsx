import { Box, Center, Divider, Flex, Heading, Stack } from "@chakra-ui/react";
import InputTask from "../InputTask";
import ItemTask from "../ItemTask";


export default function TarefaLayout() {
    return (
        <Box>
            <Stack spacing={3} alignItems="center">
                <Heading fontSize={"2xl"}>Lista de Tarefas</Heading>
            </Stack>
            <Center>
                <Divider width="50%" fontWeight="extrabold" mb="20px" />
            </Center>

            <Center>
                <InputTask margem="40px" />
            </Center>
            <Center>
                <Divider width="50%" fontWeight="200" mb="20px" />
            </Center>
            <Center>
            <Flex flexDirection="column">
                <ItemTask tarefa="Tarefa 1"/>
                <ItemTask tarefa="Tarefa 2"/>
                <ItemTask tarefa="Tarefa 3"/>
            </Flex>
            </Center>
        </Box>
    )
}