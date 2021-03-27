module.exports = {
  toISOFormat: (date) => {
    const [DD, MM, YYYY] = date.split("/");
    return `${YYYY}-${MM}-${DD}`;
  },
};
