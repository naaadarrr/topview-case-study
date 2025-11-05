"use client";

import { Box, Container, Heading, List, ListItem, Text } from "@chakra-ui/react";
import type { Bullet } from "@/src/types/caseStudy";

type ResultsListProps = {
  title?: string;
  items: Bullet[];
};

export function ResultsList({ title = "Results at a glance", items }: ResultsListProps) {
  return (
    <Box as="section" role="region" aria-label={title} py={{ base: 10, md: 16 }}>
      <Container maxW="6xl">
        <Heading as="h2" size="lg" mb={{ base: 6, md: 8 }} fontWeight="semibold" color="gray.800">
          {title}
        </Heading>
        <List spacing={4} styleType="none">
          {items.map((item, index) => (
            <ListItem
              key={`${item.text}-${index}`}
              borderWidth="1px"
              borderColor="gray.200"
              rounded="md"
              p={{ base: 4, md: 5 }}
              bg="gray.50"
            >
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" lineHeight="tall">
                {item.text}
              </Text>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
}

