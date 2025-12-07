---
title: "Equivariant Geodesic Networks (EGN)"
collection: portfolio
permalink: /portfolio/equivariant-geodesic-networks
excerpt: "Library of geometry-preserving layers and losses for learning on Riemannian manifolds, including SPD-valued features."
date: 2025-11-01
venue: "Research code – Equivariant Geodesic Networks"
github: "https://github.com/kraihan/Equivariant-Geodesic-Networks"
paper: "https://openreview.net/forum?id=MNOrwRlchp"
tags:
  - Riemannian Geometry
  - SPD Matrices
  - Manifold Learning
  - Deep Learning
---

This repository provides the **core implementation** of:

**“Equivariant Geodesic Networks: Geometry-Preserving Learning on Riemannian Manifolds” (ICLR 2026, under review).**

The codebase focuses on **learning directly on SPD manifolds** and other Riemannian structures, instead of flattening them to Euclidean space.

Included components:

- `equivariant_bimap.py` – Equivariant bilinear mappings that respect SPD manifold structure.
- `riemannian_geodesic_distance.py` – Utilities for computing geodesic distances on SPD.
- `geodesic_attention_layer.py` and `geodesic_prediction_layer.py` – Attention and prediction layers that are **geometry-aware**.
- `riemannian_mean_pool.py` – Manifold-consistent pooling operator.
- `eigen_activation.py`, `rpce_loss.py`, `soft_riemannian_dropout.py` – Building blocks for robust, regularized training on manifold-valued data.

This project is intended as a **research toolkit** for SPD-based covariance descriptors, diffusion tensors, and other manifold-valued representations in computer vision and medical imaging.
