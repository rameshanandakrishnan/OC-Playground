var oc=oc||{};oc.components=oc.components||{};oc.components['147cff726131851254ed5f22d683174db2578ced']=function(model){
  console.log("model",model);
  var modelHTML =  model.__html ? model.__html : '';
  var staticPath = model.reactComponent.props._staticPath;
  var props = JSON.stringify(model.reactComponent.props);
  var randomId = Math.random() * 10000000;
  var reactRootId = "oc-reactRoot-helloWorld-" + randomId;
  return '<style>.oc__helloWorld-styles-css__special__2USmlsSh{background:#db7093;color:#fff}</style>' +
    '<div id="'+ reactRootId +'" class="oc-reactRoot-helloWorld">' + modelHTML + '</div>' +
    '<script>' +
    'window.oc = window.oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    'oc.events.fire(\'oc:cssDidMount\', \'.oc__helloWorld-styles-css__special__2USmlsSh{background:#db7093;color:#fff}\');' +
      'oc.requireSeries([{"global":["Object","assign"],"url":"https://unpkg.com/es6-object-assign@1.1.0/dist/object-assign-auto.min.js","name":"Object.assign"},{"global":"PropTypes","url":"https://unpkg.com/prop-types@15.7.2/prop-types.min.js","name":"prop-types"},{"global":"React","url":"https://unpkg.com/react@17.0.2/umd/react.production.min.js","name":"react"},{"global":"ReactDOM","url":"https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js","name":"react-dom"}], function(){' +
        'oc.require(' +
          '["oc", "reactComponents", "ccd91ea97e7bc9e96bcdb4ad68ebad5d3292556e"],' + 
          '"' + staticPath + 'react-component.js",' +
          'function(ReactComponent){' +
            'console.log("Rendereddd!!!!!!!");' +
            'var parentContainer =  document.getElementById(dataId);'+
            'var isInSD =  !!(parentContainer && parentContainer.shadowRoot);'+
            'var targetNode = document.getElementById("'+ reactRootId +'");' +
            'if(isInSD){' +
            'targetNode = parentContainer.shadowRoot.getElementById("'+ reactRootId +'");' +
            '};' +
            'targetNode.setAttribute("id","");' +
            'ReactDOM.hydrate(React.createElement(ReactComponent,' +  props + '),targetNode);' +
          '}' +
        ');' +
      '});' +
    '});' +
  '</script>'
}