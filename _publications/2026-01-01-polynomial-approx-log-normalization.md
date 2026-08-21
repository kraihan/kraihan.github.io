---
title: "Orthogonal Polynomial Approximation for Matrix-Log Normalization in Global Covariance Pooling"
collection: publications
category: conference
permalink: /publication/polynomial-approx-log-normalization
excerpt: "Orthogonal-polynomial approximations for matrix-logarithm normalization in global covariance pooling, reducing computational cost and enabling GPU execution of a previously CPU-bound operation."
date: 2026-02-01
venue: "37th British Machine Vision Conference (BMVC) — accepted, 2026"
paperurl:
citation: "Md Rifat Ur Rahman, Md Raihan Khan, Md Sakib Hossain Shovon, Pietro Liò, and Mohammad Ali Moni, \"Orthogonal Polynomial Approximation for Matrix Log Normalization in Global Covariance Pooling,\" BMVC 2026 (accepted)."
---

Global Covariance Pooling (GCP) typically relies on **matrix-logarithm normalization**, whose SVD/EIG-based computation is CPU-bound and costly. This work derives **orthogonal-polynomial approximations** of the matrix logarithm on symmetric positive definite matrices that are **GPU-friendly**, reducing computational cost and moving a previously CPU-bound operation onto the GPU.

We benchmark polynomial families in terms of numerical accuracy, runtime, and classification performance on large-scale vision datasets, showing that carefully designed polynomials offer a strong efficiency–fidelity trade-off for scalable log-normalization in GCP-based networks.

<https://arxiv.org/abs/2608.19021>
