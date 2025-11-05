"use client";

import {
  Box,
  Container,
  Grid,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import type { Stat, SectionBlock } from "@/src/types/caseStudy";

type KeyResultsSplitProps = {
  stats: Stat[];
  narrative: {
    title: string;
    paragraphs: string[];
  };
  sections?: SectionBlock[];
  highlightsLabel?: string;
};

export function KeyResultsSplit({
  stats,
  narrative,
  sections = [],
  highlightsLabel = "Key highlights",
}: KeyResultsSplitProps) {
  return (
    <Box as="section" role="region" aria-label="Key highlights and context" py={{ base: 12, md: 20 }}>
      <Container maxW="6xl" color="gray.800" px={{ base: 6, xl: 0 }}>
        <Grid templateColumns={{ base: "1fr", md: "280px minmax(0, 1fr)" }} gap={{ base: 12, md: 24 }} alignItems="start">
          <Stack spacing={6} maxW={{ md: "280px" }}>
            <Heading as="h2" fontSize="16px" fontWeight="400">
              {highlightsLabel}
            </Heading>
            <Stack spacing={4}>
              {stats.map((item) => (
                <Box
                  key={`${item.label}-${item.value}`}
                  borderWidth={0}
                  borderRadius="10px"
                  p={0}
                  bg="white"
                >
                  <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="semibold" color="#4E40F3">
                    {item.value}
                  </Text>
                  <Text fontSize="16px" fontWeight="medium" color="#000">
                    {item.label}
                  </Text>
                </Box>
              ))}
            </Stack>
            <Stack
              borderRadius="12px"
              bg="rgba(111, 99, 255, 0.08)"
              p={{ base: 6, md: 8 }}
              spacing={4}
              align="flex-start"
              mt={{ base: 10, md: 12 }}
            >
              <Heading as="h3" fontSize={{ base: "lg", md: "20px" }} fontWeight="700">
                See what Topview can do for you
              </Heading>
              <Button
                bg="#4E40F3"
                color="white"
                _hover={{ bg: "#3d32c4" }}
                borderRadius="full"
                px={8}
                py={6}
                fontWeight="semibold"
                alignSelf="flex-start"
              >
                Learn more
              </Button>
            </Stack>
          </Stack>

          <Stack spacing={10}>
            <Stack spacing={6}>
              <Heading as="h2" fontSize={{ base: "2xl", md: "32px" }} fontWeight="700">
                {narrative.title}
              </Heading>
              {narrative.paragraphs.map((paragraph, index) => (
                <Text key={`narrative-${index}`} fontSize="16px" lineHeight="tall" color="#000">
                  {paragraph}
                </Text>
              ))}
            </Stack>

            {sections.map((section) => (
              <Stack key={section.title} spacing={4}>
                <Heading as="h3" fontSize={{ base: "xl", md: "28px" }} fontWeight="700">
                  {section.title}
                </Heading>
                {section.paragraphs?.map((paragraph, index) => (
                  <Text key={`${section.title}-p-${index}`} fontSize="16px" lineHeight="tall" color="#000">
                    {paragraph}
                  </Text>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <List spacing={3} styleType="none">
                    {section.bullets.map((bullet, index) => (
                      <ListItem key={`${section.title}-b-${index}`} display="flex" alignItems="flex-start" color="#000">
                        <Text as="span" mr={2} aria-hidden>
                          –
                        </Text>
                        <Text as="span" flex="1" fontSize="16px">
                          {bullet.text}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
}

