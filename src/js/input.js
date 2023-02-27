const input = document.querySelector('.search-form');
const onSubmit = event => {
  event.preventDefault();
  const { value } = event.target.query;
  console.log(value);
};
input.addEventListener('submit', onSubmit);
console.log('sadfasdf');
console.log('asdasdasdasdasd');
