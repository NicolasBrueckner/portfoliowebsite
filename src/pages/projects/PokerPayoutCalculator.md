---
layout: "../../layouts/ProjectLayout.astro"

date: 2026-6-20
title: "Poker Payout Calculator"
tagline: "An app to manage the payout process for home poker games"
folderName: "poker_payout_calculator"
link: ""
linkText: ""
---

This app was built with Flutter and grew out of a need for a simple, lightweight and focused way to calculate who owes whom after a poker night. It uses a greedy min-cash-flow algorithm to keep the number of resulting transactions to a minimum — so instead of everyone paying everyone, the app settles the group in as few payments as possible. The approach was inspired by Splitwise, which handles debts in a similar way.

Once the core was working, I added quality-of-life features: presets for recurring groups, a history view for past results, multiple color schemes, and more. The design is deliberately minimalistic, inspired by the pared-back apps of developer Dustland Design. Every color scheme is built from just three colors: a background color, a primary color for text and borders, and an accent color to break the monotony.

The result is a small utility that makes game setup and settling up quick and painless — so groups can spend less time on math and more time playing.
