var useGetElemPositions = function useGetElemPositions(elemRef) {
  if (!elemRef || !elemRef.getBoundingClientRect) {
    return {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    };
  }
  var elemDimensions = elemRef.getBoundingClientRect();
  return {
    left: elemDimensions.left,
    right: elemDimensions.right,
    top: elemDimensions.top,
    bottom: elemDimensions.bottom
  };
};

export { useGetElemPositions };
