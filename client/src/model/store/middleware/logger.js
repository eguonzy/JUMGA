const logger = (store) => (next) => (action) => {
  if (action.type === "bang") alert("init");
  else next(action);
};
export default logger;
