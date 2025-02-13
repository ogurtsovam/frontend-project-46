# File-compare utility

### Hexlet tests and linter status:
[![Actions Status](https://github.com/ogurtsovam/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ogurtsovam/frontend-project-46/actions)
[![CI Workflow](https://github.com/ogurtsovam/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/ogurtsovam/frontend-project-46/actions/workflows/ci.yml)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6986cf2a6a2a5f0ee241/test_coverage)](https://codeclimate.com/github/ogurtsovam/frontend-project-46/test_coverage)

## Description

The **File-compare utility** is a CLI utility that compares and prints the difference between two data structures. It supports multiple input formats and provides output in various formats for flexibility.

- **Supported Input Formats**: YAML, JSON  
- **Output Formats**:  
  - **Stylish**: Well-formatted hierarchical view (default)
  - **Plain**: Simple text format with key changes
  - **JSON**: Output differences in JSON format

##  Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ogurtsovam/frontend-project-46.git
   cd frontend-project-46
   ```

2. **Install the dependencies globally**:  
   Make sure you have Node.js and npm installed. Then run:  
   ```bash
   npm install -g
   ```

3. **Verify the installation**:  
   Use the following command to confirm that the tool is installed:  
   ```bash
   gendiff -V
   ```

---

## Usage example

### Comparison of flat structures

[![asciicast](https://asciinema.org/a/WdLCwfpQbWkLqqSIxWYcruy0x.svg)](https://asciinema.org/a/WdLCwfpQbWkLqqSIxWYcruy0x)

### Comparison of recursive structures with different formats outputs

**Stylish**

[![asciicast](https://asciinema.org/a/kBX2WPMSdw29noxieALH2vrXD.svg)](https://asciinema.org/a/kBX2WPMSdw29noxieALH2vrXD)

**Plain**

[![asciicast](https://asciinema.org/a/4QuYsmMod546Kr1tQjybKWbRs.svg)](https://asciinema.org/a/4QuYsmMod546Kr1tQjybKWbRs)

**JSON**

[![asciicast](https://asciinema.org/a/L8x40XP8gCEy5KY84Wve5Ici0.svg)](https://asciinema.org/a/L8x40XP8gCEy5KY84Wve5Ici0)