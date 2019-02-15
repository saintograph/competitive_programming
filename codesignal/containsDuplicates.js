function containsDuplicates(a) {
  const b = Array.from(new Set(a));
  if(b.length !== a.length ) {
      return true;
  }
  return false;
};

