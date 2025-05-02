# Discord Timestamp & Datestamp Generator

A simple tool to generate Discord's dynamic timestamps (like `<t:1620000000:R>`) for future dates.

## Installation

1. **Ensure Node.js is installed**  
   Download and install Node.js from [nodejs.org](https://nodejs.org/) if you don't have it already.

2. **Download the files**  
   - Click the green "Code" button and download as ZIP
   - Or clone the repository:  
     ```bash
     git clone https://github.com/connecctor/discord-timestamp-generator.git
     ```

3. **Run the tool**  
   Double-click `run.bat` (Windows) or run `node gen.js` in your terminal.

## Usage

1. Select a timestamp format from the list shown
2. Enter how many seconds from now the timestamp should represent
3. Copy the generated timestamp and paste it into Discord

### Format Options

| `t` | Short time | 9:41 PM 
| `T` | Long time | 9:41:30 PM 
| `d` | Short date | 30/04/2025 
| `D` | Long date | 30 April 2025 
| `f` | Short date/time | 30 April 2025 9:41 PM 
| `F` | Long date/time | Wednesday, 30 April 2025 9:41 PM 
| `R` | Relative time | "in 5 minutes", "2 hours ago" 

## Notes
- The tool will automatically check for Node.js and guide you to install it if missing
