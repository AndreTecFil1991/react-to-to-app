const Boards = Object.freeze({
  LEFTBOARD: "leftBoard",
  RIGHTBOARD: "rightBoard"
});

export function retrieveBoardDimensions(board) {
  var leftContainer = document.getElementById("left-container");
  var rightContainer = document.getElementById("right-container");
  var clientHeight = window.innerHeight;
  var clientWidth = window.innerWidth;
  var pageHeader = document.getElementById("pageHeader");
  var pageHeaderHeight = pageHeader ? pageHeader.clientHeight : 0;
  var pageFooter = document.getElementById("pageFooter");
  var pageFooterHeight = pageFooter ? pageFooter.clientHeight : 0;
  var containerDimensions = {
    width: {
      start: 0,
      end: clientWidth
    },
    height: {
      start: 0,
      end: clientHeight
    }
  };

  var containerTitle;
  var containerTitleHeight = 0;

  if (board === Boards.LEFTBOARD && leftContainer) {
    containerTitle = document.getElementById("left-container-title");
    containerTitleHeight = containerTitle ? containerTitle.clientHeight : 0;

    containerDimensions.width.end = leftContainer.clientWidth;
  }

  if (board === Boards.RIGHTBOARD && rightContainer) {
    containerTitle = document.getElementById("right-container-title");
    containerTitleHeight = containerTitle ? containerTitle.clientHeight : 0;

    containerDimensions.width.start = clientWidth - rightContainer.clientWidth;
  }

  containerDimensions.height.start = pageHeaderHeight + containerTitleHeight;
  containerDimensions.height.end = clientHeight - pageFooterHeight;

  return containerDimensions;
}

export var NoteMeasure =
  Math.floor(Math.sqrt(Math.pow(150, 2) + Math.pow(150, 2))) * 1.25;

export function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
