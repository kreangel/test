const mesureWidth = itemA => {
    let reqItemWidth = 0;
  
    const screenWidth = $(window).width();
    const container = itemA.closest(".products-menu");
    const titlesBlocks = container.find(".products-menu__title");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
  
    const textContainer = itemA.find(".products-menu__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));
  
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
  
    if (isMobile) {
      reqItemWidth = screenWidth - titlesWidth;
    } else {
      reqItemWidth = 500;
    }
  
    console.log(paddingLeft);
  
    return {
      container: reqItemWidth,
      textContainer: reqItemWidth - paddingRight - paddingLeft
    }
  }
  
  const closeEveryItemInContainer = container => {
    const items = container.find(".products-menu__item");
    const content = container.find(".products-menu__content");
  
    items.removeClass("active");
    content.width(0);
  }
  
  const openItimA = itemA => {
    const hiddenContent = itemA.find(".products-menu__content");
    const reqWidth = mesureWidth(itemA);
    const textBlock = itemA.find(".products-menu__container")
  
    itemA.addClass("active");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
  }
  
  $(".products-menu__title").on("click", e => {
    e.preventDefault();
    
    const $thisA = $(e.currentTarget);
    const itemA = $thisA.closest(".products-menu__item");
    const itemOpened = itemA.hasClass("active");
    const container = $thisA.closest(".products-menu")
  
    if (itemOpened) {
      closeEveryItemInContainer(container)
    } else {
      closeEveryItemInContainer(container)
      openItimA(itemA);
    }
  });
  
  $(".products-menu__content").on("click", e => {
    e.preventDefault();
  
    closeEveryItemInContainer($('.products-menu'));
  })
  