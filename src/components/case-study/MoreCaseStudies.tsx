"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
  AspectRatio,
  Link,
  Button,
  Flex,
} from "@chakra-ui/react";
import type { CaseStudyCard } from "@/src/types/caseStudy";

type MoreCaseStudiesProps = {
  title?: string;
  items: CaseStudyCard[];
};

export function MoreCaseStudies({ title = "More case studies", items }: MoreCaseStudiesProps) {
  return (
    <Box
      as="section"
      role="region"
      aria-label={title}
      bg="#F6F8FF"
      py={{ base: 10, md: 16 }}
    >
      <Container maxW="6xl" px={{ base: 6, lg: 0 }}>
        <Flex align={{ base: "flex-start", md: "center" }} justify="space-between" mb={{ base: 6, md: 8 }} gap={4} wrap="wrap">
          <Heading as="h2" size="lg" fontWeight="700" color="#0F172A">
            {title}
          </Heading>
          <Button
            variant="outline"
            borderColor="rgba(15, 23, 42, 0.2)"
            color="#0F172A"
            size="sm"
            px={5}
            py={2}
            borderRadius="full"
            fontWeight="600"
            bg="transparent"
            _hover={{ bg: "rgba(15, 23, 42, 0.05)" }}
          >
            View more
          </Button>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
          {items.map((card, index) => (
            <Stack
              key={`${card.title}-${index}`}
              spacing={4}
              borderWidth={0}
              borderRadius="16px"
              p={{ base: 6, md: 7 }}
              bg="white"
              color="#0F172A"
              height="100%"
              position="relative"
              transition="all 0.25s ease"
              _hover={{ bg: "white", boxShadow: "0 20px 48px rgba(15, 23, 42, 0.12)" }}
              role="group"
            >
              <AspectRatio ratio={16 / 9} w="100%" borderRadius="16px" bg="#FFFFFF" overflow="hidden">
                {card.logoSrc ? (
                  <Image
                    src={card.logoSrc}
                    alt={card.logoAlt ?? card.title}
                    objectFit="cover"
                    filter="grayscale(100%)"
                    p={4}
                  />
                ) : (
                  <Text fontWeight="semibold" fontSize="lg" color="gray.600">
                    {card.logoText ?? card.title}
                  </Text>
                )}
              </AspectRatio>
              <Heading as="h3" size="md" fontWeight="700" color="#111827">
                {card.title}
              </Heading>
              <Box flex="1" />
              <Link
                color="#4E40F3"
                fontWeight="600"
                href={card.href ?? "#"}
                textDecoration="none"
                mt="auto"
                _groupHover={{ textDecoration: "underline" }}
              >
                Learn more
              </Link>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

