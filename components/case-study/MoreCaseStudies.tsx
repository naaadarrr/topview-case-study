"use client";

import NextLink from "next/link";
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
  type BoxProps,
  type ContainerProps,
} from "@chakra-ui/react";
import type { CaseStudyCard } from "@/lib/types/caseStudy";

type MoreCaseStudiesProps = {
  title?: string;
  items: CaseStudyCard[];
  limit?: number;
  showHeading?: boolean;
  py?: BoxProps["py"];
  containerProps?: ContainerProps;
  action?: {
    label: string;
    href: string;
  };
  highlight?: boolean;
};

export function MoreCaseStudies({
  title = "More case studies",
  items,
  limit,
  showHeading = true,
  py,
  containerProps,
  action,
  highlight = false,
}: MoreCaseStudiesProps) {
  const displayedItems = limit ? items.slice(0, limit) : items;
  const sectionPaddingY = py ?? { base: 12, md: 16 };

  return (
    <Box
      as="section"
      role="region"
      aria-label={title}
      bg="#F9F9FB"
      py={sectionPaddingY}
      position="relative"
      zIndex={0}
      overflow="visible"
    >
      {highlight && (
        <Box
          position="absolute"
          top={{ base: "140px", md: "220px" }}
          left="50%"
          transform="translateX(-50%)"
          width={{ base: "360px", md: "520px" }}
          height={{ base: "360px", md: "520px" }}
          borderRadius="9999px"
          bg="#706DFF"
          filter="blur(249px)"
          opacity={0.35}
          pointerEvents="none"
          zIndex={0}
        />
      )}
      <Container maxW="6xl" px={{ base: 6, lg: 0 }} position="relative" zIndex={1} {...containerProps}>
        {showHeading && (
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={{ base: 6, md: 8 }}>
            <Heading as="h2" size="lg" fontWeight="700" color="#0F172A">
              {title}
            </Heading>
            {action && (
              <Box
                as={NextLink}
                href={action.href}
                border="1px solid rgba(0,0,0,0.12)"
                borderRadius="999px"
                px={4}
                py={2}
                fontSize="sm"
                fontWeight="500"
                color="#0F172A"
                textDecoration="none"
                _hover={{ bg:"rgba(0,0,0,0.03)" }}
              >
                {action.label}
              </Box>
            )}
          </Box>
        )}

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {displayedItems.map((card) => (
            <Stack
              key={card.title}
              as={NextLink}
              href={card.href ?? "#"}
              spacing={5}
              borderWidth="1px"
              borderColor="rgba(0,0,0,0.02)"
              borderRadius="10px"
              p={{ base: 6, md: 7 }}
              bg="#FFFFFF"
              color="#0F172A"
              position="relative"
              transition="all 0.2s ease"
              _hover={{
                boxShadow: "0 20px 48px rgba(15, 23, 42, 0.12)",
                transform: "translateY(-4px)",
              }}
              role="group"
              textDecoration="none"
              cursor="pointer"
            >
              {card.logoSrc && (
                <AspectRatio ratio={5 / 3} w="100%">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#FFFFFF"
                    borderRadius="8px"
                  >
                    <Image
                      src={card.logoSrc}
                      alt={card.logoAlt ?? card.brand}
                      objectFit="contain"
                      maxH="70%"
                      maxW="80%"
                    />
                  </Box>
                </AspectRatio>
              )}

              <Heading
                as="h3"
                fontSize="xl"
                fontWeight="700"
                color="#111827"
                transition="color 0.2s ease"
                _groupHover={{ color: "#6255FF" }}
              >
                {card.title}
              </Heading>

              <Box flex="1" />

              {card.time && (
                <Text fontSize="sm" color="gray.500">
                  {card.time}
                </Text>
              )}
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}


