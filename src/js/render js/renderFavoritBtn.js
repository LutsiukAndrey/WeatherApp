const favoritBtnList = document.querySelector('.favorit__city');
export const renderFavoritBtn = nameArr => {
  const favoritBtn = nameArr
    .map(name => {
      return /*html*/ `      <button class="button favorit__city-btn">
    ${name}
    <span class="delete-city" id ="${name}"
      ><img src="../../images/remove.png" alt=""
    /></span>
  </button>
  `;
    })
    .join('');
  if (favoritBtnList) {
    favoritBtnList.innerHTML = '';
    favoritBtnList.insertAdjacentHTML('beforeend', favoritBtn);
  }
};
