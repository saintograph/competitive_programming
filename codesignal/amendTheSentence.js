function amendTheSentence(s) {
  s = s.split(/(?=[A-Z])/);
  s = s.join(' ').toLowerCase();
  return s;
}


amendTheSentence("vSKwWDjwIerQKMgVaAniorRJlerbKpDgvyKBLPNwSRWtylqKewNFtERNuUBBHAsGkTSSfdhQHJYvAighAdeG")