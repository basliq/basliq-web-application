import { loadAppSettings } from './app-settings-loader/load-app-settings.ts'

export const loadConfig = () => {
  void loadAppSettings()
}
