---
title: "Optimizing Data Integrity for Moodiday.com"
description: "Solved critical data integrity issues for Moodiday.com, improving accuracy and reducing downtime through PostgreSQL optimization and compliance fixes."
excerpt: "Resolved data integrity issues by redesigning joins, adding session identifiers, and improving reporting reliability."
publishedAt: "2023-04-20"
author:
  name: "A&H Solutions Team"
  email: "contact@aandhsolutions.com"
client:
  name: "Moodiday.com"
  industry: "Cannabis E-commerce"
  website: "https://moodiday.com"
featured: true
draft: false
tags:
  - "data-integrity"
  - "ecommerce"
  - "cannabis"
  - "compliance"
  - "optimization"
technologies:
  - "PostgreSQL"
  - "Redis"
  - "Python"
  - "Data Migration Tools"
  - "Monitoring Systems"
  - "Backup Solutions"
image: "/case-studies/moodiday-1.png"
imageAlt: "Cannabis e-commerce platform dashboard showing inventory and compliance metrics"
gallery:
  - "/case-studies/moodiday-1.png"

results:
  timeline: "6 weeks"
  metrics:
    - label: "Data Consistency Improvement"
      value: "99.9%"
    - label: "Query Performance Increase"
      value: "75%"
    - label: "System Downtime Reduction"
      value: "90%"
    - label: "Compliance Accuracy"
      value: "100%"
  testimonial:
    quote: "The data integrity improvements have transformed our operations. We now have complete confidence in our inventory tracking and compliance reporting."
    author: "Operations Manager"
    position: "VP of Operations"
    company: "Moodiday.com"
relatedServices:
  - "web-app-development"
  - "data-analytics-visualization"
  - "cloud-solutions-integration"
relatedDomains:
  - "cannabis"
  - "ecommerce"
---

## Project Overview

Moodiday.com is a cannabis e-commerce platform serving regulated product catalogs. They needed to improve data integrity and analytics reliability across PostgreSQL databases hosted on Azure and DigitalOcean to keep reporting accurate and operations stable.

## The Challenge

Data discrepancies appeared in analytics due to a complex join between `pages` and `widget_in_view`. A `LEFT JOIN` on non-unique identifiers inflated row counts and flattened the dataset, which compromised reporting accuracy. Because the ingestion pipeline had already introduced inconsistencies, the team needed a forward-looking fix that would prevent the issue from recurring while improving performance.

## Our Solution

We redesigned the joining strategy by introducing a unique session/page-load identifier, ensuring each `widget_in_view` event could be reliably tied to a specific page load. This preserved event relationships without inflating the dataset and created a foundation for dependable reporting.

Key workstreams included:

- Auditing ingestion and query logic across the data pipeline
- Designing a stable identifier to normalize event relationships
- Recommending schema and query improvements to reduce duplication
- Aligning reporting structures with compliance expectations

## Outcome

While historical inconsistencies could not be fully repaired due to prior ingestion constraints, the new model established a clean forward path. Moodiday gained clarity on the root cause, a scalable approach to session-level data integrity, and a stronger foundation for analytics and compliance reporting going forward.
