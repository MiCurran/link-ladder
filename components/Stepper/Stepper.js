import { Box, Stack } from "@chakra-ui/react";

export default function Stepper ({steps, setCurrentStep}) {
    return (
        <Box>
            <Stack
                flexDirection={{base: 'column', md: 'row'}}
                alignItems={'center'}
            >
                {steps.map((step, i) => {
                    if (i < steps.length - 1){
                        return (
                            <>
                                <Box
                                onClick={() => setCurrentStep(i)}
                                h={10}
                                w={10}
                                bgColor={`blue.${i +1}00`}
                                rounded={'full'}
                                cursor={'pointer'}
                            >
                            </Box>
                            <Box  h={2} w={'full'} bgColor={`blue.${steps.length}00`}/>
                            </>
                        )
                    }
                    else {
                        return (
                            <Box
                                onClick={() => setCurrentStep(i)}
                                h={10}
                                w={10}
                                bgColor={`blue.${i +1}00`}
                                rounded={'full'}
                                cursor={'pointer'}
                            >
                                {i + 1}
                            </Box>
                        )
                    }
                })}
            </Stack>
        </Box>
    )
};