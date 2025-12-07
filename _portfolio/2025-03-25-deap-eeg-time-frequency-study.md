---
title: "Time–Frequency EEG Emotion Recognition on DEAP & SEED"
collection: portfolio
permalink: /portfolio/deap-eeg-time-frequency-study
excerpt: "End-to-end pipeline for time–frequency feature extraction and 3D-CNN based emotion recognition on DEAP and SEED EEG datasets.<br/><img src='/images/500x300.png'>"
date: 2025-03-25
venue: "Research project – DEAP_EEG_EMOTION"
github: "https://github.com/kraihan/DEAP_EEG_EMOTION"
paper: "https://www.sciencedirect.com/science/article/pii/S1746809425003374"
tags:
  - EEG
  - Emotion Recognition
  - Deep Learning
  - Time–Frequency Analysis
---

This project contains the full implementation for the paper:

**“A comparative study of time–frequency features based spatio-temporal analysis with varying multiscale kernels for emotion recognition from EEG” (BSPC, Elsevier, 2025).**

Using the DEAP (and validation on SEED), the repository provides:

- A complete preprocessing pipeline: downsampling, band-pass filtering, segmentation, common reference averaging, and labeling.
- Feature extraction notebooks for:
  - Differential Entropy (DE)  
  - Wavelet Energy (WE)  
  - Cross-Correlation (XCOR)  
  - Phase Locking Value (PLV)
- Construction of spatio-temporal EEG tensors for **3D-CNN** models with different multiscale kernels (3×3×3, 5×5×5, 7×7×7).
- Training code (`model-training.ipynb` and variants) that reproduces the main experimental results, including accuracies above 96% for both arousal and valence.
- Figure generation scripts used in the manuscript.

The repo is meant as a **reproducible reference implementation** for researchers working on EEG-based emotion recognition with time–frequency features and multiscale 3D-CNNs.
