<?php

return [
    'version' => '4.0',

    // SpyFu configuration
    'spyfu' => [
        'base_url' => 'https://www.spyfu.com/apis',
        'timeout'  => 30,
        'cache_ttl' => 60, // minutes
    ],

    // Tool toggles - enable/disable individual tools
    'tools' => [
        'dashboard'           => true,
        'content_analyzer'    => true,
        'keyword_research'    => true,
        'competitor_analysis' => true,
        'domain_analysis'     => true,
        'serp_tracker'        => true,
        'site_audit'          => true,
        'ppc_intelligence'    => true,
        'content_optimizer'   => true,
    ],

    // Default settings
    'defaults' => [
        'country'  => 'US',
        'max_rows' => 50,
    ],
];
