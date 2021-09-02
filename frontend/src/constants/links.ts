export const STAGE_LINK = (u: any) => ({
  as: u ? `/${u.language}/dashboard/${u.appId}/${u.stage}` : "",
  href: "/[language]/dashboard/[appId]/[stage]",
});
