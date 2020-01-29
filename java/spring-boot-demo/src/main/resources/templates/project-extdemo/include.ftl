<link rel="shortcut icon" href="${base}/favicon.ico" type="images/x-icon">
<link rel="stylesheet" type="text/css" href="${base}/plugins/extjs6/theme-triton/resources/theme-triton-all.css" />
<link rel="stylesheet" type="text/css" href="${base}/project-extdemo/theme/common.css" />
<script type="text/javascript" src="${base}/plugins/jquery/jquery.min.js"></script>
<script type="text/javascript" src="${base}/plugins/extjs6/ext-all.js"></script>
<script type="text/javascript" src="${base}/plugins/extjs6/ext-locale-zh_CN.js"></script>
<script type="text/javascript" src="${base}/plugins/bowser/bowser.js"></script>
<script type="text/javascript" src="${base}/project-extdemo/js/common/string.extra.js"></script>
<script type="text/javascript" src="${base}/project-extdemo/js/common/ext.extra.js"></script>
<script type="text/javascript" src="${base}/project-extdemo/js/common/common.js"></script>
<script type="text/javascript" src="${base}/project-extdemo/js/common/array.extra.js"></script>
<script type="text/javascript" src="${base}/project-extdemo/js/common/column.extra.js"></script>

<script type="text/javascript">
    var base = '${base}';

    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            Irm: base + '/project-extdemo/js/extmvc'
        }
    });

    Ext.Ajax.setTimeout(5 * 60 * 1000);
    var proxyTimeout = 5 * 60 * 1000;

    // set document title
    document.title = 'Demo';

    // releases jQuery control of the '$' variable, specify a new custom name 'jq'
    var jq = $.noConflict();
</script>
<!--<script type="text/javascript" src="${base}/project-extdemo/js/business/header.js"></script>-->
