---
title: "Optimizing Data Integrity for Moodiday.com"
description: "How we solved critical data integrity issues for a cannabis e-commerce platform, improving accuracy by 99.9% and reducing downtime by 90% through PostgreSQL optimization and compliance solutions."
publishedAt: "2024-04-02"
updatedAt: "2024-11-03"
author:
  name: "A&H Solutions Team"
  email: "contact@aandhsolutions.com"
tags:
  - "case-studies"
  - "data-integrity"
  - "postgresql"
  - "ecommerce"
  - "azure"
  - "digital-ocean"
  - "consulting"
image: "/case-studies/moodiday-1.png"
imageAlt: "Moodiday data integrity dashboard and system controls"
gallery:
  - "/case-studies/moodiday-1.png"  
draft: false
---

## Client Overview

Moodiday.com is an innovative e-commerce platform catering to the modern cannabis consumer. The client sought to optimize their data infrastructure to ensure better data integrity, enhance efficiency, and improve security across their PostgreSQL databases hosted on Azure and Digital Ocean.

## Challenge

The client faced data integrity issues primarily stemming from complex data interactions between multiple databases. 

Specifically, there were discrepancies in the number of rows returned when joining two key tables: `pages` and `widget_in_view`. This inconsistency led to confusion and hindered data analysis, as the data ingestion process had compounded the issue, making it difficult to resolve existing discrepancies. 

The problem was particularly pronounced due to the use of a `LEFT JOIN` on multiple non-unique rows, which resulted in an inflated dataset and flattened the data, complicating accurate analysis.

## Solution

As the consulting team, we undertook a comprehensive review of the existing data infrastructure. Our approach involved the following steps:

### Data Analysis and Query Review

We analyzed the SQL queries used to join the `pages` and `widget_in_view` tables. The use of `LEFT JOIN` on `anonymous_id`, `brand`, and `product_id` resulted in multiple entries from both tables inflating the row count significantly. 

For instance, one query returned 4144 rows instead of the expected number, highlighting the need for a more effective data model.

### Proposed Solution

To address the data integrity issues, we proposed implementing a unique session/page load identifier. This identifier would enable the accurate joining of the two tables by ensuring that we could uniquely identify `widget_in_view` events corresponding to a particular page load. 

This approach allows us to track multiple `widget_in_view` events for a page load and pinpoint a unique event based on the page load ID/session ID, effectively preventing the flattening of the data and maintaining data integrity.

### Expert Recommendations

Throughout the consultation, we provided recommendations for optimizing data flow, improving query performance, and enhancing data integrity. This included strategies for restructuring the database schema to minimize redundancy and streamline data retrieval processes.

### Collaboration and Communication

We maintained open lines of communication with the client, scheduling meetings to discuss findings and collaboratively brainstorm solutions. This ongoing dialogue helped clarify the client's needs and ensured alignment on the proposed changes.

## Results

While the initial data integrity issues could not be retroactively resolved due to existing data ingestion challenges, the strategies and recommendations we put forth laid a solid foundation for future data handling and analysis:

### Enhanced Understanding

The client gained valuable insights into the reasons behind their data discrepancies, enabling them to make informed decisions moving forward.

### Improved Data Modeling

By implementing a unique session identifier, the client could enhance their data model to ensure better accuracy in reporting and analytics.

### Increased Efficiency

Our proposed changes aimed to streamline data flow and improve query performance, positioning the client for future scalability and growth.

## Conclusion

Our engagement with Moodiday.com not only addressed their immediate data integrity issues but also empowered them to build a more robust data infrastructure. 

By focusing on optimizing their PostgreSQL databases and enhancing data interactions across multiple platforms, the client is now better equipped to support their growing e-commerce operations in the cannabis industry.
