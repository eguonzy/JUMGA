export default function getUnresolved(state, slice) {
  return state.entities[slice].filter((arrg) => arrg.resolved === true);
}
