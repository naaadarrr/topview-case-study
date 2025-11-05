"use client";

import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import type { FeatureItem } from "@/src/types/caseStudy";

type FeatureListProps = {
  title?: string;
  items: FeatureItem[];
};

export function FeatureList({ title = "What impressed them the most", items }: FeatureListProps) {
  return (
    <Box
      as="section"
      role="region"
      aria-label={title}
      bg="gray.50"
      py={{ base: 10, md: 16 }}
    >
      <Container maxW="6xl">
        <Heading as="h2" size="lg" mb={{ base: 6, md: 8 }} fontWeight="semibold" color="gray.800">
          {title}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
          {items.map((item) => (
            <Stack
              key={item.title}
              spacing={3}
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
              rounded="md"
              p={{ base: 6, md: 8 }}
              color="gray.800"
            >
              <Heading as="h3" size="md" fontWeight="semibold">
                {item.title}
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" lineHeight="tall">
                {item.description}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

