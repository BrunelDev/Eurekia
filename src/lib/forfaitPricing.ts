/**
 * Forfait pricing configuration
 * Based on service type (AMO/MOE) and project type (new/renovation)
 */

interface ForfaitPricingConfig {
  percentage: number;
  minimum: number;
}

const FORFAIT_PRICING: Record<
  "AMO" | "MOE",
  Record<"new" | "renovation", ForfaitPricingConfig>
> = {
  AMO: {
    new: { percentage: 3.5, minimum: 3000 },
    renovation: { percentage: 4.5, minimum: 3500 },
  },
  MOE: {
    new: { percentage: 5, minimum: 3200 },
    renovation: { percentage: 6, minimum: 3600 },
  },
};

// Cost of the "Notice descriptive + estimation prévisionnelle" prestation
const ESTIMATION_FEE = 300;

export interface ForfaitPricingResult {
  /** Total price in euros HT, null if cost is unknown */
  totalHT: number | null;
  /** Percentage used for calculation */
  percentage: number;
  /** Minimum price for this configuration */
  minimum: number;
  /** True if cost is pending estimation (user doesn't know the cost) */
  isPendingEstimation: boolean;
  /** Fee for estimation prestation (300€ if pending, 0 otherwise) */
  estimationFee: number;
  /** Calculated price before minimum check (for display purposes) */
  calculatedPrice: number | null;
}

/**
 * Calculate the forfait price based on service type, project type, and estimated cost
 *
 * @param serviceType - "AMO" or "MOE"
 * @param projectType - "new" or "renovation"
 * @param estimatedCost - The user's estimated project cost (undefined if unknown)
 * @param isEstimatedCostKnown - Whether the user knows the cost
 * @returns ForfaitPricingResult with pricing details
 */
export function calculateForfaitPrice(
  serviceType: "AMO" | "MOE",
  projectType: "new" | "renovation",
  estimatedCost: number | undefined,
  isEstimatedCostKnown: boolean | undefined
): ForfaitPricingResult {
  const config = FORFAIT_PRICING[serviceType][projectType];

  // If cost is unknown, return pending estimation result
  if (isEstimatedCostKnown === false || estimatedCost === undefined) {
    return {
      totalHT: null,
      percentage: config.percentage,
      minimum: config.minimum,
      isPendingEstimation: true,
      estimationFee: ESTIMATION_FEE,
      calculatedPrice: null,
    };
  }

  // Calculate price based on percentage
  const calculatedPrice = estimatedCost * (config.percentage / 100);

  // Apply minimum
  const finalPrice = Math.max(calculatedPrice, config.minimum);

  return {
    totalHT: finalPrice,
    percentage: config.percentage,
    minimum: config.minimum,
    isPendingEstimation: false,
    estimationFee: 0,
    calculatedPrice,
  };
}

/**
 * Get the pricing configuration for a given service and project type
 */
export function getForfaitPricingConfig(
  serviceType: "AMO" | "MOE",
  projectType: "new" | "renovation"
): ForfaitPricingConfig {
  return FORFAIT_PRICING[serviceType][projectType];
}

/**
 * Format price for display
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

/**
 * Get a description of the pricing for display
 */
export function getPricingDescription(
  serviceType: "AMO" | "MOE",
  projectType: "new" | "renovation"
): string {
  const config = FORFAIT_PRICING[serviceType][projectType];
  const projectLabel = projectType === "new" ? "Neuf" : "Rénovation";
  return `${serviceType} ${projectLabel}: ${config.percentage}% du coût prévisionnel (min. ${formatPrice(config.minimum)} HT)`;
}
