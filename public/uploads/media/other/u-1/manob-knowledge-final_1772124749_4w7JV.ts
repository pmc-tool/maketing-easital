/**
 * manob.ai Knowledge Base
 *
 * Comprehensive data source for accurate manob.ai information in all article content.
 * Based on official manob.ai training documentation.
 */

// ============================================================================
// PLATFORM IDENTITY
// ============================================================================

export const MANOB_IDENTITY = {
  name: "manob.ai",
  domain: "manob.ai",
  shortName: "Manob",
  launchYear: 2022,
  tagline: "Workspace Where AI & Humans Build Together",
  founder: "Nowshid Alam Sayem",
} as const;

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export const MANOB_CONTACT = {
  /** Support email */
  email: "support@manob.ai",
  /** Phone number */
  phone: "+8801305080507",
  /** Help/Support page */
  helpUrl: "https://manob.ai/help",
  /** Contact page */
  contactUrl: "https://manob.ai/contact",
  /** Social media */
  socialMedia: {
    facebook: "https://www.facebook.com/manobai",
    instagram: "https://www.instagram.com/manobai/",
    twitter: "https://x.com/manobai",
    youtube: "https://www.youtube.com/@manobai",
    linkedin: "https://www.linkedin.com/company/manobai/",
  },
} as const;

// ============================================================================
// ACCOUNT MANAGEMENT
// ============================================================================

export const ACCOUNT_MANAGEMENT = {
  /** How to delete account */
  accountDeletion: {
    method: "Contact support",
    contact: "support@manob.ai",
    helpUrl: "https://manob.ai/help",
  },
} as const;

/** Unique Value Proposition - key differentiator */
export const UNIQUE_VALUE_PROPOSITION =
  "Unlike competitors (ThemeForest, Fiverr, Upwork), manob.ai allows sellers to manage both digital products AND services from a single account, eliminating the need for multiple platform profiles.";

/** Three core functionalities combined in one platform */
export const PLATFORM_FUNCTIONALITIES = [
  {
    name: "Digital Product Marketplace",
    description: "Buy and sell themes, templates, plugins, scripts, and digital assets",
  },
  {
    name: "Service Marketplace",
    description: "Offer and purchase custom development services",
  },
  {
    name: "Job Board & Bidding Platform",
    description: "Post jobs and hire freelancers through competitive bidding",
  },
] as const;

// ============================================================================
// AI WEBSITE BUILDER
// ============================================================================

export const AI_WEBSITE_BUILDER_FLOW = {
  entry: "Home → Chat (Intent Capture)",
  intentCapture: {
    userPromptExample: "I need an ecommerce website.",
    aiQuestions: ["Website type", "Core features", "Optional tech preferences"],
  },
  planPanel: {
    location: "Left panel",
    description: "Clear checklist of what will be built; stays visible throughout.",
  },
  starterKitSelection: {
    mandatory: true,
    description: "Users must select a starter kit to begin. Vibe coding is only available after selecting a starter kit.",
    options: ["Free Starter Kits", "Paid Starter Kits"],
  },
  starterKitPath: {
    step1: {
      name: "Select Starter Kit (Required)",
      layout: "Chat moves to left sidebar; workspace opens on the right.",
      recommendations: ["Full-stack / frontend", "Free / paid"],
      decision: {
        freeStarter: "Skip payment",
        paidStarter: "Go to checkout",
      },
    },
    step2: {
      name: "Checkout (Paid Only)",
      details: ["Selected starter", "Price", "Payment form"],
    },
    step3: {
      name: "Success",
      options: ["Edit with AI (Vibe Code)", "Hire a Freelancer", "Download"],
      continueWith: "Edit with AI (Vibe Code)",
    },
  },
  vibeCoding: {
    requiresStarterKit: true,
    description: "Vibe coding is available only after selecting a starter kit. Users cannot vibe code from scratch.",
    accessPoint: "After selecting a starter kit, choose 'Edit with AI' to start vibe coding",
    behavior: ["Modifies existing starter kit code", "Creates new pages", "Updates preview in real-time"],
    userControls: ["Keep prompting", "Switch Preview / Code", "Save progress anytime"],
  },
  unifiedWorkspace: {
    afterBuildExists: true,
    layout: {
      left: "Chat + Plan",
      right: "Preview / Code",
    },
  },
  deploymentDecision: {
    mandatoryBeforeGoingLive: true,
    trigger: "User clicks Deploy",
    option1: {
      name: "Deploy to Manob Platform",
      behavior: [
        "Provision hosting",
        "Assign default subdomain: project-name.manob.app",
        "Project goes live immediately; custom domain can be added later",
      ],
    },
    option2: {
      name: "Use a Custom Domain",
      subOptions: {
        buyDomain: {
          name: "Buy a Domain",
          steps: [
            "Search domain",
            "Checkout",
            "Auto-connect domain, configure SSL, deploy live",
          ],
        },
        addExistingDomain: {
          name: "Add Existing Domain",
          steps: [
            "Enter domain",
            "Show DNS instructions",
            "Verify domain, issue SSL, deploy live",
          ],
        },
      },
    },
  },
  postDeployment: {
    capabilities: [
      "Redeploy anytime",
      "Switch domains",
      "Add/remove domains",
      "Continue editing with AI",
      "Hire freelancers",
      "Export/download code",
    ],
  },
  finalFlow:
    "Home → Chat Intent → AI Plan → Select Starter Kit → Build → Vibe Code (Edit with AI) → Workspace → Deploy → (Manob Hosting / Buy Domain / Add Existing Domain) → Live Project",
  keyRules: [
    "Chat is always persistent",
    "Starter kit selection is mandatory - users cannot skip this step",
    "Vibe coding requires a starter kit - cannot vibe code from scratch",
    "Domain choice happens only at deploy time",
    "Every path ends in a live, deployable project",
  ],
} as const;

// ============================================================================
// USER TYPES
// ============================================================================

export const USER_TYPES = {
  buyers: {
    name: "Buyers (Users)",
    capabilities: [
      "Browse and purchase digital products (themes, templates, scripts)",
      "Hire freelancers for custom services",
      "Post job opportunities with competitive bidding",
      "Switch to seller mode at any time",
    ],
  },
  sellers: {
    name: "Sellers",
    capabilities: [
      "List digital products for sale",
      "Offer development services with multiple package tiers",
      "Bid on posted jobs",
      "Manage both products and services from one dashboard",
      "Switch back to buyer mode when needed",
    ],
  },
  admin: {
    name: "Super Admin",
    capabilities: [
      "Manage entire marketplace operations",
      "Approve products, services, and jobs",
      "Control commission structures",
      "Handle disputes and refunds",
      "Oversee financial transactions",
    ],
  },
} as const;

// ============================================================================
// SIGN IN / SIGN UP FLOW
// ============================================================================

export const SIGN_IN_FLOW = {
  /** Web login options */
  webLoginMethods: ["Email + Password", "Continue with Google"],
  /** iOS login options */
  iosLoginMethods: ["Email + Password", "Continue with Google", "Sign in with Apple"],
  /** After login behavior */
  afterLogin: {
    clientOnly: "Goes to normal homepage / client dashboard",
    sellerComplete: "Goes to last visited page; can use profile menu → Switch to Selling",
    sellerIncomplete: "Taken back to seller wizard from the last step",
  },
} as const;

export const SIGN_UP_FLOW = {
  /** Role selection screen */
  roleSelection: {
    screen: "Join as a client or seller",
    options: [
      "I'm a client, hiring for a project",
      "I'm a seller, I will sell my products",
    ],
  },
  /** Registration fields */
  registrationFields: [
    "First name",
    "Last name",
    "Email address",
    "Password",
    "Confirm password",
  ],
  /** After signup behavior */
  afterSignup: {
    client: "Land on homepage / client dashboard. Can later click 'Become a seller' or 'Switch to Selling'",
    seller: "Immediately taken to Seller Onboarding Wizard Step 1",
  },
} as const;

export const BECOME_SELLER_OPTIONS = {
  /** Ways to become a seller */
  entryPoints: [
    "'Become a Seller' CTA (anywhere on site)",
    "Profile Menu → 'Switch to Selling' toggle",
  ],
  /** Behavior when clicked */
  behavior: {
    neverCreatedProfile: "Opens Seller Onboarding Wizard from Step 1",
    alreadyCompletedWizard: "Switches to seller dashboard (no wizard)",
  },
} as const;

// ============================================================================
// SELLER ONBOARDING WIZARD
// ============================================================================

export const SELLER_WIZARD = {
  /** No verification required */
  requiresVerification: false,
  /** Total steps */
  totalSteps: 4,
  /** Steps detail */
  steps: {
    step1: {
      name: "Welcome",
      screen: "Start Earning In Just A Few Steps",
      content: [
        "Set up your profile",
        "Create your services or products",
        "Publish & get discovered",
        "Deliver & earn",
      ],
      button: "Start Setup",
    },
    step2: {
      name: "What Do You Want To Sell?",
      screen: "What Do You Want To Sell?",
      options: [
        "Sell Digital Products",
        "Offer Freelance Services",
        "Bid on Jobs",
        "Do All of the Above",
      ],
      requirement: "Must select an option and agree to T&C",
      buttons: ["Back", "Continue"],
    },
    step3: {
      name: "Choose Categories",
      screen: "Choose Your Favorite Categories",
      exampleCategories: [
        "Software Development",
        "Web Development",
        "Mobile Development",
        "UI Templates",
        "Game Development",
        "Marketing",
        "Blockchain Development",
      ],
      requirement: "Must select at least one category",
      buttons: ["Back", "Add Skills"],
    },
    step4: {
      name: "Add Skills",
      screen: "Add Skill To Reach Client",
      description: "Pick skills from grid (React, Laravel, AWS, etc.) or search",
      requirement: "Must select at least one skill",
      buttons: ["Back", "Publish Profile"],
      onComplete: "Success popup: 'Your seller profile is live.' → Go to Seller Dashboard",
    },
  },
  /** Important notes */
  notes: [
    "No KYC, tax, or payout verification in wizard",
    "Sellers can start listing products/services immediately after wizard",
    "Incomplete wizard resumes from last step on next login",
  ],

  sellerVerificationProgram: {
    description: "Progressive seller verification to balance low-friction onboarding with fraud prevention",

    atSignup: {
      required: ["Email verification", "Phone verification (SMS OTP)"],
      optional: [],
      friction: "Low — 2 extra steps vs current 0 verification",
      purpose: "Prevents bot signups and throwaway accounts",
    },

    atFirstListing: {
      required: ["Profile photo upload", "Bio/description (minimum 50 characters)", "At least 1 skill selected"],
      triggered: "Before first product or service can be published",
      purpose: "Ensures minimum profile completeness for buyer trust",
    },

    atFirstPayout: {
      required: ["Government ID verification via Stripe Identity", "Bank account verification", "Tax information (country-dependent)"],
      triggered: "Before first withdrawal request is processed",
      purpose: "KYC/AML compliance. Deferred to payout to avoid blocking seller onboarding.",
      note: "This is the existing approach — Stripe Identity handles ID verification at payout setup.",
    },

    atScaleThresholds: {
      tier1: { trigger: "$1,000 cumulative GMV", requirement: "Stripe Identity re-verification if not completed", purpose: "Ensure all earning sellers are verified" },
      tier2: { trigger: "$10,000 cumulative GMV", requirement: "Enhanced due diligence (EDD) — business registration or freelancer certificate", purpose: "Regulatory compliance for high-volume sellers" },
    },

    fraudPrevention: {
      automatedChecks: [
        "Duplicate content detection: compare new listings against existing marketplace inventory and known ThemeForest/CodeCanyon products",
        "Plagiarism check: code similarity analysis on uploaded files",
        "Account linking: detect multiple accounts from same IP/device/payment method",
        "Velocity limits: max 5 new listings per day for new sellers (first 30 days)",
      ],
      manualReview: {
        productApproval: "All products go through 3-7 day manual review (existing policy)",
        serviceApproval: "All services go through 24-48 hour review (existing policy)",
        priorityQueue: "Verified sellers (ID + established track record) get expedited 24-hour product review",
      },
      penaltyForFraud: "Immediate account suspension + withholding of pending payouts + permanent ban for confirmed fraud (per existing ACCOUNT_ENFORCEMENT policy)",
    },
  },
} as const;

// ============================================================================
// COMMISSION & PRICING STRUCTURE
// ============================================================================
//
// PRODUCTS: 30% manob.ai / 70% seller (on support fee + product price)
//   - Buyer fee: Category-specific (100% to manob.ai, set by admin)
//   - Support fee: 10% of net price (after buyer fee)
//   - Product price: Net price minus support fee
//   - Commission applied to: support fee + product price
//
// SERVICES: 20% manob.ai / 80% seller
//
// EARLY BIRD: 10% manob.ai / 90% seller (both products & services)
//
// Example: $100 product with 5% buyer fee = $5 (regular seller):
//   Net = $95, Support fee = $9.50, Product price = $85.50
//   manob.ai gets: $5 + (30% × $95) = $5 + $28.50 = $33.50
//   Seller gets: 70% × $95 = $66.50
// ============================================================================

export const COMMISSION_STRUCTURE = {
  products: {
    /** Regular sellers */
    regular: {
      manobShare: 30, // 30% of (support fee + product price)
      sellerShare: 70, // 70% of (support fee + product price)
    },
    /** Early bird sellers (promotional) */
    earlyBird: {
      manobShare: 10, // 10% of (support fee + product price)
      sellerShare: 90, // 90% of (support fee + product price)
    },
    /** Buyer fee goes 100% to manob.ai (varies by category, admin-controlled) */
    buyerFeeToManob: 100,
    /** Support fee is 10% of net price (after buyer fee) */
    supportFeePercent: 10,
  },

  services: {
    /** Regular sellers */
    regular: {
      manobShare: 20, // 20% commission
      sellerShare: 80, // 80% to seller
    },
    /** Early bird sellers */
    earlyBird: {
      manobShare: 10,
      sellerShare: 90,
    },
  },

  /** No monthly fees */
  monthlyFees: 0,
  /** No listing fees */
  listingFees: 0,

  /** Early bird program — explicit duration and transition plan */
  earlyBird: {
    products: { platformCommission: 10, sellerShare: 90 },
    services: { platformCommission: 10, sellerShare: 90 },
    durationMonths: 12,
    transitionPlan: {
      month10: "Email notification: early bird ending in 60 days",
      month11: "Dashboard banner + reminder: 30 days remaining",
      month12: "Transition to regular rates with 14-day grace period",
      graduationIncentive: "Top early bird sellers (>$5K GMV) get 15% commission for 6 more months instead of jumping to 20-30%",
    },
    maxEarlyBirdSellers: 5000,
    sunsetTrigger: "Program closes when platform reaches 10,000 active buyers OR 5,000 early bird sellers, whichever comes first",
    churnModeling: {
      description: "Expected seller behavior when transitioning from 10% early bird to regular commission rates",
      scenarios: {
        optimistic: {
          churnRate: 0.15,
          rationale: "15% churn — sellers with strong buyer relationships stay. Platform delivers enough traffic to justify higher rates.",
          revenueImpact: "85% of early bird sellers transition. Net revenue per seller increases 2x despite volume loss. Net positive.",
        },
        realistic: {
          churnRate: 0.30,
          rationale: "30% churn — price-sensitive sellers leave for Upwork (20% on first $500). Sellers with low GMV exit.",
          revenueImpact: "70% transition. Revenue per remaining seller doubles. Break-even if 50%+ of churned sellers had <$500 lifetime GMV.",
        },
        pessimistic: {
          churnRate: 0.50,
          rationale: "50% churn — aggressive competitor response, poor buyer traffic, sellers see no value at higher rates.",
          revenueImpact: "50% transition. Revenue per seller doubles but total seller count drops significantly. Requires aggressive re-acquisition.",
        },
      },
      mitigationStrategies: [
        "Graduation incentive: Top sellers (>$5K GMV) get 15% for 6 more months",
        "60-day advance notice with dashboard banners",
        "Seller success data showing earnings growth to justify rate increase",
        "Loyalty badge and search ranking boost for graduated sellers",
      ],
      planningBasis: "Use realistic scenario (30% churn) for financial projections. At 5,000 early bird sellers, expect ~3,500 to transition and ~1,500 to churn.",
    },
  },

  /** Early bird description for content */
  earlyBirdDescription: "Early bird sellers enjoy reduced commission rates for your first 12 months: only 10% on products (instead of 30%) and 10% on services (instead of 20%).",

  /** Graduated service commission — decreases with lifetime GMV to stay competitive with Upwork */
  graduatedServiceCommission: {
    description: "Graduated service commission that decreases with lifetime GMV, making manob.ai competitive for large contracts",
    tiers: [
      { lifetimeGMV: "$0 - $5,000", commissionRate: 20, sellerKeeps: 80, note: "Standard rate — competitive with Fiverr (20%)" },
      { lifetimeGMV: "$5,001 - $20,000", commissionRate: 15, sellerKeeps: 85, note: "Reward for growing on the platform" },
      { lifetimeGMV: "$20,001 - $50,000", commissionRate: 10, sellerKeeps: 90, note: "Competitive with Upwork's mid-tier (10%)" },
      { lifetimeGMV: "$50,001+", commissionRate: 7, sellerKeeps: 93, note: "Best-in-class for high-volume sellers, below Upwork's 5% but sustainable" },
    ],
    earlyBirdOverride: "Early bird sellers maintain 10% flat rate for 12 months regardless of GMV tier. After early bird expires, they enter the graduated system at their current GMV tier.",
    competitiveComparison: {
      upwork: "20% on first $500 → 10% on $500-$10K → 5% over $10K (per-client, resets)",
      fiverr: "20% flat (no graduation)",
      manob: "20% → 15% → 10% → 7% (lifetime GMV, never resets — rewards long-term sellers)",
    },
    revenueImpact: {
      blendedRate: "At scale with diverse seller base, expected blended service commission: 14-16% (vs. flat 20%). Revenue impact: -20 to -30% on service commissions, offset by higher seller retention and larger transaction volume.",
      breakEvenNote: "Break-even calculations use 20% (Tier 1) as the conservative base. As sellers graduate to lower tiers, increased volume is expected to offset the lower rate.",
    },
  },
} as const;

/** Extended support pricing */
export const EXTENDED_SUPPORT_PRICING = {
  /** At purchase (with product) - 30% of product price for +6 months */
  atPurchase: 30,
  /** During free support period - 45% of product price for +6 months */
  duringFreePeriod: 45,
  /** After free support expires - 75% of product price for +6 months */
  afterExpiry: 75,
} as const;

// ============================================================================
// LICENSING MODELS
// ============================================================================

export const LICENSE_TYPES = {
  regular: {
    name: "Regular License",
    features: [
      "Single end-use project",
      "Not for resale or redistribution",
      "Buyer fee: Category-specific (admin-controlled)",
      "Included: 6 months free support",
    ],
  },
  extended: {
    name: "Extended License",
    features: [
      "Multiple end-use projects",
      "Commercial use allowed",
      "Higher buyer fee (admin-controlled)",
      "Included: 6 months free support",
    ],
  },
} as const;

/** Non-exclusive policy - major differentiator */
export const EXCLUSIVITY_POLICY =
  "NON-EXCLUSIVE: Sellers can sell the same product on multiple marketplaces simultaneously (ThemeForest, CodeCanyon, Creative Market, own website, etc.). This is a major differentiator from ThemeForest which requires exclusivity for higher commission rates.";

// ============================================================================
// SUPPORT SYSTEM
// ============================================================================

export const SUPPORT_SYSTEM = {
  /** Free support period with every product */
  freeMonths: 6,
  /** Support is provided directly through manob.ai website - no external support tools needed */
  builtInSupport: true,
  /** How support works */
  supportMethod: "Buyers submit support tickets directly on manob.ai. Sellers respond through their manob.ai dashboard. No external helpdesk or third-party support tools required.",
  /** Extension pricing (buyer pays) */
  extensionPricing: {
    atPurchase: {
      description: "Purchased at checkout alongside the product",
      percentage: 30,
    },
    duringFreePeriod: {
      description: "Purchased during the free 6-month support window",
      percentage: 45,
    },
    afterExpiry: {
      description: "Renew after support expires",
      percentage: 75,
    },
  },
} as const;

// ============================================================================
// DISCUSSION FORUM / COMMUNITY
// ============================================================================

export const DISCUSSION_FORUM = {
  /** Forum name */
  name: "Discussion Forum",
  /** Who can access */
  access: "All users (buyers, sellers, freelancers)",
  /** Purpose */
  purpose: "Community discussion platform for manob.ai users",
  /** What users can do */
  features: [
    "Discuss technical issues and get help from the community",
    "Share knowledge and tech discussions",
    "Ask questions and get answers from experienced manob.ai users",
    "Connect with other developers, sellers, and buyers",
  ],
  /** Description */
  description: "manob.ai has a built-in Discussion Forum where all users can participate. It's the manob.ai community hub for getting help, sharing knowledge, and discussing technical topics with other members.",
  /** Launch phase */
  phase: "v3_scale (Month 24)",
} as const;

// ============================================================================
// BUYER FEES
// ============================================================================

export const BUYER_FEES = {
  /** Payment processing fee (card payments only, via Stripe) */
  paymentProcessingFee: 0.05, // 5% on card payments
  /** Manob Wallet payments = 0% processing fee */
  walletProcessingFee: 0,

  /** Small order fee (SERVICES only, under $100) */
  smallOrderFee: {
    amount: 2.50, // $2.50 flat
    threshold: 100, // applies to service orders under $100
    appliesTo: "services" as const, // products NEVER have small order fee
  },

  /** Escrow fees (for fixed-price projects) */
  escrow: {
    holdingFee: 0, // $0 — free escrow is a differentiator
    releaseFee: 0, // included in commission
    disputeResolutionFee: 0, // free dispute resolution
  },

  /** Product fee rules */
  productRules: {
    smallOrderFee: false, // products NEVER have small order fee
    paymentProcessingFee: 0.05, // 5% on card only
    description: "Product purchases have NO small-order fee regardless of amount. Only 5% payment processing fee applies when paying by card (Stripe). Wallet payments have no processing fee.",
  },

  /** Service fee rules */
  serviceRules: {
    smallOrderFee: 2.50, // $2.50 on orders under $100
    smallOrderThreshold: 100,
    paymentProcessingFee: 0.05, // 5% on card only
    description: "Service orders under $100 have a $2.50 small-order fee. 5% payment processing fee applies only to card payments. Orders $100+ have no small-order fee.",
  },

  /** Fee examples */
  examples: [
    {
      scenario: "$100 product paid fully by card",
      orderPrice: 100,
      processingFee: 5,
      smallOrderFee: 0,
      total: 105,
    },
    {
      scenario: "$80 product paid $30 wallet + $50 card",
      orderPrice: 80,
      walletPortion: 30,
      cardPortion: 50,
      processingFee: 2.50,
      smallOrderFee: 0,
      total: 82.50,
    },
    {
      scenario: "$10 service paid fully by card",
      orderPrice: 10,
      processingFee: 0.50,
      smallOrderFee: 2.50,
      total: 13.00,
    },
    {
      scenario: "$120 service paid fully by card",
      orderPrice: 120,
      processingFee: 6.00,
      smallOrderFee: 0,
      total: 126.00,
    },
    {
      scenario: "$50 service paid $20 wallet + $30 card",
      orderPrice: 50,
      walletPortion: 20,
      cardPortion: 30,
      processingFee: 1.50,
      smallOrderFee: 2.50,
      total: 54.00,
    },
  ],

  /** Important notes */
  notes: [
    "Payment processing fee (5%) covers Stripe costs and provides margin — in line with industry norms (Fiverr charges 5.5%)",
    "Small-order fee ($2.50) only applies to SERVICE orders under $100",
    "Product orders NEVER have a small-order fee",
    "manob.ai Wallet payments have NO processing fee",
    "Seller earnings are calculated from order price only — buyer fees not deducted from seller share",
    "All examples are before applicable tax or VAT",
  ],
} as const;

// ============================================================================
// REFUND POLICY - PRODUCTS
// ============================================================================

export const PRODUCT_REFUND = {
  /** Who can request */
  whoCanRequest: "Only the buyer who purchased the product from their manob.ai account",
  /** Where to request */
  whereToRequest: "User dashboard → Refund page → Request a Refund",
  /** Time limit */
  timeLimitDays: 15,
  /** Process flow */
  process: [
    "Buyer submits refund with valid reason and details",
    "Request sent to the seller of that product",
    "Request also visible in manob.ai admin panel",
    "Seller approves or rejects the request",
    "If approved, amount deducted from seller's wallet/earnings and sent to buyer",
    "Until resolved, refund request stays on seller's profile",
    "If unresolved, buyer can create support ticket to manob.ai team",
  ],
  /** Valid reasons for refund */
  validReasons: [
    "Product is not as described in the listing or preview",
    "Product does not work as advertised and seller cannot reasonably fix it",
    "Files are missing, corrupted, or inaccessible and issue cannot be resolved",
    "Clear billing error or duplicate payment",
  ],
  /** Invalid reasons for refund */
  invalidReasons: [
    "Change of mind after purchase",
    "Wrong product choice when description was correct",
    "Lack of required technical skills or proper environment to use the product",
    "\"I don't like it\" when the product works as described",
  ],
  /** Who decides */
  decisionMaker: "Seller approves/rejects. If unresolved, manob.ai team via support ticket.",
} as const;

// ============================================================================
// REFUND POLICY - SERVICES
// ============================================================================

export const SERVICE_REFUND = {
  /** Who can request */
  whoCanRequest: "Only the buyer who ordered the service from their manob.ai account",
  /** Where to request */
  whereToRequest: "Order Details page → Resolution Center → Create Resolution",
  /** Time limit */
  timeLimitDays: 7,
  /** Time limit reference */
  timeLimitReference: "7 days from order marked Delivered OR agreed delivery date if seller has not delivered",
  /** Process flow */
  process: [
    "Buyer opens a Resolution explaining the problem (refund/cancellation/quality/late delivery)",
    "Case handled inside Resolution Center",
    "manob.ai agent joins, talks with both buyer and seller, reviews work and messages",
    "Agent decides outcome: revision/extra work, partial refund, full refund, or cancellation without refund",
    "Approved refund deducted from seller's wallet/earnings",
    "All service problems solved via Resolution Center",
    "Support ticket only for technical issues accessing order or Resolution Center",
  ],
  /** Valid reasons for refund */
  validReasons: [
    "Work delivered is not as described in service listing or agreed requirements",
    "Seller fails to deliver by agreed deadline and no new deadline is agreed",
    "Delivered work has serious quality problem that cannot be reasonably fixed",
    "Buyer and seller mutually agree to cancel order and refund",
  ],
  /** Who decides */
  decisionMaker: "manob.ai agent reviews and decides the outcome",
  /** Possible outcomes */
  possibleOutcomes: [
    "Revision or extra work from seller",
    "Partial refund",
    "Full refund",
    "Order cancellation without refund",
  ],
} as const;

// ============================================================================
// PAYMENT & WITHDRAWAL
// ============================================================================

export const WITHDRAWAL = {
  /** Minimum withdrawal amount */
  minimumAmount: 50.00, // $50 USD minimum
  /** Fraud prevention hold */
  holdPeriodDays: 15, // 15-day hold on earnings
  /** Maximum processing time */
  maxProcessingDays: 10, // up to 10 business days

  /** Current withdrawal methods */
  methods: [
    {
      id: "bank_transfer",
      name: "Direct Bank Transfer",
      description: "Transfer to seller's registered bank account",
      availability: "Global",
    },
  ],

  /** Buyer payment methods (for paying into the platform) */
  buyerPaymentMethods: [
    "Credit/debit cards",
    "Apple Pay",
    "Google Pay",
    "Link",
    "manob.ai Wallet (Manob Coins)",
  ],

  /** Requirements before first withdrawal */
  requirements: [
    "Have earnings in available balance",
    "Have at least one approved payout method added",
    "Complete payout setup (personal/business info + bank details)",
  ],

  /** Future withdrawal methods roadmap (not yet live) */
  futureMethodsRoadmap: [
    { method: "PayPal", priority: "high", estimatedFee: 2.00 },
    { method: "Wise", priority: "high", estimatedFee: 0.50 },
    { method: "Payoneer", priority: "medium", estimatedFee: 1.00 },
    { method: "USDC (Stablecoin)", priority: "medium", estimatedFee: 0 },
    { method: "International Wire", priority: "low", estimatedFee: 25.00 },
  ],

  /** Structured payout rollout plan with timelines, coverage, and expected impact */
  payoutRoadmap: {
    description: "Phased rollout of international payout methods to reduce friction for global sellers",
    current: {
      method: "Direct Bank Transfer",
      coverage: "Domestic (Bangladesh) + International SWIFT",
      minimumWithdrawal: 50,
      processingTime: "3-5 business days domestic, 5-10 international",
      fees: "Domestic: 0.57%, International: 1% + $2.00",
      limitation: "High fees for small international payouts. No instant options.",
    },
    phase1: {
      timeline: "Month 3-6",
      methods: ["PayPal", "Wise (TransferWise)"],
      coverage: "200+ countries via PayPal, 80+ via Wise",
      expectedImpact: "Reduces international payout friction by 70%. PayPal is the most requested payout method for freelancers globally.",
      fees: "PayPal: 2% (capped at $20), Wise: 0.5-1.5% (varies by currency)",
      priority: "HIGH — critical for international seller acquisition",
    },
    phase2: {
      timeline: "Month 6-12",
      methods: ["Payoneer", "Stripe Connect Express"],
      coverage: "Payoneer: 150+ countries. Stripe Connect: 40+ countries with instant payouts.",
      expectedImpact: "Payoneer is dominant in South Asian freelancer market. Stripe Connect enables instant payouts in supported countries.",
      fees: "Payoneer: 1-2%, Stripe Connect: 1% for instant",
      priority: "MEDIUM — expands to underserved seller markets",
    },
    phase3: {
      timeline: "Month 12-18",
      methods: ["USDC/USDT (crypto)", "Regional mobile money (bKash, GCash)"],
      coverage: "Crypto: global, no banking required. Mobile money: Bangladesh, Philippines, East Africa.",
      expectedImpact: "Enables payouts to unbanked sellers. bKash alone covers 60M+ users in Bangladesh.",
      fees: "Crypto: network gas fees only (~$0.50-$2). Mobile money: 1-2%.",
      priority: "LOW — niche but strategically important for Bangladesh market",
    },
    sellerChoiceDesign: "Sellers choose their preferred payout method during payout setup. Multiple methods can be saved. Platform recommends the lowest-fee option based on seller's country.",
  },
} as const;

// ============================================================================
// MANOB WALLET & MANOB COIN
// ============================================================================

/**
 * Manob Coin is the universal in-platform currency held in the Manob Wallet.
 * Users earn Manob Coins from selling services/products, referrals, and other activities.
 * The wallet tracks earning sources internally while displaying a single unified balance.
 *
 * Manob Coins can be spent on:
 * 1. Buying products and services on the platform (0% processing fee vs 5% for card)
 * 2. Purchasing Connects (for bidding on jobs and posting live jobs)
 * 3. Purchasing AI Energy (for AI-powered features)
 */
export const MANOB_WALLET = {
  /** Currency name */
  currencyName: "Manob Coin",
  /** Wallet name */
  walletName: "Manob Wallet",
  /** Description */
  description:
    "Manob Wallet holds Manob Coins — the universal currency on manob.ai. Users see a single total balance, but the system internally tracks how each coin was earned.",
  /** How users earn Manob Coins */
  earningSources: [
    {
      source: "Service & Product Sales",
      description: "Coins earned from seller earnings on the platform",
    },
    {
      source: "Referrals",
      description: "Coins earned by referring new users to manob.ai",
    },
  ],
  /** Balance tracking */
  balanceTracking: {
    userView: "Single unified balance (e.g., 'Manob Coins: 100')",
    internalTracking:
      "System tracks earning source per coin (e.g., 90 from sales + 10 from referrals = 100 total)",
  },
  /** What Manob Coins can be spent on */
  spendingOptions: [
    {
      option: "Buy Products & Services",
      description:
        "Purchase any product or service on the platform using Manob Coins from the wallet",
      processingFee: "0% (no processing fee for wallet payments)",
    },
    {
      option: "Buy Connects",
      description:
        "Purchase Connect packs for bidding on live jobs and posting live jobs",
    },
    {
      option: "Buy AI Energy",
      description:
        "Purchase AI Energy for using AI-powered features on the platform",
    },
  ],
  /** Wallet payment benefit */
  walletBenefit:
    "Paying with Manob Wallet has 0% processing fee, compared to 5% for card payments (Stripe)",
} as const;

/**
 * Example of Manob Coin balance tracking:
 *
 * User total: 100 Manob Coins
 * - 90 earned from selling services/products
 * - 10 earned from referrals
 *
 * The user sees "100 Manob Coins" in their wallet.
 * Internally, the system knows the source of each coin.
 * All 100 coins can be spent on products, services, Connects, or AI Energy.
 */

// ============================================================================
// AI ENERGY
// ============================================================================

/**
 * AI Energy is a separate purchasable resource for AI-powered features on manob.ai.
 * Users can buy AI Energy with card or Manob Wallet (Manob Coins).
 * AI Energy is consumed when using AI features like the AI Website Builder and Vibe Coding.
 */
export const AI_ENERGY = {
  /** Name */
  name: "AI Energy",
  /** Description */
  description:
    "AI Energy is a separate in-platform resource that powers AI features on manob.ai. Users purchase AI Energy and consume it when using AI-powered tools.",
  /** How to purchase */
  purchaseMethods: ["Credit/debit card", "Manob Wallet (Manob Coins)"],
  /** What AI Energy is used for */
  usedFor: [
    "AI Website Builder",
    "Vibe Coding (Edit with AI)",
    "Other AI-powered features on the platform",
  ],
  /** Key rules */
  rules: [
    "Separate balance from Manob Coins and Connects",
    "Cannot be withdrawn as cash",
    "Cannot be transferred between accounts",
    "Consumed as AI features are used",
  ],
  /** Relationship to MC */
  relationship: "AI Energy is measured and consumed in MicroCredits (MC). 1 MC = 100 AI tokens. AI Energy balance IS the MC balance. They are the same system with two names: 'AI Energy' is the user-facing brand, 'MC' is the technical unit.",
  /** Vibe coding session cost */
  vibeCodingSessionCost: "50-200 MC per session depending on complexity and model tier",
} as const;

// ============================================================================
// MC (MICROCREDITS) — AI TOKEN CURRENCY SYSTEM
// ============================================================================
//
// MC is the internal currency for AI features. Separate from Manob Coins.
// 1 MC = 100 AI tokens | 100 MC = 10,000 tokens
//
// Cost basis (all-in cost for 10,000 tokens, 50/50 input/output):
//   Budget model (Haiku/GPT-4o-mini): ~$0.004
//   Mid-tier model (Sonnet/GPT-4o): ~$0.035
//   Premium model (Opus/GPT-4.5): ~$0.15
//   Weighted average (70% mid, 20% budget, 10% premium): ~$0.0403
//   + Infrastructure overhead (routing, queuing, caching, monitoring): $0.007
//   + Burst premium (peak usage provisioning): $0.005
//   + Retries and waste (failed requests, timeouts ~5-10%): $0.003
//   All-in blended cost: ~$0.055 per 10K tokens
//
// Target gross margin: 40-50% (conservative for AI SaaS with multi-model routing)
// Retail price: 100 MC = $0.10 -> 1 MC = $0.001
// NOTE: Enterprise pack ($90/150K MC = $0.0006/MC = $0.06/10K tokens) margin is only ~8%
// ============================================================================

export const MC_SYSTEM = {
  name: "MicroCredits",
  symbol: "MC",
  tokenRatio: 100, // 1 MC = 100 AI tokens
  baseCostPer100MC: 0.055, // USD — all-in cost for 10,000 tokens (API + infra + burst + retries)
  retailPricePer100MC: 0.10, // USD — retail price to user
  grossMargin: 0.45, // 45% — Target gross margin: 40-50%
  costBreakdown: {
    blendedAPICost: 0.0403,        // Weighted: 70% mid ($0.035) + 20% budget ($0.004) + 10% premium ($0.15)
    infrastructureOverhead: 0.007,  // Routing, queuing, caching, monitoring
    burstPremium: 0.005,            // Peak usage provisioning
    retriesAndWaste: 0.003,         // Failed requests, timeouts (~5-10%)
    totalCostPer10kTokens: 0.055,
  },

  /** MC package pricing (bulk discounts) */
  packages: [
    { mc: 1_000, tokens: 100_000, price: 1.00, discount: 0, pricePerMC: 0.001, label: "Starter" },
    { mc: 5_000, tokens: 500_000, price: 4.50, discount: 0.10, pricePerMC: 0.0009, label: "Basic" },
    { mc: 15_000, tokens: 1_500_000, price: 12.00, discount: 0.20, pricePerMC: 0.0008, label: "Pro" },
    { mc: 50_000, tokens: 5_000_000, price: 35.00, discount: 0.30, pricePerMC: 0.0007, label: "Business" },
    { mc: 150_000, tokens: 15_000_000, price: 90.00, discount: 0.40, pricePerMC: 0.0006, label: "Enterprise" },
  ],

  /** AI model tiers and MC consumption rates */
  modelTiers: {
    budget: {
      label: "Fast",
      models: ["GPT-4o-mini", "Gemini Flash", "Claude Haiku"],
      mcPer1000Tokens: 10, // 10 MC per 1,000 tokens
      description: "Quick tasks, simple queries, summaries",
    },
    standard: {
      label: "Smart",
      models: ["GPT-4o", "Gemini Pro", "Claude Sonnet"],
      mcPer1000Tokens: 30, // 30 MC per 1,000 tokens (3x budget)
      description: "Complex reasoning, code generation, analysis",
    },
    premium: {
      label: "Ultra",
      models: ["GPT-4.5", "Claude Opus"],
      mcPer1000Tokens: 100, // 100 MC per 1,000 tokens (10x budget)
      description: "Expert-level tasks, research, creative work",
    },
  },
  /** Branding note */
  brandingNote: "MC (MicroCredits) is the technical unit for AI Energy. User-facing communications should use 'AI Energy' as the brand name and 'MC' as the unit (e.g., 'You have 500 MC of AI Energy remaining').",
} as const;

// ============================================================================
// PAYOUT & TAX INFORMATION SETUP
// ============================================================================

export const PAYOUT_SETUP = {
  /** Overview */
  description: "To withdraw earnings, sellers must add a payout method. During this process, basic info for tax, invoices, and bank transfers is collected. No separate document upload or extra verification step required.",
  /** Account types */
  accountTypes: {
    individual: {
      name: "Individual",
      description: "Withdrawing as a person (freelancer, sole trader)",
      requiredFields: [
        "First Name",
        "Last Name",
        "Date of Birth",
        "Phone Number",
        "Country",
        "Address 1",
        "Region / State / Province",
        "Postal Code / ZIP",
      ],
      optionalFields: ["Address 2"],
    },
    business: {
      name: "Business",
      description: "Withdrawing on behalf of a registered company",
      requiredFields: [
        "Registered Business Name",
        "Phone Number",
        "Country",
        "Address 1 (business address)",
        "Region / State / Province",
        "Postal Code / ZIP",
      ],
      optionalFields: ["First Name (contact person)", "Last Name (contact person)", "Address 2"],
    },
  },
  /** Bank transfer details */
  bankTransferFields: {
    required: [
      "Country (where bank account is held)",
      "Bank Name",
      "Bank Branch",
      "Account Holder Name (must match bank account)",
      "Account Number (3 to 17 digits)",
      "Routing Number (if required in your country)",
      "SWIFT/BIC (international transfer code)",
    ],
    optional: ["Use this account as default payment option (checkbox)"],
  },
  /** Verification policy */
  verification: {
    requiresDocumentUpload: false,
    requiresKYC: false,
    description: "manob.ai does NOT require ID scan, business certificate, or extra uploads during payout setup. Tax and payout details collected entirely through forms.",
    specialCases: "In special cases (regulatory, security, suspected abuse), manob.ai may contact for clarification, but no standard KYC flow beyond the forms.",
  },
  /** Withdrawal requirements */
  withdrawalRequirements: [
    "Have earnings in available balance",
    "Have at least one approved payout method added",
  ],
} as const;

/** Payout setup steps summary */
export const PAYOUT_SETUP_STEPS = [
  {
    step: 1,
    name: "Choose Account Type",
    description: "Select Individual (personal) or Business (company)",
  },
  {
    step: 2,
    name: "General Information",
    description: "Provide personal/business details for tax and invoices",
  },
  {
    step: 3,
    name: "Add Payout Method",
    description: "Enter bank transfer details (bank name, account number, SWIFT/BIC, etc.)",
  },
] as const;

// ============================================================================
// ACCOUNT SUSPENSION & BAN POLICY
// ============================================================================

export const ENFORCEMENT_ACTIONS = {
  /** Types of enforcement actions */
  types: {
    warning: {
      name: "Warning",
      description: "Written notice about a policy violation. May include education and required changes.",
    },
    featureRestriction: {
      name: "Feature Restriction",
      description: "Temporary limits such as: no new products/services, no bidding, no messaging new users, no promotions.",
    },
    accountSuspension: {
      name: "Account Suspension",
      description: "Login may be blocked or limited. Existing orders may be paused, cancelled, or completed under supervision. Withdrawals may be delayed or held.",
      types: ["Temporary", "Indefinite"],
    },
    permanentBan: {
      name: "Permanent Ban (Account Termination)",
      description: "Access removed. Not allowed to open or use another manob.ai account. Related accounts may be blocked.",
    },
  },
  /** General principles */
  principles: [
    "Marketplace access is a privilege, not a right",
    "manob.ai may act with or without prior warning for serious risk, fraud, or legal breach",
    "One severe incident can lead directly to suspension or permanent ban",
    "Repeat or multiple violations can lead to escalating actions",
  ],
} as const;

export const VIOLATION_CATEGORIES = {
  accountIntegrity: {
    name: "Account Integrity & Identity",
    examples: [
      "Creating multiple accounts to manipulate ratings, search, fees, or match systems",
      "Impersonating another person or company",
      "Selling, sharing, or transferring your account",
      "Using someone else's account without permission",
    ],
  },
  paymentFraud: {
    name: "Payments, Withdrawals & Fraud",
    examples: [
      "Using stolen or unauthorized payment methods",
      "Chargeback abuse or money-laundering patterns",
      "Manipulating orders to move money between accounts (fake purchases, circular orders)",
      "Encouraging off-platform payments to bypass manob.ai fees",
      "Suspicious funds through restricted/sanctioned jurisdictions",
    ],
    note: "Often leads to immediate withdrawal restrictions and permanent ban",
  },
  prohibitedContent: {
    name: "Prohibited Content & Services",
    examples: [
      "Illegal, harmful, or policy-violating services (hacking, malware, fraud schemes, doxxing)",
      "Adult or sexually explicit content if disallowed",
      "Services violating third-party platform terms",
    ],
  },
  intellectualProperty: {
    name: "Intellectual Property & Non-Original Work",
    examples: [
      "Selling code, themes, designs you don't own or lack rights to",
      "Uploading nulled, cracked, pirated, or GPL-violating products",
      "Re-uploading someone else's manob.ai/external item as your own",
      "Systematic copyright or trademark infringement",
    ],
  },
  ratingManipulation: {
    name: "Feedback, Ratings & Search Manipulation",
    examples: [
      "Buying or selling fake reviews/ratings",
      "Coordinating to boost or damage ratings unfairly",
      "Manipulating job bids or rankings with fake accounts or collusion",
    ],
  },
  spamHarassment: {
    name: "Spam, Harassment & Abusive Behaviour",
    examples: [
      "Mass-messaging users with unsolicited offers",
      "Threats, hate speech, discrimination, or harassment",
      "Abusive language in chats, reviews, or posts",
      "Misusing reporting tools (false reports)",
    ],
  },
  securityAbuse: {
    name: "Security & Technical Abuse",
    examples: [
      "Distributing malware, phishing links, or harmful code",
      "Attempting to hack manob.ai systems, bypass security, scrape data",
      "Misusing manob.ai assets to train external AI models where prohibited",
    ],
  },
  legalIssues: {
    name: "Legal & Regulatory Issues",
    examples: [
      "Operating from prohibited countries or sanctioned regions",
      "Any activity exposing manob.ai, users, or third parties to legal risk",
    ],
  },
  lowQuality: {
    name: "Low-Quality or Misleading Use (Repeated)",
    examples: [
      "Repeatedly posting low-effort, misleading, or deceptive listings",
      "Consistently failing to deliver, abandoning orders",
      "Systematic abuse of dispute, refund, or support processes",
    ],
  },
} as const;

export const ESCALATION_PATH = {
  /** Normal escalation for non-severe issues */
  normalPath: [
    "First issue → Education + Warning",
    "Repeated/additional issues → Feature restrictions or temporary suspension",
    "Ongoing/multiple violations → Long-term suspension or permanent ban",
  ],
  /** When manob.ai may skip steps */
  skipToSuspensionOrBan: [
    "Suspected fraud, stolen financials, malware, or security risks",
    "Clear evidence of hate, serious harassment, or severe policy breaches",
    "Required legal, regulatory, or safety action",
  ],
} as const;

export const ACCOUNT_STATUS_EFFECTS = {
  duringRestriction: {
    canLogin: true,
    restrictions: [
      "Some features blocked (new listings, bidding, messaging)",
      "Promotions or visibility may be paused",
    ],
  },
  duringSuspension: {
    canLogin: "Prevented or limited to viewing basic information",
    restrictions: [
      "Cannot place new orders, list new items, or withdraw funds",
      "In-progress orders may be cancelled or completed (whichever protects users best)",
      "Funds may be held for review period (chargebacks, disputes, legal obligations)",
    ],
  },
  afterPermanentBan: {
    canLogin: false,
    effects: [
      "Lose access to account and features",
      "Must not create or use another manob.ai account",
      "Funds may be held for specific period then released, or frozen until legal conditions allow",
    ],
  },
} as const;

export const APPEALS_PROCESS = {
  howToAppeal: "Contact manob.ai Support using the channel specified in Help Center",
  mayBeAskedFor: "Additional information or documentation",
  finalDecisions: "Decisions involving fraud, safety, or repeated violations may be final",
  note: "Submitting multiple tickets or aggressive messages does not speed up review and may be treated as abuse",
} as const;

export const MULTI_ACCOUNT_POLICY = {
  rule: "Creating a new account to bypass restrictions or bans is strictly prohibited",
  consequences: [
    "Same restriction/ban applied to all related accounts",
    "New accounts closed without notice",
  ],
  detection: "manob.ai may link accounts by same person, company, or payment method",
} as const;

// ============================================================================
// BUYER PROTECTION POLICY
// ============================================================================

export const BUYER_PROTECTION = {
  /** Overview */
  description: "manob.ai Buyer Protection helps when something goes wrong with a purchase. Works with Refund Policy, Ratings & Review Policy, and Terms of Use.",

  /** What's covered for products */
  productsCovered: [
    "Product is not as described (key features materially different from product page)",
    "Product does not work as intended (major functional bugs preventing normal use)",
    "Security or malware concerns (malicious or harmful code)",
    "Access issues (cannot download after purchase and seller/manob.ai cannot restore access)",
  ],

  /** What's covered for services */
  servicesCovered: [
    "Non-delivery of work (seller doesn't deliver by deadline and doesn't respond)",
    "Work not delivered as agreed (significantly different from agreed scope)",
    "Severe quality issues (work objectively unusable and seller refuses to fix)",
    "Unauthorized cancellation or abandonment (seller cancels without valid reason)",
  ],

  /** What's NOT covered for products */
  productsNotCovered: [
    "Change of mind (no longer want item, ordered wrong item)",
    "Buyer's environment/setup issues (doesn't meet seller's listed requirements)",
    "Minor bugs or cosmetic issues (don't affect main functionality)",
    "Custom modifications (expected changes not in product description)",
    "Issues after extensive modification (problems from editing source code)",
  ],

  /** What's NOT covered for services */
  servicesNotCovered: [
    "Subjective dissatisfaction only ('I don't like the style' when work matches scope)",
    "Scope creep (asking for extra work not in original agreement)",
    "Non-communication from buyer (seller can't complete due to buyer not providing access/feedback)",
    "Work done outside manob.ai (payments/agreements outside manob.ai platform)",
  ],

  /** General exclusions */
  generalExclusions: [
    "Disputes based purely on personal conflicts when work is as described",
    "Attempts to use Buyer Protection for extortion ('refund or I'll leave 1 star')",
  ],
} as const;

export const BUYER_PROTECTION_PROCESS = {
  /** For product issues */
  productIssues: {
    step1: "Contact the seller first - explain issue clearly with screenshots/logs/errors",
    step2: "Give seller reasonable time to respond and fix",
    step3: "If unresolved and covered under Buyer Protection, submit refund request within 15 days",
  },
  /** For service issues */
  serviceIssues: {
    step1: "Raise issue with seller in order conversation",
    step2: "If no agreement, open case in Resolution Center within 7 days of completion",
    step3: "Provide clear evidence: order details, messages, files/screenshots of delivery",
  },
  /** Fallback */
  fallback: "If cannot access refund flow or Resolution Center, contact manob.ai Support",
} as const;

export const BUYER_PROTECTION_RESOLUTION = {
  /** How manob.ai resolves cases */
  reviewProcess: [
    "Review both sides: order details, product/service description",
    "Review conversation history",
    "Review delivery files and technical evidence",
  ],
  /** Possible outcomes */
  possibleOutcomes: [
    "Full refund to buyer",
    "Partial refund (if part of work/value correctly delivered)",
    "No refund (if work/product matches description)",
    "Additional support or fixes instead of refund (if buyer agrees)",
  ],
  /** Final decision */
  finalDecision: "manob.ai's decision in Buyer Protection cases is final for the platform",
  /** Serious cases */
  seriousCaseActions: [
    "Restrict seller's account",
    "Remove products/services",
    "Adjust ratings or remove fake reviews",
    "Close accounts that violate policies",
  ],
} as const;

export const BUYER_PROTECTION_MISUSE = {
  /** What constitutes misuse */
  misuseExamples: [
    "Repeatedly making false, abusive, or bad-faith claims",
    "Using threats of reviews/disputes as leverage for free work",
    "Attempting to circumvent or manipulate manob.ai's systems",
  ],
  /** Consequences */
  consequences: [
    "Loss of dispute privileges",
    "Account limitations or closure",
    "Removal of abusive reviews",
  ],
} as const;

// ============================================================================
// RATINGS & REVIEWS
// ============================================================================

export const PRODUCT_REVIEWS = {
  /** When can buyers rate */
  whenCanRate: "After purchase",
  /** Rating scale */
  ratingScale: "1 to 5 stars (5 = excellent, 1 = very poor)",
  /** Written review */
  canLeaveWrittenReview: true,
  /** What buyers can describe */
  reviewTopics: ["Quality", "Documentation", "Support"],
  /** Seller response */
  sellerCanRespond: true,
  sellerResponsePurpose: [
    "Clarify issues",
    "Provide additional information",
    "Show how they resolved a problem",
  ],
} as const;

export const SERVICE_REVIEWS = {
  /** When can buyers rate */
  whenCanRate: "After order is completed (marked as delivered and accepted/completed)",
  /** Rating scale */
  ratingScale: "1 to 5 stars",
  /** Written review */
  canLeaveWrittenReview: true,
  /** What buyers can comment on */
  reviewTopics: ["Quality of work", "Communication", "Timeliness", "Professionalism"],
  /** Seller response */
  sellerCanRespond: true,
} as const;

export const RATING_EDITING = {
  /** Can buyers edit */
  canEdit: true,
  editReason: "For example, if seller fixed an issue or experience changed",
  /** Can buyers delete */
  canDelete: false,
  deleteNote: "Cannot delete once submitted. manob.ai may hide/remove if violates policy (fake, abusive, spam).",
} as const;

export const RATING_VISIBILITY_IMPACT = {
  /** What manob.ai looks at */
  factors: [
    "Average rating (e.g., 4.9 vs 4.3)",
    "Number of reviews (rating strength)",
    "Recent performance trend (improving or getting worse)",
    "Order completion, dispute, and cancellation rates",
  ],
  /** What ratings affect */
  affects: [
    "Search results and category pages (higher-rated appear higher)",
    "'Top rated', 'Recommended' sections (good ratings increase featuring chances)",
    "Job & service matching (higher-rated sellers notified earlier, shown higher in match lists)",
  ],
  /** What ratings do NOT affect */
  doesNotAffect: [
    "Seller's earnings percentages (70% product share, 80% service share remain same)",
    "Ratings affect visibility, not revenue share formula",
  ],
  /** New sellers */
  newSellers: {
    startingPosition: "Neutral starting position (not hidden)",
    singleBadReview: "Single bad review won't 'kill' visibility; manob.ai looks at overall pattern",
  },
} as const;

// ============================================================================
// FAKE REVIEW POLICY
// ============================================================================

export const FAKE_REVIEW_DEFINITION = {
  /** What counts as fake/manipulated */
  definition: "A review is fake or manipulated if it does not reflect a genuine experience, is posted to artificially boost/harm ratings, or is influenced by undisclosed rewards, threats, or pressure.",
} as const;

export const SELLER_REVIEW_VIOLATIONS = {
  /** Prohibited seller behaviors */
  prohibited: [
    "Review their own listings (own account, alternate accounts, friends/family/staff)",
    "Buy or reward positive reviews (money, gifts, discounts, refunds for 5-stars)",
    "Review swaps / review circles ('you rate mine, I'll rate yours')",
    "Fake orders just to leave reviews (orders without real usage)",
    "Instant refunds/cancellations after reviews solely for boosting",
    "Pressuring buyers about reviews (harassing, threatening to change rating)",
    "Conditioning support on 'change your review first'",
    "Misrepresenting identity (staff/partners pretending to be independent buyers)",
    "Sellers posing as competitors to harm others",
  ],
} as const;

export const BUYER_REVIEW_VIOLATIONS = {
  /** Prohibited buyer behaviors */
  prohibited: [
    "Leave reviews without using product/service (rating without ordering through manob.ai)",
    "Using multiple accounts to rate same seller repeatedly",
    "Use reviews for extortion (threatening 1-star for free features/unfair discounts)",
    "Organize attack campaigns (coordinated negative ratings for non-transactional reasons)",
  ],
} as const;

export const REVIEW_ABUSE_HANDLING = {
  /** What manob.ai may do */
  actions: [
    "Review and investigate suspicious rating patterns",
    "Hide, edit (remove insults), or remove fake/abusive reviews",
    "Adjust rating calculations if manipulation confirmed",
    "Limit or remove review rights for specific accounts",
    "Suspend or close accounts involved in serious/repeated abuse",
    "Remove badges or visibility boosts ('Top Rated') during investigation",
  ],
  /** Notice */
  notice: "Actions may be taken without prior notice in clear abuse cases",
  /** How to report */
  howToReport: {
    method: "Contact manob.ai Support",
    include: [
      "Link to product, service, or profile",
      "Screenshots if available",
      "Short explanation of why review violates policy",
    ],
  },
} as const;

// ============================================================================
// SELLER PROTECTION POLICY
// ============================================================================

export const SELLER_PROTECTION = {
  /** Overview */
  description: "manob.ai protects sellers from unfair behavior, abuse, and bad-faith disputes. Works with Refund Policy, Buyer Protection Policy, and Ratings & Fake Review Policy.",
  /** When protection applies */
  appliesWhen: "Seller delivered as agreed, followed manob.ai policies, AND buyer is acting in bad faith, being abusive, or misusing refunds/disputes/reviews.",
} as const;

export const SELLER_PROTECTION_PRODUCTS = {
  /** When sellers are protected - Products */
  protectedScenarios: [
    {
      scenario: "Product is as described and functional",
      description: "Product matches description, features, requirements. No major bugs or seller made reasonable effort to fix.",
    },
    {
      scenario: "Issues from buyer's environment",
      description: "Problems due to buyer's hosting, server, config, or tech stack. Product requirements were clearly disclosed.",
    },
    {
      scenario: "Issues caused by buyer modifications",
      description: "Buyer heavily modified code, added conflicting plugins, or integrated in unsupported ways. Original product works as intended.",
    },
    {
      scenario: "Unfair refund requests",
      description: "Buyer wants refund because they changed mind, found cheaper option, or finished using product. Product itself is fine.",
    },
    {
      scenario: "Fake or abusive reviews",
      description: "Buyer leaves review violating Fake Review Policy (malicious, extortion-based, unrelated to real usage). manob.ai may remove/hide such reviews.",
    },
  ],
} as const;

export const SELLER_PROTECTION_SERVICES = {
  /** When sellers are protected - Services */
  protectedScenarios: [
    {
      scenario: "Work delivered as per agreed scope",
      description: "Seller completed work according to agreed scope, requirements, milestones. Final delivery is usable and covers what was promised.",
    },
    {
      scenario: "Scope creep and unfair free work demands",
      description: "Buyer tries to force additional work not in original scope, or threatens bad reviews if seller refuses free extra work.",
    },
    {
      scenario: "Buyer is unresponsive or uncooperative",
      description: "Seller cannot finish because buyer didn't provide required access, content, feedback, or approvals. Seller can show reasonable attempts.",
    },
    {
      scenario: "Unfair disputes after completion",
      description: "Order is completed, work matches scope, buyer later tries to claim refund without valid reasons.",
    },
    {
      scenario: "Work is used but refund is demanded",
      description: "Buyer uses delivered work (deploys, goes live, production use) then asks for refund even though work meets agreed scope.",
    },
  ],
} as const;

export const SELLER_PROTECTION_EXCLUSIONS = {
  /** When seller protection does NOT apply */
  notCovered: [
    {
      scenario: "Non-delivery or incomplete delivery",
      description: "Seller did not deliver any work or did not deliver core agreed parts of the order.",
    },
    {
      scenario: "Clearly not-as-described",
      description: "Product/service doesn't match description or key claims. Important limitations were intentionally hidden or misleading.",
    },
    {
      scenario: "Severe quality issues without good-faith effort to fix",
      description: "Buyer has legitimate quality concerns AND seller does not respond or refuses to bring work to minimum acceptable level.",
    },
    {
      scenario: "Violation of manob.ai policies",
      description: "Seller engages in fake reviews, attempts to move buyers off-platform, abusive behavior, or other Trust & Safety violations.",
    },
    {
      scenario: "Work or payments done outside manob.ai",
      description: "Any work, agreement, or payment outside the manob.ai platform is not covered.",
    },
  ],
} as const;

// ============================================================================
// PRODUCT & SERVICE REJECTION POLICY
// ============================================================================

export const REJECTION_TYPES = {
  /** Soft Reject */
  softReject: {
    name: "Soft Reject",
    definition: "Listing temporarily rejected with clear list of required changes. Seller can resubmit after fixes.",
    typicalUseCases: [
      "Fixable quality issues (bugs, documentation, UX)",
      "Incorrect or misleading metadata that can be corrected",
      "Incomplete descriptions or missing required fields",
      "Minor policy violations that can be cleaned up",
    ],
    sellerActions: [
      "Update product/service according to feedback",
      "Add short comment summarizing changes on resubmission",
      "Resubmit for review",
    ],
    escalation: "May convert to hard reject if seller repeatedly resubmits without addressing issues, or new serious problems found.",
  },
  /** Hard Reject */
  hardReject: {
    name: "Hard Reject",
    definition: "Listing permanently rejected in current form. Typically cannot be resubmitted as the same item.",
    typicalUseCases: [
      "Confirmed copyright/IP violations",
      "Malicious code, security backdoors, or harmful intent",
      "Services promoting illegal or highly abusive activity",
      "Clear, repeated disregard of manob.ai policies or review feedback",
      "Extremely low-quality content not meeting minimum standards",
    ],
    resubmission: "Same item typically not allowed. Completely new item with different code/assets may be allowed if fully compliant.",
  },
} as const;

export const REJECTION_REASONS = {
  /** Quality & Usability Issues (usually soft reject) */
  qualityUsability: {
    category: "Quality & Usability Issues",
    severity: "Usually fixable - often leads to soft reject",
    productExamples: [
      "Broken or incomplete functionality (fresh install fails, critical errors)",
      "Required files/libraries/assets missing",
      "Poor code quality/structure (no separation of concerns, code smells)",
      "No clear build/run instructions or environment requirements",
      "Weak or missing documentation (no install guide, usage steps)",
      "Unacceptable design or UX (outdated UI, non-responsive layouts)",
    ],
    serviceExamples: [
      "Vague or unclear scope (no clear deliverables, timeline, revision policy)",
      "Unrealistic/misleading promises ('rank #1 on Google in 3 days')",
      "Very low-effort/duplicate offers (copy-paste gigs with no detail)",
    ],
  },
  /** Policy, Legal & Safety Issues (usually hard reject) */
  policyLegalSafety: {
    category: "Policy, Legal & Safety Issues",
    severity: "More serious - often results in hard reject and may impact account",
    examples: [
      "Copyright/IP violations (re-uploading others' code without rights)",
      "Using licensed assets without proper license",
      "Malicious or harmful content (backdoors, credential theft, keylogging)",
      "Undisclosed external calls sending sensitive data",
      "Illegal or harmful activities (hacking, fraud, spam tools, phishing)",
      "Off-platform payment solicitation to bypass fees",
      "Hate, violence, or abusive content",
    ],
    note: "Typically cannot be fixed by minor changes - may result in permanent rejection",
  },
  /** Listing, Metadata & Behavior Issues */
  listingMetadata: {
    category: "Listing, Metadata & Behavior Issues",
    severity: "Item may be acceptable, but listing is not - usually soft reject first",
    examples: [
      "Misleading titles, tags, or categories",
      "Wrong category to gain extra visibility",
      "False or inflated claims (fake usage numbers, testimonials)",
      "Spam and duplication (many identical products to dominate search)",
      "Review manipulation in listing ('discount for 5-star reviews')",
    ],
    escalation: "Repeated abuse can lead to hard reject or account action",
  },
} as const;

export const REJECTION_APPEAL = {
  /** When appeal is appropriate */
  appropriateFor: [
    "Reviewer misunderstood the item or its functionality",
    "Seller can provide proof of ownership/licensing not visible during review",
    "All soft reject issues fully addressed but item was still hard rejected",
    "Clear evidence decision was based on incorrect/incomplete information",
  ],
  /** Not meant for */
  notMeantFor: [
    "'I don't like this decision' without new evidence",
    "Trying to override clear IP, security, or legal violations",
  ],
  /** How to appeal */
  howToAppeal: {
    timeframe: "Within 7-14 days of rejection",
    method: "Contact manob.ai Support",
    requiredInfo: [
      "Seller account ID",
      "Item ID and title",
      "Type of rejection (Soft or Hard)",
      "Original rejection message (copy/paste)",
      "Clear explanation of why decision should be reviewed",
      "Supporting evidence (license documents, ownership proof, screenshots, fix summary)",
    ],
  },
  /** Possible outcomes */
  possibleOutcomes: [
    "Rejection upheld - original decision stands",
    "Converted to soft reject - hard reject downgraded with list of required changes",
    "Approved - rare cases where error identified",
  ],
  /** Finality */
  finality: "manob.ai's appeal outcome is final for that item",
} as const;

export const REJECTION_BEST_PRACTICES = {
  /** How to avoid rejection */
  tips: [
    "Follow all manob.ai technical, design, and content guidelines",
    "Use only assets (code, fonts, images, libraries) you're legally allowed to use",
    "Provide clear documentation and accurate descriptions",
    "Keep services specific and realistic with defined deliverables and timelines",
    "Never encourage off-platform payments",
    "Never violate IP, security, or safety policies",
  ],
} as const;

// ============================================================================
// SELLER BADGES
// ============================================================================

export const SELLER_BADGES_OVERVIEW = {
  /** What badges do */
  benefits: [
    "Increase buyer trust and conversion",
    "Influence visibility/ranking (with ratings, response rate, etc.)",
    "Reward long-term performance and platform loyalty",
  ],
  /** How badges work */
  assignment: "Automatically assigned and removed based on measurable criteria",
  /** Key metrics used */
  metricsUsed: [
    "Total selling amount (revenue)",
    "Number of product sales",
    "Number of service sales",
    "Overall ratings",
    "Account age",
    "Response rate",
    "Number of live products/services",
    "Number of times hired for jobs",
  ],
} as const;

export const SELLER_BADGES = {
  founding: {
    label: "Founding",
    meaning: "Recognises early adopters who joined during founding period",
    eligibility: "Seller account created within defined founding period (from launch until closing date)",
    notes: "Time-limited, cannot be earned after founding period ends. Remains unless account closed/banned.",
    canBeLost: false,
  },
  perfectRating: {
    label: "Perfect Rating",
    meaning: "Highlights sellers consistently delivering 5-star experiences",
    eligibility: {
      completedOrders: "50+",
      requirement: "Continuous streak of 5-star ratings (e.g., last 50 ratings)",
    },
    lossCondition: "Rating below 5 stars within streak window removes badge until criteria met again",
  },
  fastResponder: {
    label: "Fast Responder (D)",
    meaning: "Recognises sellers who respond quickly to messages/inquiries",
    eligibility: {
      avgResponseTime: "Below 1 hour",
      calculatedOver: "Last 30 days",
    },
    measurement: "Time between buyer's message and seller's first reply (in-platform messages only)",
    lossCondition: "If average response time rises to 1 hour or more over last 30 days",
  },
  level1: {
    label: "Level 1",
    meaning: "Active, consistent seller with good ratings",
    eligibility: {
      totalSalesAmount: "$1,000+",
      accountAge: "60+ days",
      productSales: "10+",
      serviceSales: "10+",
      avgRating: "4.5+",
    },
    lossCondition: "Rating drops below 4.5 (sales/age metrics only move upward)",
  },
  level2: {
    label: "Level 2",
    meaning: "Advanced, consistent seller with higher volume",
    eligibility: {
      totalSalesAmount: "$2,500+",
      accountAge: "120+ days",
      productSales: "30+",
      serviceSales: "30+",
      avgRating: "4.5+",
    },
    lossCondition: "Rating falls below 4.5. May keep Level 1 if those conditions still met.",
  },
  topSeller: {
    label: "Top Seller",
    meaning: "Most successful and consistent sellers on the platform",
    eligibility: {
      totalSalesAmount: "$10,000+",
      accountAge: "365+ days",
      productSales: "100+",
      serviceSales: "100+",
      avgRating: "4.5+",
    },
    lossCondition: "Rating below 4.5 or severe policy violations",
  },
  jobHunter: {
    label: "Job Hunter",
    meaning: "Actively getting hired through job posts",
    eligibility: {
      jobsHired: "50+",
    },
    notes: "Hired means selected and job order created on manob.ai. Cancelled jobs may be excluded.",
  },
  featuredAuthor: {
    label: "Featured Author",
    meaning: "Premium badge for high quality, responsiveness, and stable sales",
    eligibility: {
      avgResponseTime: "Below 1 hour (all time or long window)",
      rating: "4.5+ all time",
      liveItems: "20+ products and/or services",
      totalSalesCount: "50+ (products + services combined)",
    },
    notes: "Ideal for home page, category carousels, 'recommended sellers'. manob.ai may manually review before assigning.",
    lossCondition: "Response time, ratings, or live item count drop below thresholds. Policy violations also cause removal.",
  },
} as const;

export const BADGE_DISPLAY_RULES = {
  /** Multiple badges */
  multipleBadges: "Multiple badges can appear on same seller profile (e.g., Founding, Level 2, Fast Responder, Featured Author)",
  /** On listing cards */
  listingCards: "At most 1-2 highlight badges (Top Seller, Featured Author) plus icons for response/rating",
  /** Badge influence */
  influence: [
    "Recommendation blocks ('Top Rated Sellers', 'Featured Authors')",
    "Job-matching priority (higher-level sellers notified earlier)",
  ],
} as const;

export const BADGE_EVALUATION = {
  /** Frequency */
  frequency: "Checked regularly (once per day or near-real-time as metrics update)",
  /** Award timing */
  awarded: "As soon as all conditions are met",
  /** Removal conditions */
  removed: [
    "Ratings or response metrics fall below thresholds",
    "Policy violations detected",
    "Account suspended or restricted",
  ],
  /** Policy notes */
  policyNotes: [
    "Meeting thresholds doesn't guarantee badge if open investigations, violations, or risk flags exist",
    "manob.ai may adjust badge criteria over time",
    "manob.ai may add new badges or retire existing ones",
    "manob.ai may manually grant or revoke badges in exceptional cases",
  ],
} as const;

// ============================================================================
// PROMOTIONS & FEATURED LISTINGS
// ============================================================================

export const PROMOTIONS = {
  /** Can sellers promote products */
  sellerCanPromote: true,
  /** How promotion works */
  promotionModel: "manob.ai promotes products for free on behalf of sellers. No extra cost charged to sellers for promotion.",
  /** Featured listing cost */
  featuredListingCost: "None - free",
  /** Homepage placement options */
  homepagePlacementCost: "None - free",
  /** External promotion */
  externalPromotion: "Sellers can promote their products outside of manob.ai (social media, own website, etc.)",
  /** Key points */
  keyPoints: [
    "No paid promotion or advertising fees for sellers",
    "manob.ai handles promotion internally at no cost to seller",
    "Featured placements are free and based on quality/performance",
    "Sellers are free to promote externally on their own",
  ],
} as const;

// ============================================================================
// COPYRIGHT & DMCA PROCESS
// ============================================================================

export const COPYRIGHT_POLICY = {
  /** What manob.ai does not allow */
  notAllowed: [
    "Re-uploading or reselling items from other marketplaces without permission",
    "Using copyrighted code, designs, fonts, images, videos, or assets without valid license",
    "Selling services that deliver or depend on pirated or unlicensed materials",
  ],
  /** Consequences */
  consequences: "Infringing items may be removed and accounts may be restricted or closed",
} as const;

export const DMCA_NOTICE_REQUIREMENTS = {
  /** How to report infringement */
  method: "Send notice to manob.ai Support via official contact/support channel",
  /** Required information */
  requiredInfo: [
    "Contact details (full name, company if applicable, email, country)",
    "Description of copyrighted work (product name, code repository, URL of original)",
    "Exact manob.ai content complained about (direct URLs, file names, screenshots)",
    "Ownership statement (you are copyright owner or authorized agent)",
    "Good-faith statement (belief use is not authorized)",
    "Accuracy statement (info is accurate, under penalty of perjury)",
    "Signature (physical or electronic, full legal name acceptable)",
  ],
} as const;

export const DMCA_MANOB_RESPONSE = {
  /** What manob.ai does after receiving notice */
  actions: [
    "Temporarily disable or remove reported product/file/service listing",
    "Notify seller and share key details of claim",
    "Place temporary hold on related earnings while reviewing",
    "In clear or repeated cases, restrict or close seller's account",
  ],
  /** Follow-up */
  followUp: "manob.ai may contact claimant if more information needed to verify claim",
} as const;

export const DMCA_COUNTER_NOTICE = {
  /** When to submit */
  when: "If your item was removed and you believe it was a mistake or misidentification",
  /** Required information */
  requiredInfo: [
    "Contact details",
    "Identification of removed content (URLs or item IDs)",
    "Explanation (why content is not infringing - original author, valid license, claimant mistaken)",
    "Good-faith statement (belief material removed by mistake)",
    "Accuracy & consent statement (info is accurate, you have rights to use content)",
    "Signature (full legal name)",
  ],
  /** How to submit */
  method: "Send via manob.ai Support, referencing original case/ticket",
  /** manob.ai response */
  manobResponse: [
    "Review explanation and proof of ownership/license",
    "Compare with original complaint",
    "Decide to keep item offline OR restore item (and release earnings)",
  ],
  /** Finality */
  finality: "manob.ai's decision on the platform level is final",
} as const;

export const REPEATED_INFRINGEMENT = {
  /** What manob.ai may do */
  actions: [
    "Remove or disable multiple items from same seller if repeated infringement found",
    "Remove badges, limit visibility, or restrict withdrawals in serious cases",
    "Suspend or permanently close accounts repeatedly involved in violations",
  ],
} as const;

export const DMCA_MISUSE = {
  /** What DMCA process must NOT be used for */
  prohibitedUses: [
    "Target competitors without real copyright claim",
    "Take down similar but independently created work",
    "Harass, threaten, or pressure other users",
  ],
  /** Consequence */
  consequence: "manob.ai may restrict or suspend accounts that repeatedly send false or abusive claims",
} as const;

// ============================================================================
// NEW USER BENEFITS
// ============================================================================

export const NEW_USER_BENEFITS = {
  /** Free Connects for bidding (new users) */
  freeConnects: 50,
  /** No credit card required */
  creditCardRequired: false,
  /** Instant activation */
  instantActivation: true,
  /** Free MC credits */
  freeMC: 100, // 10,000 tokens to try AI features
} as const;

// ============================================================================
// manob.ai CONNECTS SYSTEM — COMPLETE POLICY & PRICING
// ============================================================================
//
// Connects are in-platform credits used to:
//   - Submit bids/proposals on live jobs (sellers): 1-5 connects per bid
//   - Post live jobs (buyers): 1-4 connects per post
//
// 30 free/month + 50 signup bonus = generous free tier
// Pack pricing: 40/$2, 120/$5, 300/$10, 800/$24
// 67-80% cheaper per connect than Upwork ($0.03-$0.05 vs $0.15)
// ============================================================================

export const CONNECTS = {
  /** What are Connects */
  definition: "manob.ai Connects are in-platform credits used to post live jobs (buyers) and submit bids/proposals on live jobs (sellers).",

  /** How to purchase */
  purchaseMethods: ["Credit/debit card", "Manob Wallet (Manob Coins)"],

  /** Monthly free allocation */
  monthlyFree: 30, // 30 free connects per account per month

  /** New user signup bonus */
  signupBonus: 50, // 50 free connects on account creation

  /** Standard packs (all prices USD) */
  packages: [
    { connects: 40, price: 2.00, costPerConnect: 0.05, label: "Starter" },
    { connects: 120, price: 5.00, costPerConnect: 0.042, label: "Growth" },
    { connects: 300, price: 10.00, costPerConnect: 0.033, label: "Pro" },
    { connects: 800, price: 24.00, costPerConnect: 0.03, label: "Power" },
  ],

  /** Connects cost per bid (seller submitting proposal, based on job budget) */
  bidCosts: [
    { budgetRange: "Less than $50", connects: 1 },
    { budgetRange: "$50 – $250", connects: 2 },
    { budgetRange: "$250 – $1,000", connects: 3 },
    { budgetRange: "$1,000 – $5,000", connects: 4 },
    { budgetRange: "Above $5,000 / long-term", connects: 5 },
  ],

  /** Connects cost per live job post (buyer posting, based on job budget) */
  jobPostCosts: [
    { budgetRange: "Less than $50", connects: 1 },
    { budgetRange: "$50 – $250", connects: 1 },
    { budgetRange: "$250 – $1,000", connects: 2 },
    { budgetRange: "$1,000 – $5,000", connects: 3 },
    { budgetRange: "Above $5,000", connects: 4 },
  ],

  /** Expiration & usage */
  expiry: {
    period: "12 months after the date added to account",
    rollover: "Unused roll over month to month within 12-month validity",
    rolloverLimit: "No separate monthly rollover limit — only 12-month expiry",
    usageOrder: "FIFO — oldest Connects used first across all sources",
    balanceDisplay: "Single combined balance (e.g., 'Available Connects: 86'). No internal batch breakdowns visible.",
    consumptionTiming: "Connects are consumed at the moment of bid submission or job posting. Once consumed, they are not affected by expiry rules.",
  },

  /** Refund policy */
  refunds: {
    returned: [
      "Job removed by manob.ai for verified scam/fraud/policy violation",
      "Bid or job post fails due to confirmed technical error on manob.ai's side",
      "Manual service recovery approved by manob.ai support or risk teams",
    ],
    returnedRules: [
      "Added back as new batch",
      "Same 12-month expiry from date re-added",
      "Used in standard 'oldest first' order",
    ],
    notReturned: [
      "Bid submitted successfully and client hires another seller",
      "Job expires naturally without a hire",
      "User withdraws their own bid",
      "Job closed by client after normal completion or cancellation",
      "User misuses platform or violates manob.ai policies",
    ],
  },

  /** Rules and restrictions */
  rules: [
    "Not cash — cannot be withdrawn",
    "Cannot be refunded as money",
    "Cannot be transferred between accounts",
    "Can be purchased with card or Manob Coins from Manob Wallet",
    "Not legal tender or stored-value instruments",
    "If account restricted/suspended/terminated, remaining Connects may be forfeited",
  ],

  /** manob.ai reserves right to update */
  manobMayUpdate: [
    "Monthly free Connect allocation",
    "Connect consumption rules per action",
    "Pack sizes and prices",
    "Expiry period and related rules",
  ],

  /** Purpose */
  purpose: [
    "Reduce spam",
    "Keep job quality high",
    "Create fair, sustainable marketplace",
  ],

  /** Design goals */
  designGoals: [
    "Affordable for serious developers and clients",
    "Resistant to spam and abuse",
    "Simple to understand and communicate",
    "Economically aligned with long-term marketplace health",
  ],

  /** Typical cost reference */
  typicalBidCost: "A typical mid-range bid (3 Connects) costs ~$0.15 from Starter pack, ~$0.10 from Pro/Power pack",
} as const;

// ============================================================================
// FREE TIER — WHAT USERS GET WITHOUT PAYING
// ============================================================================
// 30 free connects/month + 50 signup bonus. 3x more generous than Upwork.
// ============================================================================

export const FREE_TIER = {
  /** Connects (all users) */
  connectsPerMonth: 30, // 30 free connects/month — allows 10-30 bids
  connectsRollover: true, // unused roll over within 12-month expiry
  signupBonusConnects: 50, // 50 free connects on signup

  /** Freelancers (additional) */
  freelancer: {
    mcPerMonth: 50, // 50 MC = 5,000 tokens (~2-3 AI interactions)
    mcRolloverCap: 0, // Free MC does not roll over — unused MC expires at end of month
    maxActiveProposals: 5,
    profileVisibility: "standard" as const,
    canApplyToFeaturedJobs: false,
    skillSlotsMax: 10,
    portfolioItemsMax: 5,
  },

  /** Clients (additional) */
  client: {
    regularJobPosts: "unlimited" as const, // regular jobs are FREE to post (admin-approved)
    mcPerMonth: 30, // 30 MC for AI-assisted job descriptions
    mcRolloverCap: 30,
    canPostFeaturedJobs: false,
    canPostUrgentJobs: false,
    candidateSearchResults: 10,
    invitesPerMonth: 5,
  },

  /** Signup bonus (one-time) */
  signupBonus: {
    connects: 50, // for all users
    freelancerMC: 100, // 10,000 tokens to try AI features
    clientMC: 100,
  },
} as const;

// ============================================================================
// SUBSCRIPTION PLANS
// ============================================================================
// All users already get 30 free connects/month. Plans add EXTRA connects
// on top, plus MC credits and premium features.
//
// Benchmark:
//   Upwork Freelancer Plus: $14.99/month (100 connects)
//   Fiverr Seller Plus: $25-49/month
//   Freelancer.com Professional: $29.95/month (300 bids)
// ============================================================================

export const SUBSCRIPTION_PLANS = {
  freelancer: [
    {
      id: "freelancer_free",
      name: "Free",
      monthlyPrice: 0,
      annualPricePerMonth: 0,
      features: {
        extraConnectsPerMonth: 0, // base 30 free only
        mcPerMonth: 50,
        profileBadge: null,
        prioritySupport: false,
        profileBoost: false,
        exclusiveJobs: false,
        analyticsLevel: "basic" as const,
        skillSlots: 10,
        portfolioItems: 5,
        proposalTemplates: 1,
      },
    },
    {
      id: "freelancer_plus",
      name: "Plus",
      monthlyPrice: 9.99,
      annualPricePerMonth: 7.99, // $95.88/year — 20% savings
      features: {
        extraConnectsPerMonth: 40, // 30 free + 40 = 70 total
        mcPerMonth: 500,
        profileBadge: "plus" as const,
        prioritySupport: false,
        profileBoost: false,
        exclusiveJobs: false,
        analyticsLevel: "standard" as const,
        skillSlots: 25,
        portfolioItems: 15,
        proposalTemplates: 5,
      },
    },
    {
      id: "freelancer_pro",
      name: "Pro",
      monthlyPrice: 19.99,
      annualPricePerMonth: 15.99, // $191.88/year — 20% savings
      features: {
        extraConnectsPerMonth: 100, // 30 free + 100 = 130 total
        mcPerMonth: 2_000,
        profileBadge: "pro" as const,
        prioritySupport: true,
        profileBoost: true,
        exclusiveJobs: true,
        analyticsLevel: "advanced" as const,
        skillSlots: 50,
        portfolioItems: 30,
        proposalTemplates: 15,
      },
    },
    {
      id: "freelancer_elite",
      name: "Elite",
      monthlyPrice: 39.99,
      annualPricePerMonth: 31.99, // $383.88/year — 20% savings
      features: {
        extraConnectsPerMonth: 300, // 30 free + 300 = 330 total
        mcPerMonth: 8_000,
        profileBadge: "elite" as const,
        prioritySupport: true,
        profileBoost: true,
        exclusiveJobs: true,
        analyticsLevel: "premium" as const,
        skillSlots: 100,
        portfolioItems: 50,
        proposalTemplates: 50,
      },
    },
  ],

  client: [
    {
      id: "client_free",
      name: "Free",
      monthlyPrice: 0,
      annualPricePerMonth: 0,
      features: {
        regularJobPosts: "unlimited" as const,
        mcPerMonth: 30,
        featuredJobs: false,
        urgentJobs: false,
        candidateSearch: 10,
        invitesPerMonth: 5,
        dedicatedManager: false,
        customBranding: false,
      },
    },
    {
      id: "client_starter",
      name: "Starter",
      monthlyPrice: 14.99,
      annualPricePerMonth: 11.99,
      features: {
        regularJobPosts: "unlimited" as const,
        mcPerMonth: 200,
        featuredJobs: true,
        urgentJobs: false,
        candidateSearch: 50,
        invitesPerMonth: 20,
        dedicatedManager: false,
        customBranding: false,
      },
    },
    {
      id: "client_business",
      name: "Business",
      monthlyPrice: 49.99,
      annualPricePerMonth: 39.99,
      features: {
        regularJobPosts: "unlimited" as const,
        mcPerMonth: 1_000,
        featuredJobs: true,
        urgentJobs: true,
        candidateSearch: 200,
        invitesPerMonth: 100,
        dedicatedManager: true,
        customBranding: true,
      },
    },
    {
      id: "client_enterprise",
      name: "Enterprise",
      monthlyPrice: null, // custom pricing
      annualPricePerMonth: null,
      features: {
        regularJobPosts: "unlimited" as const,
        mcPerMonth: 5_000,
        featuredJobs: true,
        urgentJobs: true,
        candidateSearch: null, // unlimited
        invitesPerMonth: null, // unlimited
        dedicatedManager: true,
        customBranding: true,
      },
    },
  ],
} as const;

// ============================================================================
// JOB POSTING — TYPES, COSTS & UPGRADES
// ============================================================================
// Two job types: Regular (free, admin-approved) and Live (instant, costs connects)
// ============================================================================

export const JOB_POSTING = {
  /** Regular Jobs — free, require admin approval */
  regularJobs: {
    name: "Regular Jobs",
    cost: 0, // FREE to post
    requiresApproval: true,
    statusFlow: "On Review → Published → Hired/Expired",
    connectsRequired: 0,
    duration: "Remains live until hired or manually stopped",
    features: [
      "Admin Approval Required: Must be approved before going live",
      "Bidding: Open to all freelancers after approval",
      "Free Posts: Regular jobs don't require Connects to post",
    ],
  },

  /** Live Jobs — instant, costs connects */
  liveJobs: {
    name: "Live Jobs",
    cost: "connects",
    requiresApproval: false, // instant publication
    connectsCost: [
      { budgetRange: "Less than $50", connects: 1 },
      { budgetRange: "$50 – $250", connects: 1 },
      { budgetRange: "$250 – $1,000", connects: 2 },
      { budgetRange: "$1,000 – $5,000", connects: 3 },
      { budgetRange: "Above $5,000", connects: 4 },
    ],
    features: [
      "Instant Publication: No admin approval needed (goes live immediately)",
      "Time-Limited: User defines how long job stays active",
      "Countdown Timer: Visible duration indicator",
      "Auto-Expiration: Moves to expired section when timer ends",
      "Repost Option: Available from expired section",
      "Requires Connects: Uses 1-4 Connects based on job budget (new users get 50 free Connects)",
    ],
    designRationale: [
      "Small cost to posting prevents spam",
      "Posting cost lower than or equal to bidding cost at same budget",
      "Serious jobs remain cheap to post",
    ],
  },

  /** Premium upgrades (available for both job types) */
  upgrades: {
    featured: {
      price: 7.99,
      description: "Highlighted at top of search results for 7 days",
      durationDays: 7,
    },
    urgent: {
      price: 5.99,
      description: "Marked as urgent, appears in urgent jobs feed, 48h priority",
      durationDays: 2,
    },
    private: {
      price: 4.99,
      description: "Only invited freelancers can see and bid",
      durationDays: null,
    },
    nda: {
      price: 3.99,
      description: "Require digital NDA before viewing full details",
      durationDays: null,
    },
    sealedBids: {
      price: 4.99,
      description: "Freelancers cannot see other bids",
      durationDays: null,
    },
    highlight: {
      price: 2.99,
      description: "Color-highlighted listing in search results",
      durationDays: 7,
    },
  },

  /** Bundle discount */
  allUpgradesBundle: {
    price: 24.99, // vs $30.94 individual (19% savings)
    includes: ["featured", "urgent", "private", "nda", "sealedBids", "highlight"],
  },
} as const;

// ============================================================================
// SERVICE STRUCTURE
// ============================================================================

export const SERVICE_STRUCTURE = {
  /** Maximum packages per service */
  maxPackages: 3,
  packageTiers: ["Basic", "Standard", "Premium"],
  packageIncludes: [
    "Fixed price",
    "Delivery time",
    "Specific features (marked with checkmarks)",
    "Feature exclusions (marked with X)",
  ],
  /** Upload process steps */
  uploadSteps: [
    "Overview (Title, Category, Tags, Metadata)",
    "Pricing (Package definitions, pricing fields)",
    "Description & FAQ (Rich text, minimum 1 FAQ)",
    "Gallery & Publish (Thumbnail, video, gallery images)",
  ],
  /** Thumbnail requirements */
  thumbnailRequirements: {
    dimensions: "812x530px",
    maxSize: "1MB",
    formats: ["PNG", "JPG"],
  },
  /** Video requirements */
  videoRequirements: {
    maxSize: "100MB",
    formats: ["MP4", "MKV"],
  },
} as const;

// ============================================================================
// PRODUCT REQUIREMENTS
// ============================================================================

export const PRODUCT_REQUIREMENTS = {
  /** Required product information */
  requiredFields: [
    "Product Name",
    "Category & Subcategory",
    "Key Features",
    "Short Description",
    "HTML/Rich Text Description",
    "Tags (up to 5)",
    "Thumbnail Image (782x398px, max 1MB)",
    "Main File (ZIP format, max 1GB)",
    "Screenshots (up to 10)",
    "Regular & Extended License Pricing",
  ],
  optionalFields: [
    "Demo URL",
    "Documentation URL",
  ],
  thumbnailRequirements: {
    dimensions: "782x398px",
    maxSize: "1MB",
  },
  mainFileRequirements: {
    format: "ZIP",
    maxSize: "1GB",
  },
} as const;

// ============================================================================
// APPROVAL WORKFLOW
// ============================================================================

export const APPROVAL_WORKFLOW = {
  products: {
    standardApprovalDays: "3-7 business days",
    complexItemsDays: "Up to 7 days (full themes, multi-file plugins)",
    resubmissionDays: "Typically approved within 48 hours",
    rejectionTypes: ["Soft Reject (can fix and resubmit)", "Hard Reject (cannot resubmit)"],
  },
  services: {
    approvalTime: "24-48 hours (faster than products)",
    rejectionTypes: ["Soft reject", "Hard reject"],
  },
  jobs: {
    regularJobs: "Require admin approval",
    liveJobs: "Instant publication (no approval needed)",
    adminOverride: "Can reject any job anytime",
  },
} as const;

// ============================================================================
// ORDER LIFECYCLE
// ============================================================================

export const ORDER_LIFECYCLE = [
  {
    status: "Order Created",
    description: "Payment Complete - Order placed but not started, awaiting requirements",
  },
  {
    status: "Requirements Submitted / Agreement Reached",
    description: "Buyer submits requirements OR seller agrees to start without requirements",
  },
  {
    status: "In Progress",
    description: "Seller actively working, can request extensions, buyer can request revisions",
  },
  {
    status: "Delivery",
    description: "Seller submits completed work with attachments",
  },
  {
    status: "Completed",
    description: "Buyer accepts delivery, funds released to seller (after hold period)",
  },
] as const;

// ============================================================================
// PRODUCT CATEGORIES
// ============================================================================

export const PRODUCT_CATEGORIES = [
  "WordPress Themes & Plugins",
  "HTML/CSS Templates",
  "UI Kits & Component Libraries",
  "Mobile App Templates (React Native, Flutter, Swift)",
  "Code Scripts & Snippets",
  "Design Systems",
  "Email Templates",
  "Landing Page Templates",
] as const;

// ============================================================================
// BUYER EXPERIENCE
// ============================================================================

export const BUYER_EXPERIENCE = {
  description: "Buyer-facing features and experience specification",

  searchAndDiscovery: {
    engine: "Elasticsearch-powered full-text search with filters",
    features: [
      "Keyword search across product names, descriptions, tags, and seller profiles",
      "Category browsing with hierarchical navigation (e.g., Web Templates > WordPress > E-commerce)",
      "Filters: price range, rating, delivery time, seller level, technology stack, license type",
      "Sort by: relevance, newest, best-selling, price (low/high), rating",
      "AI-powered recommendations based on browsing history and purchase patterns (Phase 2, Month 12+)",
    ],
    sellerVisibility: {
      factors: ["Product rating and review count", "Seller badge level", "Completion rate and response time", "Sales volume", "Listing recency"],
      note: "Search ranking is organic and quality-based. No paid placement or featured listing fees.",
    },
  },

  productPreview: {
    digitalProducts: {
      liveDemoURL: "Optional seller-provided live demo link displayed prominently on product page",
      screenshotGallery: "Up to 10 screenshots/images per product, with zoom and lightbox",
      videoPreview: "Optional video walkthrough (up to 100MB)",
      aiPreview: "Phase 2: AI-powered preview showing buyer's brand colors/content applied to the template before purchase",
      codePreview: "Partial code structure preview (folder tree, key files) without full source access",
    },
    services: {
      portfolio: "Seller portfolio with past work examples and case studies",
      packageComparison: "Side-by-side comparison of Basic/Standard/Premium packages with feature matrix",
      sellerVideo: "Optional intro video from the seller",
    },
  },

  shoppingCart: {
    supported: true,
    features: [
      "Multi-item cart for digital products (add multiple items, checkout once)",
      "Save for later functionality (move items between cart and saved list)",
      "Cart persistence across sessions (stored in account, not just browser)",
      "Bundle suggestions: 'Sellers also offer customization for this product' upsell",
      "Coupon/promo code support at checkout",
    ],
    serviceOrders: "Services are ordered individually (not added to cart) due to custom requirements per order",
    implementation: "Phase 1 — core feature for product marketplace launch",
  },

  wishlistAndCollections: {
    features: [
      "Save products to wishlist with one-click heart icon",
      "Create named collections (e.g., 'WordPress themes for client projects')",
      "Share collections via public link",
      "Price drop notifications for wishlisted items",
      "New product alerts from followed sellers",
    ],
    implementation: "Phase 1 — lightweight feature, high retention impact",
  },

  buyerOnboarding: {
    newBuyerFlow: [
      "Step 1: Sign up (email/Google)",
      "Step 2: Welcome screen with 3 paths: 'Browse Products', 'Find a Freelancer', 'Build with AI'",
      "Step 3: Category preference selection (optional) for personalized recommendations",
      "Step 4: Curated 'Staff Picks' landing page showing top-rated products across categories",
    ],
    firstPurchaseIncentive: "10% off first purchase (capped at $10 discount) via automatic coupon",
    guidedExperience: "Contextual tooltips on first visit: 'How ratings work', 'Buyer protection explained', 'How to request revisions'",
  },

  notifications: {
    channels: ["In-app notification center", "Email (configurable frequency: instant/daily digest/weekly)", "Browser push notifications (opt-in)"],
    triggers: {
      orders: ["Order confirmed", "Seller delivered work", "Revision requested", "Refund status update", "Review reminder (7 days post-delivery)"],
      marketplace: ["New product from followed seller", "Price drop on wishlisted item", "Similar product to recent purchase", "Weekly curated picks based on interests"],
      account: ["Payout processed", "Subscription renewal reminder", "Connect balance low", "Security alerts"],
    },
    implementation: "Phase 1 for order notifications, Phase 2 for marketplace and personalization",
  },

  trustSignals: {
    description: "Trust-building elements for buyers on a new marketplace with limited transaction history",
    elements: [
      "Buyer Protection badge on every listing ('Money-back guarantee within 15 days')",
      "Seller verification status displayed (email verified, phone verified, ID verified via Stripe)",
      "Platform escrow messaging: 'Payment held securely until you approve delivery'",
      "Community-driven content: curated 'Editor's Choice' collections by manob.ai team",
      "Transparent seller stats: response time, completion rate, total orders (even if low numbers)",
      "Live transaction counter on homepage: 'X orders completed this week' (social proof)",
    ],
    earlyStageStrategy: "Until organic reviews accumulate, lean heavily on process trust (escrow, protection, verification) rather than social proof trust (reviews, badges).",
  },

  accessibility: {
    complianceTarget: "WCAG 2.1 AA",
    screenReaderSupport: [
      "ARIA labels on all interactive elements and form controls",
      "Alt text required on all product images and seller avatars",
      "Semantic HTML throughout (nav, main, article, section, aside, header, footer)",
      "Live region announcements for dynamic content (cart updates, notifications, search results loading)",
    ],
    keyboardNavigation: [
      "All interactive elements (buttons, links, inputs, dropdowns, modals) reachable via Tab key",
      "Visible focus indicators on every focusable element (3px solid outline, high-contrast color)",
      "Skip-to-content link at top of every page",
      "Escape key closes modals and dropdowns, focus returns to trigger element",
    ],
    colorContrast: {
      normalText: "4.5:1 minimum contrast ratio (WCAG AA)",
      largeText: "3:1 minimum contrast ratio (18px+ or 14px+ bold)",
      uiComponents: "3:1 minimum for icons, borders, and interactive element boundaries",
      testing: "Automated Lighthouse accessibility audits in CI/CD pipeline",
    },
    multilingualSearch: {
      description: "Bangla + English search queries return results in both languages",
      implementation: "Elasticsearch with ICU Analysis plugin for Bangla tokenization and stemming",
      behavior: "A query in Bangla returns Bangla AND English results (and vice versa) ranked by relevance",
      phase: "Phase 1 for English, Phase 2 for Bangla search support",
    },
    responsiveDesign: {
      approach: "Mobile-first design — all layouts built for 320px width first, then scaled up",
      breakpoints: ["320px (small mobile)", "375px (standard mobile)", "768px (tablet)", "1024px (desktop)", "1440px (large desktop)"],
      lowBandwidth: "Lazy-loaded images, compressed assets (<200KB initial JS bundle), works on 2G/3G connections typical in BD rural areas",
      testing: "Chrome DevTools throttling to simulate Slow 3G. Target: full page interactive within 5s on 3G.",
    },
  },
} as const;

// ============================================================================
// KEY DIFFERENTIATORS
// ============================================================================

export const KEY_DIFFERENTIATORS = [
  {
    title: "Dual Marketplace Model",
    description: "Products AND services from ONE account. No need for separate profiles. Unified seller dashboard.",
  },
  {
    title: "Non-Exclusive Licensing",
    description: "Sell same product on multiple platforms. No platform lock-in. Freedom to diversify.",
  },
  {
    title: "Competitive Revenue Split",
    description: "Products: 30% manob.ai / 70% Seller. Services: 20% manob.ai / 80% Seller. Early bird sellers get even better rates: only 10% commission on both products and services. No monthly or listing fees.",
  },
  {
    title: "Job Board Integration",
    description: "Post jobs and hire directly. Competitive bidding. 30 free Connects/month + 50 signup bonus. Connects cost $0.03-$0.05 each (67-80% cheaper than Upwork).",
  },
  {
    title: "Built-in Support System",
    description: "6 months free support with products. Buyers open tickets directly on manob.ai, sellers respond via dashboard. No external tools needed.",
  },
  {
    title: "Community Discussion Forum",
    description: "Built-in forum for all users. Get help from the manob.ai community, discuss technical topics, share knowledge.",
  },
] as const;

// ============================================================================
// REFERRAL PROGRAM
// ============================================================================
// Two-sided referral: both referrer and referee benefit.
// Cap prevents abuse. Credit-based to keep users on platform.
// ============================================================================

export const REFERRAL_PROGRAM = {
  /** Freelancer refers another freelancer */
  freelancerReferral: {
    referrerReward: {
      type: "platform_credit" as const,
      amount: 15.00, // $15 credit
      condition: "Referee completes first project worth $50+",
      maxPerYear: 500.00,
    },
    refereeReward: {
      type: "mixed" as const,
      credit: 10.00, // $10 platform credit
      connects: 30, // 30 free connects
      mc: 200, // 200 MC (20,000 tokens)
      condition: "Upon account verification",
    },
  },

  /** Anyone refers a new client */
  clientReferral: {
    referrerReward: {
      type: "platform_credit" as const,
      amount: 25.00, // $25 credit (higher because clients = revenue)
      condition: "Referee makes first payment of $100+",
      maxPerYear: 1_000.00,
    },
    refereeReward: {
      type: "mixed" as const,
      credit: 20.00, // $20 off first project
      mc: 300, // 300 MC
      condition: "Upon first job post",
    },
  },

  /** Cross-referral (freelancer refers client or vice versa) */
  crossReferral: {
    referrerReward: {
      type: "platform_credit" as const,
      amount: 20.00,
      condition: "Referee completes first transaction",
      maxPerYear: 750.00,
    },
  },

  /** Manob Coins per referral */
  manobCoinsPerReferral: "Referrer also earns 500 Manob Coins per successful referral",

  /** Anti-abuse rules */
  rules: {
    creditExpirationDays: 180, // credits expire in 6 months
    minimumAccountAgeDays: 14,
    sameIPBlocked: true,
    selfReferralBlocked: true,
    verificationRequired: true, // email + phone
    cooldownBetweenReferralsDays: 0,
  },
} as const;

// ============================================================================
// PAYMENT PROCESSING COSTS (INTERNAL — NOT USER-FACING)
// ============================================================================
// These are manob.ai's costs, NOT passed to users. Used for financial modeling.
// ============================================================================

export const PAYMENT_PROCESSING_COSTS = {
  /** Incoming payments (client pays for services/products) */
  incoming: {
    stripe: {
      domestic: { rate: 0.029, fixed: 0.30 }, // 2.9% + $0.30
      international: {
        rate: 0.031, // 3.1% base
        fixed: 0.30,
        crossBorder: 0.015, // +1.5% cross-border surcharge
        currencyConversion: 0.01, // +1% if currency conversion needed
        /** Effective international rate: 3.1% + 1.5% + 1% = 5.6% + $0.30 (worst case with FX) */
        effectiveRateWithFX: 0.056,
        /** Effective international rate without FX: 3.1% + 1.5% = 4.6% + $0.30 */
        effectiveRateWithoutFX: 0.046,
      },
    },
    /** Blended rate model for financial planning */
    blendedRateAssumption: {
      domesticShare: 0.40, // 40% domestic transactions
      internationalShare: 0.60, // 60% international (global marketplace)
      blendedRate: 0.04, // weighted: 40% × 2.9% + 60% × 4.6% = 3.92% ≈ approximately 4.0% (actual: 3.92%, rounded up for conservative planning)
      blendedFixed: 0.30,
      note: "5% buyer processing fee provides healthy margin even under worst-case international blended rate",
    },
    crypto: {
      rate: 0.01, // 1% via Coinbase Commerce
      networkFee: 0.01, // ~$0.01 on L2
    },
  },

  /** Outgoing payments (paying sellers) */
  outgoing: {
    bankTransfer: {
      domestic: { averageRate: 0.0057 }, // ~0.57% via domestic banking rails
      international: { averageRate: 0.01, fixed: 2.00 }, // ~1% + $2 via international rails (Wise/banking)
    },
    wire: { fixed: 25.00 },
  },

  /** Summary: processing cost coverage at 5% buyer fee */
  marginAnalysis: {
    buyerFeeRate: 0.05,
    worstCaseCost: "International with FX: 5.6% + $0.30 incoming + 1% payout = ~6.9% total",
    typicalCost: "Blended: 4.0% + $0.30 incoming + 0.57% payout = ~4.9% total",
    note: "5% buyer fee covers typical processing cost with margin. On high-value orders, the $0.30 fixed fee is negligible and margins expand.",

    fxRiskManagement: {
      description: "Strategy for managing negative-margin international payment corridors where costs exceed the 5% buyer fee",
      problem: "International transactions with currency conversion cost up to 6.9% total (5.6% Stripe + 0.3% fixed + 1% payout), exceeding the 5% buyer processing fee by ~1.9%",

      shortTerm: {
        timeline: "Months 0-12",
        strategy: "Absorb the loss as a customer acquisition cost",
        rationale: "At early stage, international transactions are a small fraction of volume. The ~1.9% loss on international-with-FX transactions is acceptable as a growth investment.",
        estimatedImpact: "At $100K/month GMV with 30% international-with-FX transactions, the loss is ~$570/month — manageable within the marketing budget.",
        calculation: "$100K × 30% × 1.9% = $570/month",
      },

      mediumTerm: {
        timeline: "Months 12-24",
        strategy: "Tiered buyer fees by payment corridor",
        implementation: [
          "Domestic (same-currency): 5% buyer fee (current, profitable)",
          "International (no FX): 5% buyer fee (break-even to slight profit)",
          "International (with FX): 7% buyer fee (covers 6.9% cost with margin)",
        ],
        uxApproach: "Display fee transparently at checkout: 'International processing fee: 7%'. Buyers paying in platform currency (wallet) still pay 0%.",
        competitiveContext: "Fiverr charges 5.5% flat globally. A 7% fee for FX transactions is higher but transparent. Wallet payments at 0% incentivize wallet adoption.",
      },

      longTerm: {
        timeline: "Months 24+",
        strategy: "Multi-currency settlement to reduce FX costs",
        implementation: [
          "Open Stripe accounts in EUR, GBP, and USD to receive payments in local currency",
          "Match seller payout currency to buyer payment currency where possible (e.g., EUR buyer → EUR seller payout = no FX conversion)",
          "Batch international payouts weekly instead of per-transaction to reduce per-payout fixed costs",
        ],
        expectedCostReduction: "Eliminates 1% currency conversion fee on matched-currency transactions. Reduces effective international rate from 6.9% to ~5.5%.",
      },

      walletIncentive: {
        description: "Wallet payments bypass Stripe entirely, eliminating all processing costs",
        strategy: "Incentivize wallet adoption through 0% processing fee (vs 5-7% on card)",
        targetWalletShare: "30-40% of transactions by Year 2",
        impact: "Each wallet transaction saves 5-7% in processing costs. At 35% wallet share and $500K/month GMV, savings = ~$8,750-$12,250/month",
      },
    },
  },
} as const;

// ============================================================================
// REGULATORY & COMPLIANCE PLAN — GLOBAL PAYMENTS, KYC/AML, TAX, DATA PRIVACY
// ============================================================================

export const REGULATORY_COMPLIANCE_PLAN = {
  description: "Regulatory and compliance framework for operating a global marketplace with cross-border payments",

  paymentCompliance: {
    pciDSS: {
      approach: "Stripe handles all card data (PCI Level 1). manob.ai never touches, stores, or processes card numbers.",
      certification: "SAQ-A (self-assessment questionnaire) — lowest compliance burden since all payment data is handled by Stripe",
      cost: "Included in Stripe fees. Annual SAQ review: ~$500",
    },
    moneyTransmission: {
      approach: "manob.ai operates as a marketplace facilitator, NOT a money transmitter. Stripe Connect handles all fund flows as the payment facilitator.",
      stripeConnectModel: "Stripe acts as the merchant of record for payment processing. Sellers are connected accounts. This shields manob.ai from money transmission licensing requirements in most jurisdictions.",
      jurisdictionsRequiringAttention: [
        { region: "US", requirement: "Marketplace facilitator laws vary by state. Stripe Connect covers federal requirements.", action: "Legal review by Month 6", cost: 2000 },
        { region: "EU", requirement: "PSD2 compliance for payment services. Stripe handles SCA (Strong Customer Authentication).", action: "GDPR compliance audit by Month 3", cost: 3000 },
        { region: "Bangladesh", requirement: "Bangladesh Bank approval for cross-border payment facilitation.", action: "Legal counsel engagement by Month 1", cost: 1500 },
      ],
      totalLegalSetupCost: 6500,
    },
  },

  kycAML: {
    currentApproach: "Minimal KYC at onboarding (email + phone verification only). Stripe handles seller identity verification for payout eligibility.",
    phase1: {
      timeline: "Month 0-6",
      measures: [
        "Email verification required for all accounts",
        "Phone verification required for seller accounts",
        "Stripe Identity for payout setup (government ID + selfie)",
        "$50 minimum withdrawal acts as natural AML threshold",
        "15-day payout hold provides chargeback protection window",
      ],
      note: "Stripe Identity handles KYC for payouts, shifting compliance burden to Stripe as the regulated entity.",
    },
    phase2: {
      timeline: "Month 6-12",
      measures: [
        "Enhanced due diligence for sellers exceeding $10K monthly GMV",
        "Transaction monitoring for suspicious patterns (rapid deposits/withdrawals, unusual geographic patterns)",
        "Automated screening against OFAC/EU sanctions lists via Stripe",
        "Annual KYC refresh for high-volume sellers",
      ],
    },
    phase3: {
      timeline: "Month 12-24",
      measures: [
        "Full AML program documentation for regulatory audits",
        "Suspicious Activity Report (SAR) filing capability",
        "Third-party AML compliance audit (annual)",
        "Dedicated compliance officer hire at $50K+ monthly GMV",
      ],
    },
  },

  taxCompliance: {
    approach: "Phased tax compliance aligned with geographic expansion",
    digitalServicesTax: {
      description: "Many jurisdictions require marketplaces to collect VAT/GST on digital products",
      phase1Markets: ["Bangladesh (15% VAT)", "US (sales tax varies by state — use Stripe Tax)", "EU (VAT MOSS — simplified reporting via Stripe)"],
      implementation: "Stripe Tax for automated tax calculation and collection in supported markets",
      cost: "Stripe Tax: 0.5% per transaction (on top of standard Stripe fees)",
    },
    sellerTaxObligations: {
      approach: "Sellers are responsible for their own income tax reporting. Platform provides annual earnings summaries.",
      us1099: "Issue 1099-K for US sellers exceeding $600/year (IRS requirement effective 2024)",
      euDAC7: "Report seller activity to EU tax authorities under DAC7 directive for sellers exceeding €2,000/year",
    },
    estimatedAnnualComplianceCost: {
      year1: 8000,
      year2: 18000,
      year3: 35000,
      note: "Costs scale with geographic expansion and transaction volume. Year 1 focuses on Bangladesh + US + EU core markets only.",
    },
  },

  dataPrivacy: {
    gdpr: {
      status: "Required for EU users from day 1",
      measures: ["Privacy policy with GDPR disclosures", "Cookie consent management", "Right to deletion implementation", "Data Processing Agreement (DPA) with Stripe and AI providers", "Data breach notification procedure (72-hour requirement)"],
      cost: "Initial GDPR audit: $3,000. Ongoing DPO service: $500/month",
    },
    ccpa: {
      status: "Required for California users",
      measures: ["Privacy policy with CCPA disclosures", "Do Not Sell My Personal Information option", "Consumer rights request handling"],
    },
  },

  complianceBudget: {
    year1: { legal: 12000, audit: 3000, tools: 2000, total: 17000 },
    year2: { legal: 20000, audit: 8000, tools: 5000, total: 33000 },
    year3: { legal: 35000, audit: 15000, tools: 8000, total: 58000 },
    note: "Year 1 compliance costs are front-loaded (legal setup). Year 2-3 costs increase with geographic expansion and transaction volume.",
  },
} as const;

// ============================================================================
// REVENUE STREAMS
// ============================================================================

export const REVENUE_STREAMS = {
  /** Revenue mix estimates are Year 2 projections assuming 10K+ active buyers */
  note: "Revenue mix estimates are Year 2 projections assuming 10K+ active buyers. AI Energy Sales merged into MC Credit Sales (single AI currency). Shares sum to 100%.",
  primary: [
    {
      stream: "Product Commission",
      rate: "30% (regular) / 10% (early bird)",
      description: "Commission on product sales (support fee + product price) — primary early revenue driver",
      estimatedRevenueShare: 0.35,
    },
    {
      stream: "Service Commission",
      rate: "20% (regular) / 10% (early bird)",
      description: "Commission on service orders — services drive most marketplace GMV",
      estimatedRevenueShare: 0.30,
    },
    {
      stream: "Buyer Fees",
      rate: "Category-specific",
      description: "Buyer fee on products (100% to manob.ai, admin-controlled per category) + 5% card processing fee",
      estimatedRevenueShare: 0.15,
    },
    {
      stream: "MC Credit Sales",
      rate: "$0.001/MC",
      description: "AI credits (45% gross margin) — conservative estimate for unproven feature; includes former AI Energy Sales",
      estimatedRevenueShare: 0.05,
    },
    {
      stream: "Connect Sales",
      rate: "$0.03-$0.05/connect",
      description: "Connects for bidding and live job posting — low per-unit revenue",
      estimatedRevenueShare: 0.05,
    },
  ],
  secondary: [
    {
      stream: "Subscription Plans",
      rate: "$9.99-$49.99/mo (or $7.99-$39.99/mo billed annually)",
      description: "Premium plans for freelancers and clients — generous free tier suppresses conversion",
      estimatedRevenueShare: 0.05,
    },
    {
      stream: "Job Post Upgrades",
      rate: "$2.99-$24.99",
      description: "Featured, urgent, private job listings",
      estimatedRevenueShare: 0.03,
    },
    {
      stream: "Extended Support",
      rate: "30-75% of product price",
      description: "Extended support renewals (30% at purchase, 45% during, 75% after expiry)",
      estimatedRevenueShare: 0.02,
    },
  ],

  /** Projected revenue mix evolution as platform matures across 3 years */
  revenueEvolution: {
    description: "Projected revenue mix evolution as platform matures",
    year1: {
      note: "Pre-PMF. Heavy early bird. Limited buyer traffic. AI features in beta.",
      productCommission: 0.25,     // Lower due to 80%+ early bird sellers at 10%
      serviceCommission: 0.20,     // Lower take rate, fewer transactions
      buyerFees: 0.20,             // 5% buyer fee is consistent regardless of seller tier
      mcCreditSales: 0.02,         // AI features in beta, minimal adoption
      connectSales: 0.15,          // Sellers actively bidding, buying connects
      subscriptionPlans: 0.03,     // Very low conversion on new platform
      jobPostUpgrades: 0.10,       // Job board may be early traction channel
      extendedSupport: 0.05,       // Some product purchases include support
      totalGMV: "Target: $50K-$100K/month",
      totalRevenue: "Target: $5K-$15K/month",
    },
    year2: {
      note: "Early PMF. Early bird sellers transitioning to regular rates. 10K+ active buyers.",
      productCommission: 0.35,
      serviceCommission: 0.30,
      buyerFees: 0.15,
      mcCreditSales: 0.05,
      connectSales: 0.05,
      subscriptionPlans: 0.05,
      jobPostUpgrades: 0.03,
      extendedSupport: 0.02,
      totalGMV: "Target: $200K-$500K/month",
      totalRevenue: "Target: $40K-$100K/month",
    },
    year3: {
      note: "Growth phase. All sellers on regular rates. AI builder gaining traction. Subscription conversion improving.",
      productCommission: 0.30,     // Stabilizes as services grow faster
      serviceCommission: 0.35,     // Services become dominant (industry pattern)
      buyerFees: 0.12,             // Proportionally smaller as mix shifts to services
      mcCreditSales: 0.08,         // AI features proven, adoption growing
      connectSales: 0.04,          // Mature users buy in bulk, lower per-unit
      subscriptionPlans: 0.07,     // Better conversion with proven platform value
      jobPostUpgrades: 0.02,       // Smaller share as commission revenue dominates
      extendedSupport: 0.02,
      totalGMV: "Target: $1M-$3M/month",
      totalRevenue: "Target: $200K-$600K/month",
    },
    keyTrends: [
      "Services overtake products by Year 3 (industry pattern: Upwork/Fiverr both 80%+ services)",
      "AI/MC revenue grows from 2% to 8% as features mature and user adoption increases",
      "Subscription conversion improves from 1-2% (Year 1) to 4-5% (Year 3) as platform demonstrates value",
      "Connect revenue share decreases as bulk purchasing and subscription bundles reduce per-unit revenue",
      "Buyer fees remain steady in absolute terms but decrease as % as commission revenue scales",
    ],
    blendedRateProjection: {
      description: "Effective blended commission rate across all sellers, accounting for early bird mix and graduated tier compression",
      year1: {
        blendedRate: 0.18,
        rationale: "~80% of sellers on early bird (10%), ~20% on standard rates (20-30%). Weighted average: ~18%. Early bird dominates Year 1 take rate.",
      },
      year2: {
        blendedRate: 0.17,
        rationale: "Early bird sellers expiring throughout the year, but graduated tiers kicking in for high-volume sellers who reach $5K+ lifetime GMV. The graduated discounts (15% at $5K-$20K GMV) partially offset the early bird expiry uplift.",
      },
      year3: {
        blendedRate: 0.15,
        rationale: "All sellers on standard rates, but graduated commission compresses the effective service rate to 14-16% for top sellers. Services are ~35% of revenue by Year 3, and high-volume service sellers cluster in lower tiers.",
      },
      revenueImpact: "Year 3 revenue targets may be 5-8% lower than headline commission rates (30% products, 20% services) would suggest. At $2M/month GMV with 15% blended vs 20% headline, the gap is ~$100K/month in forgone revenue.",
      referenceExport: "PRICING_POWER_ANALYSIS.commissionJustification and COMMISSION_STRUCTURE.graduatedServiceCommission.revenueImpact partially capture this, but this projection makes the year-over-year blended rate trend explicit.",
    },
  },

  /** Financial impact modeling if AI features fail to gain meaningful adoption */
  aiFailureScenario: {
    description: "Financial impact if AI Website Builder and MC credit features fail to gain meaningful adoption",
    scenario: "AI features (MC credits, vibe coding, AI website builder) remain at <1% of revenue through Year 3",
    revenueImpact: {
      lostRevenue: "5-8% of projected Year 2-3 revenue (MC credits + indirect AI-driven marketplace purchases)",
      adjustedYear2Mix: {
        productCommission: 0.37,    // Absorbs 2% from MC
        serviceCommission: 0.32,    // Absorbs 2% from MC
        buyerFees: 0.15,
        mcCreditSales: 0.01,       // Minimal — only power users
        connectSales: 0.05,
        subscriptionPlans: 0.05,
        jobPostUpgrades: 0.03,
        extendedSupport: 0.02,
        // Sum: 1.00
      },
      adjustedYear3Mix: {
        productCommission: 0.34,
        serviceCommission: 0.38,
        buyerFees: 0.12,
        mcCreditSales: 0.01,
        connectSales: 0.04,
        subscriptionPlans: 0.07,
        jobPostUpgrades: 0.02,
        extendedSupport: 0.02,
        // Sum: 1.00
      },
    },
    costSavings: {
      aiAPICosts: "Reduced from $4,000/mo to $500/mo (basic chatbot only)",
      infrastructureReduction: "AI compute savings of ~$1,500/mo",
      netMonthlySavings: 5000,
      note: "AI failure reduces revenue by 5-8% but also reduces costs by ~$5K/mo, partially offsetting the loss",
    },
    strategicImpact: {
      starterKitMarketplace: "Without AI builder driving demand, starter kits become regular templates — still viable but less differentiated",
      competitiveMoat: "Platform loses its primary differentiator vs ThemeForest/Fiverr. Falls back to commission pricing and unified account as moat.",
      pivotOption: "If AI fails, redirect engineering resources to marketplace quality tools (better search, recommendations, analytics) to strengthen core marketplace moat",
    },
    bottomLine: "AI failure is survivable. The core marketplace (products + services + jobs) generates 92-95% of revenue even in the success case. AI is a growth accelerator, not a dependency. The platform remains viable as a commission-based marketplace without AI features.",
  },
} as const;

// ============================================================================
// MONETIZATION SIMPLIFICATION
// ============================================================================

export const MONETIZATION_SIMPLIFICATION = {
  description: "Phased monetization rollout to avoid overwhelming users with complexity at launch",

  currentComplexity: {
    mechanisms: 11,
    currencies: 5,
    assessment: "Too complex for launch. Users cannot be expected to understand 5 value stores and 11 fee types on day one.",
  },

  launchSimplification: {
    phase1_launch: {
      timeline: "Months 0-6",
      activeMechanisms: 4,
      activeCurrencies: 1,
      details: {
        mechanisms: [
          "Product commission (30/70 or 10/90 early bird)",
          "Service commission (20/80 or 10/90 early bird)",
          "Buyer processing fee (5% card, 0% wallet)",
          "Small order fee ($2.50 on services under $100)",
        ],
        currencies: ["USD only — no Manob Coins, Connects, MC, or AI Energy at launch"],
        deferred: ["Subscriptions", "Connects", "MC/AI Energy", "Job post upgrades", "Extended support purchases", "Manob Wallet"],
      },
      userExperience: "Buyers see one price + processing fee. Sellers see one commission rate. That's it.",
    },
    phase2_expansion: {
      timeline: "Months 6-12",
      activeMechanisms: 7,
      activeCurrencies: 3,
      added: ["Connects system (for job board)", "Subscription plans (2 tiers only: Free + Pro)", "Extended support"],
      currencies: ["USD", "Connects", "Manob Wallet balance"],
      note: "Connects and wallet are introduced ONLY when the job board launches. Subscriptions start with just 2 tiers (not 8).",
    },
    phase3_full: {
      timeline: "Months 12-24",
      activeMechanisms: 10,
      activeCurrencies: 4,
      added: ["MC/AI Energy (when AI builder exits beta)", "Job post upgrades", "Full subscription tiers (4 per user type)"],
      currencies: ["USD", "Connects", "Manob Wallet", "MC (AI Energy)"],
      note: "Full monetization only after users are familiar with core mechanics. Manob Coins merged into Manob Wallet balance (not a separate currency).",
    },
  },

  currencySimplification: {
    problem: "5 separate value stores (USD, Manob Coins, Connects, MC, AI Energy) is confusing",
    solution: {
      merge1: "Manob Coins and Manob Wallet balance are consolidated into one: 'Manob Wallet' denominated in USD equivalent",
      merge2: "AI Energy and MC are the same thing — use 'AI Energy' as the user-facing brand, 'MC' as the unit internally",
      result: "3 value stores at full rollout: Wallet balance (USD), Connects (for bidding), AI Energy in MC (for AI features)",
      note: "3 currencies is in line with Upwork's model (USD + Connects + Boost credits)",
    },
  },

  userCommunication: {
    principle: "Each fee/currency is introduced with a contextual explainer at the moment it becomes relevant — never in a long list",
    examples: [
      "First time posting a job: 'Use Connects to bid on jobs. You have 50 free Connects to start.'",
      "First time using AI builder: 'AI features use AI Energy (measured in MC). You have 100 free MC.'",
      "First time checking out: 'A 5% processing fee applies to card payments. Pay with your Manob Wallet for 0% fees.'",
    ],
  },
} as const;

// ============================================================================
// COMPETITIVE COMPARISON — AT A GLANCE
// ============================================================================

export const COMPETITIVE_COMPARISON = {
  commissionModel: {
    ours: "Products: 30/70, Services: 20/80, Early Bird: 10/90",
    themeForest: "30-50% (depending on exclusivity and volume)",
    upwork: "5-20% (20% on first $500/client, 10% on $500-$10K, 5% over $10K)",
    fiverr: "20% (flat)",
    freelancerCom: "10% or $5 min",
    advantage: "Early bird 10% is industry-lowest; non-exclusive licensing lets sellers sell everywhere",
  },
  buyerFees: {
    ours: "5% card processing (0% for wallet) + $2.50 small order fee (services < $100 only)",
    upwork: "3-5% + $0.99-$14.99 contract fee",
    fiverr: "5.5% + $3.50 small order fee",
    freelancerCom: "3% or $3 min",
    advantage: "Competitive buyer fees (lower than Fiverr's 5.5%); wallet payments are free; no small order fee on products ever",
  },
  connectCost: {
    ours: "$0.03-$0.05/connect (pack-dependent)",
    upwork: "$0.15/connect",
    fiverr: "N/A (gig model)",
    freelancerCom: "Plan-based bids",
    advantage: "67-80% cheaper than Upwork per connect",
  },
  freeMonthlyConnects: {
    ours: 30,
    upwork: 10,
    fiverr: "N/A",
    freelancerCom: 6,
    advantage: "3x more free connects than Upwork, 5x more than Freelancer.com, plus 50 signup bonus",
  },
  uniqueDifferentiator: {
    ours: "Products AND services from ONE account",
    themeForest: "Products only, requires exclusivity for better rates",
    upwork: "Services/freelancing only",
    fiverr: "Services only (gig model)",
    advantage: "Only platform combining digital products + services + job board in one seller account",
  },
} as const;

// ============================================================================
// MARKET SIZING — TOP-DOWN TAM/SAM/SOM TO VALIDATE BOTTOM-UP PROJECTIONS
// ============================================================================

export const MARKET_SIZING = {
  description: "Top-down market sizing to validate bottom-up projections",

  tam: {
    description: "Total Addressable Market — global opportunity across all segments",
    segments: {
      digitalProductMarketplaces: {
        size: "~$6B annually",
        source: "Envato ($1.3B+ cumulative author earnings), Creative Market, Gumroad, TemplateMonster combined",
        growthRate: "3-5% CAGR (mature market, declining for templates as AI/page builders grow)",
      },
      freelanceServicePlatforms: {
        size: "~$15B annually",
        source: "Upwork ($690M revenue on $4.1B GSV), Fiverr ($360M on $1.1B GMV), Freelancer.com, Toptal, and long tail",
        growthRate: "12-15% CAGR (accelerating with remote work trends)",
      },
      aiCodingAndWebsiteBuilders: {
        size: "~$3B annually (2025), projected $12B by 2028",
        source: "Bolt.new, Lovable, Replit, Vercel v0, Wix AI, Squarespace AI — combined funding exceeds $2B",
        growthRate: "50-80% CAGR (fastest growing segment)",
      },
      onlineJobBoards: {
        size: "~$30B annually",
        source: "Indeed, LinkedIn, Glassdoor — dominated by generalist platforms",
        growthRate: "8-10% CAGR",
      },
    },
    totalTAM: "$54B annually",
    note: "TAM represents the maximum theoretical market if manob.ai captured 100% of all addressable segments. This is not a realistic target — it contextualizes the opportunity size.",
  },

  sam: {
    description: "Serviceable Addressable Market — segments manob.ai can realistically compete in",
    filters: [
      "Developer-focused only (excludes generalist job boards, design-only marketplaces)",
      "Digital products + web development services (excludes physical products, non-tech freelancing)",
      "Markets where English is a primary or secondary language",
      "Price range $10-$10,000 per transaction (excludes enterprise contracts >$10K)",
    ],
    segments: {
      developerDigitalProducts: {
        size: "$1.5B",
        rationale: "~25% of $6B total — WordPress themes, scripts, templates, UI kits for developers",
      },
      webDevFreelanceServices: {
        size: "$4B",
        rationale: "~27% of $15B total — web development, app development, and related technical services",
      },
      aiWebsiteBuilding: {
        size: "$1B",
        rationale: "~33% of $3B — developer-focused AI builders (excludes no-code/consumer tools like Wix)",
      },
      developerJobBoard: {
        size: "$2B",
        rationale: "~7% of $30B — niche developer job boards and project-based hiring",
      },
    },
    totalSAM: "$8.5B annually",
    note: "SAM represents the market segments where manob.ai's product (developer marketplace + AI builder) is a relevant solution.",
  },

  som: {
    description: "Serviceable Obtainable Market — realistic capture in first 3 years",
    methodology: "Bottom-up validated against top-down SAM penetration",
    projections: {
      year1: {
        targetGMV: "$600K-$1.2M annually ($50K-$100K/month)",
        samPenetration: "0.007-0.014%",
        activeBuyers: "200-500", // activeBuyers: buyers who complete at least 1 purchase in the past 90 days
        activeSellers: "100-300", // sellers with at least 1 listing and 1 sale in the past 90 days
        validation: "Comparable to Fiverr Year 1 (~$1M GMV). Achievable with founder-led sales + organic SEO.",
      },
      year2: {
        targetGMV: "$2.4M-$6M annually ($200K-$500K/month)",
        samPenetration: "0.03-0.07%",
        activeBuyers: "1000-3000",
        activeSellers: "500-1500",
        validation: "Comparable to Upwork Year 2-3. Requires working paid acquisition ($6K/month) and early network effects.",
      },
      year3: {
        targetGMV: "$12M-$36M annually ($1M-$3M/month)",
        samPenetration: "0.14-0.42%",
        activeBuyers: "10000-30000",
        activeSellers: "3000-8000",
        validation: "Achievable if marketplace flywheel is working. Still <0.5% of SAM — significant headroom remains.",
      },
    },
    keyInsight: "Even the Year 3 optimistic scenario ($36M GMV) represents only 0.42% of the $8.5B SAM. This validates that the targets are achievable without requiring dominant market share. The opportunity ceiling is 20-50x the Year 3 target.",
    planningBasis: {
      description: "Recommended planning figures for financial modeling (lower-quartile planning basis of ranges, rounded conservatively)",
      year1: { gmv: 800000, revenue: 80000, note: "$800K GMV / $80K revenue — conservative planning basis of $600K-$1.2M range" },
      year2: { gmv: 3600000, revenue: 540000, note: "$3.6M GMV / $540K revenue — conservative planning basis of $2.4M-$6M range. Revenue assumes 15% conservative take rate (vs 17% blended projection) to account for early bird tail and graduated commission compression." },
      year3: { gmv: 18000000, revenue: 3600000, note: "$18M GMV / $3.6M revenue — conservative planning basis of $12M-$36M range" },
      rationale: "Ranges reflect uncertainty; planning basis uses lower-quartile conservative figures for burn rate and hiring decisions. Upside scenarios guide stretch goals.",
    },
  },
} as const;

// ============================================================================
// PRODUCT DIFFERENTIATION STRATEGY — UNIQUE VALUE BEYOND CROSS-LISTED INVENTORY
// ============================================================================

export const PRODUCT_DIFFERENTIATION_STRATEGY = {
  description: "Strategy to create unique product value beyond cross-listed inventory from ThemeForest/CodeCanyon",

  aiEnhancedProducts: {
    description: "Every product listed on manob.ai can be customized with the AI builder before purchase. Buyers can preview AI modifications (colors, layout, content) before buying. This is impossible on ThemeForest.",
    buyerValue: "See your brand applied to the template before purchasing — not available anywhere else",
    sellerValue: "Higher conversion rates because buyers can visualize the end result",
    implementation: "AI builder generates a preview using the seller's starter kit + buyer's brand inputs",
  },

  starterKitExclusives: {
    description: "Starter kits designed specifically for the AI builder are exclusive to manob.ai. These are not cross-listed because they require the manob.ai vibe coding integration.",
    targetInventory: "100+ exclusive starter kits within 12 months",
    categories: ["SaaS landing pages", "E-commerce stores", "Portfolio sites", "Blog platforms", "Agency websites"],
    sellerIncentive: "Exclusive starter kit creators get featured placement + 5% commission bonus (25% platform / 75% seller instead of 30/70)",
  },

  starterKitSupplyPlan: {
    description: "Acquisition and production plan for 100+ exclusive AI builder starter kits within 12 months",

    internalProduction: {
      quantity: 20,
      timeline: "Months 0-6",
      approach: "Internal team builds 20 high-quality reference starter kits covering core categories",
      categories: ["SaaS landing page", "E-commerce store", "Portfolio site", "Blog platform", "Agency website", "Documentation site", "Dashboard/admin panel"],
      costPerKit: 500,
      totalCost: 10000,
      purpose: "Establish quality bar, demonstrate the AI builder capability, seed the marketplace with curated inventory",
    },

    sellerRecruitment: {
      quantity: 50,
      timeline: "Months 3-12",
      approach: "Recruit experienced ThemeForest/Envato sellers to create exclusive starter kits for manob.ai",
      incentives: [
        "5% commission bonus (25/75 split instead of 30/70) for exclusive starter kits",
        "Featured placement in AI builder starter kit selection for 90 days",
        "Revenue share: seller earns commission on every AI builder session that uses their kit as base",
        "Early access to AI builder API for kit optimization",
      ],
      recruitmentChannels: [
        "Direct outreach to top 200 ThemeForest sellers with 4.5+ star ratings",
        "Developer community posts (dev.to, Reddit r/webdev, Twitter/X)",
        "Referral bonus: $50 credit for existing sellers who recruit a new exclusive kit creator",
      ],
      expectedConversionRate: 0.10,
      outreachNeeded: 500,
      costPerRecruitedSeller: 75,
      totalRecruitmentCost: 3750,
    },

    bountyProgram: {
      quantity: 30,
      timeline: "Months 6-12",
      approach: "Open bounty program: pay developers to create starter kits to specification",
      bountyPerKit: 200,
      specifications: "Platform provides design briefs, category requirements, and quality guidelines. Developer builds the kit.",
      qualityGate: "All bounty kits go through standard 3-7 day review process. Rejected kits do not receive payment.",
      expectedAcceptanceRate: 0.70,
      submissionsNeeded: 43,
      totalCost: 6000,
    },

    totalPlan: {
      targetKits: 100,
      breakdown: { internal: 20, recruited: 50, bounty: 30 },
      totalBudget: 19750,
      timeline: "12 months",
      costPerKit: 197.50,
      qualityAssurance: "All kits tested with AI builder to ensure vibe coding compatibility before listing",
    },

    revenueProjection: {
      optimistic: {
        salesPerKitPerMonth: 5,
        monthlyRevenue: "100 kits x 5 sales x $29 x 30% commission = $4,350/month",
        annualRevenue: 52200,
        roi: "2.6x ROI in Year 1",
        assumption: "Assumes 10K+ active buyers with strong AI builder adoption",
      },
      realistic: {
        salesPerKitPerMonth: 2,
        monthlyRevenue: "100 kits x 2 sales x $29 x 30% commission = $1,740/month",
        annualRevenue: 20880,
        roi: "1.1x ROI in Year 1",
        assumption: "Assumes 1K-3K active buyers, moderate AI builder adoption",
      },
      pessimistic: {
        salesPerKitPerMonth: 0.5,
        monthlyRevenue: "100 kits x 0.5 sales x $29 x 30% commission = $435/month",
        annualRevenue: 5220,
        roi: "0.26x ROI in Year 1 (investment not recovered)",
        assumption: "Assumes <500 active buyers, limited AI builder traction. Starter kits still serve as platform differentiation even at low sales.",
      },
      planningBasis: "Use realistic scenario (2 sales/kit/month) for financial projections. Pessimistic scenario is survivable — $19,750 investment is less than 1 month of fixed costs.",
    },
  },

  bundledServices: {
    description: "Products on manob.ai can be bundled with the seller's customization service. 'Buy this template + get it customized for $X.' One-click bundle purchase unique to manob.ai.",
    buyerValue: "Buy a template AND get it customized in one transaction — no shopping across platforms",
    revenueImpact: "Bundles increase average order value by 40-60% (product + service in one cart)",
  },

  lowerTotalCost: {
    description: "5% buyer fee (vs. ThemeForest's included markup) + lower commission means sellers can price 10-20% below ThemeForest while earning the same or more.",
    example: "A theme priced at $59 on ThemeForest (seller gets $29.50 at 50% non-exclusive rate) could be priced at $49 on manob.ai (seller gets $34.30 at 30% rate). Buyer saves $10, seller earns $4.80 more.",
    note: "This only works once manob.ai has sufficient buyer traffic to justify sellers optimizing prices for the platform.",
  },

  qualityCuration: {
    description: "Tighter quality standards than ThemeForest. Manual review with 3-7 day turnaround ensures every listed product meets high standards. Positioning: 'fewer products, better quality.'",
    reviewCriteria: ["Code quality", "Documentation completeness", "Responsive design", "Accessibility standards", "Performance benchmarks"],
    rejectionRate: "Target 30-40% rejection rate (vs. ThemeForest's estimated 50-60%) — stricter on code quality, more lenient on design variety",
  },
} as const;

// ============================================================================
// BUYER ACQUISITION STRATEGY — DEMAND-SIDE GROWTH & COLD-START SOLUTION
// ============================================================================

export const BUYER_ACQUISITION_STRATEGY = {
  description: "Demand-side acquisition strategy to solve the marketplace cold-start problem",

  phase1_coldStart: {
    timeline: "Months 0-6",
    strategy: "Supply-led demand generation",
    tactics: {
      crossListedSEO: {
        description: "Non-exclusive sellers cross-list products from ThemeForest/CodeCanyon. Each product page becomes an SEO landing page targeting '[product name] alternative' and '[product name] discount' keywords.",
        expectedTraffic: "500-2,000 organic visits/month by month 6",
        conversionRate: "1-3% (industry avg for marketplace product pages)",
        cost: "Engineering time only — no ad spend",
      },
      aiBuilderAsTopOfFunnel: {
        description: "AI Website Builder offered as free tool (50 free MC on signup). Users who build sites discover marketplace for starter kits, themes, and customization services.",
        expectedTraffic: "1,000-5,000 builder sessions/month",
        conversionToMarketplace: "5-10% of builder users purchase a starter kit or hire a service",
        cost: "AI API costs (~$0.05 per session average)",
      },
      founderLedSales: {
        description: "Direct outreach to 50-100 target buyers (agencies, startups, SMBs) who regularly purchase digital products and freelance services.",
        expectedBuyers: "20-50 active buyers",
        averageSpend: "$200-$500/month per buyer",
        cost: "Founder time — $0 direct cost",
      },
      developerCommunity: {
        description: "Weekly technical blog posts, open-source starter kits on GitHub, dev.to/Medium cross-posts targeting 'best [framework] templates' keywords.",
        expectedTraffic: "2,000-5,000 organic visits/month by month 6",
        cost: "$500/month for content creation tools and freelance writers",
      },
    },
    monthlyBuyerTarget: "200-500 active buyers by month 6",
    totalMonthlyBudget: 500,
  },

  phase2_growth: {
    timeline: "Months 6-18",
    strategy: "Paid acquisition + content flywheel",
    tactics: {
      paidSearch: {
        description: "Google Ads targeting high-intent keywords: 'buy [framework] template', 'hire [skill] developer', 'freelance [technology] expert'",
        monthlyBudget: 3000,
        expectedCPA: 50,
        expectedBuyers: "60 new buyers/month",
        channels: ["Google Ads", "Bing Ads"],
      },
      socialProof: {
        description: "Showcase top-rated products and seller portfolios on social media. Run case studies of successful projects completed on the platform.",
        monthlyBudget: 1000,
        channels: ["Twitter/X", "LinkedIn", "Reddit r/webdev", "Product Hunt launch"],
      },
      seoContent: {
        description: "Scale content to 20+ articles/month targeting comparison keywords, tutorial keywords, and 'best of' lists.",
        monthlyBudget: 2000,
        expectedTraffic: "10,000-30,000 organic visits/month by month 18",
      },
      referralProgram: {
        description: "Buyer referral program: $25 credit for referring a buyer who makes first purchase. Referred buyer gets $20 credit + 300 MC.",
        expectedViralCoefficient: 0.15,
        cost: "Variable — $45 + 300 MC per successful referral",
      },
    },
    monthlyBuyerTarget: "1,000-3,000 active buyers by month 18",
    totalMonthlyBudget: 6000,
  },

  phase3_scale: {
    timeline: "Months 18-36",
    strategy: "Brand + partnerships + marketplace network effects",
    tactics: {
      partnerships: {
        description: "Agency partnerships: onboard 10-20 web development agencies as institutional buyers. Offer volume discounts and dedicated account management.",
        expectedGMV: "$20K-$50K/month from agency partners alone",
      },
      brandBuilding: {
        description: "Position as 'the developer's marketplace' through conference sponsorships (JSConf, WordCamp), podcast sponsorships, and developer influencer collaborations.",
        monthlyBudget: 5000,
      },
      marketplaceEffects: {
        description: "By this phase, organic marketplace effects should drive 40-60% of new buyer acquisition through search, recommendations, and word-of-mouth.",
        organicShare: 0.50,
      },
    },
    monthlyBuyerTarget: "10,000+ active buyers by month 36",
    totalMonthlyBudget: 15000,
  },

  coldStartSolution: {
    description: "The chicken-and-egg problem is solved through a supply-first strategy with three demand hooks",
    supplyStrategy: "Non-exclusive cross-listing makes supply acquisition zero-risk for sellers. Target: 500+ products listed in first 3 months.",
    demandHook1: "AI Website Builder as free tool drives traffic independent of marketplace inventory",
    demandHook2: "SEO landing pages for cross-listed products capture '[product] alternative' search traffic",
    demandHook3: "Founder-led sales to agencies and SMBs creates initial buyer cohort with high repeat purchase potential",
    flywheel: "More buyers → more seller earnings → more sellers list → better selection → more buyers. The non-exclusive model means we can bootstrap supply while building demand.",
  },

  metrics: {
    northStar: "Monthly Active Buyers (MAB) — buyers who complete at least 1 purchase per month",
    leadingIndicators: [
      "Organic search impressions and click-through rate",
      "AI Builder sessions per week",
      "New buyer registrations per week",
      "Buyer activation rate (% of registered buyers who make first purchase within 30 days)",
    ],
    targetActivationRate: 0.15,
    targetRepeatPurchaseRate: 0.30,
    targetTimeToFirstPurchase: "7 days from registration",
  },
} as const;

// ============================================================================
// OPERATIONAL COST MODEL — COMPREHENSIVE EXPENSE TRACKING
// ============================================================================

export const OPERATIONAL_COST_MODEL = {
  description: "Comprehensive cost model including all operational expenses",
  monthlyFixedCosts: {
    total: 41000,
    breakdown: {
      cloudInfrastructure: 5000,
      aiAPICosts: 4000,
      engineeringTeam: 15000,
      customerSupport: 5000,
      legalCompliance: 2000,
      marketingBudget: 5000,
      paymentInfra: 1000,
      officeAndMisc: 1000,
      taxVATCompliance: 1500,    // Tax collection, reporting, remittance across jurisdictions
      insuranceAndContingency: 1500, // E&O insurance, cyber liability, reserve fund
    },
  },
  variableCostsPercentOfGMV: {
    paymentProcessing: 3.7,     // Net after 5% buyer fee offset (includes payout cost)
    fraudAndChargebacks: 0.8,   // Fraud rate reduced from initial 1.0% estimate based on Stripe Radar effectiveness benchmarks (0.1-0.3% typical for digital goods marketplaces)
    refundReserve: 1.5,
    freeCreditsPerUser: 0.5,    // Connects + MC signup bonuses
    referralProgram: 0.3,
    total: 6.8,
  },
  scalingProjections: {
    at50kGMV: { fixed: 41000, variable: 3400, total: 44400 },
    at100kGMV: { fixed: 45000, variable: 6800, total: 51800 },
    at500kGMV: { fixed: 68000, variable: 34000, total: 102000 },
    at1mGMV: { fixed: 98000, variable: 68000, total: 166000 },
  },
  variableCostAtScale: {
    description: "Projected variable cost reduction at higher GMV levels due to volume discounts and operational efficiencies",
    currentRate: 0.068,
    projectedAtScale: {
      gmvThreshold: "$500K+ monthly GMV",
      paymentProcessing: { current: 3.7, atScale: 2.75, note: "Stripe volume discount (2.5% + $0.25 per transaction) kicks in at $500K+/month. Additional savings from payment method mix optimization." },
      fraudAndChargebacks: { current: 0.8, atScale: 0.5, note: "Fraud rate reduced from initial 1.0% estimate based on Stripe Radar effectiveness benchmarks. Better fraud detection models with larger data set further reduce chargebacks at scale." },
      refundReserve: { current: 1.5, atScale: 1.25, note: "Lower refund rates as review quality improves and buyer-seller matching gets smarter." },
      freeCreditsPerUser: { current: 0.5, atScale: 0.5, note: "Stays constant — signup bonuses are a fixed per-user cost." },
      aiCompute: { current: 0, atScale: -0.15, note: "AI compute batching and response caching reduce per-request cost by ~25%. Net savings of ~0.15% of GMV at scale." },
      referralProgram: { current: 0.3, atScale: 0.3, note: "Stays constant — referral incentives scale linearly with GMV." },
      contingencyBuffer: { current: 0, atScale: 0.35, note: "Rounding buffer for unmodeled variable costs (chargebacks, refund processing, currency conversion fees, etc.)" },
      projectedTotalAtScale: 5.5,
    },
    contributionMarginImpact: "Contribution margin improves from ~13% to ~15% at scale due to the 1.3pp variable cost reduction (6.8% to 5.5%). On $1M monthly GMV, this saves ~$13K/month.",
    conservativeAssumption: "All financial projections in MONTHLY_CASH_FLOW_PROJECTION use the 6.8% rate at ALL volume levels. The improvement to ~5.5% is treated as upside, not baked into base case. This provides a built-in margin of safety.",
  },
  note: "Fixed costs increase at scale thresholds due to team growth, infrastructure scaling, and compliance requirements.",
} as const;

// ============================================================================
// EXECUTION PLAN — TECHNICAL ROADMAP, TEAM STRUCTURE & HIRING
// ============================================================================

export const EXECUTION_PLAN = {
  description: "Technical execution roadmap, team structure, hiring plan, weekly milestones, go/no-go gates, contingency pivots, and resource allocation",

  currentTeam: {
    size: 3,
    location: "Bangladesh (remote-first)",
    roles: [
      { role: "Founder/CTO", focus: "Architecture, product strategy, AI integration", allocation: "60% engineering, 40% business" },
      { role: "Full-Stack Engineer", focus: "Marketplace core (listings, orders, payments, escrow)", allocation: "100% engineering" },
      { role: "Full-Stack Engineer", focus: "Frontend, seller/buyer dashboards, admin panel", allocation: "100% engineering" },
    ],
    monthlyBurn: 15000,
    note: "Current team handles MVP development. Bangladesh-based salaries allow 3x engineering output per dollar vs US-based teams.",
  },

  // ---------------------------------------------------------------------------
  // WEEKLY MILESTONE BREAKDOWN — FIRST 3 MONTHS
  // ---------------------------------------------------------------------------

  weeklyMilestones: {
    description: "Week-by-week deliverables for Months 1-3 with clear owners and dependencies",

    month1: {
      week1: {
        deliverables: [
          "Database schema finalized (products, users, orders, payments tables)",
          "Authentication flow (signup, login, OAuth) deployed to staging",
          "CI/CD pipeline operational (GitHub Actions -> Docker -> AWS ECS)",
        ],
        owner: "Founder/CTO (architecture) + Full-Stack Engineer 1 (backend) + Full-Stack Engineer 2 (auth UI)",
        dependencies: "None — greenfield start",
        resourceAllocation: { product: 0.30, infrastructure: 0.60, aiFeatures: 0.10 },
      },
      week2: {
        deliverables: [
          "Seller onboarding wizard (profile, portfolio, payout setup) — frontend + backend",
          "Product listing creation flow (title, description, files, pricing) — backend API",
          "S3 file upload integration for product files and thumbnails",
        ],
        owner: "Full-Stack Engineer 1 (listing API) + Full-Stack Engineer 2 (seller wizard UI)",
        dependencies: "Week 1: Auth flow must be complete for seller onboarding",
        resourceAllocation: { product: 0.70, infrastructure: 0.20, aiFeatures: 0.10 },
      },
      week3: {
        deliverables: [
          "Product listing creation — frontend forms with image upload and live preview",
          "Search and browse — Elasticsearch indexing of product listings",
          "Category taxonomy seeded (7 core categories from PRODUCT_CATEGORIES)",
        ],
        owner: "Full-Stack Engineer 1 (Elasticsearch) + Full-Stack Engineer 2 (listing forms)",
        dependencies: "Week 2: Listing API must be functional",
        resourceAllocation: { product: 0.80, infrastructure: 0.15, aiFeatures: 0.05 },
      },
      week4: {
        deliverables: [
          "Stripe payment integration — checkout flow for product purchases",
          "Order management — buyer can purchase, download, and track orders",
          "Admin panel MVP — product approval queue, user management",
        ],
        owner: "Founder/CTO (Stripe integration) + Full-Stack Engineer 1 (orders) + Full-Stack Engineer 2 (admin)",
        dependencies: "Week 3: Product listings must be browseable; Stripe account must be approved",
        resourceAllocation: { product: 0.75, infrastructure: 0.20, aiFeatures: 0.05 },
        criticalDependency: "Stripe account approval — applied in Week 1, typical approval 3-5 business days. BLOCKER for any transaction processing.",
      },
    },

    month2: {
      week5: {
        deliverables: [
          "Buyer dashboard — order history, downloads, saved products",
          "Seller dashboard — sales analytics, earnings overview, listing management",
          "Product review and rating system",
        ],
        owner: "Full-Stack Engineer 2 (dashboards) + Full-Stack Engineer 1 (reviews API)",
        dependencies: "Month 1: Complete purchase flow must be end-to-end functional",
        resourceAllocation: { product: 0.80, infrastructure: 0.10, aiFeatures: 0.10 },
      },
      week6: {
        deliverables: [
          "Service marketplace — service listing creation with 3-tier packages (Basic/Standard/Premium)",
          "Service order lifecycle — buyer requests, seller accepts/declines, milestone tracking",
          "Escrow system for service payments (hold until delivery accepted)",
        ],
        owner: "Founder/CTO (escrow architecture) + Full-Stack Engineer 1 (service API) + Full-Stack Engineer 2 (service UI)",
        dependencies: "Week 4: Stripe payment integration must be live (escrow builds on payment infrastructure)",
        resourceAllocation: { product: 0.70, infrastructure: 0.25, aiFeatures: 0.05 },
        criticalDependency: "Escrow system requires Stripe Connect or manual hold-and-release pattern. Architecture decision must be made by Week 5.",
      },
      week7: {
        deliverables: [
          "Service delivery and revision flow — file delivery, revision requests, completion",
          "Dispute resolution workflow — buyer opens dispute, admin reviews, resolution",
          "Buyer protection implementation (refund triggers, evidence submission)",
        ],
        owner: "Full-Stack Engineer 1 (delivery/revision API) + Full-Stack Engineer 2 (dispute UI) + Founder/CTO (admin tools)",
        dependencies: "Week 6: Service order lifecycle must be functional",
        resourceAllocation: { product: 0.75, infrastructure: 0.15, aiFeatures: 0.10 },
      },
      week8: {
        deliverables: [
          "Seller payout system — withdrawal requests, Stripe payouts to bank accounts",
          "Commission calculation engine (10% early bird / 20-30% regular, graduated tiers)",
          "Internal alpha testing — full end-to-end flow (list -> buy -> deliver -> payout)",
        ],
        owner: "Founder/CTO (payout integration) + Full-Stack Engineer 1 (commission engine)",
        dependencies: "Week 7: Service delivery flow must be complete for end-to-end test",
        resourceAllocation: { product: 0.60, infrastructure: 0.30, aiFeatures: 0.10 },
        criticalDependency: "Payout integration must complete before any real transactions. This is the last piece of the core payment pipeline.",
      },
    },

    month3: {
      week9: {
        deliverables: [
          "Closed alpha launch — invite 20-30 sellers from founder's network",
          "Seed catalog with 50+ products across core categories",
          "Bug triage and critical fix sprint based on alpha seller feedback",
        ],
        owner: "Founder/CTO (seller outreach + alpha management) + Engineers (bug fixes)",
        dependencies: "Month 2: Complete end-to-end flow must pass internal testing",
        resourceAllocation: { product: 0.50, infrastructure: 0.30, aiFeatures: 0.20 },
      },
      week10: {
        deliverables: [
          "AI website builder — initial prototype (prompt -> starter kit selection -> basic preview)",
          "Manob Wallet integration — Manob Coins balance, earning from sales, spending on purchases",
          "Email notification system (order confirmations, delivery reminders, payout notifications)",
        ],
        owner: "Founder/CTO (AI builder prototype) + Full-Stack Engineer 1 (wallet) + Full-Stack Engineer 2 (notifications)",
        dependencies: "Week 9: Alpha must be live for real user feedback on wallet flow",
        resourceAllocation: { product: 0.40, infrastructure: 0.20, aiFeatures: 0.40 },
      },
      week11: {
        deliverables: [
          "Referral program — unique referral links, $25 referrer + $20 referee credit",
          "SEO foundation — meta tags, sitemap, structured data, blog scaffold",
          "Performance optimization — page load <2s, Lighthouse score >90",
        ],
        owner: "Full-Stack Engineer 2 (referral + SEO) + Full-Stack Engineer 1 (performance)",
        dependencies: "None — parallel workstream",
        resourceAllocation: { product: 0.60, infrastructure: 0.30, aiFeatures: 0.10 },
      },
      week12: {
        deliverables: [
          "GO/NO-GO GATE review (see decisionGates.month3)",
          "Beta launch preparation — waitlist invitations, onboarding documentation",
          "Security audit — OWASP Top 10 checklist, penetration testing on payment flows",
        ],
        owner: "Founder/CTO (gate review + security audit) + Full-Stack Engineer 1 (beta prep)",
        dependencies: "All Month 3 deliverables must be complete for gate review",
        resourceAllocation: { product: 0.40, infrastructure: 0.40, aiFeatures: 0.20 },
      },
    },
  },

  // ---------------------------------------------------------------------------
  // GO/NO-GO DECISION GATES — QUARTERLY CHECKPOINTS
  // ---------------------------------------------------------------------------

  decisionGates: {
    description: "Hard decision points with specific metrics. Each gate has a PROCEED, ADJUST, or PIVOT outcome based on quantitative thresholds.",

    month3: {
      gateName: "Alpha Validation Gate",
      requiredMetrics: {
        activeSellers: { target: 20, minimum: 10, metric: "Sellers with at least 1 approved listing" },
        catalogSize: { target: 50, minimum: 30, metric: "Total approved product/service listings" },
        endToEndTransactions: { target: 5, minimum: 1, metric: "Completed purchase-to-payout cycles" },
        criticalBugs: { target: 0, minimum: 0, metric: "P0 bugs in payment/escrow flow" },
        alphaSellerNPS: { target: 30, minimum: 10, metric: "Net Promoter Score from alpha sellers" },
      },
      outcomes: {
        proceed: "All targets met -> proceed to invite beta (Month 4). Open waitlist to 200 buyers.",
        adjust: "Minimums met but targets missed -> extend alpha by 2 weeks. Founder doubles down on seller outreach. Do NOT open to buyers until 20+ sellers with listings.",
        pivot: "<10 sellers despite direct outreach -> PIVOT: Abandon marketplace-wide launch. Instead, launch as curated product store (founder-sourced inventory only) and add seller self-service later. Reduces chicken-and-egg problem.",
      },
      contingencyPivot: {
        trigger: "<10 sellers after 3 months of direct founder outreach",
        action: "Pivot to direct outreach model — founder personally recruits 50 sellers from ThemeForest/CodeCanyon via LinkedIn and developer Slack communities. Offer 6-month free listing (0% commission) to seed supply.",
        burnAdjustment: "No change — same team, different go-to-market approach",
        timelineImpact: "Delays beta by 4-6 weeks but ensures supply exists before opening demand side",
      },
      owner: "Founder/CTO — sole decision maker at this stage",
    },

    month6: {
      gateName: "Revenue Viability Gate",
      requiredMetrics: {
        monthlyGMV: { target: 70000, minimum: 30000, metric: "Monthly GMV processed through platform" },
        monthlyRevenue: { target: 5000, minimum: 2000, metric: "Monthly platform revenue (commissions + fees)" },
        activeSellers: { target: 100, minimum: 50, metric: "Sellers with at least 1 sale in past 90 days" },
        activeBuyers: { target: 200, minimum: 80, metric: "Buyers with at least 1 purchase in past 90 days" },
        sellerRetentionM3: { target: 0.55, minimum: 0.40, metric: "3-month seller retention rate" },
        angelRoundClosed: { target: true, minimum: false, metric: "Angel round ($150K-$250K) closed" },
      },
      outcomes: {
        proceed: "All targets met, angel round closed -> proceed to Phase 2 hiring (3 new hires). Begin job board development.",
        adjust: "Minimums met but angel round not closed -> reduce burn to $10K/month (founder takes minimal salary, pause non-critical infrastructure spend). Continue operations on reserves while closing angel round.",
        pivot: "<$2K monthly revenue AND <50 sellers -> PIVOT: Extend angel runway by cutting burn to $10K/month. Defer all Phase 2 hires. Founder pivots 100% to seller acquisition (pause engineering). If no improvement by Month 9, consider acqui-hire or platform pivot to pure AI builder (abandon marketplace).",
      },
      contingencyPivot: {
        trigger: "<$5K monthly revenue by Month 6",
        action: "Extend angel runway: cut burn from $15K to $10K/month (founder salary $3K, 2 engineers at $3.5K each). Defer DevOps and support hires indefinitely. Allocate 80% of founder time to seller/buyer acquisition, 20% to engineering.",
        burnAdjustment: "Reduces monthly burn from $15K to $10K — extends reserves by 3 months",
        timelineImpact: "Phase 2 delayed by 3-6 months. Job board and subscription features pushed to Month 12+",
      },
      owner: "Founder/CTO (operational decisions) + Angel investors (funding decision)",
    },

    month9: {
      gateName: "Growth Trajectory Gate",
      requiredMetrics: {
        monthlyGMV: { target: 175000, minimum: 100000, metric: "Monthly GMV — must show 2.5x growth from Month 6" },
        monthlyRevenue: { target: 14000, minimum: 8000, metric: "Monthly revenue — must show month-over-month growth" },
        activeSellers: { target: 300, minimum: 150, metric: "Active sellers (1+ sale in 90 days)" },
        activeBuyers: { target: 800, minimum: 400, metric: "Active buyers (1+ purchase in 90 days)" },
        buyerLTVCAC: { target: 1.5, minimum: 1.0, metric: "Buyer LTV:CAC ratio (using retention-curve-derived LTV)" },
        subscriptionConversion: { target: 0.02, minimum: 0.01, metric: "% of active users on paid subscription plan" },
      },
      outcomes: {
        proceed: "All targets met -> accelerate pre-seed fundraising. Begin PayPal/Wise integration. Launch subscription plans.",
        adjust: "Growth positive but below targets -> delay pre-seed by 3 months. Focus engineering on buyer retention features (recommendation engine, reactivation emails). Cut paid acquisition, double down on content/SEO.",
        pivot: "Flat or declining growth -> PIVOT: Narrow focus to highest-performing category (products OR services, not both). Shut down underperforming marketplace side. Reallocate 100% engineering to the winning vertical.",
      },
      contingencyPivot: {
        trigger: "GMV growth <20% month-over-month for 3 consecutive months (Months 7-9)",
        action: "Narrow marketplace scope: analyze which side (products vs services) has better unit economics and retention. Shut down the weaker side and become a focused vertical marketplace. This reduces engineering surface area by 40% and sharpens positioning.",
        burnAdjustment: "No change in burn, but engineering focus doubles on the surviving vertical",
        timelineImpact: "Simplifies Phase 2 scope. Pre-seed pitch reframes as focused vertical marketplace instead of multi-sided platform.",
      },
      owner: "Founder/CTO (product decisions) + Potential pre-seed investors (funding alignment)",
    },

    month12: {
      gateName: "Scale Readiness Gate",
      requiredMetrics: {
        monthlyGMV: { target: 280000, minimum: 150000, metric: "Monthly GMV — validates flywheel is working" },
        monthlyRevenue: { target: 25000, minimum: 15000, metric: "Monthly platform revenue" },
        activeSellers: { target: 500, minimum: 300, metric: "Active sellers" },
        activeBuyers: { target: 2000, minimum: 1000, metric: "Active buyers" },
        sellerRetentionM12: { target: 0.28, minimum: 0.20, metric: "12-month seller retention rate" },
        preSeedClosed: { target: true, minimum: false, metric: "Pre-seed round ($500K-$750K) closed" },
        contributionMarginPositive: { target: true, minimum: true, metric: "Per-transaction contribution margin is positive (excluding fixed costs)" },
      },
      outcomes: {
        proceed: "All targets met, pre-seed closed -> proceed to Phase 3. Hire AI/ML engineer, frontend engineer, PM, and QA. Begin mobile app and AI builder v2.",
        adjust: "Minimums met but pre-seed not closed -> operate on angel runway extension. Delay Phase 3 hires by 6 months. Founder focuses 50% on fundraising, 50% on operations.",
        pivot: "<$15K monthly revenue AND pre-seed not closed -> CRITICAL DECISION POINT. Options: (1) Bridge round from existing angels ($100K-$150K) to buy 6 more months, (2) Pursue acqui-hire offers from larger marketplaces, (3) Founder returns to consulting to self-fund runway extension.",
      },
      contingencyPivot: {
        trigger: "<$15K monthly revenue AND pre-seed round fails to close",
        action: "Emergency bridge: approach existing angels for $100K bridge at same terms. If bridge fails, founder returns to part-time consulting ($5K-$8K/month) to self-fund. Reduce team to 2 engineers. Extend runway 6-9 months.",
        burnAdjustment: "Cut burn from $27.5K to $12K/month (founder consults, 1 engineer released with 2-month severance)",
        timelineImpact: "Phase 3 delayed indefinitely. Focus entirely on achieving product-market fit with minimal team.",
      },
      owner: "Founder/CTO + Board of advisors (if constituted) + Pre-seed investors",
    },
  },

  // ---------------------------------------------------------------------------
  // TEAM ACCOUNTABILITY MATRIX
  // ---------------------------------------------------------------------------

  teamAccountability: {
    description: "Clear ownership of every major milestone. Each milestone has a single accountable owner (RACI: Accountable), even if multiple people contribute.",

    founderCTO: {
      accountableFor: [
        "Platform architecture decisions and technical debt management",
        "All go/no-go gate decisions (Months 3, 6, 9, 12)",
        "Fundraising — angel round, pre-seed, and seed",
        "First 100 seller acquisitions (direct outreach, Months 1-6)",
        "Stripe/payment integration and escrow architecture",
        "AI website builder prototype and AI model selection",
        "Advisory board recruitment",
        "Hiring decisions for all new roles",
      ],
      weeklyCommitments: "3 code reviews, 1 architecture decision document, 5 seller outreach messages, 1 investor update (post-angel)",
    },

    fullStackEngineer1: {
      accountableFor: [
        "Backend API for marketplace core (listings, orders, escrow, payouts)",
        "Elasticsearch search and discovery pipeline",
        "Commission calculation engine and graduated tiers",
        "Manob Wallet and Manob Coins transaction engine",
        "Performance targets: API response <200ms p95, database query optimization",
      ],
      weeklyCommitments: "5+ PRs merged, 2 code reviews given, 0 critical bugs in payment flow",
    },

    fullStackEngineer2: {
      accountableFor: [
        "All frontend interfaces (seller dashboard, buyer experience, admin panel)",
        "Seller onboarding wizard and product listing creation UI",
        "Service marketplace UI (package selection, order tracking, delivery)",
        "SEO implementation (meta tags, structured data, sitemap, SSR optimization)",
        "Referral program frontend and tracking",
      ],
      weeklyCommitments: "5+ PRs merged, 2 code reviews given, Lighthouse score >90 on key pages",
    },

    phase2Hires: {
      backendEngineer: {
        accountableFor: ["Payment infrastructure expansion (PayPal, Wise, Payoneer)", "KYC/AML compliance integration", "Job board backend and Connect economy"],
        startsMonth: 7,
      },
      devOpsSRE: {
        accountableFor: ["CI/CD pipeline reliability (>99.5% uptime)", "Infrastructure auto-scaling", "Security monitoring and incident response", "SOC 2 Type I preparation"],
        startsMonth: 8,
      },
      customerSupportLead: {
        accountableFor: ["Dispute resolution (<48h response time)", "Seller approval queue (<72h turnaround)", "DMCA notice handling", "Support documentation"],
        startsMonth: 7,
      },
    },

    marketingHire: {
      note: "No dedicated marketing hire in Phase 1-2. Founder handles marketing (content, SEO strategy, social media) until Month 12. Phase 3 PM hire absorbs growth marketing responsibilities.",
      phase1Marketing: "Founder: 15 hours/week on content creation, SEO, social media, seller outreach",
      phase2Marketing: "Founder: 10 hours/week (down from 15) as support lead handles seller communications",
      phase3Marketing: "Product Manager owns growth marketing, content strategy, and user research",
    },
  },

  // ---------------------------------------------------------------------------
  // MILESTONE DEPENDENCY MAP
  // ---------------------------------------------------------------------------

  milestoneDependencies: {
    description: "Critical path analysis — which milestones block others. Failure to deliver a blocking milestone delays all downstream work.",

    criticalPath: [
      {
        milestone: "Stripe account approval",
        blockedBy: "None",
        blocks: ["Payment checkout flow", "Escrow system", "Payout integration", "ALL revenue-generating activities"],
        expectedDuration: "3-5 business days",
        riskLevel: "LOW — standard approval for marketplace",
        mitigation: "Apply on Day 1. Have PayPal as backup payment processor if Stripe delays exceed 2 weeks.",
      },
      {
        milestone: "Payment integration (checkout + escrow)",
        blockedBy: "Stripe account approval",
        blocks: ["First transaction", "Alpha testing with real money", "Go/No-Go Month 3 gate"],
        expectedDuration: "3 weeks (Weeks 4, 6, 7)",
        riskLevel: "HIGH — most complex integration, escrow logic is non-trivial",
        mitigation: "Founder personally owns Stripe integration. Use Stripe test mode from Week 1 to develop in parallel with approval.",
      },
      {
        milestone: "Seller payout system",
        blockedBy: "Payment integration",
        blocks: ["Real seller onboarding (sellers will not list without payout confidence)", "Alpha launch"],
        expectedDuration: "1 week (Week 8)",
        riskLevel: "MEDIUM — Stripe Connect payouts are well-documented but require compliance review",
        mitigation: "Manual payouts as fallback for first 30 days if automated system is delayed.",
      },
      {
        milestone: "50+ product catalog",
        blockedBy: "Product listing flow + Seller onboarding",
        blocks: ["Beta launch (buyers need something to buy)", "Search/browse experience validation"],
        expectedDuration: "4 weeks (Weeks 9-12, concurrent with alpha)",
        riskLevel: "MEDIUM — depends on seller recruitment success",
        mitigation: "Founder manually onboards first 20 sellers. Internal team creates 10 starter kit products as seed inventory.",
      },
      {
        milestone: "Angel round close",
        blockedBy: "Alpha traction data (20+ sellers, first transactions)",
        blocks: ["Phase 2 hires (3 new team members)", "Paid acquisition budget", "PayPal/Wise integration"],
        expectedDuration: "8-12 weeks of fundraising (Months 4-6)",
        riskLevel: "HIGH — fundraising outcome uncertain",
        mitigation: "Contingency burn of $10K/month extends runway to Month 12 without angel funding. See decisionGates.month6.",
      },
      {
        milestone: "Subscription billing (Stripe Billing)",
        blockedBy: "Phase 2 backend engineer hire + Stripe Connect operational",
        blocks: ["Subscription revenue stream", "Premium features rollout"],
        expectedDuration: "4 weeks (Months 8-9)",
        riskLevel: "LOW — Stripe Billing is well-documented",
        mitigation: "Defer if backend hire is delayed. Subscriptions are <5% of Year 1 revenue — acceptable to delay.",
      },
    ],

    parallelWorkstreams: [
      "SEO/content marketing runs parallel to all engineering work (founder-driven)",
      "Seller outreach runs parallel to product development (founder-driven)",
      "AI builder prototype (Month 3) runs parallel to marketplace stabilization",
      "Admin panel development runs parallel to buyer/seller features",
    ],
  },

  // ---------------------------------------------------------------------------
  // RESOURCE ALLOCATION PER PHASE
  // ---------------------------------------------------------------------------

  resourceAllocation: {
    description: "Percentage of total engineering time allocated to product features vs infrastructure vs AI features per phase. Shifts from infrastructure-heavy (Phase 1) to AI-heavy (Phase 3).",

    phase1_months1to6: {
      product: 0.55,
      infrastructure: 0.30,
      aiFeatures: 0.15,
      totalEngineerHours: "3 engineers x 160 hrs/month = 480 hrs/month",
      note: "Infrastructure-heavy early on to build reliable foundation. AI features limited to prototype.",
    },
    phase2_months7to12: {
      product: 0.50,
      infrastructure: 0.30,
      aiFeatures: 0.20,
      totalEngineerHours: "5 engineers x 160 hrs/month = 800 hrs/month (support lead excluded)",
      note: "Product and infrastructure remain balanced. AI allocation increases as marketplace core stabilizes.",
    },
    phase3_months13to24: {
      product: 0.35,
      infrastructure: 0.25,
      aiFeatures: 0.40,
      totalEngineerHours: "8 engineers x 160 hrs/month = 1,280 hrs/month (PM and QA excluded)",
      note: "Major shift to AI features as marketplace core is stable. AI becomes the primary differentiation investment.",
    },

    allocationRationale: "Phase 1 prioritizes 'must work' infrastructure and core marketplace flows that directly enable revenue. Phase 2 balances new product features with scaling the foundation. Phase 3 bets on AI as the moat — by this point, the marketplace should be generating revenue to fund the AI investment.",
  },

  hiringRoadmap: {
    phase1_mvp: {
      timeline: "Months 0-6",
      teamSize: 3,
      focus: "Launch core marketplace (products + services). Ship MVP of AI builder.",
      milestones: [
        "Month 1-2: Product listing, search, and purchase flow live",
        "Month 3-4: Service marketplace with order lifecycle and escrow",
        "Month 5-6: AI website builder MVP with starter kit integration",
      ],
      hiresNeeded: 0,
      note: "Current team delivers MVP. Scope is deliberately limited — no job board, no subscriptions, no graduated commissions yet.",
    },
    phase2_growth: {
      timeline: "Months 6-12",
      teamSize: 6,
      focus: "Add job board, subscription billing, payment method expansion.",
      milestones: [
        "Month 6-7: Job board with Connect-based bidding",
        "Month 8-9: Subscription plans and billing (Stripe Billing)",
        "Month 10-11: PayPal + Wise payout integration",
        "Month 12: Graduated service commission system",
      ],
      newHires: [
        { role: "Backend Engineer", focus: "Payment infrastructure, payout methods, compliance", monthlyCost: 5000 },
        { role: "DevOps/SRE", focus: "Infrastructure scaling, CI/CD, monitoring, security", monthlyCost: 4500 },
        { role: "Customer Support Lead", focus: "Dispute resolution, seller approvals, DMCA handling", monthlyCost: 3000 },
      ],
      additionalMonthlyBurn: 12500,
      totalMonthlyBurn: 27500,
    },
    phase3_scale: {
      timeline: "Months 12-24",
      teamSize: 10,
      focus: "Scale AI features, international expansion, advanced marketplace features.",
      milestones: [
        "Month 12-14: AI builder v2 with vibe coding workspace",
        "Month 15-17: Payoneer + Stripe Connect integration",
        "Month 18-20: Mobile app (React Native) for seller/buyer dashboards",
        "Month 21-24: Recommendation engine, advanced analytics, marketplace quality tools",
      ],
      newHires: [
        { role: "AI/ML Engineer", focus: "AI builder optimization, model routing, recommendation engine", monthlyCost: 6000 },
        { role: "Frontend Engineer", focus: "Mobile app, vibe coding workspace UI", monthlyCost: 5000 },
        { role: "Product Manager", focus: "Feature prioritization, user research, metrics", monthlyCost: 4000 },
        { role: "QA Engineer", focus: "Test automation, regression testing, security audits", monthlyCost: 3500 },
      ],
      additionalMonthlyBurn: 18500,
      totalMonthlyBurn: 46000,
    },
  },

  technicalArchitecture: {
    stack: {
      frontend: "Next.js (React) + TypeScript",
      backend: "Node.js + TypeScript (NestJS framework)",
      database: "PostgreSQL (primary) + Redis (caching/sessions)",
      search: "Elasticsearch (product/service discovery)",
      storage: "AWS S3 (product files, thumbnails, uploads)",
      hosting: "AWS (ECS/Fargate for containers, CloudFront CDN)",
      payments: "Stripe (primary), PayPal/Wise/Payoneer (phased)",
      ai: "OpenAI API + Anthropic API (multi-model routing)",
      realtime: "WebSocket (Socket.io) for chat and vibe coding",
      cicd: "GitHub Actions + Docker",
    },
    scalabilityApproach: "Containerized microservices with horizontal auto-scaling. Database read replicas at 10K+ concurrent users. CDN for all static assets and product previews.",
    securityMeasures: [
      "PCI-DSS compliance via Stripe (no card data touches our servers)",
      "SOC 2 Type I target by Month 18",
      "OWASP Top 10 security audit at each major release",
      "Rate limiting, CSRF protection, input sanitization on all endpoints",
      "Encrypted at rest (AES-256) and in transit (TLS 1.3)",
    ],
  },

  deliveryMethodology: {
    approach: "2-week sprints with weekly demos",
    planning: "Quarterly OKRs with monthly milestone reviews",
    qualityGates: [
      "All PRs require code review from at least 1 other engineer",
      "Automated test suite must pass before merge (>80% coverage target)",
      "Staging environment for QA before production deploy",
      "Feature flags for gradual rollout of major features",
    ],
  },

  riskMitigation: {
    busFactorRisk: "Founder/CTO is a single point of failure. Mitigated by comprehensive documentation (this knowledge base), infrastructure-as-code, and hire of DevOps/SRE by Month 8.",
    scopeCreep: "Feature phases are deliberately sequential. No feature advances to next phase until current phase milestones are met.",
    talentRetention: "Bangladesh engineering market offers competitive salaries at $4-6K/month for senior talent. Equity participation for early hires.",
  },

  fundingAndRunway: {
    currentFunding: "Bootstrapped — founder-funded from consulting revenue and personal savings",
    cashPosition: "6 months runway at current $15K/month burn rate ($90K reserves)",
    preRevenueGap: {
      monthlyDeficit: "$26K-$36K/month (fixed costs $41K minus projected revenue $5K-$15K)",
      runwayAtCurrentBurn: "6 months without additional funding",
      breakEvenTimeline: "Month 14-18 at optimistic projections, Month 24-30 at conservative",
    },
    fundingStrategy: {
      phase1: { timeline: "Month 0-6", source: "Bootstrap + angel round ($150K-$250K)", use: "Extend runway to 18 months, fund Phase 2 hires" },
      phase2: { timeline: "Month 6-12", source: "Pre-seed round ($500K-$750K)", use: "Scale team to 6, fund paid acquisition, international payout integration" },
      phase3: { timeline: "Month 12-24", source: "Seed round ($1.5M-$2.5M)", use: "Scale team to 10, geographic expansion, marketplace flywheel acceleration" },
    },
    capitalEfficiency: "Bangladesh-based team provides 3x capital efficiency vs US-based startups. $250K angel round provides equivalent runway to $750K in US market.",
  },

  advisoryBoard: {
    description: "Planned advisory board to mitigate solo founder risk and add domain expertise",
    current: "No formal advisors. Founder leverages developer community network for informal guidance.",
    plannedAdvisors: [
      { role: "Technical Advisor", expertise: "Marketplace architecture and scaling (ex-Upwork/Fiverr engineering)", timeline: "Recruit by Month 3", compensation: "0.25-0.5% equity advisory shares" },
      { role: "Legal/Compliance Advisor", expertise: "Cross-border payments, KYC/AML, marketplace regulations", timeline: "Recruit by Month 6", compensation: "0.25% equity + $500/month retainer" },
      { role: "GTM Advisor", expertise: "Developer marketplace growth, community building, content marketing", timeline: "Recruit by Month 6", compensation: "0.25% equity advisory shares" },
    ],
    totalEquityAllocation: "0.75-1.25% of equity reserved for advisory board",
    governanceNote: "Advisors meet monthly for 1-hour sessions. Formal advisory agreements with 2-year vesting and 1-year cliff.",
  },
} as const;

// ============================================================================
// FOUNDER PROFILE — BACKGROUND, KEY PERSON RISK, AND MITIGATION
// ============================================================================

export const FOUNDER_PROFILE = {
  name: "Nowshid Alam Sayem",
  role: "Founder & CEO",
  background: {
    technical: "Full-stack developer with 5+ years experience in Next.js, React, Node.js, PostgreSQL",
    domain: "Built and shipped multiple web applications; deep understanding of developer tooling ecosystem",
    entrepreneurial: "Solo founder bootstrapping from Bangladesh — demonstrates resourcefulness and capital efficiency",
    marketInsight: "Identified gap between Envato (products-only) and Upwork (services-only) through personal experience as both a buyer and seller on these platforms",
  },
  whyThisFounder: "Combines technical ability to build the platform solo with firsthand experience of the pain points on both sides of the marketplace. Operating from Bangladesh provides 3x capital efficiency vs US-based competitors.",
  keyPersonRisk: {
    currentState: "Single founder, 3-person engineering team — high bus factor risk",
    mitigation: {
      month3: "Comprehensive documentation for all systems, automated deployment pipelines",
      month6: "Second senior engineer hired with full system knowledge",
      month8: "DevOps engineer hired — no single person owns infrastructure",
      month12: "Every critical system has 2+ people who can maintain it",
    },
    founderAbsenceScenario: {
      at3months: "High risk — team can maintain but not extend. Documented runbooks cover operations.",
      at12months: "Moderate risk — CTO-level hire can lead development. Founder focuses on strategy/fundraising.",
    },
  },
} as const;

// ============================================================================
// MONTHLY CASH FLOW PROJECTION — 18-MONTH DETAILED FORECAST
// ============================================================================

export const MONTHLY_CASH_FLOW_PROJECTION = {
  description: "Month-by-month cash flow projection for Months 1-24, covering pre-launch through post-pre-seed growth and Year 2 scaling",
  assumptions: {
    startingReserves: 90000,
    fixedCostBase: { month1to6: 41000, month7to12: 43500, month13to18: 46000, month19to24: 53000, note: "Increases as team grows per hiring plan" },
    variableCostRate: 0.068, // 6.8% of GMV (payment processing + hosting marginal costs)
    angelRound: { amount: 200000, closesAtMonth: 6 },
    preSeedRound: { amount: 600000, closesAtMonth: 12 },
  },
  months: {
    month1:  { revenue: 0,     totalFixedCosts: 15000, variableCosts: 0,    netCashFlow: -15000, cumulativeCash: 75000,  note: "Pre-launch. Lean burn — founder salary + infrastructure only" },
    month2:  { revenue: 0,     totalFixedCosts: 15000, variableCosts: 0,    netCashFlow: -15000, cumulativeCash: 60000,  note: "Pre-launch. Development sprint" },
    month3:  { revenue: 0,     totalFixedCosts: 15000, variableCosts: 0,    netCashFlow: -15000, cumulativeCash: 45000,  note: "Pre-launch. Beta testing begins" },
    month4:  { revenue: 2000,  totalFixedCosts: 15000, variableCosts: 2000, netCashFlow: -15000, cumulativeCash: 30000,  note: "Soft launch. ~$30K GMV. Early bird sellers, low volume" },
    month5:  { revenue: 3500,  totalFixedCosts: 15000, variableCosts: 3400, netCashFlow: -14900, cumulativeCash: 15100,  note: "~$50K GMV. Seller onboarding accelerates" },
    month6:  { revenue: 5000,  totalFixedCosts: 15000, variableCosts: 4760, netCashFlow: -14760, cumulativeCash: 200340, note: "~$70K GMV. Angel round closes ($200K). Cash position stabilizes" },
    month7:  { revenue: 8000,  totalFixedCosts: 20000, variableCosts: 6800, netCashFlow: -18800, cumulativeCash: 181540, note: "~$100K GMV. Team expansion begins (junior eng + support)" },
    month8:  { revenue: 11000, totalFixedCosts: 22000, variableCosts: 9520, netCashFlow: -20520, cumulativeCash: 161020, note: "~$140K GMV. Job board launch drives engagement" },
    month9:  { revenue: 14000, totalFixedCosts: 24000, variableCosts: 11900, netCashFlow: -21900, cumulativeCash: 139120, note: "~$175K GMV. Subscription revenue begins" },
    month10: { revenue: 18000, totalFixedCosts: 25000, variableCosts: 14280, netCashFlow: -21280, cumulativeCash: 117840, note: "~$210K GMV. Connects revenue materializes" },
    month11: { revenue: 22000, totalFixedCosts: 26000, variableCosts: 16660, netCashFlow: -20660, cumulativeCash: 97180,  note: "~$245K GMV. Organic growth accelerating" },
    month12: { revenue: 25000, totalFixedCosts: 27500, variableCosts: 19040, netCashFlow: -21540, cumulativeCash: 675640, note: "~$280K GMV. Pre-seed closes ($600K). Strong cash position" },
    month13: { revenue: 30000, totalFixedCosts: 32000, variableCosts: 22440, netCashFlow: -24440, cumulativeCash: 651200, note: "~$330K GMV. AI builder MVP drives starter kit revenue" },
    month14: { revenue: 35000, totalFixedCosts: 35000, variableCosts: 25840, netCashFlow: -25840, cumulativeCash: 625360, note: "~$380K GMV. Marketing spend increases" },
    month15: { revenue: 40000, totalFixedCosts: 38000, variableCosts: 29240, netCashFlow: -27240, cumulativeCash: 598120, note: "~$430K GMV. Content/SEO flywheel spinning" },
    month16: { revenue: 46000, totalFixedCosts: 40000, variableCosts: 32640, netCashFlow: -26640, cumulativeCash: 571480, note: "~$480K GMV. Approaching contribution margin positive" },
    month17: { revenue: 53000, totalFixedCosts: 43000, variableCosts: 36040, netCashFlow: -26040, cumulativeCash: 545440, note: "~$530K GMV. Unit economics improving" },
    month18: { revenue: 60000, totalFixedCosts: 46000, variableCosts: 39440, netCashFlow: -25440, cumulativeCash: 520000, note: "~$580K GMV. Clear path to break-even visible" },
    month19: { revenue: 94500,  totalFixedCosts: 48000, variableCosts: 47600,  netCashFlow: -1100,  cumulativeCash: 518900, note: "~$700K GMV. Take rate rising as early bird expires. Near break-even" },
    earlyBirdTransitionNote: {
      description: "The 57.5% revenue jump from M18 ($60K) to M19 ($94.5K) reflects early bird expiry modeling simplification",
      explanation: [
        "The model uses M19 as the midpoint step-change for simplicity, showing all early bird sellers transitioning simultaneously",
        "In operational reality, the transition would be smoother over M17-M21 as individual sellers' 12-month early bird terms expire on different signup dates",
        "The graduated early bird expiry (recommended in EXTENDED_EARLY_BIRD_ANALYSIS.decisionCriteria.graduatedTransition) would spread the rate increase from 10% to 20-30% across multiple months",
        "A realistic monthly revenue ramp would look like: M17 $53K, M18 $65K, M19 $78K, M20 $90K, M21 $105K — a 3-4 month ramp rather than a single-month cliff",
      ],
      revenueReconciliation: "The total revenue across M17-M21 is roughly equivalent whether modeled as a smooth ramp or a step-change at M19. The step-change is conservative because it delays the revenue uplift into a single later month.",
      referenceExport: "EXTENDED_EARLY_BIRD_ANALYSIS.decisionCriteria.graduatedTransition",
    },
    month20: { revenue: 108000, totalFixedCosts: 50000, variableCosts: 54400,  netCashFlow: 3600,   cumulativeCash: 522500, note: "~$800K GMV. First cash-flow-positive month. Milestone achieved" },
    month21: { revenue: 121500, totalFixedCosts: 52000, variableCosts: 61200,  netCashFlow: 8300,   cumulativeCash: 530800, note: "~$900K GMV. Consistent profitability. Reinvesting in growth" },
    month22: { revenue: 135000, totalFixedCosts: 54000, variableCosts: 68000,  netCashFlow: 13000,  cumulativeCash: 543800, note: "~$1M GMV. Scaling team for $1M+ GMV operations" },
    month23: { revenue: 148500, totalFixedCosts: 56000, variableCosts: 74800,  netCashFlow: 17700,  cumulativeCash: 561500, note: "~$1.1M GMV. Operating leverage improving" },
    month24: { revenue: 162000, totalFixedCosts: 58000, variableCosts: 81600,  netCashFlow: 22400,  cumulativeCash: 583900, note: "~$1.2M GMV. Strong positive cash flow. Validated unit economics" },
  },
  year2Total: {
    totalRevenue: 1033500,
    totalFixedCosts: 552000,
    totalVariableCosts: 573240,
    netCashFlow: -91740,
    note: "Year 2 (M13-M24) is net negative on a full-year basis. H1 (M13-M18) loses ~$155.6K (revenue $264K vs costs $419.6K). H2 (M19-M24) generates +$63.9K (revenue $769.5K vs costs $705.6K). H2 profitability partially offsets H1 losses but full-year net is -$91.7K. Cash position remains strong at $583.9K due to pre-seed funding.",
  },
  revenueBreakdown: {
    description: "Revenue composition by stream at key milestones",
    month6:  { marketplaceCommission: 3500, buyerFees: 500, subscriptions: 0, connects: 0, starterKits: 1000, total: 5000 },
    month12: { marketplaceCommission: 15000, buyerFees: 2500, subscriptions: 3000, connects: 2000, starterKits: 2500, total: 25000 },
    month18: { marketplaceCommission: 32000, buyerFees: 6000, subscriptions: 10000, connects: 5000, starterKits: 7000, total: 60000 },
    month24: { marketplaceCommission: 97200, buyerFees: 16200, subscriptions: 22000, connects: 12600, starterKits: 14000, total: 162000 },
  },
  breakEvenAnalysis: {
    breakEvenMonth: "Month 16-20 depending on scenario",
    baseCase: "Month 18 — contribution margin positive at ~$580K monthly GMV",
    optimistic: "Month 16 — faster GMV ramp due to viral content or strategic partnership",
    pessimistic: "Month 20+ — slower seller acquisition or lower average order value than projected",
    note: "Break-even defined as monthly revenue exceeding monthly total costs (fixed + variable). Full profitability including recovery of prior losses requires sustained operation beyond break-even.",
  },
} as const;

// ============================================================================
// SELLER RETENTION PLAYBOOK — MECHANISMS TO IMPROVE SELLER RETENTION
// ============================================================================

export const SELLER_RETENTION_PLAYBOOK = {
  description: "Concrete mechanisms to improve seller retention, mirroring the buyer retention playbook structure",
  target: { currentRetentionM12: 0.28, targetRetentionM12: 0.36, timeline: "Achieve by end of Year 2" },
  mechanisms: {
    firstSaleProgram: {
      description: "Accelerate time-to-first-sale for new sellers to reduce early churn",
      actions: [
        "New seller spotlight on homepage for first 14 days after listing approval",
        "Expedited 48-hour review for first listing (vs standard 72-hour)",
        "Platform notification sent to matching buyers when new seller lists in their preferred categories",
      ],
      expectedImpact: "+8pp M3 retention (from 50% to 58%). First sale within 14 days is the strongest predictor of long-term seller retention.",
      implementation: "Month 4 — lightweight algorithm to match new listings to buyer preferences",
      cost: "Engineering time only. No incremental cost beyond notification infrastructure.",
    },
    sellerSuccessManager: {
      description: "Dedicated support for high-value sellers crossing $5K cumulative GMV",
      actions: [
        "Assigned dedicated support contact (not general support queue)",
        "Quarterly business review with performance insights and growth recommendations",
        "Priority listing review (24-hour turnaround)",
        "Early access to new platform features and beta programs",
      ],
      expectedImpact: "+10% M12 retention for high-value sellers (from 28% to 38% in this segment). High-value sellers generate disproportionate GMV.",
      implementation: "Month 8 — requires hiring seller success role (part of support team expansion)",
      cost: "$2,000/month (part-time dedicated role in Bangladesh)",
    },
    communityAndMentoring: {
      description: "Build seller community to create switching costs and peer learning",
      actions: [
        "Seller forum within the platform for peer discussion and tips",
        "Peer mentoring matching — experienced sellers paired with new sellers",
        "Monthly seller webinars covering marketplace optimization, pricing strategy, and product photography",
      ],
      expectedImpact: "+5% M6 retention (from 38% to 43%). Community engagement creates emotional switching costs.",
      implementation: "Month 6 — forum is lightweight build; webinars are founder-led initially",
      cost: "$500/month (webinar tooling + founder time)",
    },
    reEngagementCampaign: {
      description: "Win back sellers who have gone inactive for 30+ days",
      actions: [
        "Personalized email with marketplace trends in their category (e.g., 'SaaS templates saw 40% more sales this month')",
        "'What you missed' digest highlighting new features, buyer growth, and competitor seller activity",
        "One-click reactivation — pre-filled listing update form to reduce friction",
        "Limited-time commission reduction (5% off for 30 days) for reactivated sellers",
      ],
      expectedImpact: "+8% reactivation rate for dormant sellers. Recovering even a fraction of churned sellers is cheaper than new acquisition.",
      implementation: "Month 5 — email automation via existing SendGrid integration",
      cost: "$200/month (email service costs, absorbed into existing infrastructure)",
    },
  },
  projectedRetentionWithPlaybook: {
    description: "Improved seller retention curve with all playbook mechanisms active",
    withoutPlaybook: { month3: 0.50, month6: 0.38, month12: 0.28, month24: 0.18 },
    withPlaybook:    { month3: 0.58, month6: 0.46, month12: 0.36, month24: 0.24 },
    improvement:     { month3: "+8pp", month6: "+8pp", month12: "+8pp", month24: "+6pp" },
    note: "Improvements are additive across mechanisms but subject to diminishing returns. Conservative estimates assume 60-70% of theoretical maximum impact.",
  },
} as const;

// ============================================================================
// REVENUE CONCENTRATION RISK — POWER LAW ANALYSIS AND MITIGATION
// ============================================================================

export const REVENUE_CONCENTRATION_RISK = {
  description: "Power law analysis of GMV concentration and mitigation strategy",
  projectedDistribution: {
    top1Percent: { gmvShare: "15-20%", note: "2-5 sellers driving significant volume" },
    top10Percent: { gmvShare: "55-65%", note: "Standard marketplace power law" },
    top25Percent: { gmvShare: "80-85%", note: "Long tail provides diversification" },
    bottom50Percent: { gmvShare: "5-10%", note: "Hobbyist and new sellers" },
  },
  riskScenario: {
    description: "Top 3 sellers (each >$50K GMV/year) churn simultaneously",
    impact: "15-25% GMV decline in affected month",
    recoveryTime: "2-3 months to backfill through new seller acquisition and organic growth",
  },
  mitigationStrategy: {
    diversificationTargets: {
      year1: "No single seller >15% of total GMV",
      year2: "No single seller >10% of total GMV",
      year3: "No single seller >5% of total GMV",
    },
    tactics: [
      "Category expansion to attract sellers from diverse niches",
      "Starter kit program creates platform-owned supply (reduces seller dependency)",
      "Long-tail seller growth programs (first sale acceleration, mentoring)",
      "Graduated commission incentivizes high-volume sellers to stay",
    ],
  },
} as const;

// ============================================================================
// CHANNEL CAC BREAKDOWN — PER-CHANNEL ACQUISITION COST ANALYSIS
// ============================================================================

export const CHANNEL_CAC_BREAKDOWN = {
  description: "Per-channel customer acquisition cost breakdown with payback periods and scaling guidance",
  channels: {
    googleAds: {
      estimatedCAC: 50,
      paybackMonths: 4.2,
      note: "Developer template keywords: CPC $2-5, conversion 4-8%",
      scalability: "Medium — keyword volume is finite in niche categories. Good for high-intent buyers.",
      riskFlag: "CPC inflation in competitive categories (e.g., 'Next.js template') could push CAC above $80",
    },
    contentSEO: {
      estimatedCAC: 15,
      paybackMonths: 1.3,
      note: "Blog/tutorial content. High upfront cost, near-zero marginal CAC after 6 months",
      scalability: "High — evergreen content compounds. 50+ articles targeting long-tail developer queries.",
      riskFlag: "Requires 3-6 months to see meaningful organic traffic. Not a quick-win channel.",
    },
    referralProgram: {
      estimatedCAC: 45,
      paybackMonths: 3.8,
      note: "$25 referrer + $20 referee credit. Higher LTV referral users",
      scalability: "Medium-High — viral coefficient depends on product quality and user satisfaction.",
      riskFlag: "Fraud risk (self-referrals). Requires verification controls.",
    },
    founderLedSales: {
      estimatedCAC: 0,
      paybackMonths: 0,
      note: "Direct outreach to developer communities. Time cost only.",
      scalability: "Low — founder time is the bottleneck. Critical for first 100 sellers.",
      riskFlag: "Does not scale beyond Month 6. Must transition to scalable channels.",
    },
    socialMedia: {
      estimatedCAC: 30,
      paybackMonths: 2.5,
      note: "Twitter/X, Reddit, Dev.to. Organic + small paid boost",
      scalability: "Medium — organic reach is unpredictable. Paid social supplements but has diminishing returns.",
      riskFlag: "Platform algorithm changes can crater organic reach overnight.",
    },
  },
  blendedCAC: {
    seller: 75,
    buyer: 100,
    note: "Weighted average across all channels. Seller CAC lower due to founder-led outreach in early months.",
  },
  recommendation: "Double down on content/SEO and referral at scale. Cut paid search if CPA exceeds $80. Founder-led sales critical for Months 1-6, then transition budget to scalable channels.",
  channelMixByPhase: {
    months1to6: "70% founder-led, 20% content/SEO, 10% social media",
    months7to12: "30% content/SEO, 25% referral, 20% paid search, 15% social, 10% founder-led",
    months13to24: "35% content/SEO, 30% referral, 20% paid search, 15% social",
  },
} as const;

// ============================================================================
// CONTRIBUTION MARGIN WATERFALL — GMV TO NET MARGIN BREAKDOWN
// ============================================================================

export const CONTRIBUTION_MARGIN_WATERFALL = {
  description: "Step-by-step waterfall from GMV to net margin for Year 1 and Year 2, showing each cost layer",
  year1: {
    label: "Year 1 — Heavy early bird commission, pre-scale",
    gmv: 800000,
    sellerPayouts: { amount: 640000, rate: 0.80, note: "80% avg payout (early bird 90% for products + standard services)" },
    grossRevenue: { amount: 160000, rate: 0.20, note: "Platform take rate after seller payouts" },
    paymentProcessing: { amount: 32000, rate: 0.04, note: "4% blended (Stripe 2.9% + $0.30 per txn + payout fees)" },
    variableCosts: { amount: 26400, rate: 0.033, note: "3.3% of GMV — fraud/chargebacks 1.0%, refund reserve 1.5%, free credits 0.5%, referral program 0.3% (payment processing excluded — listed separately above)" },
    contributionMargin: { amount: 101600, rate: 0.127, note: "12.7% of GMV — unit economics are positive per transaction" },
    fixedCosts: { amount: 492000, monthly: 41000, note: "$41K/month avg — team, office, base infrastructure" },
    netIncome: { amount: -390400, note: "Net loss expected in Year 1. Funded by angel + pre-seed rounds." },
  },
  year2: {
    label: "Year 2 — Early bird winds down, scale economics kick in",
    gmv: 3600000,
    sellerPayouts: { amount: 2520000, rate: 0.70, note: "70% avg payout as early bird expires and standard rates apply" },
    grossRevenue: { amount: 1080000, rate: 0.30, note: "Platform take rate improves as commission normalizes" },
    paymentProcessing: { amount: 144000, rate: 0.04, note: "4% blended — potential to negotiate down to 3.5% at volume" },
    variableCosts: { amount: 118800, rate: 0.033, note: "3.3% of GMV — fraud/chargebacks 1.0%, refund reserve 1.5%, free credits 0.5%, referral program 0.3% (payment processing excluded — listed separately above)" },
    contributionMargin: { amount: 817200, rate: 0.227, note: "22.7% of GMV — dramatically improved vs Year 1" },
    fixedCosts: { amount: 558000, monthly: 46500, note: "$46.5K/month avg — expanded team" },
    netIncome: { amount: 259200, note: "First full-year profit. Validates business model at scale." },
  },
  perTransactionContribution: {
    description: "Per-transaction contribution margin at different commission rates",
    product: {
      earlyBird: { avgOrderValue: 45, sellerPayout: 40.50, platformRevenue: 4.50, paymentProcessing: 1.80, variableCost: 3.06, contributionPerTxn: -0.36, note: "Slightly negative at early bird rate — acceptable for acquisition" },
      standard: { avgOrderValue: 45, sellerPayout: 31.50, platformRevenue: 13.50, paymentProcessing: 1.80, variableCost: 3.06, contributionPerTxn: 8.64, note: "Healthy $8.64 contribution at standard 30% commission" },
    },
    service: {
      earlyBird: { avgOrderValue: 525, sellerPayout: 446.25, platformRevenue: 78.75, paymentProcessing: 21.00, variableCost: 35.70, contributionPerTxn: 22.05, note: "Strong even at early bird 10% commission rate (15% total platform take including 5% buyer fee)" },
      standard: { avgOrderValue: 525, sellerPayout: 420.00, platformRevenue: 105.00, paymentProcessing: 21.00, variableCost: 35.70, contributionPerTxn: 48.30, note: "Excellent $48.30 contribution at standard 20% commission" },
    },
  },
  keyInsight: "Year 1 contribution margin of $101.6K (12.7% of GMV) is positive on a per-transaction basis (except early bird products), but $492K fixed costs create a -$390.4K net loss. Year 2 shows operating leverage — 4.5x GMV growth drives contribution to $817.2K (22.7% of GMV) and net income to +$259.2K as fixed costs only grow 13%. The critical transition is the early bird expiration: moving from 80% to 70% avg payout adds 10 percentage points to gross margin.",
} as const;

// ============================================================================
// FINANCIAL MODEL RECONCILIATION — CROSS-MODEL CONSISTENCY NOTE
// ============================================================================

export const FINANCIAL_MODEL_RECONCILIATION = {
  description: "Reconciliation between the contribution margin waterfall and the monthly cash flow projection — two views of the same business, for different audiences",
  waterfallModel: {
    purpose: "Investor-facing worst-case planning and valuation model",
    fixedCostAssumption: "Uses steady-state Year 1 costs: $41K/month = $492K annually",
    year1NetIncome: -390400,
    audience: "Investors, board decks, valuation exercises",
    note: "The waterfall assumes the full $41K/month cost base from Day 1, as if the team were at Phase 1 headcount immediately. This is deliberately conservative — it shows the investor the worst-case burn if costs ramp faster than revenue.",
  },
  cashFlowModel: {
    purpose: "Operational planning with actual cost ramp",
    fixedCostAssumption: "Uses actual ramp: $15K/month (M1-M6) → $20K-$27.5K/month (M7-M12) = $234.5K Year 1 total fixed costs",
    year1NetIncome: -214360,
    audience: "Founder, operating team, board operational reviews",
    note: "The cash flow reflects the real hiring timeline: 3-person team at $15K/month for 6 months, then gradual scaling to $27.5K/month by Month 12. This is the operational reality.",
  },
  reconciliation: {
    year1NetIncomeDifference: 176040,
    explanation: "The $176K gap ($390.4K loss vs $214.4K loss) is entirely explained by the fixed cost assumption: $492K (waterfall) vs $234.5K (cash flow) = $257.5K difference, partially offset by revenue timing differences.",
    bothAreValid: "Both models are correct for their intended purpose. The waterfall is the 'planning basis' for fundraising (how much do we need to raise?). The cash flow is the 'operating basis' for runway management (when does cash actually run out?).",
  },
  variableCostRateReconciliation: {
    operationalCostModel: {
      rate: 0.068,
      label: "6.8% of GMV",
      components: "Payment processing 3.7% (net after buyer fee offset, includes payout cost) + fraud/chargebacks 0.8% + refund reserve 1.5% + free credits 0.5% + referral program 0.3%",
      nature: "Net variable cost to platform after buyer fee offset",
    },
    waterfallModel: {
      rate: 0.073,
      label: "7.3% of GMV (shown as 4.0% payment processing + 3.3% other variable costs)",
      components: "Payment processing 4.0% (gross, including both incoming Stripe and outgoing payout) + fraud/chargebacks 1.0% + refund reserve 1.5% + free credits 0.5% + referral program 0.3%",
      nature: "Gross variable cost before buyer fee offset",
    },
    explanation: "The 0.5 percentage point difference between 7.3% (waterfall) and 6.8% (operational) is the buyer fee margin. Buyers pay a 5% processing fee on card orders. Stripe charges ~4% blended (incoming + outgoing). The remaining ~1% is net margin from the buyer fee. However, only ~0.5pp flows through as a variable cost offset because the 1% margin is partially absorbed into gross revenue accounting. The waterfall shows payment processing at 4% gross because it defines 'gross revenue' as seller commission only (excluding the buyer fee). The operational model nets the buyer fee margin against payment costs, arriving at 3.5% net payment processing, hence 6.8% total variable cost.",
  },
  keyTakeaway: "When presenting to investors, use the waterfall (-$390.4K Year 1 net). When managing cash, use the cash flow (-$214.4K Year 1 net). The difference is not an error — it is the gap between planning conservatively and operating efficiently.",
} as const;

// ============================================================================
// BUYER FEE REVENUE MODEL — BUYER PROCESSING FEE MARGIN ANALYSIS
// ============================================================================

export const BUYER_FEE_REVENUE_MODEL = {
  description: "Analysis of the buyer processing fee as a revenue/margin line, and why it is not shown separately in the waterfall",
  buyerFeeStructure: {
    feeRate: 0.05,
    label: "5% processing fee charged to buyers on all card-paid orders",
    applicability: "All product and service orders paid by card. Wallet (Manob Coin) payments are exempt (0% fee).",
  },
  costStructure: {
    stripeBlendedRate: 0.042,
    label: "~4.2% blended payment processing cost (incoming Stripe + outgoing payout)",
    breakdown: {
      incomingStripe: "~3.2% blended (40% domestic at 2.9% + 60% international at ~4.6%)",
      outgoingPayout: "~1.0% blended (40% domestic at 0.57% + 60% international at 1% + $2). See PAYOUT_COST_MODEL for derivation.",
      total: "~4.2% blended all-in payment cost",
    },
  },
  netMarginFromBuyerFee: {
    marginRate: 0.008,
    label: "~0.8% of GMV net margin from buyer processing fee (5% fee - 4.2% cost)",
    year1: {
      gmv: 800000,
      buyerFeeCollected: 40000,
      paymentProcessingCost: 33600,
      netBuyerFeeMargin: 6400,
      note: "At $800K Year 1 GMV, the buyer fee generates ~$6.4K in net margin (5% fee - 4.2% processing cost = 0.8% net)",
    },
    year2: {
      gmv: 8430000,
      buyerFeeCollected: 421500,
      paymentProcessingCost: 354060,
      netBuyerFeeMargin: 67440,
      note: "At $8.43M Year 2 GMV (sum of M13-M24 monthly GMV: $330K+$380K+...+$1.2M from MONTHLY_CASH_FLOW_PROJECTION notes), the buyer fee generates ~$67K in net margin. Note: MARKET_SIZING planning basis uses $3.6M (conservative midpoint); the $8.43M reflects the cash flow projection's optimistic ramp.",
    },
  },
  whyNotInWaterfall: {
    explanation: "The contribution margin waterfall defines 'gross revenue' as seller commission only (the platform's take rate on GMV). The buyer fee is treated as a cost-offset rather than a revenue line because: (1) it is a pass-through fee designed to cover payment processing, not a value-added service; (2) showing it as revenue would inflate the take rate metric, making comparisons to competitors misleading; (3) the net margin (~0.8%) is small relative to commission revenue.",
    effectiveImpact: "The buyer fee effectively subsidizes payment processing costs. Without it, the waterfall's payment processing line would be ~4.2% of GMV as a pure cost with no offset, making contribution margin appear worse. With it, the ~4.2% cost is partially covered, and the operational model can show a net ~3.7% payment processing cost.",
  },
  walletAdoptionImpact: {
    scenario: "If wallet adoption reaches 35% of transactions by Year 2",
    impact: "Buyer fee revenue drops by 35% (wallet users pay 0%), but payment processing costs also drop by 35% (wallet bypasses Stripe). Net margin impact is roughly neutral. The benefit is improved buyer experience and lower Stripe dependency.",
  },
} as const;

// ============================================================================
// COMBINED MULTI-RISK STRESS TEST — SIMULTANEOUS ADVERSE SCENARIO
// ============================================================================

export const COMBINED_STRESS_TEST = {
  description: "Stress test where multiple risks materialize simultaneously: AI builder failure, seller churn, buyer retention miss, and FX headwind",
  baseCase: {
    year1Revenue: 108500,
    year2Revenue: 1033500,
    breakEvenMonth: 20,
    totalFundingNeeded: 800000,
    note: "Base case per MONTHLY_CASH_FLOW_PROJECTION assumptions (year2Revenue = sum of M13-M24 revenue)",
  },
  stressScenario: {
    trigger: "All four adverse events hit simultaneously around Month 12",
    risks: {
      aiBuilderFailure: {
        description: "AI website builder feature fails to gain traction — starter kit and MC/AI Energy revenue do not materialize",
        revenueImpact: -0.15,
        rationale: "Starter kits + AI Energy represent ~15% of projected Year 2 revenue. Without AI builder, this revenue line is zero.",
      },
      earlyBirdSellerChurn: {
        description: "50% of early bird sellers churn at Month 12 when commission rate doubles (10% to 20-30%)",
        revenueImpact: -0.20,
        rationale: "Early bird sellers generate ~40% of GMV at Month 12. 50% churn = 20% GMV loss, which directly reduces commission revenue.",
      },
      pessimisticBuyerRetention: {
        description: "Buyer 12-month retention stays at pessimistic 12% instead of improving to 20%",
        revenueImpact: -0.10,
        rationale: "Lower buyer retention reduces repeat purchase volume by ~25%, translating to ~10% total revenue impact (new buyer acquisition partially compensates).",
      },
      fxHeadwind: {
        description: "Bangladesh Taka depreciates 15% vs USD, increasing real costs for international payouts and operations",
        costImpact: 0.05,
        rationale: "15% FX move increases dollar-denominated costs (Stripe fees, international payouts) by ~5% of total cost base. BDT-denominated salaries become cheaper in USD terms, partially offsetting.",
      },
    },
  },
  combinedImpact: {
    year1Revenue: { base: 108500, stressed: 73800, change: -34700, note: "Year 1 revenue reduced ~32% — AI builder failure and early churn hit Q4 hardest" },
    year2Revenue: { base: 1033500, stressed: 568425, change: -465075, note: "Year 2 revenue reduced ~45% — compounding effect of seller churn + buyer retention miss + no AI revenue" },
    breakEvenMonth: { base: 20, stressed: 26, change: 6, note: "Break-even pushed from Month 20 to ~Month 26 — an additional 6 months of burn (improved vs prior estimate due to higher base revenue)" },
    additionalFundingNeeded: { base: 0, stressed: 200000, note: "Additional ~$200K needed beyond the $800K base funding plan to survive to break-even at ~Month 26. Higher base Y2 revenue ($1.03M vs prior $669K) reduces the stressed-case funding gap." },
    cashRunway: "Under stress, the $800K base funding runs out at approximately Month 24. Without additional capital, the company faces a cash crisis ~2 months before break-even.",
  },
  mitigationPlaybook: {
    immediate: [
      "Cut fixed costs by 20% ($10K/month): defer Phase 3 hires, reduce marketing spend, renegotiate infrastructure contracts",
      "Pivot AI builder budget to marketplace core: invest in search quality, seller tools, and buyer UX instead",
      "Offer graduating commission schedule to churning early bird sellers: 15% for months 13-18, then 20% — reduces churn by ~30%",
    ],
    medium_term: [
      "Accelerate organic acquisition to reduce CAC: double down on SEO content, seller referral program, and community building",
      "Launch reactivation campaign for churned buyers: personalized email sequences with discount incentives",
      "Explore revenue diversification: sponsored listings, premium seller analytics, white-label marketplace licenses",
    ],
    emergency: [
      "Bridge round: raise $200K-$300K convertible note from existing angels at Month 20 if cash drops below $100K",
      "Acqui-hire exploration: if all else fails, the technology and user base have value for Envato, Fiverr, or regional players",
      "Revenue floor: even under full stress, the marketplace generates $30K+/month by Month 18 — the business is not zero-revenue",
    ],
    recoveryTimeline: "With mitigation playbook active, revised break-even is Month 23-25 (vs ~Month 26 without mitigation). The additional funding needed drops from ~$200K to ~$100K.",
  },
  buyerCACInflation: {
    description: "Stress test for buyer acquisition cost inflation due to Google Ads CPC increases and competitive keyword bidding",
    scenario: "Buyer CAC rises from $100 baseline to $150 (50% increase) due to paid channel inflation",
    analysis: {
      currentBuyerCAC: 100,
      inflatedBuyerCAC: 150,
      buyerLTV: 120,
      ltvCacRatioAtInflated: "0.8:1 — below the 1:1 viability threshold",
      breakEvenCAC: 120,
      note: "At $150 CAC with buyer LTV of $120, each acquired buyer destroys $30 in value. Paid acquisition becomes unviable.",
    },
    mitigation: {
      channelMixShift: [
        { channel: "Organic/SEO", targetCAC: 15, budgetShare: 0.40, note: "Content marketing + blog + marketplace SEO — lowest CAC but slowest to scale" },
        { channel: "Referral program", targetCAC: 45, budgetShare: 0.20, note: "Buyer referral credits — predictable CAC with viral coefficient" },
        { channel: "Content marketing", targetCAC: 20, budgetShare: 0.25, note: "YouTube tutorials, dev community engagement, starter kit showcases" },
        { channel: "Paid (reduced)", targetCAC: 150, budgetShare: 0.15, note: "Maintain minimal paid presence for brand awareness only" },
      ],
      blendedCACTarget: "Maintain blended buyer CAC <$80 even if paid channels inflate to $150. Achieved by shifting 85% of acquisition budget to organic, referral, and content channels.",
      growthTradeoff: "Shifting away from paid acquisition slows buyer growth by ~20-30% in months 1-6 of transition, but improves unit economics long-term.",
    },
    financialImpact: "If paid CAC inflates to $150 and channel mix is NOT adjusted, Year 2 buyer acquisition spend increases by ~$75K (50% more per buyer × ~1,500 paid-acquired buyers). Mitigation via channel mix shift eliminates this risk but requires 3-6 months of organic channel investment upfront.",
  },
  probabilityWeighting: {
    description: "Probability estimates for each stress scenario to enable risk-adjusted revenue modeling",
    scenarioProbabilities: {
      aiBuilderFailure: { probability: 0.25, rationale: "AI features are unproven but the underlying tech (LLMs, code generation) is rapidly maturing. 1-in-4 chance of meaningful failure." },
      earlyBirdChurn50Percent: { probability: 0.15, rationale: "50% churn is the pessimistic tail — requires both poor platform value AND aggressive competitor response simultaneously." },
      pessimisticBuyerRetention: { probability: 0.30, rationale: "Buyer retention is the hardest metric to predict pre-launch. 30% probability that retention stays at pessimistic 12% instead of 20%." },
      fxHeadwind15Percent: { probability: 0.20, rationale: "BDT has depreciated ~5% annually vs USD in recent years. A 15% move is a ~2 standard deviation event but plausible in political instability." },
      buyerCACInflation: { probability: 0.35, rationale: "Google Ads CPC inflation is a secular trend. 35% chance that paid buyer CAC exceeds $150 within 24 months." },
    },
    combinedProbability: {
      allFourOriginalSimultaneously: 0.02,
      rationale: "Assuming approximate independence: 0.25 × 0.15 × 0.30 × 0.20 ≈ 0.23%. Rounded to ~2% to account for correlation (economic downturns increase multiple risks).",
    },
    riskAdjustedRevenue: {
      description: "Expected loss = impact × probability for each scenario, subtracted from base case",
      baseYear2Revenue: 1033500,
      expectedLosses: {
        aiBuilderFailure: { impact: -155025, probability: 0.25, expectedLoss: -38756 },
        earlyBirdChurn: { impact: -206700, probability: 0.15, expectedLoss: -31005 },
        buyerRetention: { impact: -103350, probability: 0.30, expectedLoss: -31005 },
        fxHeadwind: { impact: -51675, probability: 0.20, expectedLoss: -10335 },
      },
      totalExpectedLoss: -111101,
      riskAdjustedYear2Revenue: 922399,
      note: "Risk-adjusted Year 2 revenue of ~$922K represents a ~10.7% haircut from the $1.03M base case. This is the probability-weighted expected outcome, not a worst case.",
    },
  },
  keyInsight: "The combined stress test shows that simultaneous failure of multiple assumptions pushes break-even out by ~6 months and requires an additional ~$200K in funding. However, no single risk is existential — the mitigation playbook can recover 60-70% of the impact. The most dangerous combination is seller churn + buyer retention miss, as these compound (fewer sellers means less selection means lower buyer retention means fewer sellers). The AI builder failure, while painful for revenue diversification, does not threaten the core marketplace business.",
} as const;

// ============================================================================
// SAFE vs CONVERTIBLE NOTE — INVESTMENT INSTRUMENT COMPARISON
// ============================================================================

export const SAFE_VS_CONVERTIBLE_NOTE = {
  description: "Comparison of SAFE and convertible note instruments for manob.ai's angel round, with rationale for choosing SAFE",
  safe: {
    name: "SAFE (Simple Agreement for Future Equity)",
    inventor: "Y Combinator (2013)",
    keyTerms: {
      maturityDate: "None — no expiration or forced conversion deadline",
      interestRate: "None — no interest accrues",
      valuationCap: "$2M-$3M (manob.ai's proposed range)",
      discount: "20%",
      conversionTrigger: "Next priced equity round (pre-seed or seed)",
      proRataRights: "Typically included in YC standard SAFE; allows angel investors to maintain their ownership percentage by investing in subsequent rounds",
    },
    advantages: [
      "No maturity date — no pressure to raise a follow-on round by a specific date",
      "No interest — simpler cap table, no accruing obligation",
      "Standard YC template — well-understood by investors globally, reduces legal costs",
      "Faster closing — can close individual angel checks without coordinating a full round",
      "Founder-friendly — no debt covenants, no board seat requirements at angel stage",
    ],
    disadvantages: [
      "Less investor protection — no maturity date means investor has no recourse if company never raises a priced round",
      "Valuation cap disagreements can stall negotiation",
      "Some traditional/non-tech angels may be unfamiliar with SAFEs",
    ],
    legalCost: "$500-$2,000 (using standard YC SAFE template with minimal customization)",
  },
  convertibleNote: {
    name: "Convertible Note (Convertible Promissory Note)",
    keyTerms: {
      maturityDate: "18-24 months typical — note must convert or be repaid by this date",
      interestRate: "5-8% annual — accrues and converts to equity at next round",
      valuationCap: "$2M-$3M (comparable to SAFE)",
      discount: "20% (comparable to SAFE)",
      conversionTrigger: "Next priced equity round, or maturity date, or change of control",
      proRataRights: "May or may not be included; negotiable",
    },
    advantages: [
      "Investor protection — maturity date creates a deadline for the company to raise or repay",
      "Interest accrual rewards investor patience — typical 5-8% means $200K note accrues $10K-$16K/year in additional equity",
      "More familiar to traditional angels and non-tech investors",
      "Debt status provides some protection in bankruptcy/wind-down scenarios",
    ],
    disadvantages: [
      "Maturity pressure — if no follow-on round by maturity, company must repay (creating cash crisis) or renegotiate",
      "Interest complicates cap table — need to track accrued interest for conversion calculations",
      "Higher legal costs — custom note terms, negotiation of covenants, potential default provisions",
      "Can create adversarial dynamics if maturity approaches without a follow-on round",
    ],
    legalCost: "$2,000-$5,000 (more negotiation, custom terms, potential covenant drafting)",
  },
  whySAFEForManob: {
    primaryReason: "manob.ai is a pre-revenue startup with an uncertain timeline to its pre-seed round. A convertible note's 18-24 month maturity would create artificial pressure to raise by Month 12-18 regardless of whether the company is ready. A SAFE allows the founder to focus on building product and achieving traction milestones without a ticking clock.",
    secondaryReasons: [
      "Bangladesh-based angels in the Dhaka Angel Network are increasingly familiar with SAFEs",
      "YC standard template reduces legal costs by $2K-$3K vs custom convertible note",
      "No interest accrual keeps the cap table clean for pre-seed investors who want clarity on angel ownership",
      "Solo founder needs maximum flexibility — convertible note covenants could restrict pivoting or cost-cutting decisions",
    ],
    proRataRightsDiscussion: {
      whatItMeans: "Pro-rata rights give angel SAFE holders the right (but not obligation) to invest their proportional share in subsequent rounds to maintain their ownership percentage",
      example: "An angel who holds 5% after SAFE conversion can invest 5% of the pre-seed round to avoid dilution. On a $600K pre-seed, that is a $30K follow-on check.",
      implicationsAtPreSeed: "Pro-rata rights at pre-seed are standard and generally welcomed by lead pre-seed investors — it signals angel commitment. However, if angels collectively hold 8% and all exercise pro-rata, it reduces the pre-seed allocation for new investors by $48K on a $600K round.",
      manobApproach: "Include standard pro-rata rights in SAFE. The amounts are small enough ($30K-$50K) that they do not meaningfully reduce pre-seed allocation, and they maintain goodwill with early supporters.",
    },
  },
  scenarioComparison: {
    ifPreSeedClosesMonth12: {
      safe: "Angels convert at lower of $2.5M cap or 20% discount to pre-seed price. No interest. Clean conversion.",
      note: "Angels convert at lower of $2.5M cap or 20% discount, PLUS 5-8% accrued interest ($10K-$16K). Slightly more equity to angels, slightly more dilution for founder.",
    },
    ifPreSeedDelayedToMonth24: {
      safe: "No change. Angels wait patiently. No maturity pressure.",
      note: "Maturity date triggers at Month 18-24. Company must renegotiate extension (common but stressful), repay the note (impossible for a startup), or convert at unfavorable terms. This is the scenario that makes convertible notes dangerous for early-stage companies.",
    },
    ifCompanyFails: {
      safe: "Angels lose their investment. No debt obligation. Clean wind-down.",
      note: "Angels are creditors — they have priority over equity holders in wind-down. In practice, there are rarely assets to recover at angel stage, so this distinction is mostly theoretical.",
    },
  },
} as const;

// ============================================================================
// PAYOUT COST MODEL — SELLER PAYOUT COST DECOMPOSITION
// ============================================================================

export const PAYOUT_COST_MODEL = {
  description: "Detailed decomposition of seller payout costs and how they fit into the waterfall and operational cost models",
  domesticPayout: {
    rate: 0.0057,
    label: "0.57% via Stripe Connect standard domestic transfer",
    mechanism: "ACH/local bank transfer through Stripe Connect",
    note: "Applies to ~40% of sellers (domestic to the payment entity's country — US if using Stripe Atlas)",
  },
  internationalPayout: {
    rate: 0.01,
    fixedFee: 2.00,
    label: "1% + $2 per transfer via international rails",
    mechanism: "Stripe Connect cross-border transfer or Wise/Payoneer (Phase 2+)",
    note: "Applies to ~60% of sellers (international sellers, including Bangladesh-based sellers paid in USD)",
  },
  blendedPayoutCost: {
    rate: 0.01,
    label: "~1.0% blended payout cost",
    calculation: "40% x 0.57% + 60% x (1% + effective fixed fee rate) = 0.228% + 0.6% + ~0.17% = ~1.0%",
    note: "The $2 fixed fee on international payouts adds ~0.17% at average $1,200 monthly payout per seller ($2/$1,200 = 0.167%). Blended rate varies by average payout size. Previous estimate of ~0.8% understated the correct arithmetic (0.228 + 0.6 + 0.17 = ~1.0%).",
  },
  waterfallFit: {
    waterfallPaymentProcessing: 0.042,
    breakdown: {
      incomingStripe: "~3.2% blended (buyer card charge through Stripe)",
      outgoingPayout: "~1.0% blended (seller payout)",
      total: "~4.2% all-in payment processing (slightly above the 4.0% shown in CONTRIBUTION_MARGIN_WATERFALL due to corrected payout cost)",
    },
    note: "The waterfall's 4% figure is an approximation. Actual all-in cost is ~4.2% (3.2% incoming + 1.0% outgoing). The ~0.2pp gap is within rounding tolerance for early-stage modeling and shrinks as Stripe volume discounts and Wise integration reduce payout costs.",
  },
  operationalModelFit: {
    operationalPaymentProcessing: 0.037,
    breakdown: {
      incomingStripe: "~3.2% blended",
      outgoingPayout: "~1.0% blended",
      buyerFeeOffset: "-0.5% (net buyer fee margin absorbed)",
      total: "~3.7% net payment processing (vs ~3.5% previously shown in OPERATIONAL_COST_MODEL due to corrected payout cost)",
    },
    calculation: "3.2% incoming + 1.0% outgoing - 0.5% buyer fee margin = 3.7% net",
    note: "The operational model nets the buyer fee margin against payment processing costs. The buyer pays 5%, Stripe charges ~4.2%, leaving ~0.8% margin. Of this ~0.8%, approximately 0.5pp is recognized as a variable cost offset in the operational model (the other ~0.3pp is captured in gross revenue accounting).",
  },
  costReductionOpportunities: {
    stripeVolumeDiscount: "At $1M+/month GMV, Stripe offers custom pricing: incoming rate can drop from 2.9% to 2.5% + $0.30. Potential savings: ~$4K/month at $1M GMV.",
    batchPayouts: "Weekly batch payouts instead of per-transaction reduce the $2 international fixed fee impact by 4x. Savings: ~$1.5K/month at 500 international sellers.",
    wisePioneer: "Wise Business API offers 0.5% international transfers with no fixed fee above $200. Could reduce international payout cost from 1%+$2 to 0.5%. Phase 2 integration planned.",
  },
} as const;

// ============================================================================
// COST SCALING BRIDGE — FIXED COST TO HIRING PLAN MAPPING
// ============================================================================

export const COST_SCALING_BRIDGE = {
  description: "Explicit mapping of fixed cost steps at each GMV level to specific hiring plan phases and team composition",
  costSteps: {
    at50kGMV: {
      monthlyFixedCost: 41000,
      gmvLevel: "$50K/month",
      phase: "Phase 1 — MVP team",
      teamComposition: {
        founder: { role: "Founder/CTO", monthlyCost: 5000, note: "Minimal founder salary; remainder deferred" },
        engineer1: { role: "Full-Stack Engineer #1", monthlyCost: 3750, note: "Bangladesh-based, marketplace core" },
        engineer2: { role: "Full-Stack Engineer #2", monthlyCost: 3750, note: "Bangladesh-based, frontend/dashboards" },
        subtotalTeam: 12500,
      },
      nonTeamCosts: {
        cloudInfrastructure: 5000,
        aiAPICosts: 4000,
        customerSupport: 5000,
        legalCompliance: 2000,
        marketing: 5000,
        paymentInfra: 1000,
        officeAndMisc: 1000,
        taxVATCompliance: 1500,
        insuranceAndContingency: 1500,
        subtotalNonTeam: 26000,
      },
      note: "Total does not sum to $41K because founder salary of $5K partially overlaps with the $15K engineering line in OPERATIONAL_COST_MODEL (which includes all 3 team members). The $41K figure is from OPERATIONAL_COST_MODEL which buckets costs by function, not by person.",
    },
    at100kGMV: {
      monthlyFixedCost: 45000,
      gmvLevel: "$100K/month",
      phase: "Phase 1 to 2 transition",
      incrementalHires: [
        { role: "Community Manager", monthlyCost: 3500, focus: "Seller onboarding, forum moderation, first-sale acceleration" },
      ],
      incrementalCostIncrease: 4000,
      note: "+$4K/month: $3.5K community manager + $500 tooling. Community manager is critical for seller retention at this scale.",
    },
    at500kGMV: {
      monthlyFixedCost: 68000,
      gmvLevel: "$500K/month",
      phase: "Phase 2 — Growth team",
      incrementalHires: [
        { role: "Product Designer", monthlyCost: 5000, focus: "UX improvements, conversion optimization, mobile design" },
        { role: "Marketing Lead", monthlyCost: 6000, focus: "Content strategy, SEO, paid acquisition management" },
        { role: "Customer Support Lead", monthlyCost: 4000, focus: "Dispute resolution, seller approvals, DMCA handling, team management" },
        { role: "Backend Engineer", monthlyCost: 5000, focus: "Payment infrastructure, payout methods, API scaling" },
      ],
      incrementalCostIncrease: 23000,
      infrastructureScaling: 3000,
      note: "+$20K/month in hires + $3K infra scaling = $23K total increment. At $500K GMV, the platform handles ~2,500 orders/month and needs dedicated support, design, and marketing functions.",
    },
    at1mGMV: {
      monthlyFixedCost: 98000,
      gmvLevel: "$1M/month",
      phase: "Phase 3 — Scale team",
      incrementalHires: [
        { role: "Data Engineer", monthlyCost: 6000, focus: "Analytics pipeline, recommendation engine, A/B testing infrastructure" },
        { role: "Growth Marketer", monthlyCost: 5000, focus: "Lifecycle marketing, retention campaigns, referral program optimization" },
        { role: "Operations Manager", monthlyCost: 4500, focus: "Seller operations, quality assurance, process optimization" },
      ],
      incrementalCostIncrease: 15500,
      infrastructureScaling: 14500,
      note: "+$15.5K hires + $14.5K infra scaling (database read replicas, CDN expansion, monitoring). At $1M GMV, the platform handles ~5,000 orders/month.",
    },
  },
  supportScalingContingency: {
    trigger: "Dispute rate exceeds 5% of orders",
    normalDisputeRate: "2-3% of orders",
    escalatedSupportCost: 8000,
    breakdown: {
      additionalSupportAgent1: { monthlyCost: 3000, focus: "Tier 1 dispute intake and initial resolution" },
      additionalSupportAgent2: { monthlyCost: 3000, focus: "Tier 2 escalated disputes and refund processing" },
      disputeTooling: { monthlyCost: 2000, focus: "Zendesk upgrade, automated dispute workflow, SLA tracking" },
    },
    triggerConditions: [
      "Dispute rate >5% for 2 consecutive months",
      "Average dispute resolution time >72 hours",
      "CSAT score for dispute resolution <3.0/5.0",
    ],
    note: "This $8K/month is NOT included in the base cost model. It is a contingency that activates only if support quality metrics deteriorate. At $500K+ GMV, a 5% dispute rate means 125+ disputes/month — beyond what a single support lead can handle.",
  },
  interpolationNote: "Between defined GMV thresholds, costs scale approximately linearly. At $200K GMV: ~$51K/mo, at $300K GMV: ~$57K/mo, at $400K GMV: ~$62K/mo. These intermediate points reflect gradual hiring between Phase 2 and Phase 3.",
  reconciliationToExecutionPlan: {
    note: "These cost steps map to the hiring roadmap in EXECUTION_PLAN. The main difference is timing: EXECUTION_PLAN phases by calendar month, while COST_SCALING_BRIDGE phases by GMV milestone. In practice, hires are triggered by whichever comes first — the calendar milestone or the GMV threshold.",
  },
} as const;

// ============================================================================
// EXTENDED EARLY BIRD ANALYSIS — IMPACT OF DELAYED RATE TRANSITION
// ============================================================================

export const EXTENDED_EARLY_BIRD_ANALYSIS = {
  description: "Impact analysis of extending the early bird commission period beyond 12 months, with decision criteria for sunsetting",
  baseCase: {
    earlyBirdDuration: 12,
    earlyBirdRate: 0.10,
    standardProductRate: 0.30,
    standardServiceRate: 0.20,
    breakEvenMonth: 20,
    totalFundingNeeded: 800000,
    year2NetMargin: 0.038,
    note: "Base case: early bird expires at Month 12. Sellers transition to standard rates. ~30% of early bird sellers churn at transition (per seller retention model).",
  },
  scenario18Months: {
    earlyBirdDuration: 18,
    rationale: "Seller retention too low to risk rate increase at Month 12. Platform delays transition to build more seller lock-in.",
    impact: {
      breakEvenMonth: 24,
      breakEvenDelay: 4,
      additionalFundingNeeded: 120000,
      year2NetMargin: -0.02,
      revenueImpactYear2: -95000,
      explanation: "6 additional months of 10% commission (vs 20-30%) on early bird cohort reduces Year 2 revenue by ~$95K. Break-even pushed from Month 20 to Month 24. Year 2 flips from slight profit to slight loss.",
    },
    sellerRetentionBenefit: {
      month12Retention: 0.38,
      improvement: "+10pp vs base case (28% to 38%)",
      note: "Delaying the rate shock preserves more sellers, but at a significant revenue cost. The retained sellers must generate enough GMV growth to justify the margin sacrifice.",
    },
  },
  scenario24Months: {
    earlyBirdDuration: 24,
    rationale: "Platform struggling with seller supply. Early bird extended to maximize seller count before any rate increase.",
    impact: {
      breakEvenMonth: 30,
      breakEvenDelay: 10,
      additionalFundingNeeded: 300000,
      year2NetMargin: -0.08,
      revenueImpactYear2: -220000,
      explanation: "Full Year 2 at early bird rates. Commission revenue is roughly halved vs standard rates. Platform requires a seed extension or bridge round to survive.",
    },
    sellerRetentionBenefit: {
      month12Retention: 0.42,
      improvement: "+14pp vs base case",
      note: "Higher retention but at extreme cost. This scenario is only viable if the platform has secured seed funding ($1.5M+) that can absorb the extended losses.",
    },
    riskFlag: "At 24 months of early bird, sellers may perceive the low rate as 'normal' and react even more negatively when rates increase. The rate shock at Month 24 could trigger a larger churn wave than at Month 12.",
  },
  decisionCriteria: {
    sunsetEarlyBirdWhen: [
      "Monthly GMV exceeds $300K and is growing >10% MoM — sufficient liquidity to retain sellers at higher rates",
      "Seller M6 retention exceeds 40% — sellers are finding enough value to stay regardless of commission",
      "At least 3 product categories have >20 active sellers each — no single seller category is dependent on early bird pricing",
      "Buyer-to-seller ratio exceeds 5:1 — strong demand signal that justifies higher seller commission",
    ],
    doNotSunsetIf: [
      "Monthly GMV below $100K — too early, need supply growth",
      "Seller M3 retention below 50% — sellers are leaving even at early bird rates",
      "Top 5 sellers account for >40% of GMV — too concentrated, losing any would be catastrophic",
    ],
    graduatedTransition: {
      recommended: true,
      approach: "Instead of a hard switch from 10% to 30% (products) or 10% to 20% (services), implement a graduated schedule: Month 13: 15%, Month 16: 20%, Month 19: 25%, Month 22: 30% (products). This reduces the rate shock and spreads churn risk over 10 months.",
      expectedChurnReduction: "Graduated transition reduces churn from ~30% to ~15% at each step. Cumulative churn over 10 months is similar (~25%) but spread out, making it more manageable.",
    },
  },
} as const;

// ============================================================================
// TAM/SAM SOURCE CITATIONS — EVIDENCE BASE FOR MARKET SIZING FIGURES
// ============================================================================

export const TAM_SAM_SOURCE_CITATIONS = {
  description: "Source citations and methodology for market sizing figures used in MARKET_SIZING",
  citations: {
    digitalProducts: {
      figure: "$6B",
      source: "Envato 2023 Impact Report + Statista Digital Media Market Outlook 2024",
      methodology: "Envato reports $1.3B+ cumulative author earnings. Combined with Creative Market, Gumroad, and independent sellers, the digital product marketplace segment is estimated at ~$6B.",
      confidence: "Medium-High — well-established market with public data from major players",
    },
    freelancePlatforms: {
      figure: "$15B",
      source: "Upwork 2023 10-K ($690M revenue on $4.1B GSV), Fiverr 2023 Annual Report ($362M revenue), extrapolated to full market",
      methodology: "Upwork GSV of $4.1B represents ~27% market share. Fiverr adds $3.5B+ GSV. Toptal, Freelancer.com, and regional platforms account for remaining ~$7B. Total addressable freelance platform market estimated at $15B GSV.",
      confidence: "High — based on public company filings (SEC 10-K, annual reports)",
    },
    onlineJobBoards: {
      figure: "$30B",
      source: "IBIS World Online Job Boards Industry Report 2024 + Grand View Research",
      methodology: "Includes Indeed, LinkedIn Jobs, Glassdoor, and niche job boards. manob.ai targets a small slice (developer freelance jobs) of this broader market.",
      confidence: "Medium — broad market definition; manob.ai's addressable portion is significantly smaller",
    },
    aiWebsiteBuilders: {
      figure: "Not separately sized",
      source: "Wix 2023 Annual Report ($1.6B revenue), Squarespace S-1 ($867M), emerging AI builder segment estimated from VC investment data",
      methodology: "AI website builder market is nascent. Bolt.new, v0.dev, and Lovable represent the emerging category. Estimated at $500M-$1B in 2024 based on VC investment and revenue run rates. Growing 100%+ YoY.",
      confidence: "Low-Medium — emerging market with limited public data. High uncertainty on TAM.",
    },
  },
  overallNote: "manob.ai's SAM ($8.5B) represents the intersection of these markets where developers buy/sell digital products AND services on integrated platforms. The $18M SOM (Year 3 planning basis) requires capturing 0.21% of SAM — aggressive but achievable with strong product-market fit.",
} as const;

// ============================================================================
// COMPETITIVE RESPONSE PLAYBOOK — DEFENSIVE STRATEGIES FOR KEY SCENARIOS
// ============================================================================

export const COMPETITIVE_RESPONSE_PLAYBOOK = {
  description: "Pre-planned responses to competitive threats, with financial impact analysis",
  scenarios: {
    priceWar: {
      scenario: "ThemeForest or Fiverr matches 10% early bird rate",
      likelihood: "Low-Medium — large platforms have margin structures that make deep discounting painful",
      response: [
        "Accelerate to graduated commission (lower rates for loyal sellers) — reward tenure, not just volume",
        "Emphasize non-exclusive licensing (they cannot match without losing control of their content policies)",
        "Leverage lower operating costs from Bangladesh base — we can sustain lower margins longer",
        "Publicly highlight total seller earnings (take-home) vs competitor take rates",
      ],
      financialImpact: "3-6 months of compressed margins, offset by increased seller acquisition. Net impact: -$50K to -$100K in Year 1 revenue, but +200-500 additional sellers acquired.",
      triggerToActivate: "Competitor publicly announces matching or undercutting our rates in our target categories",
    },
    featureCopycat: {
      scenario: "Upwork adds a product marketplace or Fiverr adds AI builder",
      likelihood: "Medium — large platforms regularly expand into adjacent areas",
      response: [
        "Focus on integration depth (products + services + AI in one platform — hard to replicate as a bolt-on)",
        "Accelerate exclusive starter kit production — platform-owned content creates defensible supply",
        "Double down on community and seller relationships — switching costs are emotional, not just financial",
        "Ship faster — our small team and lean structure allows 2-4 week feature cycles vs their 2-4 month cycles",
      ],
      financialImpact: "Minimal if moats are built before copycat launches. If caught flat-footed, potential 10-20% slowdown in new seller acquisition for 3-6 months.",
      triggerToActivate: "Competitor announces beta or launch of overlapping feature set",
    },
    acquisitionAttempt: {
      scenario: "Larger player attempts acqui-hire or acquisition",
      likelihood: "Low in Year 1, Medium by Year 2-3 if traction is strong",
      response: [
        "Evaluate based on team multiplier and GMV trajectory",
        "Target minimum 5x revenue multiple (based on marketplace SaaS comps)",
        "Maintain optionality by hitting fundraising milestones independently",
        "Counter-position: acquisition validates the market, use press to accelerate organic growth",
      ],
      financialImpact: "This is an outcome, not a threat. Favorable acquisition is a positive scenario for investors.",
      note: "Founder should maintain >50% equity through seed round to retain negotiation leverage in acquisition discussions",
    },
    aiBuilderDisruption: {
      scenario: "Well-funded AI builder (Bolt.new, Lovable, v0) captures developer mindshare and makes manob.ai's AI builder feature irrelevant",
      likelihood: "Medium-High — these competitors have $2B+ combined funding and are iterating rapidly on AI-powered code generation",
      response: [
        "Position manob.ai as marketplace (distribution + monetization channel), not an AI coding tool — complementary rather than competitive",
        "Integrate with competing AI builders: offer 'Deploy to manob.ai' as a sales channel for projects built on Bolt.new, Lovable, or v0",
        "Focus AI builder on starter kit customization (marketplace-specific use case) rather than general-purpose code generation",
        "Emphasize marketplace value: AI tools help build, manob.ai helps sell — different stages of the creator journey",
      ],
      financialImpact: "AI builder revenue drops from ~15% to ~5% of revenue mix if dedicated AI tools dominate. However, marketplace GMV (commissions, buyer fees) is unaffected — products and services are sold regardless of which tool built them.",
      referencedExport: "REVENUE_STREAMS.aiFailureScenario already models this: core marketplace generates 92-95% of revenue even without AI features. AI builder disruption is a feature risk, not a platform risk.",
      triggerToActivate: "AI builder monthly active users plateau below 500 while Bolt.new/Lovable reach 1M+ MAU in overlapping segments",
    },
  },
  standingDefenses: {
    description: "Always-on competitive moats being built regardless of specific threats",
    moats: [
      "Network effects — more sellers attract more buyers attract more sellers (flywheel)",
      "Unique product+service combination — no competitor offers both in a single integrated platform",
      "Platform-owned starter kits — proprietary content that cannot be replicated",
      "Bangladesh cost structure — 3x capital efficiency is a structural, not temporary, advantage",
      "Community and brand — developer trust and loyalty built through founder-led engagement",
    ],
  },
} as const;

// ============================================================================
// BANGLADESH REGULATORY DETAIL — CROSS-BORDER COMPLIANCE REQUIREMENTS
// ============================================================================

export const BANGLADESH_REGULATORY_DETAIL = {
  description: "Detailed regulatory requirements for operating a cross-border digital marketplace from Bangladesh",
  bangladeshBankApproval: {
    regulation: "Bangladesh Bank Foreign Exchange Policy Department Circular",
    requirement: "Cross-border payment facilitation license for receiving and disbursing foreign currency through the platform",
    timeline: "6-12 months for full approval from Bangladesh Bank",
    contingencyPlan: "Operate through Singapore or US subsidiary (Stripe Atlas) if Bangladesh Bank approval is delayed. Bangladesh entity handles local operations (development, support); foreign entity handles payment processing and international seller/buyer relationships.",
    cost: "$1,500-$5,000 depending on legal complexity (local legal counsel + filing fees)",
    riskLevel: "Medium — the platform can launch globally via foreign subsidiary while Bangladesh approval is pending",
    currentStatus: "Research phase. Legal counsel identified for formal application.",
  },
  localCompliance: {
    requirements: [
      "Trade license from local city corporation / municipality",
      "TIN (Tax Identification Number) from National Board of Revenue",
      "VAT registration if annual turnover exceeds BDT 30 lakh (~$27,000 USD)",
      "Company registration with RJSC (Registrar of Joint Stock Companies and Firms)",
    ],
    timeline: "1-2 months for all local registrations",
    cost: "$500-$1,000 total (registration fees + legal assistance)",
    status: "Can be completed in parallel with platform development",
  },
  subsidiaryStrategy: {
    description: "Recommended corporate structure for cross-border operations",
    structure: {
      holdingEntity: "US Delaware C-Corp (via Stripe Atlas) or Singapore Pte Ltd",
      operatingEntity: "Bangladesh Private Limited Company",
      relationship: "Holding entity owns 100% of Bangladesh entity. Holding entity handles payments, IP, and international contracts. Bangladesh entity handles development and local operations.",
    },
    stripeAtlasPath: {
      cost: "$500 incorporation + $100/year registered agent",
      timeline: "2-3 weeks for full setup including EIN and bank account",
      benefits: "US entity enables Stripe integration, US investor compatibility, and standard SAFE/equity structures",
    },
    taxImplications: {
      bangladesh: "Corporate tax rate 22.5% on local income. Transfer pricing rules apply for intercompany transactions.",
      us: "No US income tax if no US-source income (platform revenue is foreign-source). May need to file Form 5472 for foreign-owned US corp.",
      doubleTaxation: "Bangladesh-US tax treaty provides relief. Consult cross-border tax advisor before Year 2.",
    },
  },
  dataProtection: {
    currentLaw: "Bangladesh Digital Security Act 2018 — broad provisions but limited specific data protection framework",
    upcomingLaw: "Bangladesh Data Protection Act (draft stage) — expected to align with GDPR-like requirements",
    platformApproach: "Build to GDPR standard from Day 1. This future-proofs against both Bangladesh and EU regulations, and signals professionalism to international users.",
  },
} as const;

// ============================================================================
// ANGEL ROUND AND DILUTION — CAP TABLE PROJECTIONS THROUGH SEED
// ============================================================================

export const ANGEL_ROUND_AND_DILUTION = {
  description: "Detailed angel round structure, cap table projections, and dilution analysis through seed round",
  angelRound: {
    targetAmount: "$150K-$250K",
    instrument: "SAFE (Simple Agreement for Future Equity)",
    valuationCap: "$2M-$3M",
    discount: "20%",
    milestoneGates: [
      "MVP launched and operational (product + service marketplace functional)",
      "50+ sellers onboarded with approved listings",
      "First $10K GMV processed through the platform",
    ],
    timeline: "Close by Month 6",
    targetInvestors: [
      "Bangladesh/South Asian tech angels with marketplace or SaaS experience",
      "Dhaka Angel Network (DAN) — established angel group with tech portfolio",
      "Individual operators from Envato/Upwork/Fiverr alumni networks",
      "Diaspora angels — Bangladeshi tech professionals in Silicon Valley, Singapore, London",
    ],
    contingencyIfNotClosed: "Reduce burn to $10K/month (defer 2 hires, founder takes minimal salary). Extends runway to Month 12 on $90K reserves alone. Continue building — traction speaks louder than pitch decks.",
    useOfFunds: {
      engineering: "40% — hire junior engineer + DevOps contractor",
      marketing: "25% — content production, SEO tools, small paid acquisition budget",
      operations: "20% — legal setup (subsidiary), compliance, tooling",
      reserve: "15% — 3-month emergency runway buffer",
    },
  },
  projectedCapTable: {
    afterAngel: {
      founder: "84.25-92%",
      angels: "5-12.5%",
      advisors: "1.25%",
      esop: "2%",
      dilutionMatrix: {
        "$150K at $3M cap": "5% dilution",
        "$250K at $3M cap": "8.3% dilution",
        "$150K at $2M cap": "7.5% dilution",
        "$250K at $2M cap": "12.5% dilution",
      },
      note: "Angel ownership ranges 5-12.5% depending on investment size and cap. At $3M cap: 5-8.3%. At $2M cap: 7.5-12.5%. ESOP pool established but not yet allocated.",
    },
    afterPreSeed: {
      founder: "72-78%",
      preSeedInvestors: "12-15%",
      angels: "5-8%",
      advisors: "1.25%",
      esop: "5%",
      note: "Pre-seed at $5M-$8M valuation. ESOP pool expanded to 5% for key hires. Angel SAFE converts at discount.",
    },
    afterSeed: {
      founder: "55-62%",
      seedInvestors: "15-20%",
      preSeedInvestors: "10-12%",
      angels: "4-6%",
      advisors: "1.25%",
      esop: "8%",
      note: "Seed at $15M-$25M valuation. ESOP expanded to 8% for CTO-level hire and team retention. Standard Series Seed Preferred.",
    },
  },
  founderRetention: "Founder retains >55% through seed round — aligned with VC best practices for founder motivation. Maintaining majority ownership ensures founder control over strategic decisions and is attractive to Series A investors who want an aligned, motivated founder.",
  dilutionGuidance: {
    principle: "Target 15-25% dilution per round. Avoid >30% in any single round.",
    antiDilutionProtection: "Standard broad-based weighted average anti-dilution (not full ratchet) in all preferred rounds.",
    proRataRights: "Offered to angel investors as goodwill gesture, but not legally required on SAFEs.",
  },
  boardGovernance: {
    description: "Board composition and governance cadence evolution from pre-seed through seed",
    preSeed: {
      board: "No formal board. Founder has full operational and strategic control.",
      reporting: "Quarterly investor update emails (metrics, milestones, cash position, asks).",
      rationale: "Pre-product-market-fit companies need speed, not governance overhead.",
    },
    postAngel: {
      board: "Advisory board only: 3 advisors at 0.25-0.5% equity each (included in 1.25% advisor pool).",
      reporting: "Monthly investor update emails with key metrics (GMV, revenue, seller count, burn rate).",
      advisorProfile: "Target: 1 marketplace operator (ex-Envato/Fiverr), 1 Bangladesh tech ecosystem connector, 1 SaaS/growth expert.",
    },
    postPreSeed: {
      board: "3-person board: founder + 1 investor representative + 1 independent director.",
      meetings: "Quarterly board meetings (60-90 minutes, virtual). Observer seat offered to lead angel.",
      reporting: "Monthly financial reporting, quarterly board deck, annual strategy session.",
    },
    postSeed: {
      board: "5-person board: 2 founders/management + 2 investor representatives + 1 independent director.",
      meetings: "Monthly board meetings. Quarterly deep-dives on product, growth, and finance.",
      committees: "Audit committee (informal) once revenue exceeds $1M ARR.",
      reporting: "Monthly financial reporting, quarterly board deck, annual strategy offsite.",
    },
  },
} as const;

// ============================================================================
// LAUNCH SCOPE — WHAT SHIPS AT LAUNCH VS WHAT IS DEFERRED
// ============================================================================

export const LAUNCH_SCOPE = {
  description: "Explicit definition of what ships at launch vs what is deferred, to avoid feature bloat",

  v1_launch: {
    timeline: "Month 6 (MVP launch)",
    features: [
      "Digital product marketplace (list, search, browse, purchase, download)",
      "Service marketplace (list packages, order, deliver, review)",
      "Product and service review/rating system",
      "Seller dashboard (listings, orders, earnings, basic analytics)",
      "Buyer dashboard (purchases, order tracking, wish list)",
      "Shopping cart for products",
      "Stripe payment integration (card + wallet)",
      "Basic search with filters (keyword, category, price, rating)",
      "Buyer protection and refund system",
      "Admin approval workflow for products and services",
    ],
    featureCount: 10,
    notIncluded: [
      "Job board and bidding system (Phase 2)",
      "Connects system (Phase 2)",
      "Subscription plans (Phase 2)",
      "AI Website Builder (Phase 2 MVP, Phase 3 full)",
      "MC/AI Energy credits (Phase 3)",
      "Manob Coins/Wallet (Phase 2)",
      "Graduated service commission (Phase 2)",
      "Extended support purchasing (Phase 2)",
      "Mobile app (Phase 3)",
      "Recommendation engine (Phase 3)",
    ],
  },

  v2_growth: {
    timeline: "Month 12",
    addedFeatures: [
      "Job board with Connect-based bidding",
      "Connects system (purchase and free monthly allocation)",
      "Subscription plans (Free + Pro for each user type)",
      "AI Website Builder MVP (starter kit selection + basic vibe coding)",
      "Manob Wallet for on-platform balance",
      "Extended support purchase option",
      "PayPal and Wise payout methods",
      "Graduated service commission",
    ],
    cumulativeFeatureCount: 18,
  },

  v3_scale: {
    timeline: "Month 24",
    addedFeatures: [
      "Full AI builder with advanced vibe coding workspace",
      "MC/AI Energy credit system",
      "Full subscription tiers (4 per user type)",
      "Recommendation engine",
      "Mobile app (React Native)",
      "Advanced analytics dashboard",
      "Payoneer and Stripe Connect payouts",
      "Community discussion forum",
    ],
    cumulativeFeatureCount: 26,
  },

  principleOfRestraint: "Launch with 10 core features that deliver a complete buy-sell experience. Every additional feature must prove it increases GMV or retention before being built. The 51 features in this knowledge base represent the 24-month vision, NOT the launch scope.",
} as const;

// ============================================================================
// GROWTH LOOPS — FORMAL LOOP MAPPING
// ============================================================================

export const GROWTH_LOOPS = {
  seoContentLoop: {
    participants: "Sellers, Google, Buyers",
    trigger: "Seller lists product",
    steps: [
      "Product listed with SEO-optimized page",
      "Google indexes page",
      "Buyer discovers via organic search",
      "Buyer purchases and leaves review",
      "Review adds unique content, improving SEO",
      "More organic traffic attracted",
    ],
    cycleTime: "2-4 weeks",
    keyMetric: "Organic sessions per listing",
    estimatedViralCoefficient: 0.15,
    note: "Each listing generates 0.15 additional organic buyers per month after indexing",
  },

  crossNetworkLoop: {
    participants: "Sellers, Buyers",
    trigger: "Buyer purchases product",
    steps: [
      "Buyer purchases digital product",
      "Buyer needs customization",
      "Buyer hires same seller for service",
      "Seller earns more, lists more products",
      "More products attract more buyers",
    ],
    cycleTime: "1-3 months",
    keyMetric: "Product-to-service conversion rate",
    estimatedViralCoefficient: 0.08,
    targetConversionRate: "5-10% of product buyers also hire for services",
  },

  aiBuilderConversionLoop: {
    participants: "Users, AI Builder, Marketplace",
    trigger: "User tries free AI builder",
    steps: [
      "User starts free AI builder session",
      "User needs better starter kit/template",
      "User purchases from marketplace",
      "User needs customization beyond AI",
      "User hires service provider",
      "Completed project showcases platform capability",
    ],
    cycleTime: "1-2 weeks",
    keyMetric: "AI builder to marketplace purchase conversion rate",
    estimatedViralCoefficient: 0.12,
    targetConversionRate: "15-25% of AI builder users make a marketplace purchase",
  },

  referralLoop: {
    participants: "Existing users, New users",
    trigger: "Successful purchase",
    steps: [
      "User has positive experience",
      "User shares referral link",
      "New user signs up with credit",
      "New user makes first purchase",
      "Both users earn rewards",
      "New user refers others",
    ],
    cycleTime: "2-6 weeks",
    keyMetric: "Referral rate (% of users who refer at least 1 person)",
    estimatedViralCoefficient: 0.25,
    targetReferralRate: "8-12% of active users",
  },

  compoundEffect: "All 4 loops reinforce each other. SEO brings buyers, cross-network increases LTV, AI builder provides unique acquisition channel, referrals amplify all three.",
} as const;

// ============================================================================
// IDEAL CUSTOMER PROFILES — BUYER & SELLER PERSONAS
// ============================================================================

export const IDEAL_CUSTOMER_PROFILES = {
  buyerPersona1: {
    name: "Solo SaaS Founder",
    role: "Technical founder building a SaaS product",
    companySize: "1-3 people",
    annualTechSpend: "$2K-$10K on templates, tools, and freelance help",
    painPoints: [
      "Wastes time searching across ThemeForest for templates AND Upwork for developers",
      "Can't preview how a template will look with their content before buying",
      "Overpays for simple customizations on Upwork",
    ],
    manobSolution: "One platform for buying the template AND hiring someone to customize it. AI preview before purchase.",
  },

  buyerPersona2: {
    name: "Agency Project Manager",
    role: "PM at a small web agency (5-15 people)",
    companySize: "5-15",
    annualTechSpend: "$15K-$50K on licenses, themes, plugins, and subcontractors",
    painPoints: [
      "Needs consistent quality across multiple projects",
      "Current platforms either focus on products OR services, not both",
      "High Upwork fees eat into project margins",
    ],
    manobSolution: "Bulk purchasing, lower fees with graduated commission, one vendor for products + services.",
  },

  buyerPersona3: {
    name: "Non-Technical SMB Owner",
    role: "Small business owner needing a website",
    companySize: "1-10",
    annualTechSpend: "$500-$3K",
    painPoints: [
      "Overwhelmed by template choices",
      "Can't customize templates themselves",
      "Worried about hiring unknown freelancers",
    ],
    manobSolution: "AI website builder for simple sites, curated starter kits, verified sellers with buyer protection.",
  },

  sellerPersona1: {
    name: "Indie Developer",
    role: "Solo developer creating themes/plugins",
    annualRevenue: "$20K-$80K from digital products",
    painPoints: [
      "ThemeForest exclusivity pressure",
      "No way to upsell services to template buyers",
      "High commission on ThemeForest (30-50%)",
    ],
    manobSolution: "Non-exclusive licensing, dual product+service selling, 10% early bird commission, cross-sell to services.",
  },

  sellerPersona2: {
    name: "Agency/Studio Seller",
    role: "Small BD-based dev shop (5-15 people) selling white-label products and team services",
    teamSize: "5-15",
    averageOrderValue: "$500-$2,000",
    annualRevenue: "$50K-$200K across products and service contracts",
    painPoints: [
      "Managing multiple freelancer profiles across Upwork and Fiverr for each team member",
      "No platform supports selling white-label products alongside custom dev services",
      "Client communication scattered across email, Slack, and platform messages",
    ],
    manobSolution: "Single agency account with team member profiles, project management tools in dashboard, white-label product listings + custom service packages from one storefront.",
  },

  sellerPersona3: {
    name: "Bootcamp Graduate",
    role: "Recent coding bootcamp grad selling first digital products (templates, UI components, scripts)",
    averageOrderValue: "$10-$50",
    annualRevenue: "$2K-$10K (supplemental income while job hunting)",
    painPoints: [
      "No portfolio or reputation on established marketplaces",
      "Unsure how to price digital products",
      "Overwhelmed by listing requirements on ThemeForest or Creative Market",
    ],
    manobSolution: "Low barrier to entry, guided listing wizard, AI-powered pricing suggestions, seller starter kit with templates and packaging tips. Early bird commission (10%) makes even small sales worthwhile.",
  },

  sellerPersona4: {
    name: "Part-time Freelancer",
    role: "Employed full-time, freelancing nights/weekends in niche services (mobile app testing, data entry, translation)",
    averageOrderValue: "$50-$200",
    annualRevenue: "$5K-$20K (side income)",
    painPoints: [
      "Upwork and Fiverr require constant availability and fast response times",
      "Hard to manage freelance work around a 9-5 schedule",
      "Niche services (e.g., Bangla-English translation, manual QA testing) get buried on large platforms",
    ],
    manobSolution: "Flexible availability scheduling (set working hours, auto-pause during busy periods), niche category visibility on a smaller platform, quick payout via bKash for BD-based freelancers.",
  },
} as const;

// ============================================================================
// PRODUCT HUNT LAUNCH PLAYBOOK
// ============================================================================

export const PRODUCT_HUNT_LAUNCH_PLAYBOOK = {
  description: "Step-by-step playbook for a successful Product Hunt launch of manob.ai",

  launchTiming: {
    bestDays: "Tuesday, Wednesday, or Thursday",
    postTime: "12:01 AM PST (to maximize full-day visibility on PH homepage)",
    avoidDays: "Monday (crowded with weekend builders), Friday-Sunday (lower traffic)",
  },

  preLaunch: {
    timeline: "2-4 weeks before launch",
    tasks: [
      "Secure 200+ upvote commitments from community (founder's network, BD tech community, Twitter followers)",
      "Teaser posts on Twitter and LinkedIn: 'Something big is coming for BD developers' — build anticipation",
      "Engage with Product Hunt community: upvote and comment on other launches for 2+ weeks before own launch",
      "Recruit 3-5 'hunters' (PH power users) to share the launch on launch day",
      "Prepare all launch assets (see assets section below)",
      "Set up dedicated landing page with PH-specific CTA and waitlist signup",
    ],
  },

  launchDay: {
    tasks: [
      "Maker comment posted within 5 minutes of launch: personal origin story (BD freelancer frustrations, why manob.ai exists)",
      "Respond to every comment within 30 minutes — authentic, personal replies (no canned responses)",
      "Live demo link prominently featured in launch page",
      "Coordinate upvote push in first 2 hours (critical window for PH algorithm)",
      "Share launch link on Twitter, LinkedIn, Facebook groups, Discord/Slack communities",
      "Email blast to waitlist: 'We just launched on Product Hunt — your support means everything'",
    ],
  },

  assets: {
    productVideo: "90-second demo video: show AI website builder, dual marketplace, seller dashboard — fast-paced, no filler",
    screenshots: [
      "AI website builder chat interface",
      "Dual product + service marketplace browse page",
      "Seller dashboard with earnings and analytics",
      "Buyer experience: search, preview, purchase flow",
      "Mobile responsive view on a Bangladesh-context use case",
    ],
    tagline: "Workspace Where AI & Humans Build Together — Products, Services, and Jobs in One Platform",
    firstComment: "Origin story: BD freelancer ecosystem pain points, founder journey, what makes manob.ai different",
  },

  conversionFlow: [
    "Product Hunt visitor lands on PH listing page",
    "Clicks through to manob.ai dedicated PH landing page (not generic homepage)",
    "Waitlist signup with email (one field, no friction)",
    "Immediate early access invite for PH visitors (skip the waitlist)",
    "Guided seller onboarding: list first product or service within 10 minutes",
  ],

  postLaunch: {
    timeline: "1-7 days after launch",
    tasks: [
      "Follow-up blog post: 'Our Product Hunt launch — what we learned, the numbers, what's next'",
      "Share results on Twitter/LinkedIn (transparent, including both wins and lessons)",
      "Personal thank-you email to every PH commenter and top upvoters",
      "Retarget PH visitors who didn't convert with follow-up ads (optional, budget permitting)",
      "Update PH listing with post-launch metrics and milestones",
    ],
  },

  successMetrics: {
    targetRanking: "Top 5 Product of the Day",
    targetUpvotes: "500+",
    targetWaitlistSignups: "1,000+ from PH traffic",
    targetDirectSignups: "200+ seller accounts created within 7 days of launch",
    secondaryMetrics: ["PH page views", "Landing page conversion rate", "Social media impressions from PH launch"],
  },
} as const;

// ============================================================================
// LIQUIDITY METRICS — MARKETPLACE HEALTH INDICATORS
// ============================================================================

export const LIQUIDITY_METRICS = {
  searchToResultRatio: {
    definition: "% of searches returning 5+ relevant results",
    minimumViable: "70%",
    launchTarget: "80%",
    measurement: "Weekly",
    note: "Below 70% indicates insufficient catalog depth in searched categories",
  },

  timeToFirstResponse: {
    definition: "Median time for a service inquiry to receive seller response",
    target: "Under 4 hours",
    launchBaseline: "Under 12 hours",
    measurement: "Daily",
  },

  jobFillRate: {
    definition: "% of posted jobs receiving 3+ bids within 48 hours",
    minimumViable: "40%",
    launchTarget: "60%",
    measurement: "Weekly",
    note: "Below 40% means buyers will stop posting jobs",
  },

  catalogDepth: {
    definition: "Number of products per category",
    minimumViable: "20 products in each of top 5 categories",
    launchTarget: "50+ products in top 5, 10+ in all categories",
    measurement: "Weekly",
  },

  buyerToSellerRatio: {
    idealRange: "3:1 to 5:1",
    note: "Below 2:1 means sellers don't get enough traffic. Above 8:1 means supply shortage.",
  },

  minimumViableLiquidity: "Launch when: 100+ products across 5+ categories, 50+ service providers, AND search-to-result ratio >70%",

  categoryLiquidityManagement: {
    undersuppliedCategories: {
      trigger: "Search-to-result ratio <50% in a category for 7+ consecutive days",
      responsePlaybook: [
        "Targeted seller recruitment: outreach to top sellers on competing platforms in the undersupplied category",
        "Featured category badge on homepage and search results to attract seller attention",
        "Reduced commission (10% flat) for new listings in the category for 90 days",
        "Seller starter kit promotion: free product listing template + SEO tips specific to the category",
      ],
    },
    oversuppliedCategories: {
      trigger: "Median listing-to-first-sale time >30 days in a category",
      responsePlaybook: [
        "Quality gate tightening: raise minimum listing requirements (better descriptions, more screenshots)",
        "Featured listing algorithm adjustment: prioritize higher-rated and newer sellers to distribute demand",
        "Buyer demand campaigns: targeted content marketing and ads to drive buyers to oversupplied categories",
        "Cross-category recommendations: suggest related products/services in undersupplied adjacent categories",
      ],
    },
    newCategoryLaunch: {
      minimumViableListings: 20,
      strategy: [
        "Seed demand via content marketing: blog posts, social media, and email campaigns highlighting the new category",
        "Category-specific SEO: landing pages targeting long-tail keywords for the new category",
        "Seller incentive: first 50 listings in new category get featured placement for 30 days",
        "Curated 'launch collection' hand-picked by manob.ai team to establish quality bar",
      ],
    },
    categoryHealthDashboard: {
      metrics: [
        "Supply-demand ratio per category (active listings vs buyer searches)",
        "Average time-to-sale per category (listing live to first purchase)",
        "Seller satisfaction by category (quarterly NPS survey segmented by category)",
        "Buyer conversion by category (search sessions resulting in purchase within 7 days)",
      ],
      refreshFrequency: "Daily automated update, weekly manual review by ops team",
    },
  },
} as const;

// ============================================================================
// PRE-LAUNCH PLAN — MONTHS 0-6 BEFORE PUBLIC LAUNCH
// ============================================================================

export const PRE_LAUNCH_PLAN = {
  closedAlpha: {
    timeline: "Month 0-2",
    participants: "20-30 handpicked sellers (founder's network + developer community outreach)",
    goals: [
      "Validate listing flow",
      "Test payment processing end-to-end",
      "Collect feedback on seller dashboard",
      "Seed initial catalog with 50+ products",
    ],
    successCriteria: "20+ sellers actively listing, 0 critical bugs in payment flow",
  },

  inviteBeta: {
    timeline: "Month 3-4",
    participants: "100-200 buyers via waitlist + 50 sellers",
    goals: [
      "Test buyer experience end-to-end",
      "Validate search and discovery",
      "Test buyer protection and refund flow",
      "Achieve first 50 organic transactions",
    ],
    successCriteria: "30% buyer activation rate, <5% refund rate, NPS >30",
  },

  softLaunch: {
    timeline: "Month 5",
    activities: [
      "Open registration (no invite needed)",
      "Initial SEO indexing",
      "Content marketing ramp-up",
      "Fix critical issues from beta feedback",
    ],
    successCriteria: "200+ total users, $5K+ GMV",
  },

  publicLaunch: {
    timeline: "Month 6",
    activities: [
      "Product Hunt launch",
      "Press outreach to tech blogs (TechCrunch, Dev.to, Hacker News)",
      "Social media campaign",
      "Launch discount (10% off first purchase)",
      "Referral program activation",
    ],
    successCriteria: "500+ users in first week, $10K GMV in launch month",
  },

  waitlistStrategy: "Pre-launch landing page with AI builder teaser. Target 1,000+ waitlist signups before beta.",
} as const;

// ============================================================================
// COMPETITIVE MOAT ANALYSIS — TIME-TO-DEFENSIBILITY & SWITCHING COSTS
// ============================================================================

export const COMPETITIVE_MOAT_ANALYSIS = {
  moats: [
    {
      name: "Network Effects",
      timeToDefensibility: "18-24 months",
      description: "Buyer-seller network grows with each transaction. At 1,000+ active sellers and 5,000+ buyers, the network becomes self-reinforcing.",
      switchingCost: "Medium — sellers lose reviews, ratings, and repeat buyers if they leave",
      defensibilityTrigger: "When top 20% of sellers get >50% of revenue from manob.ai",
    },
    {
      name: "AI Preview Technology",
      timeToDefensibility: "12 months",
      description: "AI-powered product previews with buyer's own content. Defensible once trained on platform-specific data.",
      switchingCost: "Low — technology can be replicated, but data advantage grows",
      defensibilityTrigger: "When 100+ exclusive AI starter kits exist that competitors cannot access",
    },
    {
      name: "Cross-Platform Data",
      timeToDefensibility: "12-18 months",
      description: "Understanding which products lead to service purchases (and vice versa) is unique cross-marketplace data.",
      switchingCost: "High — no competitor has product+service purchase correlation data",
      defensibilityTrigger: "When recommendation engine uses cross-category signals for personalization",
    },
    {
      name: "Seller Reputation Capital",
      timeToDefensibility: "6-12 months",
      description: "Sellers accumulate reviews, badges, and track record. Walking away means starting over.",
      switchingCost: "High — Top Seller badge, 100+ reviews, and repeat client base cannot be transferred",
      defensibilityTrigger: "When sellers have 20+ reviews and 5+ repeat clients on platform",
    },
    {
      name: "Exclusive Content",
      timeToDefensibility: "12 months",
      description: "Platform-produced starter kits and exclusive seller content only available on manob.ai.",
      switchingCost: "Medium — buyers can't find this content elsewhere",
      defensibilityTrigger: "When 100+ exclusive products represent >10% of marketplace GMV",
    },
  ],

  overallAssessment: "Weak moats at launch (expected for marketplaces). Strong moats by Month 18-24 if seller reputation + exclusive content + cross-platform data compound. The biggest risk is not building fast enough before a well-funded competitor enters.",
} as const;

// ============================================================================
// SELLER ANALYTICS SPEC — DASHBOARD ANALYTICS DETAILS
// ============================================================================

export const SELLER_ANALYTICS_SPEC = {
  overview: {
    metrics: [
      "Total GMV (all time + this month)",
      "Total earnings (all time + this month)",
      "Active listings count",
      "Average rating",
      "Response time",
      "Badge/level progress",
    ],
    refreshRate: "Real-time for orders, daily for analytics",
  },

  realtimeRevenueDashboard: {
    views: ["Daily (last 30 days)", "Weekly (last 12 weeks)", "Monthly (last 12 months)"],
    widgets: [
      "Revenue counter (updates in real-time as orders complete)",
      "Orders in progress (pending delivery, in revision)",
      "Pending payouts (cleared funds awaiting next withdrawal window)",
      "Today's earnings vs same day last week",
    ],
    chartTypes: ["Line chart for trends", "Bar chart for product vs service split", "Pie chart for category breakdown"],
    exportOptions: ["CSV download", "PDF report (weekly/monthly summary)"],
    implementation: "Phase 1 — basic daily/monthly views. Phase 2 — real-time websocket updates.",
  },

  conversionFunnel: {
    stages: [
      { stage: "Profile Views", description: "Unique visitors to seller profile page", metric: "impressions" },
      { stage: "Gig/Listing Clicks", description: "Visitors who click into a specific product or service listing", metric: "clicks" },
      { stage: "Order Starts", description: "Buyers who initiate an order (add to cart or click 'Order Now')", metric: "order_initiations" },
      { stage: "Order Completions", description: "Orders fully delivered and accepted by buyer", metric: "completions" },
      { stage: "Repeat Orders", description: "Buyers who return to place a second or subsequent order", metric: "repeat_orders" },
    ],
    dropOffAnalysis: "Highlight biggest drop-off point with actionable suggestions (e.g., 'Your gig click-to-order rate is 3% vs category average 8% — consider adding a portfolio sample')",
    benchmarks: "Show category averages at each funnel stage for comparison",
    implementation: "Phase 1 — basic funnel. Phase 2 — AI-powered drop-off recommendations.",
  },

  competitorPricingInsights: {
    description: "Anonymized marketplace averages for similar gigs/products in seller's category",
    dataPoints: [
      "Category median price for similar listings",
      "Price range (10th percentile to 90th percentile) in seller's category",
      "Average delivery time for similar services",
      "Average number of revisions offered by competitors",
      "Feature comparison: what top sellers in category include vs what you include",
    ],
    privacyNote: "All data anonymized and aggregated — no individual seller pricing revealed. Minimum 5 comparable listings required.",
    updateFrequency: "Weekly refresh",
    implementation: "Phase 2 — requires sufficient marketplace data density",
  },

  aiPricingRecommendations: {
    description: "AI-powered pricing suggestions based on market data, seller performance, and demand signals",
    inputs: [
      "Current category pricing distribution",
      "Seller's rating and review count (higher-rated sellers can charge premium)",
      "Demand trends in category (rising demand suggests price increase opportunity)",
      "Seller's conversion rate vs category average (low conversion may indicate overpricing)",
      "Seasonal demand patterns (e.g., WordPress theme demand peaks in January)",
    ],
    outputs: [
      "Suggested price range with confidence interval",
      "Revenue impact simulation: 'If you lower price by 10%, projected order volume increases 25%, net revenue +12%'",
      "Premium pricing eligibility: 'Your 4.9 rating and 50+ reviews qualify you for top-tier pricing'",
    ],
    implementation: "Phase 3 — requires 6+ months of transaction data for ML model training",
  },

  performanceBenchmarks: {
    description: "Seller performance compared to category averages and top performers",
    benchmarkMetrics: [
      { metric: "Average rating", comparison: "Your rating vs category avg vs top 10% avg" },
      { metric: "Response time", comparison: "Your response time vs category avg vs top 10% avg" },
      { metric: "Order completion rate", comparison: "Your completion rate vs category avg vs top 10% avg" },
      { metric: "On-time delivery rate", comparison: "Your delivery rate vs category avg vs top 10% avg" },
      { metric: "Repeat buyer rate", comparison: "Your repeat rate vs category avg vs top 10% avg" },
      { metric: "Average order value", comparison: "Your AOV vs category avg vs top 10% avg" },
    ],
    percentileRanking: "Show seller's percentile rank in each metric (e.g., 'You are in the top 15% for response time')",
    improvementTips: "AI-generated tips based on weakest metric (e.g., 'Improve response time to under 1 hour to match top performers')",
    implementation: "Phase 2 — basic benchmarks. Phase 3 — AI-generated improvement tips.",
  },

  revenueForecasting: {
    description: "Projected earnings for next 30, 60, and 90 days based on historical trends and market signals",
    methodology: [
      "Weighted moving average of last 90 days of revenue (recent weeks weighted higher)",
      "Seasonal adjustment based on category demand patterns",
      "Pipeline value: orders in progress expected to complete",
      "Repeat buyer prediction: likelihood of past buyers returning based on purchase frequency",
    ],
    outputFormat: {
      thirtyDay: "Projected revenue with confidence band (optimistic / base / pessimistic)",
      sixtyDay: "Projected revenue with wider confidence band",
      ninetyDay: "Projected revenue with trend indicator (growing / stable / declining)",
    },
    alerts: [
      "Revenue declining 20%+ vs previous period — 'Revenue Alert: consider running a promotion'",
      "Revenue growing 50%+ vs previous period — 'Growth Alert: consider raising prices or adding premium tier'",
      "No orders in 14+ days — 'Activity Alert: update your listings to improve visibility'",
    ],
    implementation: "Phase 3 — requires 6+ months of seller-level transaction data",
  },

  salesAnalytics: {
    metrics: [
      "Revenue trend (daily/weekly/monthly chart)",
      "Sales by product/service breakdown",
      "Top 5 products by revenue",
      "Conversion rate (views → purchases)",
      "Average order value trend",
    ],
    comparisons: "vs previous period (week-over-week, month-over-month)",
  },

  customerInsights: {
    metrics: [
      "Repeat buyer rate",
      "Buyer geographic distribution",
      "Most common buyer profile (solo founder, agency, SMB)",
      "Review sentiment summary",
    ],
    note: "Phase 2 feature — basic version at launch shows order count and ratings only",
  },

  competitiveBenchmark: {
    metrics: [
      "Your average rating vs category average",
      "Your response time vs category average",
      "Your pricing vs category median",
    ],
    note: "Phase 2 feature",
  },

  badgeProgress: {
    display: "Visual progress bar toward next badge level with clear requirements remaining",
  },
} as const;

// ============================================================================
// FIRST SALE PROGRAM — COMPRESS TIME-TO-FIRST-SALE
// ============================================================================

export const FIRST_SALE_PROGRAM = {
  newSellerSpotlight: {
    description: "Dedicated 'New on manob.ai' section on homepage",
    duration: "14 days from first listing approval",
    maxSellersShown: 12,
    rotationFrequency: "Every 6 hours",
    eligibility: "First listing approved, profile 80%+ complete",
  },

  expeditedReview: {
    description: "First listing from any new seller gets priority review",
    targetReviewTime: "24-48 hours (vs standard 3-7 days)",
    note: "Reduces time from signup to live listing, which is the highest-friction period",
  },

  launchPromotion: {
    description: "Optional seller-funded discount on first 10 sales",
    discountRange: "10-25% (seller chooses)",
    fundedBy: "Seller (platform does not subsidize)",
    badge: "Shows 'Launch Offer' badge on listing",
  },

  matchingNotifications: {
    description: "When a new seller lists in a category, notify recent buyers who searched that category",
    maxNotificationsPerListing: 50,
    channel: "In-app + email",
    note: "Phase 1 feature — simple category matching. Phase 2 adds AI-powered matching.",
  },

  successMetric: "Target: 60% of new sellers make first sale within 30 days (vs estimated 35% without program)",
} as const;

// ============================================================================
// POST-PURCHASE EXPERIENCE — WHAT HAPPENS AFTER CHECKOUT
// ============================================================================

export const POST_PURCHASE_EXPERIENCE = {
  productPurchase: {
    immediateActions: [
      "Download confirmation page with direct download link",
      "Email receipt with download link (expires in 30 days)",
      "Product added to 'My Purchases' library (permanent access)",
    ],
    gettingStarted: [
      "Auto-generated 'Getting Started' guide based on product type (WordPress: install theme guide, React: npm install guide)",
      "Link to product documentation if provided by seller",
    ],
    upsellOpportunities: [
      "'Need customization? Hire [seller name] for a service' CTA",
      "'Similar products you might like' recommendations",
      "'Complete the stack' bundles (e.g., bought a theme? Here's a matching plugin)",
    ],
    reviewPrompt: {
      timing: "7 days after download (or 3 days after second download)",
      format: "Star rating + optional text review + optional screenshot",
    },
  },

  servicePurchase: {
    immediateActions: [
      "Order confirmation with delivery timeline",
      "Chat/messaging channel opened with seller",
      "Milestone tracker (for multi-milestone orders)",
    ],
    deliveryFlow: [
      "Seller delivers work",
      "Buyer has 3-day review period",
      "Buyer can request revision (within package limits) or approve",
      "Auto-approval after 3 days if no response",
    ],
    reviewPrompt: {
      timing: "Immediately after order completion/approval",
      format: "Star rating (5 categories) + text review",
    },
  },
} as const;

// ============================================================================
// VIRAL MECHANICS — SPECIFIC VIRAL HOOKS & DISTRIBUTION
// ============================================================================

export const VIRAL_MECHANICS = {
  shareablePurchaseReceipts: {
    description: "After purchase, offer 'Share what you bought' with pre-formatted social cards",
    platforms: ["Twitter/X", "LinkedIn", "Dev.to"],
    incentive: "Earn 50 Manob Coins per share that generates a click",
    implementation: "Phase 2",
  },

  publicSellerPortfolios: {
    description: "Every seller gets a public profile page (manob.ai/seller/[username]) that is SEO-indexed",
    content: [
      "Portfolio of products and services",
      "Reviews and ratings",
      "Bio and skills",
      "Hire me button",
    ],
    seoStrategy: "Target 'hire [skill] developer' and '[product type] developer portfolio' keywords",
    implementation: "Phase 1",
  },

  embeddableWidgets: {
    description: "Sellers can embed 'Available on manob.ai' badges and 'Hire me on manob.ai' buttons on personal sites, GitHub READMEs, and portfolios",
    widgetTypes: [
      "Product card embed",
      "Hire me button",
      "Portfolio showcase",
    ],
    trackingAndAttribution: "UTM-tagged links for referral credit",
    implementation: "Phase 2",
  },

  communityGrowth: {
    forumSEO: "All public forum threads indexed by Google. Target long-tail developer questions.",
    gamification: "Reputation points for helpful answers, 'Top Contributor' monthly badge, MC rewards for top 10 contributors each month",
    feedbackLoop: "Forum activity improves seller visibility in search results (active community members rank higher)",
  },
} as const;

// ============================================================================
// GEOGRAPHIC STRATEGY — MARKET PRIORITIZATION & FOCUS
// ============================================================================

export const GEOGRAPHIC_STRATEGY = {
  /** Phase 1: Bangladesh Domestic — Build supply base and prove model in home market */
  phase1_BD_domestic: {
    name: "Bangladesh Domestic",
    timeline: "Month 0-6",
    rationale: "Founder's home market, existing network, lowest CAC, prove product-market fit before international expansion",

    cityByCity: [
      {
        city: "Dhaka",
        priority: 1,
        timeline: "Month 0-2 (launch city)",
        population: 22_000_000,
        techSavvyYouth: 1_800_000,
        universities: ["BUET", "DU", "BRAC University", "NSU", "AIUB", "UIU"],
        freelancerEstimate: 650_000,
        keyAreas: ["Mirpur (tech hub)", "Banani/Gulshan (agencies)", "Dhanmondi (universities)", "Uttara (growing tech corridor)"],
        gtmTactics: [
          "Partner with BUET, BRAC, NSU CS departments for seller onboarding events",
          "Sponsor Bangladesh Developer Conference and local tech meetups",
          "Target co-working spaces: Regus Dhaka, Jeeon HQ, WorkStation",
          "Facebook group outreach: BD Freelancers (500K+ members), WordPress Bangladesh, React Bangladesh",
        ],
      },
      {
        city: "Chittagong",
        priority: 2,
        timeline: "Month 3-4",
        population: 5_200_000,
        techSavvyYouth: 350_000,
        universities: ["CUET", "Chittagong University", "East Delta University"],
        freelancerEstimate: 85_000,
        gtmTactics: [
          "Partner with CUET engineering programs",
          "Target Chittagong IT Park tenants",
          "Local tech community events and workshops",
        ],
      },
      {
        city: "Sylhet",
        priority: 3,
        timeline: "Month 4-5",
        population: 3_600_000,
        techSavvyYouth: 200_000,
        universities: ["SUST", "Leading University", "Metropolitan University"],
        freelancerEstimate: 45_000,
        diasporaConnection: "Strong UK diaspora ties — Sylheti community in London/Birmingham provides cross-border demand signal",
        gtmTactics: [
          "Leverage UK-Sylhet diaspora connection for cross-border service demand",
          "Partner with SUST CS department",
          "Target returning diaspora entrepreneurs",
        ],
      },
      {
        city: "Rajshahi",
        priority: 4,
        timeline: "Month 5-6",
        population: 2_600_000,
        techSavvyYouth: 150_000,
        universities: ["Rajshahi University", "RUET", "Varendra University"],
        freelancerEstimate: 30_000,
        gtmTactics: [
          "Partner with Rajshahi IT training centers",
          "Campus ambassador program at RUET",
          "Workshop series on freelancing and digital product creation",
        ],
      },
    ],

    localPaymentIntegration: {
      bKash: {
        priority: 1,
        marketShare: "48% of MFS transactions in Bangladesh",
        integrationTimeline: "Month 0 (must-have at launch)",
        technicalPartner: "bKash Payment Gateway API",
        feeStructure: "1.5% per transaction (vs Stripe 2.9% — significant cost saving for domestic)",
        useCase: "Buyer payments + seller payouts in BDT",
      },
      nagad: {
        priority: 2,
        marketShare: "30% of MFS transactions, fastest growing",
        integrationTimeline: "Month 1-2",
        technicalPartner: "Nagad Merchant API",
        feeStructure: "1.4% per transaction",
        useCase: "Buyer payments + seller payouts (especially younger demographic)",
      },
      rocket: {
        priority: 3,
        marketShare: "12% of MFS transactions",
        integrationTimeline: "Month 3-4",
        technicalPartner: "Dutch-Bangla Bank Rocket API",
        feeStructure: "1.8% per transaction",
        useCase: "Alternative payment for users without bKash/Nagad",
      },
      bankTransfer: {
        priority: 4,
        integrationTimeline: "Month 2",
        supportedBanks: ["Dutch-Bangla Bank", "BRAC Bank", "City Bank", "Eastern Bank"],
        useCase: "High-value transactions and business accounts",
        feeStructure: "Flat BDT 10-25 per transfer depending on bank",
      },
    },

    phase1Targets: {
      activeSellersByMonth6: 2_000,
      activeListings: 5_000,
      monthlyGMV: 50_000,
      registeredBuyers: 10_000,
    },
  },

  /** Phase 2: Bangladesh Diaspora — Tap into 10M+ Bangladeshis abroad as demand side */
  phase2_BD_diaspora: {
    name: "Bangladesh Diaspora Markets",
    timeline: "Month 6-12",
    rationale: "10M+ Bangladeshis abroad have cultural affinity, language advantage, and demand for BD-quality digital services at BD pricing. Natural demand-side expansion without localizing product.",

    topDiasporaMarkets: [
      {
        country: "Saudi Arabia",
        diasporaSize: 2_200_000,
        keyDemographic: "Workers, small business owners needing websites, social media, branding",
        gtm: [
          "Facebook groups: Bangladeshis in Saudi Arabia (800K+ members), Probashi Bangla KSA",
          "Partner with Bangladesh Embassy cultural events in Riyadh, Jeddah",
          "WhatsApp group marketing through community leaders",
          "Target Eid al-Fitr and Eid al-Adha seasonal marketing pushes",
        ],
        paymentMethod: "Stripe (Saudi Arabia supported), STC Pay, Mada cards",
        estimatedDemand: "Low-cost website building, social media marketing, Bangla content creation",
      },
      {
        country: "United Arab Emirates",
        diasporaSize: 1_100_000,
        keyDemographic: "Professionals, entrepreneurs, agency workers seeking BD developer talent",
        gtm: [
          "Facebook groups: Bangladeshis in Dubai/UAE (500K+ members)",
          "Partner with Bangladesh Business Council in Dubai",
          "LinkedIn outreach to BD professionals in UAE tech sector",
          "Sponsor Pohela Boishakh (Bengali New Year) events in Dubai",
        ],
        paymentMethod: "Stripe (UAE supported), local debit cards",
        estimatedDemand: "Web development, mobile apps, e-commerce sites for small businesses",
      },
      {
        country: "United Kingdom",
        diasporaSize: 600_000,
        keyDemographic: "Established community (2nd/3rd generation), restaurant owners, SMB owners, tech professionals",
        gtm: [
          "Target British-Bangladeshi business associations in London, Birmingham, Manchester",
          "Partner with Brick Lane businesses and Banglatown community organizations",
          "Facebook groups: British Bangladeshis (200K+ members), Sylheti community groups",
          "Sponsor Boishakhi Mela and other cultural festivals",
          "Leverage Sylhet-UK corridor: many Sylheti families have UK connections",
        ],
        paymentMethod: "Stripe (UK), bank transfer, PayPal",
        estimatedDemand: "Restaurant websites, e-commerce, business software, marketing materials",
      },
      {
        country: "United States",
        diasporaSize: 500_000,
        keyDemographic: "Tech professionals, entrepreneurs, students, restaurant/business owners",
        gtm: [
          "Target NYC (Jackson Heights, Astoria), LA, Dallas BD communities",
          "Facebook groups: Bangladeshi Americans (150K+ members), BD professional associations",
          "Partner with BANA (Bangladesh Association of North America) events",
          "LinkedIn targeting of BD-origin tech professionals in Silicon Valley, NYC",
        ],
        paymentMethod: "Stripe (US), credit/debit cards",
        estimatedDemand: "Full-stack development, mobile apps, AI/ML projects, startup MVPs",
      },
      {
        country: "Malaysia",
        diasporaSize: 800_000,
        keyDemographic: "Workers, students, small business owners",
        gtm: [
          "Facebook groups: Bangladeshi in Malaysia (400K+ members)",
          "Partner with BD student associations at Malaysian universities",
          "WhatsApp/Telegram community outreach",
        ],
        paymentMethod: "Stripe (Malaysia supported), GrabPay, Touch 'n Go eWallet",
        estimatedDemand: "Basic website development, social media management, graphic design",
      },
      {
        country: "Singapore",
        diasporaSize: 150_000,
        keyDemographic: "Tech professionals, construction/service workers, students",
        gtm: [
          "LinkedIn targeting of BD professionals in Singapore tech sector",
          "Partner with Singapore Bangladesh Society",
          "Target Little India/Geylang BD community businesses",
        ],
        paymentMethod: "Stripe (Singapore), PayNow, GrabPay",
        estimatedDemand: "Tech consulting, web development, mobile apps",
      },
      {
        country: "Italy",
        diasporaSize: 160_000,
        keyDemographic: "Workers, small business owners",
        gtm: [
          "Facebook groups: Bangladeshis in Italy (100K+ members)",
          "Community association partnerships in Rome, Milan",
          "Eid and cultural event marketing",
        ],
        paymentMethod: "Stripe (Italy), Bancomat, local bank transfers",
        estimatedDemand: "Social media marketing, website creation, translation services",
      },
      {
        country: "Qatar",
        diasporaSize: 400_000,
        keyDemographic: "Workers, small business owners",
        gtm: [
          "Facebook groups: Bangladeshis in Qatar (250K+ members)",
          "WhatsApp community outreach",
          "Partner with BD community events in Doha",
        ],
        paymentMethod: "Stripe, Qatari debit cards",
        estimatedDemand: "Basic web services, social media marketing, branding",
      },
      {
        country: "Kuwait",
        diasporaSize: 250_000,
        keyDemographic: "Workers seeking affordable digital services",
        gtm: [
          "Facebook/WhatsApp community groups",
          "Embassy event partnerships",
        ],
        paymentMethod: "Stripe, KNET (local payment network)",
        estimatedDemand: "Website development, graphic design, digital marketing",
      },
      {
        country: "Oman",
        diasporaSize: 200_000,
        keyDemographic: "Workers, small business owners",
        gtm: [
          "Community Facebook groups",
          "Cultural event sponsorships",
        ],
        paymentMethod: "Stripe, local bank cards",
        estimatedDemand: "Web development, social media management",
      },
    ],

    diasporaMarketingStrategy: {
      culturalCalendar: [
        "Pohela Boishakh (Bengali New Year, April) — major promotional campaign",
        "Eid al-Fitr and Eid al-Adha — seasonal marketing pushes across all Gulf markets",
        "Ekushey February (International Mother Language Day) — Bangla content promotion",
        "Victory Day (December 16) — patriotic branding, support BD talent messaging",
      ],
      messaging: "Hire talent from home. Support Bangladesh's digital economy. Same quality, unbeatable prices.",
      channels: ["Facebook (primary — highest BD diaspora engagement)", "WhatsApp groups", "Community events", "LinkedIn (for professionals)"],
    },

    phase2Targets: {
      diasporaBuyersByMonth12: 5_000,
      monthlyGMVFromDiaspora: 100_000,
      topMarketsByGMV: "UAE, UK, USA expected to generate 60% of diaspora GMV",
    },
  },

  /** Phase 3: South Asia Expansion — Leverage regional similarities */
  phase3_SouthAsia: {
    name: "South Asia Expansion",
    timeline: "Month 12-18",
    rationale: "Similar developer ecosystems, competitive pricing, shared cultural context. India alone has 5M+ freelancers.",

    markets: [
      {
        country: "India",
        timeline: "Month 12-14",
        marketSize: "5M+ registered freelancers, $24B IT services export market",
        regulatoryRequirements: [
          "RBI compliance for cross-border payments",
          "GST registration for marketplace operator (18% GST on service fees)",
          "FEMA compliance for foreign exchange transactions",
          "IT Act 2000 intermediary guidelines compliance",
          "Data localization requirements under Personal Data Protection Bill",
        ],
        localization: {
          languages: ["English (primary)", "Hindi (Phase 2)", "Bengali (shared with BD)"],
          currency: "INR (Indian Rupee)",
          paymentMethods: ["UPI (dominant — 10B+ monthly transactions)", "Razorpay", "Paytm", "PhonePe", "Net banking", "Credit/debit cards"],
        },
        entryStrategy: [
          "Partner with Indian freelancer communities (Freelancer India, Indian Web Developers)",
          "Target tier-2 cities (Pune, Hyderabad, Jaipur, Lucknow) where pricing is more competitive",
          "Leverage BD-India developer network overlap",
          "Content marketing in Hindi targeting 'how to sell digital products online'",
        ],
        competitiveRisk: "High — Fiverr, Upwork, Freelancer.com already established. Differentiate via AI features and product+service combo.",
      },
      {
        country: "Pakistan",
        timeline: "Month 14-16",
        marketSize: "2M+ registered freelancers, $500M freelancing exports annually",
        regulatoryRequirements: [
          "State Bank of Pakistan (SBP) approval for payment processing",
          "Pakistan Telecommunication Authority (PTA) compliance",
          "Federal Board of Revenue (FBR) tax registration",
          "Prevention of Electronic Crimes Act (PECA) compliance",
        ],
        localization: {
          languages: ["English (primary)", "Urdu (Phase 2)"],
          currency: "PKR (Pakistani Rupee)",
          paymentMethods: ["JazzCash", "Easypaisa", "Bank Alfalah", "HBL Direct", "SadaPay", "NayaPay"],
        },
        entryStrategy: [
          "Target Lahore, Karachi, Islamabad tech communities",
          "Partner with Pakistan Software Houses Association (P@SHA)",
          "Facebook group outreach: Pakistan Freelancers (1M+ members)",
          "Leverage Pakistan's strong WordPress development community",
        ],
        competitiveRisk: "Medium — fewer established marketplaces than India. Strong freelancing culture.",
      },
      {
        country: "Sri Lanka",
        timeline: "Month 16-17",
        marketSize: "200K+ IT professionals, growing freelancer ecosystem",
        regulatoryRequirements: [
          "Central Bank of Sri Lanka (CBSL) payment processing approval",
          "ICT Agency (ICTA) compliance",
          "Inland Revenue Department registration",
        ],
        localization: {
          languages: ["English (primary — high English proficiency)", "Sinhala (Phase 3)", "Tamil (Phase 3)"],
          currency: "LKR (Sri Lankan Rupee)",
          paymentMethods: ["Stripe (supported)", "Bank transfers", "Dialog Genie", "FriMi"],
        },
        entryStrategy: [
          "Target Colombo tech community",
          "Partner with SLASSCOM (Sri Lanka Association of Software and Service Companies)",
          "Leverage high English proficiency as advantage",
        ],
        competitiveRisk: "Low — smaller market, less competition.",
      },
      {
        country: "Nepal",
        timeline: "Month 17-18",
        marketSize: "150K+ IT professionals, emerging freelancer market",
        regulatoryRequirements: [
          "Nepal Rastra Bank (NRB) compliance for digital payments",
          "Department of Information Technology compliance",
          "PAN registration for tax purposes",
        ],
        localization: {
          languages: ["English (primary)", "Nepali (Phase 3)"],
          currency: "NPR (Nepalese Rupee)",
          paymentMethods: ["eSewa", "Khalti", "IME Pay", "ConnectIPS", "Bank transfers"],
        },
        entryStrategy: [
          "Target Kathmandu Valley tech community",
          "Partner with Computer Association of Nepal (CAN)",
          "Leverage Nepal-India developer community overlap",
        ],
        competitiveRisk: "Low — underserved market with growing digital economy.",
      },
    ],

    phase3Targets: {
      activeSellersAcrossSouthAsia: 10_000,
      monthlyGMV: 250_000,
      dominantMarket: "India expected to represent 60% of Phase 3 GMV",
    },
  },

  /** Phase 4: Global Expansion — Selective category-first approach */
  phase4_Global: {
    name: "Global Availability",
    timeline: "Month 18-30",
    rationale: "Expand to developed markets (US, UK, Canada, Australia, Western Europe) as demand side, then open supply globally.",

    categoryRolloutOrder: [
      {
        category: "Digital Products (themes, templates, plugins, scripts)",
        goGlobalTimeline: "Month 18",
        rationale: "Digital products have no delivery logistics, no time zone issues, and universal demand. Lowest friction for global expansion.",
        complianceRequirements: "Digital goods tax (VAT/GST collection), software licensing compliance",
      },
      {
        category: "AI Starter Kits and AI Website Builder",
        goGlobalTimeline: "Month 20",
        rationale: "AI-powered tools are globally appealing and differentiate from competitors. High margin, low delivery complexity.",
        complianceRequirements: "AI transparency requirements (EU AI Act), data processing agreements",
      },
      {
        category: "Development Services (web, mobile, custom software)",
        goGlobalTimeline: "Month 22",
        rationale: "Services require buyer-seller communication, time zone management, and dispute resolution. Roll out after product marketplace is established.",
        complianceRequirements: "Independent contractor classification (varies by jurisdiction), cross-border service tax",
      },
      {
        category: "Design and Creative Services",
        goGlobalTimeline: "Month 24",
        rationale: "Creative services are subjective — need robust review/dispute system before global scale.",
        complianceRequirements: "IP ownership and licensing agreements, right to use deliverables across jurisdictions",
      },
    ],

    complianceByRegion: {
      europeanUnion: {
        requirements: [
          "GDPR compliance (data processing, right to deletion, DPO appointment)",
          "EU AI Act compliance for AI-powered features (transparency, risk classification)",
          "Digital Services Act (DSA) compliance as online platform",
          "VAT MOSS (Mini One Stop Shop) for digital goods sold to EU consumers",
          "PSD2/SCA (Strong Customer Authentication) for payments",
          "Cookie consent and privacy notice requirements",
        ],
        estimatedComplianceCost: 25_000,
        ongoingCost: 5_000,
        timeline: "Month 18-20 (compliance setup before EU launch)",
      },
      unitedStates: {
        requirements: [
          "State-specific sales tax collection (Wayfair decision — economic nexus thresholds)",
          "CCPA/CPRA compliance for California users",
          "CAN-SPAM Act compliance for marketing emails",
          "COPPA compliance (no users under 13)",
          "Section 230 protections (marketplace operator liability)",
          "State-specific gig worker classification laws (California AB5, etc.)",
        ],
        estimatedComplianceCost: 15_000,
        ongoingCost: 8_000,
        timeline: "Month 18 (US is primary demand market)",
      },
      unitedKingdom: {
        requirements: [
          "UK GDPR and Data Protection Act 2018 compliance",
          "VAT registration and collection (20% standard rate on digital services)",
          "FCA compliance for payment processing (if applicable)",
          "Online Safety Act compliance",
        ],
        estimatedComplianceCost: 10_000,
        ongoingCost: 3_000,
        timeline: "Month 19",
      },
      restOfWorld: {
        approach: "Country-by-country compliance assessment as GMV exceeds $50K/month in any single market",
        priorityMarkets: ["Canada", "Australia", "Germany", "France", "Netherlands", "Singapore"],
      },
    },

    phase4Targets: {
      globalActiveSellers: 50_000,
      globalActiveBuyers: 200_000,
      monthlyGMV: 2_000_000,
      revenueFromGlobal: "60% of GMV from non-South-Asian buyers by Month 30",
    },
  },

  /** Market Entry Decision Framework — When to expand to the next geography */
  marketEntryDecisionFramework: {
    description: "Data-driven criteria that trigger expansion to the next geographic phase. All criteria must be met before allocating resources to new market entry.",
    expansionTriggers: {
      minimumActiveSellers: 1_000,
      minimumMonthlyGMV: 100_000,
      positiveUnitEconomics: true,
      sellerNPS: 40,
      buyerNPS: 35,
      disputeRateBelow: 0.03,
      timeToFirstMatchHours: 48,
    },
    evaluationProcess: [
      "Monthly review of expansion readiness metrics by founding team",
      "Market research report for target geography (TAM, competitive landscape, regulatory requirements)",
      "Cost-benefit analysis: projected CAC, expected LTV, break-even timeline for new market",
      "Go/no-go decision with 30-day preparation window before launch in new market",
    ],
    killCriteria: [
      "If CAC in new market exceeds 3x home market CAC after 3 months — pause expansion",
      "If seller churn in new market exceeds 50% at 3 months — pause and investigate",
      "If monthly GMV in new market is below $10K after 6 months — consider exit",
    ],
  },

  supplyStrategy: {
    primarySupply: "South Asian developers (Bangladesh, India, Pakistan) — high quality, competitive pricing",
    rationale: "Founder's network provides initial supply. 3x cost advantage vs US/EU developers.",
    sellerGeoMix: {
      year1: "70% South Asia, 20% Eastern Europe, 10% other",
      year2: "50% South Asia, 25% Eastern Europe, 15% US/EU, 10% other",
    },
  },

  languageStrategy: {
    launch: "English and Bangla (dual language for BD domestic market)",
    phase2: "Add Hindi, Urdu for South Asia expansion. Add language filters for sellers.",
    phase3: "UI localization for top 5 non-English markets by GMV",
    phase4: "Full localization for EU languages (German, French, Spanish) when EU GMV exceeds $100K/month",
  },
} as const;

// ============================================================================
// BUYER ANALYTICS SPEC — BUYER-SIDE DASHBOARD & INSIGHTS
// ============================================================================

export const BUYER_ANALYTICS_SPEC = {
  orderHistory: {
    description: "Comprehensive order history with search, filter, and export capabilities",
    views: ["All orders (chronological)", "By category", "By seller", "By status (active, completed, disputed)"],
    details: [
      "Order date, seller name, service/product description, price paid",
      "Delivery status and timeline",
      "Review left (or prompt to leave review)",
      "Re-order button for repeat purchases",
      "Download history for digital products (with re-download links)",
    ],
    exportOptions: ["CSV export for expense tracking", "PDF invoice generation per order"],
  },

  spendingPatterns: {
    description: "Visual breakdown of spending habits to help buyers manage budgets",
    charts: [
      "Monthly spending trend (bar chart, last 12 months)",
      "Spending by category (pie chart: development, design, marketing, etc.)",
      "Spending by seller (top 5 sellers by total spend)",
      "Average order value trend over time",
    ],
    insights: [
      "Month-over-month spending change with percentage",
      "Most frequently purchased category",
      "Highest-value single purchase",
      "Total platform lifetime spend",
    ],
  },

  sellerComparisonTools: {
    description: "Side-by-side comparison of sellers offering similar services",
    comparisonCriteria: [
      { criterion: "Price", detail: "Starting price, average price, price per milestone" },
      { criterion: "Rating", detail: "Overall rating, rating in specific category, number of reviews" },
      { criterion: "Delivery Time", detail: "Average delivery time, on-time delivery rate" },
      { criterion: "Response Time", detail: "Average time to first message response" },
      { criterion: "Completion Rate", detail: "Percentage of orders successfully completed" },
      { criterion: "Repeat Client Rate", detail: "Percentage of clients who return for additional orders" },
    ],
    maxComparison: 4,
    implementation: "Phase 2 — requires sufficient seller data for meaningful comparison",
  },

  budgetTracking: {
    description: "Set and track monthly/quarterly/annual budgets for marketplace spending",
    features: [
      "Set budget limits by time period (monthly, quarterly, annual)",
      "Set budget limits by category (e.g., max $500/month on development)",
      "Real-time spend vs budget progress bar",
      "Alert when approaching 80% of budget limit",
      "Alert when budget exceeded",
      "Carry-over unused budget option",
    ],
    integrations: "Export budget reports compatible with accounting software (QuickBooks, Xero CSV format)",
    implementation: "Phase 2",
  },

  projectTimelineVisualization: {
    description: "Gantt-style timeline view for multi-milestone service orders",
    features: [
      "Visual timeline showing all active orders and their milestones",
      "Expected delivery dates with color-coded status (on track, at risk, overdue)",
      "Dependency mapping for related orders (e.g., design must complete before development starts)",
      "Calendar integration (Google Calendar, Outlook) for milestone due dates",
      "Historical timeline view for completed projects",
    ],
    implementation: "Phase 2 — basic timeline. Phase 3 — dependency mapping and calendar integration.",
  },

  recommendedSellers: {
    description: "AI-powered seller recommendations based on buyer history and preferences",
    signals: [
      "Past purchase categories and satisfaction ratings",
      "Sellers frequently hired by buyers with similar profiles",
      "Seller expertise match to buyer's industry/use case",
      "Price range alignment with buyer's historical spending",
      "Availability and response time preferences",
    ],
    displayFormat: "Personalized 'Recommended for You' section on buyer dashboard with 6-8 seller cards",
    refreshFrequency: "Daily refresh based on latest marketplace data",
    implementation: "Phase 3 — requires collaborative filtering ML model trained on transaction data",
  },

  savingsCalculator: {
    description: "Interactive tool showing cost savings of using manob.ai vs alternatives",
    comparisons: [
      {
        alternative: "Hiring locally (US/UK/EU)",
        methodology: "Compare manob.ai seller average price vs Glassdoor/Indeed average hourly rate for same skill in buyer's country",
        exampleSaving: "React developer: $50/hr local vs $20/hr on manob.ai = 60% savings",
      },
      {
        alternative: "Other platforms (Fiverr, Upwork)",
        methodology: "Compare manob.ai average price for category vs published competitor averages, factoring in buyer fees",
        exampleSaving: "WordPress theme customization: $300 on Fiverr (with fees) vs $200 on manob.ai (with fees) = 33% savings",
      },
      {
        alternative: "In-house team",
        methodology: "Full-time salary + benefits + overhead vs project-based manob.ai cost for equivalent output",
        exampleSaving: "Full-time developer ($80K/yr) vs manob.ai for equivalent project work ($25K/yr) = 69% savings for SMBs with project-based needs",
      },
    ],
    personalizedCalculator: "Input your project requirements and see estimated cost on manob.ai vs alternatives, based on actual marketplace data",
    implementation: "Phase 2 — static comparisons. Phase 3 — personalized calculator with real marketplace data.",
  },
} as const;

// ============================================================================
// PLATFORM ANALYTICS DASHBOARD — INTERNAL TEAM METRICS
// ============================================================================

export const PLATFORM_ANALYTICS_DASHBOARD = {
  description: "Internal analytics dashboard for the manob.ai founding/operations team. Not visible to sellers or buyers.",

  gmvTracking: {
    views: ["Daily", "Weekly", "Monthly", "Quarterly", "Annual"],
    metrics: [
      "Total GMV (gross merchandise value of all transactions)",
      "Net revenue (GMV x blended take rate - payment processing costs)",
      "GMV growth rate (week-over-week, month-over-month, year-over-year)",
      "GMV by category (products vs services vs jobs)",
      "GMV by geography (buyer country, seller country)",
      "Average transaction value (ATV) with trend",
      "Transaction count with trend",
    ],
    alerts: [
      "GMV drops >20% week-over-week — investigate immediately",
      "GMV exceeds monthly projection by >30% — allocate support resources",
    ],
  },

  liquidityMetrics: {
    description: "Core marketplace health metrics indicating supply-demand balance",
    metrics: [
      {
        name: "Time-to-First-Match",
        definition: "Median time from buyer posting a need to receiving first seller response",
        target: "<24 hours",
        alert: ">48 hours indicates supply shortage in category",
      },
      {
        name: "Order Fill Rate",
        definition: "Percentage of buyer inquiries/requests that result in a completed order",
        target: ">30% (early stage), >50% (mature)",
        alert: "<20% indicates pricing mismatch or quality gap",
      },
      {
        name: "Search-to-Purchase Conversion",
        definition: "Percentage of search sessions that result in a purchase within 7 days",
        target: ">5% (early stage), >10% (mature)",
        alert: "<3% indicates search relevance issues or supply gaps",
      },
      {
        name: "Listing-to-First-Sale Time",
        definition: "Median time from seller listing going live to first sale",
        target: "<30 days",
        alert: ">45 days indicates discoverability or demand problem",
      },
      {
        name: "Supply-Demand Ratio",
        definition: "Number of active sellers per active buyer in each category",
        target: "3:1 to 10:1 (varies by category)",
        alert: ">20:1 indicates oversupply, <2:1 indicates undersupply",
      },
    ],
  },

  cohortAnalysis: {
    description: "Retention and revenue analysis by signup cohort (month of registration)",
    views: [
      {
        name: "Seller Retention Cohorts",
        definition: "Percentage of sellers from each signup month still active (transaction in last 30 days)",
        granularity: "Monthly cohorts, tracked for 24 months",
        visualization: "Retention curve chart + cohort heat map table",
      },
      {
        name: "Buyer Retention Cohorts",
        definition: "Percentage of buyers from each signup month who made a purchase in last 30 days",
        granularity: "Monthly cohorts, tracked for 24 months",
        visualization: "Retention curve chart + cohort heat map table",
      },
      {
        name: "Revenue Per Cohort",
        definition: "Total net revenue generated by each signup cohort over time",
        granularity: "Monthly cohorts",
        visualization: "Stacked area chart showing revenue contribution by cohort",
      },
      {
        name: "Cohort LTV Tracking",
        definition: "Actual cumulative LTV per cohort vs projected LTV from model",
        purpose: "Validate or adjust LTV projections in UNIT_ECONOMICS based on real data",
      },
    ],
  },

  unitEconomicsRealtime: {
    description: "Real-time unit economics dashboard to monitor business model health",
    metrics: [
      {
        name: "Blended Take Rate",
        definition: "Total net revenue / total GMV",
        target: "22-25% blended (products + services + jobs)",
        display: "Current value, 30-day trend, comparison to plan",
      },
      {
        name: "CAC by Channel",
        definition: "Customer acquisition cost broken down by channel",
        channels: ["Organic search/SEO", "Paid ads (Google, Facebook)", "Referral program", "Content marketing", "Social media", "Partnerships"],
        target: "Blended CAC <$75 for sellers, <$100 for buyers",
      },
      {
        name: "LTV by Segment",
        definition: "Lifetime value segmented by user type and behavior",
        segments: ["Product sellers", "Service sellers", "Hybrid sellers", "One-time buyers", "Repeat buyers", "Enterprise/agency buyers"],
        display: "Current actual LTV vs projected LTV with variance analysis",
      },
      {
        name: "Contribution Margin",
        definition: "Net revenue - variable costs (payment processing, fraud reserve, refunds) per transaction",
        target: ">70% contribution margin on services, >75% on products",
      },
      {
        name: "Payback Period",
        definition: "Months to recover CAC from user revenue",
        target: "<6 months for sellers, <9 months for buyers",
      },
    ],
  },

  healthMetrics: {
    description: "Operational health indicators for platform quality and trust",
    metrics: [
      {
        name: "Dispute Rate",
        definition: "Percentage of completed orders that result in a dispute",
        target: "<3%",
        alert: ">5% triggers quality review of flagged categories",
      },
      {
        name: "Refund Rate",
        definition: "Percentage of orders resulting in full or partial refund",
        target: "<5% for products, <8% for services",
        alert: ">10% in any category triggers seller quality audit",
      },
      {
        name: "Seller Response Time",
        definition: "Median time for sellers to respond to buyer messages/inquiries",
        target: "<4 hours during business hours",
        alert: ">12 hours median indicates seller engagement problem",
      },
      {
        name: "Buyer Satisfaction (NPS)",
        definition: "Net Promoter Score from post-purchase surveys",
        target: ">40 NPS",
        surveyTiming: "Sent 7 days after order completion",
        alert: "<20 NPS triggers root cause analysis",
      },
      {
        name: "Seller Satisfaction (NPS)",
        definition: "Net Promoter Score from quarterly seller surveys",
        target: ">50 NPS",
        alert: "<30 NPS triggers seller experience improvement sprint",
      },
      {
        name: "Platform Uptime",
        definition: "Percentage of time platform is fully operational",
        target: "99.9% uptime (8.7 hours max downtime per year)",
      },
    ],
  },

  anomalyDetection: {
    description: "Automated alerts for unusual patterns indicating fraud, system issues, or churn",
    alerts: [
      {
        type: "Fraud Detection",
        triggers: [
          "Same buyer purchasing from same seller >5 times in 24 hours (potential fake review farming)",
          "New seller with >$5K GMV in first 48 hours (potential stolen payment method)",
          "Multiple accounts from same IP with cross-purchasing (self-dealing)",
          "Sudden spike in refund requests from a single seller's buyers",
          "Unusual geographic pattern (all buyers from same city for a niche global product)",
        ],
        responseProtocol: "Auto-flag for manual review. Freeze suspicious transactions. 24-hour investigation SLA.",
      },
      {
        type: "Churn Spike Detection",
        triggers: [
          "Seller deactivation rate exceeds 2x normal weekly rate",
          "Buyer registration-to-first-purchase conversion drops >30% week-over-week",
          "Active user count drops >15% in any 7-day period",
        ],
        responseProtocol: "Trigger root cause analysis. Survey churned users. Emergency product review if systemic.",
      },
      {
        type: "Payment Failure Monitoring",
        triggers: [
          "Payment failure rate exceeds 5% (normal baseline: 2-3%)",
          "Stripe webhook delivery failures",
          "Payout processing delays >24 hours",
          "bKash/Nagad API timeout rate exceeds 3%",
        ],
        responseProtocol: "Immediate engineering escalation. Notify affected users. Switch to backup payment processor if available.",
      },
    ],
  },

  abTestDashboard: {
    description: "Dashboard for tracking active A/B tests and their impact on key metrics",
    activeTestTypes: [
      {
        category: "Pricing Experiments",
        examples: ["Commission rate variations by category", "Buyer fee threshold testing", "Subscription plan pricing"],
        primaryMetric: "Revenue per user",
        secondaryMetrics: ["Conversion rate", "Churn rate", "NPS"],
      },
      {
        category: "Feature Rollouts",
        examples: ["New search algorithm", "AI recommendation engine", "Updated seller dashboard"],
        primaryMetric: "User engagement (DAU/MAU ratio)",
        secondaryMetrics: ["Task completion rate", "Support ticket volume", "Feature adoption rate"],
      },
      {
        category: "Onboarding Experiments",
        examples: ["Simplified seller wizard", "Guided buyer journey", "Video vs text tutorials"],
        primaryMetric: "Activation rate (first sale within 30 days for sellers, first purchase for buyers)",
        secondaryMetrics: ["Time to first action", "Drop-off at each onboarding step"],
      },
      {
        category: "Marketing Experiments",
        examples: ["Landing page variants", "Email subject lines", "Ad creative testing"],
        primaryMetric: "CAC (cost per acquisition)",
        secondaryMetrics: ["CTR", "Conversion rate", "Quality of acquired users (30-day retention)"],
      },
    ],
    statisticalRigor: {
      minimumSampleSize: 1_000,
      confidenceLevel: 0.95,
      minimumTestDuration: 14,
      guardrailMetrics: "Tests auto-pause if NPS drops >10 points or churn increases >2x in test group",
    },
  },

  dataInfrastructure: {
    description: "End-to-end data infrastructure powering analytics, ML, and real-time dashboards",

    eventTracking: {
      tool: "Segment (or equivalent CDP)",
      scope: "Client-side (browser + mobile) and server-side (API events, payment webhooks) event collection",
      keyEvents: ["page_view", "search_query", "product_view", "add_to_cart", "purchase", "seller_listing_created", "review_submitted", "payout_requested"],
    },

    dataWarehouse: {
      primary: "PostgreSQL — transactional data, user profiles, orders (Phase 1)",
      analytics: "ClickHouse or BigQuery for analytical queries — event aggregation, funnel analysis, cohort queries (Phase 2)",
      rationale: "PostgreSQL handles OLTP workloads at launch scale. Migrate heavy analytics to columnar store when query volume exceeds PostgreSQL capacity.",
    },

    etlPipeline: {
      phase1: "Manual SQL scripts and views for core reporting (sufficient for <10K daily events)",
      phase2: "dbt for data transformations (staging, marts, metrics layer) + Airflow for orchestration and scheduling",
      refreshCadence: "Phase 1: daily batch. Phase 2: hourly incremental for key metrics, daily full refresh for aggregates.",
    },

    dataModeling: {
      schema: "Star schema",
      factTables: ["fact_transactions (orders, payments, refunds)", "fact_events (page views, searches, clicks)", "fact_sessions (user sessions with duration, pages, actions)"],
      dimensionTables: ["dim_users (buyers, sellers, type, signup date, geography)", "dim_products (category, price, seller, listing date)", "dim_categories (hierarchy, parent category, status)", "dim_geographies (country, city, region, timezone)"],
    },

    realTime: {
      counters: "Redis for real-time counters: live GMV today, active users now, orders in last hour",
      liveDashboard: "WebSocket connection for live internal dashboard — updates every 5 seconds",
      useCase: "Homepage 'X orders completed this week' counter, internal ops monitoring",
    },

    mlPipeline: {
      featureStore: "Feature store for recommendation engine inputs (user browsing history, purchase patterns, seller attributes)",
      modelServing: "ML models served via REST API (product recommendations, search ranking, fraud scoring)",
      abTestFramework: "Feature flag system (LaunchDarkly or custom) for ML model A/B testing with automatic rollback",
      phase: "Phase 3 (Month 18+) — after sufficient training data accumulated",
    },

    dataGovernance: {
      piiEncryption: "PII fields (name, email, phone, payment details) encrypted at rest using AES-256",
      deletionPipeline: "GDPR/CCPA deletion pipeline: user data purged within 30 days of request across all stores (PostgreSQL, analytics, backups)",
      retentionPolicy: "Raw events retained 2 years, aggregated metrics retained indefinitely, user PII purged 90 days after account deletion",
      accessControl: "Role-based access: engineering (full), product (aggregated), marketing (anonymized), support (per-user lookup with audit log)",
    },

    phaseRollout: [
      "Phase 1 (Launch): PostgreSQL + Segment + Metabase for dashboards — sufficient for 0-10K users",
      "Phase 2 (Month 6-12): + ClickHouse/BigQuery + dbt + Airflow — needed at 10K-100K users",
      "Phase 3 (Month 12-24): + ML pipeline + real-time feature store + advanced A/B testing — needed at 100K+ users",
    ],
  },
} as const;

// ============================================================================
// CONTENT MARKETING STRATEGY — SEO, SOCIAL, COMMUNITY
// ============================================================================

export const CONTENT_MARKETING_STRATEGY = {
  seoContentPillars: {
    description: "Core SEO topics that drive organic traffic to manob.ai",
    pillars: [
      {
        pillar: "Hire Bangladeshi Developers",
        targetKeywords: ["hire Bangladeshi developers", "Bangladesh web developers", "hire BD freelancers", "Bangladeshi software engineers", "outsource development Bangladesh", "Bangladesh IT outsourcing"],
        contentTypes: ["Landing pages", "Blog posts", "Case studies"],
        estimatedMonthlySearchVolume: 15_000,
        competitionLevel: "Low-Medium",
        contentPlan: "10 blog posts in first 3 months covering BD developer talent, cost comparisons, success stories",
      },
      {
        pillar: "Buy Digital Products Bangladesh",
        targetKeywords: ["buy digital products Bangladesh", "WordPress themes Bangladesh", "React templates Bangladesh", "digital marketplace Bangladesh", "buy website templates online"],
        contentTypes: ["Product category pages", "Comparison guides", "Buyer guides"],
        estimatedMonthlySearchVolume: 8_000,
        competitionLevel: "Low",
        contentPlan: "Category landing pages + 'Best WordPress themes for [use case]' style articles",
      },
      {
        pillar: "AI-Powered Marketplace",
        targetKeywords: ["AI marketplace", "AI website builder", "AI-powered freelancing platform", "vibe coding platform", "AI starter kits", "build website with AI"],
        contentTypes: ["Feature pages", "Tutorial videos", "Product demos"],
        estimatedMonthlySearchVolume: 25_000,
        competitionLevel: "Medium-High",
        contentPlan: "AI Website Builder demo content, comparison with traditional website builders, tutorial series",
      },
      {
        pillar: "Freelancing Guides and Tutorials",
        targetKeywords: ["how to start freelancing", "freelancing tips for beginners", "sell digital products online", "pricing freelance services", "build freelancer portfolio"],
        contentTypes: ["Blog series", "Video tutorials", "Email courses"],
        estimatedMonthlySearchVolume: 120_000,
        competitionLevel: "High",
        contentPlan: "Educational content targeting new freelancers — positions manob.ai as platform of choice",
      },
    ],
  },

  contentCalendar: {
    description: "Monthly content production plan across all channels",
    weeklyOutputTargets: {
      blogPosts: 2,
      caseStudiesPerMonth: 1,
      sellerSuccessStoriesPerMonth: 2,
      buyerGuidesPerMonth: 1,
      videoTutorials: 1,
      socialMediaPosts: 14,
    },
    contentTypes: [
      {
        type: "Blog Posts",
        frequency: "2 per week",
        topics: ["SEO-driven articles targeting content pillars", "Platform feature announcements and tutorials", "Industry trends and insights", "Developer tips and best practices"],
        distributionChannels: ["manob.ai/blog", "Dev.to", "Medium", "Hashnode"],
      },
      {
        type: "Case Studies",
        frequency: "1 per month",
        format: "Problem then Solution then Results with real metrics",
        topics: ["How [Seller] went from 0 to $5K/month on manob.ai", "How [Buyer] saved 60% on development costs using manob.ai", "How [Agency] scaled their team with manob.ai freelancers"],
      },
      {
        type: "Seller Success Stories",
        frequency: "2 per month",
        format: "Short-form interview with seller photo, earnings highlight, and tips",
        distributionChannels: ["Blog", "Social media", "Email newsletter", "Seller community"],
      },
      {
        type: "Buyer Guides",
        frequency: "1 per month",
        topics: ["How to hire the right developer on manob.ai", "Product vs service: which is right for your project?", "Understanding pricing on manob.ai", "How to write a great project brief"],
      },
    ],
  },

  socialMediaStrategy: {
    platforms: [
      {
        platform: "LinkedIn",
        primaryAudience: "B2B buyers, agency owners, tech leaders, enterprise decision-makers",
        contentMix: ["Thought leadership posts from founder (3x/week)", "Case studies and ROI-focused content", "Industry insights and market data", "Seller success stories (professional angle)"],
        postingFrequency: "5x per week",
        kpis: ["Follower growth", "Engagement rate (target >3%)", "Website clicks", "InMail response rate"],
        paidStrategy: "LinkedIn Ads targeting CTOs, VP Engineering, and agency owners in US/UK/EU — $2K/month budget",
      },
      {
        platform: "Facebook",
        primaryAudience: "Bangladesh domestic market, BD diaspora communities, South Asian freelancers",
        contentMix: ["Bangla-language tips and tutorials", "Seller success stories (aspirational, relatable)", "Platform feature demos (video format preferred)", "Community engagement: polls, questions, discussions", "Cultural event tie-ins (Eid, Pohela Boishakh, Ekushey)"],
        postingFrequency: "Daily (1-2 posts)",
        kpis: ["Group membership growth", "Post engagement (target >5%)", "Click-through to platform", "Shares"],
        communityGroups: ["Create 'manob.ai Sellers Bangladesh' official group", "Create 'manob.ai Buyers and Freelancing Tips' group", "Engage in existing groups: BD Freelancers, WordPress Bangladesh, React Bangladesh"],
        paidStrategy: "Facebook/Meta Ads targeting BD freelancers and diaspora communities — $1K/month budget",
      },
      {
        platform: "Twitter/X",
        primaryAudience: "Global tech community, developers, indie hackers, startup founders",
        contentMix: ["Build-in-public updates from founder", "Developer tips and code snippets", "Platform milestone celebrations", "Engagement with tech Twitter conversations", "Thread-style educational content"],
        postingFrequency: "2-3x per day",
        kpis: ["Follower growth", "Impressions", "Link clicks", "Engagement rate"],
        paidStrategy: "Minimal — focus on organic growth through build-in-public narrative",
      },
      {
        platform: "YouTube",
        primaryAudience: "Developers learning new skills, buyers evaluating platforms, freelancers seeking guidance",
        contentMix: ["Platform tutorial videos (how to create a seller account, list a product, etc.)", "AI Website Builder demos and walkthroughs", "Seller success story interviews (video format)", "Category-specific guides", "Comparison videos ('manob.ai vs Fiverr vs Upwork — honest comparison')"],
        postingFrequency: "1 video per week",
        kpis: ["Subscriber growth", "Watch time", "Click-through rate to platform", "Video completion rate"],
        paidStrategy: "YouTube Ads (pre-roll) targeting 'freelancing' and 'web development' audiences — $500/month budget",
      },
    ],
  },

  communityBuilding: {
    sellerCommunity: {
      platform: "Discord",
      purpose: "Peer support, networking, platform feedback, early access to features",
      channels: ["#announcements — platform updates and new features", "#general — open discussion", "#product-sellers — digital product marketplace discussions", "#service-sellers — service marketplace discussions", "#pricing-advice — help with pricing strategies", "#marketing-tips — how to promote your listings", "#feature-requests — direct feedback to product team", "#success-stories — celebrate wins"],
      moderationPlan: "1 community manager (part-time) + volunteer moderators from top sellers",
      growthTarget: "500 members by Month 6, 2,000 by Month 12",
    },
    webinars: {
      frequency: "Monthly",
      format: "45-minute live session + 15-minute Q&A",
      topics: ["How to optimize your seller profile for more sales", "Pricing strategies that maximize revenue", "Using AI features to create better listings", "Tax and legal basics for freelancers", "Platform roadmap preview and feedback session"],
      expectedAttendance: "50-100 attendees per webinar",
      recording: "All webinars recorded and posted to YouTube channel",
    },
    sellerSpotlight: {
      frequency: "Bi-weekly",
      format: "Featured seller profile on homepage + social media feature + blog post",
      selectionCriteria: "Top-rated sellers, interesting stories, diverse backgrounds, different categories",
      benefits: "Increased visibility, social proof, community recognition, potential for viral sharing",
    },
  },

  influencerPartnerships: {
    strategy: "Partner with Bangladeshi tech content creators and freelancing community leaders for authentic promotion",
    tiers: [
      {
        tier: "Micro-influencers (5K-50K followers)",
        count: "10-15 partnerships in Year 1",
        compensation: "Free premium account + $100-300 per sponsored post",
        expectedReach: "50K-200K impressions per campaign",
        examples: ["Bangladeshi tech YouTubers covering web development tutorials", "Freelancing coaches with Facebook/YouTube audiences", "WordPress/React community leaders with active followings"],
      },
      {
        tier: "Mid-tier influencers (50K-200K followers)",
        count: "3-5 partnerships in Year 1",
        compensation: "$500-1,500 per sponsored video/post + affiliate commission (10% of referred seller first-year revenue)",
        expectedReach: "200K-1M impressions per campaign",
        examples: ["Popular BD tech YouTube channels", "South Asian freelancing coaches", "Developer education content creators"],
      },
      {
        tier: "Community leaders and organizations",
        count: "5-10 partnerships ongoing",
        compensation: "Co-marketing (mutual promotion), event sponsorship, exclusive benefits for their community",
        examples: ["BASIS (Bangladesh Association of Software and IT Services)", "Local coding bootcamp instructors", "University CS department heads", "Freelancing Facebook group admins"],
      },
    ],
    trackingAndROI: "Each influencer gets unique referral code. Track signups, first purchases, and 90-day LTV from each partnership.",
  },

  contentLocalization: {
    primaryLanguage: "English — all content created in English first",
    secondaryLanguage: "Bangla — core content translated/adapted for BD domestic market",
    localizationPriority: [
      { language: "Bangla", timeline: "Month 0 (launch)", scope: "Homepage, seller onboarding, key help articles, social media content" },
      { language: "Hindi", timeline: "Month 12 (India expansion)", scope: "Key landing pages, seller onboarding, popular blog posts" },
      { language: "Urdu", timeline: "Month 14 (Pakistan expansion)", scope: "Key landing pages, seller onboarding" },
    ],
    localizationProcess: "In-house bilingual team for Bangla. Contracted translators for Hindi/Urdu. All localized content reviewed by native speaker.",
    culturalAdaptation: "Not just translation — adapt examples, pricing references, and imagery to local context (e.g., BDT pricing examples for BD market, INR for India)",
  },
} as const;

// ============================================================================
// SUPPORT OPERATIONS PLAN — CUSTOMER SUPPORT SCALING MODEL
// ============================================================================

export const SUPPORT_OPERATIONS_PLAN = {
  tieredSupportModel: {
    description: "Progressive support escalation to maximize efficiency and minimize cost per ticket",
    tiers: [
      {
        tier: "Tier 0 — AI Chatbot",
        description: "Automated AI-powered chatbot handling common queries instantly",
        responseTime: "Instant (< 5 seconds)",
        handledIssues: ["Account setup and profile questions", "How to list a product or service", "Commission and pricing questions", "Order status inquiries", "Password reset and login issues", "Basic troubleshooting (upload failures, payment processing)", "FAQ-style questions about platform policies"],
        expectedDeflectionRate: 0.45,
        technology: "Fine-tuned LLM (GPT-4o or Claude) trained on manob.ai knowledge base + help articles",
        implementation: "Phase 1 — basic FAQ chatbot. Phase 2 — AI agent with order lookup and action capabilities.",
        costPerTicket: 0.10,
      },
      {
        tier: "Tier 1 — Community Forum",
        description: "Community-driven support where experienced sellers/buyers help newcomers",
        responseTime: "< 4 hours (median)",
        handledIssues: ["Best practices and how-to questions", "Pricing advice and market insights", "Technical questions about product types (WordPress, React, etc.)", "Peer feedback on listings before submission", "General platform usage tips"],
        expectedDeflectionRate: 0.15,
        moderationPlan: "Community moderators (top sellers earning MC rewards) + 1 part-time community manager",
        incentives: "Top contributors earn Manob Coins, 'Top Contributor' badge, priority support access",
        costPerTicket: 0.50,
      },
      {
        tier: "Tier 2 — Human Support",
        description: "Dedicated support agents handling issues requiring platform access and judgment",
        responseTime: "< 12 hours (target: < 6 hours during business hours)",
        handledIssues: ["Payment processing issues and failed transactions", "Order disputes between buyer and seller", "Account verification and identity issues", "Seller onboarding problems requiring manual review", "Bug reports requiring investigation", "Refund requests within policy", "Listing rejection appeals (first level)"],
        staffing: {
          model: "1 support agent per 500 active users",
          phase1: "2 agents (covering up to 1,000 active users)",
          phase2: "5 agents (covering up to 2,500 active users)",
          phase3: "10 agents (covering up to 5,000 active users)",
          scaling: "Add 1 agent for every 500 incremental active users",
          location: "Bangladesh-based (cost advantage: $400-600/month per agent vs $3,000-4,000/month US-based)",
        },
        costPerTicket: 2.00,
      },
      {
        tier: "Tier 3 — Escalation",
        description: "Senior team / founder-level handling of critical or sensitive issues",
        responseTime: "< 24 hours",
        handledIssues: ["Legal complaints and DMCA takedown notices", "Fraud investigation and account suspension appeals", "High-value dispute resolution (orders > $1,000)", "Partnership and business development inquiries", "Press and media inquiries", "Regulatory compliance issues", "Repeated seller/buyer violations requiring permanent action"],
        staffing: "Founder + 1 senior operations person (Phase 1). Dedicated Trust & Safety team (Phase 3).",
        costPerTicket: 8.00,
      },
    ],
  },

  responseTimeSLAs: {
    tier0_aiChatbot: { target: "Instant (< 5 seconds)", measurement: "Automated — system response time" },
    tier1_communityForum: { target: "< 4 hours", measurement: "Time to first community response" },
    tier2_humanSupport: { target: "< 12 hours (first response), < 48 hours (resolution)", measurement: "Ticket timestamp tracking" },
    tier3_escalation: { target: "< 24 hours (first response), < 5 business days (resolution)", measurement: "Case management system" },
    slaCompliance: "Target 90% of tickets resolved within SLA. Monthly SLA compliance report to founding team.",
  },

  commonIssuePlaybooks: {
    paymentDisputes: {
      triggerEvent: "Buyer or seller reports payment issue",
      steps: ["1. Verify transaction in Stripe/bKash/Nagad dashboard (within 2 hours)", "2. Check for payment processing errors vs user error", "3. If processing error: initiate refund/retry within 24 hours", "4. If dispute between parties: open dispute case (see disputeResolution)", "5. Communicate resolution to both parties via in-app message + email"],
      averageResolutionTime: "24-48 hours",
    },
    deliveryDelays: {
      triggerEvent: "Order past delivery deadline without delivery",
      steps: ["1. Auto-notify seller at 80% of delivery time elapsed", "2. At deadline: send warning to seller, notification to buyer", "3. If 48 hours past deadline: buyer offered option to cancel for full refund or extend deadline", "4. If seller requests extension: buyer approves/rejects", "5. Repeated late deliveries (3+ in 30 days): seller flagged for performance review"],
      averageResolutionTime: "24-72 hours",
    },
    qualityComplaints: {
      triggerEvent: "Buyer reports delivered work does not meet description/requirements",
      steps: ["1. Review order requirements vs delivered work (within 24 hours)", "2. If clear mismatch: offer seller chance to revise (within revision limits)", "3. If seller refuses revision or revision still inadequate: escalate to Tier 3", "4. Tier 3 evaluates evidence and issues partial/full refund or sides with seller", "5. Pattern of quality complaints (3+ in 30 days): seller account review and possible badge demotion"],
      averageResolutionTime: "3-5 business days",
    },
    accountIssues: {
      triggerEvent: "Login problems, account suspension, verification failures",
      steps: ["1. Verify identity through email confirmation + ID check (if required)", "2. For login issues: password reset, 2FA reset, session clearing", "3. For suspension: review violation reason, provide evidence to user", "4. For suspension appeal: escalate to Tier 3 with full case history", "5. Resolve within SLA or provide clear timeline for resolution"],
      averageResolutionTime: "12-24 hours",
    },
  },

  disputeResolutionProcess: {
    timeline: {
      acknowledge: "24 hours — acknowledge dispute and notify both parties",
      investigate: "72 hours — review evidence from both parties (messages, deliverables, order terms)",
      mediate: "Day 3-4 — propose resolution to both parties, attempt mutual agreement",
      resolve: "5 business days — if no agreement, platform makes binding decision based on evidence",
    },
    resolutionOutcomes: ["Full refund to buyer (seller clearly failed to deliver)", "Partial refund (work partially completed or partially satisfactory)", "No refund (seller delivered as agreed, buyer complaint unjustified)", "Re-delivery (seller given additional time to fix issues)"],
    escalationCriteria: ["Order value > $1,000", "Either party threatens legal action", "Allegations of fraud or identity theft", "Repeat disputes involving same seller or buyer (3+ in 90 days)"],
    disputeCap: "If either party has >5 disputes in 90 days, account flagged for review. >10 disputes: temporary suspension pending investigation.",
  },

  selfServiceTools: {
    comprehensiveFAQ: {
      categories: ["Account & Profile", "Selling", "Buying", "Payments", "Orders & Delivery", "Disputes", "Policies"],
      articleCount: "100+ articles at launch, growing to 300+ by Month 12",
      format: "Searchable knowledge base with step-by-step guides and screenshots",
      updateFrequency: "Weekly — add new articles based on common support tickets",
    },
    videoTutorials: {
      topics: ["Setting up your seller account (5 min)", "Creating your first product listing (8 min)", "Creating your first service gig (7 min)", "How to withdraw earnings (4 min)", "Understanding commissions and fees (6 min)", "Using the AI Website Builder (10 min)", "How to handle order disputes (5 min)"],
      hostingPlatform: "YouTube (SEO benefit) + embedded on help pages",
      format: "Screen recording with voiceover (English and Bangla versions)",
    },
    sellerBuyerKnowledgeBase: {
      sellerHub: "Dedicated 'Seller Hub' with guides on optimizing listings, pricing strategies, handling orders, and growing revenue",
      buyerHub: "Dedicated 'Buyer Hub' with guides on finding the right seller, project brief templates, and getting the best results",
      implementation: "Phase 1 — basic help center. Phase 2 — interactive guides with in-app tooltips.",
    },
  },

  supportMetrics: {
    tracked: [
      { metric: "First Response Time (FRT)", target: "< 4 hours blended across all tiers", measurement: "Median time from ticket creation to first human/AI response" },
      { metric: "Resolution Time", target: "< 24 hours for 80% of tickets", measurement: "Median time from ticket creation to resolution" },
      { metric: "Customer Satisfaction (CSAT)", target: "> 85%", measurement: "Post-resolution survey (1-5 scale)" },
      { metric: "Ticket Deflection Rate", target: "> 45%", measurement: "Percentage of issues resolved by Tier 0 AI chatbot without human intervention" },
      { metric: "First Contact Resolution (FCR)", target: "> 70%", measurement: "Percentage of tickets resolved in first response without follow-up" },
      { metric: "Tickets Per Active User", target: "< 0.3 per month", measurement: "Total monthly tickets / active users" },
      { metric: "Escalation Rate", target: "< 10% of human-handled tickets escalated to Tier 3", measurement: "Tier 3 tickets / (Tier 2 + Tier 3) tickets" },
    ],
    costPerTicket: {
      target: 2.50,
      breakdown: "Weighted average: 45% x $0.10 (Tier 0) + 15% x $0.50 (Tier 1) + 35% x $2.00 (Tier 2) + 5% x $8.00 (Tier 3) = ~$1.22 blended",
      note: "Target <$3 per ticket leveraging Bangladesh labor costs. US-based equivalent would be $8-12 per ticket.",
      industryBenchmark: "Fiverr: ~$4-5/ticket, Upwork: ~$5-7/ticket (estimated). manob.ai targets 40-60% lower via BD-based support + AI deflection.",
    },
    reportingCadence: "Weekly support metrics report to founding team. Monthly deep dive with trend analysis.",
  },
} as const;

// ============================================================================
// PARTNERSHIP STRATEGY — TECHNOLOGY, DISTRIBUTION, STRATEGIC PARTNERS
// ============================================================================

export const PARTNERSHIP_STRATEGY = {
  technologyPartners: {
    description: "Core technology providers that power manob.ai infrastructure and features",
    partners: [
      {
        partner: "Stripe",
        category: "Payments",
        role: "Primary international payment processing — handles credit/debit cards, Connect for seller payouts, Radar for fraud detection",
        integrationStatus: "Phase 1 — core payment infrastructure",
        cost: "2.9% + $0.30 per transaction (standard Stripe pricing)",
        alternative: "PayPal (Phase 2 backup for markets where Stripe is not available)",
      },
      {
        partner: "bKash / Nagad / Rocket",
        category: "Local Payments (Bangladesh)",
        role: "Mobile financial services (MFS) for BD domestic transactions — lower fees than Stripe for local payments",
        integrationStatus: "Phase 1 (bKash at launch, Nagad Month 1-2, Rocket Month 3-4)",
        cost: "1.4-1.8% per transaction",
      },
      {
        partner: "AWS / GCP",
        category: "Cloud Infrastructure",
        role: "Hosting, CDN, object storage (S3/GCS for digital product files), serverless compute, managed databases",
        integrationStatus: "Phase 1",
        cost: "$5,000/month estimated (scaling with GMV). Leverage AWS Activate or GCP Startup Credits.",
        preferredProvider: "AWS (broader BD region availability, S3 for file storage, CloudFront CDN)",
      },
      {
        partner: "OpenAI / Anthropic",
        category: "AI Features",
        role: "Power AI Website Builder (vibe coding), AI product previews, chatbot support, smart search, pricing recommendations",
        integrationStatus: "Phase 1 — GPT-4o for website builder. Phase 2 — Claude for support chatbot and analytics.",
        cost: "$4,000/month estimated (token-based pricing, scales with usage)",
        modelStrategy: "Multi-model approach: GPT-4o for code generation, Claude for customer-facing AI, smaller models for classification/routing",
      },
      {
        partner: "Elasticsearch",
        category: "Search Infrastructure",
        role: "Marketplace search engine — product/service discovery, seller matching, recommendation engine foundation",
        integrationStatus: "Phase 1 — basic search. Phase 2 — ML-powered relevance ranking.",
        cost: "$500-1,000/month (Elastic Cloud)",
      },
      {
        partner: "SendGrid / Mailchimp",
        category: "Email Infrastructure",
        role: "Transactional emails (order confirmations, payout notifications) and marketing emails (newsletters, re-engagement campaigns)",
        integrationStatus: "Phase 1",
        cost: "$200-500/month",
      },
    ],
  },

  distributionPartners: {
    description: "Organizations that help manob.ai acquire sellers and buyers through their existing networks",
    partners: [
      {
        partner: "Bangladesh ICT Division",
        category: "Government",
        role: "Align with Digital Bangladesh / Smart Bangladesh initiatives. Potential for government endorsement, inclusion in skill development programs.",
        benefit: "Credibility, access to government-funded training programs, potential subsidized onboarding for new freelancers",
        approach: "Submit proposal for partnership as 'preferred marketplace for Bangladeshi digital workers'. Attend ICT Division events.",
        timeline: "Month 3-6 (relationship building), Month 6-12 (formal partnership)",
      },
      {
        partner: "BASIS (Bangladesh Association of Software and IT Services)",
        category: "Industry Association",
        role: "Access to 2,000+ software company members. Co-branded events, member benefits, industry credibility.",
        benefit: "Direct access to BD IT companies as both sellers (listing products/services) and buyers (hiring freelancers for overflow work)",
        approach: "Become BASIS member. Sponsor BASIS SoftExpo. Offer special onboarding for BASIS member companies.",
        timeline: "Month 1-3",
      },
      {
        partner: "University Career Offices",
        category: "Education",
        targetUniversities: ["BUET", "DU — CSE/EEE departments", "BRAC University", "North South University", "AIUB", "UIU", "CUET", "SUST"],
        role: "Recruit graduating CS students as sellers. Integrate manob.ai into career services.",
        benefit: "Pipeline of skilled new sellers, brand awareness among tech students",
        approach: "Campus ambassador program, workshops on 'Freelancing as a Career', integration with university job fairs",
        timeline: "Month 2-6 (Dhaka universities), Month 6-12 (expand to other cities)",
      },
      {
        partner: "Coding Bootcamps and Training Centers",
        category: "Education",
        examples: ["Creative IT Institute", "Ostad", "Bohubrihi", "10 Minute School (tech courses)", "CodersTrust Bangladesh"],
        role: "Bootcamp graduates become manob.ai sellers. manob.ai featured as 'where to sell after graduation'.",
        benefit: "Steady pipeline of trained sellers with verified skills",
        approach: "Revenue share on referred seller earnings (2% of first-year GMV) or flat fee per qualified referral",
        timeline: "Month 3-6",
      },
    ],
  },

  contentAndUpskillPartners: {
    description: "Partners that help sellers improve their skills and create better products/services",
    partners: [
      {
        partner: "Coursera / Udemy",
        category: "Seller Upskilling",
        role: "Curated learning paths for manob.ai sellers — 'Recommended courses to increase your earnings'",
        benefit: "Better-skilled sellers create higher-quality listings, charge more, improve marketplace quality",
        approach: "Affiliate partnership — earn commission on course referrals while providing value to sellers",
        implementation: "Phase 2 — 'Learning Hub' section in seller dashboard with curated course recommendations",
      },
      {
        partner: "Figma",
        category: "Design Tool Integration",
        role: "Direct Figma file preview for design products. 'Import from Figma' for service deliverables.",
        benefit: "Reduced friction for design product listings, better buyer preview experience",
        approach: "Figma Community API integration. Explore Figma partnership program.",
        implementation: "Phase 2",
      },
      {
        partner: "Canva",
        category: "Design Tool Integration",
        role: "Canva template marketplace integration. Sellers can list Canva-compatible templates.",
        benefit: "Access to Canva's large user base as potential buyers",
        approach: "Canva Creator program integration. Cross-listing Canva templates on manob.ai.",
        implementation: "Phase 3",
      },
      {
        partner: "GitHub",
        category: "Developer Tool Integration",
        role: "GitHub repo integration for code products. Verified GitHub profile for seller credibility.",
        benefit: "Reduced listing friction for developers. Social proof through GitHub contribution history.",
        approach: "GitHub OAuth for seller verification. GitHub Actions for automated product updates.",
        implementation: "Phase 1 (OAuth) + Phase 2 (repo integration)",
      },
    ],
  },

  strategicPartners: {
    description: "Regulatory and institutional partners critical for compliance and market access",
    partners: [
      {
        partner: "Bangladesh Bank",
        category: "Financial Regulatory",
        role: "Regulatory compliance for payment processing, cross-border transactions, and foreign currency handling",
        requirements: ["Payment Service Provider (PSP) license or partnership with licensed entity", "Anti-Money Laundering (AML) compliance", "Know Your Customer (KYC) procedures for sellers receiving payouts", "Foreign exchange transaction reporting"],
        approach: "Engage legal counsel specializing in BD fintech regulation. Apply for necessary licenses pre-launch.",
        timeline: "Month 0 (must be compliant at launch for BD operations)",
      },
      {
        partner: "BTRC (Bangladesh Telecommunication Regulatory Commission)",
        category: "Telecom Regulatory",
        role: "Compliance for digital platform operations, data privacy, content hosting regulations",
        requirements: ["ISP/IIG licensing (if self-hosting in Bangladesh)", "Content hosting compliance", "Data localization requirements (if applicable)"],
        approach: "Legal review of BTRC regulations. Ensure platform architecture meets requirements.",
        timeline: "Month 0-3",
      },
      {
        partner: "National Board of Revenue (NBR)",
        category: "Tax Authority",
        role: "Tax compliance for marketplace operations — VAT collection, seller income reporting",
        requirements: ["VAT registration for marketplace services", "TDS (Tax Deducted at Source) on seller earnings if required", "Annual tax reporting"],
        approach: "Engage tax advisor for marketplace-specific BD tax obligations.",
        timeline: "Month 0 (must be compliant at launch)",
      },
    ],
  },

  affiliateProgram: {
    description: "Revenue-sharing program to incentivize user referrals from content creators, bloggers, and community leaders",
    sellerReferrals: {
      commission: "10% of referred seller's first-year platform fees (commission earned by manob.ai from the referred seller)",
      payoutSchedule: "Monthly, 30 days after seller's earnings are confirmed",
      trackingWindow: "90-day cookie — referral credited if seller signs up within 90 days of clicking affiliate link",
      minimumPayout: 25,
      example: "If referred seller generates $10,000 GMV in Year 1 at 20% commission ($2,000 to manob.ai), affiliate earns $200 (10% of $2,000)",
    },
    buyerReferrals: {
      commission: "5% of referred buyer's first-year spending (platform fees portion only)",
      payoutSchedule: "Monthly, 30 days after buyer's transactions are confirmed",
      trackingWindow: "30-day cookie",
      minimumPayout: 10,
      example: "If referred buyer spends $2,000 in Year 1 with ~25% blended platform fee ($500 to manob.ai), affiliate earns $25 (5% of $500)",
    },
    affiliateTools: ["Unique referral links with UTM tracking", "Embeddable banners and widgets for blogs/websites", "Real-time referral dashboard showing clicks, signups, and earnings", "Pre-written promotional content (email templates, social media posts)"],
    eligibility: "Open to anyone — no approval required. Affiliates must disclose relationship per FTC guidelines.",
    topAffiliateIncentives: "Top 10 affiliates each quarter get bonus: extra 5% commission for following quarter + featured on manob.ai partner page",
  },

  whiteLabelPotential: {
    description: "Licensing the manob.ai marketplace engine to other verticals — Phase 3+ revenue diversification",
    timeline: "Phase 3+ (Month 18+) — only after core marketplace is proven and stable",
    targetVerticals: ["Bangladeshi craft marketplace (physical goods from BD artisans sold globally)", "BD education marketplace (tutoring, course creation, educational content)", "Regional legal services marketplace", "Healthcare consultation marketplace (telemedicine for BD diaspora)"],
    licensingModel: {
      setup: "$10,000-25,000 one-time setup fee",
      monthly: "$2,000-5,000/month platform licensing fee",
      revenueShare: "2-5% of marketplace GMV processed through the engine",
    },
    prerequisites: ["Core marketplace achieving >$500K monthly GMV", "Platform architecture fully modular and multi-tenant capable", "Dedicated engineering resources for white-label customization", "Legal framework for licensing agreements"],
    risk: "Distraction from core marketplace. Only pursue if core business is healthy and additional revenue needed for Series A positioning.",
  },

  apiEcosystem: {
    description: "Public API and developer ecosystem strategy — enabling third-party integrations and extensions",
    timeline: "Phase 3 (Month 18+) — after core platform is stable and marketplace has traction",

    publicApi: {
      endpoints: ["Product listing (CRUD)", "Order management (read, update status)", "Analytics (read — seller metrics, category stats)", "User profile (read, limited update)"],
      authentication: "API key-based auth with OAuth 2.0 for user-scoped actions",
      rateLimiting: {
        freeTier: "1,000 requests/minute",
        paidTier: "10,000 requests/minute ($49/month or included in premium seller plans)",
      },
    },

    webhooks: {
      events: ["order.created", "order.completed", "order.refunded", "payment.received", "payment.payout_sent", "review.submitted", "review.updated"],
      delivery: "HTTPS POST with HMAC signature verification, automatic retry (3 attempts with exponential backoff)",
    },

    sdks: {
      languages: ["JavaScript/TypeScript (npm package)", "Python (pip package)"],
      features: "Typed API client, webhook signature verification helper, pagination utilities, error handling",
    },

    developerPortal: {
      features: [
        "Interactive API documentation (OpenAPI/Swagger)",
        "Sandbox environment with test data for development and testing",
        "Community forum for developer Q&A and feature requests",
        "Changelog and API versioning (semver, 12-month deprecation policy)",
      ],
    },

    thirdPartyMarketplace: {
      model: "Shopify App Store model — third parties build integrations, manob.ai reviews and lists them",
      revenueShare: "70% to developer / 30% to manob.ai on paid integrations",
      reviewProcess: "Security review + functionality test + UX review (target: 5 business day turnaround)",
      examples: ["Accounting integrations (QuickBooks, Xero)", "Project management (Trello, Asana)", "Communication (Slack, Discord notifications)", "Marketing (Mailchimp, social auto-posting)"],
    },
  },

  paymentPartnerRoadmap: {
    description: "Strategic payment partner relationships with volume-based negotiation targets",

    stripe: {
      status: "Current primary partner",
      currentPricing: "2.9% + $0.30 per transaction (standard)",
      volumeTarget: "$500K+ monthly processed volume",
      negotiatedTarget: "2.5% + $0.25 per transaction (custom enterprise pricing)",
      timeline: "Renegotiate at Month 12-18 when volume threshold is reached",
    },

    paypal: {
      status: "Phase 2 integration",
      role: "Alternative payment method for buyers in markets where Stripe acceptance is lower",
      partnershipTier: "Apply for partnership tier at $1M+ annual volume — reduced fees and dedicated support",
      timeline: "Integration Month 6-8, partnership application Month 12-18",
    },

    wise: {
      status: "Preferred international payout partner",
      currentUse: "Seller payouts to international bank accounts (lower fees than Stripe payouts for non-US sellers)",
      volumeTarget: "1,000+ monthly transfers",
      negotiatedTarget: "0.4% transfer fee (down from standard 0.5-1.0%)",
      timeline: "Volume discount negotiation at Month 6-12",
    },

    payoneer: {
      status: "Alternative payout option",
      role: "Payout partner for markets where Wise is unavailable or less competitive",
      volumeTarget: "$500K+ annual payouts",
      timeline: "Partnership application Month 6-12, integration Month 8-14",
    },

    bkashNagad: {
      status: "Strategic local partners (Bangladesh)",
      role: "Primary payment and payout method for BD domestic transactions",
      partnership: [
        "Co-marketing agreements: manob.ai featured in bKash/Nagad merchant directories",
        "Reduced MDR (Merchant Discount Rate) for manob.ai transactions — target 1.2% (down from 1.4-1.8%)",
        "Joint promotional campaigns: cashback offers for buyers paying via bKash/Nagad",
        "API priority support and dedicated integration manager",
      ],
      timeline: "bKash at launch, Nagad Month 1-2, co-marketing agreements Month 3-6",
    },
  },
} as const;

// ============================================================================
// UNIT ECONOMICS — KEY METRICS
// ============================================================================

export const UNIT_ECONOMICS = {
  /** SERVICE transaction (average $500 service order, regular seller) */
  serviceTransaction: {
    averageOrderValue: 500,
    manobCommission: 100, // 20% of $500
    buyerProcessingFee: 25, // 5% card processing on $500
    paymentProcessingCost: -17.81, // Stripe on $525 (2.9% × $525 + $0.30 = $15.53) + payout $400 (0.57% × $400 = $2.28)
    netRevenue: 107.19, // $100 commission + $25 buyer fee - $17.81 processing
    netMarginOnGMV: 0.2144, // 21.4%
  },

  /** PRODUCT transaction (average $100 product with 5% buyer fee = $5, regular seller) */
  productTransaction: {
    averageOrderValue: 100,
    buyerFee: 5, // 5% processing fee on $100
    netPrice: 95, // $100 - $5
    supportFee: 9.50, // 10% of $95
    productPrice: 85.50, // $95 - $9.50
    manobCommission: 28.50, // 30% of $95
    totalManobRevenue: 33.50, // $5 + $28.50
    sellerGets: 66.50, // 70% of $95
    paymentProcessingCost: -3.72, // Stripe on $105 (2.9% × $105 + $0.30 = $3.345) + payout $66.50 (0.57% × $66.50 = $0.38) = $3.72
    netRevenue: 29.78, // $33.50 - $3.72
    netMarginOnGMV: 0.2978, // 29.8%
  },

  /**
   * LTV/CAC — Year 2 projections assuming marketplace liquidity.
   * Methodology:
   *   Seller LTV = ~7 completed service orders × $84 net revenue each over 24-month cohort lifespan.
   *   Buyer LTV = ~$1,500 total platform spend × ~30% blended take rate over 24-month cohort lifespan.
   *   CAC is a blended 50/50 mix of organic ($30–$40) and paid ($120–$160) acquisition.
   *   Industry benchmarks: mature marketplaces achieve 3:1–8:1 LTV:CAC; early-stage 1.5:1–4:1.
   *   These base-case figures are optimistic (assume 100% retention). See sensitivityAnalysis for moderate/high churn scenarios.
   */
  perSeller: {
    estimatedLifetimeValue: 600,     // ~7 service orders × $84 net over 24 months
    customerAcquisitionCost: 75,     // blended: 50% organic ($30) + 50% paid ($120)
    ltvCacRatio: 8,                  // $600 / $75 = 8:1
  },

  perBuyer: {
    estimatedLifetimeValue: 450,     // ~$1,500 total spend × ~30% blended margin over 24 months
    customerAcquisitionCost: 100,    // blended: 50% organic ($40) + 50% paid ($160)
    ltvCacRatio: 4.5,               // $450 / $100 = 4.5:1
  },

  sensitivityAnalysis: {
    description: "LTV sensitivity to retention rate changes. Base case assumes 24-month cohort lifespan.",
    seller: {
      baseCase: { retention: "100%", ltv: 600, cac: 75, ratio: "8:1", note: "Year 2 optimistic — all acquired sellers remain active 24 months" },
      moderateChurn: { retention: "65%", ltv: 390, cac: 75, ratio: "5.2:1", note: "35% churn over 24 months — realistic for new marketplace" },
      highChurn: { retention: "40%", ltv: 240, cac: 75, ratio: "3.2:1", note: "60% churn — pessimistic scenario, still above 3:1 minimum" },
      industryBenchmark: "Mature marketplaces: 3:1 to 8:1. Early-stage: 1.5:1 to 4:1. Our moderate churn scenario (5.2:1) sits in the upper range of early-stage benchmarks.",
    },
    buyer: {
      baseCase: { retention: "100%", ltv: 450, cac: 100, ratio: "4.5:1", note: "Year 2 optimistic — all acquired buyers remain active 24 months" },
      moderateChurn: { retention: "60%", ltv: 270, cac: 100, ratio: "2.7:1", note: "40% churn over 24 months — realistic for marketplace buyers" },
      highChurn: { retention: "35%", ltv: 158, cac: 100, ratio: "1.6:1", note: "65% churn — pessimistic, barely above 1.5:1 minimum viable" },
      industryBenchmark: "Buyer retention is typically lower than seller retention on marketplaces. Our moderate scenario (2.7:1) is realistic for Year 2.",
    },
    keyInsight: "Even under high-churn pessimistic scenarios, both seller (3.2:1) and buyer (1.6:1) LTV:CAC ratios remain above the 1.5:1 minimum viable threshold. The moderate churn scenario (5.2:1 seller, 2.7:1 buyer) is the recommended planning basis.",
  },

  cohortRetentionModel: {
    description: "Projected cohort retention curves based on marketplace industry benchmarks. To be validated with real data post-launch.",
    methodology: "Retention curves derived from published marketplace benchmarks (Upwork S-1, Fiverr investor presentations, a16z marketplace research). Adjusted for early-stage marketplace with limited liquidity.",

    sellerRetention: {
      month1: 0.70,   // 70% of new sellers are active after 1 month
      month3: 0.50,   // 50% after 3 months (first major drop-off)
      month6: 0.38,   // 38% after 6 months
      month12: 0.28,  // 28% after 12 months (second major drop-off at early bird expiry)
      month18: 0.22,  // 22% — stabilized core of committed sellers
      month24: 0.18,  // 18% — long-term retained sellers
      benchmarks: {
        upwork: "~25% seller retention at 12 months (from S-1 filing cohort data)",
        fiverr: "~30% seller retention at 12 months (higher due to lower friction gig model)",
        manobEstimate: "~28% at 12 months — between Upwork and Fiverr, accounting for early bird incentive retention",
      },
      churnDrivers: [
        "Month 1-3: No buyer traffic → sellers abandon (biggest risk for new marketplace)",
        "Month 6: Sellers who haven't made a sale leave",
        "Month 12: Early bird expiry triggers price-sensitive seller churn (30% of remaining — per churn model)",
        "Month 18+: Remaining sellers are committed; churn rate stabilizes at 2-3%/month",
      ],
    },

    buyerRetention: {
      month1: 0.45,   // 45% of new buyers return after first month
      month3: 0.30,   // 30% after 3 months
      month6: 0.20,   // 20% after 6 months
      month12: 0.12,  // 12% after 12 months
      month18: 0.09,  // 9%
      month24: 0.07,  // 7% — long-term retained buyers
      benchmarks: {
        upwork: "~15% buyer retention at 12 months",
        fiverr: "~10% buyer retention at 12 months (lower due to one-off gig purchases)",
        manobEstimate: "~12% at 12 months — between Upwork (repeat projects) and Fiverr (one-off gigs)",
      },
      churnDrivers: [
        "Month 1: One-time purchasers who found product via SEO but don't return",
        "Month 3: Buyers who tried a service but weren't satisfied with quality/selection",
        "Month 6+: Only buyers with recurring development needs remain active",
      ],
    },

    ltvDerivation: {
      seller: {
        averageOrdersPerActiveMonth: 0.35,  // ~1 order every 3 months
        averageNetRevenuePerOrder: 84,       // Blended service + product
        expectedActiveMonths: 7.1,           // Sum of monthly retention rates over 24 months: 0.70+0.60+0.50+0.45+0.42+0.38+0.34+0.31+0.29+0.28+0.27+0.28+... ≈ 7.1
        derivedLTV: 209,                     // 7.1 months × 0.35 orders/month × $84/order = $209
        statedLTV: 600,
        reconciliation: "Stated LTV of $600 assumes base-case (100% retention for 24 months). Derived LTV of $209 uses the retention curve above. The realistic planning LTV is $209-$400, depending on whether marketplace liquidity improves retention over time.",
        recommendedPlanningLTV: 350,         // Midpoint of derived ($209) and optimistic ($600), weighted toward derived
      },
      buyer: {
        averagePurchasesPerActiveMonth: 0.5, // ~1 purchase every 2 months
        averageNetRevenuePerPurchase: 30,    // Blended product-heavy
        expectedActiveMonths: 3.8,           // Sum of linearly interpolated monthly retention rates over 24 months ≈ 3.8 (M1:0.45, M2:0.38, M3:0.30, ..., M12:0.12, ..., M24:0.07)
        derivedLTV: 57,                      // 3.8 months × 0.5 purchases/month × $30/purchase = $57
        statedLTV: 450,
        reconciliation: "Stated LTV of $450 assumes base-case (100% retention). Derived LTV of $57 uses the retention curve with linear interpolation between checkpoints. The gap highlights the importance of improving buyer retention through better search, recommendations, and reactivation campaigns. Previous estimate of 4.8 active months overstated the retention curve integral.",
        recommendedPlanningLTV: 120,         // Conservative estimate accounting for some retention improvement (midpoint of $57 derived and $450 optimistic, heavily weighted toward derived)
      },
    },

    revisedLTVCAC: {
      description: "LTV:CAC ratios using retention-curve-derived LTV (recommended planning basis)",
      seller: { ltv: 350, cac: 75, ratio: "4.7:1", assessment: "Healthy — above 3:1 minimum, within early-stage benchmark range" },
      buyer: { ltv: 120, cac: 100, ratio: "1.2:1", assessment: "Below floor — requires urgent retention improvement. Target: 2.0:1+ by Year 2 through better marketplace liquidity and retention playbook" },
      keyInsight: "The cohort-adjusted LTV:CAC ratios are significantly lower than the base-case projections. Seller economics (4.7:1) are healthy. Buyer economics (1.2:1) are below the 1.5:1 minimum viable threshold and represent the primary unit economics risk. Improving buyer retention from 12% to 20% at 12 months is critical to achieving a viable buyer LTV:CAC of 2.0:1+.",
    },

    buyerRetentionPlaybook: {
      description: "Concrete mechanisms to improve buyer 12-month retention from 12% to 20%, increasing LTV:CAC from 1.2:1 to 1.5-2.0:1",
      target: { currentRetentionM12: 0.12, targetRetentionM12: 0.20, targetLTVCAC: "2.5:1", timeline: "Achieve by end of Year 2" },
      mechanisms: {
        reactivationCampaigns: {
          description: "Automated email sequences triggered when buyers go inactive for 14+ days",
          triggers: ["14 days since last visit", "30 days since last purchase", "Product update from a seller they previously bought from"],
          expectedImpact: "Recover 10-15% of churning buyers, adding ~2% to M12 retention",
          implementation: "Month 3 — email automation via SendGrid/Mailchimp integration",
          cost: "$200/month for email service",
        },
        recommendationEngine: {
          description: "Personalized product/service recommendations based on purchase history and browsing behavior",
          expectedImpact: "Increase repeat purchase rate by 20-30%, adding ~3% to M12 retention",
          implementation: "Month 12 — Elasticsearch-based collaborative filtering",
          cost: "Engineering time only (built on existing Elasticsearch infrastructure)",
        },
        loyaltyProgram: {
          description: "Manob Coins cashback on repeat purchases. 2% cashback in Manob Coins on 2nd purchase, 3% on 3rd+",
          expectedImpact: "Incentivize 2nd and 3rd purchases, adding ~2% to M12 retention",
          implementation: "Month 6 — leverages existing Manob Wallet infrastructure",
          cost: "Variable — 2-3% of repeat purchase GMV in Manob Coins (effectively a marketing cost)",
        },
        savedCollections: {
          description: "Allow buyers to save products/sellers to collections and get notified of updates and new listings",
          expectedImpact: "Create habitual check-ins, adding ~1% to M12 retention",
          implementation: "Month 4 — lightweight feature build",
          cost: "Engineering time only",
        },
      },
      projectedRetentionCurve: {
        month1: 0.50,  // Up from 0.45 with improved onboarding
        month3: 0.35,  // Up from 0.30 with reactivation campaigns
        month6: 0.26,  // Up from 0.20 with recommendations + loyalty
        month12: 0.20, // Up from 0.12 — target achieved
        month24: 0.14, // Up from 0.07 — compounding retention improvements
      },
      revisedBuyerLTV: {
        expectedActiveMonths: 5.7,  // Up from 3.8 baseline (with playbook improving retention at each checkpoint)
        derivedLTV: 86,             // 5.7 x 0.5 x $30
        withRetentionPlaybook: 150, // Accounting for higher spend from loyal buyers ($35 avg vs $30)
        revisedLTVCAC: "1.5:1 to 2.0:1 depending on playbook execution",
      },
    },

    postLaunchTracking: {
      description: "Metrics to track from Day 1 to validate or adjust these projections",
      weeklyMetrics: [
        "New seller signups → active listings conversion rate",
        "New buyer signups → first purchase conversion rate",
        "Repeat purchase rate (buyers who make 2+ purchases)",
      ],
      monthlyMetrics: [
        "Cohort retention by signup month (sellers and buyers separately)",
        "Average orders per active seller per month",
        "Average spend per active buyer per month",
        "CAC by channel (organic, paid, referral)",
      ],
      quarterlyReview: "Update LTV:CAC models with real cohort data. Adjust acquisition spend based on actual payback periods.",
    },
  },

  /** Variable costs deducted per transaction (not included in fixed cost base) */
  variableCostsPerTransaction: {
    service: {
      paymentProcessing: 17.81,      // Stripe 2.9% + $0.30 on $525 + payout 0.57% on $400
      fraudChargebackReserve: 5.00,  // 1% of $500 GMV reserved
      refundReserve: 7.50,           // ~1.5% of $500 GMV (industry avg for services)
      totalVariable: 30.31,
    },
    product: {
      paymentProcessing: 3.72,       // Stripe 2.9% + $0.30 on $105 + payout 0.57% on $66.50
      fraudChargebackReserve: 1.00,  // 1% of $100 GMV
      refundReserve: 1.50,           // 1.5% of $100 GMV
      totalVariable: 6.22,
    },
  },

  breakEvenAnalysis: {
    monthlyFixedCosts: 41_000,
    costBreakdown: {
      cloudInfrastructure: 5_000,    // AWS/GCP, CDN, storage
      aiAPICosts: 4_000,             // GPT-4o, Claude Sonnet, etc.
      engineeringTeam: 15_000,       // 3 engineers (Bangladesh-based)
      customerSupport: 5_000,        // Dispute resolution, approvals
      legalCompliance: 2_000,        // DMCA, AML, tax obligations
      marketingCAC: 5_000,           // Paid + content marketing
      paymentInfrastructure: 1_000,  // Stripe fixed, banking
      officeAndMisc: 1_000,          // Office, tools, SaaS subscriptions
      taxVATCompliance: 1_500,       // Tax collection, reporting, remittance across jurisdictions
      insuranceAndContingency: 1_500, // E&O insurance, cyber liability, reserve fund
    },

    /** Optimistic scenario (avg $500 service, $100 product) */
    optimisticScenario: {
      averageServiceOrderValue: 500,
      averageProductOrderValue: 100,
      netRevenuePerServiceOrder: 107, // $100 commission + $25 buyer fee - $17.81 processing
      netRevenuePerProductSale: 30,   // $33.50 gross - $3.72 processing (rounded)
      serviceOrdersToBreakEven: 383,  // $41,000 / $107
      productSalesToBreakEven: 1_367, // $41,000 / $30
      blendedTransactionsToBreakEven: 538, // 60% services + 40% products mix ($41K / $76.20)
    },

    /** Conservative scenario (avg $200 service, $50 product) */
    conservativeScenario: {
      averageServiceOrderValue: 200,
      averageProductOrderValue: 50,
      netRevenuePerServiceOrder: 43,  // scaled: $200/$500 × $107 ≈ $43
      netRevenuePerProductSale: 15,   // scaled: $50/$100 × $30 = $15
      serviceOrdersToBreakEven: 953,  // $41,000 / $43
      productSalesToBreakEven: 2_733, // $41,000 / $15
      blendedTransactionsToBreakEven: 1_289, // 60% services + 40% products mix ($41K / $31.80)
    },
  },

  /** Impact of early bird pricing on break-even (at $41K fixed costs, optimistic AOVs) */
  earlyBirdBreakEven: {
    // Methodology:
    // Regular service net = $107.19 (20% commission + 5% buyer fee - processing)
    // Early bird service net = $57.19 (10% commission + 5% buyer fee - processing)
    //   Derivation: Commission 10% of $500 = $50, buyer fee $25, minus processing $17.81 = $57.19
    // Regular product net = $29.78 (30% commission + 5% buyer fee - processing)
    // Early bird product net = $10.67 (10% commission + 5% buyer fee - processing)
    //   Derivation: Commission 10% of $95 = $9.50, buyer fee $5, Stripe on $105 = $3.345, payout on $85.50 (0.57% × $85.50 = $0.49) = $3.83 total processing. Net = $14.50 - $3.83 = $10.67
    //   Note: Previous $10.78 figure incorrectly reused the regular product processing cost ($3.72 on $66.50 payout) instead of recalculating for the early bird payout amount ($85.50).
    // Break-even = $41,000 monthly fixed costs / blended net revenue per transaction
    //
    // 50% early bird services: 50% × $107 + 50% × $57.19 = $53.50 + $28.60 = $82.10 -> $41,000 / $82.10 = 499
    // 75% early bird services: 25% × $107 + 75% × $57.19 = $26.75 + $42.89 = $69.64 -> $41,000 / $69.64 = 589
    // 100% early bird services: $41,000 / $57.19 = 717
    // 50% early bird products: 50% × $29.78 + 50% × $10.67 = $14.89 + $5.34 = $20.22 -> $41,000 / $20.22 = 2,028
    // 75% early bird products: 25% × $29.78 + 75% × $10.67 = $7.45 + $8.00 = $15.45 -> $41,000 / $15.45 = 2,654
    // 100% early bird products: $41,000 / $10.67 = 3,842
    allRegular: { serviceOrders: 383, productSales: 1_367, note: "100% at regular rates" },
    fiftyPercentEarlyBird: { serviceOrders: 499, productSales: 2_028, note: "Blended: 50% regular + 50% early bird" },
    seventyFivePercentEarlyBird: { serviceOrders: 589, productSales: 2_654, note: "Blended: 25% regular + 75% early bird" },
    allEarlyBird: { serviceOrders: 717, productSales: 3_842, note: "100% at early bird 10% rate" },
    criticalInsight: "At 100% early bird, break-even requires 1.9x more service orders and 2.8x more product sales vs regular rates. Platform must begin transitioning sellers to regular rates by month 10.",
  },
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get a formatted manob.ai description for articles
 */
export function getManobDescription(): string {
  return "manob.ai is a marketplace where you can sell code, themes, templates, and also offer your development services from a single account.";
}

/**
 * Get manob.ai value proposition for different audiences
 */
export function getManobValueProp(audience: "sellers" | "buyers" | "freelancers"): string {
  switch (audience) {
    case "sellers":
      return "manob.ai lets you sell digital products (templates, scripts, plugins) AND offer development services from one unified seller account—no need for separate profiles on ThemeForest and Fiverr.";
    case "buyers":
      return "On manob.ai, you can buy ready-made templates and scripts, or hire developers for custom work—all in one place with buyer protection.";
    case "freelancers":
      return "manob.ai combines a job board with competitive bidding, plus you can sell your own templates and scripts alongside your services.";
  }
}

/**
 * Get commission comparison text
 */
export function getCommissionComparison(): string {
  return `manob.ai product pricing: 5% Buyer Processing Fee + Support Fee (10% of net price) + Product Price. Regular sellers: ${COMMISSION_STRUCTURE.products.regular.manobShare}% manob.ai / ${COMMISSION_STRUCTURE.products.regular.sellerShare}% Seller on products, ${COMMISSION_STRUCTURE.services.regular.manobShare}% on services. Early bird sellers: only ${COMMISSION_STRUCTURE.products.earlyBird.manobShare}% on products and ${COMMISSION_STRUCTURE.services.earlyBird.manobShare}% on services. Example: $100 product with 5% buyer fee ($5) → Regular seller gets $66.50, Early bird seller gets $85.50. No monthly fees or listing fees.`;
}

/**
 * Get new user benefits text
 */
export function getNewUserBenefits(): string {
  return `New manob.ai users get ${NEW_USER_BENEFITS.freeConnects} free Connects for bidding, instant activation, and no credit card required.`;
}

/**
 * Get Manob Wallet & economy description
 */
export function getWalletDescription(): string {
  return `manob.ai uses Manob Coins as its universal in-platform currency, stored in the Manob Wallet. Users earn Manob Coins from selling services/products and referrals. The wallet tracks earning sources internally while showing a unified balance. Manob Coins can be spent on buying products/services (0% processing fee), purchasing Connects (for bidding and posting live jobs), or purchasing AI Energy (for AI-powered features like the AI Website Builder and Vibe Coding). Connects and AI Energy can also be bought with card.`;
}

/**
 * Get support system description
 */
export function getSupportDescription(): string {
  return `Every product on manob.ai includes ${SUPPORT_SYSTEM.freeMonths} months of free support. Extend support by purchasing at checkout for ${EXTENDED_SUPPORT_PRICING.atPurchase}% of product price, during the free support window for ${EXTENDED_SUPPORT_PRICING.duringFreePeriod}%, or after support expires for ${EXTENDED_SUPPORT_PRICING.afterExpiry}%.`;
}

/**
 * Format key differentiators for article content
 */
export function formatKeyDifferentiators(): string {
  return KEY_DIFFERENTIATORS.map((d) => `**${d.title}**: ${d.description}`).join("\n\n");
}

// ---------------------------------------------------------------------------
// PRICING HELPER FUNCTIONS
// ---------------------------------------------------------------------------

/** Convert MC to estimated USD cost */
export function mcToUSD(mc: number, packageSize: number = 1_000): number {
  const pkg = MC_SYSTEM.packages.find((p) => p.mc === packageSize);
  const pricePerMC = pkg ? pkg.pricePerMC : 0.001;
  return mc * pricePerMC;
}

/** Convert MC to AI tokens */
export function mcToTokens(mc: number): number {
  return mc * MC_SYSTEM.tokenRatio;
}

/** Calculate connects needed for a job bid based on budget */
export function getConnectsForBid(budgetUSD: number): number {
  if (budgetUSD < 50) return 1;
  if (budgetUSD < 250) return 2;
  if (budgetUSD < 1_000) return 3;
  if (budgetUSD < 5_000) return 4;
  return 5; // $5,000+ / long-term
}

/** Calculate connects needed to post a live job based on budget */
export function getConnectsForJobPost(budgetUSD: number): number {
  if (budgetUSD < 250) return 1; // both <$50 and $50-250 cost 1
  if (budgetUSD < 1_000) return 2;
  if (budgetUSD < 5_000) return 3;
  return 4; // $5,000+
}

/** Calculate product sale breakdown */
export function calculateProductSale(
  orderPrice: number,
  buyerFee: number,
  isEarlyBird: boolean = false
): { netPrice: number; supportFee: number; productPrice: number; manobGets: number; sellerGets: number } {
  const netPrice = orderPrice - buyerFee;
  const supportFee = netPrice * 0.10;
  const productPrice = netPrice - supportFee;
  const commissionRate = isEarlyBird
    ? COMMISSION_STRUCTURE.products.earlyBird.manobShare / 100
    : COMMISSION_STRUCTURE.products.regular.manobShare / 100;
  const sellerRate = 1 - commissionRate;
  const manobGets = buyerFee + netPrice * commissionRate;
  const sellerGets = netPrice * sellerRate;
  return { netPrice, supportFee, productPrice, manobGets, sellerGets };
}

/** Calculate service order breakdown */
export function calculateServiceOrder(
  orderPrice: number,
  isEarlyBird: boolean = false
): { manobCommission: number; sellerGets: number; commissionRate: number } {
  const commissionRate = isEarlyBird
    ? COMMISSION_STRUCTURE.services.earlyBird.manobShare / 100
    : COMMISSION_STRUCTURE.services.regular.manobShare / 100;
  const manobCommission = orderPrice * commissionRate;
  const sellerGets = orderPrice - manobCommission;
  return { manobCommission, sellerGets, commissionRate };
}

/** Calculate buyer total cost for an order */
export function calculateBuyerCost(
  orderPrice: number,
  paymentMethod: "card" | "wallet",
  orderType: "product" | "service"
): { processingFee: number; smallOrderFee: number; total: number } {
  const processingFee = paymentMethod === "card" ? orderPrice * BUYER_FEES.paymentProcessingFee : 0;
  // Small order fee applies ONLY to service orders under $100 — products NEVER have small order fee
  const smallOrderFee =
    orderType === "service" && orderPrice < BUYER_FEES.smallOrderFee.threshold
      ? BUYER_FEES.smallOrderFee.amount
      : 0;
  return { processingFee, smallOrderFee, total: orderPrice + processingFee + smallOrderFee };
}

/** Check if withdrawal amount meets minimum */
export function canWithdraw(amount: number): boolean {
  return amount >= WITHDRAWAL.minimumAmount;
}

// ============================================================================
// DEMAND VALIDATION EVIDENCE — MARKET SIGNALS & COMPARABLE LAUNCH DATA
// ============================================================================

export const DEMAND_VALIDATION_EVIDENCE = {
  description: "Concrete evidence supporting demand for manob.ai, including market signals, competitor proxies, and diaspora-driven cross-border demand",

  bangladeshMarketSignals: {
    freelancerPopulation: {
      estimate: "650,000+ registered freelancers on global platforms",
      source: "Bangladesh ICT Division 2023 report + Upwork/Fiverr public country data",
      breakdown: {
        upwork: "~300,000 Bangladeshi freelancers registered (3rd largest country by freelancer count after US and India)",
        fiverr: "~150,000 Bangladeshi sellers (estimated from public Fiverr country pages)",
        freelancerCom: "~200,000 Bangladeshi users (Freelancer.com public statistics)",
      },
      insight: "Bangladesh is the world's 2nd largest freelance labor exporter by volume (after India). This population is actively seeking platforms with better economics.",
    },

    competitorGMVEstimates: {
      envatoMarket: {
        totalGMV: "$1.3B+ cumulative author earnings (public figure from Envato Impact Report)",
        bangladeshiSellers: "Estimated 5-8% of Envato authors are Bangladeshi (~3,000-5,000 sellers)",
        avgAnnualEarnings: "$2,000-$5,000 per active Bangladeshi Envato seller",
        implication: "~$10M-$25M annual GMV from Bangladeshi Envato sellers alone. Even capturing 5% of this cohort ($500K-$1.25M) would validate Year 1 targets.",
      },
      upworkBangladesh: {
        estimatedAnnualGSV: "$200M-$400M from Bangladeshi freelancers",
        source: "Extrapolated from Upwork 2023 10-K ($4.1B total GSV) and Bangladesh being ~5-8% of supply side",
        avgProjectSize: "$300-$800 per project for web development services",
        implication: "Large existing supply of Bangladeshi service providers actively earning on global platforms. manob.ai offers better commission (10-20% vs Upwork's 5-20% graduated per-client).",
      },
    },

    localMarketGaps: [
      "No Bangladesh-founded global marketplace — all existing platforms (Upwork, Fiverr, Envato) are US-based with no localized support",
      "Bangladeshi freelancers face payout friction: Upwork requires Payoneer, Fiverr requires PayPal (limited in BD), Envato uses Payoneer/SWIFT",
      "No platform combines digital products + services — Bangladeshi developers who sell themes AND offer custom dev must maintain 2-3 platform accounts",
      "Local payment options (bKash, Nagad, local bank transfer) are not supported by any global marketplace",
    ],
  },

  socialProofTargets: {
    preLaunchWaitlist: {
      target: 1000,
      timeline: "Accumulate before beta launch (Month 4)",
      strategy: "Landing page with AI builder teaser video + 'Be the first 1,000 sellers — lock in 10% commission for 12 months' messaging",
      conversionAssumption: "30-40% waitlist-to-signup conversion (industry benchmark for developer tools: 25-45%)",
    },
    communityEngagement: {
      devToFollowers: { target: 500, timeline: "Month 3" },
      twitterFollowers: { target: 1000, timeline: "Month 6" },
      facebookGroupMembers: { target: 2000, timeline: "Month 6", note: "BD developer community on Facebook is massive — 50K+ member groups exist" },
      redditPresence: { target: "Weekly posts on r/webdev, r/freelance, r/nextjs", timeline: "Ongoing from Month 1" },
    },
    earlyAdopterTestimonials: {
      target: 10,
      timeline: "Collect during alpha (Month 3)",
      format: "Video testimonials from alpha sellers showing their dashboard, earnings, and experience",
      use: "Landing page, Product Hunt launch, investor deck",
    },
  },

  comparablePlatformLaunchMetrics: {
    fiverr: {
      year1GMV: "~$1M (2010 launch year — estimated from early press coverage)",
      year1Sellers: "~10,000 registered, ~2,000 active",
      keyGrowthDriver: "SEO + viral gig sharing on social media. $5 fixed price point was a viral hook.",
      timeToSeries_A: "3 years (Series A in 2012, $15M at ~$50M valuation)",
      relevanceToManob: "Fiverr launched with zero marketing budget and relied entirely on organic/viral. manob.ai has a similar bootstrap constraint. Fiverr's $1M Year 1 GMV is comparable to manob.ai's $600K-$1.2M target.",
    },
    upwork: {
      note: "Upwork formed from oDesk + Elance merger (2015). Pre-merger data used.",
      oDeskYear1GMV: "~$5M (2005 launch — estimated from 2014 S-1 filing cohort data)",
      keyGrowthDriver: "Hourly tracking software (oDesk Desktop) gave buyers confidence in paying for time-based work.",
      relevanceToManob: "oDesk's escrow innovation is analogous to manob.ai's AI preview innovation — both reduce buyer uncertainty. oDesk grew faster than Fiverr due to higher AOV (services vs $5 gigs).",
    },
    creativeMarket: {
      year1GMV: "~$2M (2012 launch — estimated from public founder interviews)",
      year1Sellers: "~5,000 registered, ~1,500 active",
      keyGrowthDriver: "Designer community seeding + weekly free goods campaign. Non-exclusive licensing attracted Envato sellers.",
      relevanceToManob: "Creative Market's non-exclusive model is identical to manob.ai's approach. Their success validates that sellers will cross-list if commission and experience are competitive.",
    },
    gumroad: {
      year1GMV: "~$500K (2012 — estimated from public Sahil Lavingia posts)",
      keyGrowthDriver: "Creator-first positioning + simple checkout link (no marketplace browse). Individual creator distribution.",
      relevanceToManob: "Gumroad's low GMV in Year 1 shows that creator-first platforms can start small and scale. manob.ai's marketplace model should generate higher GMV due to centralized discovery.",
    },
  },

  searchVolumeData: {
    description: "Google Keyword Planner estimates for relevant search terms (monthly global volume)",
    keywords: [
      { term: "freelance marketplace", monthlySearches: "22,000-33,000", competition: "High", cpcRange: "$3-$8" },
      { term: "sell digital products online", monthlySearches: "8,000-12,000", competition: "Medium", cpcRange: "$2-$5" },
      { term: "hire web developer", monthlySearches: "18,000-27,000", competition: "High", cpcRange: "$5-$15" },
      { term: "website templates marketplace", monthlySearches: "5,000-8,000", competition: "Medium", cpcRange: "$2-$4" },
      { term: "freelance Bangladesh", monthlySearches: "6,000-10,000", competition: "Low", cpcRange: "$0.50-$1.50" },
      { term: "NextJS template", monthlySearches: "12,000-18,000", competition: "Medium", cpcRange: "$1-$3" },
      { term: "React template marketplace", monthlySearches: "3,000-5,000", competition: "Low", cpcRange: "$1-$2" },
      { term: "AI website builder", monthlySearches: "40,000-60,000", competition: "High", cpcRange: "$4-$10" },
      { term: "digital products marketplace", monthlySearches: "4,000-6,000", competition: "Medium", cpcRange: "$2-$4" },
    ],
    seoOpportunity: "Long-tail developer keywords (e.g., 'NextJS ecommerce template', 'hire React developer Bangladesh') have low competition and high intent. Content/SEO strategy targets 50+ long-tail keywords with <$2 CPC equivalent, driving CAC to $15 per buyer via organic.",
    note: "Search volume data based on Google Keyword Planner ranges. Actual volumes vary seasonally. Updated estimates as of 2024-2025.",
  },

  diasporaDemand: {
    bangladeshDiaspora: {
      population: "8M+ Bangladeshi diaspora worldwide (UN Migration Report 2023)",
      keyMarkets: {
        middleEast: "4M+ (Saudi Arabia, UAE, Qatar, Oman, Kuwait)",
        southeastAsia: "1M+ (Malaysia, Singapore)",
        europe: "1M+ (UK 600K+, Italy 200K+)",
        northAmerica: "500K+ (US 300K+, Canada 100K+)",
        otherAsia: "500K+ (Japan, South Korea, India)",
      },
      crossBorderDemandDrivers: [
        "Diaspora members often hire Bangladeshi developers for personal projects (websites, apps for family businesses back home)",
        "Remittance-linked commerce: diaspora sends $22B+/year to Bangladesh (World Bank 2023) — portion flows through digital services",
        "Cultural/language preference: diaspora prefers working with Bangla-speaking developers for communication ease",
        "Trust network: diaspora members refer relatives in Bangladesh as both buyers and sellers, creating organic viral loops",
      ],
      marketSizeEstimate: "If 1% of diaspora (80,000 people) makes one $100 purchase/year on manob.ai, that is $8M annual GMV from diaspora alone — exceeding Year 1 targets.",
      acquisitionStrategy: "Target diaspora communities via Facebook groups (BD diaspora groups have 100K+ members), WhatsApp/Telegram communities, and Bangla-language content marketing.",
    },
    crossBorderValue: "The diaspora creates natural cross-border demand that most global marketplaces cannot serve well. manob.ai's Bangladeshi origin and planned bKash/Nagad integration create a moat for diaspora-to-Bangladesh transactions that Upwork and Fiverr cannot match.",
  },

  validationSummary: "Demand evidence is triangulated from 5 sources: (1) 650K+ Bangladeshi freelancers already on global platforms, (2) $10M-$25M annual GMV from BD sellers on Envato alone, (3) comparable platforms achieving $500K-$5M Year 1 GMV from zero, (4) 80K+ monthly searches for relevant keywords, (5) 8M+ Bangladeshi diaspora creating natural cross-border demand. Any ONE of these sources exceeds manob.ai's Year 1 GMV target of $600K-$1.2M.",
} as const;

// ============================================================================
// REVENUE QUALITY METRICS — NRR, GRR, PREDICTABILITY, AND COHORT TRACKING
// ============================================================================

export const REVENUE_QUALITY_METRICS = {
  description: "Revenue quality framework measuring retention, expansion, and predictability of platform revenue across cohorts",

  netRevenueRetention: {
    description: "Net Revenue Retention (NRR) measures revenue from existing cohorts including expansion (upsells, commission tier graduation, subscription upgrades) minus contraction and churn. NRR >100% means existing customers generate more revenue over time without new acquisition.",
    targets: {
      year1: { target: 0.80, range: "75-85%", rationale: "Sub-100% expected: high early churn (28% seller M12 retention), early bird commission keeps ARPU low. Expansion limited because most sellers are on early bird flat rate." },
      year2: { target: 1.05, range: "95-110%", rationale: "Crosses 100%: early bird sellers graduate to regular rates (2x commission increase), subscription adoption grows from 1-2% to 3-4%, repeat buyers increase order frequency. Expansion from rate graduation offsets churn." },
      year3: { target: 1.20, range: "110-130%", rationale: "Strong expansion: graduated commission rewards high-GMV sellers (but platform earns more total from volume), subscription conversion reaches 5%, AI Energy/MC credit spend per user increases as features mature." },
    },
    expansionDrivers: [
      "Early bird -> regular commission transition: 10% to 20-30% (products) or 10% to 20% (services) — doubles per-seller platform revenue",
      "Subscription tier upgrades: Free -> Plus ($9.99/mo) -> Pro ($19.99/mo) -> Elite ($39.99/mo)",
      "Cross-sell: product sellers who add service offerings (or vice versa) generate 2.5x more GMV",
      "AI Energy adoption: average MC credit spend per active user grows from $2/mo (Year 1) to $8/mo (Year 3)",
      "Repeat buyer spending: buyers who make 3+ purchases spend 2.2x more per transaction than first-time buyers",
    ],
    contractionDrivers: [
      "Graduated commission: high-GMV sellers pay LOWER rates (20% -> 15% -> 10% -> 7%) — reduces per-dollar revenue",
      "Subscription downgrades: 5-10% of paid subscribers downgrade per quarter",
      "Platform discounts and promotional credits reduce effective take rate",
    ],
    measurementMethodology: "Cohort-based monthly tracking. Each signup month is a cohort. NRR = (Month N revenue from Cohort X) / (Month N-12 revenue from Cohort X). Calculated monthly, reported quarterly. Exclude new customer revenue — NRR measures existing customer health only.",
  },

  grossRevenueRetention: {
    description: "Gross Revenue Retention (GRR) measures revenue from existing cohorts EXCLUDING expansion — only contraction and churn. GRR can never exceed 100%. GRR shows the 'floor' of revenue retention before upsell efforts.",
    targets: {
      year1: { target: 0.60, range: "55-65%", rationale: "Low GRR expected: high churn in new marketplace. 28% seller retention at M12 means 72% of sellers churn, taking their revenue with them. Survivors maintain spend." },
      year2: { target: 0.75, range: "70-80%", rationale: "Improved retention from seller playbook (target 36% M12 retention), buyer reactivation campaigns, and marketplace liquidity improvements. Less revenue lost to churn." },
      year3: { target: 0.85, range: "80-90%", rationale: "Mature marketplace dynamics: network effects create switching costs, seller reputation capital locks in high-value sellers, recommendation engine keeps buyers engaged. Approaching best-in-class marketplace GRR." },
    },
    benchmarks: {
      upwork: "GRR ~85% (mature marketplace with strong buyer-seller relationships)",
      fiverr: "GRR ~80% (lower due to one-off gig nature)",
      shopify: "GRR ~90% (very high — merchants depend on platform for revenue)",
      earlyStageMarketplace: "GRR 50-65% is typical for Year 1 pre-PMF marketplaces",
    },
  },

  revenuePerSellerCohortTracking: {
    description: "Methodology for tracking revenue per seller cohort to identify expansion, contraction, and churn patterns",
    cohortDefinition: "Sellers grouped by signup month. Each cohort tracked independently for 24 months.",
    metricsPerCohort: [
      "Monthly GMV generated by cohort (total and per-seller average)",
      "Monthly platform revenue from cohort (commissions + fees)",
      "Active rate: % of cohort members with at least 1 transaction in trailing 30 days",
      "ARPU (Average Revenue Per User): platform revenue / active cohort members",
      "Expansion rate: % of cohort members who increased MoM revenue",
      "Contraction rate: % of cohort members who decreased MoM revenue",
      "Churn rate: % of cohort members with $0 revenue (inactive 60+ days)",
    ],
    reportingCadence: "Weekly dashboard for founder; monthly deep-dive for investor updates; quarterly cohort comparison report",
    earlyWarningSignals: [
      "ARPU declining 3 consecutive months within a cohort -> trigger seller re-engagement campaign",
      "Active rate drops below 40% at Month 3 -> investigate onboarding friction, first-sale bottleneck",
      "Top 10% sellers in cohort show declining GMV -> personal outreach from founder/seller success manager",
    ],
  },

  mrrVsTransactionalBreakdown: {
    description: "Breakdown of Monthly Recurring Revenue (subscriptions, predictable fees) vs transactional revenue (commissions on individual sales). Higher MRR % indicates more predictable, defensible revenue.",
    projections: {
      year1: {
        mrr: { percentage: 0.08, sources: "Subscription plans (3%), Connect purchases recurring (3%), MC credit recurring (2%)", monthlyMRR: "$400-$1,200" },
        transactional: { percentage: 0.92, sources: "Product commissions (25%), service commissions (20%), buyer fees (20%), job post upgrades (10%), one-time Connect/MC purchases (17%)", monthlyTransactional: "$4,600-$13,800" },
        note: "Year 1 is overwhelmingly transactional. MRR from subscriptions is minimal due to generous free tier and new platform trust gap.",
      },
      year2: {
        mrr: { percentage: 0.18, sources: "Subscription plans (8%), Connect purchases recurring (5%), MC credit recurring (5%)", monthlyMRR: "$7,200-$18,000" },
        transactional: { percentage: 0.82, sources: "Product commissions (35%), service commissions (30%), buyer fees (15%), extended support (2%)", monthlyTransactional: "$32,800-$82,000" },
        note: "MRR grows as subscription conversion improves and users establish recurring Connect/MC purchasing patterns.",
      },
      year3: {
        mrr: { percentage: 0.25, sources: "Subscription plans (12%), Connect purchases recurring (6%), MC credit recurring (7%)", monthlyMRR: "$50,000-$150,000" },
        transactional: { percentage: 0.75, sources: "Product commissions (30%), service commissions (35%), buyer fees (10%)", monthlyTransactional: "$150,000-$450,000" },
        note: "MRR reaches 25% of total revenue — provides baseline predictability. Target 30%+ by Year 4 through enterprise subscriptions and annual plans.",
      },
    },
    targetMRRMix: "Long-term target: 30-40% MRR, 60-70% transactional. Pure marketplaces (Fiverr, Upwork) run 80-90% transactional. manob.ai's subscription tiers and AI credit economy enable higher MRR mix than pure marketplace peers.",
  },

  revenuePredictabilityScore: {
    description: "Composite score measuring how predictable next month's revenue is based on existing commitments and behavioral patterns",
    formula: "Predictability Score = (Active subscriptions ARR / 12) + (Trailing 3-month repeat buyer revenue avg) + (Committed escrow pipeline) / Total projected monthly revenue",
    projectedScores: {
      year1: { score: 0.25, interpretation: "Low predictability — most revenue comes from new/first-time transactions. Normal for early marketplace." },
      year2: { score: 0.45, interpretation: "Moderate predictability — repeat buyers and subscribers create a revenue floor. ~45% of next month's revenue is predictable from existing activity." },
      year3: { score: 0.60, interpretation: "Good predictability — strong repeat buyer base, growing subscription MRR, and escrow pipeline provide 60% visibility into next month's revenue." },
    },
    repeatBuyerMetrics: {
      definition: "Buyers who make 2+ purchases in trailing 90 days",
      year1Target: "15% of active buyers are repeat",
      year2Target: "25% of active buyers are repeat",
      year3Target: "35% of active buyers are repeat",
      revenueConcentration: "Repeat buyers generate 2.2x more revenue per transaction and account for 40-60% of total buyer GMV by Year 3",
    },
    repeatSellerMetrics: {
      definition: "Sellers with 2+ completed orders in trailing 90 days",
      year1Target: "20% of active sellers are repeat",
      year2Target: "35% of active sellers are repeat",
      year3Target: "50% of active sellers are repeat",
      revenueConcentration: "Repeat sellers generate 3x more GMV than one-time sellers and have 4x higher retention rates",
    },
  },
} as const;

// ============================================================================
// PRICING POWER ANALYSIS — COMMISSION DEFENSIBILITY & ELASTICITY
// ============================================================================

export const PRICING_POWER_ANALYSIS = {
  description: "Analysis of manob.ai's ability to maintain its commission rates and pricing power over time, including competitive justification, elasticity modeling, and subscription conversion benchmarks",

  commissionJustification: {
    serviceCommission20Percent: {
      rate: "20% on services (regular sellers)",
      competitorBenchmark: {
        fiverr: "20% flat — identical rate, no graduation",
        upwork: "10% weighted average (20% on first $500/client, 10% on $500-$10K, 5% over $10K per client). Resets per client.",
        freelancerCom: "10% or $5 minimum",
        toptal: "~30-40% implied take rate (Toptal charges client rate and pays freelancer less)",
      },
      justification: [
        "At 20%, manob.ai matches Fiverr exactly — the most common freelance marketplace rate globally",
        "manob.ai's graduated system (20% -> 15% -> 10% -> 7% based on lifetime GMV) is MORE generous than Fiverr's flat 20% for high-volume sellers",
        "Unlike Upwork, manob.ai's graduated rates are based on lifetime GMV (never resets), rewarding long-term loyalty rather than per-client resets",
        "The unified product + service account creates incremental value that justifies the rate — sellers earn from products without maintaining separate platform presence",
      ],
    },

    productCommission30Percent: {
      rate: "30% on products (regular sellers)",
      competitorBenchmark: {
        envato_exclusive: "37.5% commission for exclusive authors",
        envato_nonExclusive: "55% commission for non-exclusive authors",
        creativeMarket: "40% commission",
        gumroad: "10% flat (but no marketplace discovery — seller brings own traffic)",
        templateMonster: "40-60% commission",
      },
      justification: [
        "30% is significantly below Envato non-exclusive (55%) and Creative Market (40%) — the two closest competitors for cross-listed inventory",
        "Non-exclusive policy means sellers keep their Envato/Creative Market listings — manob.ai is incremental revenue, not a replacement",
        "AI preview feature (buyers can customize before purchasing) increases conversion rates by an estimated 15-25%, making 30% commission deliver better net earnings than lower-commission platforms without AI preview",
        "Buyer fee (category-specific, 100% to manob.ai) is separate from the 30% — sellers see 70% of net price, which is better than Envato's 45-62.5% for equivalent non-exclusive listing",
      ],
    },

    earlyBirdAs10PercentLossLeader: {
      rate: "10% for first 12 months (both products and services)",
      purpose: "Loss leader to solve chicken-and-egg problem. Attracts sellers who would not join an unproven platform at standard rates.",
      unitEconomics: "Per-transaction contribution is negative for products at 10% (see CONTRIBUTION_MARGIN_WATERFALL.perTransactionContribution.product.earlyBird). Acceptable because each early bird seller seeds the catalog, attracting buyers whose fees offset the margin loss.",
      transitionRisk: "30% of early bird sellers are projected to churn at transition (see COMMISSION_STRUCTURE.earlyBird.churnModeling.realistic). Mitigated by graduation incentives and 60-day advance notice.",
    },
  },

  aiDifferentiationPremium: {
    description: "AI-powered features that justify maintaining or increasing take rates because they deliver measurable seller value",
    features: [
      {
        feature: "AI Product Preview",
        sellerBenefit: "Buyers can visualize the template with their own brand/content before purchasing — increases conversion rate by estimated 15-25%",
        competitorParity: "Not available on Envato, Creative Market, or any competitor",
        pricingPower: "Sellers accept 30% commission because AI preview drives incremental sales they would not get on other platforms",
      },
      {
        feature: "AI Website Builder (Vibe Coding)",
        sellerBenefit: "Starter kit creators earn commission on every AI builder session that uses their kit as a base — passive revenue stream",
        competitorParity: "No marketplace competitor offers AI-powered customization of third-party templates",
        pricingPower: "Creates a new revenue category (AI builder sessions) that does not exist elsewhere. Sellers cannot get this revenue on competing platforms.",
      },
      {
        feature: "Cross-Platform Analytics",
        sellerBenefit: "Sellers see which of their products lead to service inquiries (and vice versa) — data available only on manob.ai due to unified account",
        competitorParity: "Impossible on single-vertical platforms (Envato = products only, Upwork = services only)",
        pricingPower: "Data insights create switching cost. Sellers who optimize based on cross-platform data would lose that intelligence by leaving.",
      },
      {
        feature: "AI-Powered Buyer Matching",
        sellerBenefit: "AI recommends sellers to buyers based on project requirements, portfolio analysis, and past delivery success — higher quality leads",
        competitorParity: "Upwork has basic matching; Fiverr uses search ranking. manob.ai's cross-category data enables more precise matching.",
        pricingPower: "Better matching = higher win rate for sellers = justified commission. Sellers pay for qualified leads, not just visibility.",
      },
    ],
    overallPremium: "AI features collectively justify a 3-5% commission premium over pure marketplace competitors. manob.ai's effective rate (20% services, 30% products) is within market range even WITHOUT AI — the AI features provide margin safety and reduce price sensitivity.",
  },

  bangladeshCostAdvantage: {
    description: "Operating from Bangladesh allows manob.ai to offer competitive seller payouts even at standard take rates",
    operatingCostComparison: {
      manobMonthlyBurn: 15000,
      equivalentUSStartup: 45000,
      savings: "3x capital efficiency — $1 of manob.ai operating cost delivers $3 of equivalent US startup output",
    },
    sellerPayoutImplication: "Because operating costs are 3x lower, manob.ai can sustain lower margins per transaction while remaining cash-flow viable. This means the platform can maintain 20% service commission (matching Fiverr) while delivering faster feature development and better support than competitors with 3x higher burn rates.",
    competitivePricing: "If a US-based competitor launched with identical commission rates, they would need 3x the GMV to achieve the same profitability. manob.ai's cost advantage is a structural moat that enables sustainable pricing.",
  },

  priceElasticityAssumptions: {
    description: "Modeled impact of commission rate changes on seller retention, GMV, and platform revenue",

    serviceCommissionElasticity: {
      current: { rate: 0.20, projectedSellers: 500, projectedGMV: 280000, monthlyContributionMargin: 25000, revenueNote: "Figures represent estimated net contribution margin after variable costs, not gross commission revenue" },
      decrease15: {
        rate: 0.15,
        projectedSellers: 600,
        projectedGMV: 340000,
        monthlyContributionMargin: 22100,
        impact: "20% more sellers attracted by lower rate, 21% GMV increase, but 12% revenue DECREASE. Net negative for platform revenue. Not recommended unless seller acquisition is the critical bottleneck.",
      },
      increase25: {
        rate: 0.25,
        projectedSellers: 380,
        projectedGMV: 210000,
        monthlyContributionMargin: 24200,
        impact: "24% fewer sellers (price-sensitive sellers leave), 25% GMV decrease, 3% revenue decrease. Higher rate does not compensate for volume loss. Not recommended.",
      },
      optimalRate: "20% is the local optimum for service commission. Matches Fiverr benchmark, graduated tiers reward loyalty, and AI features justify the rate. Moving in either direction reduces total platform revenue.",
    },

    productCommissionElasticity: {
      current: { rate: 0.30, projectedSellers: 300, projectedGMV: 120000, monthlyContributionMargin: 15000, revenueNote: "Figures represent estimated net contribution margin after variable costs, not gross commission revenue" },
      decrease25: {
        rate: 0.25,
        projectedSellers: 350,
        projectedGMV: 145000,
        monthlyContributionMargin: 14500,
        impact: "17% more sellers, 21% GMV increase, but 3% revenue decrease. Marginal — could be justified if product catalog depth is the bottleneck.",
      },
      increase35: {
        rate: 0.35,
        projectedSellers: 240,
        projectedGMV: 90000,
        monthlyContributionMargin: 13650,
        impact: "20% fewer sellers, 25% GMV decrease, 9% revenue decrease. Clearly negative. Already well below Envato's 55% non-exclusive rate — no room to increase.",
      },
      optimalRate: "30% is defensible and near-optimal. Significantly below Envato non-exclusive (55%) and Creative Market (40%). The 30% rate combined with non-exclusive policy is the strongest product seller value proposition in the market.",
    },

    elasticityNote: "Elasticity estimates are modeled, not measured. Actual elasticity will be determined post-launch through A/B testing of commission rates on new seller signup conversion. The graduated system (20% -> 15% -> 10% -> 7% for services) naturally reduces effective rate for high-value sellers, providing built-in retention incentive without reducing the headline rate.",
  },

  subscriptionConversionBenchmarks: {
    description: "Conversion rate assumptions for subscription tiers with industry benchmarks",
    freelancerPlans: {
      freeToPlus: {
        conversionRate: 0.03,
        benchmark: "Upwork Plus: ~4% conversion. LinkedIn Premium: 3-5%. manob.ai's 3% is conservative for a new platform.",
        trigger: "Sellers who exhaust 30 free monthly Connects are primary conversion candidates",
        year1Volume: "At 300 active sellers: ~9 paid subscribers generating ~$90-$180/month MRR from freelancer plans",
      },
      plusToPro: {
        conversionRate: 0.25,
        benchmark: "Typical tier upgrade: 20-30% of paying users upgrade within 6 months",
        trigger: "Sellers who consistently use 70+ Connects/month and need advanced analytics",
      },
      proToElite: {
        conversionRate: 0.10,
        benchmark: "Top-tier adoption: 8-15% of Pro users upgrade to highest tier",
        trigger: "High-volume sellers ($5K+ monthly GMV) who benefit from 330 Connects and premium analytics",
      },
    },
    clientPlans: {
      freeToStarter: {
        conversionRate: 0.05,
        benchmark: "Buyer-side subscription conversion is typically 2-3x higher than seller-side because buyers have immediate purchasing intent",
        trigger: "Buyers who post 3+ jobs or need featured job visibility",
      },
      starterToBusiness: {
        conversionRate: 0.15,
        benchmark: "Agency/business buyers with recurring hiring needs convert at 10-20%",
        trigger: "Buyers with 5+ active projects and need for dedicated manager and team tools",
      },
    },
    blendedSubscriptionMetrics: {
      year1ARPU: "$12/month per paid subscriber (weighted average across all tiers)",
      year2ARPU: "$18/month (more Pro/Elite adoption as sellers see value)",
      year3ARPU: "$22/month (Enterprise tier adds high-ARPU outliers)",
    },
  },
} as const;

// ============================================================================
// LEGAL & CONTENT SAFETY GUIDELINES
// ============================================================================

/**
 * Legal guidelines for mentioning competitor/third-party brands
 */
export const LEGAL_BRAND_GUIDELINES = {
  /** Rules for mentioning other brands */
  rules: [
    "NEVER make false or misleading claims about competitors",
    "NEVER use disparaging or defamatory language about other brands",
    "Always use accurate, verifiable, publicly available information only",
    "Use trademark symbols (™, ®) on first mention if known",
    "Phrase comparisons as factual observations, not attacks",
    "Avoid superlatives like 'best', 'only', 'worst' when comparing",
    "State 'at the time of writing' for any data that may change",
  ],
  /** Safe phrasing patterns */
  safePhrases: [
    "Unlike some platforms that require exclusivity...",
    "While other marketplaces focus on products only...",
    "Compared to industry-standard rates of 30-50%...",
    "Some platforms charge up to 50% commission...",
  ],
  /** Phrases to AVOID */
  avoidPhrases: [
    "ThemeForest is terrible because...",
    "Fiverr rips off sellers by...",
    "Unlike the greedy competitors...",
    "The best alternative to [Brand]...",
    "[Brand] is known for treating sellers poorly...",
  ],
  /** When mentioning specific competitors */
  competitorMentions: {
    allowed: [
      "Factual commission rates from their public pricing pages",
      "Publicly documented policies (exclusivity requirements, etc.)",
      "General market positioning (product-only vs product+service)",
    ],
    notAllowed: [
      "Internal business practices you can't verify",
      "Negative user experiences presented as facts",
      "Speculation about their future plans or problems",
      "Screenshots or quotes without proper attribution",
    ],
  },
} as const;

/**
 * Confidential information that must NEVER appear in public content
 */
export const CONFIDENTIAL_INFO = {
  /** Admin/internal systems - NEVER reveal */
  neverReveal: [
    "Admin panel URLs, paths, or structure",
    "Internal dashboard features or admin-only tools",
    "Backend system architecture or database structure",
    "Internal approval workflows or review queues",
    "Staff-only features or moderation tools",
    "Internal metrics, KPIs, or business data not publicly shared",
    "Security measures, fraud detection methods, or risk algorithms",
    "Unpublished pricing or commission changes",
    "Internal policy discussions or draft policies",
    "Employee names or internal team structure (except founder if public)",
  ],
  /** What CAN be mentioned (user-facing only) */
  canMention: [
    "User dashboard paths (Dashboard → Settings → Profile)",
    "Publicly visible features available to all users",
    "Published policies from help center",
    "Public pricing and commission rates",
    "Publicly announced features and updates",
  ],
  /** Path format for user-facing UI only */
  uiPathExamples: {
    correct: [
      "Dashboard → Purchases → Order History",
      "Profile → Settings → Payout Methods",
      "Seller Dashboard → Products → Add New",
    ],
    incorrect: [
      "Admin Panel → User Management",
      "Backend → Approval Queue",
      "Staff Dashboard → Reports",
    ],
  },
} as const;

/**
 * Get legal safety instructions for prompt injection
 */
export function getLegalSafetyInstructions(): string {
  return `
**LEGAL & CONTENT SAFETY - MANDATORY**

**When mentioning competitor brands (ThemeForest, Fiverr, Upwork, etc.):**
- Use ONLY factual, publicly verifiable information
- NO disparaging, defamatory, or misleading statements
- Phrase as neutral observations: "Some platforms charge up to 50%..." not "ThemeForest rips you off..."
- Add "at the time of writing" for data that may change
- NEVER claim to be "better than" - let facts speak for themselves

**SAFE comparison phrases:**
- "Unlike some platforms that require exclusivity..."
- "While other marketplaces focus on products only..."
- "Compared to industry-standard rates..."

**NEVER write:**
- "[Brand] is terrible/bad/worse..."
- "Unlike the greedy competitors..."
- Unverified claims about competitor practices

**CONFIDENTIAL - NEVER REVEAL:**
- Admin panel, staff dashboard, or internal tools
- Backend systems, approval queues, moderation processes
- Internal metrics, unpublished data, or security measures
- Any path starting with "Admin →" or "Staff →"

**ONLY mention user-facing features:**
- ✓ "Dashboard → Settings → Profile"
- ✓ "Seller Dashboard → Products → Add New"
- ✗ "Admin Panel → User Management"
- ✗ "Backend → Approval Queue"
`;
}

// ============================================================================
// CONTENT TYPE GUIDELINES
// ============================================================================

/**
 * Content types for different manob.ai content needs
 * - "blog": Long-form articles (1500-4000+ words) for SEO/thought leadership
 * - "article": Short help center articles (100-400 words) for user guidance
 */
export const CONTENT_TYPE_GUIDELINES = {
  blog: {
    name: "Blog Post",
    description: "Long-form content for manob.ai blog, guest posts, or marketing content",
    wordCount: { min: 1500, max: 4000, typical: 2500 },
    structure: [
      "Engaging hook/introduction",
      "Answer box summary for AEO",
      "Multiple H2/H3 sections with depth",
      "Personal experience and examples",
      "FAQ section with JSON-LD schema",
      "Call-to-action conclusion",
    ],
    tone: "Conversational, authoritative, includes storytelling",
    useFor: [
      "SEO-focused articles",
      "Thought leadership pieces",
      "How-to guides with depth",
      "Comparison articles",
      "Industry insights",
    ],
  },
  article: {
    name: "Help Article",
    description: "Short, focused help center content that answers specific user questions",
    wordCount: { min: 100, max: 400, typical: 200 },
    structure: [
      "Direct answer in first sentence",
      "Step-by-step instructions (if process)",
      "Bullet lists for requirements/conditions",
      "UI paths in format: Dashboard → Section → Action",
      "Related article links at end",
    ],
    tone: "Clear, helpful, no fluff, straight to the point",
    useFor: [
      "FAQ answers",
      "How-to instructions",
      "Policy explanations",
      "Feature documentation",
      "Troubleshooting guides",
    ],
  },
} as const;

/**
 * Help article categories and their patterns
 */
export const HELP_ARTICLE_PATTERNS = {
  howTo: {
    titlePattern: "How do I...?",
    structure: [
      "Direct answer sentence",
      "Numbered steps with UI paths",
      "Important notes or tips",
      "Related articles",
    ],
    example: {
      title: "How do I request a refund for a product?",
      content: `You can request a refund within 15 days of purchase through your dashboard.

**To request a refund:**
1. Go to **Dashboard → Purchases → Order History**
2. Find the order and click **Request Refund**
3. Select your reason and provide details
4. Submit your request

The seller will review your request and respond. If unresolved, you can contact our support team.

**Valid refund reasons:**
- Product doesn't match the description
- Product doesn't work as advertised
- Files are missing or corrupted
- Billing error or duplicate charge

**Note:** Refunds are not available for change of mind or if you lack the technical skills to use the product.

**Related:** [Refund Policy](/help/refund-policy) · [Contact Support](/help/contact)`,
    },
  },
  canI: {
    titlePattern: "Can I...?",
    structure: [
      "Yes/No answer immediately",
      "Conditions or requirements",
      "How to do it (if yes)",
      "Alternatives (if no)",
    ],
    example: {
      title: "Can I sell the same product on other marketplaces?",
      content: `Yes, you can sell your products on multiple marketplaces. We don't require exclusivity.

You're free to list your templates, themes, and scripts on other platforms like ThemeForest, Creative Market, or your own website while also selling with us.

**Note:** Make sure you own the rights to sell the product and aren't violating any exclusivity agreements you may have with other platforms.

**Related:** [Seller Guidelines](/help/seller-guidelines) · [Listing Products](/help/list-product)`,
    },
  },
  whatIs: {
    titlePattern: "What is...?",
    structure: [
      "Clear definition",
      "How it works",
      "Why it matters to the user",
      "How to access/use it",
    ],
    example: {
      title: "What is the Resolution Center?",
      content: `The Resolution Center is where buyers and sellers resolve service order disputes with help from our team.

**When to use it:**
- Work wasn't delivered as agreed
- Seller missed the deadline
- Quality issues that can't be resolved directly

**How it works:**
1. Go to **Order Details → Resolution Center**
2. Click **Create Resolution** and explain the issue
3. A manob.ai agent will review the case
4. Both parties discuss and provide evidence
5. Agent decides: revision, partial refund, full refund, or no refund

**Note:** Use the Resolution Center within 7 days of delivery. For technical issues accessing the center, contact support instead.

**Related:** [Service Refund Policy](/help/service-refunds) · [Order Issues](/help/order-issues)`,
    },
  },
  policy: {
    titlePattern: "Policy/Rules explanation",
    structure: [
      "Policy summary",
      "What's allowed",
      "What's not allowed",
      "Consequences",
      "How to comply",
    ],
    example: {
      title: "Fake Review Policy",
      content: `Reviews must reflect genuine experiences. Fake or manipulated reviews violate our terms and result in account action.

**What counts as fake reviews:**
- Reviewing your own products (directly or through others)
- Buying or trading reviews for incentives
- Coordinated review attacks on competitors
- Threatening sellers for better reviews

**What we do about it:**
- Remove fake reviews
- Adjust rating calculations
- Restrict or suspend accounts
- Remove seller badges

**To report a suspicious review:** Contact support with the review link and explain why you believe it violates policy.

**Related:** [Rating & Reviews](/help/reviews) · [Report Abuse](/help/report)`,
    },
  },
} as const;

/**
 * Get content type instructions for prompt injection
 */
export function getContentTypeInstructions(contentType: "blog" | "article"): string {
  const guidelines = CONTENT_TYPE_GUIDELINES[contentType];

  if (contentType === "article") {
    return `
**CONTENT TYPE: HELP ARTICLE (Internal Documentation)**

You are writing a **short, focused help center article** - NOT a blog post.

**CRITICAL RULES:**
- **Word count**: ${guidelines.wordCount.min}-${guidelines.wordCount.max} words (typically ~${guidelines.wordCount.typical})
- **NO fluff**: Skip introductions, storytelling, or "let's explore" language
- **First sentence = answer**: Directly answer the question immediately
- **Use UI paths**: Format as "Dashboard → Section → Button" for navigation
- **Bullet/numbered lists**: Use for steps, requirements, conditions
- **Short paragraphs**: 1-3 sentences max per paragraph

**STRUCTURE:**
${guidelines.structure.map((s, i) => `${i + 1}. ${s}`).join("\n")}

**TONE:** ${guidelines.tone}

**FORMAT EXAMPLES:**

For "How do I..." questions:
\`\`\`
[Direct answer in one sentence]

**To [do the thing]:**
1. Go to **Dashboard → Section → Page**
2. Click **Button Name**
3. [Next step]

**Note:** [Important caveat if any]

**Related:** [Link 1](/path) · [Link 2](/path)
\`\`\`

For "Can I..." questions:
\`\`\`
Yes/No, [brief explanation].

[Conditions or how to do it]

**Note:** [Important caveat]

**Related:** [Link 1](/path) · [Link 2](/path)
\`\`\`

**WHAT TO AVOID:**
- Long introductions ("In today's digital world...")
- Storytelling or personal anecdotes
- Rhetorical questions
- Filler phrases ("It's important to note that...")
- More than 400 words
- Marketing language or sales pitches
`;
  } else {
    return `
**CONTENT TYPE: BLOG POST (Long-form Content)**

You are writing a **comprehensive blog article** for SEO and thought leadership.

**GUIDELINES:**
- **Word count**: ${guidelines.wordCount.min}-${guidelines.wordCount.max} words
- **Include**: Personal experience, examples, detailed explanations
- **Structure**: Multiple H2/H3 sections, FAQ section, call-to-action
- **Tone**: ${guidelines.tone}

**STRUCTURE:**
${guidelines.structure.map((s, i) => `${i + 1}. ${s}`).join("\n")}
`;
  }
}

// ============================================================================
// CONTENT PERSPECTIVE GUIDELINES
// ============================================================================

/**
 * Perspective types for content generation
 * - "internal": First-person voice for manob.ai's own channels (blog, announcements)
 * - "external": Third-person voice for independent publishers/reviewers
 */
export const PERSPECTIVE_GUIDELINES = {
  internal: {
    name: "Internal (First-Person)",
    description: "Write as if you are manob.ai speaking on your own official channels.",
    voice: "First-person plural",
    pronounUsage: {
      use: ["we", "our", "our platform", "we help developers", "our marketplace"],
      avoid: ["manob.ai says", "the platform claims", "they offer"],
    },
    readerAddress: "Address the reader as 'you'",
    tone: "Confident, helpful, direct. You are the authority because you built it.",
    examples: [
      "We built manob.ai to solve a problem we faced ourselves.",
      "Our marketplace lets you sell products and services from one account.",
      "We charge 10% commission for your first 12 months.",
      "When you list a product with us, you get 6 months of included support.",
    ],
    useWhen: [
      "manob.ai official blog posts",
      "manob.ai announcements and updates",
      "Help documentation",
      "Email newsletters from manob.ai",
      "Social media posts from manob.ai accounts",
    ],
  },
  external: {
    name: "External (Third-Person)",
    description: "Write as an independent third-party reviewer or publisher.",
    voice: "Third-person",
    pronounUsage: {
      use: ["manob.ai", "the platform", "the marketplace", "manob.ai", "the service"],
      avoid: ["we", "our", "us", "our platform", "we offer"],
    },
    readerAddress: "Address the reader as 'you' (they are the audience)",
    tone: "Neutral, descriptive, informative. You are an independent observer/reviewer.",
    examples: [
      "manob.ai is a marketplace that combines digital products and services.",
      "The platform allows sellers to manage both products and services from one account.",
      "manob.ai charges 10% commission for new sellers during their first 12 months.",
      "Sellers on manob.ai receive 6 months of included support with each product.",
    ],
    useWhen: [
      "Guest posts on external blogs",
      "Product review articles",
      "Comparison articles",
      "News coverage about manob.ai",
      "Third-party marketplace guides",
    ],
  },
} as const;

/**
 * Get perspective-specific voice instructions for prompt injection
 */
export function getPerspectiveInstructions(perspective: "internal" | "external"): string {
  const guidelines = PERSPECTIVE_GUIDELINES[perspective];

  if (perspective === "internal") {
    return `
**VOICE & PERSPECTIVE (INTERNAL - First Person) - CRITICAL**:
You are writing AS manob.ai, speaking on our official channels. This is OUR blog, OUR announcement, OUR content.

**MANDATORY RULES:**
- ALWAYS use first-person plural when referring to manob.ai: ${guidelines.pronounUsage.use.map(p => `"${p}"`).join(", ")}
- NEVER write "manob.ai" as if it's a separate entity. We ARE manob.ai.
- NEVER say "manob.ai offers..." → Say "We offer..."
- NEVER say "On manob.ai..." → Say "On our platform..." or "With us..."
- NEVER say "manob.ai charges..." → Say "We charge..."
- NEVER say "sellers on manob.ai" → Say "our sellers" or "sellers with us"
- Address the reader directly as "you"

**Tone**: ${guidelines.tone}

**CORRECT examples (use these patterns):**
${guidelines.examples.map(e => `✓ "${e}"`).join("\n")}

**WRONG examples (NEVER write like this):**
✗ "manob.ai is a marketplace that..." → ✓ "We built a marketplace that..."
✗ "You can list on manob.ai" → ✓ "You can list with us"
✗ "manob.ai charges 30%" → ✓ "We charge 30%"
✗ "On manob.ai, sellers get..." → ✓ "With us, sellers get..." or "Our sellers get..."

**Self-check before output**: Read every sentence. If "manob.ai" appears as a noun being described, rewrite it to use "we/our/us".
`;
  } else {
    return `
**VOICE & PERSPECTIVE (EXTERNAL - Third Person) - CRITICAL**:
You are writing as an independent third-party reviewer, journalist, or external publisher. You are NOT affiliated with manob.ai.

**MANDATORY RULES:**
- ALWAYS refer to manob.ai in third person: ${guidelines.pronounUsage.use.map(p => `"${p}"`).join(", ")}
- NEVER use first-person when referring to manob.ai: ${guidelines.pronounUsage.avoid.map(p => `"${p}"`).join(", ")}
- You can use "we" only if referring to yourself and the reader together (e.g., "we found that...")
- Address the reader directly as "you"

**Tone**: ${guidelines.tone}

**CORRECT examples (use these patterns):**
${guidelines.examples.map(e => `✓ "${e}"`).join("\n")}

**WRONG examples (NEVER write like this):**
✗ "We built manob.ai to..." → ✓ "manob.ai was built to..."
✗ "Our platform offers..." → ✓ "The platform offers..."
✗ "We charge 30%" → ✓ "manob.ai charges 30%"
✗ "Join us today" → ✓ "Sellers can join manob.ai"

**Self-check before output**: Read every sentence. If "we/our/us" refers to manob.ai (not you+reader), rewrite it to use "manob.ai/the platform/the marketplace".
`;
  }
}

// ============================================================================
// GEOPOLITICAL RISK PLAN — BANGLADESH-SPECIFIC OPERATIONAL RISKS
// ============================================================================

export const GEOPOLITICAL_RISK_PLAN = {
  description: "Operational risk assessment and continuity planning for Bangladesh-specific geopolitical, infrastructure, and natural disaster risks",
  internetDisruption: {
    risk: "Bangladesh government-mandated internet shutdowns",
    precedent: "July 2024 shutdowns lasted multiple days during quota reform protests. Mobile data and broadband cut nationwide.",
    impact: [
      "Seller availability drops to zero during shutdown — no new deliveries, no communication with buyers",
      "Buyer trust erodes if orders are in progress during outage — perceived as platform failure, not government action",
      "Revenue loss: estimated $2K-$5K per shutdown day at $500K monthly GMV (pro-rated daily revenue)",
    ],
    mitigation: {
      infrastructure: "Platform hosted on AWS (us-east-1 primary, ap-southeast-1 failover). Buyer-facing site stays fully operational during BD internet outages. Only seller-side operations are affected.",
      sellerProtocol: "Auto-extend all active order deadlines by shutdown duration + 48 hours. Display 'Bangladesh connectivity disruption' banner to buyers with estimated resolution time.",
      communicationPlan: "Proactive buyer email/SMS notification within 2 hours of shutdown detection. Weekly updates during extended outages.",
      sellerGracePeriod: "No late delivery penalties or order cancellations during shutdown + 72 hours post-restoration.",
    },
  },
  politicalInstability: {
    risk: "Elections, protests, hartals (general strikes) disrupting commerce and logistics",
    frequency: "Hartals: 5-15 days/year historically. National elections every 5 years with 2-4 weeks of disruption.",
    impact: "Reduced seller productivity during hartal days. Physical deliveries (if any) impossible. Digital-only marketplace is more resilient than physical commerce.",
    mitigation: "Digital marketplace is inherently hartal-resistant — sellers can work from home. Include hartal calendar in operational planning. Maintain 30-day cash reserve to absorb revenue dips.",
  },
  naturalDisaster: {
    risk: "Flooding (June-October monsoon season) and cyclones affecting Bangladesh",
    historicalImpact: "2024 floods displaced millions. Internet infrastructure damaged in affected regions. Power outages lasting days to weeks in flood zones.",
    mitigation: {
      distributedTeam: "Remote-first team structure means no single office is a point of failure. Team members in different districts reduce correlated risk.",
      cashReserve: "30-day operating cash reserve ($41K-$53K depending on phase) maintained at all times to absorb revenue disruption.",
      backupPower: "Key team members provided with UPS/battery backup and mobile hotspot redundancy.",
    },
  },
  businessContinuity: {
    infrastructureRedundancy: "AWS multi-region deployment ensures buyer-facing platform uptime even during complete Bangladesh internet failure",
    remoteTeamProtocol: "All team members maintain VPN access and can operate from alternative locations (family homes, co-working spaces in unaffected areas)",
    cashReservePolicy: "Minimum 30 days of operating expenses held in USD-denominated account (not BDT) to hedge against simultaneous FX and operational disruption",
    insuranceConsideration: "Business interruption insurance to be evaluated at $500K+ monthly GMV. Currently cost-prohibitive for early-stage company but included in post-seed planning.",
    singaporeFailover: "If Bangladesh operations become untenable for >30 days, activate Singapore subsidiary for critical operations (payment processing, customer support). Adds ~$5K/month in incremental cost.",
  },
  annualizedRisk: "Expected revenue impact from geopolitical/disaster events: 2-5% of annual revenue ($20K-$50K at Year 2 scale). This is NOT modeled in MONTHLY_CASH_FLOW_PROJECTION base case but is covered by the cash reserve buffer.",
} as const;

// ============================================================================
// INVESTOR FAQ — COMMON OBJECTIONS AND RESPONSES
// ============================================================================

export const INVESTOR_FAQ = {
  description: "Pre-prepared responses to the most common investor objections and questions, with data-backed answers and cross-references to supporting analysis",
  questions: {
    whyWontFiverrCopy: {
      question: "Why won't Fiverr just copy this?",
      answer: [
        "Bangladesh-specific network effects: local payment integration (bKash, Nagad, local bank transfers), Bangla language support, and BD freelancer community relationships create localization moats",
        "3x cost advantage from Bangladesh operations makes it uneconomical for Fiverr to localize — their $200M+ annual operating cost structure cannot compete on unit economics in a $50-100M addressable market",
        "Fiverr's business model is optimized for global English-speaking freelancers. Localizing for Bangladesh would cannibalize their existing BD sellers (who already earn at Fiverr's 20% take rate) for minimal incremental revenue",
        "First-mover advantage in a market Fiverr has explicitly deprioritized — Fiverr has zero Bangla-language support and no BD-specific payment options as of 2025",
      ],
    },
    whatIfCantRaise: {
      question: "What if you can't raise the pre-seed?",
      answer: [
        "Contingency: reduce monthly burn to $10K (defer all hires, founder takes minimal salary, cut marketing to organic-only)",
        "Angel round of $200K extends runway by ~20 months at $10K/month burn (net ~18 months after accounting for wind-down costs and buffer) — sufficient to reach $200K monthly GMV and demonstrate PMF",
        "Focus shifts entirely to organic growth: SEO, community building, founder-led seller onboarding. Slower but capital-efficient path to same milestones.",
        "Break-even is achievable at smaller scale (~$150K monthly GMV) with minimal team — just takes 6-12 months longer",
      ],
      referenceExport: "ANGEL_ROUND_AND_DILUTION.angelRound.contingencyIfNotClosed",
    },
    whyBangladeshFirst: {
      question: "Why Bangladesh first?",
      answer: [
        "650K+ Bangladeshi freelancers active on global platforms (Upwork, Fiverr, Freelancer.com) — proven supply of skilled digital workers",
        "Underserved by existing marketplaces: no major platform offers Bangla language, local payment methods, or BD-optimized UX",
        "Diaspora demand: 10M+ Bangladeshi diaspora creates natural cross-border buyer base (US, UK, Middle East, Singapore)",
        "3x capital efficiency: $15K/month gets a 3-person engineering team vs $45K+ for a single senior engineer in the US",
        "Regulatory tailwind: Bangladesh government actively promoting IT exports (target: $5B by 2025, up from $1.4B in 2022)",
      ],
    },
    howSolveColdStart: {
      question: "How do you solve the cold start / chicken-and-egg problem?",
      answer: [
        "Supply-led strategy: seller starter kits (pre-built templates, portfolio pages) reduce time-to-first-listing from days to hours",
        "Founder-led first 100 sellers: personal outreach to Bangladeshi freelancers on Upwork/Fiverr with proven track records",
        "Early bird commission (10% vs 20-30%) makes manob.ai the best-economics option for sellers from Day 1",
        "AI builder as demand hook: buyers come for AI website building, discover the marketplace, and convert to repeat purchasers",
        "Cross-listing is frictionless: sellers maintain existing Envato/Fiverr accounts while adding manob.ai as incremental revenue",
      ],
    },
    whatsYourMoat: {
      question: "What's your moat?",
      answer: "See COMPETITIVE_MOAT_ANALYSIS for detailed 5-moat framework with time-to-defensibility estimates: (1) Network effects (18 months), (2) AI preview technology (12 months), (3) Cross-platform data (24 months), (4) Reputation/review capital (18 months), (5) Bangladesh cost structure (permanent).",
      referenceExport: "COMPETITIVE_MOAT_ANALYSIS",
    },
    whatHappensWhenEarlyBirdEnds: {
      question: "What happens when the early bird commission ends?",
      answer: [
        "Graduated transition recommended: rates increase from 10% to 15% to 20% to 25% to 30% over 10 months (not a cliff)",
        "Churn modeling: realistic scenario projects 30% churn at transition, with remaining 70% generating 2x revenue per seller",
        "Mitigation playbook: graduation incentives, 60-day advance notice, seller success data, loyalty badges",
        "Net revenue impact is positive: even with 30% seller churn, per-seller revenue doubles, resulting in net revenue growth",
      ],
      referenceExport: "EXTENDED_EARLY_BIRD_ANALYSIS (graduated transition, churn modeling, decision criteria)",
    },
  },
} as const;

// ============================================================================
// CROSS-REFERENCE INDEX — MASTER NAVIGATION MAP FOR 113+ EXPORTS
// ============================================================================

export const CROSS_REFERENCE_INDEX = {
  description: "Master index linking related exports by domain. Enables investors and readers to quickly navigate between interconnected sections of the knowledge base. Each domain lists its primary export and all related exports that provide supporting detail, alternative scenarios, or downstream dependencies.",

  revenueModel: {
    primary: "REVENUE_STREAMS",
    description: "How manob.ai generates revenue across commission, fees, subscriptions, and credits",
    relatedExports: [
      { export: "COMMISSION_STRUCTURE", relationship: "Defines exact commission rates (30% products, 20% services, 10% early bird) and graduated tiers" },
      { export: "REVENUE_STREAMS.revenueEvolution", relationship: "Year-by-year revenue mix projection showing shift from product-heavy to service-heavy" },
      { export: "CONTRIBUTION_MARGIN_WATERFALL", relationship: "Waterfall from GMV to net margin — shows how revenue converts to profit after costs" },
      { export: "BUYER_FEES", relationship: "Buyer-side fee structure (5% processing, $2.50 small order fee) — 100% to platform" },
      { export: "REVENUE_QUALITY_METRICS", relationship: "NRR, GRR, MRR breakdown, and revenue predictability scoring" },
      { export: "PRICING_POWER_ANALYSIS", relationship: "Why commission rates are defensible and price elasticity modeling" },
      { export: "MONETIZATION_SIMPLIFICATION", relationship: "Phased rollout plan to avoid overwhelming users with 11 fee mechanisms at once" },
      { export: "EXTENDED_SUPPORT_PRICING", relationship: "Extended support renewal revenue (30-75% of product price)" },
    ],
  },

  costModel: {
    primary: "OPERATIONAL_COST_MODEL",
    description: "All platform costs — fixed ($41K/month base) and variable (6.8% of GMV)",
    relatedExports: [
      { export: "MONTHLY_CASH_FLOW_PROJECTION", relationship: "Month-by-month cash flow for Months 1-24 showing revenue vs costs vs cumulative cash" },
      { export: "CONTRIBUTION_MARGIN_WATERFALL", relationship: "Cost layer breakdown from GMV to net margin — payment processing, variable costs, fixed costs" },
      { export: "EXECUTION_PLAN.fundingAndRunway", relationship: "Runway calculation and funding strategy to cover pre-revenue cost gap" },
      { export: "PAYMENT_PROCESSING_COSTS", relationship: "Detailed Stripe/PayPal/Wise fee breakdown per transaction type" },
      { export: "EXECUTION_PLAN.resourceAllocation", relationship: "Engineering time allocation across product, infrastructure, and AI features per phase" },
    ],
  },

  unitEconomics: {
    primary: "UNIT_ECONOMICS",
    description: "Per-transaction margins, LTV/CAC ratios, break-even analysis, and cohort retention modeling",
    relatedExports: [
      { export: "UNIT_ECONOMICS.cohortRetentionModel", relationship: "Seller and buyer retention curves with industry benchmarks and LTV derivation" },
      { export: "UNIT_ECONOMICS.cohortRetentionModel.buyerRetentionPlaybook", relationship: "Concrete mechanisms to improve buyer M12 retention from 12% to 20%" },
      { export: "SELLER_RETENTION_PLAYBOOK", relationship: "Seller-side retention mechanisms (first sale program, success manager, community)" },
      { export: "CHANNEL_CAC_BREAKDOWN", relationship: "Per-channel CAC with payback periods (Google Ads $50, Content/SEO $15, Referral $45)" },
      { export: "REVENUE_QUALITY_METRICS", relationship: "Revenue per seller cohort tracking methodology and NRR/GRR targets" },
      { export: "CONTRIBUTION_MARGIN_WATERFALL.perTransactionContribution", relationship: "Per-transaction contribution margin at early bird vs standard rates" },
    ],
  },

  marketSizing: {
    primary: "MARKET_SIZING",
    description: "TAM ($54B) / SAM ($8.5B) / SOM ($600K-$36M over 3 years) with bottom-up validation",
    relatedExports: [
      { export: "TAM_SAM_SOURCE_CITATIONS", relationship: "Source citations and confidence levels for every market sizing figure" },
      { export: "COMPETITIVE_COMPARISON", relationship: "Head-to-head feature and pricing comparison vs Envato, Upwork, Fiverr, Freelancer.com" },
      { export: "COMPETITIVE_MOAT_ANALYSIS", relationship: "Time-to-defensibility analysis for network effects, AI preview, cross-platform data, reputation capital" },
      { export: "COMPETITIVE_RESPONSE_PLAYBOOK", relationship: "Responses to competitive threats (Envato launches services, Fiverr adds products, etc.)" },
      { export: "DEMAND_VALIDATION_EVIDENCE", relationship: "Concrete demand signals: BD freelancer population, competitor GMV estimates, search volume, diaspora demand" },
      { export: "GEOGRAPHIC_STRATEGY", relationship: "Market-by-market launch strategy and supply-side geo mix" },
      { export: "IDEAL_CUSTOMER_PROFILES", relationship: "Detailed buyer and seller personas with acquisition channels" },
    ],
  },

  funding: {
    primary: "ANGEL_ROUND_AND_DILUTION",
    description: "Angel round structure ($150K-$250K SAFE), cap table projections, and dilution through seed",
    relatedExports: [
      { export: "EXECUTION_PLAN.fundingAndRunway", relationship: "Funding strategy by phase — bootstrap, angel, pre-seed, seed — with use of funds" },
      { export: "EXECUTION_PLAN.decisionGates", relationship: "Go/no-go gates tied to funding milestones (angel at Month 6, pre-seed at Month 12)" },
      { export: "MONTHLY_CASH_FLOW_PROJECTION", relationship: "Cash position month-by-month showing when angel/pre-seed capital is needed" },
      { export: "REGULATORY_COMPLIANCE_PLAN", relationship: "Legal structure (US Delaware C-Corp + Bangladesh subsidiary) required for fundraising" },
      { export: "FOUNDER_PROFILE", relationship: "Founder background, key person risk, and mitigation strategy" },
    ],
    note: "SAFE_VS_CONVERTIBLE_NOTE is a dedicated export comparing SAFE vs convertible note instruments for the angel round. Additional funding details are in ANGEL_ROUND_AND_DILUTION and EXECUTION_PLAN.fundingAndRunway. No separate FUNDING_STRATEGY export exists.",
  },

  risk: {
    primary: "REVENUE_CONCENTRATION_RISK",
    description: "Power law analysis, stress testing, sensitivity analysis, and risk mitigation across all dimensions",
    relatedExports: [
      { export: "UNIT_ECONOMICS.sensitivityAnalysis", relationship: "LTV sensitivity to retention rate changes — base case, moderate churn, high churn scenarios" },
      { export: "REVENUE_STREAMS.aiFailureScenario", relationship: "Financial impact if AI features fail to gain adoption — survivability analysis" },
      { export: "COMMISSION_STRUCTURE.earlyBird.churnModeling", relationship: "Seller churn scenarios (15%, 30%, 50%) when early bird expires" },
      { export: "EXECUTION_PLAN.riskMitigation", relationship: "Bus factor, scope creep, and talent retention risk mitigation" },
      { export: "EXECUTION_PLAN.decisionGates", relationship: "Contingency pivots at each gate if metrics are missed" },
      { export: "COMPETITIVE_RESPONSE_PLAYBOOK", relationship: "Defensive strategies against competitive threats" },
      { export: "BANGLADESH_REGULATORY_DETAIL", relationship: "Bangladesh-specific regulatory risks (forex controls, BTRC licensing, tax obligations)" },
      { export: "PRICING_POWER_ANALYSIS.priceElasticityAssumptions", relationship: "Revenue impact of commission rate changes — models downside scenarios" },
    ],
  },

  execution: {
    primary: "EXECUTION_PLAN",
    description: "Technical roadmap, weekly milestones, go/no-go gates, team accountability, dependencies, and resource allocation",
    relatedExports: [
      { export: "PRE_LAUNCH_PLAN", relationship: "Pre-launch phases — closed alpha, invite beta, soft launch, public launch" },
      { export: "LAUNCH_SCOPE", relationship: "Explicit definition of what ships at launch vs what is deferred" },
      { export: "PRODUCT_DIFFERENTIATION_STRATEGY", relationship: "How product inventory is sourced and differentiated (AI preview, starter kit exclusives)" },
      { export: "GROWTH_LOOPS", relationship: "Viral and organic growth mechanisms (SEO flywheel, referral program, content marketing)" },
      { export: "BUYER_ACQUISITION_STRATEGY", relationship: "Channel-by-channel buyer acquisition plan" },
      { export: "FIRST_SALE_PROGRAM", relationship: "Seller activation program to accelerate time-to-first-sale" },
    ],
  },

  product: {
    primary: "PLATFORM_FUNCTIONALITIES",
    description: "Core product: digital product marketplace + service marketplace + job board + AI website builder",
    relatedExports: [
      { export: "AI_WEBSITE_BUILDER_FLOW", relationship: "AI builder UX flow — intent capture, starter kit selection, vibe coding, deployment" },
      { export: "SERVICE_STRUCTURE", relationship: "Service listing structure — 3 package tiers, pricing, delivery times" },
      { export: "PRODUCT_REQUIREMENTS", relationship: "Product listing requirements — file formats, thumbnails, descriptions" },
      { export: "JOB_POSTING", relationship: "Job board structure — regular jobs (free), live jobs (Connects), upgrades" },
      { export: "SUBSCRIPTION_PLANS", relationship: "Freelancer and client subscription tiers with feature comparison" },
      { export: "CONNECTS", relationship: "Connect economy — pricing, free allowances, usage for bidding and job posting" },
      { export: "MC_SYSTEM", relationship: "Manob Coin / AI Energy credit system — packages, pricing, token ratio" },
      { export: "MANOB_WALLET", relationship: "Wallet system — Manob Coins balance, earning, spending, withdrawal" },
      { export: "SELLER_BADGES_OVERVIEW", relationship: "Seller badge system — Rising Talent through Top Seller" },
      { export: "SELLER_ANALYTICS_SPEC", relationship: "Seller dashboard analytics and metrics" },
    ],
  },

  trustAndSafety: {
    primary: "BUYER_PROTECTION",
    description: "Buyer protection, seller protection, dispute resolution, refunds, enforcement, and reviews",
    relatedExports: [
      { export: "BUYER_PROTECTION_PROCESS", relationship: "Step-by-step buyer protection claim process" },
      { export: "SELLER_PROTECTION", relationship: "Seller-side protection against fraudulent buyers" },
      { export: "PRODUCT_REFUND", relationship: "Product refund eligibility and process" },
      { export: "SERVICE_REFUND", relationship: "Service refund policies and timeline" },
      { export: "ENFORCEMENT_ACTIONS", relationship: "Warning, suspension, and ban policies" },
      { export: "VIOLATION_CATEGORIES", relationship: "Detailed violation types and consequences" },
      { export: "PRODUCT_REVIEWS", relationship: "Review system, fake review detection, and rating impact" },
      { export: "COPYRIGHT_POLICY", relationship: "DMCA policy, notice requirements, counter-notice process" },
    ],
  },

  howToUseThisIndex: "This index maps the 113+ exports in this knowledge base into 9 navigable domains. To find information on a topic: (1) Identify the domain, (2) Start with the 'primary' export for an overview, (3) Follow 'relatedExports' for supporting detail. Each relationship note explains WHY the linked export is relevant, not just that it exists.",
} as const;

/**
 * Get manob.ai-specific article context based on topic keywords
 */
export function getManobContextForTopic(topic: string): string {
  const topicLower = topic.toLowerCase();

  if (topicLower.includes("template") || topicLower.includes("theme") || topicLower.includes("ui")) {
    return `On manob.ai, sellers can list templates with both Regular (single project) and Extended (commercial) licenses, with ${SUPPORT_SYSTEM.freeMonths} months of support included.`;
  }

  if (
    topicLower.includes("website") ||
    topicLower.includes("builder") ||
    topicLower.includes("starter") ||
    topicLower.includes("vibe") ||
    topicLower.includes("deploy") ||
    topicLower.includes("domain") ||
    topicLower.includes("hosting")
  ) {
    return `manob.ai's AI website builder flow is: ${AI_WEBSITE_BUILDER_FLOW.finalFlow}. Deployment options include Manob hosting with a default subdomain or a custom domain (buy or add existing) with SSL.`;
  }

  if (topicLower.includes("service") || topicLower.includes("freelance") || topicLower.includes("hire")) {
    return `manob.ai's service marketplace lets freelancers offer up to ${SERVICE_STRUCTURE.maxPackages} package tiers (${SERVICE_STRUCTURE.packageTiers.join(", ")}) with clear pricing and delivery times.`;
  }

  if (topicLower.includes("job") || topicLower.includes("project") || topicLower.includes("bid")) {
    return `manob.ai's job board lets you post jobs and hire developers. Sellers bid using Connects—new users get ${NEW_USER_BENEFITS.freeConnects} free Connects to start.`;
  }

  if (topicLower.includes("commission") || topicLower.includes("fee") || topicLower.includes("earn")) {
    return getCommissionComparison();
  }

  if (
    topicLower.includes("wallet") ||
    topicLower.includes("coin") ||
    topicLower.includes("manob coin") ||
    topicLower.includes("ai energy") ||
    topicLower.includes("connect") ||
    topicLower.includes("currency")
  ) {
    return getWalletDescription();
  }

  return getManobDescription();
}
