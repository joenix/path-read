export default (path = "") => {
  // Get Group
  const group = path.split("/");

  // Set Length
  const length = group.length - 1;

  // Get Last of Group
  const last = group[length];

  // Get Suffix
  const suffix = last.split(".");

  // Set Suffix
  group.suffix = suffix.pop();

  // Reset Last
  group[length] = suffix.shift();

  // Export
  return group;
};
