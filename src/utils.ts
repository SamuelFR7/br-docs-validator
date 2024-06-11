function strip(value: string) {
  return (value || "").replace(/[^\d]/g, "");
}

export { strip };
