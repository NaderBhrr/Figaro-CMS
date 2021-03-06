export const STAGE_LINK = (u: any) => ({
  as: u ? `/${u.language}/dashboard/${u.appId}/${u.stage}` : "",
  href: "/[language]/dashboard/[appId]/[stage]",
});

export const MODEL_LINK = (u: any) => ({
  as: u ? `${STAGE_LINK(u).as}/schema/model/${u.model}` : "",
  href: `${STAGE_LINK(u).href}/[moduleName]/[section]/[model]`,
});

export const CONTENT_LINK = (u: any) => ({
  as: u ? `${STAGE_LINK(u).as}/content/${u.section}/${u.model}` : "",
  href: `${STAGE_LINK(u).href}/[moduleName]/[section]/[model]`,
});

export const CREATE_ENTRY_LINK = (u: any) => ({
  as: u ? `${STAGE_LINK(u).as}/create/${u.section}/${u.model}` : "",
  href: `${STAGE_LINK(u).href}/[moduleName]/[section]/[model]`,
});

export const EDIT_ENTRY_LINK = (u: any) => ({
  as: u ? `${STAGE_LINK(u).as}/edit/${u.section}/${u.model}` : "",
  href: `${STAGE_LINK(u).href}/[moduleName]/[section]/[model]`,
});

export const ENUMERATION_LINK = (u: any) => ({
  as: u ? `${STAGE_LINK(u).as}/schema/enumeration/${u.enumeration}` : "",
  href: `${STAGE_LINK(u).href}/[moduleName]/[section]/[model]`,
});

export const ASSET_LINK = (u: any) => ({
  as: u ? `${STAGE_LINK(u).as}/content/model/asset` : "",
  href: `${STAGE_LINK(u).href}/[moduleName]/[section]/[model]`,
});

export const I18N_LINK = (u: any) => ({
  as: u ? `${STAGE_LINK(u).as}/content/model/i18n` : "",
  href: `${STAGE_LINK(u).href}/[moduleName]/[section]/[model]`,
});

export const LOGOUT_LINK = (u: any) => {
  return u ? `/${u.language}/logout` : "";
};

export const SLACK_LINK = () => {
  const code = "zt-eatjcqlw-dRtII6skC9oxT_Fpth_Qlg";
  return `https://join.slack.com/t/developereducation/shared_invite/${code}`;
};
