---
title: "Emotion Recognition from DEAP: Feature Engineering & Baselines"
collection: portfolio
permalink: /portfolio/deap-feature-engineering-baselines
excerpt: "Preprint codebase for DEAP EEG emotion recognition with multiple handcrafted features and CNN models. <br/><img src='/images/500x300.png'>"
date: 2024-02-01
venue: "Research project – Emotion-Recognition-from-deap-dataset"
github: "https://github.com/kraihan/Emotion-Recognition-from-deap-dataset"
tags:
  - EEG
  - Feature Engineering
  - DEAP
  - CNN
---

This repository supports a **preprint study on emotion recognition using the DEAP EEG dataset**, focusing on carefully engineered signal-level features and clean baselines.

Key elements:

- **Balanced label construction** for valence and arousal using carefully chosen thresholds (e.g., 5.05 and 5.15) to avoid class imbalance.
- Multiple feature families with full code:
  - Wavelet Energy Bands (WEB)  
  - Hilbert–Huang Transform Entropy (HHTE)  
  - Hilbert Spectrum Energy (HSE)  
  - Wavelet-based Differential Entropy (DE)
- Detailed **spatiotemporal mapping pipeline**:
  - Scaling and normalization of features  
  - Temporal segmentation of long EEG windows (e.g., 60×128)  
  - Projection of 32 EEG channels to an 8×8 2D grid for CNN input
- Final 3D representations formatted for **3D-CNN models**, preserving both spatial and temporal information.

This project documents the **feature-engineering and representation learning foundations** that later evolved into the more advanced dual-path and GCP-based models.
