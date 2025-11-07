import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { CaseStudiesHero } from "@/components/case-study/CaseStudiesHero";
import { MoreCaseStudies } from "@/components/case-study/MoreCaseStudies";
import { moreCaseStudies } from "@/lib/caseStudyVitals";

export default function HomePage() {
  return (
    <Box as="main" bg="#F9F9FB">
      <CaseStudiesHero />

      <Box mt="160px">
        <Container maxW="5xl" px={{ base: 6, lg: 0 }} textAlign="center">
          <Heading
            fontSize={{ base: "32px", md: "45px" }}
            lineHeight={{ base: "40px", md: "52px" }}
            fontWeight="extrabold"
            color="#0F172A"
            mb={4}
          >
            Brands That Trust Topview
          </Heading>
          <Text
            fontSize={{ base: "md", md: "18px" }}
            lineHeight={{ base: "24px", md: "24px" }}
            color="gray.600"
            maxW="3xl"
            mx="auto"
          >
            From small Shopify stores to global e-commerce brands — Topview powers thousands of AI-generated product videos every day.
          </Text>
        </Container>
      </Box>

      <Box mt="64px">
        <MoreCaseStudies
          title="Case studies"
          items={moreCaseStudies}
          limit={5}
          showHeading={false}
          py={0}
          highlight
        />
      </Box>
    </Box>
  );
}
