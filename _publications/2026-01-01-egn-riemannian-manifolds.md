---
title: "Equivariant Geodesic Networks: End-to-End Classification on the SPD Manifold"
collection: publications
category: conference
permalink: /publication/equivariant-geodesic-networks
excerpt: "An end-to-end classifier composed of equivariant mapping, Riemannian pooling, geometric bias, and geodesic attention layers that operates directly on the SPD manifold instead of projecting to Euclidean space."
date: 2026-01-15
venue: "Forty-First AAAI Conference on Artificial Intelligence (AAAI) — under review, 2026"
paperurl:
citation: "Md Raihan Khan and Airin Akter Tania, \"Equivariant Geodesic Networks: End-to-End Classification on the SPD Manifold,\" AAAI 2026 (under review)."
---

We introduce **Equivariant Geodesic Networks (EGN)**, an end-to-end classifier that operates directly on the **symmetric positive definite (SPD) manifold** rather than projecting features to Euclidean space. EGN is composed of an **equivariant mapping** stage, **Riemannian pooling**, a **geometric bias** term, and **geodesic attention** layers, together with a numerically stable matrix-logarithm backward pass.

By respecting the underlying manifold geometry throughout the network, EGN improves stability and accuracy over Euclidean baselines and naive manifold approaches on covariance-based representations. The architecture is released as the open-source package **egnlib**.
