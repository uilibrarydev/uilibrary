var useGetElemSizes = function useGetElemSizes(elemRef) {
  if (!elemRef) {
    return {
      width: 0,
      height: 0,
      scrollHeight: 0
    };
  }
  return {
    width: elemRef.clientWidth,
    scrollHeight: elemRef.scrollHeight,
    height: elemRef.clientHeight
  };
};

export { useGetElemSizes };
