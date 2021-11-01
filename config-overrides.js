const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                "@primary-color": "#29625f",//  тут меняем стили                
                "@layout-sider-background":"#29625f",
                "@layout-sider-background-light":"#29625f"
            }
        }
    }),
);