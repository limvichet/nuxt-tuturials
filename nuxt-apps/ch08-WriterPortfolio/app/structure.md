ch08-WriterPortfolio/
├── .nuxt/                  # Nuxt auto-generated directory
└── app/                    # Main application source
    ├── assets/
    │   └── css/
    │       └── main.css    # Global stylesheets
    ├── components/
    │   ├── AppFooter.vue   # Site-wide footer component
    │   └── AppNav.vue      # Main navigation component
    ├── composables/
    │   ├── useArticle.ts   # Logic for fetching/managing articles
    │   └── useSiteMenu.ts  # Logic for handling menu states
    ├── data/
    │   └── store.ts        # Local data or state management
    ├── layouts/
    │   └── default.vue     # Default page wrapper template
    ├── pages/
    │   ├── articles/
    │   │   └── [id].vue    # Dynamic route for individual articles
    │   ├── index.cc        # Likely a config or auxiliary file
    │   └── index.vue       # Home page
    ├── types/
    │   ├── article.ts      # TypeScript interfaces for articles
    │   └── siteMenu.ts     # TypeScript interfaces for menu structures
    ├── utils/
    │   └── navigation.ts   # Helper functions for routing/navigation
    └── app.vue             # Main entry point component