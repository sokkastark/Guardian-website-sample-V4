export const navigationConfig = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Platform',
    path: '/platform',
    children: [
      { label: 'Platform Overview', path: '/platform' },
      { label: 'Population Health', path: '/platform#population-health' },
      { label: 'Patient 360 / PMC', path: '/platform#patient-360' },
      { label: 'Risk Stratification', path: '/platform#risk-stratification' },
      { label: 'Risk Adjustment / MRA', path: '/platform#risk-adjustment' },
      { label: 'Quality / Care Gaps', path: '/platform#quality-care-gaps' },
      { label: 'Care Management', path: '/platform#care-management' },
      { label: 'Transitions of Care / ADT', path: '/platform#transitions-of-care' },
      { label: 'Referral Management', path: '/platform#referral-management' },
      { label: 'Patient Engagement', path: '/platform#patient-engagement' },
      { label: 'Telemedicine', path: '/platform#telemedicine' },
      { label: 'Analytics', path: '/platform#analytics' },
    ]
  },
  {
    label: 'Solutions',
    path: '/solutions',
    children: [
      { label: 'ACO & Value-Based Care', path: '/solutions#aco-vbc' },
      { label: 'Health Plans', path: '/solutions#health-plans' },
      { label: 'CIN & Provider Organizations', path: '/solutions#cin-providers' },
      { label: 'Care Management Teams', path: '/solutions#care-teams' },
    ]
  },
  {
    label: 'Intelligence',
    path: '/intelligence',
    children: [
      { label: 'Clinical Knowledge Graph', path: '/intelligence#knowledge-graph' },
      { label: 'AI & NLP Engine', path: '/intelligence#ai-nlp' },
      { label: 'Predictive Intelligence', path: '/intelligence#predictive-intelligence' },
      { label: 'Intelligent Workflows', path: '/intelligence#intelligent-workflows' },
      { label: 'Human-in-the-Loop', path: '/intelligence#human-in-the-loop' },
    ]
  },
  {
    label: 'Data & Integration',
    path: '/data-integration',
    children: [
      { label: 'Clinical Integration', path: '/data-integration#clinical' },
      { label: 'Claims Integration', path: '/data-integration#claims' },
      { label: 'HIE & ADT', path: '/data-integration#hie-adt' },
      { label: 'Labs / Pharmacy / Other Data', path: '/data-integration#labs-pharmacy' },
      { label: 'Data Foundation', path: '/data-integration#data-foundation' },
      { label: 'APIs / Mobile Integration', path: '/data-integration#apis-mobile' },
    ]
  },
  {
    label: 'Resources',
    path: '/resources',
    children: [
      { label: 'Insights', path: '/resources#insights' },
      { label: 'Implementation Guides', path: '/resources#guides' },
      { label: 'Guardian Expertise', path: '/resources#expertise' },
    ]
  },
  {
    label: 'Company',
    path: '/company',
    children: [
      { label: 'About Guardian', path: '/company#about' },
      { label: 'Leadership', path: '/company#leadership' },
      { label: 'Security & Trust', path: '/company#security' },
      { label: 'Careers', path: '/company#careers' },
      { label: 'Contact', path: '/company#contact' },
    ]
  }
];

export function isParentActive(currentPath, item) {
  if (!item || !item.path) return false;
  const baseCurrent = currentPath.split('#')[0];
  if (baseCurrent === item.path) return true;
  if (item.children) {
    return item.children.some(child => {
      const childBase = child.path.split('#')[0];
      if (childBase === baseCurrent) return true;
      if (child.subchildren) {
        return child.subchildren.some(sub => sub.path.split('#')[0] === baseCurrent);
      }
      return false;
    });
  }
  return false;
}

export function isChildActive(currentPath, childPath) {
  if (currentPath === childPath) return true;
  // If currentPath doesn't have a hash, activate first child
  if (currentPath === '/company' && childPath === '/company#about') return true;
  if (currentPath === '/resources' && childPath === '/resources#insights') return true;
  if (currentPath === '/data-integration' && childPath === '/data-integration#clinical') return true;
  if (currentPath === '/intelligence' && childPath === '/intelligence#knowledge-graph') return true;
  if (currentPath === '/solutions' && childPath === '/solutions#aco-vbc') return true;
  return false;
}
