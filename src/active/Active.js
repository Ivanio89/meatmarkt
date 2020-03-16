export default function(state = null, action) {
  switch (action.type) {
    case "add_commodity":
      return action.playload;

    default:
      return state;
  }
}
