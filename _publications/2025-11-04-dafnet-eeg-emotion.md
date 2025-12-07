---
title: "DAFNet: A Dual-path Attention Fusion Network for EEG Emotion Recognition via CNN and Graph-based Global Modeling"
collection: publications
category: journal
permalink: /publication/dafnet-eeg-emotion
excerpt: "DAFNet is a dual-path attention fusion network that combines local CNN-based processing of differential entropy features with graph-based modeling of spectral coherence symmetry for robust EEG emotion recognition."
date: 2025-11-04
venue: "Array, Elsevier (Available online 4 November 2025)"
paperurl: "https://www.sciencedirect.com/science/article/pii/S2590005625001882"
slidesurl:
bibtexurl:
citation: "Md Raihan Khan, Airin Akter Tania, Tanjum Arifen Bushra, Jahanara Pritha, and Mohiuddin Ahmad, \"DAFNet: A dual-path attention fusion network for EEG emotion recognition via CNN and graph-based global modeling,\" Array, Elsevier, 2025 (Available online 4 November 2025)."
---

EEG-based emotion recognition has gained increasing attention for its potential in affective computing and mental state monitoring. In this paper, we propose **DAFNet**, a novel Dual-path Attention Fusion Network designed to integrate local and global neural dynamics for robust EEG emotion classification.

The model extracts **Differential Entropy (DE)** features from raw EEG signals for local processing via a 2D Convolutional Neural Network (CNN) with channel attention, capturing fine-grained spatial-frequency patterns. In parallel, **Spectral Coherence Symmetry (SCS)** matrices are computed to represent inter-channel synchrony, which are passed through a **Graph Attention Transformer (GAT)** and **Global Covariance Pooling (GCP)** to encode global connectivity patterns. The local and global embeddings are fused to form a comprehensive feature representation.

DAFNet is evaluated on the **SEED** and **DEAP** datasets, demonstrating strong generalizability. On the SEED dataset, the proposed dual-path model achieves a test accuracy of **97.73%**, and on DEAP it reaches **97.89%** accuracy in external validation, highlighting strong generalization capability across EEG-based emotion recognition benchmarks. These results validate the complementary nature of local DE and global SCS modeling. The proposed architecture offers a scalable and accurate framework for EEG-based emotion recognition, bridging the gap between deep learning methods and neural connectivity modeling.
