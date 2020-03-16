export const select = commodity => {
  // alert(commodity);
  return { type: "add_commodity", playload: commodity };
};
