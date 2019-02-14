function containsDuplicates(a) {
  const b = new Set(a);
  const c = Array.from(b);
  if(c.length !== a.length ) {
      return true;
  }
  return false;
};