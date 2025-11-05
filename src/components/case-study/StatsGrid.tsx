"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Heading,
} from "@chakra-ui/react";
import type { Stat as StatType } from "@/src/types/caseStudy";

type StatsGridProps = {
  title?: string;
  stats: StatType[];
};

export function StatsGrid({ title = "Key results", stats }: StatsGridProps) {
  return (
    <Box
      as="section"
      role="region"
      aria-label="Key results"
      bg="gray.50"
      py={{ base: 10, md: 16 }}
    >
      <Container maxW="6xl">
        <Heading
          as="h2"
          size="lg"
          mb={{ base: 6, md: 8 }}
          color="gray.800"
          fontWeight="semibold"
        >
          {title}
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={{ base: 4, md: 6 }}>
          {stats.map((item) => (
            <Box
              key={item.label}
              borderWidth="1px"
              borderColor="gray.200"
              rounded="md"
              p={{ base: 6, md: 8 }}
              bg="white"
            >
              <Stat>
                <StatNumber fontSize="4xl" fontWeight="semibold" color="gray.900">
                  {item.value}
                </StatNumber>
                <StatLabel color="gray.600" fontSize="md">
                  {item.label}
                </StatLabel>
              </Stat>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

