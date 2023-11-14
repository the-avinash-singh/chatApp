export function formatDate(inputDate:string) {
  const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];

  const dateParts = inputDate.split('-');
  if (dateParts.length !== 3) {
    return 'Invalid Date';
  }

  const year = dateParts[0];
  const month = months[parseInt(dateParts[1], 10) - 1];
  const day = parseInt(dateParts[2], 10);

  return `${day} ${month} ${year}`;
}
