import {AppSettings} from "../../storages/global-state/app-settings.ts";
import {CommonIDB} from "../../storages/idb/common.idb.ts";
import {AppLanguages} from "../../types/language.ts";
import {AppRegions} from "../../types/region.ts";
import {AppThemes} from "../../types/theme.ts";

export const loadAppSettingsFromIDB = async (
  initialAppSettings: Partial<AppSettings>,
  appSettings: AppSettings,
) => {
  const appSettingsIDB = await CommonIDB.loadAppSettings()

  if (appSettingsIDB.language && AppLanguages.includes(appSettings.language)) {
    initialAppSettings.language = appSettingsIDB.language
  }

  if (appSettingsIDB.region && AppRegions.includes(appSettings.region)) {
    initialAppSettings.region = appSettingsIDB.region
  }

  if (appSettingsIDB.theme && AppThemes.includes(appSettings.theme)) {
    initialAppSettings.theme = appSettingsIDB.theme
  }

  if (appSettingsIDB.utteranceEnabled !== undefined) {
    initialAppSettings.utteranceEnabled = appSettingsIDB.utteranceEnabled
  }

  if (appSettingsIDB.reducedMotion !== undefined) {
    initialAppSettings.reducedMotion = appSettingsIDB.reducedMotion
  }

  return initialAppSettings
}
