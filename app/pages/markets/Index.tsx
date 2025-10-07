import { MarketsHomePage } from "@orderly.network/markets";
import { generatePageTitle } from "@/utils/utils";
import { getPageMeta } from "@/utils/seo";
import { getRuntimeConfig, getRuntimeConfigBoolean } from "@/utils/runtime-config";
import { renderSEOTags } from "@/utils/seo-tags";

export default function MarketsIndex() {
  const pageMeta = getPageMeta();
  const pageTitle = generatePageTitle("Markets");

  return (
    <>
      {renderSEOTags(pageMeta, pageTitle)}
      <MarketsHomePage
        comparisonProps={{
          exchangesIconSrc:
            getRuntimeConfigBoolean("VITE_HAS_SECONDARY_LOGO")
              ? "/logo-secondary.webp"
              : undefined,
          exchangesName:
            getRuntimeConfig("VITE_ORDERLY_BROKER_NAME"),
        }}
      />
    </>
  );
}

