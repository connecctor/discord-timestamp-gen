const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const formats = {
  t: 'short time (example : 9:41 PM)',
  T: 'long time (example : 9:41:30 PM)',
  d: 'short date (example : 30/04/2025)',
  D: 'long date (example : 30 April 2025)',
  f: 'short date/time (example : 30 April 2025 9:41 PM)',
  F: 'long date/time (example : Wednesday, 30 April 2025 9:41 PM)',
  R: 'relative time (example : "in 5 minutes", "2 hours ago")',
};

console.log('\nSelect a timestamp format:\n');
for (const [key, desc] of Object.entries(formats)) {
  console.log(`${key} – ${desc}`);
}

rl.question('\nEnter the format (example : R): ', (formatKey) => {
  if (!formats[formatKey]) {
    console.log('\n❌ Invalid format.');
    rl.close();
    return;
  }

  rl.question('\nHow many seconds from now? (example : 60 = 1 minute): ', (secondsInput) => {
    const seconds = parseInt(secondsInput);
    if (isNaN(seconds)) {
      console.log('\n❌ Please enter a valid number.');
      rl.close();
      return;
    }

    const timestamp = Math.floor(Date.now() / 1000) + seconds;
    console.log(`\n✅ Your Discord timestamp: <t:${timestamp}:${formatKey}>`);
    rl.close();
  });
});
