export function calculateBoardDimentions(object) {
    var leftContainer = document.getElementById('left-container');
    var rightContainer = document.getElementById('right-container');
    var clientHeight = window.innerHeight;
    var clientWidth = window.innerWidth;
    var pageHeader = document.getElementById('pageHeader');
    var pageHeaderHeight = pageHeader ? pageHeader.clientHeight : 0;
    var pageFooter = document.getElementById('pageFooter');
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
  
    if (object === 'leftBoard' && leftContainer) {
      containerTitle = document.getElementById('left-container-title');
      containerTitleHeight = containerTitle ? containerTitle.clientHeight : 0;
  
      containerDimensions.width.end = leftContainer.clientWidth;
    }
  
    if (object === 'rightBoard' && rightContainer) {
      containerTitle = document.getElementById('right-container-title');
      containerTitleHeight = containerTitle ? containerTitle.clientHeight : 0;
  
      containerDimensions.width.start = clientWidth - rightContainer.clientWidth;
    }
  
    containerDimensions.height.start = pageHeaderHeight + containerTitleHeight;
    containerDimensions.height.end = clientHeight - pageFooterHeight;
  
    return containerDimensions;
  }
  