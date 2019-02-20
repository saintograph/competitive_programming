const domainClass = {
  '.com': 'commercial',
  '.org': 'organization',
  '.net': 'network',
  '.info': 'information'
}

function domainType(d) {
  const domains = [];
  for(let i = 0; i < d.length; i++) {
    const a = d[i].split('.');
    const tld = a[a.length - 1];
    domains.push(domainClass[`.${tld}`])
  }
  return domains;
}