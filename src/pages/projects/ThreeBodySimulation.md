---
layout: "../../layouts/ProjectLayout.astro"

date: 2025-05-01
title: "Three Body Simulation"
tagline: "The chaotic interaction of a three body system visualized in a compact app"
folderName: "three_body_simulation"
link: ""
linkText: ""
colorFrom: "var(--secondary)"
colorTo: "var(--accent)"
---

The n-body problem is a interesting physical scenario in which multiple gravitational bodies exert forces on one another. In certain cases, these interactions can result in stable behavior, where the system returns to its initial state over time. Due to the chaotic nature of n-body systems, such initial conditions can't be directly calculated—they must instead be discovered through simulation, a process sometimes referred to as hunting for stable n-body orbits.

This project didn't aim to find new orbits but rather to compile the vast number of stable solutions that have already been discovered, simulate them in real time, and present them in an engaging visual format. I was inspired to take on this project by the work of Ricky Reusser and his blog on the same subject.

The resulting app provides users with a central hub to explore a variety of stable orbits, illustrated using custom shaders and a clean, user-friendly interface. The orbit calculation algorithm is based on Ricky Reusser’s original code, particularly the time integration method he developed for one of his earlier projects.