interface Options {
  max: number; // 最近最新的数量，默认 10
  exclude?: string; // glob
  render?: (page: Page) => string;
}
