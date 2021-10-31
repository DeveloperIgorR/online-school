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
                "ant-layout-sider ant-layout-sider-dark ant-layout-sider-has-trigger":"min-width:250px",
                "ant-menu ant-menu-root ant-menu-inline ant-menu-dark":"background:#29625f"
            }
        }
    }),
);