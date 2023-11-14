export function formatDate(inputDate:string) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
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
