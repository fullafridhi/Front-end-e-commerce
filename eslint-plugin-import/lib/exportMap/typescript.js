'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.






























isEsModuleInterop = isEsModuleInterop;var _path = require('path');var _tsconfigLoader = require('tsconfig-paths/lib/tsconfig-loader');var _hash = require('eslint-module-utils/hash');var ts = void 0;var tsconfigCache = new Map();function readTsConfig(context) {var tsconfigInfo = (0, _tsconfigLoader.tsConfigLoader)({ cwd: context.parserOptions && context.parserOptions.tsconfigRootDir || process.cwd(), getEnv: function () {function getEnv(key) {return process.env[key];}return getEnv;}() });try {if (tsconfigInfo.tsConfigPath !== undefined) {// Projects not using TypeScript won't have `typescript` installed.
      if (!ts) {ts = require('typescript');} // eslint-disable-line import/no-extraneous-dependencies
      var configFile = ts.readConfigFile(tsconfigInfo.tsConfigPath, ts.sys.readFile);return ts.parseJsonConfigFileContent(configFile.config, ts.sys, (0, _path.dirname)(tsconfigInfo.tsConfigPath));}} catch (e) {// Catch any errors
  }return null;}function isEsModuleInterop(context) {var cacheKey = (0, _hash.hashObject)({ tsconfigRootDir: context.parserOptions && context.parserOptions.tsconfigRootDir }).digest('hex');
  var tsConfig = tsconfigCache.get(cacheKey);
  if (typeof tsConfig === 'undefined') {
    tsConfig = readTsConfig(context);
    tsconfigCache.set(cacheKey, tsConfig);
  }

  return tsConfig && tsConfig.options ? tsConfig.options.esModuleInterop : false;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHBvcnRNYXAvdHlwZXNjcmlwdC5qcyJdLCJuYW1lcyI6WyJpc0VzTW9kdWxlSW50ZXJvcCIsInRzIiwidHNjb25maWdDYWNoZSIsIk1hcCIsInJlYWRUc0NvbmZpZyIsImNvbnRleHQiLCJ0c2NvbmZpZ0luZm8iLCJjd2QiLCJwYXJzZXJPcHRpb25zIiwidHNjb25maWdSb290RGlyIiwicHJvY2VzcyIsImdldEVudiIsImtleSIsImVudiIsInRzQ29uZmlnUGF0aCIsInVuZGVmaW5lZCIsInJlcXVpcmUiLCJjb25maWdGaWxlIiwicmVhZENvbmZpZ0ZpbGUiLCJzeXMiLCJyZWFkRmlsZSIsInBhcnNlSnNvbkNvbmZpZ0ZpbGVDb250ZW50IiwiY29uZmlnIiwiZSIsImNhY2hlS2V5IiwiZGlnZXN0IiwidHNDb25maWciLCJnZXQiLCJzZXQiLCJvcHRpb25zIiwiZXNNb2R1bGVJbnRlcm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JnQkEsaUIsR0FBQUEsaUIsQ0EvQmhCLDRCQUNBLG9FQUNBLGdEQUVBLElBQUlDLFdBQUosQ0FDQSxJQUFNQyxnQkFBZ0IsSUFBSUMsR0FBSixFQUF0QixDQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCLENBQzdCLElBQU1DLGVBQWUsb0NBQWUsRUFDbENDLEtBQUtGLFFBQVFHLGFBQVIsSUFBeUJILFFBQVFHLGFBQVIsQ0FBc0JDLGVBQS9DLElBQWtFQyxRQUFRSCxHQUFSLEVBRHJDLEVBRWxDSSxxQkFBUSxnQkFBQ0MsR0FBRCxVQUFTRixRQUFRRyxHQUFSLENBQVlELEdBQVosQ0FBVCxFQUFSLGlCQUZrQyxFQUFmLENBQXJCLENBSUEsSUFBSSxDQUNGLElBQUlOLGFBQWFRLFlBQWIsS0FBOEJDLFNBQWxDLEVBQTZDLENBQzNDO0FBQ0EsVUFBSSxDQUFDZCxFQUFMLEVBQVMsQ0FBRUEsS0FBS2UsUUFBUSxZQUFSLENBQUwsQ0FBNkIsQ0FGRyxDQUVGO0FBRXpDLFVBQU1DLGFBQWFoQixHQUFHaUIsY0FBSCxDQUFrQlosYUFBYVEsWUFBL0IsRUFBNkNiLEdBQUdrQixHQUFILENBQU9DLFFBQXBELENBQW5CLENBQ0EsT0FBT25CLEdBQUdvQiwwQkFBSCxDQUNMSixXQUFXSyxNQUROLEVBRUxyQixHQUFHa0IsR0FGRSxFQUdMLG1CQUFRYixhQUFhUSxZQUFyQixDQUhLLENBQVAsQ0FLRCxDQUNGLENBWkQsQ0FZRSxPQUFPUyxDQUFQLEVBQVUsQ0FDVjtBQUNELEdBRUQsT0FBTyxJQUFQLENBQ0QsQ0FFTSxTQUFTdkIsaUJBQVQsQ0FBMkJLLE9BQTNCLEVBQW9DLENBQ3pDLElBQU1tQixXQUFXLHNCQUFXLEVBQzFCZixpQkFBaUJKLFFBQVFHLGFBQVIsSUFBeUJILFFBQVFHLGFBQVIsQ0FBc0JDLGVBRHRDLEVBQVgsRUFFZGdCLE1BRmMsQ0FFUCxLQUZPLENBQWpCO0FBR0EsTUFBSUMsV0FBV3hCLGNBQWN5QixHQUFkLENBQWtCSCxRQUFsQixDQUFmO0FBQ0EsTUFBSSxPQUFPRSxRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25DQSxlQUFXdEIsYUFBYUMsT0FBYixDQUFYO0FBQ0FILGtCQUFjMEIsR0FBZCxDQUFrQkosUUFBbEIsRUFBNEJFLFFBQTVCO0FBQ0Q7O0FBRUQsU0FBT0EsWUFBWUEsU0FBU0csT0FBckIsR0FBK0JILFNBQVNHLE9BQVQsQ0FBaUJDLGVBQWhELEdBQWtFLEtBQXpFO0FBQ0QiLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpcm5hbWUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IHRzQ29uZmlnTG9hZGVyIH0gZnJvbSAndHNjb25maWctcGF0aHMvbGliL3RzY29uZmlnLWxvYWRlcic7XG5pbXBvcnQgeyBoYXNoT2JqZWN0IH0gZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9oYXNoJztcblxubGV0IHRzO1xuY29uc3QgdHNjb25maWdDYWNoZSA9IG5ldyBNYXAoKTtcblxuZnVuY3Rpb24gcmVhZFRzQ29uZmlnKGNvbnRleHQpIHtcbiAgY29uc3QgdHNjb25maWdJbmZvID0gdHNDb25maWdMb2FkZXIoe1xuICAgIGN3ZDogY29udGV4dC5wYXJzZXJPcHRpb25zICYmIGNvbnRleHQucGFyc2VyT3B0aW9ucy50c2NvbmZpZ1Jvb3REaXIgfHwgcHJvY2Vzcy5jd2QoKSxcbiAgICBnZXRFbnY6IChrZXkpID0+IHByb2Nlc3MuZW52W2tleV0sXG4gIH0pO1xuICB0cnkge1xuICAgIGlmICh0c2NvbmZpZ0luZm8udHNDb25maWdQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFByb2plY3RzIG5vdCB1c2luZyBUeXBlU2NyaXB0IHdvbid0IGhhdmUgYHR5cGVzY3JpcHRgIGluc3RhbGxlZC5cbiAgICAgIGlmICghdHMpIHsgdHMgPSByZXF1aXJlKCd0eXBlc2NyaXB0Jyk7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcblxuICAgICAgY29uc3QgY29uZmlnRmlsZSA9IHRzLnJlYWRDb25maWdGaWxlKHRzY29uZmlnSW5mby50c0NvbmZpZ1BhdGgsIHRzLnN5cy5yZWFkRmlsZSk7XG4gICAgICByZXR1cm4gdHMucGFyc2VKc29uQ29uZmlnRmlsZUNvbnRlbnQoXG4gICAgICAgIGNvbmZpZ0ZpbGUuY29uZmlnLFxuICAgICAgICB0cy5zeXMsXG4gICAgICAgIGRpcm5hbWUodHNjb25maWdJbmZvLnRzQ29uZmlnUGF0aCksXG4gICAgICApO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIENhdGNoIGFueSBlcnJvcnNcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFc01vZHVsZUludGVyb3AoY29udGV4dCkge1xuICBjb25zdCBjYWNoZUtleSA9IGhhc2hPYmplY3Qoe1xuICAgIHRzY29uZmlnUm9vdERpcjogY29udGV4dC5wYXJzZXJPcHRpb25zICYmIGNvbnRleHQucGFyc2VyT3B0aW9ucy50c2NvbmZpZ1Jvb3REaXIsXG4gIH0pLmRpZ2VzdCgnaGV4Jyk7XG4gIGxldCB0c0NvbmZpZyA9IHRzY29uZmlnQ2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgaWYgKHR5cGVvZiB0c0NvbmZpZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0c0NvbmZpZyA9IHJlYWRUc0NvbmZpZyhjb250ZXh0KTtcbiAgICB0c2NvbmZpZ0NhY2hlLnNldChjYWNoZUtleSwgdHNDb25maWcpO1xuICB9XG5cbiAgcmV0dXJuIHRzQ29uZmlnICYmIHRzQ29uZmlnLm9wdGlvbnMgPyB0c0NvbmZpZy5vcHRpb25zLmVzTW9kdWxlSW50ZXJvcCA6IGZhbHNlO1xufVxuIl19