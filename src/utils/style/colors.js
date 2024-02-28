export const colors = await fetch(
  'colors.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => {
  return response.json();
}).then((json) => {
  return json;
});
