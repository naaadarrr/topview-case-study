"use client";

import {
  Box,
  Container,
  Wrap,
  WrapItem,
  Badge,
  type ContainerProps,
} from "@chakra-ui/react";
import type { MetaBadge } from "@/src/types/caseStudy";

type MetaBadgesProps = {
  items: MetaBadge[];
  variant?: "section" | "inline";
  containerProps?: ContainerProps;
};

export function MetaBadges({ items, variant = "section", containerProps }: MetaBadgesProps) {
  const BadgeGroup = (
    <Wrap spacing={3}>
      {items.map((badge, index) => (
        <WrapItem key={`${badge.label}-${badge.value}-${index}`}>
          <Badge
            px={3}
            py={1.5}
            rounded="md"
            bg="gray.100"
            color="gray.800"
            fontSize="sm"
            fontWeight="medium"
          >
            {badge.label}: {badge.value}
          </Badge>
        </WrapItem>
      ))}
    </Wrap>
  );

  if (variant === "inline") {
    return BadgeGroup;
  }

  return (
    <Box as="section" role="region" aria-label="Meta" py={{ base: 6, md: 8 }}>
      <Container maxW="6xl" {...containerProps}>
        {BadgeGroup}
      </Container>
    </Box>
  );
}

