"use client";

import {
  Box,
  Container,
  Heading,
  Grid,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import type { MetaBadge } from "@/src/types/caseStudy";

type HeroProps = {
  title: string;
  company: string;
  overview: string[];
  metaBadges: MetaBadge[];
  breadcrumbs?: { label: string; href?: string }[];
};

export function Hero({ title, company, overview, metaBadges, breadcrumbs }: HeroProps) {
  const crumbs = breadcrumbs ?? [
    { label: "Case studies", href: "/case-studies" },
    { label: company },
  ];

  const groupedBadges = metaBadges.reduce<Record<string, string[]>>((acc, badge) => {
    if (!acc[badge.label]) {
      acc[badge.label] = [];
    }
    acc[badge.label].push(badge.value);
    return acc;
  }, {});

  return (
    <Box
      as="section"
      role="region"
      aria-label="Case Study Hero"
      bgGradient="linear(259deg, #F8E9F7 -0.67%, #FFF6FE 33.64%, #E8E8FF 74.71%, #DAE4F8 101.29%)"
      py={{ base: 12, md: 20 }}
    >
      <Container maxW="6xl" color="#000" px={{ base: 6, xl: 0 }}>
        <Grid
          templateColumns={{ base: "1fr", xl: "minmax(0, 1fr) 384px" }}
          columnGap={{ base: 10, xl: 24 }}
          rowGap={{ base: 10, xl: 0 }}
          alignItems="flex-start"
        >
          <Stack spacing={6} maxW={{ xl: "min(820px, 100%)" }} width="100%" pr={{ xl: 4 }}>
            <Stack direction="row" spacing={2} fontSize="sm" color="gray.500">
              {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;
                return (
                  <Stack key={`${crumb.label}-${index}`} direction="row" spacing={2} align="center">
                    {index > 0 && <Text aria-hidden>•</Text>}
                    {crumb.href && !isLast ? (
                      <Box as="a" href={crumb.href} _hover={{ textDecoration: "underline" }}>
                        {crumb.label}
                      </Box>
                    ) : (
                      <Text fontWeight={isLast ? "medium" : "normal"}>{crumb.label}</Text>
                    )}
                  </Stack>
                );
              })}
            </Stack>

            <Box width="100%">
              <Heading
                as="h1"
                fontWeight="700"
                fontSize={{ base: "2.75rem", md: "68px" }}
                lineHeight={{ base: "1.1", md: "1.05" }}
              >
                {title}
              </Heading>
            </Box>

            <Flex gap={{ base: 6, xl: 10 }} flexWrap={{ base: "wrap", xl: "nowrap" }} mt={8}>
              {Object.entries(groupedBadges).map(([label, values]) => (
                <VStack key={label} align="flex-start" spacing={3} minW="160px">
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    letterSpacing="widest"
                    textTransform="uppercase"
                    color="#4E40F3"
                  >
                    {label}
                  </Text>
                  <Wrap spacing={3}>
                    {values.map((value, index) => (
                      <WrapItem key={`${label}-${value}-${index}`}>
                        <Box
                          px={4}
                          py={2}
                          bg="rgba(111, 99, 255, 0.12)"
                          color="#000"
                          fontWeight="semibold"
                          fontSize="sm"
                          rounded="full"
                        >
                          {value}
                        </Box>
                      </WrapItem>
                    ))}
                  </Wrap>
                </VStack>
              ))}
            </Flex>
          </Stack>

          <Stack
            spacing={6}
            bg="white"
            borderWidth={0}
            borderRadius="12px"
            p={{ base: 6, md: 8 }}
            maxW="384px"
            justifySelf={{ lg: "end" }}
            mt={{ base: 6, lg: 0 }}
          >
            <Flex align="center" gap={2}>
              <Image src="/logos/topview_logo.png" alt={company} boxSize="56px" objectFit="contain" />
              <Text fontWeight="700" fontSize="20px">
                {company}
              </Text>
            </Flex>
            <Stack spacing={4} color="#000" fontSize="16px" lineHeight="tall">
              {overview.map((paragraph, index) => (
                <Text key={index}>{paragraph}</Text>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
}

