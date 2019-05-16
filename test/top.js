function importFile(name, path) {
  describe(name, () => {
    require(path);
  });
}