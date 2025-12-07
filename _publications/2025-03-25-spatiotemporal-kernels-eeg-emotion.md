---
title: "A Comparative Study of Time–Frequency Features Based Spatio-temporal Analysis with Varying Multiscale Kernels for Emotion Recognition from EEG"
collection: publications
category: journal
permalink: /publication/spatiotemporal-kernels-eeg-emotion
excerpt: "This work compares multiple time–frequency features and multiscale 3D CNN kernels for EEG-based emotion recognition using DEAP and SEED."
date: 2025-03-25
venue: "Biomedical Signal Processing and Control, Elsevier, 2025"
paperurl: "https://www.sciencedirect.com/science/article/abs/pii/S1746809425003374"
citation: "Md Raihan Khan, Airin Akter Tania, and Mohiuddin Ahmad, \"A comparative study of time–frequency features based spatio-temporal analysis with varying multiscale kernels for emotion recognition from EEG,\" Biomedical Signal Processing and Control, Elsevier, 2025."
---

This paper studies **EEG-based emotion recognition** using a spatio-temporal analysis pipeline built on time–frequency features. Using the DEAP dataset, the authors apply downsampling, bandpass filtering, segmentation, trimming, labeling, and common reference averaging as preprocessing.

Features are extracted via **Continuous Wavelet Transform (CWT)** with Morlet wavelets, followed by the computation of differential entropy, wavelet energy, cross-correlation, and phase locking value (PLV). A **3D CNN** with multiscale kernels (3×3×3, 5×5×5, 7×7×7) is used for classification.

The best configurations achieve training accuracies up to **98.86%** (arousal) and **98.97%** (valence), and test accuracies up to **96.13%** and **96.19%** for specific feature–kernel combinations. Validation on the SEED dataset further confirms generalization, highlighting effective choices of features and kernel sizes for EEG emotion models.
