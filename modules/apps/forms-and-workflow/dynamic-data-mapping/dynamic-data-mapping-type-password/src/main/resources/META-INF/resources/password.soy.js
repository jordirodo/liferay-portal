// This file was automatically generated from password.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ddm.
 * @hassoydeltemplate {ddm.field}
 * @public
 */

if (typeof ddm == 'undefined') { var ddm = {}; }


ddm.__deltemplate_s2_316d888b = function(opt_data, opt_ignored) {
  return '' + ddm.password(opt_data);
};
if (goog.DEBUG) {
  ddm.__deltemplate_s2_316d888b.soyTemplateName = 'ddm.__deltemplate_s2_316d888b';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ddm.field'), 'password', 0, ddm.__deltemplate_s2_316d888b);


ddm.password = function(opt_data, opt_ignored) {
  return '<div class="form-group' + soy.$$escapeHtmlAttribute(opt_data.visible ? '' : ' hide') + ' liferay-ddm-form-field-password ' + soy.$$escapeHtmlAttribute(opt_data.tip ? 'liferay-ddm-form-field-has-tip' : '') + '" data-fieldname="' + soy.$$escapeHtmlAttribute(opt_data.name) + '">' + ((opt_data.showLabel) ? '<label class="control-label" for="' + soy.$$escapeHtmlAttribute(opt_data.name) + '">' + soy.$$escapeHtml(opt_data.label) + ((opt_data.required) ? '<span class="icon-asterisk text-warning"></span>' : '') + '</label>' + ((opt_data.tip) ? '<p class="liferay-ddm-form-field-tip">' + soy.$$escapeHtml(opt_data.tip) + '</p>' : '') : '') + '<div class="input-group-container ' + ((opt_data.tooltip) ? 'input-group-default' : '') + '"><input class="field form-control" dir="' + soy.$$escapeHtmlAttribute(opt_data.dir) + '" id="' + soy.$$escapeHtmlAttribute(opt_data.name) + '" name="' + soy.$$escapeHtmlAttribute(opt_data.name) + '" placeholder="' + soy.$$escapeHtmlAttribute(opt_data.placeholder) + '" ' + ((opt_data.readOnly) ? 'readonly' : '') + ' type="password" value="' + soy.$$escapeHtmlAttribute(opt_data.value) + '">' + ((opt_data.tooltip) ? '<span class="input-group-addon"><span class="input-group-addon-content"><a class="help-icon help-icon-default icon-monospaced icon-question" data-original-title="' + soy.$$escapeHtmlAttribute(opt_data.tooltip) + '" data-toggle="popover" href="javascript:;" title="' + soy.$$escapeHtmlAttribute(opt_data.tooltip) + '"></a></span></span>' : '') + '</div></div>';
};
if (goog.DEBUG) {
  ddm.password.soyTemplateName = 'ddm.password';
}
