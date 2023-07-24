interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Team Member', 'Accountant', 'Financial Advisor'],
  tenantName: 'Organization',
  applicationName: 'Burning',
  addOns: ['file'],
};
