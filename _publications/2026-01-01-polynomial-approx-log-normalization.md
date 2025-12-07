---
title: "Searching for the Best Polynomial Approximation for the Accurate Log Matrix Normalization in Global Covariance Pooling"
collection: publications
category: conference
permalink: /publication/polynomial-approx-log-normalization
excerpt: "This work systematically studies polynomial approximations of the matrix logarithm in Global Covariance Pooling, targeting accurate but efficient log-normalization."
date: 2026-01-01
venue: "International Conference on Learning Representations (ICLR), 2026 – Under Review"
paperurl: "https://openreview.net/forum?id=TXI6Abe7I2"
citation: "Md Rifat Ur Rahman and Md Raihan Khan, \"Searching for the Best Polynomial Approximation for the Accurate Log Matrix Normalization in Global Covariance Pooling,\" ICLR 2026 (under review)."
---

This paper investigates **polynomial approximations of the matrix logarithm** for use in **Global Covariance Pooling (GCP)**. Instead of relying on SVD/EIG-based log-matrix normalization, the authors explore GPU-friendly polynomial families that approximate the log function on symmetric positive definite matrices.

They benchmark different approximations in terms of numerical accuracy, runtime, and classification performance on large-scale vision datasets, showing that carefully designed polynomials can offer a strong trade-off between efficiency and fidelity, opening a new path for scalable log-normalization in GCP-based networks.
