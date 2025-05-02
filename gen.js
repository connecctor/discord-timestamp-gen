const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const formats = {
  t: 'short time (9:41 PM)',
  T: 'long time (9:41:30 PM)',
  d: 'short date (30/04/2025)',
  D: 'long date (30 April 2025)',
  f: 'short date/time (30 April 2025 9:41 PM)',
  F: 'long date/time (Wednesday, 30 April 2025 9:41 PM)',
  R: 'relative time ("in 5 minutes")'
};

function parseDateTime(input) {
  const datetimeMatch = input.match(/^(\d{2})\/(\d{2})\/(\d{4})(?: (\d{2}):(\d{2}))?$/);
  if (!datetimeMatch) return null;
  
  const day = parseInt(datetimeMatch[1]);
  const month = parseInt(datetimeMatch[2]) - 1;
  const year = parseInt(datetimeMatch[3]);
  const hours = datetimeMatch[4] ? parseInt(datetimeMatch[4]) : 0;
  const minutes = datetimeMatch[5] ? parseInt(datetimeMatch[5]) : 0;
  
  const date = new Date(year, month, day, hours, minutes);
  return date.getTime() / 1000;
}

function parseOffset(input) {
  const number = parseInt(input);
  return isNaN(number) ? null : number;
}

function getTimestamp() {
  console.log('\nSelect format:\n');
  Object.entries(formats).forEach(([key, desc]) => console.log(`${key} - ${desc}`));

  rl.question('\nChoose format: ', (formatKey) => {
    if (!formats[formatKey]) {
      console.log('\n❌ Invalid format');
      rl.close();
      return;
    }

    const isTimeOnly = ['t', 'T', 'R'].includes(formatKey);
    const isDateOnly = ['d', 'D'].includes(formatKey);
    const prompt = isTimeOnly ? 'Enter seconds from now: ' :
                  isDateOnly ? 'Enter days offset or DD/MM/YYYY [HH:MM]: ' :
                  'Enter seconds or DD/MM/YYYY HH:MM: ';

    rl.question(prompt, (input) => {
      let timestamp;
      
      if (isTimeOnly) {
        const seconds = parseOffset(input);
        timestamp = seconds !== null ? Math.floor(Date.now() / 1000) + seconds : null;
      } else {
        timestamp = parseDateTime(input) || 
                   (parseOffset(input) !== null && Math.floor(Date.now() / 1000) + parseOffset(input));
      }

      if (timestamp === null) {
        console.log('\n❌ Invalid input');
      } else {
        console.log(`\n✅ Discord timestamp: <t:${timestamp}:${formatKey}>`);
      }
      rl.close();
    });
  });
}

getTimestamp();
