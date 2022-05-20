function toBRFormatDate(date) {
  const date_options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return date.toLocaleDateString("pt-BR", date_options);
}

module.exports = {
  toBRFormatDate,
};
