---
title: "Real-World EEG Emotion Recognition (SEED Pilot)"
collection: portfolio
permalink: /portfolio/real-world-eeg-emotion-recognition
excerpt: "Pilot implementation for real-world EEG emotion recognition using compact deep models on SEED-like setups."
date: 2025-01-15
venue: "Research project – EEG-Emotion-Recognition"
github: "https://github.com/kraihan/EEG-Emotion-Recognition"
tags:
  - EEG
  - Emotion Recognition
  - Deep Learning
  - Pilot Study
---

This small, focused repository explores **real-world EEG emotion recognition** in a compact setting.

Highlights:

- A streamlined **notebook-driven pipeline** (`seed-paper-14-channel-kernel-7.ipynb`) targeting a reduced-channel configuration (e.g., 14-channel setups inspired by SEED).
- Experiments with **3D-CNN kernels and temporal windows** designed to keep the model light enough for realistic deployment while preserving performance.
- Serves as a **sandbox for prototyping**:
  - Different channel subsets  
  - Kernel sizes  
  - Data splits and augmentation strategies

While smaller than the main DEAP repository, this project is useful to show how the research ideas scale down to **practical, lower-channel configurations**, which is important for consumer-grade EEG devices.
