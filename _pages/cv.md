---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Download Full CV (PDF)](/files/CV of MD Raihan Khan.pdf){: .btn .btn--primary}

# Education

 

**Khulna University of Engineering and Technology (KUET)** — *Khulna, Bangladesh*
**B.Sc. in Electrical and Electronic Engineering** (Jan 2019 – Mar 2024)
CGPA: **3.71 / 4.00** — ranked 24 of 149 (top 16%)
Thesis: *Assessing Mental Stress Using Deep Learning Methods from EEG Signals*
Advisor: Dr. Mohiuddin Ahmad, Professor of EEE

# Research Interests

- **One- and few-step generative modeling:** closed-form flow and transport formulations that collapse iterative sampling into a single network evaluation
- **Image restoration and exposure correction** under real-world degradation, formulated through principled optimal transport rather than heuristic reconstruction losses
- **Geometry-aware deep learning on Riemannian and SPD manifolds:** equivariant architectures, geodesic operators, and numerically stable matrix-function approximation
- **Structured representation learning for neural and biomedical signals**, including EEG-based affective and cognitive state decoding

# Research Experience

### Researcher
*November 2024 – Present*
- Derived a **closed-form flow formulation** that collapses iterative diffusion sampling into a single network evaluation, removing the multi-step solver required by conventional flow matching; implemented the complete reference training codebase with stabilizers for the degenerate-path regime.
- Proposed **Equivariant Geodesic Networks (EGN)**, an end-to-end classifier of equivariant mapping, Riemannian pooling, geometric bias, and geodesic attention layers operating directly on the SPD manifold.
- Derived **orthogonal-polynomial approximations for matrix-logarithm normalization** in global covariance pooling, reducing cost and enabling GPU execution of a previously CPU-bound operation.
- Designed **AutoLumNet**, a bi-branch exposure-aware network for single-shot correction of under- and over-exposed images; reformulated correction as monotone optimal transport (average MSEC 23.75).
- Developed **DAFNet**, integrating a local 2D-CNN branch with channel attention and a global graph-attention transformer with covariance pooling, achieving state-of-the-art EEG emotion recognition.

### Research Collaborator — EEE, KUET
*Supervisor: Dr. Md. Mahbub Hasan · May 2024 – July 2024*
- Constructed the first EEG auditory-evoked-potential dataset for imagined Bengali language tasks using a low-cost OpenBCI system.
- Trained and evaluated convolutional models for Bengali vowel and word recognition; the resulting paper received the IEEE Best Paper Award.

### Undergraduate Thesis Researcher — EEE, KUET
*Advisor: Dr. Mohiuddin Ahmad · January 2023 – March 2024*
- Established how time–frequency features and kernel scale interact in 3D CNNs for EEG emotion recognition.
- Built the complete preprocessing, class-balancing, and evaluation pipeline on constrained hardware without GPU access.

# Publications

### Refereed Journal Articles
1. **DAFNet: A Dual-Path Attention Fusion Network for EEG Emotion Recognition via CNN and Graph-Based Global Modeling.** MR Khan, AA Tania, TA Bushra, J Pritha, M Ahmad. *Array (Elsevier), 2025.*
2. **A Comparative Study of Time–Frequency Features Based Spatio-Temporal Analysis with Varying Multiscale Kernels for Emotion Recognition from EEG.** MR Khan, AA Tania, M Ahmad. *Biomedical Signal Processing and Control (Elsevier), 2025.*
3. **Multiclass Liver Disease Prediction with Adaptive Data Preprocessing and Ensemble Modeling.** AA Ahad, B Das, MR Khan, N Saha, A Zahid, M Ahmad. *Results in Engineering (Elsevier), 2024.*

### Refereed Conference Proceedings
1. **Orthogonal Polynomial Approximation for Matrix-Log Normalization in Global Covariance Pooling.** MRU Rahman, MR Khan, MSH Shovon, P Liò, MA Moni. *BMVC 2026 (accepted).*
2. **Recognition of Bengali Vowels from Auditory Evoked Potentials Using CNN.** T Das, MR Khan, MM Hasan. *IEEE SPICSCON 2024 — Best Paper Award.*
3. **Custom Dataset-Driven Unsupervised Low-Light Image Enhancement Using 2D CNN.** AA Tania, MR Khan, M Ahmad. *IEEE QPAIN 2025.*
4. **Mental Stress Detection from EEG Signals Using Comparative Analysis of Random Forest and Recurrent Neural Network.** MR Khan, M Ahmad. *IEEE iCACCESS 2024.*
5. **Machine Learning Techniques for Brain Stroke Analysis and Prediction.** R Hasan, SMR Islam, MR Khan. *IEEE SPICSCON 2024.*
6. **Smart Classroom Automation: A Fusion of AI with Voice, Gesture, and Face Recognition Attendance System.** MR Khan, AA Ahad, AA Tania, T Das, B Das. *IEEE iCACCESS 2024.*

