/* eslint-disable @next/next/no-html-link-for-pages */
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { LuArrowLeft } from "react-icons/lu";

export default function Agendar() {
    const steps = useSteps({
        defaultStep: 1,
        count: itens.length,
    });

    
    const router = useRouter();


    

    return(
        <VStack as="main" gap={0}>
            <VStack w="100v" as="section" align={"start"} pt={28} pb={16} px={6}>
                <Button variant={"ghost"} rounded={"lg"} mb={6} asChild>
                    <a href="/">
                      <LuArrowLeft />
                        {steps.value > 1 ? "Voltar" : "Início"}
                    </a>
                </Button>

                <Heading as="h1">Agendar Serviço</Heading>
                <Text>Passo {steps.value} de {steps.count}</Text>

            </VStack>
        </VStack>
    )
}
