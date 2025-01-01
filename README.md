# Uncommon Tailwind CSS Bug: Classes Not Working or Unexpected Behavior

This repository demonstrates a common yet often overlooked issue in Tailwind CSS: classes not working as expected in certain files, particularly when dealing with custom themes or extending the default theme.

## Bug Description

The bug manifests as Tailwind CSS classes failing to apply styling in specific files or exhibiting unpredictable behavior with custom themes.
This might occur if the files are not included in the `content` array of your `tailwind.config.js`, or if there's a mismatch between your class names and what's defined in your `theme` configuration.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the project (refer to instructions in `package.json` if applicable).
4. Observe the inconsistencies in styling.

## Solution

The `bugSolution.js` file contains a corrected `tailwind.config.js` and demonstrates how to resolve this issue.