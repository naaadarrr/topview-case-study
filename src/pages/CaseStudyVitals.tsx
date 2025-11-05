"use client";

import { Box } from "@chakra-ui/react";
import { Hero } from "@/src/components/case-study/Hero";
import { KeyResultsSplit } from "@/src/components/case-study/KeyResultsSplit";
import { MoreCaseStudies } from "@/src/components/case-study/MoreCaseStudies";
import {
  hero,
  metaBadges,
  stats,
  keyResultsNarrative,
  sections,
  moreCaseStudies,
} from "@/src/data/caseStudyVitals";

export function CaseStudyVitalsPage() {
  return (
    <Box as="main" role="main" bg="white">
      <Box mb="96px">
        <Hero
          title={hero.title}
          company={hero.company}
          overview={hero.overview}
          metaBadges={metaBadges}
        />
      </Box>
      <Box mb="96px">
        <KeyResultsSplit stats={stats} narrative={keyResultsNarrative} sections={sections} />
      </Box>
      <MoreCaseStudies items={moreCaseStudies} />
    </Box>
  );
}

export default CaseStudyVitalsPage;

