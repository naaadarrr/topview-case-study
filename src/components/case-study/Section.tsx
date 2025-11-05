"use client";

import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { SectionBlock } from "@/src/types/caseStudy";

type SectionProps = SectionBlock & {
  ariaLabel?: string;
};

export function Section({ title, paragraphs, bullets, ariaLabel }: SectionProps) {
  return (
    <Box
      as="section"
      role="region"
      aria-label={ariaLabel ?? title}
      py={{ base: 10, md: 16 }}
    >
      <Container maxW="6xl" px={{ base: 6, lg: 0 }}>
        <Stack spacing={6} color="#000">
          <Heading as="h2" size="lg" fontWeight="700">
            {title}
          </Heading>
          {paragraphs?.map((paragraph, index) => (
            <Text key={index} fontSize="16px" lineHeight="tall">
              {paragraph}
            </Text>
          ))}
          {bullets && bullets.length > 0 && (
            <List spacing={4} styleType="none">
              {bullets.map((bullet, index) => (
                <ListItem
                  key={`${bullet.text}-${index}`}
                  display="flex"
                  alignItems="flex-start"
                  color="#000"
                  fontSize="16px"
                >
                  <Text as="span" mr={3} mt={1} fontSize="12px" color="#4E40F3" aria-hidden>
                    •
                  </Text>
                  <Text as="span" flex="1">
                    {bullet.text}
                  </Text>
                </ListItem>
              ))}
            </List>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

