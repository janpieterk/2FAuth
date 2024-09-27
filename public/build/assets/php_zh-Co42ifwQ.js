/*! 2FAuth version 5.3.0 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const t={"admin.admin":"管理员","admin.app_setup":"应用设置","admin.auth":"鉴权","admin.registrations":"注册","admin.users":"用户","admin.users_legend":"管理此实例上的已注册用户，或创建新的用户。","admin.admin_settings":"管理员设置","admin.create_new_user":"创建新用户","admin.new_user":"新用户","admin.search_user_placeholder":"用户名、邮箱…","admin.quick_filters_colons":"快速筛选：","admin.user_created":"用户创建成功","admin.confirm.delete_user":"您确定要删除此用户吗？此操作无法恢复。","admin.confirm.request_password_reset":"您确定要重置此用户的密码吗？","admin.confirm.purge_password_reset_request":"您确定要撤销之前的请求吗？","admin.confirm.delete_account":"您确定要删除此用户吗？","admin.confirm.edit_own_account":"这是您自己的账户，确定要继续吗？","admin.confirm.change_admin_role":"这将严重影响此用户的权限，确定要继续吗？","admin.confirm.demote_own_account":"您将失去管理员权限，确定要继续吗？","admin.logs":"日志","admin.administration_legend":"下列设置将在全局范围内生效，且影响所有用户。","admin.user_management":"用户管理","admin.oauth_provider":"OAuth 提供方","admin.account_bound_to_x_via_oauth":"此账户通过 OAuth 与 :provider 账户绑定","admin.last_seen_on_date":"最近活跃：:date","admin.registered_on_date":"注册于 :date","admin.updated_on_date":"更新于 :date","admin.access":"访问","admin.password_requested_on_t":"此用户已申请过密码重置 (申请时间 :datetime)，但未完成重置密码的操作，且此前发送的密码重置链接仍然有效。此请求可能是由用户自己或其他管理员发起的。","admin.password_request_expired":"此用户的密码重置请求已超时，意味着此用户未在有效期内完成密码重置。此请求可能是由用户自己或其他管理员发起的。","admin.resend_email":"重新发送邮件","admin.resend_email_title":"重新发送密码重置邮件给用户","admin.resend_email_help":"使用 <b>重新发送邮件</b> 来向用户发送新的密码重置邮件，以便用户可以设置新的密码。 此操作不会更改当前的密码，且之前的重置申请都将被撤销。","admin.reset_password":"重置密码","admin.reset_password_help":"使用 <b>重置密码</b> 来强制重置密码 (将会使用临时密码来覆盖用户当前的密码)，以便用户可以设置新密码。此操作会撤销之前的重置申请。","admin.reset_password_title":"重置用户密码","admin.password_successfully_reset":"密码重置成功","admin.user_has_x_active_pat":":count 个有效的令牌","admin.user_has_x_security_devices":":count 个安全设备 (通行密钥)","admin.revoke_all_pat_for_user":"吊销用户的所有令牌","admin.revoke_all_devices_for_user":"吊销用户的所有安全设备","admin.danger_zone":"危险选项","admin.delete_this_user_legend":"此用户所有的 2FA 数据将与此账户被一同删除。","admin.this_is_not_soft_delete":"数据将被永久删除，此操作无法恢复。","admin.delete_this_user":"删除此用户","admin.user_role_updated":"用户权限已更新","admin.pats_succesfully_revoked":"用户的令牌已成功吊销。","admin.security_devices_succesfully_revoked":"用户的安全设备已成功吊销。","admin.variables":"环境变量","admin.cache_cleared":"缓存已清除","admin.cache_optimized":"缓存已优化","admin.check_now":"立即检查","admin.view_on_github":"在 GitHub 上查看","admin.x_is_available":"新版本 :version 可用！","admin.successful_login_on":'成功登录于 <span class="light-or-darker">:login_at</span>',"admin.successful_logout_on":'成功退出于 <span class="light-or-darker">:login_at</span>',"admin.failed_login_on":'登录失败于 <span class="light-or-darker">:login_at</span>',"admin.viewed_on":'查看 <span class="light-or-darker">:login_at</span>',"admin.last_accesses":"最近访问","admin.see_full_log":"显示完整日志","admin.browser_on_platform":":platform 的 :browser","admin.access_log_has_more_entries":"访问日志包含更多条目。","admin.access_log_legend_for_user":"用户 :username 的完整访问日志","admin.show_last_month_log":"显示上个月的条目","admin.show_three_months_log":"显示最近 3 个月的条目","admin.show_six_months_log":"显示最近 6 个月的条目","admin.show_one_year_log":"显示上一年的条目","admin.sort_by_date_asc":"倒序显示最近访问","admin.sort_by_date_desc":"顺序显示最近访问","admin.single_sign_on":"单点登录（SSO）","admin.forms.use_encryption.label":"保护敏感数据","admin.forms.use_encryption.help":"敏感数据、2FA 秘钥和邮箱地址会以加密形式储存在数据库中。请务必备份您在 .env 中设置的 APP_KEY 的值 (或备份整个 .env 文件)。如果此密钥丢失，那么已加密的数据将无法解密。","admin.forms.restrict_registration.label":"限制注册","admin.forms.restrict_registration.help":"只允许范围内的邮箱地址进行注册，下列的两条规则可以同时使用。SSO 注册流程不受此限制的影响。","admin.forms.restrict_list.label":"过滤列表","admin.forms.restrict_list.help":'仅允许此列表中的邮箱进行注册，用管道符 "|" 来分隔多个地址。',"admin.forms.restrict_rule.label":"过滤规则","admin.forms.restrict_rule.help":"仅允许匹配正则表达式的邮箱地址进行注册","admin.forms.disable_registration.label":"关闭注册","admin.forms.disable_registration.help":"防止新用户注册。除非被覆盖 (见下文)。此设置也会影响到 SSO 的注册流程，所以新用户将无法通过 SSO 登录","admin.forms.enable_sso.label":"启用 SSO","admin.forms.enable_sso.help":"允许访客通过单点登录的方式，使用外部 ID 进行身份验证","admin.forms.use_sso_only.label":"仅使用 SSO","admin.forms.use_sso_only.help":"Make SSO the only available method to log in to 2FAuth. Password login and Webauthn are then disabled for regular users. Administrators are not affected by this restriction.","admin.forms.keep_sso_registration_enabled.label":"保持启用 SSO 注册","admin.forms.keep_sso_registration_enabled.help":"在注册已禁用时允许新用户通过 SSO 登录","admin.forms.is_admin.label":"管理员","admin.forms.is_admin.help":"授予用户管理员权限。管理员有权管理整个应用，如调整 “设置” 和管理其他用户，但管理员无法对不属于他们的 2FA 创建密码。","admin.forms.test_email.label":"测试送信配置","admin.forms.test_email.help":"发送测试邮件来验证送信配置是否正确。如果发送邮件的配置不正确，用户将无法请求重置密码。","admin.forms.test_email.email_will_be_send_to_x":'邮件将被发送到 <span class="is-family-code has-text-info">:email</span>',"admin.forms.health_endpoint.label":"Health endpoint","admin.forms.health_endpoint.help":"URL you can visit to check the health of this 2FAuth instance. This URL can be used to set up a Docker HEALTHCHECK or a Kubernetes HTTPS Liveness probe.","admin.forms.cache_management.label":"缓存管理","admin.forms.cache_management.help":"某些情况下需要清除缓存，例如更改了环境变量，或更新了应用。您可以在此处进行缓存清理。","auth.failed":"登录信息错误","auth.password":"密码错误","auth.throttle":"您尝试登录的次数过多，请 :seconds 秒后再试。","auth.sign_out":"退出","auth.sign_in":"登录","auth.sign_in_using":"登录方式：","auth.if_administrator":"Administrator?","auth.sign_in_here":"You can sign without SSO","auth.or_continue_with":"您也可以使用：","auth.password_login_and_webauthn_are_disabled":"Password login and WebAuthn are disabled.","auth.sign_in_using_sso":"Pick an SSO provider to sign in with:","auth.no_provider":"no provider","auth.no_sso_provider_or_provider_is_missing":"Provider is missing?","auth.see_how_to_enable_sso":"See how to enable a provider","auth.sign_in_using_security_device":"使用安全设备登录","auth.login_and_password":"用户名和密码","auth.register":"注册","auth.welcome_to_2fauth":"欢迎使用 2FAuth","auth.autolock_triggered":"自动锁定已触发","auth.autolock_triggered_punchline":"自动锁定已触发，您已被自动退出登录。","auth.already_authenticated":"您已登录，请先退出登录。","auth.authentication":"身份认证","auth.maybe_later":"以后再说","auth.user_account_controlled_by_proxy":"此账户由身份代理提供。<br />请在身份代理中进行管理。","auth.auth_handled_by_proxy":"账户验证已被身份代理接管，下列设置已被禁用。<br />请在身份代理中进行管理。","auth.sso_only_x_settings_are_disabled":"Authentication is restricted to SSO only, :auth_method is disabled","auth.confirm.logout":"您确定要退出吗？","auth.confirm.revoke_device":"您确定要删除此设备吗？","auth.confirm.delete_account":"您确定要删除您的账户吗？","auth.webauthn.security_device":"安全设备","auth.webauthn.security_devices":"安全设备","auth.webauthn.security_devices_legend":"您可以用来登录 2FAuth 的认证设备，例如安全密钥 (如 Yubikey) 或具有生物识别能力的智能手机 (如 Apple FaceID / TouchID)","auth.webauthn.enhance_security_using_webauthn":`您可以启用 WebAuthn 身份验证来增强您 2FAuth 账户的安全性。<br /><br />
WebAuthn 允许您使用受信任的设备 (如 Yubikeys 或具有生物识别功能的智能手机) 来安全、快捷地进行登录验证。`,"auth.webauthn.use_security_device_to_sign_in":"若要使用您的某个安全设备进行身份验证，请插入您的密钥设备，并摘下口罩或手套。","auth.webauthn.lost_your_device":"设备已遗失？","auth.webauthn.recover_your_account":"恢复您的账号","auth.webauthn.account_recovery":"恢复账号","auth.webauthn.recovery_punchline":"2FAuth 将向此邮箱发送账户恢复链接。请点击邮件中的链接，并跟随引导操作。<br /><br />为了保证安全性，请务必在您自己的设备上进行操作。","auth.webauthn.send_recovery_link":"发送恢复链接","auth.webauthn.account_recovery_email_sent":"账号恢复邮件已发送！","auth.webauthn.disable_all_security_devices":"禁用所有安全设备","auth.webauthn.disable_all_security_devices_help":"将吊销您所有的安全设备。若某个设备已遗失或不再安全，请点击此选项。","auth.webauthn.register_a_new_device":"注册新设备","auth.webauthn.register_a_device":"注册设备","auth.webauthn.device_successfully_registered":"设备注册成功","auth.webauthn.device_revoked":"设备吊销成功","auth.webauthn.revoking_a_device_is_permanent":"设备吊销后无法恢复","auth.webauthn.recover_account_instructions":"为了恢复您的账户，2FAuth 将会重置部分 Webauthn 相关的设置，以便您可以使用邮箱和密码进行登录。","auth.webauthn.invalid_recovery_token":"恢复令牌无效","auth.webauthn.webauthn_login_disabled":"Webauthn 登录已被禁用","auth.webauthn.invalid_reset_token":"此密码重置令牌无效","auth.webauthn.rename_device":"重命名设备","auth.webauthn.my_device":"我的设备","auth.webauthn.unknown_device":"未知设备","auth.webauthn.use_webauthn_only.label":"仅允许 WebAuthn","auth.webauthn.use_webauthn_only.help":`将 WebAuthn 设为 2FAuth 的唯一鉴权方式。若要发挥 WebAuth 的最佳安全性，推荐启用此选项。<br /><br />
                当设备丢失时， 您可以重置此选项来恢复您的账户，并使用您的电子邮件和密码来登录。<br /><br />
                请注意！ 此选项启用后仍会显示邮箱和密码的登录界面，但尝试登录时永远会提示 “身份验证失败”。`,"auth.webauthn.need_a_security_device_to_enable_options":"若要启用下列选项，请添加 1 个 WebAuthn 设备。","auth.webauthn.options":"选项","auth.forms.name":"用户名","auth.forms.login":"登录","auth.forms.webauthn_login":"使用 WebAuthn 登录","auth.forms.sso_login":"SSO login","auth.forms.email":"邮箱","auth.forms.password":"密码","auth.forms.reveal_password":"显示密码","auth.forms.hide_password":"隐藏密码","auth.forms.confirm_password":"再次确认密码","auth.forms.new_password":"新密码","auth.forms.confirm_new_password":"再次确认新密码","auth.forms.dont_have_account_yet":"还没有账户？","auth.forms.already_register":"已经注册？","auth.forms.authentication_failed":"验证失败","auth.forms.forgot_your_password":"忘记密码？","auth.forms.request_password_reset":"重置密码","auth.forms.reset_your_password":"重置您的密码","auth.forms.reset_password":"重置密码","auth.forms.disabled_in_demo":"此功能在演示模式下被禁用","auth.forms.sso_only_form_restricted_to_admin":"Regular users must sign in with SSO. Other methods are for administrators only.","auth.forms.current_password.label":"当前密码","auth.forms.current_password.help":"输入您当前的密码以确认是您本人","auth.forms.change_password":"修改密码","auth.forms.send_password_reset_link":"发送密码重置链接","auth.forms.password_successfully_reset":"密码重置成功","auth.forms.edit_account":"编辑账户","auth.forms.profile_saved":"个人资料更新成功！","auth.forms.welcome_to_demo_app_use_those_credentials":"欢迎来到 2FAuth 的演示站点。<br><br>您可以使用邮箱 <strong>demo@2fauth.app</strong> 和密码 <strong>demo</strong> 来登录。","auth.forms.welcome_to_testing_app_use_those_credentials":"欢迎来到 2FAuth 的测试实例。<br><br>您可以使用邮箱 <strong>testing@2fauth.app</strong> 和密码 <strong>password</strong> 来登录。","auth.forms.register_punchline":"欢迎使用 <b>2FAuth</b>。<br/>您需要一个账号才能继续，请先完成注册。","auth.forms.reset_punchline":"2FAuth 将向此邮箱发送密码重置链接，请点击邮件中的链接设置新密码。","auth.forms.name_this_device":"命名此设备","auth.forms.delete_account":"删除账户","auth.forms.delete_your_account":"删除您的账户","auth.forms.delete_your_account_and_reset_all_data":"您所有的 2FA 数据将与此账户被一同删除，此操作无法恢复。","auth.forms.reset_your_password_to_delete_your_account":"如果您经常使用 SSO 登录，您可以在退出登录后，使用 “重置密码” 功能获取密码来填写此表格中的对应项目。","auth.forms.deleting_2fauth_account_does_not_impact_provider":"删除 2FAuth 账户不会影响您的外部 SSO 账户。","auth.forms.user_account_successfully_deleted":"账号删除成功","auth.forms.has_lower_case":"包含小写字母","auth.forms.has_upper_case":"包含大写字母","auth.forms.has_special_char":"包含特殊字符","auth.forms.has_number":"包含数字","auth.forms.is_long_enough":"至少 8 位","auth.forms.mandatory_rules":"必须","auth.forms.optional_rules_you_should_follow":"建议 (更安全)","auth.forms.caps_lock_is_on":"大写锁定已打开","auth.sso_providers.unknown":"unknown","auth.sso_providers.github":"Github","auth.sso_providers.openid":"OpenID","commons.cancel":"取消","commons.update":"更新","commons.copy":"复制","commons.copy_to_clipboard":"复制到剪贴板","commons.copied_to_clipboard":"已复制","commons.profile":"个人资料","commons.edit":"编辑","commons.delete":"删除","commons.disable":"禁用","commons.enable":"启用","commons.create":"创建","commons.save":"保存","commons.close":"关闭","commons.clear":"清空","commons.clear_search":"清除搜索结果","commons.demo_do_not_post_sensitive_data":"这是一个演示应用，请不要上传任何敏感数据","commons.testing_do_not_post_sensitive_data":"这是一个测试应用，请不要上传任何敏感数据","commons.x_selected":"已选择 :count 个","commons.name":"名称","commons.manage":"管理","commons.done":"完成","commons.new":"新建","commons.back":"返回","commons.move":"移动","commons.export":"导出","commons.all":"全部","commons.check_all":"全选","commons.select_all":"全选","commons.clear_selection":"清除选择","commons.sort_descending":"降序排列","commons.sort_ascending":"升序排序","commons.rename":"重命名","commons.new_name":"新名称","commons.options":"选项","commons.reload":"刷新","commons.refresh":"刷新","commons.data_refreshed_to_reflect_server_changes":"数据已与服务器同步","commons.generate":"生成","commons.generating_otp":"正在生成 OTP","commons.open_in_browser":"在浏览器中打开","commons.continue":"继续","commons.discard":"放弃","commons.about":"关于","commons.usefull_links":"实用网站","commons.environment":"环境变量","commons.credits":"鸣谢","commons.2fauth_teaser":"本网页 App 可助您管理两步验证 (2FA) 账户，并生成对应的验证码","commons.made_with":"基于","commons.ui_icons_by":"UI 图标来自","commons.logos_by":"Logo 来自","commons.search":"搜索​​​​","commons.resources":"资源","commons.check_for_update":"检查更新","commons.check_for_update_help":"自动检查更新 (每周一次)。当在 Github 上发现 2FAuth 的新版本时会发出更新提醒","commons.you_are_up_to_date":"已是最新版","commons.2fauth_description":"本网页 App 可助您管理两步验证 (2FA) 账户，并生成对应的验证码","commons.image_of_qrcode_to_scan":"要扫描的二维码图像","commons.file":"文件","commons.or":"或","commons.close_the_x_page":"关闭 {pagetitle} 页","commons.submit":"提交","commons.default":"默认值","commons.back_to_home":"返回首页","commons.nothing":"无","commons.no_result":"无结果","commons.information":"信息","commons.send":"发送","commons.optimize":"优化","commons.IP":"IP 地址","commons.browser":"浏览器","commons.operating_system_short":"系统版本","commons.no_entry_yet":"暂无记录","commons.time":"时间","commons.ip_address":"IP 地址","commons.device":"设备","commons.one_month":"1 个月","commons.x_month":":x 个月","commons.one_year":"1 年","errors.resource_not_found":"找不到资源","errors.error_occured":"发生错误：","errors.refresh":"刷新","errors.no_valid_otp":"此二维码中没有有效的 OTP 字段","errors.something_wrong_with_server":"服务器发生内部错误","errors.Unable_to_decrypt_uri":"无法解密 uri","errors.not_a_supported_otp_type":"不支持此 OTP 格式","errors.cannot_create_otp_without_secret":"无法在无密码的情况下创建一个 OTP","errors.data_of_qrcode_is_not_valid_URI":"此二维码的数据不是有效的 OTP Auth URI。此二维码包含：","errors.wrong_current_password":"当前密码错误，更改已取消","errors.error_during_encryption":"加密失败，您的数据库仍处于未保护状态。","errors.error_during_decryption":"解密失败，您的数据库仍处于保护状态。这通常是因为某个或多个账户的加密数据的完整性存在问题而导致的。","errors.qrcode_cannot_be_read":"二维码无效","errors.too_many_ids":"查询参数中包含太多 ID，最多允许 100 个","errors.delete_user_setting_only":"只能删除由用户创建的设置","errors.indecipherable":"*无法解析*","errors.cannot_decipher_secret":"无法解密，可能是因为 2FAuth 的 .env 文件中 APP_KEY 值的设置错误，或存储在数据库中的数据已损坏。","errors.https_required":"需要 HTTPS","errors.browser_does_not_support_webauthn":"您的设备不支持 Webauthn，请尝试换用新版浏览器并重试。","errors.aborted_by_user":"被用户中止","errors.security_device_already_registered":"设备已被注册过","errors.not_allowed_operation":"不允许此操作","errors.no_authenticator_support_specified_algorithms":"此算法没有任何身份验证器支持","errors.authenticator_missing_discoverable_credential_support":"身份验证器暂不兼容可识别凭据","errors.authenticator_missing_user_verification_support":"身份验证器暂不兼容用户验证","errors.unknown_error":"未知错误","errors.security_error_check_rpid":"安全错误<br/>请检查您的 WEBAUTHN_ID 环境变量","errors.2fauth_has_not_a_valid_domain":"2FAuth 的域名无效","errors.user_id_not_between_1_64":"用户 ID 需为 1 至 64 个字符内","errors.no_entry_was_of_type_public_key":"没有类型为 “公钥” 的条目","errors.unsupported_with_reverseproxy":"Not applicable when using an auth proxy or SSO","errors.unsupported_with_sso_only":"This authentication method is for administrators only. Users must log in with SSO.","errors.user_deletion_failed":"账户删除失败，数据未被删除","errors.auth_proxy_failed":"身份代理认证失败","errors.auth_proxy_failed_legend":"已为 2FAuth 配置了前置的身份代理，但身份代理并没有返回正确的请求头，请检查您的配置并重试。","errors.invalid_x_migration":"无效或不兼容的 :appname 数据","errors.invalid_2fa_data":"无效的 2FA 数据","errors.unsupported_migration":"不兼容的数据格式","errors.unsupported_otp_type":"不兼容的 OTP 类型","errors.encrypted_migration":"无法读取，数据可能已被加密","errors.no_logo_found_for_x":"没有为 :service 找到可用的 Logo","errors.file_upload_failed":"文件上传失败","errors.unauthorized":"无权限","errors.unauthorized_legend":"您无权查看此资源或执行此操作","errors.cannot_delete_the_only_admin":"无法删除唯一的管理员账户","errors.cannot_demote_the_only_admin":"无法降级此唯一的管理员账户","errors.error_during_data_fetching":"💀 获取数据时出错","errors.check_failed_try_later":"检查失败，请稍后重试","errors.sso_disabled":"SSO 已禁用","errors.sso_bad_provider_setup":"您未在 .env 文件中正确配置此 SSO 提供方","errors.sso_failed":"SSO 验证被拒绝","errors.sso_no_register":"已停用注册","errors.sso_email_already_used":"已存在相同邮箱的账户，但不匹配您的外部账户 ID 。如果您已使用此邮箱在 2FAuth 上注册过，请不要使用 SSO。","errors.account_managed_by_external_provider":"由外部提供方管理的账户","errors.data_cannot_be_refreshed_from_server":"无法从服务器刷新数据","errors.no_pwd_reset_for_this_user_type":"无法为此用户重置密码","errors.cannot_detect_qrcode_in_image":"未在图像中检测到二维码，请裁切图像后再试","errors.cannot_decode_detected_qrcode":"二维码已识别，但解码失败，请裁切或锐化图像后再试","errors.qrcode_has_invalid_checksum":"二维码的校验码错误","errors.no_readable_qrcode":"没有可识别的二维码","groups.groups":"分组","groups.create_group":"新建分组","groups.show_group_selector":"显示分组筛选","groups.hide_group_selector":"隐藏分组筛选","groups.select_accounts_to_show":"选择要显示的账户分组","groups.x_accounts":":count 个账户","groups.manage_groups":"管理分组","groups.active_group":"最近更新","groups.manage_groups_legend":"您可以创建并按分组的形式来整理您的账户。无论账户处于哪个组内，都将在 “全部” 分组中显示。","groups.deleting_group_does_not_delete_accounts":"删除分组不会删除账户","groups.move_selected_to":"移动所选项到","groups.move_selected_to_group":"将所选移入分组中","groups.no_group":"没有分组","groups.change_group":"更改分组","groups.group_successfully_created":"分组创建成功","groups.group_name_saved":"分组名称已保存","groups.group_successfully_deleted":"分组删除成功","groups.forms.new_group":"新建分组","groups.forms.new_name":"新名称","groups.forms.rename_group":"重命名分组","groups.confirm.delete":"您确定要删除此分组吗？","languages.browser_preference":"跟随浏览器语言","languages.en":"English (英语)","languages.fr":"Français (法语)","languages.de":"Deutsch (德语)","languages.es":"Español (西班牙语)","languages.zh":"中文 (简体中文)","languages.ru":"Русский (俄语)","languages.bg":"Български (保加利亚语)","languages.ja":"日本語 (日语)","languages.hi":"हिंदी (印地语)","languages.tr":"Türkçe (土耳其语)","notifications.hello":"您好","notifications.hello_user":"您好，:username，","notifications.regards":"此致","notifications.test_email_settings.subject":"2FAuth 测试邮件","notifications.test_email_settings.reason":"之所以您会收到这封邮件，是因为您请求了一封测试邮件来验证您 2FAuth 的电子邮件送信配置。","notifications.test_email_settings.success":"恭喜您，功能正常 :)","notifications.new_device.subject":"来自新设备的访问","notifications.new_device.resume":"一台新设备刚被添加到您的 2FAuth 账户上。","notifications.new_device.connection_details":"这是本次事件的相关信息","notifications.new_device.recommandations":"如果是您操作的，您可以忽略此告警。如果您怀疑您的账户有任何可疑活动，请立即更改您的密码。","notifications.failed_login.subject":"2FAuth 登录失败","notifications.failed_login.resume":"您的 2FAuth 账户触发了一次登录失败。","notifications.failed_login.connection_details":"这是本次事件的相关信息","notifications.failed_login.recommandations":"如果是您操作的，您可以忽略此告警。如果持续有失败的登录尝试，您应立即通知 2FAuth 的管理员去检查相关的安全设置，并对此攻击者采取措施。","pagination.previous":"&laquo; 上一页","pagination.next":"下一页 &raquo;","passwords.reset":"密码重置成功！","passwords.sent":"密码重置邮件已发送！","passwords.throttled":"请稍候再试。","passwords.token":"密码重置令牌无效。","passwords.user":"找不到此邮箱对应的用户。","passwords.password":"密码至少为 8 位，且两次输入的内容必须相同。","settings.settings":"设置","settings.preferences":"偏好设置","settings.account":"账户","settings.oauth":"OAuth","settings.webauthn":"WebAuthn","settings.tokens":"令牌","settings.options":"选项","settings.user_preferences":"用户偏好","settings.admin_settings":"管理员设置","settings.confirm.revoke":"您确定要吊销此令牌吗？","settings.you_are_administrator":"您是管理员","settings.account_linked_to_sso_x_provider":"您当前是通过 :provider 登录的，因此无法在此处更改信息，请回到 :provider 进行操作。","settings.general":"通用","settings.security":"安全","settings.notifications":"通知","settings.profile":"配置文件","settings.change_password":"更改密码","settings.personal_access_tokens":"个人访问令牌","settings.token_legend":"任何应用都能够通过个人访问令牌来与 2Fauth API 进行鉴权。您需要在第三方应用的请求头中，提供此令牌作为 Bearer 令牌。","settings.generate_new_token":"生成新令牌","settings.revoke":"吊销","settings.token_revoked":"已成功吊销令牌","settings.revoking_a_token_is_permanent":"令牌吊销后无法恢复","settings.make_sure_copy_token":"请确保您已复制个人访问令牌！此令牌仅展示这一次。","settings.data_input":"数据录入","settings.forms.edit_settings":"编辑设置","settings.forms.setting_saved":"设置已保存","settings.forms.new_token":"新建令牌","settings.forms.some_translation_are_missing":"发现有词条缺少翻译吗？","settings.forms.help_translate_2fauth":"协助翻译 2FAuth！","settings.forms.language.label":"语言","settings.forms.language.help":"2FAuth 用户界面的显示语言。以下仅列出完成翻译的语言，请选择的一个语言来覆盖当前的设置。","settings.forms.timezone.label":"时区","settings.forms.timezone.help":"设置本 App 中所有日期与时间的时区","settings.forms.show_otp_as_dot.label":'隐藏 <abbr title="One-Time Password">OTP</abbr> 验证码',"settings.forms.show_otp_as_dot.help":"使用星号来遮挡明文验证码。启用此功能不会影响复制和粘贴功能。","settings.forms.reveal_dotted_otp.label":'显示被星号遮挡的 <abbr title="One-Time Password">OTP</abbr> 验证码',"settings.forms.reveal_dotted_otp.help":"临时允许验证码以明文显示","settings.forms.close_otp_on_copy.label":'复制后关闭 <abbr title="One-Time Password">OTP</abbr> 验证码',"settings.forms.close_otp_on_copy.help":"点击某个验证码即可复制并隐藏显示","settings.forms.auto_close_timeout.label":'自动关闭 <abbr title="One-Time Password">OTP</abbr> 验证码',"settings.forms.auto_close_timeout.help":"超时后自动隐藏明文显示的验证码。如果您忘记退出验证码界面，此功能可以避免非必要的验证码刷新请求。","settings.forms.clear_search_on_copy.label":"复制后清空搜索框","settings.forms.clear_search_on_copy.help":"复制验证码后立即清空搜索框","settings.forms.sort_case_sensitive.label":"按大小写排序","settings.forms.sort_case_sensitive.help":"选中时，强制 “排序” 功能以大小写敏感的方式对账户进行排序","settings.forms.copy_otp_on_display.label":'当 <abbr title="One-Time Password">OTP</abbr> 显示时复制',"settings.forms.copy_otp_on_display.help":'当验证码显示时立即复制。由于浏览器的限制，仅能复制第一个 <abbr title="Time-based One-Time Password">TOTP</abbr> 验证码，后续刷新的无法自动复制。',"settings.forms.use_basic_qrcode_reader.label":"使用简版二维码扫描器","settings.forms.use_basic_qrcode_reader.help":"如果你在扫描二维码时遇到问题，此选项可以切换到更简单但更可靠的二维码扫描器","settings.forms.display_mode.label":"显示模式","settings.forms.display_mode.help":"选择以列表或网格的方式显示所有的账户","settings.forms.password_format.label":"密码格式","settings.forms.password_format.help":"分段显示验证码，提高可读性并且便于记忆","settings.forms.pair":"两位一组","settings.forms.pair_legend":"以两位为一组进行分隔","settings.forms.trio_legend":"以三位为一组进行分隔","settings.forms.half_legend":"平均拆分位两组","settings.forms.trio":"三位一组","settings.forms.half":"对半分组","settings.forms.grid":"网格","settings.forms.list":"列表","settings.forms.theme.label":"主题","settings.forms.theme.help":"强制一个特定主题，或跟随系统 / 浏览器的设置","settings.forms.light":"亮色","settings.forms.dark":"暗色","settings.forms.automatic":"自动","settings.forms.show_accounts_icons.label":"显示图标","settings.forms.show_accounts_icons.help":"在主视图中显示应用图标","settings.forms.get_official_icons.label":"获取官方图标","settings.forms.get_official_icons.help":"在添加账户时，尝试获取 2FA 提供方的官方图标","settings.forms.auto_lock.label":"自动锁定","settings.forms.auto_lock.help":"在不活跃时自动退出登录。当使用身份代理，或没有配置自定义注销 URL 时无效。","settings.forms.default_group.label":"默认分组","settings.forms.default_group.help":"新创建的账户所关联的分组","settings.forms.view_default_group_on_copy.label":"在复制后显示默认分组","settings.forms.view_default_group_on_copy.help":"复制 OTP 验证码后总是返回到默认分组","settings.forms.auto_save_qrcoded_account.label":"自动保存账户","settings.forms.auto_save_qrcoded_account.help":"扫描或上传二维码后，新账户会被自动录入，无需点击 ”保存“ 按钮。","settings.forms.useDirectCapture.label":"直接录入","settings.forms.useDirectCapture.help":"决定是否要在您录入时弹出录入模式选单，或者直接使用默认的录入模式","settings.forms.defaultCaptureMode.label":"默认录入模式","settings.forms.defaultCaptureMode.help":"直接录入模式启用时所使用的默认录入模式","settings.forms.remember_active_group.label":"记住分组筛选器","settings.forms.remember_active_group.help":"记住上次筛选出的分组，并在下次访问时展示","settings.forms.otp_generation.label":"显示验证码","settings.forms.otp_generation.help":'设置 <abbr title="One-Time Passwords">OTPs</abbr> 验证码的显示方式和时间。<br/>',"settings.forms.notify_on_new_auth_device.label":"来自新设备时","settings.forms.notify_on_new_auth_device.help":"当新设备首次登录时发送邮件通知","settings.forms.notify_on_failed_login.label":"登录失败时","settings.forms.notify_on_failed_login.help":"每次登录失败时都发送邮件通知","settings.forms.otp_generation_on_request":"点击 / 单击账户后","settings.forms.otp_generation_on_request_legend":"在独立页面中显示","settings.forms.otp_generation_on_request_title":"点击账户后，在独立页面中打开并获取验证码","settings.forms.otp_generation_on_home":"始终","settings.forms.otp_generation_on_home_legend":"全部在主页中显示","settings.forms.otp_generation_on_home_title":"所有验证码都在主页中显示，不做任何操作","settings.forms.never":"从不","settings.forms.on_otp_copy":"复制验证码后","settings.forms.1_minutes":"1 分钟后","settings.forms.2_minutes":"2 分钟后","settings.forms.5_minutes":"5 分钟后","settings.forms.10_minutes":"10 分钟后","settings.forms.15_minutes":"15 分钟后","settings.forms.30_minutes":"30 分钟后","settings.forms.1_hour":"1 小时后","settings.forms.1_day":"1 天后","settings.forms.livescan":"扫描二维码","settings.forms.upload":"上传二维码","settings.forms.advanced_form":"高级表单","titles.404":"找不到项目","titles.start":"新账户","titles.capture":"扫描二维码","titles.accounts":"账户","titles.createAccount":"创建账户","titles.importAccounts":"导入账户","titles.editAccount":"编辑账户","titles.showQRcode":"二维码形式的账户","titles.groups":"分组","titles.createGroup":"创建分组","titles.editGroup":"编辑分组","titles.settings.options":"选项","titles.settings.account":"用户账户","titles.settings.oauth.tokens":"OAuth 令牌","titles.settings.oauth.generatePAT":"新建个人令牌","titles.settings.webauthn.editCredential":"编辑设备","titles.settings.webauthn.devices":"WebAuthn 设备","titles.login":"登录","titles.register":"注册","titles.autolock":"自动锁定","titles.password.request":"重置密码","titles.password.reset":"新密码","titles.webauthn.lost":"恢复账号","titles.webauthn.recover":"注册新设备","titles.flooded":"请求数过多","titles.genericError":"错误","titles.about":"关于","titles.admin.appSetup":"应用设置","titles.admin.users":"用户管理","titles.admin.createUser":"创建用户","titles.admin.manageUser":"管理用户","titles.admin.logs.access":"访问日志","twofaccounts.service":"服务","twofaccounts.account":"账户","twofaccounts.icon":"图标","twofaccounts.icon_to_illustrate_the_account":"账户对应的图标","twofaccounts.remove_icon":"移除图标","twofaccounts.no_account_here":"无 2FA 账户！","twofaccounts.add_first_account":"选择一个添加方法，创建您的第一个账户","twofaccounts.use_full_form":"或通过填写表单创建","twofaccounts.add_one":"添加一个","twofaccounts.show_qrcode":"显示二维码","twofaccounts.no_service":"- 无服务 -","twofaccounts.account_created":"账户创建成功","twofaccounts.account_updated":"账户更新成功","twofaccounts.accounts_deleted":"账户删除成功","twofaccounts.accounts_moved":"账户移动成功","twofaccounts.export_selected_to_json":"将所选账号以 JSON 格式导出","twofaccounts.reveal":"显示","twofaccounts.forms.service.placeholder":"服务名称","twofaccounts.forms.account.placeholder":"账户名称","twofaccounts.forms.new_account":"新建账户","twofaccounts.forms.edit_account":"编辑账户","twofaccounts.forms.otp_uri":"OTP Uri","twofaccounts.forms.scan_qrcode":"扫描二维码","twofaccounts.forms.upload_qrcode":"上传二维码","twofaccounts.forms.use_advanced_form":"使用高级表单","twofaccounts.forms.prefill_using_qrcode":"使用二维码来填写","twofaccounts.forms.use_qrcode.val":"使用二维码","twofaccounts.forms.use_qrcode.title":"使用二维码来自动填写表单","twofaccounts.forms.unlock.val":"解锁","twofaccounts.forms.unlock.title":"解锁 (注意安全风险)","twofaccounts.forms.lock.val":"锁定","twofaccounts.forms.lock.title":"锁定","twofaccounts.forms.choose_image":"上传","twofaccounts.forms.i_m_lucky":"手气不错","twofaccounts.forms.i_m_lucky_legend":"“手气不错” 功能可以尝试获取此服务的官方图标。若要提高成功率，请在 “服务名称” 栏中以英文输入服务名。(测试中的功能)","twofaccounts.forms.test":"测试","twofaccounts.forms.group.label":"Group","twofaccounts.forms.group.help":"The group to which the account is to be assigned","twofaccounts.forms.secret.label":"密钥","twofaccounts.forms.secret.help":"用于生成安全码的密钥","twofaccounts.forms.plain_text":"纯文本","twofaccounts.forms.otp_type.label":'选择要创建的 <abbr title="One-Time Password">OTP</abbr>  令牌类型',"twofaccounts.forms.otp_type.help":"TOTP，HOTP 或 Steam OTP","twofaccounts.forms.digits.label":"码长","twofaccounts.forms.digits.help":"生成的验证码位数","twofaccounts.forms.algorithm.label":"算法","twofaccounts.forms.algorithm.help":"验证码的加密算法","twofaccounts.forms.period.label":"周期","twofaccounts.forms.period.placeholder":"默认为 30","twofaccounts.forms.period.help":"验证码的有效期 (秒)","twofaccounts.forms.counter.label":"计数器","twofaccounts.forms.counter.placeholder":"默认为 0","twofaccounts.forms.counter.help":"计数器的初始值","twofaccounts.forms.counter.help_lock":"如果计数器设置错误，可能会导致此验证码与账户校验失败，如果您不了解此功能，请勿随意编辑。您可以点击 “锁定” 图标来解锁编辑，但请务必小心。","twofaccounts.forms.image.label":"图像","twofaccounts.forms.image.placeholder":"http://...","twofaccounts.forms.image.help":"图像 URL，用作账户图标","twofaccounts.forms.options_help":"如果您不了解下列选项，请将对应选项留空来使用默认配置。","twofaccounts.forms.alternative_methods":"备选方法","twofaccounts.forms.spaces_are_ignored":"无用的空格将被自动删除","twofaccounts.stream.live_scan_cant_start":"无法启动扫描 :(","twofaccounts.stream.need_grant_permission.reason":"2FAuth 没有权限访问您的相机","twofaccounts.stream.need_grant_permission.solution":"2FAuth 需要您的授权才能使用此设备上的相机。如果您已点击过 “拒绝”，且您的浏览器没有再次提示您进行授权，请查找浏览器的文档以了解如何重新授权。","twofaccounts.stream.need_grant_permission.click_camera_icon":"通常情况下，您可以点击浏览器地址栏中 (或旁边) 的相机图标来继续。","twofaccounts.stream.not_readable.reason":"扫描启动失败","twofaccounts.stream.not_readable.solution":"摄像头是否已被占用？请确保没有其他应用正在使用您的摄像头，并再试一次","twofaccounts.stream.no_cam_on_device.reason":"此设备上没有摄像头","twofaccounts.stream.no_cam_on_device.solution":"或许您忘了连接摄像头","twofaccounts.stream.secured_context_required.reason":"需要 secure 字段","twofaccounts.stream.secured_context_required.solution":"扫描需要通过 HTTPS 协议通信。如果您是在电脑上运行 2FAuth 实例，请不要使用除了本地外的其他虚拟主机","twofaccounts.stream.https_required":"摄像机需要 HTTPS","twofaccounts.stream.camera_not_suitable.reason":"已安装的摄像头不适用","twofaccounts.stream.camera_not_suitable.solution":"请使用其他摄像头或更换设备","twofaccounts.stream.stream_api_not_supported.reason":"此浏览器不支持 Stream API","twofaccounts.stream.stream_api_not_supported.solution":"请换用新版浏览器","twofaccounts.confirm.delete":"您确定要删除此账户吗？","twofaccounts.confirm.cancel":"将放弃所有更改，确定要继续吗？","twofaccounts.confirm.discard":"您确定要丢弃此账户吗？","twofaccounts.confirm.discard_all":"您确定要丢弃所有账户吗？","twofaccounts.confirm.discard_duplicates":"您确定要丢弃所有重复账户吗？","twofaccounts.import.import":"导入","twofaccounts.import.to_import":"导入","twofaccounts.import.import_legend":"2FAuth 支持从各类 2FA 应用导入数据。","twofaccounts.import.import_legend_afterpart":"使用这些应用的 “导出” 功能来获取迁移资源，例如二维码或 JSON 文件，然后在 2FAuth 中导入。","twofaccounts.import.upload":"上传","twofaccounts.import.scan":"扫描","twofaccounts.import.supported_formats_for_qrcode_upload":"支持格式：jpg、jpeg、png、bmp、gif、svg 或 webp","twofaccounts.import.supported_formats_for_file_upload":"支持格式：json，2fas 或纯文本","twofaccounts.import.expected_format_for_direct_input":"应为：一个包含 otpauth URI 的列表，每行一条","twofaccounts.import.supported_migration_formats":"支持的迁移格式","twofaccounts.import.qr_code":"二维码","twofaccounts.import.text_file":"文本文件","twofaccounts.import.direct_input":"直接输入","twofaccounts.import.plain_text":"纯文本","twofaccounts.import.parsing_data":"正在解析数据…","twofaccounts.import.issuer":"签发方","twofaccounts.import.imported":"已导入","twofaccounts.import.failure":"失败","twofaccounts.import.x_valid_accounts_found":"找到 :count 个有效账户","twofaccounts.import.submitted_data_parsed_now_accounts_are_awaiting_import":"在导入的数据中找到了下列 2FA 账户，且没有被添加到 2FAuth 过。","twofaccounts.import.use_buttons_to_save_or_discard":"点击亮起的按钮，即可选择丢弃这些账户，或将其保存到您的 2FA 列表中。","twofaccounts.import.import_all":"全部导入","twofaccounts.import.import_this_account":"导入此账户","twofaccounts.import.discard_all":"全部丢弃","twofaccounts.import.discard_duplicates":"丢弃重复项","twofaccounts.import.discard_this_account":"丢弃此账户","twofaccounts.import.generate_a_test_password":"生成测试密码","twofaccounts.import.possible_duplicate":"已存在相同数据的账户","twofaccounts.import.invalid_account":"- 无效账户 -","twofaccounts.import.invalid_service":"- 无效服务 -","twofaccounts.import.do_not_set_password_or_encryption":"如果您需要从其他 2FA 应用导出数据到 2FAuth，请务必在导出前关闭加密保护，否则 2FAuth 将无法解密数据。","validation.accepted":"您必须接受 :attribute。","validation.accepted_if":"当 :other 为 :value 时，必须允许 :attribute 。","validation.active_url":":attribute 不是一个有效的网址。","validation.after":":attribute 必须要晚于 :date。","validation.after_or_equal":":attribute 必须要等于 :date 或更晚。","validation.alpha":":attribute 只能包含字母。","validation.alpha_dash":":attribute 只能包含字母、 数字、减号和下划线。","validation.alpha_num":":attribute 只能包含字母和数字","validation.array":":attribute 必须是一个数组。","validation.before":":attribute 必须要早于 :date。","validation.before_or_equal":":attribute 必须要等于 :date 或更早。","validation.between.array":":attribute 必须只有 :min - :max 个单元。","validation.between.file":":attribute 必须介于 :min - :max KB 之间。","validation.between.numeric":":attribute 必须介于 :min - :max 之间。","validation.between.string":":attribute 必须介于 :min - :max 个字符之间。","validation.boolean":":attribute 必须为布尔值。","validation.confirmed":":attribute 两次输入不一致。","validation.current_password":"密码错误","validation.date":":attribute 不是一个有效的日期。","validation.date_equals":":attribute 必须要等于 :date。","validation.date_format":":attribute 的格式必须为 :format。","validation.declined":"必须拒绝 :attribute. ","validation.declined_if":"当 :other 是 :value 时，:attribute 必须被拒绝.","validation.different":":attribute 和 :other 必须不同。","validation.digits":":attribute 必须是 :digits 位数字。","validation.digits_between":":attribute 必须是介于 :min 和 :max 位的数字。","validation.dimensions":":attribute 图片尺寸不正确。","validation.distinct":":attribute 已经存在。","validation.doesnt_end_with":":attribute 不能以这些值结尾：:values。","validation.doesnt_start_with":":attribute 不能以这些值开头：:values。","validation.email":":attribute 不是一个合法的邮箱。","validation.ends_with":":attribute 必须以 :values 为结尾。","validation.enum":"选中的 :attribute 无效。","validation.exists":":attribute 不存在。","validation.file":":attribute 必须是文件。","validation.filled":":attribute 不能为空。","validation.gt.array":":attribute 必须多于 :value 个元素。","validation.gt.file":":attribute 必须大于 :value KB。","validation.gt.numeric":":attribute 必须大于 :value。","validation.gt.string":":attribute 必须多于 :value 个字符。","validation.gte.array":":attribute 必须多于或等于 :value 个元素。","validation.gte.file":":attribute 必须大于或等于 :value KB。","validation.gte.numeric":":attribute 必须大于或等于 :value。","validation.gte.string":":attribute 必须大于或等于 :value 个字符。","validation.image":":attribute 必须是图片。","validation.in":"已选的属性 :attribute 无效。","validation.in_array":":attribute 必须在 :other 中。","validation.integer":":attribute 必须是整数。","validation.ip":":attribute 必须是正确的 IP 地址。","validation.ipv4":":attribute 必须是正确的 IPv4 地址。","validation.ipv6":":attribute 必须是正确的 IPv6 地址。","validation.json":":attribute 必须是正确的 JSON 字符串。","validation.lt.array":":attribute 必须少于 :value 个元素。","validation.lt.file":":attribute 必须小于 :value KB。","validation.lt.numeric":":attribute 必须小于 :value。","validation.lt.string":":attribute 必须少于 :value 个字符。","validation.lte.array":":attribute 必须少于或等于 :value 个元素。","validation.lte.file":":attribute 必须小于或等于 :value KB。","validation.lte.numeric":":attribute 必须小于或等于 :value。","validation.lte.string":":attribute 必须小于或等于 :value 个字符。","validation.mac_address":":attribute 必须是正确的 MAC 地址。","validation.max.array":":attribute 必须少于 :max 项。","validation.max.file":":attribute 必须小于 :max KB。","validation.max.numeric":":attribute 必须小于 :max。","validation.max.string":":attribute 必须少于 :max 个字符。","validation.max_digits":":attribute 必须少于 :max 位。","validation.mimes":":attribute 必须是一个 :values 类型的文件。","validation.mimetypes":":attribute 必须是一个 :values 类型的文件。","validation.min.array":":attribute 至少有 :min 个单元。","validation.min.file":":attribute 大小不能小于 :min KB。","validation.min.numeric":":attribute 必须大于等于 :min。","validation.min.string":":attribute 至少为 :min 个字符。","validation.min_digits":":attribute 必须多于 :min 位。","validation.multiple_of":":attribute 必须是 :value 的倍数。","validation.not_in":"已选的属性 :attribute 非法。","validation.not_regex":":attribute 的格式错误。","validation.numeric":":attribute 必须是一个数字。","validation.password.letters":":attribute 至少要包含一个字母。","validation.password.mixed":":attribute 至少要包含一个大写字母和一个小写字母。","validation.password.numbers":":attribute 至少要包含一个数字。","validation.password.symbols":":attribute 至少要包含一个符号。","validation.password.uncompromised":"输入的 :attribute 已在数据泄露中出现过。请选择其他的 :attribute。","validation.present":":attribute 必须存在。","validation.prohibited":"已禁止 :attribute 字段。","validation.prohibited_if":"当 :other 为 :value 时，:attribute 字段被禁止。","validation.prohibited_unless":"除非 :other 为 :values，否则 :attribute 字段会被禁止。","validation.prohibits":":attribute 字段禁止出现 :other。","validation.regex":":attribute 格式不正确。","validation.required":":attribute 不能为空。","validation.required_array_keys":":attribute 字段必须包含: :values。","validation.required_if":"当 :other 为 :value 时 :attribute 不能为空。","validation.required_if_accepted":"当 :other 存在时，:attribute 不能为空。","validation.required_unless":"当 :other 不为 :values 时 :attribute 不能为空。","validation.required_with":"当 :values 存在时 :attribute 不能为空。","validation.required_with_all":"当 :values 存在时 :attribute 不能为空。","validation.required_without":"当 :values 不存在时 :attribute 不能为空。","validation.required_without_all":"当 :values 都不存在时 :attribute 不能为空。","validation.same":":attribute 和 :other 必须相同。","validation.size.array":":attribute 必须为 :size 个单元。","validation.size.file":":attribute 大小必须为 :size KB。","validation.size.numeric":":attribute 大小必须为 :size。","validation.size.string":":attribute 必须是 :size 个字符。","validation.starts_with":":attribute 必须以 :values 为开头。","validation.string":":attribute 必须是一个字符串。","validation.timezone":":attribute 必须是一个有效的时区。","validation.unique":":attribute 已经存在。","validation.uploaded":":attribute 上传失败。","validation.url":":attribute 必须是有效的 URL。","validation.uuid":":attribute 必须是有效的 UUID。","validation.single":"当使用 :attribute 时，请求的数据包中只能包含这一种参数。","validation.onlyCustomOtpWithUri":"“uri” 参数必须单独提供，或与 “custom_otp” 参数同时提供。","validation.IsValidRegex":"The :attribute must be a valid regex pattern.","validation.custom.icon.image":"仅支持 jpeg、png、bmp、gif、svg 或 webp 格式。","validation.custom.qrcode.image":"仅支持 jpeg、png、bmp、gif、svg 或 webp 格式。","validation.custom.uri.regex":":attribute 不是有效的 otpauth uri。","validation.custom.otp_type.in":"不支持 :attribute。","validation.custom.email.exists":"未找到与此邮箱匹配的账户。","validation.custom.email.ComplyWithEmailRestrictionPolicy":"此邮箱地址不允许注册","validation.custom.email.IsValidEmailList":"所有邮箱地址必须是有效的，并用管道符隔开","validation.custom.secret.isBase32Encoded":":attribute 必须是 Base32 编码的字符串。","validation.custom.account.regex":":attribute 不能包含冒号。","validation.custom.service.regex":":attribute 不能包含冒号。","validation.custom.label.required":"必须未 url 分配一个标签。","validation.custom.ids.regex":"ID 必须以逗号分隔，且不能以逗号结尾。"};export{t as default};
//# sourceMappingURL=php_zh-Co42ifwQ.js.map
