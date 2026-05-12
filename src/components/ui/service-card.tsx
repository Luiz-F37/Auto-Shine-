import { RadioCard, RadioCardItemProps, Text, VStack } from "@chakra-ui/react";

interface ServiceCardItemProps extends RadioCardItemProps{
    id: string;
    name: string;
    description: string;
    price: string;
}

export function ServiceCardItem({ id, name, description, price , ...rest }: ServiceCardItemProps) {
    return (
        <RadioCard.Item value={id} 
            p={5} 
            rounded="xl" 
            _checked={{ borderColor: "yellow.500", shadowColor: "yellow.500" }} 
            _hover={{ borderColor: "yellow.500", shadowColor: "yellow.500", bg: "gray.950" }}
            transition="all 0.6s"
            >
        
           <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl justifyContent="space-between">
                <VStack alignItems="start">
                    <RadioCard.ItemText fontSize="lg" fontWeight="semibold" color="yellow.300">{name}</RadioCard.ItemText>
                    <RadioCard.ItemDescription color="fg.muted" fontSize="sm">{description}</RadioCard.ItemDescription>
                </VStack>
        
                <Text>{price}</Text>
            </RadioCard.ItemControl>
        </RadioCard.Item>
    )
}