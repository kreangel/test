const openItim = item => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block");
    const reqHaight = textBlock.height();
  
    container.addClass("active");
    contentBlock.height(reqHaight);
  };
  
  const closeEveryItem = container => {
    const items = container.find(".team__content");
    const itemContainer = container.find(".team__item");
  
    itemContainer.removeClass("active");
    items.height(0);
  };
  
  
  $(".team__title").click ((e) => {
    const $thisTeam = $(e.currentTarget);
    const container = $thisTeam.closest(".team");
    const elemContainer = $thisTeam.closest(".team__item");
  
    if (elemContainer.hasClass("active")) {
      closeEveryItem(container);
    } else {
      closeEveryItem(container);
      openItim($thisTeam);
    }
});
  