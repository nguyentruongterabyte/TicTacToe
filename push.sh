#!/bin/sh

# Add all files to the staging area
git add .

# Commit the changes with a custom message
git commit -m "Auto-commit by GitHub Actions"

# Push the changes to the remote repository
git push