### Manuscripts Under Submission
1. **AutoLumNet: Monotone Optimal Transport for Single-Shot Exposure Correction.** AA Tania, MR Khan, M Ahmad. *IEEE TPAMI (under review, 2026).*
2. **Equivariant Geodesic Networks: End-to-End Classification on the SPD Manifold.** MR Khan, AA Tania. *AAAI 2026 (under review).*
3. **MCFN: A Lightweight Multi-Path Compound Fusion Network for Deepfake Face Detection.** SS Lagna, MR Khan. *Neural Computing and Applications, Springer (under review, 2026).*
4. **Trigonometric B-Spline Convolutional KAN for Texture Classification.** MRU Rahman, MR Khan, R Islam, M Akter. *ACCV 2026 (under review).*
5. **Difficulty-Calibrated Interpolation Paths for Conditional Flow Matching.** AA Tania, MR Khan. *IEEE ICCAS 2026 (under review).*

# Software & Open Source

**egnlib** — Equivariant Geodesic Networks for the SPD manifold (2026)
Open-source Python package implementing the full EGN architecture (equivariant mapping, Riemannian pooling, geometric bias, geodesic attention) with a stable matrix-logarithm backward pass. `pip install egnlib` · source: [github.com/kraihan/EGN](https://github.com/kraihan/EGN)

# Teaching Experience

**Lecturer, Department of EEE — North Western University, Khulna, Bangladesh** *(August 2024 – Present)*
- **Digital Image Processing (EEE-4255)** — lectures, labs, assignments, and computer-vision project supervision.
- **Digital Signal Processing (EEE-4115)** — theory and biomedical signal analysis, including the DFT and FFT.
- **Sessional on Digital Signal Processing (EEE-4116)** — laboratory sessions and EEG signal-processing projects.
- **Basic Electrical Circuits (EEE-1221)** — fundamental laws, network theorems, and circuit analysis.
- Supervise three undergraduate thesis students from problem formulation through manuscript submission (programming, classical ML, deep learning, signal processing).

# Academic Service

- **Batch Advisor**, third-year cohort, Department of EEE, North Western University (2025 – Present)
- **Course Coordinator**, Department of EEE, North Western University (2024 – Present)
- **Co-founder**, departmental research group, North Western University (2024 – Present)
- **Vice President**, KUET Mathematics Club (Feb 2023 – Feb 2024)
- **Ambassador**, International Youth Math Challenge — mathematics outreach in Bangladesh (2021)

# Honors & Awards

- **Honorable Mention**, International Mathematics Competition (IMC), Bulgaria — 589 participants worldwide (2021)
- **First participant from Bangladesh**, 27th International Mathematics Competition (2020)
- **Gold Medal**, International Youth Math Challenge — top 1% of 15,000 competitors (2020, 2021)
- **Excellence Award**, IYMC Ambassador Programme — fifth among 580 ambassadors (2021)
- **Best Paper Award**, IEEE SPICSCON (2024)
- **Silver & Bronze Medals**, International Astronomy and Astrophysics Competition (2021, 2022)
- **Best Project Award**, Electrical and Electronic Project Design Showcase, KUET (2023)
- **University Dean's Scholarship**, KUET — second and fourth academic years (2021, 2024)
- **University Merit Scholarship**, KUET — awarded seven times for departmental ranking (2020–2024)

# Technical Skills

- **Programming:** Python, C++, MATLAB
- **Frameworks & Libraries:** PyTorch, TensorFlow, Keras, scikit-learn, NumPy, pandas, SciPy, OpenCV, MNE, EEGLAB, Matplotlib, Seaborn, Flask
- **Tools:** Git & GitHub, LaTeX, Linux
- **Methods:** Riemannian / SPD-manifold learning, optimal transport, flow matching & diffusion models, graph neural networks, EEG signal processing, low-level computer vision
- **Languages:** Bengali (native), English (professional working proficiency)

# References

**Dr. Mohiuddin Ahmad** — Professor, EEE, KUET
Email: ahmad@eee.kuet.ac.bd · *(undergraduate thesis advisor)*

**Dr. Kalyan Kumar Halder** — Professor, EEE, KUET
Email: kalyan@eee.kuet.ac.bd · *(course instructor and IMC mentor)*
